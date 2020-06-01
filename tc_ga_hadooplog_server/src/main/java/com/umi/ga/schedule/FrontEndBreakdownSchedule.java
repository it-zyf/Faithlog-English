package com.umi.ga.schedule;

import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.model.BreakdownDistribution;
import com.umi.ga.common.HttpResult;
import com.umi.ga.cons.FrontEnd;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;
import com.umi.ga.service.clientInterface.HadoopLogBreakdownService;
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @Author guowenchuang
 * @Date 2019/12/26 15:08
 */
@Component
public class FrontEndBreakdownSchedule {
    //
    private final Logger log = Logger.getLogger(this.getClass());

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private HadoopLogBreakdownService breakdownService;

    @Autowired
    private HadoopLogTimeQuantumService timeQuantumService;

//    @Scheduled(cron = "0 */4 6-23 * * ?")
    public void breakdownScheduleNow() throws Exception {
        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        // 今天前五分钟
        String startTime = date.format(date.parse(date.format(now)).getTime() - 24 * 60 * 60 * 1000) + " 23:55:00";
        String endTime = dateFormat.format(now);
        Times times = new Times(startTime, endTime, sdf.format(now));
//        HttpResult result = hadoopLogManageService.hiveSelectStartTime(times);
        HttpResult result = breakdownService.selectBreakdownNow(times);
        ListOperations listOperations = redisTemplate.opsForList();
        listOperations.leftPushAll(FrontEnd.BREAKDOWN_NUM_NOW, result.getData());
        if (listOperations.size(FrontEnd.BREAKDOWN_NUM_NOW) > 1) listOperations.trim(FrontEnd.BREAKDOWN_NUM_NOW, 0, 0);
        List startTimeNow = listOperations.range(FrontEnd.BREAKDOWN_NUM_NOW, 0, -1);
        System.err.println(" BREAKDOWN_NUM_NOW 缓存 = " + startTimeNow.size());
    }

    //    @Scheduled(cron = "0 */5 * * * ?")
//    @Scheduled(cron = "0 15 2-3 * * ?")
    public void breakdownSchedule() throws Exception {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat dayFormat = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // List<Times> 集合
        List<Times> timesList = timeQuantumService.selectTableByColumn(new tableDate("breakdown_distribution", "timeDate", "flag", "numOfBreakdown"));
        for (Times t : timesList) {
            try {
                Map<String, Integer> map = new LinkedHashMap<>();
                Times times = new Times();
                Date start = dateFormat.parse(sdf.format(sdf.parse(t.getTimes()).getTime() - 24 * 60 * 60 * 1000) + " 23:55:00");
                Date end = dateFormat.parse(sdf.format(sdf.parse(t.getTimes())) + " 23:55:00");
                times.setStartTime(dateFormat.format(start));
                times.setEndTime(dateFormat.format(end));
                String day = dayFormat.format(start) + "," + dayFormat.format(end);
                times.setTimes(day);
                String startTime;
                String endTime;

                while (start.before(end)) {
                    endTime = dateFormat.format(start.getTime() + 5 * 60 * 1000);
                    startTime = dateFormat.format(start);
                    start = dateFormat.parse(endTime);
                    map.put(startTime + "/" + endTime, 0);
                }
                List<Times> breakdownList = breakdownService.hiveSelectTime(times);
                for (Times time : breakdownList) {
                    if (null == time) continue;
                    if (null != time.getTimes() && !"".equals(time.getTimes())) {
                        Date date = dateFormat.parse(time.getTimes());
                        for (Map.Entry<String, Integer> entry : map.entrySet()) {
                            Date startDate = dateFormat.parse(entry.getKey().split("/")[0]);
                            Date endDate = dateFormat.parse(entry.getKey().split("/")[1]);
                            if (date.after(startDate) && date.before(endDate)) {
                                entry.setValue(entry.getValue() + 1);
                                break;
                            }
                        }
                    }
                }
                List<BreakdownDistribution> bdDisList = new LinkedList<>();
                for (Map.Entry<String, Integer> entry : map.entrySet()) {
                    BreakdownDistribution bdDis = new BreakdownDistribution();
                    bdDis.setFlag(FrontEnd.BREAKDOWN_NUM);
                    bdDis.setCount(String.valueOf(entry.getValue()));
                    bdDis.setProperty(entry.getKey().split("/")[1]);
                    bdDis.setTimedate(t.getTimes());
                    bdDisList.add(bdDis);
                }

                // 批量插入 list
                int insert = breakdownService.insertBatch(bdDisList);
                log.info("崩溃分析 -- 崩溃时间点数据分析成功 timeDate=" + t.getTimes() + " count = " + insert);
//                System.err.println("数据分析成功 timeDate=" + t.getTimes() + " count = " + insert);
            } catch (Exception e) {
                e.printStackTrace();
                log.error("崩溃分析 -- 崩溃时间点数据分析失败：[ timeDate=" + t.getTimes() + " ] " + e.getMessage());
            }
        }
    }

//    @Scheduled(cron = "0 */5 6-23 * * ?")
    public void breakdownDisScheduleNow() {
        Date now = new Date();
        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // 今天前五分钟
        String startTime = date.format(now) + " 00:00:00";
        String endTime = date.format(now) + " 23:59:59";

        Times times = new Times(startTime, endTime, null);
        List<BreakdownDistribution> srList = breakdownService.selectBreakdownScreenResolutionNow(times);
        List<BreakdownDistribution> brList = breakdownService.selectBreakdownBrandNow(times);
        List<BreakdownDistribution> osList = breakdownService.selectBreakdownOSNow(times);
        List<BreakdownDistribution> networkList = breakdownService.selectBreakdownNetworkNow(times);
        List<BreakdownDistribution> rmList = breakdownService.selectBreakdownRunMemoryNow(times);
        List<BreakdownDistribution> cpuList = breakdownService.selectBreakdownCPUNow(times);
        List<BreakdownDistribution> gpuList = breakdownService.selectBreakdownGPUNow(times);
        redisTemplate.delete(FrontEnd.BREAKDOWN_RESOLUTION_NOW);
        redisTemplate.delete(FrontEnd.BREAKDOWN_BRAND_NOW);
        redisTemplate.delete(FrontEnd.BREAKDOWN_OS_NOW);
        redisTemplate.delete(FrontEnd.BREAKDOWN_NETWORK_NOW);
        redisTemplate.delete(FrontEnd.BREAKDOWN_MEMORY_NOW);
        redisTemplate.delete(FrontEnd.BREAKDOWN_CPU_NOW);
        redisTemplate.delete(FrontEnd.BREAKDOWN_GPU_NOW);

        Boolean flag = false;
        flag = RedisHelper.Instance().setlist(FrontEnd.BREAKDOWN_RESOLUTION_NOW, srList);
        System.err.println(FrontEnd.BREAKDOWN_RESOLUTION_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.BREAKDOWN_BRAND_NOW, brList);
        System.err.println(FrontEnd.BREAKDOWN_BRAND_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.BREAKDOWN_OS_NOW, osList);
        System.err.println(FrontEnd.BREAKDOWN_OS_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.BREAKDOWN_NETWORK_NOW, networkList);
        System.err.println(FrontEnd.BREAKDOWN_NETWORK_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.BREAKDOWN_MEMORY_NOW, rmList);
        System.err.println(FrontEnd.BREAKDOWN_MEMORY_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.BREAKDOWN_CPU_NOW, cpuList);
        System.err.println(FrontEnd.BREAKDOWN_CPU_NOW + " : " + flag);
        flag = RedisHelper.Instance().setlist(FrontEnd.BREAKDOWN_GPU_NOW, gpuList);
        System.err.println(FrontEnd.BREAKDOWN_GPU_NOW + " : " + flag);
        System.err.println("over");
    }

    //    @Scheduled(cron = "0 */5 * * * ?")
//    @Scheduled(cron = "0 40 2-3 * * ?")
    public void breakdownDisSchedule() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeDateFormat = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // List<Times> 集合 t.getTimes()
        List<Times> timesList = timeQuantumService.selectTableByColumn(new tableDate("breakdown_distribution", "timeDate", "flag", "breakdown_resolution"));
        for (Times t : timesList) {
            try {
                Times times = new Times();
                times.setTimes(t.getTimes().replace("-", ""));
                List<BreakdownDistribution> disList = breakdownService.hiveSelectBreakdownTime(times);
                if (null == disList || 0 == disList.size()) continue;
                List<BreakdownDistribution> srList = breakdownService.hiveSelectBreakdownScreenResolution(times);
                List<BreakdownDistribution> brList = breakdownService.hiveSelectBreakdownBrand(times);
                List<BreakdownDistribution> osList = breakdownService.hiveSelectBreakdownOS(times);
                List<BreakdownDistribution> networkList = breakdownService.hiveSelectBreakdownNetwork(times);
                List<BreakdownDistribution> rmList = breakdownService.hiveSelectBreakdownRunMemory(times);
                List<BreakdownDistribution> cpuList = breakdownService.hiveSelectBreakdownCPU(times);
                List<BreakdownDistribution> gpuList = breakdownService.hiveSelectBreakdownGPU(times);

                for (BreakdownDistribution sr : srList) {
                    sr.setTimedate(t.getTimes());
                }
                for (BreakdownDistribution br : brList) {
                    br.setTimedate(t.getTimes());
                }
                for (BreakdownDistribution os : osList) {
                    os.setTimedate(t.getTimes());
                }
                for (BreakdownDistribution network : networkList) {
                    network.setTimedate(t.getTimes());
                }
                for (BreakdownDistribution rm : rmList) {
                    rm.setTimedate(t.getTimes());
                }
                for (BreakdownDistribution cpu : cpuList) {
                    cpu.setTimedate(t.getTimes());
                }
                for (BreakdownDistribution gpu : gpuList) {
                    gpu.setTimedate(t.getTimes());
                }

                // 批量插入 事务管理 -- List
                String str = breakdownService.insertBatch2(srList, brList, osList, networkList, rmList, cpuList, gpuList);
                log.info("崩溃分析 -- 数据分析成功 timeDate=" + t.getTimes() + " resolution : brand : os : network : memory : cpu : gpu  = " + str);
//                System.err.println("崩溃分析 -- 数据分析成功 timeDate=" + t.getTimes() + " resolution : brand : os : network : memory : cpu : gpu  = " + str);
            } catch (Exception e) {
                e.printStackTrace();
                log.error("崩溃分析 -- resolution : brand : os : network : memory : cpu : gpu  数据分析失败：[ timeDate=" + t.getTimes() + " ] " + e.getMessage());
            }
        }
    }
}
