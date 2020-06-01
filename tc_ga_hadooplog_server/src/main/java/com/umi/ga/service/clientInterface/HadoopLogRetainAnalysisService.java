package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.common.HttpResult;

/**
 * @Author guowenchuang
 * @Date 2020/1/6 20:44
 */
public interface HadoopLogRetainAnalysisService {
    HttpResult queryRetain(DailyAnalysis dailyAnalysis);
}
