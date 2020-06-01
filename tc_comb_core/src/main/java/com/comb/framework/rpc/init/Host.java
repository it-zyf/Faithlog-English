package com.comb.framework.rpc.init;

import com.comb.framework.rpc.client.GRpcClient;
import com.comb.framework.rpc.client.IRpcClientApi;

public class Host {

	private String id;
	private String ip = "";
	private Integer port = 0;
	private String serviceName = "";
	private IRpcClientApi iRpcClientApi = null;

	public Host(String serviceName, String ip, Integer port) {
		this.serviceName = serviceName;
		this.ip = ip;
		this.port = port;
		iRpcClientApi = new GRpcClient(ip, port);
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public Integer getPort() {
		return port;
	}

	public void setPort(Integer port) {
		this.port = port;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public String getId(){
		if(id == null){
			id = ip + ":" + port;
		}
		return id;
	}

	public IRpcClientApi getiRpcClientApi() {
		return iRpcClientApi;
	}

	public void setiRpcClientApi(IRpcClientApi iRpcClientApi) {
		this.iRpcClientApi = iRpcClientApi;
	}
}
