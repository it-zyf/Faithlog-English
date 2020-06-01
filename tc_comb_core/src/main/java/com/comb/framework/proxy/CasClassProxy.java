package com.comb.framework.proxy;

import com.comb.framework.proxy.handler.CasHandler;
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
public class CasClassProxy<T> {
	private Map<T, Object> proxyMap = new ConcurrentHashMap<>();
	private static CasClassProxy instance;
	private CasClassProxy(){
	}
	public static CasClassProxy getInstance(){
		if(instance == null){
			instance = new CasClassProxy();
		}
		return instance;
	}

	public Object getProxyClass(T t, Class<?> cl){
		if(proxyMap.containsKey(t)){
			return proxyMap.get(t);
		}
		Object object = create(t, cl);
		proxyMap.put(t, object);
		return object;
	}
	private Object create(T t, Class<?> cl) {
		CasHandler handler = new CasHandler(t);
		return Proxy.newProxyInstance(Thread.currentThread().getContextClassLoader(), new Class[] { cl }, handler);
	}
}
