package com.umi.ga.entitys;

public class ActiveCode {

	private String active_id;

	private String active_code;

	private String is_use;

	private String user_code;

	private String user_time;

	public String getActive_id() {
		return active_id;
	}

	public void setActive_id(String active_id) {
		this.active_id = active_id;
	}

	public String getActive_code() {
		return active_code;
	}

	public void setActive_code(String active_code) {
		this.active_code = active_code;
	}

	public String getIs_use() {
		return is_use;
	}

	public void setIs_use(String is_use) {
		this.is_use = is_use;
	}

	public String getUser_code() {
		return user_code;
	}

	public void setUser_code(String user_code) {
		this.user_code = user_code;
	}

	public String getUser_time() {
		return user_time;
	}

	public void setUser_time(String user_time) {
		this.user_time = user_time;
	}

	@Override
	public String toString() {
		return "ActiveCode [active_id=" + active_id + ", active_code=" + active_code + ", is_use=" + is_use
				+ ", user_code=" + user_code + ", user_time=" + user_time + "]";
	}

}
