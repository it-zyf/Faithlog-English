package com.comb.framework.auth;

import com.comb.framework.auth.exception.AuthenticationException;
import com.comb.framework.auth.impl.SimpleSession;
import com.comb.framework.auth.provider.ForwardingAuthRealm;
import com.comb.framework.auth.provider.SessionProvider;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.Collection;


/**
 * 
 * @author fwb
 *
 */
public abstract class AbstractSessionManager<ID extends Serializable> implements SessionManager<ID> {

	private String sessionIdKey = "AUTHSESSIONID";
	private int expireMinutes = 30;// 过期时间
	
	@Autowired
    private ForwardingAuthRealm<ID> realm;    
    @Autowired
    private Authenticator authenticator;
	@Autowired 
	private SessionProvider sessionProvider;
	
    public User<ID> login(String userName, String password, int expireMinutes) {
        User<ID> user = realm.findUserByName(userName);
        if (user == null)
            return null;
        try{
       	 	authenticator.authenticate(userName, password, user.getPassword());
        }catch(AuthenticationException e){
        	return null;
        }
        
        ThreadContext.bind(user);
        initAfterLogin(user.getLocalId(), expireMinutes);
        realm.setNeedReload(true);
        AuthorizationPrincipal authorizationPrincipal = realm.findUserAuthorizationPrincipal(user);
        ThreadContext.bind(authorizationPrincipal); 
        realm.setNeedReload(false);
        return user;
    }
    
    public User<ID> login(String userName, String password, String role, int expireMinutes) {
        User<ID> user = realm.findUserByNameRole(userName, role);
        if (user == null)
            return null;
        try{
       	 	authenticator.authenticate(userName, password, user.getPassword());
        }catch(AuthenticationException e){
        	return null;
        }
        
        ThreadContext.bind(user);
        initAfterLogin(user.getLocalId(), expireMinutes);
        realm.setNeedReload(true);
        AuthorizationPrincipal authorizationPrincipal = realm.findUserAuthorizationPrincipal(user);
        ThreadContext.bind(authorizationPrincipal); 
        realm.setNeedReload(false);
        return user;
    }
    
    public User<ID> login(String userName, String password){
   	    User<ID> user = realm.findUserByPrincipal(userName);
        if (user == null)
            return null;
        try{
       	 	authenticator.authenticate(userName, password, user.getPassword());
        }catch(AuthenticationException e){
        	return null;
        }
        ThreadContext.bind(user);
        realm.setNeedReload(true);
        AuthorizationPrincipal authorizationPrincipal = realm.findUserAuthorizationPrincipal(user);
        ThreadContext.bind(authorizationPrincipal); 
        realm.setNeedReload(false);
        return user;
   }
    
    public User<ID> loginAsToken(Token token){
    	User<ID> user = null;
    	if(token.isUseRole()){
    		user = realm.findUserByRole(token.getRole());
    	}else{
    		return this.login(token.getUsername(), token.getPassword());
    	}
        if (user == null){
            return null;
        }
        ThreadContext.bind(user);
        realm.setNeedReload(true);
        AuthorizationPrincipal authorizationPrincipal = realm.findUserAuthorizationPrincipal(user);
        ThreadContext.bind(authorizationPrincipal); 
        realm.setNeedReload(false);
        initAfterLogin(user.getName(), 1);
        return user;
    }

    public boolean login(User<ID> user, int expireMinutes) {
        if (user == null)
            return false;
        ThreadContext.bind(user);
        initAfterLogin(user.getLocalId(), expireMinutes);
        realm.setNeedReload(true);
        AuthorizationPrincipal authorizationPrincipal = realm.findUserAuthorizationPrincipal(user);
        ThreadContext.bind(authorizationPrincipal); 
        realm.setNeedReload(false);
        return true;
    }
    
	/**
	 * 是否认证 匿名账号不需要认证
	 */
	public boolean isAuthenticated(String sessionId) {
		Session session = getSessionById(sessionId);
		if (session == null || session.getPrincipal().equals(""))
			return false;
		return true;
	}

	public boolean isAuthenticated() {
		Session session = getSession(false);
		if (session == null)
			return false;
		return this.isAuthenticated(session.getId());
	}
	
	public Session getSession() {
		return getSession(true);
	}
	
    public int getExpireMinutes() {
		return expireMinutes;
	}

	public void setExpireMinutes(int expireMinutes) {
		this.expireMinutes = expireMinutes;
	}

	public String getSessionIdKey() {
		return sessionIdKey;
	}

	public void setSessionIdKey(String sessionIdKey) {
		this.sessionIdKey = sessionIdKey;
	}

	/**
     * 当前用户退出
     */
    final public boolean logout() {
    	SimpleSession session = (SimpleSession)ThreadContext.getSession();
    	if(session == null){
    		return false;
    	}
        doLogout(session);
        //是否其它地方有登录
        Collection<String> collection = sessionProvider.findSessionIdByUser(session.getPrincipal());
        if(collection == null || collection.isEmpty()){
        	return true;
        }
        return false;
    }

    /**
     * 管理员让某个用户退出
     */
    final public boolean logoutSession(String sessionId) {
        Session session = getSessionById(sessionId);
        doLogout(session);
        return true;
    }
    
    
    /**
     * @param session
     */
    protected void doLogout(Session session) {
        if (session == null) return;
        ThreadContext.addDeletedCookieName(getSessionIdKey());
        session.invalidate();  
        doCleanSession(session);
    }
    
    /**
	 * after login :session初始化处理
	 */
	protected void initAfterLogin(String principal, int expireMinutes) {
		SimpleSession session = initAfterRememberMeLogin(principal, expireMinutes);
		sessionProvider.save(session);	
		ThreadContext.bind(session);
	}
	
	public SimpleSession initAfterRememberMeLogin(String principal, int expireMinutes) {
		SimpleSession session = null;
		HttpServletRequest request = ThreadContext.getRequest();
		if (request != null){
			// avoid send hacker's sessionid to user, and log in with hacker's session id, then hacker can access as the user
			//HttpSession httpSession = request.getSession(false);
//			if(httpSession != null) {
//				httpSession.invalidate();
//			}
			session = new SimpleSession(request.getSession());
			session.setLastAccesseIp(request.getRemoteHost());				
		}		
		if(session == null){
			session = new SimpleSession();
		}
		session.setPrincipal(principal);
		session.setExpireMinutes(expireMinutes);	
		
		if (request != null){
			request.getSession().setAttribute(sessionIdKey, session.getId());
		}
		//保存到cookie
		Cookie cookie = new Cookie(sessionIdKey, session.getId());
		cookie.setHttpOnly(true);
		if(realm.isHttps()){
			cookie.setSecure(true);
		}
		cookie.setPath("/");
		System.out.println("initAfterRememberMeLogin expireMinutes:" + expireMinutes);
		if(expireMinutes == 0){
			cookie.setMaxAge(600);
		} else {
			//cookie.setMaxAge(expireMinutes * 60);
			cookie.setMaxAge(30 * 24 * 60 * 60);//尝试存储30天
		}
		ThreadContext.putCookie(cookie);
		return session;
	}
	
	public Session getSession(boolean create) {
		SimpleSession session = (SimpleSession)ThreadContext.getSession();
		if (session == null && create) {
			session = new SimpleSession();
			HttpServletRequest request = ThreadContext.getRequest();
			if (request != null){
				session.setExpireMinutes(getExpireMinutes());
				session.setHttpSessionId(request.getSession().getId());
				session.setLastAccesseIp(request.getRemoteHost());	
				session.setPrincipal(ThreadContext.getUser().getLocalId());
				sessionProvider.save(session);			
			}		
		}
		return session;
	}
	
	/**
	 * 根据sessionId清除缓存 并让对应的session失效
	 * 对于remember me 缓存不清除
	 */
	final public void cleanSession(String sessionId) {
		Session session = getSessionById(sessionId);	
		if(session != null){
			doCleanSession(session);
		}
	}
	
	final public void clearSession(String httpSessionId){
		Session session =  sessionProvider.getSessionByHttpSessionId(httpSessionId);
		if(session != null){
			doCleanSession(session);
		}
	}
	
	/**
	 * 清除当前用户缓存 并让对应的session失效
	 * 对于remember me 缓存不清除
	 */
	final public void cleanSession() {
		Session session = getSession();
		if(null == session) return;
		this.cleanSession(session.getId());
	}
	

    /**
	 * 根据当前用户清除对应session所有缓存 并让对应的session失效
	 */
    public void cleanSessionIncludeRememberMe() {
        Session session = getSession();
        if(null == session) return;
        session.invalidate();
        doCleanSession(session);
    }
    
	public Session getSessionById(String sessionId) {
		return sessionProvider.findById(sessionId);
	}
	
	public Collection<String> findSessionIdByPrinciple(String principle) {
		return sessionProvider.findSessionIdByUser(principle);
	}
	
	public void update(Session session, boolean isInitExpireTime){
		this.sessionProvider.update(session, isInitExpireTime);
	}
	public void expire(Session session, long expireMinutes){
		this.sessionProvider.expire(session,expireMinutes);
	}


	protected boolean doCleanSession(Session session){
		if(session == null) return false;
		sessionProvider.delete(session);
		return true;
	}
}
