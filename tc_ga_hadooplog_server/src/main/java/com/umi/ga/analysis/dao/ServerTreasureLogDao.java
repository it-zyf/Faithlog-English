package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.ServerAssistantLog;
import com.umi.ga.analysis.model.ServerTreasureLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

@Component
public class ServerTreasureLogDao extends BaseMyIbatisDao<ServerTreasureLog, Long> {
    @Override
    public Class<ServerTreasureLog> getEntityClass() {
        return ServerTreasureLog.class;
    }
    String path = this.getEntityClass().getSimpleName() + ".";

    public int findAllTreasure(Condition condition) {
        return this.db().selectOne(path + "findAllTreasure", condition);
    }

    public int findAllCount(Condition condition) {
        return this.db().selectOne(path + "findAllCount", condition);
    }

}
