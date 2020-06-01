package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.util.Calendar;

public class eventDistribution extends BaseEntity{

	private static final long serialVersionUID = 7324005692450994963L;

	//
	private Long achieveNum;
	//
	private String eventId;
	//
	private String eventTypeName;
	//
	private String eventName;

	private String type;

	private String time;
	//
	private Calendar logTime;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public String getEventTypeName() {
		return eventTypeName;
	}

	public void setEventTypeName(String eventTypeName) {
		this.eventTypeName = eventTypeName;
	}

	public String getLogDate() {
		return logDate;
	}

	public void setLogDate(String logDate) {
		this.logDate = logDate;
	}

	//
	private String logDate;

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public Long getAchieveNum() {
		return this.achieveNum;
	}
	
	public void setAchieveNum(Long value) {
		this.achieveNum = value;
	}
	public String getEventId() {
		return this.eventId;
	}
	
	public void setEventId(String value) {
		this.eventId = value;
	}
	public Calendar getLogTime() {
		return this.logTime;
	}
	
	public void setLogTime(Calendar value) {
		this.logTime = value;
	}


}
