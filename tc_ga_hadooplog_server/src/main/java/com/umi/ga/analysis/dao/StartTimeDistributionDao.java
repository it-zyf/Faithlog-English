package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.StartTimeDistribution;
import com.umi.ga.entitys.StartRetarder;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class StartTimeDistributionDao extends BaseMyIbatisDao<StartTimeDistribution, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<StartTimeDistribution> getEntityClass() {
        return StartTimeDistribution.class;
    }

    public List<StartTimeDistribution> selectTimeDate() {
        return this.db().selectList(path + "selectTimeDate");
    }

    public StartTimeDistribution selectMaxTimeDate() {
        return this.db().selectOne(path + "selectMaxTimeDate");
    }

    public int insertBatch(List<StartTimeDistribution> stDisList) {
        return this.db().insert(path + "insertBatch", stDisList);
    }

    public List<StartTimeDistribution> selectStartTime(Times times) {
        return this.db().selectList(path + "selectStartTime", times);
    }

    public StartTimeDistribution hiveSelectCount(Times times) {
        return this.db().selectOne(path + "hiveSelectCount", times);
    }

    public List<StartRetarder> selectStartTimeNow(Times times) {
        return this.db().selectList(path + "selectStartTimeNow", times);
    }
}
