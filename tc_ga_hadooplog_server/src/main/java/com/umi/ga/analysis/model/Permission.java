package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class Permission extends BaseEntity {

	private static final long serialVersionUID = 7797252758130585530L;
	//权限id
	private Integer permissionId;
	//权限标识
	private String perms;
	//用户id
	private String userId;
	//
	private Integer menuId;
	//
	private Integer menuPid;

	public Integer getPermissionId() {
		return this.permissionId;
	}

	public void setPermissionId(Integer value) {
		this.permissionId = value;
	}
	public String getPerms() {
		return this.perms;
	}
	
	public void setPerms(String value) {
		this.perms = value;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Integer getMenuId() {
		return this.menuId;
	}
	
	public void setMenuId(Integer value) {
		this.menuId = value;
	}
	public Integer getMenuPid() {
		return this.menuPid;
	}
	
	public void setMenuPid(Integer value) {
		this.menuPid = value;
	}


}
