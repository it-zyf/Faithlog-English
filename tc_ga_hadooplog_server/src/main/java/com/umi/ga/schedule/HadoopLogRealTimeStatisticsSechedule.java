package com.umi.ga.schedule;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.dao.RealTimeStatisticsDao;
import com.umi.ga.analysis.model.RealTimeStatistics;
import com.umi.ga.common.HttpResult;
import com.umi.ga.cons.FrontEnd;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.RealTimeRetain;
import com.umi.ga.entitys.RealTimeTotal;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.clientInterface.HadoopLogDailyAnalysisService;
import com.umi.ga.service.clientInterface.HadoopLogRealTimeStatisticsService;
import com.umi.ga.utils.ArgumentsConver;
import com.umi.ga.utils.BaseResultUtil;
import com.umi.ga.utils.DateHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * @Author guowenchuang
 * @Date 2020/5/19 14:08
 */
@Component
public class HadoopLogRealTimeStatisticsSechedule {
    private Logger scheduleLog = LoggerFactory.getLogger("scheduleLog");

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private HadoopLogDailyAnalysisService dailyAnalysisService;

    @Autowired
    private RealTimeStatisticsDao realTimeStatisticsDao;

    /**
     * 实时统计 -- 垃圾
     */
    @Scheduled(cron = " * */15 * * * ?")
    public void realTimeOnlineSchedule() throws Exception {
        String now = DateHelper.dateSimpleFormatString(new Date());
        String yesterday = DateHelper.dateIncrease(now, -1L);
        List<Flag> serverList = dailyAnalysisService.selectServerAll();
        List<Flag> channelList = dailyAnalysisService.selectChannelAll();
        String server = strcat(serverList);
        String channel = strcat(channelList);
        HttpResult nowResult = queryOnline(new Flag(now, now, server, channel));
        redisTemplate.opsForValue().set(server + "/" + now + "/" + FrontEnd.ONLINE, nowResult, 20, TimeUnit.MINUTES);

        HttpResult yesterdayResult = queryOnline(new Flag(yesterday, yesterday, server, channel));
        redisTemplate.opsForValue().set(server + "/" + yesterday + "/" + FrontEnd.ONLINE, yesterdayResult, 20, TimeUnit.MINUTES);

        HttpResult nowFiveResult = queryStatistics(new Flag(now, now, server, channel));
        redisTemplate.opsForValue().set(server + "/" + channel + "/" + now + "/" + FrontEnd.STATISTICS, nowFiveResult, 20, TimeUnit.MINUTES);

        HttpResult yesterdayFiveResult = queryStatistics(new Flag(yesterday, yesterday, server, channel));
        redisTemplate.opsForValue().set(server + "/" + channel + "/" + yesterday + "/" + FrontEnd.STATISTICS, yesterdayFiveResult, 20, TimeUnit.MINUTES);
    }

    public HttpResult queryOnline(Flag flag) {
        ThreadContext.setMethodName("hive");
        Map<String, RealTimeStatistics> map = new HashMap<>();
        List<RealTimeStatistics> onlineList = new ArrayList<>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        String startTime = flag.getStartTime() + " 00:00:00";
        String endTime;
        // 当日
        if (flag.getEndTime().equals(DateHelper.dateSimpleFormatString(new Date()))) {
            endTime = sdf.format(System.currentTimeMillis() - 1.5 * 60 * 60 * 1000);
        } else {
            endTime = DateHelper.dateIncrease(flag.getEndTime(), 1L) + " 00:00:00";
        }
        flag = ArgumentsConver.converServerIdAndChannelId(flag);
        map = DateHelper.dateSplitByMinute2(new Times(startTime, endTime), 5L);
        Flag flag2 = new Flag();
        Integer sum = 0;
        Integer max = 0;
        try {
            List<RealTimeStatistics> realTimeList = realTimeStatisticsDao.hiveRealTimeOnline(flag);
            if (null != map && 0 != map.size()) {
                for (Map.Entry<String, RealTimeStatistics> entry : map.entrySet()) {
                    RealTimeStatistics value = entry.getValue();
                    value.setTimedate(entry.getKey().split("/")[0].substring(0, 10));
                    value.setTimepoint(entry.getKey().split("/")[0]);

                    Date startDate = sdf.parse(entry.getKey().split("/")[0]);
                    Date endDate = sdf.parse(entry.getKey().split("/")[1]);
                    for (RealTimeStatistics realTime : realTimeList) {
                        if (null == realTime || null == realTime.getTimepoint()) continue;
                        Date logTime = sdf2.parse(realTime.getTimepoint());
                        if (logTime.after(startDate) && !logTime.after(endDate)
                                && realTime.getOnline() > value.getOnline()) value.setOnline(realTime.getOnline());
                        if (logTime.after(endDate)) {
                            sum += value.getOnline();
                            if (value.getOnline() > max) max = value.getOnline();
                            break;
                        }
                    }
                    onlineList.add(value);
                }
            }
            // max mvg
            // sum / map.size()
            DecimalFormat df = new DecimalFormat("0.000");
            Double avg = null == map || 0 == map.size() ? 0D : Double.valueOf(df.format(sum / map.size()));
            flag2.setMax(max);
            flag2.setAvg(avg);
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", onlineList, flag2);
        }
        return BaseResultUtil.resultSuccess("查询成功", onlineList, flag2);
    }

    private String strcat(List<Flag> list) {
        String str = "";
        for (Flag flag : list) {
            str = str + "," + flag.getFlag();
        }
        return str.replaceFirst(",", "");
    }

    public HttpResult queryStatistics(Flag flag) throws Exception {
        ThreadContext.setMethodName("hive");
        List<RealTimeStatistics> rtList = new ArrayList<>();
        List<RealTimeRetain> rtRetainList = new ArrayList<>();

        Map<String, RealTimeStatistics> map = new HashMap<>();
        Map<String, RealTimeRetain> retainMap = new HashMap<>();

        List<RealTimeStatistics> registerList = new ArrayList<>();
        List<RealTimeStatistics> activeList = new ArrayList<>();
        List<RealTimeStatistics> payNumberList = new ArrayList<>();
        List<RealTimeStatistics> payAmountList = new ArrayList<>();
        List<RealTimeRetain> retainList = new ArrayList<>();

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        SimpleDateFormat sdf3 = new SimpleDateFormat("yyyy-MM-dd HH");
        String startTime = flag.getStartTime() + " 00:00:00";
        String endTime;
        // 当日
        if (flag.getEndTime().equals(DateHelper.dateSimpleFormatString(new Date()))) {
            endTime = sdf.format(System.currentTimeMillis() - 1.5 * 60 * 60 * 1000);
        } else {
            endTime = DateHelper.dateIncrease(flag.getEndTime(), 1L) + " 00:00:00";
        }
        flag = ArgumentsConver.converServerIdAndChannelId(flag);
        map = DateHelper.dateSplitByMinute2(new Times(startTime, endTime), 5L);
        //
        RealTimeTotal rtTotal = new RealTimeTotal();
        try {
            // 注册
            registerList = realTimeStatisticsDao.selectRealTimeRegister(flag);
            // 活跃
            activeList = realTimeStatisticsDao.selectRealTimeActive(flag);
            // 付费账号
            payNumberList = realTimeStatisticsDao.selectRealTimePayNumber(flag);
            // 付费金额
            payAmountList = realTimeStatisticsDao.selectRealTimePayAmount(flag);

            // 注册 活跃 付费人数 付费金额 288
            for (Map.Entry<String, RealTimeStatistics> entry : map.entrySet()) {
                RealTimeStatistics value = entry.getValue();
                value.setTimedate(entry.getKey().split("/")[0].substring(0, 10));
                value.setTimepoint(entry.getKey().split("/")[0]);

                Date startDate = sdf.parse(entry.getKey().split("/")[0]);
                Date endDate = sdf.parse(entry.getKey().split("/")[1]);
                // 注册
                for (RealTimeStatistics register : registerList) {
                    if (null == register || null == register.getRegister()) continue;
                    Date logTime = sdf2.parse(register.getTimepoint());
                    if (logTime.after(startDate) && !logTime.after(endDate)) {
                        value.setRegister(value.getRegister() + register.getRegister());
                    }
                }

                // 活跃
                for (RealTimeStatistics active : activeList) {
                    if (null == active || null == active.getRegister()) continue;
                    Date logTime = sdf2.parse(active.getTimepoint());
                    if (logTime.after(startDate) && !logTime.after(endDate)) {
                        value.setActive(value.getActive() + active.getActive());
                    }
                }

                // 付费人数
                for (RealTimeStatistics payNumber : payNumberList) {
                    if (null == payNumber || null == payNumber.getRegister()) continue;
                    Date logTime = sdf2.parse(payNumber.getTimepoint());
                    if (logTime.after(startDate) && !logTime.after(endDate)) {
                        value.setNumofpay(value.getNumofpay() + payNumber.getNumofpay());
                    }
                }

                // 付费金额
                for (RealTimeStatistics payAmount : payAmountList) {
                    if (null == payAmount || null == payAmount.getRegister()) continue;
                    Date logTime = sdf2.parse(payAmount.getTimepoint());
                    if (logTime.after(startDate) && !logTime.after(endDate)) {
                        value.setPayamount(value.getPayamount().add(payAmount.getPayamount()));
                    }
                }
                rtList.add(value);
            }

            // 实时留存
            retainList = realTimeStatisticsDao.selectRealTimeRetainLast(flag);
            Integer dayRetain = 0, dayAccount = 0;
            retainMap = DateHelper.dateSplitByHour(new Times(startTime, endTime), 1L);
            for (Map.Entry<String, RealTimeRetain> entry : retainMap.entrySet()) {
                RealTimeRetain value = entry.getValue();
                value.setTimeDate(entry.getKey().split("/")[0].substring(0, 10));
                value.setTimePoint(entry.getKey().split("/")[1]);

                Date startDate = sdf.parse(entry.getKey().split("/")[0]);
                Date endDate = sdf.parse(entry.getKey().split("/")[1]);
                for (RealTimeRetain retain : retainList) {
                    if (null == retain || null == retain.getDayRetain()) continue;
                    Date logTime = sdf3.parse(retain.getTimePoint());
                    if (logTime.after(startDate) && !logTime.after(endDate)) {
                        value.setDayRetain(value.getDayRetain() + retain.getDayRetain());
                        value.setDayAccount(retain.getDayAccount());
                    }
                }
                if (value.getDayRetain() > dayRetain) dayRetain = value.getDayRetain();
                if (value.getDayAccount() >= dayAccount) dayAccount = value.getDayAccount();
                rtRetainList.add(value);
            }
            //
            ThreadContext.setMethodName("");
            rtTotal = realTimeStatisticsDao.selectDailyData(flag);
            rtTotal.setTotaldayAccount(dayAccount);
            rtTotal.setDayRetain(dayRetain);
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", rtList, rtRetainList, rtTotal);
        }
        return BaseResultUtil.resultSuccess("查询成功", rtList, rtRetainList, rtTotal);
    }

}

