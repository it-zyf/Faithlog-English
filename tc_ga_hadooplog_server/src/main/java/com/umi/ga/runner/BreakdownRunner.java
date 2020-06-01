package com.umi.ga.runner;//package com.umi.ga.runner;
//
//import com.umi.ga.analysis.model.BreakdownDistribution;
//import com.umi.ga.cons.FrontEnd;
//import com.umi.ga.entitys.Times;
//import com.umi.ga.entitys.tableDate;
//import com.umi.ga.service.clientInterface.HadoopLogBreakdownService;
//import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
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
//@Order(5)
//@Component
//public class BreakdownRunner implements ApplicationRunner {
//    //
//    private final Logger log = Logger.getLogger(this.getClass());
//
//    @Autowired
//    private HadoopLogBreakdownService breakdownService;
//
//    @Autowired
//    private HadoopLogTimeQuantumService timeQuantumService;
//
//    /**
//     * Callback used to run the bean.
//     *
//     * @param args incoming application arguments
//     * @throws Exception on error
//     */
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        SimpleDateFormat dayFormat = new SimpleDateFormat("yyyyMMdd");
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        // List<Times> 集合
//        List<Times> timesList = timeQuantumService.selectTableByColumn(new tableDate("breakdown_distribution", "timeDate", "flag", "numOfBreakdown"));
//        for (Times t : timesList) {
////            try {
//            Map<String, Integer> map = new LinkedHashMap<>();
//            Times times = new Times();
//            Date start = dateFormat.parse(sdf.format(sdf.parse(t.getTimes()).getTime() - 24 * 60 * 60 * 1000) + " 23:55:00");
//            Date end = dateFormat.parse(sdf.format(sdf.parse(t.getTimes())) + " 23:55:00");
//            times.setStartTime(dateFormat.format(start));
//            times.setEndTime(dateFormat.format(end));
//            String day = dayFormat.format(start) + "," + dayFormat.format(end);
//            times.setTimes(day);
//            String startTime;
//            String endTime;
//
//            while (start.before(end)) {
//                endTime = dateFormat.format(start.getTime() + 5 * 60 * 1000);
//                startTime = dateFormat.format(start);
//                start = dateFormat.parse(endTime);
//                map.put(startTime + "/" + endTime, 0);
//            }
//            List<Times> breakdownList = breakdownService.hiveSelectTime(times);
//            for (Times time : breakdownList) {
//                if (null == time) continue;
//                if (null != time.getTimes() && !"".equals(time.getTimes())) {
//                    Date date = dateFormat.parse(time.getTimes());
//                    for (Map.Entry<String, Integer> entry : map.entrySet()) {
//                        Date startDate = dateFormat.parse(entry.getKey().split("/")[0]);
//                        Date endDate = dateFormat.parse(entry.getKey().split("/")[1]);
//                        if (date.after(startDate) && date.before(endDate)) {
//                            entry.setValue(entry.getValue() + 1);
//                            break;
//                        }
//                    }
//                }
//            }
//            List<BreakdownDistribution> bdDisList = new LinkedList<>();
//            for (Map.Entry<String, Integer> entry : map.entrySet()) {
//                BreakdownDistribution bdDis = new BreakdownDistribution();
//                bdDis.setFlag(FrontEnd.BREAKDOWN_NUM);
//                bdDis.setCount(String.valueOf(entry.getValue()));
//                bdDis.setProperty(entry.getKey().split("/")[1]);
//                bdDis.setTimedate(t.getTimes());
//                bdDisList.add(bdDis);
//            }
//
//            // 批量插入 list
//            int insert = breakdownService.insertBatch(bdDisList);
//            log.info("崩溃分析 -- 崩溃时间点数据初始化 timeDate=" + t.getTimes() + " count = " + insert);
//            System.err.println("数据初始化 timeDate=" + t.getTimes() + " count = " + insert);
////            } catch (Exception e) {
////                e.printStackTrace();
////                log.error("崩溃分析 -- 崩溃时间点数据分析失败：[ timeDate=" + t.getTimes() + " ] " + e.getMessage());
////            }
//        }
//    }
//}
