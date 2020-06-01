package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.LTVAnalysis;
import com.umi.ga.analysis.model.ManorLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

@Component
public class ManorLogDao extends BaseMyIbatisDao<ManorLog, Long> {
    @Override
    public Class<ManorLog> getEntityClass() {
        return ManorLog.class;
    }


    String path = this.getEntityClass().getSimpleName() + ".";

    public int findAllManorNum(Condition condition) {
        return this.db().selectOne(path + "findAllManorNum", condition);
    }
    public int findPowerNum(Condition condition) {
        return this.db().selectOne(path + "findPowerNum", condition);
    }


}
