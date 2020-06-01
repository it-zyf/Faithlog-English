/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package com.comb.framework.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * A ThreadContext provides a means of binding and unbinding objects to the
 * current thread based on key/value pairs.
 * An internal {@link HashMap} is used to maintain the key/value pairs
 * for each thread.
 * If the desired behavior is to ensure that bound data is not shared across
 * threads in a pooled or reusable threaded environment, the application (or
 * more likely a framework) must bind and remove any necessary values at the
 * beginning and end of stack execution, respectively (i.e. individually
 * explicitly or all via the <tt>clear</tt> method).
 * 
 * @see #remove()
 * @since 0.1
 */
public abstract class ThreadContext {

	/**
	 * Private internal logger instance.
	 */
	private static final Logger logger = LoggerFactory.getLogger(ThreadContext.class);

	public static final String SESSION_MANAGER_KEY = ThreadContext.class.getName() + "_SESSION_MANAGER_KEY";
	public static final String USER_KEY = ThreadContext.class.getName() + "_USER_KEY";
	public static final String AUTHORIZATION_PRINCIPAL_KEY = ThreadContext.class.getName() + "AUTHORIZATION_PRINCIPAL_KEY";
	public static final String SESSION_KEY = ThreadContext.class.getName() + "_SESSION_KEY";
	public static final String COOKIE_KEY = ThreadContext.class.getName() + "_COOKIE_KEY";
	public static final String COOKIE_DEL_KEY = ThreadContext.class.getName() + "_SESSION_DEL_KEY";
	public static final String RESPONSE_KEY = ThreadContext.class.getName() + "_RESPONSE_KEY";
	public static final String REQUEST_KEY = ThreadContext.class.getName() + "_REQUEST_KEY";
	public static final String ERROR_URL = ThreadContext.class.getName() + "_ERROR_URL";
	public static final String LOGOUT_URL = ThreadContext.class.getName() + "LOGOUT_URL";
	public static final String DB_KEY = ThreadContext.class.getName() + "DB_KEY";
	public static final String DB_SLAVE_KEY = ThreadContext.class.getName() + "DB_SLAVE_KEY";
	public static final String METHOD_KEY = ThreadContext.class.getName() + "METHOD_KEY";
	
	private static final ThreadLocal<Map<Object, Object>> resources = new InheritableThreadLocalMap<Map<Object, Object>>();
	
	/**
	 * Default no-argument constructor.
	 */
	protected ThreadContext() {
	}

	/**
	 * Returns the ThreadLocal Map. This Map is used internally to bind objects
	 * to the current thread by storing each object under a unique key.
	 * 
	 * @return the map of bound resources
	 */
	public static Map<Object, Object> getResources() {
		return resources != null ? new HashMap<Object, Object>(resources.get())	: null;
	}

	/**
	 * Allows a caller to explicitly set the entire resource map. This operation
	 * overwrites everything that existed previously in the ThreadContext - if
	 * you need to retain what was on the thread prior to calling this method,
	 * call the {@link #getResources()} method, which will give you the existing
	 * state.
	 * 
	 * @param newResources
	 *            the resources to replace the existing {@link #getResources()
	 *            resources}.
	 * @since 1.0
	 */
	public static void setResources(Map<Object, Object> newResources) {
		if (CollectionUtils.isEmpty(newResources)) {
			return;
		}
		resources.get().clear();
		resources.get().putAll(newResources);
	}

	/**
	 * Returns the value bound in the {@code ThreadContext} under the specified
	 * {@code key}, or {@code null} if there is no value for that {@code key}.
	 * 
	 * @param key
	 *            the map key to use to lookup the value
	 * @return the value bound in the {@code ThreadContext} under the specified
	 *         {@code key}, or {@code null} if there is no value for that
	 *         {@code key}.
	 * @since 1.0
	 */
	private static Object getValue(Object key) {
		return resources.get().get(key);
	}

	/**
	 * Returns the object for the specified <code>key</code> that is bound to
	 * the current thread.
	 * 
	 * @param key
	 *            the key that identifies the value to return
	 * @return the object keyed by <code>key</code> or <code>null</code> if no
	 *         value exists for the specified <code>key</code>
	 */
	public static Object get(Object key) {
		if (logger.isTraceEnabled()) {
			String msg = "get() - in thread ["
					+ Thread.currentThread().getName() + "]";
			logger.trace(msg);
		}

		Object value = getValue(key);
		if ((value != null) && logger.isTraceEnabled()) {
			String msg = "Retrieved value of type ["
					+ value.getClass().getName() + "] for key [" + key + "] "
					+ "bound to thread [" + Thread.currentThread().getName()
					+ "]";
			logger.trace(msg);
		}
		return value;
	}

	/**
	 * Binds <tt>value</tt> for the given <code>key</code> to the current
	 * thread.
	 * A <tt>null</tt> <tt>value</tt> has the same effect as if <tt>remove</tt>
	 * was called for the given <tt>key</tt>, i.e.:
	 * 
	 * if (value == null) {
	 * 	remove(key);
	 * }
	 * 
	 * @param key
	 *            The key with which to identify the <code>value</code>.
	 * @param value
	 *            The value to bind to the thread.
	 * @throws IllegalArgumentException
	 *             if the <code>key</code> argument is <tt>null</tt>.
	 */
	public static void put(Object key, Object value) {
		if (key == null) {
			throw new IllegalArgumentException("key cannot be null");
		}

		if (value == null) {
			remove(key);
			return;
		}
		resources.get().put(key, value);

		if (logger.isTraceEnabled()) {
			String msg = "Bound value of type [" + value.getClass().getName()
					+ "] for key [" + key + "] to thread " + "["
					+ Thread.currentThread().getName() + "]";
			logger.trace(msg);
		}
	}

	/**
	 * Unbinds the value for the given <code>key</code> from the current thread.
	 * 
	 * @param key
	 *            The key identifying the value bound to the current thread.
	 * @return the object unbound or <tt>null</tt> if there was nothing bound
	 *         under the specified <tt>key</tt> master.
	 */
	public static Object remove(Object key) {
		Object value = resources.get().remove(key);

		if ((value != null) && logger.isTraceEnabled()) {
			String msg = "Removed value of type [" + value.getClass().getName()
					+ "] for key [" + key + "]" + "from thread ["
					+ Thread.currentThread().getName() + "]";
			logger.trace(msg);
		}

		return value;
	}
	
	
	/**
	 * {@link ThreadLocal#remove Remove}s the underlying {@link ThreadLocal
	 * ThreadLocal} from the thread.
	 * This method is meant to be the final 'clean up' operation that is called
	 * at the end of thread execution to prevent thread corruption in pooled
	 * thread environments.
	 * 
	 * @since 1.0
	 */
	public static void remove() {
		resources.remove();
	}

	/**
	 * Convenience method that simplifies retrieval of a thread-bound Subject.
	 * If there is no Subject bound to the thread, this method returns
	 * <tt>null</tt>. It is merely a convenient wrapper for the following:
	 * <code>return (Subject)get( SUBJECT_KEY );</code>
	 * This method only returns the bound value if it exists - it does not
	 * remove it from the thread. To remove it, one must call
	 * instead.
	 * 
	 * @return the Subject object bound to the thread, or <tt>null</tt> if there
	 *         isn't one bound.
	 * @since 0.2
	 */
	@SuppressWarnings({ "rawtypes" })
	public static User getUser() {
		return (User) get(USER_KEY);
	}

	public static AuthorizationPrincipal getAuthorizationPrincipal() {
		return (AuthorizationPrincipal) get(AUTHORIZATION_PRINCIPAL_KEY);
	}

	/**
	 * 
	 * @param user
	 */
	public static void bind(User user) {
		if (user != null) {
			put(USER_KEY, user);
		}
	}

	public static void bind(AuthorizationPrincipal authorizationPrincipal) {
		if (authorizationPrincipal != null){
			put(AUTHORIZATION_PRINCIPAL_KEY, authorizationPrincipal);
		}
	}

	/**
	 * Convenience method that simplifies removal of a thread-local Subject from
	 * the thread.
	 * The implementation just helps reduce casting and remembering of the
	 * ThreadContext key master, i.e it is merely a conveient wrapper for the
	 * following:
	 * <code>return (Subject)remove( SUBJECT_KEY );</code>
	 * If you wish to just retrieve the object from the thread without removing
	 * it (so it can be retrieved later during thread execution), you should use
	 * the method for that purpose.
	 * 
	 * @return the Subject object previously bound to the thread, or
	 *         <tt>null</tt> if there was none bound.
	 * @since 0.2
	 */
	@SuppressWarnings("rawtypes")
	public static User unbindUser() {
		return (User) remove(USER_KEY);
	}

	public static AuthorizationPrincipal unbindAuthorizationPrincipal() {
		return (AuthorizationPrincipal) remove(AUTHORIZATION_PRINCIPAL_KEY);
	}

	@SuppressWarnings("rawtypes")
	public static SessionManager getSessionManager() {
		return (SessionManager) get(SESSION_MANAGER_KEY);
	}

	@SuppressWarnings("rawtypes")
	public static void bind(SessionManager SessionManager) {
		if (SessionManager != null) {
			put(SESSION_MANAGER_KEY, SessionManager);
		}
	}

	@SuppressWarnings("rawtypes")
	public static SessionManager unbindSessionManager() {
		return (SessionManager) remove(SESSION_MANAGER_KEY);
	}

	public static Session getSession() {
		return (Session) get(SESSION_KEY);
	}

	public static void bind(Session session) {
		if (session != null) {
			put(SESSION_KEY, session);
		}
	}

	public static Session unbindSession() {
		return (Session) remove(SESSION_KEY);
	}
	
	public static void bind(User user, AuthorizationPrincipal authorizationPrincipal) {
		bind(user);
		bind(authorizationPrincipal);
	}

	/**
	 * 绑定相关信息	
	 * @param user
	 * @param authorizationPrincipal
	 * @param session
	 * @param sessionManager
	 */
	@SuppressWarnings("unchecked")
	public static void bind(User user, AuthorizationPrincipal authorizationPrincipal, Session session ,SessionManager sessionManager) {
		bind(user);
		bind(authorizationPrincipal);
	    bind(session);
	    bind(sessionManager);
	}
	
	public static void bind(HttpServletResponse response) {
		if (response != null) {
			put(RESPONSE_KEY, response);
		}
	}
	
	public static HttpServletResponse getResponse(){
		return (HttpServletResponse) get(RESPONSE_KEY);
	}
	
	public static void bind(HttpServletRequest request) {
		if (request != null) {
			put(REQUEST_KEY, request);
		}
	}
	
	public static HttpServletRequest getRequest(){
		return (HttpServletRequest) get(REQUEST_KEY);
	}

	/**
	 * 保存cookie到ThreadContext
	 * @param cookie
	 */
	public static void putCookie(Cookie cookie) {
		List<Cookie> list = getCookieList();
		if(list == null){
			list = new ArrayList<Cookie>();
		}
		list.add(cookie);
		put(COOKIE_KEY,list);
	}
	
	/**
	 * 获得缓存中cookies
	 * @return
	 */
	public static List<Cookie> getCookieList() {
		return (List<Cookie>)get(COOKIE_KEY);
	}
	
	/**
	 * 添加要删除的cookie master
	 * @param name
	 */
	public static void addDeletedCookieName(String name){
		Set<String> set = getDeletedCookieName();
		if(set == null){
			set = new HashSet<String>();
		}
		set.add(name);
		put(COOKIE_DEL_KEY,set);
	}
	
	private static Set<String> getDeletedCookieName(){
		return (Set<String>)get(COOKIE_DEL_KEY);
	}
	
	private static boolean containDeletedCookieName(String name){
		Set<String> set = getDeletedCookieName();
		if(set == null)
			return false;
		return set.contains(name);
	}
	
	/**
	 * 添加cookie
	 * @param response
	 */
	public static void addCookie(HttpServletResponse response){
		List<Cookie> cookieList = getCookieList();	
		if(cookieList == null)
			return;
		for (Cookie cookie : cookieList) {
		    response.addCookie(cookie);
		}
	}
	
	/**
	 * 删除cookie
	 * @param request
	 * @param response
	 */
	public static void deleteCookie(HttpServletRequest request,HttpServletResponse response){
		Cookie[] cookies = request.getCookies();
		if(cookies != null){
			for (Cookie cookie : cookies) {
				if(containDeletedCookieName(cookie.getName())){
					cookie.setValue(null);
					cookie.setMaxAge(0);
					cookie.setPath("/");
					//cookie.setHttpOnly(true);
					response.addCookie(cookie);
				}
			}
		}	
	}
	
	/**
	 * 设置使用数据源
	 * @param dbSwitchType
	 */
	public static void useDataSource(String dbSwitchType){
		put(DB_KEY, dbSwitchType);
	}
	
	/**
	 * 获得数据源
	 * @return
	 */
	public static String getDataSource(){
		return (String)get(DB_KEY);
	}
	
	public static void putSlaveDataSource(String dbSwitchType){
		put(DB_SLAVE_KEY, dbSwitchType);
	}
	
	/**
	 * 获得数据源
	 * @return
	 */
	public static String getSlaveDataSource(){
		return (String)get(DB_SLAVE_KEY);
	}
	
	public static void setMethodName(String name){
		put(METHOD_KEY, name);
	}
	
	public static String getMethodName(){
		return (String)get(METHOD_KEY);
	}

	private static final class InheritableThreadLocalMap<T extends Map<Object, Object>> extends InheritableThreadLocal<Map<Object, Object>> {
		protected Map<Object, Object> initialValue() {
			return new HashMap<Object, Object>();
		}

		/**
		 * This implementation was added to address a <a href=
		 * "http://jsecurity.markmail.org/search/?q=#query:+page:1+mid:xqi2yxurwmrpqrvj+state:results"
		 * > user-reported issue</a>.
		 * 
		 * @param parentValue
		 *            the parent value, a HashMap as defined in the
		 *            {@link #initialValue()} method.
		 * @return the HashMap to be used by any parent-spawned child threads (a
		 *         clone of the parent HashMap).
		 */
		@SuppressWarnings({ "unchecked" })
		protected Map<Object, Object> childValue(Map<Object, Object> parentValue) {
			if (parentValue != null) {
				return (Map<Object, Object>) ((HashMap<Object, Object>) parentValue).clone();
			} else {
				return null;
			}
		}
	}
}
