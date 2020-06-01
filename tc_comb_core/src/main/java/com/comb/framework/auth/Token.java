package com.comb.framework.auth;

import java.io.Serializable;

/**
 * token 实体
 * @author fwb
 *
 */
public class Token implements Serializable{
	
	private static final long serialVersionUID = -648296839678343500L;
	
	private String token;
	private String retUrl;
	private String username;
	private String role;
	private String password;
	private Long createTime;
	private Long platMark;
	private int loginTimes = 0;
	//是否使用角色
	private boolean isUseRole = false;
	
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getRetUrl() {
		return retUrl;
	}
	public void setRetUrl(String retUrl) {
		this.retUrl = retUrl;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Long getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Long createTime) {
		this.createTime = createTime;
	}
	public int getLoginTimes() {
		return loginTimes;
	}
	public void setLoginTimes(int loginTimes) {
		this.loginTimes = loginTimes;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isUseRole() {
		return isUseRole;
	}
	public void setUseRole(boolean isUseRole) {
		this.isUseRole = isUseRole;
	}
	public Long getPlatMark() {
		return platMark;
	}
	public void setPlatMark(Long platMark) {
		this.platMark = platMark;
	}
	
}
