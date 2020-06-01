package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.LTVAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.AnalysisData;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;

import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/2/12 17:56
 */
public interface HadoopLogLTVAnalysisService {
    HttpResult queryLTVAnalysis(Times time);

    int insert(LTVAnalysis ltvAnalysis);

    Integer hiveSelectRegisterNumber(Times time);

    List<Flag> hiveSelectFirstLogin(Times time);

    int updateLTV(Times t);

    int insertBatch(List<LTVAnalysis> ltvList);

    List<AnalysisData> hiveSelectLtvLast(Times time);

    int updateLTVBatch(List<AnalysisData> ltvLastList);
}
