//package com.umi.ga.runner;
//
//import com.umi.ga.analysis.model.DailyAnalysis;
//import com.umi.ga.analysis.model.RealTimeStatistics;
//import com.umi.ga.entitys.*;
//import com.umi.ga.service.clientInterface.HadoopLogDailyAnalysisService;
//import com.umi.ga.service.clientInterface.HadoopLogPayForAnalysisService;
//import com.umi.ga.service.clientInterface.HadoopLogRealTimeStatisticsService;
//import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
//import com.umi.ga.utils.DateHelper;
//import org.apache.log4j.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.stereotype.Component;
//
//import java.math.BigDecimal;
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.util.*;
//
///**
// * @Author guowenchuang
// * @Date 2020/1/11 16:09
// */
//@Component
//public class RealTimeStatisticsRunner2 implements ApplicationRunner {
//
//    //
//    private final Logger log = Logger.getLogger(this.getClass());
//
//    @Autowired
//    private HadoopLogRealTimeStatisticsService realTimeStatisticsService;
//
//    @Autowired
//    private HadoopLogTimeQuantumService timeQuantumService;
//
//    @Autowired
//    private HadoopLogDailyAnalysisService dailyAnalysisService;
//
//    @Autowired
//    private HadoopLogPayForAnalysisService payForAnalysisService;
//
//    /**
//     * Callback used to run the bean.
//     *
//     * @param args incoming application arguments
//     * @throws Exception on error
//     */
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        List<Times> timeDateList = timeQuantumService.selectTableByColumn(new tableDate("realTime_statistics", "timeDate", null, null));
//        List<Flag> serverList = new LinkedList<>();
//        List<Flag> channelList = new LinkedList<>();
//        for (Times time : timeDateList) {
//            if (null == time) continue;
//
//            // 有序
//            Map<String, RealTimeStatistics> map = new LinkedHashMap<>();
////                String startTime = DateHelper.dateIncrease(time.getTimes(), -1L) + " 23:55:00";
////                String endTime = time.getTimes() + " 23:55:00";
//            String startTime = time.getTimes() + " 00:00:00";
//            String endTime = DateHelper.dateIncrease(time.getTimes(), 1L) + " 00:00:00";
//            Date start = null;
//            try {
//                start = sdf.parse(startTime);
//                Date end = sdf.parse(endTime);
//
//                // 从startTime开始累加，每次五分钟，当大于end累加结束。放入到Map集合中，key为startTime/endTime,value默认为0
//                // 一天共288个时间段
//                while (true) {
//                    endTime = sdf.format(start.getTime() + 5 * 60 * 1000);
//                    startTime = sdf.format(start);
//                    start = sdf.parse(endTime);
//                    if (start.after(end))
//                        break;
//                    map.put(startTime + "/" + endTime, new RealTimeStatistics());
//                }
//            } catch (ParseException e) {
//                e.printStackTrace();
//                log.error("实时统计 -- 以五分钟为间隔分割时间失败：[ timeDate=" + time.getTimes() + " ] " + e.getMessage());
//            }
//
//            DailyAnalysis dailyAnalysis = new DailyAnalysis();
//            dailyAnalysis.setServerId(null);
//            dailyAnalysis.setChannelId("0");
//            dailyAnalysis.setTimedate(time.getTimes());
//
//            // 心跳
//            List<HeartLog> heartLogList = realTimeStatisticsService.hiveSelectHeartLog(time);
//
//            // 注册
//            List<Flag> registerList = new LinkedList<>();
//            registerList = dailyAnalysisService.hiveSelectRegisterList(dailyAnalysis);
//
//            // 活跃
//            List<Flag> activeList = new LinkedList<>();
//            activeList = dailyAnalysisService.hiveSelectActiveList2(dailyAnalysis);
//
//            // 今日首登
//            List<Flag> firstLoginList = new LinkedList<>();
//            firstLoginList = dailyAnalysisService.hiveSelectFirstLoginList(dailyAnalysis);
//
//            // 付费账号 -- 集合
//            List<Flag> payList = new LinkedList<>();
//            payList = payForAnalysisService.hiveSelectPayList(dailyAnalysis);
//            // 付费金额 -- 集合
//            List<Flag> payAmountList = new LinkedList<>();
//            payAmountList = payForAnalysisService.hiveSelectPayAmountList(dailyAnalysis);
//
//            // 时间点 -- 288
//            for (Map.Entry<String, RealTimeStatistics> entry : map.entrySet()) {
//                // value
//                RealTimeStatistics rt = new RealTimeStatistics();
//                entry.setValue(rt);
//                Date startDate = sdf.parse(entry.getKey().split("/")[0]);
//                Date endDate = sdf.parse(entry.getKey().split("/")[1]);
//                // 心跳 -- 在线账号
//                for (HeartLog heartLog : heartLogList) {
//                    if (null == heartLog || null == heartLog.getLogTime()) continue;
//                    Date logTime = sdf.parse(DateHelper.dateConver(heartLog.getLogTime()));
//                    if (logTime.after(startDate) && logTime.before(endDate)) {
//                        Integer count = Integer.valueOf((heartLog.getOnlinePlayerCount()));
//                        if (count > rt.getOnline()) {
//                            rt.setOnline(count);
//                        }
////                            entry.setValue(rt);
//                        break;
//                    }
//                }
//
//                // 注册
//                for (Flag register : registerList) {
//                    if (null == register || null == register.getTime()) continue;
//                    // 将时间戳转换为日期
//                    Date logTime = sdf.parse(DateHelper.dateConver(register.getTime()));
//                    if (logTime.after(startDate) && logTime.before(endDate)) {
//                        rt.setRegister(rt.getRegister() + 1);
////                            entry.setValue(rt);
//                    }
//                    if (logTime.after(endDate)) break;
//                }
//
//                // 活跃
//                for (Flag active : activeList) {
//                    if (null == active || null == active.getTime()) continue;
//                    Date logTime = sdf.parse(DateHelper.dateConver(active.getTime()));
//                    if (logTime.after(startDate) && logTime.before(endDate)) {
//                        rt.setActive(rt.getActive() + 1);
////                            entry.setValue(rt);
//                    }
//                    if (logTime.after(endDate)) break;
//                }
//
//                // 首登
//                for (Flag firstLogin : firstLoginList) {
//                    if (null == firstLogin || null == firstLogin.getTime()) continue;
//                    Date logTime = sdf.parse(DateHelper.dateConver(firstLogin.getTime()));
//                    if (logTime.after(startDate) && logTime.before(endDate)) {
//                        rt.setFirstlogin(rt.getFirstlogin() + 1);
////                            entry.setValue(rt);
//                    }
//                    if (logTime.after(endDate)) break;
//                }
//
//                // 付费账号
//                for (Flag pay : payList) {
//                    if (null == pay || null == pay.getTime()) continue;
//                    Date logTime = sdf.parse(DateHelper.dateConver(pay.getTime()));
//                    if (logTime.after(startDate) && logTime.before(endDate)) {
//                        rt.setFirstlogin(rt.getFirstlogin() + 1);
////                            entry.setValue(rt);
//                    }
//                    if (logTime.after(endDate)) break;
//                }
//
//                // 付费金额
//                for (Flag payAmount : payAmountList) {
//                    if (null == payAmount || null == payAmount.getTime()) continue;
//                    Date logTime = sdf.parse(DateHelper.dateConver(payAmount.getTime()));
//                    if (logTime.after(startDate) && logTime.before(endDate)) {
//                        rt.setPayamount(rt.getPayamount().add(BigDecimal.valueOf(payAmount.getNumber())));
////                            entry.setValue(rt);
//                    }
//                    if (logTime.after(endDate)) break;
//                }
//            }
//
//            // 转换为List  心跳--在线账号 注册 活跃 首登 付费账号 付费金额
//            List<RealTimeStatistics> rtList = new LinkedList<>();
//            for (Map.Entry<String, RealTimeStatistics> entry : map.entrySet()) {
//                RealTimeStatistics rt = entry.getValue();
//                rt.setTimepoint(entry.getKey().split("/")[0]);
//                rt.setTimedate(entry.getKey().substring(0, 10));
//                rtList.add(rt);
//            }
//
//        /*
//
//            实时留存
//
//
//         */
//            String startTime2 = time.getTimes() + " 00:00:00";
//            String endTime2 = DateHelper.dateIncrease(time.getTimes(), 1L) + " 00:00:00";
//            Times t = new Times(startTime2, endTime2, null);
//            // 留存 -- 每小时
////                Map<String, Integer> retainMap = DateHelper.dateSplitByMinute(t, 60L);
//            // 有序
//            Map<String, Integer> retainMap = new LinkedHashMap<>();
//            Date start2 = null;
//            try {
//                start2 = sdf.parse(startTime2);
//                Date end2 = sdf.parse(endTime2);
//
//                // 从startTime开始累加，每次五分钟，当大于end累加结束。放入到Map集合中，key为startTime/endTime,value默认为0
//                // 一天共288个时间段
//                while (true) {
//                    endTime2 = sdf.format(start2.getTime() + (60 * 60 * 1000));
////                        startTime2 = sdf.format(start2);
//                    start2 = sdf.parse(endTime2);
//                    if (start2.after(end2))
//                        break;
//                    retainMap.put(startTime2 + "/" + endTime2, 0);
//                }
//            } catch (ParseException e) {
//                e.printStackTrace();
//            }
//
//            // 今日活跃 去重（取最小时间）
//            List<Flag> activeNowList = dailyAnalysisService.hiveSelectActiveTodayList(dailyAnalysis);
//
//            String yesterday = DateHelper.dateIncrease(time.getTimes(), -1L);
//            // 昨日首登 daily.setTime(time.getTimeDate - 1);
//            List<Flag> yesterdayfirstLoginList = new LinkedList<>();
//            dailyAnalysis.setTimedate(yesterday);
//            yesterdayfirstLoginList = dailyAnalysisService.hiveSelectFirstLoginList(dailyAnalysis);
//            Integer firstLogin = 0;
//            firstLogin = null == yesterdayfirstLoginList ? 0 : yesterdayfirstLoginList.size();
//            // 昨日首登 今日留存
//            List<Flag> retainList = new LinkedList<>();
//            for (Flag flag : activeNowList) {
//                if (null == flag) continue;
//                for (Flag yesFlag : yesterdayfirstLoginList) {
//                    if (null == yesFlag) continue;
//                    if (flag.getFlag().equals(yesFlag.getFlag()) || flag.getFlag() == yesFlag.getFlag()) {
//                        retainList.add(flag);
//                        break;
//                    }
//                }
//            }
//
//            // 今日活跃 / 昨日首登 = 昨日次留 = 今日实时留存
//            // 时间段数量 -- 每小时
//            for (Map.Entry<String, Integer> entry : retainMap.entrySet()) {
//                Date startDate = sdf.parse(entry.getKey().split("/")[0]);
//                Date endDate = sdf.parse(entry.getKey().split("/")[1]);
//                int count = 0;
//                for (Flag flag : retainList) {
//                    if (null == flag) continue;
//                    Date logTime = sdf.parse(DateHelper.dateConver(flag.getTime()));
//                    if (logTime.after(startDate) && logTime.before(endDate)) {
//                        count++;
//                    }
//                    if (logTime.after(endDate)) break;
//                }
//                entry.setValue(count);
//            }
//
//            // retainMap 的最后一个key 为 24:00:00
//            String string = DateHelper.dateIncrease(time.getTimes(), 1L) + " 00:00:00";
//            Integer integer = retainMap.get(startTime2 + "/" + string);
//            // 替换key 保留value
//            if (null != integer) {
//                retainMap.put(startTime2 + "/" + time.getTimes() + " 24:00:00", retainMap.remove(startTime2 + "/" + string));
//            }
//
//            // 转换为List  实时留存
//            List<RealTimeRetain> rtRetainList = new LinkedList<>();
//            for (Map.Entry<String, Integer> entry : retainMap.entrySet()) {
//                RealTimeRetain rtRetain = new RealTimeRetain();
//                rtRetain.setTimeDate(entry.getKey().substring(0, 10));
//                rtRetain.setTimePoint(entry.getKey().split("/")[1]);
//                // 昨日首登
//                rtRetain.setDayAccount(firstLogin);
//                // 今日留存
//                rtRetain.setDayRetain(entry.getValue());
//                rtRetainList.add(rtRetain);
//            }
//
//            String str = realTimeStatisticsService.insert(rtList, rtRetainList);
//            log.info("实时统计 -- 数据分析成功：[ timeDate=" + time.getTimes() + " ] fiveFlag : realTimeRetain = " + str);
//            System.err.println("实时统计 -- 数据分析成功：[ timeDate=" + time.getTimes() + " ] fiveFlag : realTimeRetain = " + str);
////            } catch (Exception e) {
////                e.printStackTrace();
////                log.error("实时统计 -- 数据分析失败：[ timeDate=" + time.getTimes() + " ] " + e.getMessage());
////            }
//        }
//    }
//}
