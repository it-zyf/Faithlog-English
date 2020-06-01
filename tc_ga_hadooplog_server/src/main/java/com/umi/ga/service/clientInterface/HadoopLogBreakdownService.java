package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.BreakdownDistribution;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;

import java.util.List;


public interface HadoopLogBreakdownService {

    HttpResult selectNumOfBreakdown(Times times);

    HttpResult selectBreakDown(Times times);

    List<Times> hiveSelectTime(Times times);

    int insertBatch(List<BreakdownDistribution> bdDisList);

    HttpResult selectBreakdownNow(Times times);

    String insertBatch2(List<BreakdownDistribution> srList, List<BreakdownDistribution> brList, List<BreakdownDistribution> osList, List<BreakdownDistribution> networkList, List<BreakdownDistribution> rmList, List<BreakdownDistribution> cpuList, List<BreakdownDistribution> gpuList);

    List<BreakdownDistribution> hiveSelectBreakdownScreenResolution(Times times);

    List<BreakdownDistribution> hiveSelectBreakdownBrand(Times times);

    List<BreakdownDistribution> hiveSelectBreakdownOS(Times times);

    List<BreakdownDistribution> hiveSelectBreakdownNetwork(Times times);

    List<BreakdownDistribution> hiveSelectBreakdownRunMemory(Times times);

    List<BreakdownDistribution> hiveSelectBreakdownCPU(Times times);

    List<BreakdownDistribution> hiveSelectBreakdownGPU(Times times);

    List<BreakdownDistribution> selectBreakdownScreenResolutionNow(Times times);

    List<BreakdownDistribution> selectBreakdownBrandNow(Times times);

    List<BreakdownDistribution> selectBreakdownOSNow(Times times);

    List<BreakdownDistribution> selectBreakdownNetworkNow(Times times);

    List<BreakdownDistribution> selectBreakdownRunMemoryNow(Times times);

    List<BreakdownDistribution> selectBreakdownCPUNow(Times times);

    List<BreakdownDistribution> selectBreakdownGPUNow(Times times);

    HttpResult selectBreakDownCount(Times times);

    List<BreakdownDistribution> hiveSelectBreakdownTime(Times times);
}
