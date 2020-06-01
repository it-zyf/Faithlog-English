package com.umi.ga.schedule;

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
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import com.umi.ga.utils.MapSortUtil;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.*;

@Component
public class FrontEndRealSchedule {

    private final Logger log = Logger.getLogger(this.getClass());

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private HadoopLogStartTimeDisService startTimeDisService;

    @Autowired
    private HadoopLogTimeQuantumService timeQuantumService;

    @Autowired
    private HadoopLogManageService hadoopLogManageService;

    /**
     * 垃圾垃圾
     * @throws Exception
     */
//    @Scheduled(cron = "0 */5 6-23 * * ? ")
    public void startTimeScheduleNow() throws Exception {
        Date now = new Date();
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        // 今天前五分钟
        String startTime = date.format(date.parse(date.format(now)).getTime() - 24 * 60 * 60 * 1000) + " 23:55:00";
        String endTime = dateFormat.format(now);
        Times times = new Times(startTime, endTime, null);
//        HttpResult result = hadoopLogManageService.hiveSelectStartTime(times);
        HttpResult result = hadoopLogManageService.selectStartTimeNow(times);
        ListOperations listOperations = redisTemplate.opsForList();
        listOperations.leftPushAll("startTimeNow", result.getData());
        if (listOperations.size("startTimeNow") > 1) listOperations.trim("startTimeNow", 0, 0);
        List startTimeNow = listOperations.range("startTimeNow", 0, -1);
        System.err.println(startTimeNow.size());
    }

    //    @Scheduled(cron = "0 */5 * * * ? ")
//    @Scheduled(cron = "0 0 2-3 * * ? ")
    public void startTimeSchedule() throws Exception {

//        hadoopLogManageService.hiveSelectStartTime();
        // 查询startTime_distribution中timeDate的字段值（去除重复值），取出最大时间和当前时间进行比较，若小于，则以天为单位迭代出时间日期
        List<Date> dateList = new LinkedList<>();
//        List<StartTimeDistribution> stList = startTimeDisService.selectTimeDate();
        StartTimeDistribution stDistribution = startTimeDisService.selectMaxTimeDate();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        /**
         * 第一次数据注入 -- TODO
         */
//        String maxTimeDate = null == stDistribution.getTimedate() ? "1970-01-01" : stDistribution.getTimedate();
        try {
            String maxTimeDate = stDistribution.getTimedate();
            Date now = sdf.parse(sdf.format(new Date()));
            Date timeDate = sdf.parse(maxTimeDate);
            while (timeDate.before(sdf.parse(sdf.format(now.getTime() - 1)))) {
                timeDate = sdf.parse(sdf.format(timeDate.getTime() + 24 * 60 * 60 * 1000));
                dateList.add(timeDate);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("启动分析 -- 以天为单位分割日期段失败: [ timeDate=" + stDistribution.getTimedate() + " ] " + e.getMessage());
        }

        if (null != dateList && 0 != dateList.size()) {
            for (Date date : dateList) {
                try {
                    Date start = dateFormat.parse(sdf.format(date.getTime() - 24 * 60 * 60 * 1000) + " 23:55:00");
                    Date end = dateFormat.parse(sdf.format(date) + " 23:55:00");
                    Times times = new Times();
                    times.setStartTime(dateFormat.format(start));
                    times.setEndTime(dateFormat.format(end));
                    String startTime;
                    String endTime;
                    Map<String, Integer> map = new LinkedHashMap<>();
                    while (start.before(end)) {
                        endTime = dateFormat.format(start.getTime() + 5 * 60 * 1000);
                        startTime = dateFormat.format(start);
                        start = dateFormat.parse(endTime);
                        map.put(startTime + "/" + endTime, 0);
                    }
                    // 重置数据源
//                ThreadContext.setMethodName("");
                    List<StartRetarder> srList = startTimeDisService.hiveSelectStartTime(times);
//                int count = 0;
//                int count2 = 0;
//                int count3 = 0;
                    for (StartRetarder startRetarder : srList) {
//                    count++;
                        if (startRetarder.getTimes() != null && !"".equals(startRetarder.getTimes())) {
//                        count2++;
                            Date time = dateFormat.parse(startRetarder.getTimes());
                            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                                Date startDate = dateFormat.parse(entry.getKey().split("/")[0]);
                                Date endDate = dateFormat.parse(entry.getKey().split("/")[1]);
                                // TODO
                                if (time.after(startDate) && time.before(endDate)) {
                                    entry.setValue(entry.getValue() + 1);
//                                count3++;
                                    break;
                                }
                            }
                        }
                    }
                    List<StartTimeDistribution> stDisList = new LinkedList<>();
                    // 迭代map集合，map<startTime,count> 放入到List<startRetarder>中 ，并返回
                    for (Map.Entry<String, Integer> entry : map.entrySet()) {
                        stDistribution = new StartTimeDistribution();
                        stDistribution.setTimepoint(entry.getKey().split("/")[1]);
                        stDistribution.setCount(String.valueOf(entry.getValue()));
                        stDistribution.setTimedate(sdf.format(date));
                        stDisList.add(stDistribution);
                    }
                    // 批量插入   ?map
                    int insert = startTimeDisService.insertBatch(stDisList);
                    log.info("启动分析 -- 实时启动数据分析成功 timeDate=" + sdf.format(date) + " startTime = " + insert);
//                    System.err.println("数据分析成功 timeDate=" + sdf.format(date) + " startTime = " + insert);
                } catch (Exception e) {
                    e.printStackTrace();
                    log.error("启动分析 -- 实时启动数据分析失败 : [ timeDate=" + sdf.format(date) + " ] " + e.getMessage());
                }
            }
        }
    }

//    @Scheduled(cron = "0 */30 6-23 * * ? ")
    public void timeQuantumScheduleNow() throws Exception {
        Date date = new Date();
        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
//        listOperations.trim("delayTimeNow", 0, 0);
//        listOperations.trim("ipAddrNow", 0, 0);
//        listOperations.trim("networkNow", 0, 0);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeDateFormat = new SimpleDateFormat("yyyyMMdd");
        Times times = new Times();
        times.setTimes(timeDateFormat.format(date));
//        string starttimesecond = sdf.format(date)+" 00:00:00";
//        string endtimesecond = sdf.format(date)+" 23:59:59";
//        times.setstarttimesecond(starttimesecond);
//        times.setendtimesecond(endtimesecond);

        List<TimeQuantum> tQList = timeQuantumService.hiveSelectTimeQuantumByDay(times);
        // 有序
        Map<String, Integer> delayTimeMap = new LinkedHashMap<>();
        Map<String, Integer> networkMap = new HashMap<>();
        Map<String, Integer> addressMap = new HashMap<>();
        Map<String, Integer> distinctMap = new HashMap<>();

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

        for (TimeQuantum timeQuantum : tQList) {
            if (null == timeQuantum) continue;
            String networkStates = timeQuantum.getNetworkStates() == null || "".equals(timeQuantum.getNetworkStates()) ? "-1" : timeQuantum.getNetworkStates();
            String region = timeQuantum.getRegion() == null || "".equals(timeQuantum.getRegion()) ? "-1" : timeQuantum.getRegion();
            if (!"-1".equals(networkStates))
                if (networkMap.containsKey(networkStates))
                    networkMap.put(networkStates, networkMap.get(networkStates).intValue() + 1);
                else
                    networkMap.put(networkStates, 1);

            if (!"-1".equals(region)) {
                if (!distinctMap.containsKey(timeQuantum.getMacAddr())) {
                    if (addressMap.containsKey(region))
                        addressMap.put(region, addressMap.get(region).intValue() + 1);
                    else
                        addressMap.put(region, 1);
                    distinctMap.put(timeQuantum.getMacAddr(), 1);
                }
            }
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
            dtDis.setTimedate(sdf.format(new Date()));
            delayTimeList.add(dtDis);
        }
        redisTemplate.delete("delayTimeNow");
        redisTemplate.delete("ipAddrNow");
        redisTemplate.delete("networkNow");
        Long delayTimeNowLong = 0L;
        for (DelayTimeDistribution dtDis : delayTimeList) {
            if (null == dtDis) continue;
            delayTimeNowLong = listOperations.rightPush("delayTimeNow", dtDis);
        }
        System.err.println("delayTimeNow: " + delayTimeNowLong);
//        listOperations.leftPushAll("delayTimeNow", delayTimeList);
//        listOperations.leftPushAll("delayTimeNow",delayTimeColl);
//        if (listOperations.size("delayTimeNow") > 1) listOperations.trim("delayTimeNow", 1, -1);

        LinkedList<IPaddrDistribution> addressList = new LinkedList<>();
        for (Map.Entry<String, Integer> entry : MapSortUtil.sortByValue(addressMap).entrySet()) {
            IPaddrDistribution addrDis = new IPaddrDistribution();
            addrDis.setIpaddr(entry.getKey());
            addrDis.setCount(String.valueOf(entry.getValue()));
            addrDis.setTimedate(sdf.format(date));
            addressList.add(addrDis);
        }
        Long ipAddrNowLong = 0L;
        for (IPaddrDistribution ipDis : addressList) {
            if (null == ipDis) continue;
            ipAddrNowLong = listOperations.rightPush("ipAddrNow", ipDis);
        }
        System.err.println("ipAddrNow: " + ipAddrNowLong);
//        listOperations.leftPushAll("ipAddrNow", addressList);
//        if (listOperations.size("ipAddrNow") > 1) listOperations.trim("ipAddrNow", 1, -1);

        LinkedList<NetworkDistribution> networkList = new LinkedList<>();
        for (Map.Entry<String, Integer> entry : networkMap.entrySet()) {
            NetworkDistribution netDis = new NetworkDistribution();
            netDis.setNetworktype(entry.getKey());
            netDis.setCount(String.valueOf(entry.getValue()));
            netDis.setTimedate(sdf.format(date));
            networkList.add(netDis);
        }
        Long networkNowLong = 0L;
        for (NetworkDistribution netDis : networkList) {
            if (null == netDis) continue;
            networkNowLong = listOperations.rightPush("networkNow", netDis);
        }
        System.err.println("networkNow: " + networkNowLong);
//        listOperations.leftPushAll("networkNow", delayTimeList);
//        if (listOperations.size("networkNow") > 1) listOperations.trim("networkNow", 1, -1);

        List<Object> delayTimeNow = listOperations.range("delayTimeNow", 0, -1);
        List<Object> ipAddrNow = listOperations.range("ipAddrNow", 0, -1);
        List<Object> networkNow = listOperations.range("networkNow", 0, -1);
        System.err.println("over");
    }

    //    @Scheduled(cron = "0 */5 * * * ?")
//    @Scheduled(cron = "0 0 2-3 * * ?")
    public void timeQuantumSchedule() throws Exception {
        DelayTimeDistribution dtDistribution = timeQuantumService.selectMaxTimeDateDealyTime();
        if ("0".equals(dtDistribution.getTimedate())) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String yesterday = sdf.format(System.currentTimeMillis() - 24 * 60 * 60 * 1000);
            dtDistribution.setTimedate(yesterday);
        }
//        IPaddrDistribution ipDistribution = timeQuantumService.selectMaxTimeIPaddr();
//        NetworkDistribution netDistribution = timeQuantumService.selectMaxTimeNetwork();
        String delayTimeDate = dtDistribution.getTimedate();
//        String ipAddrTimeDate = ipDistribution.getTimedate();
//        String netTimeDate = netDistribution.getTimedate();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeDateFormat = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<Date> dateList = new LinkedList<>();
        try {
            Date now = sdf.parse(sdf.format(new Date()));
            Date timeDate;
//        if (delayTimeDate.equals(ipAddrTimeDate) && delayTimeDate.equals(netTimeDate)) {
            timeDate = sdf.parse(delayTimeDate);
            while (timeDate.before(sdf.parse(sdf.format(now.getTime() - 1)))) {
                timeDate = sdf.parse(sdf.format(timeDate.getTime() + 24 * 60 * 60 * 1000));
                dateList.add(timeDate);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("启动分析 -- ip、delay、network 以天为单位分隔日期段失败：[ timeDate=" + delayTimeDate + " ] " + e.getMessage());
        }


        if (null != dateList && 0 != dateList.size()) {
            for (Date date : dateList) {
                try {
                    Times times = new Times();
                    times.setTimes(timeDateFormat.format(date));
                    List<TimeQuantum> tQList = timeQuantumService.hiveSelectTimeQuantumByDay(times);

                    // 有序
                    Map<String, Integer> delayTimeMap = new LinkedHashMap<>();
                    Map<String, Integer> networkMap = new HashMap<>();
                    Map<String, Integer> addressMap = new HashMap<>();
                    Map<String, Integer> distinctMap = new HashMap<>();

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

                    for (TimeQuantum timeQuantum : tQList) {
                        if (null == timeQuantum || null == timeQuantum.getMacAddr()) continue;
                        String networkStates = timeQuantum.getNetworkStates() == null || "".equals(timeQuantum.getNetworkStates()) ? "-1" : timeQuantum.getNetworkStates();
                        String region = timeQuantum.getRegion() == null || "".equals(timeQuantum.getRegion()) ? "-1" : timeQuantum.getRegion();
                        if (!"-1".equals(networkStates))
                            if (networkMap.containsKey(networkStates))
                                networkMap.put(networkStates, networkMap.get(networkStates).intValue() + 1);
                            else
                                networkMap.put(networkStates, 1);

                        if (!"-1".equals(region)) {
                            if (!distinctMap.containsKey(timeQuantum.getMacAddr())) {
                                if (addressMap.containsKey(region))
                                    addressMap.put(region, addressMap.get(region).intValue() + 1);
                                else
                                    addressMap.put(region, 1);
                                distinctMap.put(timeQuantum.getMacAddr(), 1);
                            }
                        }
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
                    LinkedList<IPaddrDistribution> addressList = new LinkedList<>();
                    for (Map.Entry<String, Integer> entry : MapSortUtil.sortByValue(addressMap).entrySet()) {
                        IPaddrDistribution addrDis = new IPaddrDistribution();
                        addrDis.setIpaddr(entry.getKey());
                        addrDis.setCount(String.valueOf(entry.getValue()));
                        addrDis.setTimedate(sdf.format(date));
                        addressList.add(addrDis);
                    }
                    LinkedList<NetworkDistribution> networkList = new LinkedList<>();
                    for (Map.Entry<String, Integer> entry : networkMap.entrySet()) {
                        NetworkDistribution netDis = new NetworkDistribution();
                        netDis.setNetworktype(entry.getKey());
                        netDis.setCount(String.valueOf(entry.getValue()));
                        netDis.setTimedate(sdf.format(date));
                        networkList.add(netDis);
                    }
                    // 批量插入 事务管理
                    String str = timeQuantumService.insertBatch(delayTimeList, addressList, networkList);
                    log.info("启动分析 -- ip、delay、network 数据分析成功：[ timeDate=" + sdf.format(date) + " ] delayTime : ipaddr : network = " + str);
//                    System.err.println("数据分析成功 timeDate=" + sdf.format(date) + " delayTime : ipaddr : network = " + str);
                } catch (Exception e) {
                    e.printStackTrace();
                    log.error("启动分析 -- ip、delay、network 数据分析失败：[ timeDate=" + sdf.format(date) + " ] " + e.getMessage());
                }
            }
        }
    }
//    }
}
