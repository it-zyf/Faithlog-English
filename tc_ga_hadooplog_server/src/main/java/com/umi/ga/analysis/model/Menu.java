package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.util.List;

public class Menu extends BaseEntity {

	private static final long serialVersionUID = 3204509466045511649L;

	//
	private Integer vId;
	//
	private Integer menuId;
	//
	private String menuName;
	//
	private String url;
	//
	private Integer pId;

	private List<Menu> menus;

	public List<Menu> getMenus() {
		return menus;
	}

	public void setMenus(List<Menu> menus) {
		this.menus = menus;
	}

	public Integer getvId() {
		return vId;
	}

	public void setvId(Integer vId) {
		this.vId = vId;
	}

	public Integer getpId() {
		return pId;
	}

	public void setpId(Integer pId) {
		this.pId = pId;
	}


	public Integer getMenuId() {
		return this.menuId;
	}
	
	public void setMenuId(Integer value) {
		this.menuId = value;
	}
	public String getMenuName() {
		return this.menuName;
	}
	
	public void setMenuName(String value) {
		this.menuName = value;
	}
	public String getUrl() {
		return this.url;
	}
	
	public void setUrl(String value) {
		this.url = value;
	}
	public Integer getPId() {
		return this.pId;
	}
	
	public void setPId(Integer value) {
		this.pId = value;
	}


}
