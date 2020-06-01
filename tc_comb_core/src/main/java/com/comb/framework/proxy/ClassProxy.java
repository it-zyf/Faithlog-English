package com.comb.framework.proxy;

import com.comb.framework.proxy.handler.ProxyHandler;

import java.lang.reflect.Proxy;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 接口代理生成类
 * 
 * @author fwb
 *
 */
public class ClassProxy {
	private Map<Class<?>, Object> proxyMap = new ConcurrentHashMap<>();
	private static ClassProxy instance;
	private ClassProxy(){
	}
	public static ClassProxy getInstance(){
		if(instance == null){
			instance = new ClassProxy();
		}
		return instance;
	}

	public Object getProxyClass(Class<?> api){
		if(proxyMap.containsKey(api)){
			return proxyMap.get(api);
		}
		Object object = create(api);
		proxyMap.put(api, object);
		return object;
	}
	private Object create(Class<?> api) {
		ProxyHandler handler = new ProxyHandler(api);
		return Proxy.newProxyInstance(Thread.currentThread().getContextClassLoader(), new Class[] { api }, handler);
	}
}
