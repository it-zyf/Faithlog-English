package com.umi.ga.runner;//package com.umi.ga.runner;
//
//import com.umi.ga.analysis.model.BreakdownDistribution;
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
//import java.util.List;
//
///**
// * @Author guowenchuang
// * @Date 2019/12/27 11:01
// */
//@Order(6)
//@Component
//public class BreakdownDisRunner implements ApplicationRunner {
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
//        SimpleDateFormat timeDateFormat = new SimpleDateFormat("yyyyMMdd");
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        // List<Times> 集合 t.getTimes()
//        List<Times> timesList = timeQuantumService.selectTableByColumn(new tableDate("breakdown_distribution", "timeDate", "flag", "breakdown_resolution"));
//        for (Times t : timesList) {
////            try {
//            Times times = new Times();
//            times.setTimes(t.getTimes().replace("-", ""));
//            List<BreakdownDistribution> disList = breakdownService.hiveSelectBreakdownTime(times);
//            if (null == disList || 0 == disList.size()) continue;
//            List<BreakdownDistribution> srList = breakdownService.hiveSelectBreakdownScreenResolution(times);
//            List<BreakdownDistribution> brList = breakdownService.hiveSelectBreakdownBrand(times);
//            List<BreakdownDistribution> osList = breakdownService.hiveSelectBreakdownOS(times);
//            List<BreakdownDistribution> networkList = breakdownService.hiveSelectBreakdownNetwork(times);
//            List<BreakdownDistribution> rmList = breakdownService.hiveSelectBreakdownRunMemory(times);
//            List<BreakdownDistribution> cpuList = breakdownService.hiveSelectBreakdownCPU(times);
//            List<BreakdownDistribution> gpuList = breakdownService.hiveSelectBreakdownGPU(times);
//
//            for (BreakdownDistribution sr : srList) {
//                sr.setTimedate(t.getTimes());
//            }
//            for (BreakdownDistribution br : brList) {
//                br.setTimedate(t.getTimes());
//            }
//            for (BreakdownDistribution os : osList) {
//                os.setTimedate(t.getTimes());
//            }
//            for (BreakdownDistribution network : networkList) {
//                network.setTimedate(t.getTimes());
//            }
//            for (BreakdownDistribution rm : rmList) {
//                rm.setTimedate(t.getTimes());
//            }
//            for (BreakdownDistribution cpu : cpuList) {
//                cpu.setTimedate(t.getTimes());
//            }
//            for (BreakdownDistribution gpu : gpuList) {
//                gpu.setTimedate(t.getTimes());
//            }
//
//            // 批量插入 事务管理 -- List
//            String str = breakdownService.insertBatch2(srList, brList, osList, networkList, rmList, cpuList, gpuList);
//            log.info("崩溃分析 -- 数据初始化 timeDate=" + t.getTimes() + " resolution : brand : os : network : memory : cpu : gpu  = " + str);
//            System.err.println("崩溃分析 -- 数据初始化 timeDate=" + t.getTimes() + " resolution : brand : os : network : memory : cpu : gpu  = " + str);
////            } catch (Exception e) {
////                e.printStackTrace();
////                log.error("崩溃分析 -- resolution : brand : os : network : memory : cpu : gpu  数据分析失败：[ timeDate=" + t.getTimes() + " ] " + e.getMessage());
////            }
//        }
//    }
//}
