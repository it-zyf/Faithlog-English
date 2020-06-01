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



/**
 * Accesses the currently accessible {@code User} for the calling code depending
 * on runtime environment.
 * 
 */
public abstract class SecurityUtils {

	/**
	 * Returns the currently accessible {@code User} available to the calling
	 * code depending on runtime environment.
	 * This method is provided as a way of obtaining a {@code User} without
	 * having to resort to implementation-specific methods. It also allows the
	 * Shiro team to change the underlying implementation of this method in the
	 * future depending on requirements/updates without affecting your code that
	 * uses it.
	 * 
	 * @return the currently accessible {@code User} accessible to the calling
	 *         code.
	 * @throws IllegalStateException
	 *             if no {@link User User} instance or {@link SecurityManager
	 *             SecurityManager} instance is available with which to obtain a
	 *             {@code User}, which which is considered an invalid
	 *             application configuration - a User should <em>always</em> be
	 *             available to the caller.
	 */
	public static User getUser() {
		return ThreadContext.getUser();
	}

	public static AuthorizationPrincipal getAuthorizationPrincipal() {
		return ThreadContext.getAuthorizationPrincipal();
	}

	public static Session getSession() {
		return ThreadContext.getSession();
	}

	public static SessionManager getSessionManager() {
		return ThreadContext.getSessionManager();
	}
	
	/**
	 * 设置使用数据源
	 * @param dbSwitchType
	 */
	public static void useDataSource(String dbSwitchType){
		ThreadContext.useDataSource(dbSwitchType);
	}
	
	/**
	 * 获得数据源
	 * @return
	 */
	public static String getDataSource(){
		return ThreadContext.getDataSource();
	}
	
	/**
	 * 是否含有全局的权限
	 * @return
	 */
	public static boolean isHasGlobalPermission(){
		if(getAuthorizationPrincipal() == null){
			return false;
		}
//		//对于拥有所有权限的
//		if(getAuthorizationPrincipal().hasAnyRole(RoleConstant.ROLE_ADMIN_HIGHER_UPS)){
//			return true;
//		}
		return true;
	}

}
