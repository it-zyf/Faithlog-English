package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RoleChatLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class RoleChatLogDao extends BaseMyIbatisDao<RoleChatLog, Long> {

	public Class<RoleChatLog> getEntityClass() {
		return RoleChatLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<RoleChatLog> hive_select_RoleChat(Condition condition) {
		return this.db().selectList(path + "getRoleChat", condition);
	}
	public int select_RoleChat_Count(Condition condition) {
		return this.db().selectOne(path + "getRoleChatCount", condition);
	}
	
}
