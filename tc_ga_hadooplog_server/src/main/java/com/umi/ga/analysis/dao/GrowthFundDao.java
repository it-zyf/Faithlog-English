package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.GrowthFund;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class GrowthFundDao extends BaseMyIbatisDao<GrowthFund, Long> {

	public Class<GrowthFund> getEntityClass() {
		return GrowthFund.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<GrowthFund> hive_queryGrowth_FundGrowth(Condition condition) {
		return this.db().selectList(path + "findAll", condition);
	}
	public int queryGrowth_FundGrowth_Count(Condition condition) {
		return this.db().selectOne(path + "findAll_Count", condition);
	}


}
