package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.eventManage;
import org.springframework.stereotype.Component;

@Component
public class eventManageDao extends BaseMyIbatisDao<eventManage, Long> {

	public Class<eventManage> getEntityClass() {
		return eventManage.class;
	}
	
}
