package com.comb.framework.rpc.init;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * RPC初始化配置信息
 * @author Administrator
 *
 */
public class InitConfig {
	
	private List<HostAndInterface> hostInterfaceList;
	
	//服务提供监控路径
	public Set<String> serviceProviderMonitorPaths;

	public List<HostAndInterface> getHostInterfaceList() {
		return hostInterfaceList;
	}

	public void setHostInterfaceList(List<HostAndInterface> hostInterfaceList) {
		this.hostInterfaceList = hostInterfaceList;
	}
	
	public void addHostInterface(HostAndInterface entity){
		if(entity == null){
			return;
		}
		if(hostInterfaceList == null){
			hostInterfaceList = new ArrayList<HostAndInterface>();
		}
		
		hostInterfaceList.add(entity);
	}

	public Set<String> getServiceProviderMonitorPaths() {
		return serviceProviderMonitorPaths;
	}

	public void setServiceProviderMonitorPaths(Set<String> serviceProviderMonitorPaths) {
		this.serviceProviderMonitorPaths = serviceProviderMonitorPaths;
	}

}
