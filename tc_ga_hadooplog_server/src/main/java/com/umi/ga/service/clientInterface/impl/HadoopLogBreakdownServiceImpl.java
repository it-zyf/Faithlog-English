package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.db.annotation.DbSwitch;
import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.dao.BreakdownDistributionDao;
import com.umi.ga.analysis.model.BreakdownDistribution;
import com.umi.ga.common.HttpResult;
import com.umi.ga.cons.FrontEnd;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.clientInterface.HadoopLogBreakdownService;
import com.umi.ga.utils.BaseResultUtil;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogBreakdownServiceImpl implements HadoopLogBreakdownService {

    // 日志
    protected final Logger log = Logger.getLogger(this.getClass());

    @Autowired
    private BreakdownDistributionDao breakDownDistribution;

    /**
     * startTime='2019-12-23 23:55:00' endTime='2019-12-24 23:55:00'
     *
     * @param times
     * @return
     */
    @Override
    public HttpResult selectNumOfBreakdown(Times times) {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat dayFormat = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<BreakdownDistribution> bdDisList = new LinkedList<>();
        try {
            String date = sdf.format(sdf.parse(times.getEndTime()));
            times.setTimes(date);
            String now = sdf.format(new Date());
            if (date.equals(now)) {
                bdDisList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_NUM_NOW);
                if (null == bdDisList || 0 == bdDisList.size()) {
                    return BaseResultUtil.resultSuccess("查询成功", bdDisList);
                } else {
                    return BaseResultUtil.resultSuccess("查询成功", bdDisList.get(0));
                }
            } else {
                bdDisList = breakDownDistribution.selectBreakdown(times);
            }
        } catch (ParseException e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", bdDisList);
        }
        return BaseResultUtil.resultSuccess("查询成功", bdDisList);
    }

    /**
     * startTime='2019-11-23 00:00:00' endTime='2019-12-25 23:59:59'
     *
     * @param times
     * @return
     */
    @Override
    public HttpResult selectBreakDown(Times times) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Map<String, List> brekdownMap = new HashMap<>();
        List<List> cpuComplexLists = new LinkedList<>();
        List<List> gpuComplexLists = new LinkedList<>();
        try {
            String now = sdf.format(sdf.parse(sdf.format(new Date())));
            Date startTime = sdf.parse(times.getStartTime());
            Date endTime = sdf.parse(times.getEndTime());
            List<Times> timeDateList = new LinkedList<>();
            String timeDate = sdf.format(startTime);
            String end = sdf.format(endTime);
            Times date;
            if (sdf.format(startTime).equals(sdf.format(endTime))) {
                date = new Times();
                date.setNumber(0);
                date.setTimes(timeDate);
                timeDateList.add(date);
            } else {
                do {
                    date = new Times();
                    date.setNumber(0);
                    date.setTimes(timeDate);
                    timeDateList.add(date);
                    timeDate = sdf.format(sdf.parse(sdf.format(startTime.getTime() + 24 * 60 * 60 * 1000)));
                    startTime = sdf.parse(timeDate);
                } while (startTime.before(endTime));
                date = new Times();
                date.setNumber(0);
                date.setTimes(sdf.format(endTime));
                timeDateList.add(date);
            }

            // 指定当前日期
            if (end.equals(now) && null != timeDateList && timeDateList.size() == 1) {
                List<BreakdownDistribution> resolutionList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_RESOLUTION_NOW);
                List<BreakdownDistribution> brandList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_BRAND_NOW);
                List<BreakdownDistribution> osnowList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_OS_NOW);
                List<BreakdownDistribution> netWorknowList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_NETWORK_NOW);
                List<BreakdownDistribution> memoryList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_MEMORY_NOW);
                List<BreakdownDistribution> cpuList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_CPU_NOW);
                for (BreakdownDistribution conf : cpuList) {
                    if (null == conf) continue;
                    Times t1 = new Times();
                    t1.setStartTime(sdf.format(sdf.parse(times.getStartTime())));
                    t1.setEndTime(sdf.format(endTime));
                    t1.setType(conf.getProperty());
                    t1.setTimes(now);
                    t1.setNumber(Integer.valueOf(conf.getCount()));
                    List<Times> list = new LinkedList<>();
                    list.add(t1);
                    cpuComplexLists.add(list);
                }

                List<BreakdownDistribution> gpuList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_GPU_NOW);
                for (BreakdownDistribution conf : gpuList) {
                    if (null == conf) continue;
                    Times t1 = new Times();
                    t1.setStartTime(sdf.format(sdf.parse(times.getStartTime())));
                    t1.setEndTime(sdf.format(endTime));
                    t1.setType(conf.getProperty());
                    t1.setTimes(now);
                    t1.setNumber(Integer.valueOf(conf.getCount()));
                    List<Times> list = new LinkedList<>();
                    list.add(t1);
                    gpuComplexLists.add(list);
                }
                BreakdownDistribution bdis = new BreakdownDistribution();
//                bdis.setFlag("breakdown_network");
                bdis.setFlag(FrontEnd.BREAKDOWN_NETWORK);
                bdis.setProperty("1");
                bdis.setCount("0");
                Iterator<BreakdownDistribution> it = netWorknowList.iterator();
                while (it.hasNext()) {
                    BreakdownDistribution network = it.next();
                    if ("Wifi".equals(network.getProperty()) || "1".equals(network.getProperty())) {
                        bdis.setCount(String.valueOf(Integer.valueOf(network.getCount()) + Integer.valueOf(bdis.getCount())));
                        it.remove();
                    }
                }
                if (!"0".equals(bdis.getCount()) && "0" != bdis.getCount()) {
                    netWorknowList.add(bdis);
                }

                brekdownMap.put(FrontEnd.BREAKDOWN_RESOLUTION, this.listSort(resolutionList));
                brekdownMap.put(FrontEnd.BREAKDOWN_BRAND, this.listSort(brandList));
                brekdownMap.put(FrontEnd.BREAKDOWN_OS, this.listSort(osnowList));
                brekdownMap.put(FrontEnd.BREAKDOWN_NETWORK, this.listSort(netWorknowList));
                brekdownMap.put(FrontEnd.BREAKDOWN_MEMORY, this.listSort(memoryList));
                brekdownMap.put(FrontEnd.BREAKDOWN_CPU, cpuComplexLists);
                brekdownMap.put(FrontEnd.BREAKDOWN_GPU, gpuComplexLists);
                return BaseResultUtil.resultSuccess("查询成功", brekdownMap);
            }
            List<BreakdownDistribution> srList = breakDownDistribution.selectBreakdownScreenResolution(timeDateList);
            List<BreakdownDistribution> brList = breakDownDistribution.selectBreakdownBrand(timeDateList);
            List<BreakdownDistribution> osList = breakDownDistribution.selectBreakdownOS(timeDateList);
            List<BreakdownDistribution> networkList = breakDownDistribution.selectBreakdownNetwork(timeDateList);
            List<BreakdownDistribution> rmList = breakDownDistribution.selectBreakdownRunMemory(timeDateList);
            List<BreakdownDistribution> cpuList = breakDownDistribution.selectBreakdownCPU(timeDateList);
            for (BreakdownDistribution conf : cpuList) {
                if (null == conf) continue;
                Times t1 = new Times();
                t1.setStartTime(sdf.format(sdf.parse(times.getStartTime())));
                t1.setEndTime(sdf.format(endTime));
                t1.setType(conf.getProperty());
                List<BreakdownDistribution> configList = breakDownDistribution.selectBreakdownCPUSpecial(t1);
                List<Times> list = new LinkedList<>();
                for (Times ti : timeDateList) {
                    Times times1 = new Times();
                    times1.setType(conf.getProperty());
                    times1.setTimes(ti.getTimes());
                    times1.setNumber(0);
                    for (BreakdownDistribution config : configList) {
                        if (null == config) continue;
                        if (ti.getTimes().equals(config.getTimedate())) {
                            times1.setNumber(Integer.valueOf(config.getCount()));
                            break;
                        }
                    }
                    list.add(times1);
                }
                cpuComplexLists.add(list);
            }

            List<BreakdownDistribution> gpuList = breakDownDistribution.selectBreakdownGPU(timeDateList);
            for (BreakdownDistribution conf : gpuList) {
                if (null == conf) continue;
                Times t1 = new Times();
                t1.setStartTime(sdf.format(sdf.parse(times.getStartTime())));
                t1.setEndTime(sdf.format(endTime));
                t1.setType(conf.getProperty());
                List<BreakdownDistribution> configList = breakDownDistribution.selectBreakdownGPUSpecial(t1);
                List<Times> list = new LinkedList<>();
                for (Times ti : timeDateList) {
                    Times times1 = new Times();
                    times1.setType(conf.getProperty());
                    times1.setTimes(ti.getTimes());
                    times1.setNumber(0);
                    for (BreakdownDistribution config : configList) {
                        if (null == config) continue;
                        if (ti.getTimes().equals(config.getTimedate())) {
                            times1.setNumber(Integer.valueOf(config.getCount()));
                            break;
                        }
                    }
                    list.add(times1);
                }
                gpuComplexLists.add(list);
            }

            // 包含当前日期
            if (end.equals(now)) {
                List<BreakdownDistribution> resolutionList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_RESOLUTION_NOW);
                List<BreakdownDistribution> brandList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_BRAND_NOW);
                List<BreakdownDistribution> osnowList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_OS_NOW);
                List<BreakdownDistribution> netWorknowList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_NETWORK_NOW);
                List<BreakdownDistribution> memoryList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_MEMORY_NOW);
                List<BreakdownDistribution> cpunowList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_CPU_NOW);
                List<BreakdownDistribution> gpunowList = RedisHelper.Instance().getlistByKey(FrontEnd.BREAKDOWN_GPU_NOW);

                if (null != resolutionList && null != brandList && null != osnowList && null != memoryList) {
                    for (List<Times> li : cpuComplexLists) {
                        for (BreakdownDistribution conf : cpunowList) {
                            if (li.get(0).getType().equals(conf.getProperty())) {
                                li.get(li.size() - 1).setNumber(Integer.valueOf(conf.getCount()));
                                break;
                            }
                        }
                    }

                    for (List<Times> li : gpuComplexLists) {
                        for (BreakdownDistribution conf : gpunowList) {
                            if (li.get(0).getType().equals(conf.getProperty())) {
                                li.get(li.size() - 1).setNumber(Integer.valueOf(conf.getCount()));
                                break;
                            }
                        }
                    }

                    for (BreakdownDistribution sr : srList) {
                        if (null == sr) continue;
                        for (BreakdownDistribution srNow : resolutionList) {
                            if (null == srNow) continue;
                            if (sr.getProperty().equals(srNow.getProperty())) {
                                Integer count = Integer.valueOf(sr.getCount()) + Integer.valueOf(srNow.getCount());
                                sr.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }

                    for (BreakdownDistribution br : brList) {
                        if (null == br) continue;
                        for (BreakdownDistribution brNow : brandList) {
                            if (null == brNow) continue;
                            if (br.getProperty().equals(brNow.getProperty())) {
                                Integer count = Integer.valueOf(br.getCount()) + Integer.valueOf(brNow.getCount());
                                br.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }

                    for (BreakdownDistribution os : osList) {
                        if (null == os) continue;
                        for (BreakdownDistribution osNow : osnowList) {
                            if (null == osNow) continue;
                            if (os.getProperty().equals(osNow.getProperty())) {
                                Integer count = Integer.valueOf(os.getCount()) + Integer.valueOf(osNow.getCount());
                                os.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }

                    for (BreakdownDistribution network : networkList) {
                        if (null == network) continue;
                        for (BreakdownDistribution netWorkNow : netWorknowList) {
                            if (null == netWorkNow) continue;
                            if (network.getProperty().equals(netWorkNow.getProperty())) {
                                Integer count = Integer.valueOf(network.getCount()) + Integer.valueOf(netWorkNow.getCount());
                                network.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }
                    for (BreakdownDistribution rm : rmList) {
                        if (null == rm) continue;
                        for (BreakdownDistribution rmNow : memoryList) {
                            if (null == rmNow) continue;
                            if (rm.getProperty().equals(rmNow.getProperty())) {
                                Integer count = Integer.valueOf(rm.getCount()) + Integer.valueOf(rmNow.getCount());
                                rm.setCount(String.valueOf(count));
                                memoryList.remove(rmNow);
                                break;
                            }
                        }
                    }
                    rmList.addAll(memoryList);
                } else {

                }
            }
            BreakdownDistribution bdis = new BreakdownDistribution();
            bdis.setFlag("breakdown_network");
            bdis.setProperty("1");
            bdis.setCount("0");
            Iterator<BreakdownDistribution> it = networkList.iterator();
            while (it.hasNext()) {
                BreakdownDistribution network = it.next();
                if ("Wifi".equals(network.getProperty()) || "1".equals(network.getProperty())) {
                    bdis.setCount(String.valueOf(Integer.valueOf(network.getCount()) + Integer.valueOf(bdis.getCount())));
                    it.remove();
                }
            }
            if (!"0".equals(bdis.getCount()) && !"".equals(bdis.getCount())) {
                networkList.add(bdis);
            }

            brekdownMap.put(FrontEnd.BREAKDOWN_RESOLUTION, this.listSort(srList));
            brekdownMap.put(FrontEnd.BREAKDOWN_BRAND, this.listSort(brList));
            brekdownMap.put(FrontEnd.BREAKDOWN_OS, this.listSort(osList));
            brekdownMap.put(FrontEnd.BREAKDOWN_NETWORK, this.listSort(networkList));
            brekdownMap.put(FrontEnd.BREAKDOWN_MEMORY, this.listSort(rmList));
            brekdownMap.put(FrontEnd.BREAKDOWN_CPU, cpuComplexLists);
            brekdownMap.put(FrontEnd.BREAKDOWN_GPU, gpuComplexLists);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return BaseResultUtil.resultSuccess("查询成功", brekdownMap);
    }

    /**
     * 降序
     * 根据list集合中BreakdownDistribution对象的count属性
     */
    private List<BreakdownDistribution> listSort(List<BreakdownDistribution> list) {
        Collections.sort(list, new Comparator<BreakdownDistribution>() {
            @Override
            public int compare(BreakdownDistribution o1, BreakdownDistribution o2) {
                //降序
                return Integer.valueOf(o2.getCount()).compareTo(Integer.valueOf(o1.getCount()));
            }
        });
        return list;
    }

    @Override
    public List<Times> hiveSelectTime(Times times) {
        return breakDownDistribution.hiveSelectTime(times);
    }

    @Override
    public int insertBatch(List<BreakdownDistribution> bdDisList) {
        return breakDownDistribution.insertBatch(bdDisList);
    }

    @Override
    public HttpResult selectBreakdownNow(Times times) {
        // 有序
        Map<String, Integer> map = new LinkedHashMap<>();
        List<BreakdownDistribution> bdDisList = new LinkedList<>();
        String startTime = times.getStartTime();
        String endTime = times.getEndTime();
        try {
            List<Times> bdList = breakDownDistribution.selectBreakdownNow(times);
            // 将startTime、endTime 转换为日期类型
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
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
            for (Times time : bdList) {
                if (time.getTimes() != null && !"".equals(time.getTimes())) {
                    Date str = sdf.parse(time.getTimes());
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
                BreakdownDistribution breakdownDis = new BreakdownDistribution();
                breakdownDis.setFlag(FrontEnd.BREAKDOWN_NUM);
                breakdownDis.setProperty(entry.getKey().split("/")[1]);
                breakdownDis.setTimedate(dateFormat.format(end));
                breakdownDis.setCount(String.valueOf(entry.getValue()));
                bdDisList.add(breakdownDis);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", bdDisList);
        }
        return BaseResultUtil.resultSuccess("查询成功", bdDisList);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String insertBatch2(List<BreakdownDistribution> srList, List<BreakdownDistribution> brList, List<BreakdownDistribution> osList, List<BreakdownDistribution> networkList, List<BreakdownDistribution> rmList, List<BreakdownDistribution> cpuList, List<BreakdownDistribution> gpuList) {
        int sr = 0, br = 0, os = 0, network = 0, rm = 0, cpu = 0, gpu = 0;
        if (null != srList && 0 != srList.size()) {
            sr = breakDownDistribution.insertBatch(srList);
        }
        if (null != brList && 0 != brList.size()) {
            br = breakDownDistribution.insertBatch(brList);
        }
        if (null != osList && 0 != osList.size()) {
            os = breakDownDistribution.insertBatch(osList);
        }
        if (null != networkList && 0 != networkList.size()) {
            network = breakDownDistribution.insertBatch(networkList);
        }
        if (null != rmList && 0 != rmList.size()) {
            rm = breakDownDistribution.insertBatch(rmList);
        }
        if (null != cpuList && 0 != cpuList.size()) {
            cpu = breakDownDistribution.insertBatch(cpuList);
        }
        if (null != gpuList && 0 != gpuList.size()) {
            gpu = breakDownDistribution.insertBatch(gpuList);
        }

        return sr + " : " + br + " : " + os + " : " + network + " : " + rm + " : " + cpu + " : " + gpu;
    }

    @Override
    public List<BreakdownDistribution> hiveSelectBreakdownScreenResolution(Times times) {
        return breakDownDistribution.hiveSelectBreakdownScreenResolution(times);
    }

    @Override
    public List<BreakdownDistribution> hiveSelectBreakdownBrand(Times times) {
        return breakDownDistribution.hiveSelectBreakdownBrand(times);
    }

    @Override
    public List<BreakdownDistribution> hiveSelectBreakdownOS(Times times) {
        return breakDownDistribution.hiveSelectBreakdownOS(times);
    }

    @Override
    public List<BreakdownDistribution> hiveSelectBreakdownNetwork(Times times) {
        return breakDownDistribution.hiveSelectBreakdownNetwork(times);
    }

    @Override
    public List<BreakdownDistribution> hiveSelectBreakdownRunMemory(Times times) {
        return breakDownDistribution.hiveSelectBreakdownRunMemory(times);
    }

    @Override
    public List<BreakdownDistribution> hiveSelectBreakdownCPU(Times times) {
        return breakDownDistribution.hiveSelectBreakdownCPU(times);
    }

    @Override
    public List<BreakdownDistribution> hiveSelectBreakdownGPU(Times times) {
        return breakDownDistribution.hiveSelectBreakdownGPU(times);
    }

    @Override
    public List<BreakdownDistribution> selectBreakdownScreenResolutionNow(Times times) {
        return breakDownDistribution.selectBreakdownScreenResolutionNow(times);
    }

    @Override
    public List<BreakdownDistribution> selectBreakdownBrandNow(Times times) {
        return breakDownDistribution.selectBreakdownBrandNow(times);
    }

    @Override
    public List<BreakdownDistribution> selectBreakdownOSNow(Times times) {
        return breakDownDistribution.selectBreakdownOSNow(times);
    }

    @Override
    public List<BreakdownDistribution> selectBreakdownNetworkNow(Times times) {
        return breakDownDistribution.selectBreakdownNetworkNow(times);
    }

    @Override
    public List<BreakdownDistribution> selectBreakdownRunMemoryNow(Times times) {
        return breakDownDistribution.selectBreakdownRunMemoryNow(times);
    }

    @Override
    public List<BreakdownDistribution> selectBreakdownCPUNow(Times times) {
        return breakDownDistribution.selectBreakdownCPUNow(times);
    }

    @Override
    public List<BreakdownDistribution> selectBreakdownGPUNow(Times times) {
        return breakDownDistribution.selectBreakdownGPUNow(times);
    }

    @Override
    public HttpResult selectBreakDownCount(Times times) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Times t = new Times();
        try {
            String now = sdf.format(sdf.parse(sdf.format(new Date())));
            Date startTime = sdf.parse(times.getStartTime());
            Date endTime = sdf.parse(times.getEndTime());
            List<Times> timeDateList = new LinkedList<>();
            String timeDate = sdf.format(startTime);
            String end = sdf.format(endTime);
            Times date;
            if (sdf.format(startTime).equals(sdf.format(endTime))) {
                date = new Times();
                date.setNumber(0);
                date.setTimes(timeDate);
                timeDateList.add(date);
            } else {
                do {
                    date = new Times();
                    date.setNumber(0);
                    date.setTimes(timeDate);
                    timeDateList.add(date);
                    timeDate = sdf.format(sdf.parse(sdf.format(startTime.getTime() + 24 * 60 * 60 * 1000)));
                    startTime = sdf.parse(timeDate);
                } while (startTime.before(endTime));
                date = new Times();
                date.setNumber(0);
                date.setTimes(sdf.format(endTime));
                timeDateList.add(date);
            }
            t = breakDownDistribution.selectBreakdownCount(timeDateList);
            if (end.equals(now)) {
                Times ti = new Times();
                String startTime2 = now + " 00:00:00";
                String endTime2 = now + " 23:59:59";
                ti = breakDownDistribution.selectBreakdownCountNow(ti);
                t.setNumber(t.getNumber() + ti.getNumber());
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return BaseResultUtil.resultSuccess("查询成功", t);
    }

    @Override
    public List<BreakdownDistribution> hiveSelectBreakdownTime(Times times) {
        return breakDownDistribution.hiveSelectBreakdownTime(times);
    }
}
