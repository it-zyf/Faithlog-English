package com.umi.ga.schedule;

import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.model.ConfigDistribution;
import com.umi.ga.cons.FrontEnd;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.configuration.HadoopLogConfigurationService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Component
public class FrontEndConfigSchedule {
    //
    private final Logger log = Logger.getLogger(this.getClass());

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private HadoopLogConfigurationService configurationService;


//    @Scheduled(cron = "0 */4 6-23 * * ? ")
    public void configScheduleNow() throws Exception {
        Date now = new Date();
        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // 今天前五分钟
        String startTime = date.format(now) + " 00:00:00";
        String endTime = date.format(now) + " 23:59:59";

        Times times = new Times(startTime, endTime, null);
//        HttpResult result = hadoopLogManageService.hiveSelectStartTime(times);
        List<ConfigDistribution> srList = configurationService.selectScreenResolutionNow(times);
        List<ConfigDistribution> brList = configurationService.selectBrandNow(times);
        List<ConfigDistribution> osList = configurationService.selectOSNow(times);
        List<ConfigDistribution> rmList = configurationService.selectRunMemoryNow(times);
        List<ConfigDistribution> cpuList = configurationService.selectCPUNow(times);
        List<ConfigDistribution> gpuList = configurationService.selectGPUNow(times);
        redisTemplate.delete(FrontEnd.RESOLUTION_NOW);
        redisTemplate.delete(FrontEnd.BRAND_NOW);
        redisTemplate.delete(FrontEnd.OS_NOW);
        redisTemplate.delete(FrontEnd.MEMORY_NOW);
        redisTemplate.delete(FrontEnd.CPU_NOW);
        redisTemplate.delete(FrontEnd.GPU_NOW);

        Boolean flag = false;
        flag = RedisHelper.Instance().setlist(FrontEnd.RESOLUTION_NOW, srList);
        System.err.println(FrontEnd.RESOLUTION_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.BRAND_NOW, brList);
        System.err.println(FrontEnd.BRAND_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.OS_NOW, osList);
        System.err.println(FrontEnd.OS_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.MEMORY_NOW, rmList);
        System.err.println(FrontEnd.MEMORY_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.CPU_NOW, cpuList);
        System.err.println(FrontEnd.CPU_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.GPU_NOW, gpuList);
        System.err.println(FrontEnd.GPU_NOW + " : " + flag);
        System.err.println("over");
    }

    //    @Scheduled(cron = "0 */5 * * * ? ")
//    @Scheduled(cron = "0 10 2-3 * * ? ")
    public void configSchedule() throws Exception {
        ConfigDistribution configDis = configurationService.selectMaxTimeDateResolution();
        // 重置数据源
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeDateFormat = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<Date> dateList = new LinkedList<>();
        String resTimeDate = null != configDis.getTimedate() ? configDis.getTimedate() : sdf.format(new Date());
        try {
            Date now = sdf.parse(sdf.format(new Date()));
            Date timeDate;
            if (null != configDis && null != configDis.getTimedate()) {

                timeDate = sdf.parse(resTimeDate);
                while (timeDate.before(sdf.parse(sdf.format(now.getTime() - 1)))) {
                    timeDate = sdf.parse(sdf.format(timeDate.getTime() + 24 * 60 * 60 * 1000));
                    dateList.add(timeDate);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("配置型号 -- 以天为单位分隔日期段失败：[ timeDate=" + resTimeDate + " ] " + e.getMessage());
        }
        if (null != dateList && 0 != dateList.size()) {
            for (Date date : dateList) {
                try {
                    Times times = new Times();
                    times.setTimes(timeDateFormat.format(date));
                    List<ConfigDistribution> srList = configurationService.hiveSelectScreenResolution(times);
                    List<ConfigDistribution> brList = configurationService.hiveSelectBrand(times);
                    List<ConfigDistribution> osList = configurationService.hiveSelectOS(times);
                    List<ConfigDistribution> rmList = configurationService.hiveSelectRunMemory(times);
                    List<ConfigDistribution> cpuList = configurationService.hiveSelectCPU(times);
                    List<ConfigDistribution> gpuList = configurationService.hiveSelectGPU(times);
                    List<ConfigDistribution> numList = configurationService.hiveSelectNumOfPeople(times);

                    for (ConfigDistribution sr : srList) {
                        sr.setTimedate(sdf.format(date));
                    }
                    for (ConfigDistribution br : brList) {
                        br.setTimedate(sdf.format(date));
                    }
                    for (ConfigDistribution os : osList) {
                        os.setTimedate(sdf.format(date));
                    }
                    for (ConfigDistribution rm : rmList) {
                        rm.setTimedate(sdf.format(date));
                    }
                    for (ConfigDistribution cpu : cpuList) {
                        cpu.setTimedate(sdf.format(date));
                    }
                    for (ConfigDistribution gpu : gpuList) {
                        gpu.setTimedate(sdf.format(date));
                    }
                    for (ConfigDistribution num : numList) {
                        num.setTimedate(sdf.format(date));
                    }

                    // 批量插入 事务管理 -- List
                    String str = configurationService.insertBatch(srList, brList, osList, rmList, cpuList, gpuList, numList);
                    log.info("配置型号 -- 数据分析成功 timeDate=" + sdf.format(date) + " resolution : brand : os : memory : cpu : gpu : numPeople = " + str);
//                    System.err.println("数据分析成功 timeDate=" + sdf.format(date) + " resolution : brand : os : memory : cpu : gpu : numPeople = " + str);
                } catch (Exception e) {
                    e.printStackTrace();
                    log.error("配置型号 -- 数据分析失败：[ timeDate=" + sdf.format(date) + " ] " + e.getMessage());
                }
            }
        }
    }

}
