package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RankListLog;
import com.umi.ga.analysis.model.RoleTaskLog;
import com.umi.ga.entitys.Condition;
import com.umi.ga.entitys.RankingEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RankListDao extends BaseMyIbatisDao<RankListLog, Long> {
    @Override
    public Class<RankListLog> getEntityClass() {
        return RankListLog.class;
    }

    String path = this.getEntityClass().getSimpleName() + ".";

    public List<RankListLog> hive_select_rankingList(RankingEntity condition) {
        return this.db().selectList(path + "select_rankingList", condition);
    }

    public int select_rankingList_Count(RankingEntity condition) {
        return this.db().selectOne(path + "select_rankingList_count", condition);
    }

}
