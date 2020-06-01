package com.umi.ga.service.startTimeDis;

import com.umi.ga.analysis.model.StartTimeDistribution;
import com.umi.ga.entitys.StartRetarder;
import com.umi.ga.entitys.Times;

import java.util.List;

public interface HadoopLogStartTimeDisService {

    List<StartTimeDistribution> selectTimeDate();

    StartTimeDistribution selectMaxTimeDate();

    List<StartRetarder> hiveSelectStartTime(Times times);

    int insertBatch(List<StartTimeDistribution> stDisList);

    StartTimeDistribution hiveSelectCount(Times times);
}
