package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.ItemChangeLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class ItemChangeLogDao extends BaseMyIbatisDao<ItemChangeLog, Long> {

	public Class<ItemChangeLog> getEntityClass() {
		return ItemChangeLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<ItemChangeLog> hive_select_ArticlesFlowing(Condition condition) {
		return this.db().selectList(path + "getArticlesFlowing", condition);
	}
	public int select_ArticlesFlowing_Count(Condition condition) {
		return this.db().selectOne(path + "getArticlesFlowingCount", condition);
	}
	
}
