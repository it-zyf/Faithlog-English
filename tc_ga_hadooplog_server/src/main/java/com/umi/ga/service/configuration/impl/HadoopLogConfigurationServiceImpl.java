package com.umi.ga.service.configuration.impl;

import com.comb.framework.db.annotation.DbSwitch;
import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.dao.ConfigDistributionDao;
import com.umi.ga.analysis.model.ConfigDistribution;
import com.umi.ga.common.HttpResult;
import com.umi.ga.cons.FrontEnd;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.configuration.HadoopLogConfigurationService;
import com.umi.ga.utils.BaseResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogConfigurationServiceImpl implements HadoopLogConfigurationService {

    @Autowired
    private ConfigDistributionDao configDistribution;

    @Override
    public HttpResult selectConfiguration(Times times) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Map<String, List> configMap = new HashMap<>();
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

            if (end.equals(now) && null != timeDateList && timeDateList.size() == 1) {
                List<ConfigDistribution> resolutionList = RedisHelper.Instance().getlistByKey(FrontEnd.RESOLUTION_NOW);
                List<ConfigDistribution> brandList = RedisHelper.Instance().getlistByKey(FrontEnd.BRAND_NOW);
                List<ConfigDistribution> osnowList = RedisHelper.Instance().getlistByKey(FrontEnd.OS_NOW);
                List<ConfigDistribution> memoryList = RedisHelper.Instance().getlistByKey(FrontEnd.MEMORY_NOW);
                List<ConfigDistribution> cpuList = RedisHelper.Instance().getlistByKey(FrontEnd.CPU_NOW);
                for (ConfigDistribution conf : cpuList) {
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

                List<ConfigDistribution> gpuList = RedisHelper.Instance().getlistByKey(FrontEnd.GPU_NOW);
                for (ConfigDistribution conf : gpuList) {
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

                configMap.put(FrontEnd.RESOLUTION, this.listSort(resolutionList));
                configMap.put(FrontEnd.BRAND, this.listSort(brandList));
                configMap.put(FrontEnd.OS, this.listSort(osnowList));
                configMap.put(FrontEnd.MEMORY, this.listSort(memoryList));
                configMap.put(FrontEnd.CPU, cpuComplexLists);
                configMap.put(FrontEnd.GPU, gpuComplexLists);
                return BaseResultUtil.resultSuccess("查询成功", configMap);
            }
            List<ConfigDistribution> srList = configDistribution.selectScreenResolution(timeDateList);
            List<ConfigDistribution> brList = configDistribution.selectBrand(timeDateList);
            List<ConfigDistribution> osList = configDistribution.selectOS(timeDateList);
            List<ConfigDistribution> rmList = configDistribution.selectRunMemory(timeDateList);
            List<ConfigDistribution> cpuList = configDistribution.selectCPU(timeDateList);
            for (ConfigDistribution conf : cpuList) {
                if (null == conf) continue;
                Times t1 = new Times();
                t1.setStartTime(sdf.format(sdf.parse(times.getStartTime())));
                t1.setEndTime(sdf.format(endTime));
                t1.setType(conf.getProperty());
                List<ConfigDistribution> configList = configDistribution.selectCPUSpecial(t1);
                List<Times> list = new LinkedList<>();
                for (Times ti : timeDateList) {
                    Times times1 = new Times();
                    times1.setType(conf.getProperty());
                    times1.setTimes(ti.getTimes());
                    times1.setNumber(0);
                    for (ConfigDistribution config : configList) {
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

            List<ConfigDistribution> gpuList = configDistribution.selectGPU(timeDateList);
            for (ConfigDistribution conf : gpuList) {
                if (null == conf) continue;
                Times t1 = new Times();
                t1.setStartTime(sdf.format(sdf.parse(times.getStartTime())));
                t1.setEndTime(sdf.format(endTime));
                t1.setType(conf.getProperty());
                List<ConfigDistribution> configList = configDistribution.selectGPUSpecial(t1);
                List<Times> list = new LinkedList<>();
                for (Times ti : timeDateList) {
                    Times times1 = new Times();
                    times1.setType(conf.getProperty());
                    times1.setTimes(ti.getTimes());
                    times1.setNumber(0);
                    for (ConfigDistribution config : configList) {
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

            if (end.equals(now)) {
                List<ConfigDistribution> resolutionList = RedisHelper.Instance().getlistByKey(FrontEnd.RESOLUTION_NOW);
                List<ConfigDistribution> brandList = RedisHelper.Instance().getlistByKey(FrontEnd.BRAND_NOW);
                List<ConfigDistribution> osnowList = RedisHelper.Instance().getlistByKey(FrontEnd.OS_NOW);
                List<ConfigDistribution> memoryList = RedisHelper.Instance().getlistByKey(FrontEnd.MEMORY_NOW);
                List<ConfigDistribution> cpunowList = RedisHelper.Instance().getlistByKey(FrontEnd.CPU_NOW);
                List<ConfigDistribution> gpunowList = RedisHelper.Instance().getlistByKey(FrontEnd.GPU_NOW);

                if (null != resolutionList && null != brandList && null != osnowList && null != memoryList) {
                    for (List<Times> li : cpuComplexLists) {
                        for (ConfigDistribution conf : cpunowList) {
                            if (li.get(0).getType().equals(conf.getProperty())) {
                                li.get(li.size() - 1).setNumber(Integer.valueOf(conf.getCount()));
                                break;
                            }
                        }
                    }

                    for (List<Times> li : gpuComplexLists) {
                        for (ConfigDistribution conf : gpunowList) {
                            if (li.get(0).getType().equals(conf.getProperty())) {
                                li.get(li.size() - 1).setNumber(Integer.valueOf(conf.getCount()));
                                break;
                            }
                        }
                    }

                    for (ConfigDistribution sr : srList) {
                        if (null == sr) continue;
                        for (ConfigDistribution srNow : resolutionList) {
                            if (null == srNow) continue;
                            if (sr.getProperty().equals(srNow.getProperty())) {
                                Integer count = Integer.valueOf(sr.getCount()) + Integer.valueOf(srNow.getCount());
                                sr.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }

                    for (ConfigDistribution br : brList) {
                        if (null == br) continue;
                        for (ConfigDistribution brNow : brandList) {
                            if (null == brNow) continue;
                            if (br.getProperty().equals(brNow.getProperty())) {
                                Integer count = Integer.valueOf(br.getCount()) + Integer.valueOf(brNow.getCount());
                                br.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }

                    for (ConfigDistribution os : osList) {
                        if (null == os) continue;
                        for (ConfigDistribution osNow : osnowList) {
                            if (null == osNow) continue;
                            if (os.getProperty().equals(osNow.getProperty())) {
                                Integer count = Integer.valueOf(os.getCount()) + Integer.valueOf(osNow.getCount());
                                os.setCount(String.valueOf(count));
                                break;
                            }
                        }
                    }

                    for (ConfigDistribution rm : rmList) {
                        if (null == rm) continue;
                        for (ConfigDistribution rmNow : memoryList) {
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
            configMap.put(FrontEnd.RESOLUTION, this.listSort(srList));
            configMap.put(FrontEnd.BRAND, this.listSort(brList));
            configMap.put(FrontEnd.OS, this.listSort(osList));
            configMap.put(FrontEnd.MEMORY, this.listSort(rmList));
            configMap.put(FrontEnd.CPU, cpuComplexLists);
            configMap.put(FrontEnd.GPU, gpuComplexLists);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return BaseResultUtil.resultSuccess("查询成功", configMap);
    }

    /**
     * 降序
     * 根据list集合中ConfigDistribution对象的count属性
     */
    private List<ConfigDistribution> listSort(List<ConfigDistribution> list) {
        Collections.sort(list, new Comparator<ConfigDistribution>() {
            @Override
            public int compare(ConfigDistribution o1, ConfigDistribution o2) {
                //降序
                return Integer.valueOf(o2.getCount()).compareTo(Integer.valueOf(o1.getCount()));
            }
        });
        return list;
    }

    @Override
    public List<ConfigDistribution> selectScreenResolutionNow(Times times) {
        return configDistribution.selectScreenResolutionNow(times);
    }

    @Override
    public List<ConfigDistribution> selectBrandNow(Times times) {
        return configDistribution.selectBrandNow(times);
    }

    @Override
    public List<ConfigDistribution> selectOSNow(Times times) {
        return configDistribution.selectOSNow(times);
    }

    @Override
    public List<ConfigDistribution> selectRunMemoryNow(Times times) {
        return configDistribution.selectRunMemoryNow(times);
    }

    @Override
    public List<ConfigDistribution> selectScreenResolution(List<Times> timeDateList) {
        return configDistribution.selectScreenResolution(timeDateList);
    }

    @Override
    public List<ConfigDistribution> selectBrand(List<Times> timeDateList) {
        return configDistribution.selectBrand(timeDateList);
    }

    @Override
    public List<ConfigDistribution> selectOS(List<Times> timeDateList) {
        return configDistribution.selectOS(timeDateList);
    }

    @Override
    public List<ConfigDistribution> selectRunMemory(List<Times> timeDateList) {
        return configDistribution.selectRunMemory(timeDateList);
    }

    @Override
    public HttpResult test() {
        return BaseResultUtil.resultSuccess("test");
    }

    @Override
    public List<ConfigDistribution> selectCPUNow(Times times) {
        return configDistribution.selectCPUNow(times);
    }

    @Override
    public List<ConfigDistribution> selectGPUNow(Times times) {
        return configDistribution.selectGPUNow(times);
    }

    @Override
    public HttpResult selectNumOfPeople(Times times) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<ConfigDistribution> numList = new LinkedList<>();
        try {
            Date startTime = sdf.parse(times.getStartTime());
            Date endTime = sdf.parse(times.getEndTime());
            List<Times> timeDateList = new LinkedList<>();
            String timeDate = sdf.format(startTime);
            Times date;
            do {
                date = new Times();
                date.setTimes(timeDate);
                timeDateList.add(date);
                timeDate = sdf.format(sdf.parse(sdf.format(startTime.getTime() + 24 * 60 * 60 * 1000)));
                startTime = sdf.parse(timeDate);
            } while (startTime.before(endTime));
            date = new Times();
            date.setTimes(sdf.format(endTime));
            timeDateList.add(date);
            numList = configDistribution.selectNumOfPeople(timeDateList);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return BaseResultUtil.resultSuccess("查询成功", numList);
    }

    @Override
    public HttpResult hiveTest() {
        List<ConfigDistribution> list = configDistribution.hiveTest();
        return BaseResultUtil.resultSuccess("succ", list);
    }

    @Override
    public ConfigDistribution selectMaxTimeDateResolution() {
        return configDistribution.selectMaxTimeDateResolution();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String insertBatch(List<ConfigDistribution> srList, List<ConfigDistribution> brList, List<ConfigDistribution> osList, List<ConfigDistribution> rmList, List<ConfigDistribution> cpuList, List<ConfigDistribution> gpuList, List<ConfigDistribution> numList) {
        int sr = 0, br = 0, os = 0, rm = 0, cpu = 0, gpu = 0, num = 0;

        if (null != srList && 0 != srList.size())
            sr = configDistribution.insertBatch(srList);

        if (null != brList && 0 != brList.size())
            br = configDistribution.insertBatch(brList);

        if (null != osList && 0 != osList.size())
            os = configDistribution.insertBatch(osList);

        if (null != rmList && 0 != rmList.size())
            rm = configDistribution.insertBatch(rmList);

        if (null != cpuList && 0 != cpuList.size())
            cpu = configDistribution.insertBatch(cpuList);

        if (null != gpuList && 0 != gpuList.size())
            gpu = configDistribution.insertBatch(gpuList);

        if (null != numList && 0 != numList.size())
            num = configDistribution.insertBatch(numList);

        return sr + " : " + br + " : " + os + " : " + rm + " : " + cpu + " : " + gpu + " : " + num;
    }

    /*
     * ###
     */

    @Override
    public List hiveSelectScreenResolution(Times times) {
        return configDistribution.hiveSelectScreenResolution(times);
    }

    @Override
    public List hiveSelectBrand(Times times) {
        return configDistribution.hiveSelectBrand(times);
    }

    @Override
    public List hiveSelectOS(Times times) {
        return configDistribution.hiveSelectOS(times);
    }

    @Override
    public List hiveSelectRunMemory(Times times) {
        return configDistribution.hiveSelectRunMemory(times);
    }

    @Override
    public List<ConfigDistribution> hiveSelectCPU(Times times) {
        return configDistribution.hiveSelectCPU(times);
    }

    @Override
    public List<ConfigDistribution> hiveSelectGPU(Times times) {
        return configDistribution.hiveSelectGPU(times);
    }

    @Override
    public List<ConfigDistribution> hiveSelectNumOfPeople(Times times) {
        return configDistribution.hiveSelectNumOfPeople(times);
    }
}
