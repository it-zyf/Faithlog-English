package com.umi.ga.service.startTimeDis.impl;

import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.StartTimeDistributionDao;
import com.umi.ga.analysis.dao.dataInfoDao;
import com.umi.ga.analysis.model.StartTimeDistribution;
import com.umi.ga.entitys.StartRetarder;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.startTimeDis.HadoopLogStartTimeDisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogStartTimeDisServiceImpl implements HadoopLogStartTimeDisService {

    @Autowired
    private StartTimeDistributionDao stDistribution;

    @Autowired
    private dataInfoDao dataInfo;

    @Override
    public List<StartTimeDistribution> selectTimeDate() {
        return this.stDistribution.selectTimeDate();
    }

    @Override
    public StartTimeDistribution selectMaxTimeDate() {
        return this.stDistribution.selectMaxTimeDate();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int insertBatch(List<StartTimeDistribution> stDisList) {
        return this.stDistribution.insertBatch(stDisList);
    }

    @Override
    public StartTimeDistribution hiveSelectCount(Times times) {
        return this.stDistribution.hiveSelectCount(times);
    }

    @Override
    public List<StartRetarder> hiveSelectStartTime(Times times) {
        return this.dataInfo.hiveSelectStartTime(times);
    }
}
