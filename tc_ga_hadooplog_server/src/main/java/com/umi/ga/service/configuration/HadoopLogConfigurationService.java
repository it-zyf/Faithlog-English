package com.umi.ga.service.configuration;

import com.umi.ga.analysis.model.ConfigDistribution;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;

import java.util.List;

public interface HadoopLogConfigurationService {

    List<ConfigDistribution> hiveSelectScreenResolution(Times times);

    List<ConfigDistribution> hiveSelectBrand(Times times);

    List<ConfigDistribution> hiveSelectOS(Times times);

    List<ConfigDistribution> hiveSelectRunMemory(Times times);

    List<ConfigDistribution> hiveSelectCPU(Times times);

    List<ConfigDistribution> hiveSelectGPU(Times times);

    List<ConfigDistribution> hiveSelectNumOfPeople(Times times);
    /*
     * ###
     */

    String insertBatch(List<ConfigDistribution> srList, List<ConfigDistribution> brList, List<ConfigDistribution> osList, List<ConfigDistribution> rmList, List<ConfigDistribution> cpuList, List<ConfigDistribution> gpuList, List<ConfigDistribution> numList);

    ConfigDistribution selectMaxTimeDateResolution();

    HttpResult selectConfiguration(Times times);

    List<ConfigDistribution> selectScreenResolutionNow(Times times);

    List<ConfigDistribution> selectBrandNow(Times times);

    List<ConfigDistribution> selectOSNow(Times times);

    List<ConfigDistribution> selectRunMemoryNow(Times times);


    List<ConfigDistribution> selectScreenResolution(List<Times> timeDateList);

    List<ConfigDistribution> selectBrand(List<Times> timeDateList);

    List<ConfigDistribution> selectOS(List<Times> timeDateList);

    List<ConfigDistribution> selectRunMemory(List<Times> timeDateList);


    HttpResult test();

    List<ConfigDistribution> selectCPUNow(Times times);

    List<ConfigDistribution> selectGPUNow(Times times);

    HttpResult selectNumOfPeople(Times times);

    HttpResult hiveTest();
}
