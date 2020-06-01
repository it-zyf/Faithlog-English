package com.umi.ga.common;

/**
 * @title HTTP请求回调
 */

public class PagingResult {
	private long page;
	private long total;
	private Object rows;// 对象
	private boolean state;// 返回结果:True。成功,False.失败
	private String message;// 失败原因

	public PagingResult() {
	}

	public long getPage() {
		return page;
	}

	public void setPage(long page) {
		this.page = page;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

	public Object getRows() {
		return rows;
	}

	public void setRows(Object rows) {
		this.rows = rows;
	}

	public boolean isState() {
		return state;
	}

	public void setState(boolean state) {
		this.state = state;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
