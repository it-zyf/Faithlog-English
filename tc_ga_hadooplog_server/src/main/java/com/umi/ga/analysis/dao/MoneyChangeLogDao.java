package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.MoneyChangeLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class MoneyChangeLogDao extends BaseMyIbatisDao<MoneyChangeLog, Long> {

	public Class<MoneyChangeLog> getEntityClass() {
		return MoneyChangeLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<MoneyChangeLog> hive_select_Money_ChangeLog(Condition condition) {
		return this.db().selectList(path + "getMoney_change", condition);
	}
	public int select_Money_ChangeLog_Count(Condition condition) {
		return this.db().selectOne(path + "getMoney_changeCount", condition);
	}

}
