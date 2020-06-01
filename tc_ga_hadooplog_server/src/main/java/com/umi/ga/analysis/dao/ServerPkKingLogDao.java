package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.ServerCrystalLog;
import com.umi.ga.analysis.model.ServerPkKingLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

@Component
public class ServerPkKingLogDao extends BaseMyIbatisDao<ServerPkKingLog, Long> {
    @Override
    public Class<ServerPkKingLog> getEntityClass() {
        return ServerPkKingLog.class;
    }

    String path = this.getEntityClass().getSimpleName() + ".";

    public int findAllPkKingNum(Condition condition) {
        return this.db().selectOne(path + "findAllPkKingNum", condition);
    }
}
