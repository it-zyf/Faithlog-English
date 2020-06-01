package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;

/**
 * @Author guowenchuang
 * @Date 2020/1/6 16:46
 */
public interface HadoopLogAllTrendService {
    HttpResult queryAllTrend(DailyAnalysis dailyAnalysis);

    DailyAnalysis hiveQueryNumber(Flag flag);
}
