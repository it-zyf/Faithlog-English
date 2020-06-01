package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RoleTimeLimitActivityLog;
import com.umi.ga.analysis.model.ServerAssistantLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServerAssistantLogDao extends BaseMyIbatisDao<ServerAssistantLog, Long> {

    @Override
    public Class<ServerAssistantLog> getEntityClass() {
        return ServerAssistantLog.class;
    }


    String path = this.getEntityClass().getSimpleName() + ".";

    public int findAllAssistant(Condition condition) {
        return this.db().selectOne(path + "findAllAssistant", condition);
    }


}
