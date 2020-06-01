package com.umi.ga.runner;//package com.umi.ga.runner;
//
//import com.umi.ga.analysis.model.StartTimeDistribution;
//import com.umi.ga.entitys.Times;
//import com.umi.ga.entitys.StartRetarder;
//import com.umi.ga.service.startTimeDis.HadoopLogStartTimeDisService;
//import org.apache.log4j.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//
//import java.text.SimpleDateFormat;
//import java.util.*;
//
//@Order(2)
//@Component
//public class MyApplicationRunner implements ApplicationRunner {
//
//    // 日志
//    private final Logger log = Logger.getLogger(this.getClass());
//
//    @Autowired
//    private HadoopLogStartTimeDisService startTimeDisService;
//
//    /**
//     * Callback used to run the bean.
//     *
//     * @param args incoming application arguments
//     * @throws Exception on error
//     */
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//
////        hadoopLogManageService.hiveSelectStartTime();
//        // 查询startTime_distribution中timeDate的字段值（去除重复值），取出最大时间和当前时间进行比较，若小于，则以天为单位迭代出时间日期
//        List<Date> dateList = new LinkedList<>();
////        List<StartTimeDistribution> stList = startTimeDisService.selectTimeDate();
//        StartTimeDistribution stDistribution = startTimeDisService.selectMaxTimeDate();
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//
//        /**
//         * 第一次数据注入 -- TODO
//         */
////        String maxTimeDate = null == stDistribution.getTimedate() ? "1970-01-01" : stDistribution.getTimedate();
//        try {
//            String maxTimeDate = stDistribution.getTimedate();
//            Date now = sdf.parse(sdf.format(new Date()));
//            Date timeDate = sdf.parse(maxTimeDate);
//            while (timeDate.before(sdf.parse(sdf.format(now.getTime() - 1)))) {
//                timeDate = sdf.parse(sdf.format(timeDate.getTime() + 24 * 60 * 60 * 1000));
//                dateList.add(timeDate);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("启动分析 -- 以天为单位分割日期段失败: [ timeDate=" + stDistribution.getTimedate() + " ] " + e.getMessage());
//        }
//
//        if (null != dateList && 0 != dateList.size()) {
//            for (Date date : dateList) {
////                try {
//                Date start = dateFormat.parse(sdf.format(date.getTime() - 24 * 60 * 60 * 1000) + " 23:55:00");
//                Date end = dateFormat.parse(sdf.format(date) + " 23:55:00");
//                Times times = new Times();
//                times.setStartTime(dateFormat.format(start));
//                times.setEndTime(dateFormat.format(end));
//                String startTime;
//                String endTime;
//                Map<String, Integer> map = new LinkedHashMap<>();
//                while (start.before(end)) {
//                    endTime = dateFormat.format(start.getTime() + 5 * 60 * 1000);
//                    startTime = dateFormat.format(start);
//                    start = dateFormat.parse(endTime);
//                    map.put(startTime + "/" + endTime, 0);
//                }
//                // 重置数据源
////                ThreadContext.setMethodName("");
//                List<StartRetarder> srList = startTimeDisService.hiveSelectStartTime(times);
////                int count = 0;
////                int count2 = 0;
////                int count3 = 0;
//                for (StartRetarder startRetarder : srList) {
////                    count++;
//                    if (startRetarder.getTimes() != null && !"".equals(startRetarder.getTimes())) {
////                        count2++;
//                        Date time = dateFormat.parse(startRetarder.getTimes());
//                        for (Map.Entry<String, Integer> entry : map.entrySet()) {
//                            Date startDate = dateFormat.parse(entry.getKey().split("/")[0]);
//                            Date endDate = dateFormat.parse(entry.getKey().split("/")[1]);
//                            // TODO
//                            if (time.after(startDate) && time.before(endDate)) {
//                                entry.setValue(entry.getValue() + 1);
////                                count3++;
//                                break;
//                            }
//                        }
//                    }
//                }
//                List<StartTimeDistribution> stDisList = new LinkedList<>();
//                // 迭代map集合，map<startTime,count> 放入到List<startRetarder>中 ，并返回
//                for (Map.Entry<String, Integer> entry : map.entrySet()) {
//                    stDistribution = new StartTimeDistribution();
//                    stDistribution.setTimepoint(entry.getKey().split("/")[1]);
//                    stDistribution.setCount(String.valueOf(entry.getValue()));
//                    stDistribution.setTimedate(sdf.format(date));
//                    stDisList.add(stDistribution);
//                }
//                // 批量插入   ?map
//                int insert = startTimeDisService.insertBatch(stDisList);
//                log.info("启动分析 -- 实时启动数据初始化: [ timeDate=" + sdf.format(date) + " ] startTime = " + insert);
//                System.err.println("数据初始化 timeDate=" + sdf.format(date) + " startTime = " + insert);
////                } catch (Exception e) {
////                    e.printStackTrace();
////                    log.error("启动分析 -- 实时启动数据分析失败 : [ timeDate=" + sdf.format(date) + " ] " + e.getMessage());
////                }
//            }
//        }
//    }
//}