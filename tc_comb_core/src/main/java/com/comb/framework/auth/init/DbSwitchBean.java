package com.comb.framework.auth.init;

import java.util.List;

/**
 * 数据源配置信息bean
 * @author fwb
 *
 */
public class DbSwitchBean {

	//主数据库名称
	private String dataSourceName;
	//所以switch集合
	private List<String> dbSwitchList;
	
	public String getDataSourceName() {
		return dataSourceName;
	}
	public void setDataSourceName(String dataSourceName) {
		this.dataSourceName = dataSourceName;
	}
	
	public List<String> getDbSwitchList() {
		return dbSwitchList;
	}
	public void setDbSwitchList(List<String> dbSwitchList) {
		this.dbSwitchList = dbSwitchList;
	}
	
}
