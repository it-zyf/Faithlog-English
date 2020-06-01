package com.comb.framework.auth;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * 临时保存session访问时间变量
 * 设定计数和计时功能，超过多少时间或者保存的数量达到多少，即可以更新缓存
 * @author fwb
 *
 */
public  class SessionConcurrentMap<K,V> extends ConcurrentHashMap<String, Long> {

	/**
     * 
     */
    private static final long serialVersionUID = 7523708688372938248L;
    
    
    
    
    private  long createdTime = System.currentTimeMillis();
    private  AtomicInteger counter = new AtomicInteger(0);
    
    /**
     * 添加
     * @param sessionId
     * @param timestamp
     */
    public void put(String sessionId, long timestamp){
    	super.put(sessionId, timestamp);
    	counter.incrementAndGet();
    }
    
    /**
     * 
     * @param seconds
     * @param counts
     * @return
     */
    public boolean isNeedUpdate(int seconds, int counts){
    	if((System.currentTimeMillis() - createdTime) >= seconds * 1000){
    		return true;
    	}
    	if(counter.get() >= counts){
    		return true;
    	}
    	return false;
    }
 
}
