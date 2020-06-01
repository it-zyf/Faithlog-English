package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.BossKillDropLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class BossKillDropLogDao extends BaseMyIbatisDao<BossKillDropLog, Long> {

	public Class<BossKillDropLog> getEntityClass() {
		return BossKillDropLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<BossKillDropLog> hive_query_killDrop(Condition condition) {
		return this.db().selectList(path + "findAllKillBoss", condition);
	}
	public int query_killBoss_Count(Condition condition) {
		return this.db().selectOne(path + "findAllKillBosscount", condition);
	}
	
}
