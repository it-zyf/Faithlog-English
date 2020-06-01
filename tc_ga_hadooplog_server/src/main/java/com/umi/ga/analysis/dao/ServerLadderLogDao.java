package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.ServerCrystalLog;
import com.umi.ga.analysis.model.ServerLadderLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

@Component
public class ServerLadderLogDao extends BaseMyIbatisDao<ServerLadderLog, Long> {
    @Override
    public Class<ServerLadderLog> getEntityClass() {
        return ServerLadderLog.class;
    }

    String path = this.getEntityClass().getSimpleName() + ".";

    public int findAllLadderNum(Condition condition) {
        return this.db().selectOne(path + "findAllLadderNum", condition);
    }
}
