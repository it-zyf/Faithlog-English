package com.comb.framework.db.dbroute;

import com.comb.framework.auth.ThreadContext;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

/**
 * 动态路由
 * @author
 *
 */
public class DynamicDataSource extends AbstractRoutingDataSource {	
	
	@Override
	protected Object determineCurrentLookupKey() {	
		String ret = ThreadContext.getDataSource();
		if(ret == null){
			ret = "master";
		}
		String methodName = ThreadContext.getMethodName();
		if(methodName != null){
			if(methodName.startsWith("hive")){
				methodName = ThreadContext.getSlaveDataSource();
				if(this.isContains(methodName)){
					ret = methodName;
				}
			}
		}
		return ret;
	}	
	
}
