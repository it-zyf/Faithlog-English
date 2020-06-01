package com.comb.framework.redis.serializer;

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
public class KryoRedisRegistration {

	private static Map<Class<?>, Serializer> KRYO_REDIS_SERIALIZER_MAP = new HashMap<Class<?>, Serializer>();
	private static List<Class<?>> KRYO_REDIS_SERIALIZER_LIST = new ArrayList<Class<?>>();
	
	public static void register(Class<?> clazz){
		KRYO_REDIS_SERIALIZER_LIST.add(clazz);
	}
	
	public static void register(Class<?> clazz, Serializer serializer){
		KRYO_REDIS_SERIALIZER_MAP.put(clazz, serializer);
	}
	
	public static Map<Class<?>, Serializer> getSerializerMap(){
		return KRYO_REDIS_SERIALIZER_MAP;
	}
	
	public static List<Class<?>> getSerializerList(){
		return KRYO_REDIS_SERIALIZER_LIST;
	}
} 
