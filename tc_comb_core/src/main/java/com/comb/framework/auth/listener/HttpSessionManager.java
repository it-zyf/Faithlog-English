package com.comb.framework.auth.listener;

import com.comb.framework.auth.SessionManager;
import com.comb.framework.auth.spring.util.SpringContextUtil;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 所有session管理类
 * @author fwb
 *
 */

public class HttpSessionManager implements HttpSessionListener {
	
	// OPTI: add Session.getHttpSessionId(), when invalidate session, get the HttpSession as well and invalidate it too
	
	private static ConcurrentHashMap<String, HttpSession> HTTP_SESSION_MAP = new ConcurrentHashMap<String, HttpSession>(1024);
	
	public Iterable<HttpSession> getSessions() {
		return HTTP_SESSION_MAP.values();
	}
	
	
	public static HttpSession getSession(String sessionId ) {
		return HTTP_SESSION_MAP.get(sessionId);
	}

	@Override
	public void sessionCreated(HttpSessionEvent se) {
		HttpSession s = se.getSession();
		HTTP_SESSION_MAP.put(s.getId(), s);
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
		HTTP_SESSION_MAP.remove(se.getSession().getId());
		SessionManager sessionManager = SpringContextUtil.getApplicationContext().getBean(SessionManager.class);
		if (sessionManager != null) {
			sessionManager.clearSession(se.getSession().getId());
		}
	}

}
