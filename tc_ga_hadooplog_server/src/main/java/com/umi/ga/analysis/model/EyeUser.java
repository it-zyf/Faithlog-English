package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.util.List;

public class EyeUser extends BaseEntity{

	private static final long serialVersionUID = 2117479013738237513L;
	//
	private String password;
	//
	private Integer userId;
	//
	private String account;

	private List<Menu> menuList;


	public List<Menu> getMenuList() {
		return menuList;
	}

	public void setMenuList(List<Menu> menuList) {
		this.menuList = menuList;
	}

	public String getPassword() {
		return this.password;
	}
	
	public void setPassword(String value) {
		this.password = value;
	}
	public Integer getUserId() {
		return this.userId;
	}
	
	public void setUserId(Integer value) {
		this.userId = value;
	}
	public String getAccount() {
		return this.account;
	}
	
	public void setAccount(String value) {
		this.account = value;
	}


}
