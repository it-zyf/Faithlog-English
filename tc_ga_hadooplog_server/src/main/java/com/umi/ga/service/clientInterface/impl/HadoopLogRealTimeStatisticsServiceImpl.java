package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.db.annotation.DbSwitch;
import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.dao.DailyAnalysisDao;
import com.umi.ga.analysis.dao.RealTimeStatisticsDao;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.analysis.model.RealTimeStatistics;
import com.umi.ga.common.HttpResult;
import com.umi.ga.cons.FrontEnd;
import com.umi.ga.entitys.*;
import com.umi.ga.service.clientInterface.HadoopLogRealTimeStatisticsService;
import com.umi.ga.utils.ArgumentsConver;
import com.umi.ga.utils.BaseResultUtil;
import com.umi.ga.utils.DateHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * @Author guowenchuang
 * @Date 2020/1/13 19:37
 */
@Service
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogRealTimeStatisticsServiceImpl implements HadoopLogRealTimeStatisticsService {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private RealTimeStatisticsDao realTimeStatisticsDao;

    @Autowired
    private DailyAnalysisDao dailyAnalysisDao;

    @Override
    public HttpResult queryRealTimeOnline(Times time) {
        ListOperations listOperations = redisTemplate.opsForList();
        String now = DateHelper.dateSimpleFormatString(new Date());
        List<RealTimeStatistics> rtList = new LinkedList<>();
        Integer max = 0;
        Double sum = 0D;
        Flag flag = new Flag();
        // 今日
        if (now.equals(time.getStartTime()) || now == time.getStartTime()) {
            rtList = RedisHelper.Instance().getlistByKey(FrontEnd.RTS_NOW);
        } else {
            try {
                rtList = this.realTimeStatisticsDao.selectRealTimeOnline(time);
            } catch (Exception e) {
                e.printStackTrace();
                return BaseResultUtil.resultFail("查询失败", rtList, flag);
            }
        }
        for (RealTimeStatistics rtStatistics : rtList) {
            if (null == rtStatistics) continue;
            sum += rtStatistics.getOnline();
            if (max < rtStatistics.getOnline()) {
                max = rtStatistics.getOnline();
            }
        }
        // sum / rtList.size()
        DecimalFormat df = new DecimalFormat("0.000");
        Double avg = null == rtList || 0 == rtList.size() ? 0D : Double.valueOf(df.format(sum / rtList.size()));
        flag.setMax(max);
        flag.setAvg(avg);
        return BaseResultUtil.resultSuccess("查询成功", rtList, flag);
    }

    @Override
    public HttpResult queryRealTimeStatistics(Times time) {
        ListOperations listOperations = redisTemplate.opsForList();
        String now = DateHelper.dateSimpleFormatString(new Date());
        List<RealTimeStatistics> rtStatisticsList = new LinkedList<>();
        List<RealTimeRetain> rtRetainList = new LinkedList<>();
        RealTimeTotal rtTotal = new RealTimeTotal();
        if (now.equals(time.getStartTime()) || now == time.getStartTime()) {
            rtStatisticsList = RedisHelper.Instance().getlistByKey(FrontEnd.RTS_NOW);
            rtRetainList = RedisHelper.Instance().getlistByKey(FrontEnd.RTRETAIN_NOW);
        } else {
            try {
                rtStatisticsList = this.realTimeStatisticsDao.selectRealTimeStatistics(time);
                rtRetainList = this.realTimeStatisticsDao.selectRealTimeRetain(time);
            } catch (Exception e) {
                e.printStackTrace();
                return BaseResultUtil.resultFail("查询失败", rtStatisticsList, rtRetainList, rtTotal);
            }
        }
        for (RealTimeStatistics realTimeStatistics : rtStatisticsList) {
            if (null == realTimeStatistics) continue;
            // 注册
            rtTotal.setTotalRegister(rtTotal.getTotalRegister() + realTimeStatistics.getRegister());
            // 活跃
            rtTotal.setTotalActive(rtTotal.getTotalActive() + realTimeStatistics.getActive());
            // 首登
            rtTotal.setTotalFirstLogin(rtTotal.getTotalFirstLogin() + realTimeStatistics.getFirstlogin());
            // 付费人数
            rtTotal.setTotalPay(rtTotal.getTotalPay() + realTimeStatistics.getNumofpay());
            // 付费金额
            rtTotal.setTotalPayAmount(rtTotal.getTotalPayAmount().add(realTimeStatistics.getPayamount()));
        }
        RealTimeRetain realTimeRetain = new RealTimeRetain();
        if (null != rtRetainList && 0 != rtRetainList.size()) {
            realTimeRetain = rtRetainList.get(rtRetainList.size() - 1);
        }
        // 昨日首登
        rtTotal.setTotaldayAccount(realTimeRetain.getDayAccount());
        // 今日留存
        rtTotal.setDayRetain(realTimeRetain.getDayRetain());

        return BaseResultUtil.resultSuccess("查询成功", rtStatisticsList, rtRetainList, rtTotal);
    }

    @Override
    public String hiveSelectMaxTime(Times time) {
        return realTimeStatisticsDao.hiveSelectMaxTime(time);
    }

    @Override
    public List<HeartLog> hiveSelectHeartLog(Times time) {
        return realTimeStatisticsDao.hiveSelectHeartLog(time);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String insert(List<RealTimeStatistics> rtList, List<RealTimeRetain> rtRetainList) {
        int rt = 0, rtRetain = 0;
        rt = realTimeStatisticsDao.insertBatchRTStatistics(rtList);
        rtRetain = realTimeStatisticsDao.insertBatchStatisticsRetain(rtRetainList);
        return rt + " : " + rtRetain;
    }

    /**
     * 实时查询 -- 在线账号
     *
     * @param flag
     * @return
     */
    @Override
    public HttpResult hiveRealTimeOnline(Flag flag) {
        String str = flag.getServerId() + "/" + flag.getStartTime() + "/" + FrontEnd.ONLINE;
        HttpResult httpResult = (HttpResult) redisTemplate.opsForValue().get(str);
        if (null != httpResult && httpResult.isState()) return httpResult;
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
        redisTemplate.opsForValue().set(str, new HttpResult(true, "查询成功", onlineList, flag2), 15, TimeUnit.MINUTES);
        return BaseResultUtil.resultSuccess("查询成功", onlineList, flag2);
    }

    /**
     * 实时统计 -- Flag
     *
     * @param flag
     * @return
     */
    @Override
    public HttpResult hiveRealTimeStatistics(Flag flag) {
        String str = flag.getServerId() + "/" + flag.getChannelId() + "/" + flag.getStartTime() + "/" + FrontEnd.STATISTICS;
        HttpResult httpResult = (HttpResult) redisTemplate.opsForValue().get(str);
        if (null != httpResult && httpResult.isState()) return httpResult;

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
                    if (logTime.after(endDate)) break;
                }

                // 活跃
                for (RealTimeStatistics active : activeList) {
                    if (null == active || null == active.getRegister()) continue;
                    Date logTime = sdf2.parse(active.getTimepoint());
                    if (logTime.after(startDate) && !logTime.after(endDate)) {
                        value.setActive(value.getActive() + active.getActive());
                    }
                    if (logTime.after(endDate)) break;
                }

                // 付费人数
                for (RealTimeStatistics payNumber : payNumberList) {
                    if (null == payNumber || null == payNumber.getRegister()) continue;
                    Date logTime = sdf2.parse(payNumber.getTimepoint());
                    if (logTime.after(startDate) && !logTime.after(endDate)) {
                        value.setNumofpay(value.getNumofpay() + payNumber.getNumofpay());
                    }
                    if (logTime.after(endDate)) break;
                }

                // 付费金额
                for (RealTimeStatistics payAmount : payAmountList) {
                    if (null == payAmount || null == payAmount.getRegister()) continue;
                    Date logTime = sdf2.parse(payAmount.getTimepoint());
                    if (logTime.after(startDate) && !logTime.after(endDate)) {
                        value.setPayamount(value.getPayamount().add(payAmount.getPayamount()));
                    }
                    if (logTime.after(endDate)) break;
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
                    if (logTime.after(endDate)) break;
                }
                if (value.getDayRetain() > dayRetain) dayRetain = value.getDayRetain();
                if (value.getDayAccount() >= dayAccount) dayAccount = value.getDayAccount();
                rtRetainList.add(value);
            }
            // 重置数据源为 MySQL
            ThreadContext.setMethodName("");
            rtTotal = realTimeStatisticsDao.selectDailyData(flag);
            rtTotal.setTotaldayAccount(dayAccount);
            rtTotal.setDayRetain(dayRetain);
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", rtList, rtRetainList, rtTotal);
        }
        redisTemplate.opsForValue().set(str, new HttpResult(true, "查询成功", rtList, rtRetainList, rtTotal), 15, TimeUnit.MINUTES);
        return BaseResultUtil.resultSuccess("查询成功", rtList, rtRetainList, rtTotal);
    }
}
