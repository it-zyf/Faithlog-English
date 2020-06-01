package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.BossKillLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class BossKillLogDao extends BaseMyIbatisDao<BossKillLog, Long> {

	public Class<BossKillLog> getEntityClass() {
		return BossKillLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<BossKillLog> hive_query_killBoss(Condition condition) {
		return this.db().selectList(path + "findAllKillBoss", condition);
	}
	public int query_killBoss_Count(Condition condition) {
		return this.db().selectOne(path + "findAllKillBosscount", condition);
	}
	
}
