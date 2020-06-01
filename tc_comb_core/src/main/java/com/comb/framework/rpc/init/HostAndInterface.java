package com.comb.framework.rpc.init;


import com.comb.framework.rpc.service.RouteService;

import java.util.List;

/**
 * 主机与接口的对应关系
 * @author fwb
 *
 */
public class HostAndInterface {
	
	private List<Host> hosts;
	private List<String> interfaces;
	private List<String> serializedClass;
	private List<String> serializedClassByJava;
	private boolean serialized = true;
	private boolean enable = true;
	private boolean connectInit = false;
	private RouteService routeService = null;
	private String routeServiceName;
	
	public List<Host> getHosts() {
		return hosts;
	}
	public void setHosts(List<Host> hosts) {
		this.hosts = hosts;
	}
	
	public List<String> getInterfaces() {
		return interfaces;
	}
	public void setInterfaces(List<String> interfaces) {
		this.interfaces = interfaces;
	}
	
	public List<String> getSerializedClass() {
		return serializedClass;
	}
	public void setSerializedClass(List<String> serializedClass) {
		this.serializedClass = serializedClass;
	}
	
	public List<String> getSerializedClassByJava() {
		return serializedClassByJava;
	}
	public void setSerializedClassByJava(List<String> serializedClassByJava) {
		this.serializedClassByJava = serializedClassByJava;
	}
	
	public boolean isSerialized() {
		return serialized;
	}
	public void setSerialized(boolean serialized) {
		this.serialized = serialized;
	}
	
	public boolean isEnable() {
		return enable;
	}
	public void setEnable(boolean enable) {
		this.enable = enable;
	}
	
	public boolean isConnectInit() {
		return connectInit;
	}
	public void setConnectInit(boolean connectInit) {
		this.connectInit = connectInit;
	}
	
	public RouteService getRouteService() {
		return routeService;
	}
	public void setRouteService(RouteService routeService) {
		this.routeService = routeService;
	}
	public String getRouteServiceName() {
		return routeServiceName;
	}
	public void setRouteServiceName(String routeServiceName) {
		this.routeServiceName = routeServiceName;
	}
	
}
