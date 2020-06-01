package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.eventDistribution;
import org.springframework.stereotype.Component;

@Component
public class eventDistributionDao extends BaseMyIbatisDao<eventDistribution, Long> {

	public Class<eventDistribution> getEntityClass() {
		return eventDistribution.class;
	}
	
}
