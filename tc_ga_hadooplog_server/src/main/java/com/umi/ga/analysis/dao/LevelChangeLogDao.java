package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.LevelChangeLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class LevelChangeLogDao extends BaseMyIbatisDao<LevelChangeLog, Long> {

	public Class<LevelChangeLog> getEntityClass() {
		return LevelChangeLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<LevelChangeLog> hive_select_Level_ChangeLog(Condition condition) {
		return this.db().selectList(path + "getLevel_Change", condition);
	}
	public int select_Level_ChangeLog_Count(Condition condition) {
		return this.db().selectOne(path + "getLevel_ChangeCount", condition);
	}
}
