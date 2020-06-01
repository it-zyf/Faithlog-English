package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.analysis.model.RealTimeStatistics;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.HeartLog;
import com.umi.ga.entitys.RealTimeRetain;
import com.umi.ga.entitys.Times;

import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/1/13 19:35
 */
public interface HadoopLogRealTimeStatisticsService {
    HttpResult queryRealTimeOnline(Times time);

    List<HeartLog> hiveSelectHeartLog(Times time);

    String insert(List<RealTimeStatistics> rtList, List<RealTimeRetain> rtRetainList);

    HttpResult queryRealTimeStatistics(Times time);

    String hiveSelectMaxTime(Times time);

    HttpResult hiveRealTimeOnline(Flag flag);

    HttpResult hiveRealTimeStatistics(Flag flag);

}
