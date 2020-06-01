package com.comb.framework.auth;

import java.io.Serializable;
import java.util.Collection;

/**
 * 
 * @author fwb
 * 
 */
public interface SessionManager<ID extends Serializable> {

	/**
	 * 获得保存在session中id key
	 * @return
	 */
	String getSessionIdKey();

	/**
	 * 普通用户登录
	 * @param userName
	 * @param password
	 * @param expireMinutes
	 * @return 返回null表示登陆名错误
	 * 抛出异常 表示密码错误
	 */
	User<ID> login(String userName, String password, int expireMinutes);
	
	/**
	 * 普通用户登录
	 * @param userName
	 * @param password
	 * @param role 角色
	 * @param expireMinutes
	 * @return 返回null表示登录名错误
	 * 抛出异常 表示密码错误
	 */
	User<ID> login(String userName, String password, String role, int expireMinutes);

	
	User<ID> login(String userName, String password);
	
	/**
	 * 超级管理员或平台管理员登录
	 * @param token
	 * @return
	 */
	User<ID> loginAsToken(Token token);
	
	/**
	 * 登录
	 * @param user
	 * @param expireMinutes
	 * @return
	 */
	boolean login(User<ID> user, int expireMinutes);

	/**
	 * Mainly used by admin to see whether a session is an authenticated session
	 * 
	 * @param sessionId
	 * @return
	 */
	boolean isAuthenticated(String sessionId);

	/**
	 * Verify current user is authenticated
	 * 
	 * @return
	 */
	boolean isAuthenticated();

	/**
	 * 当前用户退出 清除cookie
	 * @return
	 * true:表示清除
	 * false:表示其它地方有登录
	 */
	boolean logout();

	/**
	 * 根据session_id 退出对应的用户 清除cookie
	 * @param sessionId
	 * @return
	 */
	boolean logoutSession(String sessionId);

	/**
	 * 获得当前用户session
	 * @return
	 */
	Session getSession();

	/**
	 * 如果create为 true，当前session不存在 会重新生成一个
	 * @param create
	 * @return
	 */
	Session getSession(boolean create);

	/**
	 * 根据session_id获得session
	 * @param sessionId
	 * @return
	 */
	Session getSessionById(String sessionId);

	/**
	 * 根据用户返回所有的登陆信息
	 * 
	 * @param principle
	 * @return
	 */
	Collection<String> findSessionIdByPrinciple(String principle);

	/**
	 * 根据session_id清除缓存 并让对应的session失效
	 * 对于remember me 缓存不清除
	 */
	void cleanSession(String sessionId);
	
	/**
	 * 根据应用服务器session id删除
	 * @param httpSessionId
	 */
	void clearSession(String httpSessionId);
	
	/**
	 * 清除当前用户缓存 并让对应的session失效 对于remember me 缓存不清除
	 */
	void cleanSession();

	void update(Session session, boolean isInitExpireTime);
	void expire(Session session, long expireMinutes);

}
