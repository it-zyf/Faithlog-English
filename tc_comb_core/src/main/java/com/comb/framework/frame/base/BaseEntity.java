package com.comb.framework.frame.base;

import com.comb.framework.frame.util.CalendarUtils;

import java.util.Calendar;


/**
 * Entity基类，提供一些必要的工具方法和常量.
 * 
 * @author fwb
 * 
 */
public abstract class BaseEntity implements java.io.Serializable {

	protected Integer status = 1;
	protected Calendar createTime;
	protected Calendar updateTime;
	protected String localId;// 本地数据库id
	protected String description;
	protected String tableSuffix;//表后缀
	protected Integer broker = 2;

	protected static final String DATE_FORMAT = "yyyy-MM-dd";

	protected static final String TIME_FORMAT = "HH:mm:ss";

	protected static final String DATE_FORMAT_SORT = "MM月dd号";

	protected static final String TIME_FORMAT_SORT = "HH:mm";

	protected static final String DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";

	protected static final String TIMESTAMP_FORMAT = "yyyy-MM-dd HH:mm:ss";

	// 扩展字段
	protected String info;

	public String date2String(final Calendar c, final String dateFormat) {
		if(c == null || dateFormat == null){
			return "";
		}
		return CalendarUtils.convertStrPattern(c, dateFormat);
	}

	public Calendar string2Date(final String dateString, final String dateFormat) {
		return CalendarUtils.convertCalendarPattern(dateString, dateFormat);
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	protected Long getId() {
		return 0L;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Calendar getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Calendar createTime) {
		this.createTime = createTime;
	}

	public Calendar getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Calendar updateTime) {
		this.updateTime = updateTime;
	}

	public String getCreateTimeString() {
		return date2String(getCreateTime(), DATE_TIME_FORMAT);
	}

	public void setCreateTimeString(String value) {
		setCreateTime(string2Date(value, DATE_TIME_FORMAT));
	}

	public String getUpdateTimeString() {
		return date2String(getUpdateTime(), DATE_TIME_FORMAT);
	}

	public void setUpdateTimeString(String value) {
		setUpdateTime(string2Date(value, DATE_TIME_FORMAT));
	}

	public String getLocalId() {
		return localId;
	}

	public void setLocalId(String localId) {
		this.localId = localId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTableSuffix() {
		return tableSuffix;
	}

	public void setTableSuffix(String tableSuffix) {
		this.tableSuffix = tableSuffix;
	}

	public Integer getBroker() {
		return broker;
	}

	public void setBroker(Integer broker) {
		this.broker = broker;
	}
	
}
