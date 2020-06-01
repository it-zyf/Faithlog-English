package com.comb.framework.rpc.init;

import com.comb.framework.channel.ChannelMap;
import com.comb.framework.rpc.client.GRpcClient;
import com.comb.framework.rpc.client.IRpcClientApi;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public abstract class AbstractInitChannel implements InitChannel {

	@Autowired
	private InitConfig initConfig;

	@Override
	public void init() {
//		if (initConfig != null) {
//			for (HostAndInterface entity : initConfig.getHostInterfaceList()) {
//				if (entity.isEnable()) {
//					for (Host host : entity.getHosts()) {
//						IRpcClientApi client = new GRpcClient(host.getHost(), host.getPort());
//						ChannelMap.put(host.getHost() + ":" + host.getPort(), client);
//					}
//					// 设置接口、路由与通道的映射关系
//					List<String> list = entity.getInterfaces();
//					for (String interfaceName : list) {
//						ChannelMap.put(interfaceName, entity.getHosts(), entity.getRouteService(), entity.getRouteServiceName());
//					}
//				}
//			}
//		}
	}

}
