package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RoleTaskLog;
import com.umi.ga.analysis.model.TaskEntity;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class RoleTaskLogDao extends BaseMyIbatisDao<RoleTaskLog, Long> {

	public Class<RoleTaskLog> getEntityClass() {
		return RoleTaskLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<RoleTaskLog> hive_select_TaskLog(Condition condition) {
		return this.db().selectList(path + "getRole_Task", condition);
	}
	public int select_TaskLog_Count(Condition condition) {
		return this.db().selectOne(path + "getRole_TaskCount", condition);
	}

	public int select_LossOfTask_log_Count(Condition condition) {
		return this.db().selectOne(path + "getLossOfTaskCount", condition);
	}

	public List<TaskEntity> hive_elect_LossOfTask_log(Condition condition) {
		return this.db().selectList(path + "getTaskEntity", condition);
	}


}
