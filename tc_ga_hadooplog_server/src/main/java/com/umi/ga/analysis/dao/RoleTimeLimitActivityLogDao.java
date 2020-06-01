package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RoleTimeLimitActivityLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class RoleTimeLimitActivityLogDao extends BaseMyIbatisDao<RoleTimeLimitActivityLog, Long> {

	public Class<RoleTimeLimitActivityLog> getEntityClass() {
		return RoleTimeLimitActivityLog.class;
	}


	String path = this.getEntityClass().getSimpleName() + ".";

	public List<RoleTimeLimitActivityLog> hive_findListByActive(Condition condition) {
		return this.db().selectList(path + "findListByActive", condition);
	}
	public int queryGrowth_FundGrowth_Count(Condition condition) {
		return this.db().selectOne(path + "queryActive_count", condition);
	}


}
