package com.comb.framework.proxy.handler;

import com.comb.framework.channel.ChannelMap;
import com.comb.framework.rpc.model.Request;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.HashSet;
import java.util.Set;

public class ProxyHandler implements InvocationHandler{
	
	private static Set<String> PROXY_EXCLUDE_METHODS = new HashSet<String>();

	static{
		PROXY_EXCLUDE_METHODS.add("toString");
		PROXY_EXCLUDE_METHODS.add("hashCode");
	}
	
	private Class<?> api;
	
	public ProxyHandler(Class<?> api){
		this.api = api;
	}
	
	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
		if(PROXY_EXCLUDE_METHODS.contains(method.getName())){
			return null;
		}
		if(args != null){
			for(Object obj : args){
				if(obj == null){
					throw new ProxyException("传入的参数为null");
				}
			}
		}
		Request request = new Request(null, api, method.getName(), args);
		return ChannelMap.sent(request);
    }
}
