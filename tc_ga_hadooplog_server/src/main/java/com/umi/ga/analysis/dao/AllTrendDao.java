package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.AllTrend;
import org.springframework.stereotype.Component;

@Component
public class AllTrendDao extends BaseMyIbatisDao<AllTrend, Long> {

	public Class<AllTrend> getEntityClass() {
		return AllTrend.class;
	}
	
}
