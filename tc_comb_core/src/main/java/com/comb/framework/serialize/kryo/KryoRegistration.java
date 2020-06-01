package com.comb.framework.serialize.kryo;

import com.esotericsoftware.kryo.Serializer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 初始化
 * 注册对象采用的序列化方式
 * @author Administrator
 *
 */
public class KryoRegistration {

	private static boolean isSerialized = true;
	private static Map<Class<?>, Serializer> serializerMap = new HashMap<Class<?>, Serializer>();
	private static List<Class<?>> serializerList = new ArrayList<Class<?>>();
	
	public static void register(Class<?> clazz){
		serializerList.add(clazz);
	}
	
	public static void register(Class<?> clazz, Serializer serializer){
		serializerMap.put(clazz, serializer);
	}
	
	public static Map<Class<?>, Serializer> getSerializerMap(){
		return serializerMap;
	}
	
	public static List<Class<?>> getSerializerList(){
		return serializerList;
	}

	public static boolean isSerialized() {
		return isSerialized;
	}

	public static void setSerialized(boolean isSerialized) {
		KryoRegistration.isSerialized = isSerialized;
	}

	public static void setSerializerMap(Map<Class<?>, Serializer> serializerMap) {
		KryoRegistration.serializerMap = serializerMap;
	}

	public static void setSerializerList(List<Class<?>> serializerList) {
		KryoRegistration.serializerList = serializerList;
	}
	
	public static void addSerializerMap(Map<Class<?>, Serializer> serializerMap) {
		if(null != serializerMap && !serializerMap.isEmpty()){
			KryoRegistration.serializerMap.putAll(serializerMap);
		}
	}

	public static void addSerializerList(List<Class<?>> serializerList) {
		if(null != serializerList && !serializerList.isEmpty()){
			KryoRegistration.serializerList.addAll(serializerList);
		}
	}
	
} 
