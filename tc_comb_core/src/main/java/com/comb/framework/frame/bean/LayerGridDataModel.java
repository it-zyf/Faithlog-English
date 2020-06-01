package com.comb.framework.frame.bean;

import java.util.ArrayList;
import java.util.List;

public class LayerGridDataModel {

	// 页面传来参数，原样返回
	private String code;
	
	//返回消息
	private String msg;

	// 数据库表总记录数
	private int count = 0;

	// 查询之后符合条件的总数
	private int iTotalDisplayRecords = 0;

	// 页面展示数据
	private List data;

	// 列
	private List colmodel;

	public LayerGridDataModel() {
		data = new ArrayList();
		colmodel = new ArrayList();
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List getData() {
		return data;
	}

	public void setData(List data) {
		this.data = data;
	}

	public int getiTotalDisplayRecords() {
		return iTotalDisplayRecords;
	}

	public void setiTotalDisplayRecords(int iTotalDisplayRecords) {
		this.iTotalDisplayRecords = iTotalDisplayRecords;
	}

	public List getColmodel() {
		return colmodel;
	}

	public void setColmodel(List list) {
		colmodel = list;
	}

 
}
