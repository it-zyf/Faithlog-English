package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.OccupationPkLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class OccupationPkLogDao extends BaseMyIbatisDao<OccupationPkLog, Long> {

	public Class<OccupationPkLog> getEntityClass() {
		return OccupationPkLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<OccupationPkLog> hive_query_PK(Condition condition) {
		return this.db().selectList(path + "findAllPKList", condition);
	}
	public int query_PK_Count(Condition condition) {
		return this.db().selectOne(path + "findAllPKListCount", condition);
	}
}
