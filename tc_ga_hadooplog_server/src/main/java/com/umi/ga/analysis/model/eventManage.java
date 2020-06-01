package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.util.Calendar;

public class eventManage extends BaseEntity{

	private static final long serialVersionUID = 2396750334543228542L;
	//
	private Long id;
	//
	private String eventId;
	//
	private String eventName;

	private String eventTypeId;
	//
	private String eventTypeName;
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
	public String getEventId() {
		return this.eventId;
	}
	
	public void setEventId(String value) {
		this.eventId = value;
	}
	public String getEventName() {
		return this.eventName;
	}
	
	public void setEventName(String value) {
		this.eventName = value;
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

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public String getEventTypeId() {
		return eventTypeId;
	}

	public void setEventTypeId(String eventTypeId) {
		this.eventTypeId = eventTypeId;
	}

	public String getEventTypeName() {
		return eventTypeName;
	}

	public void setEventTypeName(String eventTypeName) {
		this.eventTypeName = eventTypeName;
	}
}
