package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.analysis.model.PayAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;

import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/2/10 17:11
 */
public interface HadoopLogPayForAnalysisService {
    HttpResult queryPayForAnalysis(Flag flag);

    int insert(PayAnalysis payAnalysis);

    Double hiveSelectPayAmount(Times time);

    Integer hiveSelectPayNumber(Times time);

    Double hiveSelectFirstPayAmount(Times time);

    Integer hiveSelectFirstPayNumber(Times time);

    Integer hiveSelectPayCount(Times time);

    Integer hiveSelectActiveNumber(Times time);

    List<Flag> hiveSelectPayList(DailyAnalysis dailyAnalysis);

    List<Flag> hiveSelectPayAmountList(DailyAnalysis dailyAnalysis);

    int insertBatch(List<PayAnalysis> payAnalysisList);
}
