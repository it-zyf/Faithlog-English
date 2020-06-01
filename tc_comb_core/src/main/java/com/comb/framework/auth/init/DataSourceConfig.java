package com.comb.framework.auth.init;

import org.springframework.beans.factory.InitializingBean;

import java.util.List;

/**
 * 数据库配置类
 * @author fwb
 *
 */
public class DataSourceConfig implements InitializingBean{

	private List<DbSwitchBean> dataSourceList;

	public List<DbSwitchBean> getDataSourceList() {
		return dataSourceList;
	}

	public void setDataSourceList(List<DbSwitchBean> dataSourceList) {
		this.dataSourceList = dataSourceList;
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		if(dataSourceList != null && !dataSourceList.isEmpty()){
			for(DbSwitchBean entity : dataSourceList){
				DataSourceConstant.DATA_SOURCE_MAP.put(entity.getDataSourceName(), entity.getDbSwitchList());
			}
		}
	}

}
