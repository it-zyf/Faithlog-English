package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.DelayTimeDistribution;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;


@Component
public class DelayTimeDistributionDao extends BaseMyIbatisDao<DelayTimeDistribution, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<DelayTimeDistribution> getEntityClass() {
        return DelayTimeDistribution.class;
    }

    public DelayTimeDistribution selectMaxTimeDateDealyTime() {
        return this.db().selectOne(path + "selectMaxTimeDateDealyTime");
    }

    public int insertBatch(LinkedList<DelayTimeDistribution> delayTimeList) {
        return this.db().insert(path + "insertBatch", delayTimeList);
    }

    public List<DelayTimeDistribution> selectListByTimeDate(List<Times> timeDateList) {
        return this.db().selectList(path + "selectListByTimeDate", timeDateList);
    }

    public String selectTableByColumn(tableDate a) {
        return this.db().selectOne(path + "selectTableByColumn", a);
    }
}
