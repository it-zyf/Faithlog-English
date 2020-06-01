package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RoleGetMailContentLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class RoleGetMailContentLogDao extends BaseMyIbatisDao<RoleGetMailContentLog, Long> {

	public Class<RoleGetMailContentLog> getEntityClass() {
		return RoleGetMailContentLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<RoleGetMailContentLog> hive_select_RoleGetMail(Condition condition) {
		return this.db().selectList(path + "getRoleGetMail", condition);
	}
	public int select_RoleGetMail_Count(Condition condition) {
		return this.db().selectOne(path + "getRoleGetMailCount", condition);
	}
	
}
