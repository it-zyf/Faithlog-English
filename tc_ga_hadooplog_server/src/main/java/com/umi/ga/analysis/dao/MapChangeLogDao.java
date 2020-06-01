package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.MapChangeLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class MapChangeLogDao extends BaseMyIbatisDao<MapChangeLog, Long> {

	public Class<MapChangeLog> getEntityClass() {
		return MapChangeLog.class;
	}


	String path = this.getEntityClass().getSimpleName() + ".";

	public List<MapChangeLog> hive_query_timeOutIn(Condition condition) {
		return this.db().selectList(path + "findTimeOut", condition);
	}
	public int query_timeOutIn_Count(Condition condition) {
		return this.db().selectOne(path + "findTimeOutCount", condition);
	}


}
