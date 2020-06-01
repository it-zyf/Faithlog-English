package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.BeatBoss;
import com.umi.ga.analysis.model.ServerCrystalLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

@Component
public class ServerCrystalLogDao extends BaseMyIbatisDao<ServerCrystalLog, Long> {
    @Override
    public Class<ServerCrystalLog> getEntityClass() {
        return ServerCrystalLog.class;
    }

    String path = this.getEntityClass().getSimpleName() + ".";

    public int findAllCrystalNum(Condition condition) {
        return this.db().selectOne(path + "findAllCrystalNum", condition);
    }
}
