package com.umi.ga.runner;//package com.umi.ga.runner;
//
//import com.umi.ga.analysis.model.ConfigDistribution;
//import com.umi.ga.entitys.Times;
//import com.umi.ga.service.configuration.HadoopLogConfigurationService;
//import org.apache.log4j.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.LinkedList;
//import java.util.List;
//
//@Order(3)
//@Component
//public class ConfigurationRunner implements ApplicationRunner {
//    //
//    private final Logger log = Logger.getLogger(this.getClass());
//
//    @Autowired
//    private HadoopLogConfigurationService configurationService;
//
//    /**
//     * Callback used to run the bean.
//     *
//     * @param args incoming application arguments
//     * @throws Exception on error
//     */
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        ConfigDistribution configDis = configurationService.selectMaxTimeDateResolution();
//        // 重置数据源
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        SimpleDateFormat timeDateFormat = new SimpleDateFormat("yyyyMMdd");
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        List<Date> dateList = new LinkedList<>();
//        String resTimeDate = null != configDis.getTimedate() ? configDis.getTimedate() : sdf.format(new Date());
//        try {
//            Date now = sdf.parse(sdf.format(new Date()));
//            Date timeDate;
//            if (null != configDis && null != configDis.getTimedate()) {
//
//                timeDate = sdf.parse(resTimeDate);
//                while (timeDate.before(sdf.parse(sdf.format(now.getTime() - 1)))) {
//                    timeDate = sdf.parse(sdf.format(timeDate.getTime() + 24 * 60 * 60 * 1000));
//                    dateList.add(timeDate);
//                }
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("配置型号 -- 以天为单位分隔日期段失败：[ timeDate=" + resTimeDate + " ] " + e.getMessage());
//        }
//        if (null != dateList && 0 != dateList.size()) {
//            for (Date date : dateList) {
////                try {
//                Times times = new Times();
//                times.setTimes(timeDateFormat.format(date));
//                List<ConfigDistribution> srList = configurationService.hiveSelectScreenResolution(times);
//                List<ConfigDistribution> brList = configurationService.hiveSelectBrand(times);
//                List<ConfigDistribution> osList = configurationService.hiveSelectOS(times);
//                List<ConfigDistribution> rmList = configurationService.hiveSelectRunMemory(times);
//                List<ConfigDistribution> cpuList = configurationService.hiveSelectCPU(times);
//                List<ConfigDistribution> gpuList = configurationService.hiveSelectGPU(times);
//                List<ConfigDistribution> numList = configurationService.hiveSelectNumOfPeople(times);
//
//                for (ConfigDistribution sr : srList) {
//                    sr.setTimedate(sdf.format(date));
//                }
//                for (ConfigDistribution br : brList) {
//                    br.setTimedate(sdf.format(date));
//                }
//                for (ConfigDistribution os : osList) {
//                    os.setTimedate(sdf.format(date));
//                }
//                for (ConfigDistribution rm : rmList) {
//                    rm.setTimedate(sdf.format(date));
//                }
//                for (ConfigDistribution cpu : cpuList) {
//                    cpu.setTimedate(sdf.format(date));
//                }
//                for (ConfigDistribution gpu : gpuList) {
//                    gpu.setTimedate(sdf.format(date));
//                }
//                for (ConfigDistribution num : numList) {
//                    num.setTimedate(sdf.format(date));
//                }
//
//                // 批量插入 事务管理 -- List
//                String str = configurationService.insertBatch(srList, brList, osList, rmList, cpuList, gpuList, numList);
//                log.info("配置型号 -- 数据初始化 timeDate=" + sdf.format(date) + " resolution : brand : os : memory : cpu : gpu : numPeople = " + str);
//                System.err.println("数据初始化 timeDate=" + sdf.format(date) + " resolution : brand : os : memory : cpu : gpu : numPeople = " + str);
////                } catch (Exception e) {
////                    e.printStackTrace();
////                    log.error("配置型号 -- 数据分析失败：[ timeDate=" + sdf.format(date) + " ] " + e.getMessage());
////                }
//            }
//        }
//    }
//}
