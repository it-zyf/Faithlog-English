package com.comb.framework.auth.filter;

import javax.servlet.http.Cookie;

/**
 * 过滤器Bean
 * @author fwb
 *
 */
public class FilterBean {

	private String sessionId;
	private Cookie cookie;

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public Cookie getCookie() {
		return cookie;
	}

	public void setCookie(Cookie cookie) {
		this.cookie = cookie;
	}

}
