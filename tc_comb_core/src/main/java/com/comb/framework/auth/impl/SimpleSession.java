package com.comb.framework.auth.impl;

import com.comb.framework.auth.Session;

import javax.servlet.http.HttpSession;
import java.io.Serializable;
import java.util.UUID;

public class SimpleSession implements Session, Serializable {

	private static final long serialVersionUID = 4434224162560488654L;
	private String id;
	private long createdTime;
	private long invalidateTime;
	private long lastAccessedTime;
	private String principal;
	private String lastAccesseIp;
	private String rememberMeId; 
	private String httpSessionId;
	
	private boolean valid = false;
	private boolean expired = false;
	private int expireMinutes = 0;// 过期时间
	
	private transient String ip;
	
	private String generateId() {
		return UUID.randomUUID().toString();
	}
	
	public  SimpleSession(){
		this.createdTime = System.currentTimeMillis();
		this.lastAccessedTime = this.createdTime;
		this.id = generateId();
	}
	
	public  SimpleSession(HttpSession session) {
		if(session!=null){
			this.createdTime = session.getCreationTime();
			this.lastAccessedTime = session.getLastAccessedTime();
			this.id = generateId();
			this.httpSessionId = session.getId();
		}
	}
	
	public SimpleSession(String host) {
        this();
        this.lastAccesseIp = host;
    }

	public String getId() {
		if(id == null)
			id = UUID.randomUUID().toString();
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public long getLastAccessedTime() {
		return this.lastAccessedTime;
	}

    
	public String getPrincipal() {
		return principal;
	}

	public void setPrincipal(String principal) {
		this.principal = principal;
	}

	public String getLastAccesseIp() {
		return lastAccesseIp;
	}

	public void setLastAccesseIp(String lastAccessedIp) {
		this.lastAccesseIp = lastAccessedIp;
	}

	public void updateLastAccessedTime(long timestamp) {
		this.lastAccessedTime = timestamp;

	}
	
	public boolean isExpired() {
		return expired;
	}

	public String getHttpSessionId() {
		return httpSessionId;
	}

	public void setHttpSessionId(String httpSessionId) {
		this.httpSessionId = httpSessionId;
	}

	public void setExpired(boolean expired) {
		this.expired = expired;
	}

	public String getRememberMeId() {
		return rememberMeId;
	}

	public void setRememberMeId(String rememberMeId) {
		this.rememberMeId = rememberMeId;
	}

	public long getCreatedTime() {
		return createdTime;
	}

	/**
	 * 让session失效
	 */
	public void invalidate() {
		this.invalidateTime = System.currentTimeMillis();
		valid = true;
	}

	public void expire() {		
		expired = true;
	}

	public boolean isValid() {
		return valid;
	}

	public int getExpireMinutes() {
		return expireMinutes;
	}

	public void setExpireMinutes(int expireMinutes) {
		this.expireMinutes = expireMinutes;
	}

	public long getInvalidateTime() {
		return invalidateTime;
	}

	public boolean isInvalid() {
		return !valid;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}	
}
