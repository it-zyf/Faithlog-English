package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.util.Calendar;

public class eventCustom extends BaseEntity{

	private static final long serialVersionUID = -1304513797013971236L;
	//
	private Long id;
	//
	private String customName;
	//
	private String eventIdGroup;
	//
	private Calendar createTime;
	//
	private Integer state;

	public Long getId() {
		return this.id;
	}

	public void setId(Long value) {
		this.id = value;
	}
	public String getCustomName() {
		return this.customName;
	}
	
	public void setCustomName(String value) {
		this.customName = value;
	}
	public String getEventIdGroup() {
		return this.eventIdGroup;
	}
	
	public void setEventIdGroup(String value) {
		this.eventIdGroup = value;
	}
	public Calendar getCreateTime() {
		return this.createTime;
	}
	
	public void setCreateTime(Calendar value) {
		this.createTime = value;
	}
	public Integer getState() {
		return this.state;
	}
	
	public void setState(Integer value) {
		this.state = value;
	}


}
