package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.CreateRoleLog;
import com.umi.ga.analysis.model.CrossServerBossKillLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

    @Component
    public class CrossServerBossKillLogDao extends BaseMyIbatisDao<CrossServerBossKillLog, Long> {

        @Override
        public Class<CrossServerBossKillLog> getEntityClass() {
            return CrossServerBossKillLog.class;
        }
        String path = this.getEntityClass().getSimpleName() + ".";

        public List<CrossServerBossKillLog> hive_query_legion(Condition condition) {
            return this.db().selectList(path + "findLegionList", condition);
        }

        public int query_legion_Count(Condition condition) {
            return this.db().selectOne(path + "findLegionListCount", condition);
        }
    }




