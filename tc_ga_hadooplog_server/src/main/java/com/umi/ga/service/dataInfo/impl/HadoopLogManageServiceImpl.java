package com.umi.ga.service.dataInfo.impl;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.*;
import com.umi.ga.analysis.model.DelayTimeDistribution;
import com.umi.ga.analysis.model.IPaddrDistribution;
import com.umi.ga.analysis.model.NetworkDistribution;
import com.umi.ga.analysis.model.StartTimeDistribution;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.StartRetarder;
import com.umi.ga.entitys.TimeQuantum;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.dataInfo.HadoopLogManageService;
import com.umi.ga.service.startTimeDis.HadoopLogStartTimeDisService;
import com.umi.ga.utils.BaseResultUtil;
import com.umi.ga.utils.MapSortUtil;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogManageServiceImpl implements HadoopLogManageService {

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private HadoopLogManageService hadoopLogManageService;

    @Autowired
    private dataInfoDao dataInfo;

    @Autowired
    private StartTimeDistributionDao stDistribution;

    @Autowired
    private DelayTimeDistributionDao dtDistribution;

    @Autowired
    private IPaddrDistributionDao ipAddrDistribution;

    @Autowired
    private NetworkDistributionDao networkDistribution;


    // 日志
    private final Logger log = Logger.getLogger(this.getClass());

    @Autowired
    private HadoopLogStartTimeDisService startTimeDisService;

    /**
     * mysql -- all
     *
     * @param times
     * @return
     */
    @Override
    public HttpResult selectStart(Times times) {
        HttpResult result = new HttpResult(true, "查询成功", null);
        ListOperations listOperations = redisTemplate.opsForList();
        List startTimeNow = listOperations.range("startTimeNow", 0, 0);
        if (null != startTimeNow && 0 != startTimeNow.size()) {
            result.setRow1(startTimeNow.get(0));
        } else {
            HttpResult httpResult = hadoopLogManageService.hiveSelectStartTime(times);
            listOperations.leftPushAll("startTimeNow", httpResult.getData());
            result.setRow1(httpResult.getData());
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyy-MM-dd");
        String timeDate = null;
        try {
            timeDate = sdf.format(sdf.parse(sdf.format(new Date())).getTime() - 1000);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        times.setStartTime(timeDate);
        // 重置数据源
        ThreadContext.setMethodName("");
        String startTime = null;
        try {
            startTime = null != times.getStartTime() ? sdf.format(sdf.parse(times.getStartTime())) : sdf.format(System.currentTimeMillis() - 24 * 60 * 60 * 1000);
            times.setStartTime(startTime);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        result.setRow2(this.selectStartTime(times).getData());
        HttpResult httpResult = this.selectTimeQuantum(times);
        result.setData(httpResult.getData());
        return result;
    }

    /**
     * mysql -- startTime_distribution
     *
     * @param times
     * @return
     */
    @Override
    public HttpResult selectStartTime(Times times) {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        if (times.getStartTime().equals((sdf.format(date)))) {
            ListOperations listOperations = redisTemplate.opsForList();
            List startTimeNow = listOperations.range("startTimeNow", 0, 0);
            if (null != startTimeNow && 0 != startTimeNow.size()) {
                return BaseResultUtil.resultSuccess("查询成功", startTimeNow.get(0));
            }
        }
        List<StartTimeDistribution> stDisList = stDistribution.selectStartTime(times);
        return BaseResultUtil.resultSuccess("查询成功", stDisList);
    }

    /**
     * mysql -- delayTime_distribution、ipAddr_distribution、network_distribution
     *
     * @param times
     * @return
     */
    @Override
    @Transactional
    public HttpResult selectTimeQuantum(Times times) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Map<String, List> tqMap = new HashMap<>();
        try {
            String now = sdf.format(sdf.parse(sdf.format(new Date())));
            Date startTime = sdf.parse(times.getStartTimeSecond());
            Date endTime = sdf.parse(times.getEndTimeSecond());
            List<Times> timeDateList = new LinkedList<>();
            String timeDate = sdf.format(startTime);
            Times date = new Times();
            date.setTimes(sdf.format(startTime));
            timeDateList.add(date);
            while (startTime.before(endTime)) {
                timeDate = sdf.format(sdf.parse(sdf.format(startTime.getTime() + 24 * 60 * 60 * 1000)));
                startTime = sdf.parse(timeDate);
                date = new Times();
                date.setTimes(timeDate);
                timeDateList.add(date);
            }

            if (timeDate.equals(now) && null != timeDateList && timeDateList.size() == 1) {
                ListOperations listOperations = redisTemplate.opsForList();
                List<DelayTimeDistribution> delayTimeNow = listOperations.range("delayTimeNow", 0, -1);
                List<IPaddrDistribution> ipAddrNow = listOperations.range("ipAddrNow", 0, -1);
                List<NetworkDistribution> networkNow = listOperations.range("networkNow", 0, -1);

                tqMap.put("coldStartTime", delayTimeNow);
                tqMap.put("networkStates", networkNow);
                tqMap.put("region", ipAddrNow);

                return BaseResultUtil.resultSuccess("查询成功", tqMap);
            }

            List<DelayTimeDistribution> dtDisList = dtDistribution.selectListByTimeDate(timeDateList);
            List<IPaddrDistribution> addrList = ipAddrDistribution.selectListByTimeDate(timeDateList);
            List<NetworkDistribution> netList = networkDistribution.selectListByTimeDate(timeDateList);
            if (timeDate.equals(now)) {
                ListOperations listOperations = redisTemplate.opsForList();
                List<DelayTimeDistribution> delayTimeNow = listOperations.range("delayTimeNow", 0, -1);
                List<IPaddrDistribution> ipAddrNow = listOperations.range("ipAddrNow", 0, -1);
                List<NetworkDistribution> networkNow = listOperations.range("networkNow", 0, -1);
                if (null != delayTimeNow && 0 != delayTimeNow.size() &&
                        null != delayTimeNow && 0 != delayTimeNow.size() &&
                        null != delayTimeNow && 0 != delayTimeNow.size()) {
                    for (DelayTimeDistribution dtDis : dtDisList) {
                        if (null == dtDis) continue;
                        for (DelayTimeDistribution dtDisNow : delayTimeNow) {
                            if (null == dtDisNow) continue;
                            if (dtDis.getTimequantum().equals(dtDisNow.getTimequantum())) {
                                Integer count = Integer.valueOf(dtDis.getCount()) + Integer.valueOf(dtDisNow.getCount());
                                dtDis.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }

                    for (IPaddrDistribution addrDis : addrList) {
                        if (null == addrDis) continue;
                        for (IPaddrDistribution addrDisNow : ipAddrNow) {
                            if (null == addrDisNow) continue;
                            if (addrDis.getIpaddr().equals(addrDisNow.getIpaddr())) {
                                Integer count = Integer.valueOf(addrDis.getCount()) + Integer.valueOf(addrDisNow.getCount());
                                addrDis.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }

                    for (NetworkDistribution netDis : netList) {
                        if (null == netDis) continue;
                        for (NetworkDistribution netDisNow : networkNow) {
                            if (null == netDisNow) continue;
                            if (netDis.getNetworktype().equals(netDisNow.getNetworktype())) {
                                Integer count = Integer.valueOf(netDis.getCount()) + Integer.valueOf(netDisNow.getCount());
                                netDis.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }
                } else {
                    HttpResult httpResult = hadoopLogManageService.hiveSelectTimeQuantum(times);
                    return httpResult;
                }
            }

            tqMap.put("coldStartTime", dtDisList);
            tqMap.put("networkStates", netList);
            tqMap.put("region", addrList);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return BaseResultUtil.resultSuccess("查询成功", tqMap);
    }

    @Override
    public HttpResult test2() {
        return BaseResultUtil.resultSuccess("test2");
    }

    /**
     * 当前日期缓存 mysql
     *
     * @param times
     * @return
     */
    @Override
    public HttpResult selectStartTimeNow(Times times) {
        // 有序
        Map<String, Integer> map = new LinkedHashMap<>();
        List<StartTimeDistribution> stDisList = new LinkedList<>();
        String startTime = times.getStartTime();
        String endTime = times.getEndTime();
        try {
//            List<startRetarder> srList = dataInfo.hiveSelectStartTime(times);
            List<StartRetarder> srList = stDistribution.selectStartTimeNow(times);
            // 将startTime、endTime 转换为日期类型
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date start = sdf.parse(startTime);
            Date end = sdf.parse(endTime);

            // 从startTime开始累加，每次五分钟，当大于end累加结束。放入到Map集合中，key为startTime/endTime,value默认为0
            // 一天共288个时间段
            while (true) {
                endTime = sdf.format(start.getTime() + 5 * 60 * 1000);
                startTime = sdf.format(start);
                start = sdf.parse(endTime);
                if (start.after(end))
                    break;
                map.put(startTime + "/" + endTime, 0);
            }
            // 转换成日期函数判断区间，value += 1
            for (StartRetarder startRetarder : srList) {
                if (startRetarder.getTimes() != null && !"".equals(startRetarder.getTimes())) {
                    Date str = sdf.parse(startRetarder.getTimes());
                    for (Map.Entry<String, Integer> entry : map.entrySet()) {
                        Date startDate = sdf.parse(entry.getKey().split("/")[0]);
                        Date endDate = sdf.parse(entry.getKey().split("/")[1]);
                        if (str.after(startDate) && str.before(endDate)) {
                            entry.setValue(entry.getValue() + 1);
                            break;
                        }
                    }
                }
            }
            int count = 0;
            // 迭代map集合，map<startTime,count> 放入到List<startRetarder>中 ，并返回
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                StartTimeDistribution stDistribution = new StartTimeDistribution();
                stDistribution.setTimepoint(entry.getKey().split("/")[1]);
                stDistribution.setCount(String.valueOf(entry.getValue()));
                stDisList.add(stDistribution);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", stDisList);
        }
        return BaseResultUtil.resultSuccess("查询成功", stDisList);
    }

    @Override
    public StartRetarder hiveSelectCount(Times times) {
        StartRetarder sr = dataInfo.hiveSelectCount(times);
        return sr;
    }

    /**
     * 前端实时页面 -- 总查询   hive
     *
     * @param times
     * @return
     */
    @Override
    public HttpResult hiveSelectStart(Times times) {
        HttpResult result = new HttpResult(true, "查询成功", null);

        // 启动时刻图（今天 ） startTime - endTime
        HttpResult resultH = this.hiveSelectStartTime(times);
        result.setRow1(resultH.getData());

        // 启动时刻图（昨天） startTime - endTime
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String startTime;
        String endTime;
        try {
            Date start = sdf.parse(times.getStartTime());
            Date end = sdf.parse(times.getEndTime());
            startTime = sdf.format(start.getTime() - 24 * 60 * 60 * 1000);
            endTime = sdf.format(end.getTime() - 24 * 60 * 60 * 1000);
            Times t = new Times();
            t.setStartTime(startTime);
            t.setEndTime(endTime);
            resultH = this.hiveSelectStartTime(t);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        result.setRow2(resultH.getData());

        // 延迟时间、ip分布、网络分布
        resultH = this.hiveSelectTimeQuantum(times);
        result.setData(resultH.getData());
        return result;
    }

    /**
     * 启动时刻图
     *
     * @param times
     * @return
     */
    @Override
    public HttpResult hiveSelectStartTime(Times times) {
        // 有序
        Map<String, Integer> map = new LinkedHashMap<>();
        List<StartTimeDistribution> stDisList = new LinkedList<>();
        String startTime = times.getStartTime();
        String endTime = times.getEndTime();
        try {
            List<StartRetarder> srList = dataInfo.hiveSelectStartTime(times);
            // 将startTime、endTime 转换为日期类型
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date start = sdf.parse(startTime);
            Date end = sdf.parse(endTime);

            // 从startTime开始累加，每次五分钟，当大于end累加结束。放入到Map集合中，key为startTime/endTime,value默认为0
            // 一天共288个时间段
            while (true) {
                endTime = sdf.format(start.getTime() + 5 * 60 * 1000);
                startTime = sdf.format(start);
                start = sdf.parse(endTime);
                if (start.after(end))
                    break;
                map.put(startTime + "/" + endTime, 0);
            }
            // 转换成日期函数判断区间，value += 1
            for (StartRetarder startRetarder : srList) {
                if (startRetarder.getTimes() != null && !"".equals(startRetarder.getTimes())) {
                    Date str = sdf.parse(startRetarder.getTimes());
                    for (Map.Entry<String, Integer> entry : map.entrySet()) {
                        Date startDate = sdf.parse(entry.getKey().split("/")[0]);
                        Date endDate = sdf.parse(entry.getKey().split("/")[1]);
                        if (str.after(startDate) && str.before(endDate)) {
                            entry.setValue(entry.getValue() + 1);
                            break;
                        }
                    }
                }
            }
            int count = 0;
            // 迭代map集合，map<startTime,count> 放入到List<startRetarder>中 ，并返回
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                StartTimeDistribution stDistribution = new StartTimeDistribution();
                stDistribution.setTimepoint(entry.getKey().split("/")[1]);
                stDistribution.setCount(String.valueOf(entry.getValue()));
                stDisList.add(stDistribution);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", stDisList);
        }
        return BaseResultUtil.resultSuccess("查询成功", stDisList);
    }

    /**
     * 延迟时间、ip分布、网络分布
     *
     * @param times
     * @return
     */
    @Override
    public HttpResult hiveSelectTimeQuantum(Times times) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        Map<String, LinkedList> tQMap = new HashMap<String, LinkedList>();
        // 有序
        Map<String, Integer> delayTimeMap = new LinkedHashMap<>();
        Map<String, Integer> networkMap = new HashMap<>();
        Map<String, Integer> addressMap = new HashMap<>();

        // 有序 -- TODO
        delayTimeMap.put("0-400", 0);
        delayTimeMap.put("401-600", 0);
        delayTimeMap.put("601-800", 0);
        delayTimeMap.put("801-1000", 0);
        delayTimeMap.put("1001-1200", 0);
        delayTimeMap.put("1201-1400", 0);
        delayTimeMap.put("1401-1700", 0);
        delayTimeMap.put("1701-2000", 0);
        delayTimeMap.put("2001-2500", 0);
        delayTimeMap.put("2501-3000", 0);
        delayTimeMap.put("3001-4000", 0);
        delayTimeMap.put("4001-5000", 0);
        delayTimeMap.put(">5000", 0);
        try {
            List<TimeQuantum> tQList = dataInfo.hiveSelectTimeQuantum(times);
            for (TimeQuantum timeQuantum : tQList) {
                if (null == timeQuantum) continue;
                String networkStates = timeQuantum.getNetworkStates() == null || "".equals(timeQuantum.getNetworkStates()) ? "-1" : timeQuantum.getNetworkStates();
                String region = timeQuantum.getRegion() == null || "".equals(timeQuantum.getRegion()) ? "-1" : timeQuantum.getRegion();
                if (!"-1".equals(networkStates))
                    if (networkMap.containsKey(networkStates))
                        networkMap.put(networkStates, networkMap.get(networkStates).intValue() + 1);
                    else
                        networkMap.put(networkStates, 1);

                if (!"-1".equals(region))
                    if (addressMap.containsKey(region))
                        addressMap.put(region, addressMap.get(region).intValue() + 1);
                    else
                        addressMap.put(region, 1);

                if (timeQuantum.getColdStartTime() != null && !"".equals(timeQuantum.getColdStartTime())) {
                    Integer runTime = Integer.valueOf(timeQuantum.getColdStartTime());
                    if (runTime >= 0 && runTime <= 400)
                        delayTimeMap.put("0-400", delayTimeMap.get("0-400").intValue() + 1);
                    else if (runTime >= 401 && runTime <= 600)
                        delayTimeMap.put("401-600", delayTimeMap.get("401-600").intValue() + 1);
                    else if (runTime >= 601 && runTime <= 800)
                        delayTimeMap.put("601-800", delayTimeMap.get("601-800").intValue() + 1);
                    else if (runTime >= 801 && runTime <= 1000)
                        delayTimeMap.put("801-1000", delayTimeMap.get("801-1000").intValue() + 1);
                    else if (runTime >= 1001 && runTime <= 1200)
                        delayTimeMap.put("1001-1200", delayTimeMap.get("1001-1200").intValue() + 1);
                    else if (runTime >= 1201 && runTime <= 1400)
                        delayTimeMap.put("1201-1400", delayTimeMap.get("1201-1400").intValue() + 1);
                    else if (runTime >= 1401 && runTime <= 1700)
                        delayTimeMap.put("1401-1700", delayTimeMap.get("1401-1700").intValue() + 1);
                    else if (runTime >= 1701 && runTime <= 2000)
                        delayTimeMap.put("1701-2000", delayTimeMap.get("1701-2000").intValue() + 1);
                    else if (runTime >= 2001 && runTime <= 2500)
                        delayTimeMap.put("2001-2500", delayTimeMap.get("2001-2500").intValue() + 1);
                    else if (runTime >= 2501 && runTime <= 3000)
                        delayTimeMap.put("2501-3000", delayTimeMap.get("2501-3000").intValue() + 1);
                    else if (runTime >= 3001 && runTime <= 4000)
                        delayTimeMap.put("3001-4000", delayTimeMap.get("3001-4000").intValue() + 1);
                    else if (runTime >= 4001 && runTime <= 5000)
                        delayTimeMap.put("4001-5000", delayTimeMap.get("4001-5000").intValue() + 1);
                    else if (runTime > 5000)
                        delayTimeMap.put(">5000", delayTimeMap.get(">5000").intValue() + 1);
                }
            }

            // 转换为list
            LinkedList<DelayTimeDistribution> delayTimeList = new LinkedList<>();
            for (Map.Entry<String, Integer> entry : delayTimeMap.entrySet()) {
                DelayTimeDistribution dtDis = new DelayTimeDistribution();
                dtDis.setTimequantum(entry.getKey());
                dtDis.setCount(String.valueOf(entry.getValue()));
                dtDis.setTimedate(sdf.format(date));
                delayTimeList.add(dtDis);
            }
            LinkedList<NetworkDistribution> networkList = new LinkedList<>();
            for (Map.Entry<String, Integer> entry : networkMap.entrySet()) {
                NetworkDistribution netDis = new NetworkDistribution();
                netDis.setNetworktype(entry.getKey());
                netDis.setCount(String.valueOf(entry.getValue()));
                netDis.setTimedate(sdf.format(date));
                networkList.add(netDis);
            }
            LinkedList<IPaddrDistribution> addressList = new LinkedList<>();
            for (Map.Entry<String, Integer> entry : MapSortUtil.sortByValue(addressMap).entrySet()) {
                IPaddrDistribution addrDis = new IPaddrDistribution();
                addrDis.setIpaddr(entry.getKey());
                addrDis.setCount(String.valueOf(entry.getValue()));
                addrDis.setTimedate(sdf.format(date));
                addressList.add(addrDis);
            }

            tQMap.put("coldStartTime", delayTimeList);
            tQMap.put("networkStates", networkList);
            tQMap.put("region", addressList);
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", tQMap);
        }
        return BaseResultUtil.resultSuccess("查询成功", tQMap);
    }
}