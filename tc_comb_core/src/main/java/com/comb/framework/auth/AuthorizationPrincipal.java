package com.comb.framework.auth;

import com.comb.framework.auth.exception.AuthenticationException;
import com.comb.framework.auth.permission.LevelPermission;
import com.comb.framework.auth.permission.OperationPermission;
import com.comb.framework.auth.permission.Permission;

import java.security.Principal;
import java.util.Collection;

public interface AuthorizationPrincipal extends Principal{

	/**
	 * 是否是组
	 * @return
	 */
    boolean isGroup();
    /**
     * 获得所有的组权限
     * @return
     */
    Collection<Group> getGroups();
    /**
     * 获得所有的角色权限
     * @return
     */
    Collection<String> getRoles();
    
    /**
     * 是否含有操作权限
     * @param permission
     * @return
     */
	boolean isPermitted(OperationPermission permission);
	
	/**
	 * 是否属于这个权限范围内
	 * @param permission
	 * @return
	 */
	boolean isBelongTo(OperationPermission permission);
	
    /**
     * 是否含有层权限
     * @param permission
     * @return
     */
	boolean isPermitted(LevelPermission permission);
    /**
     * 是否含有对应的所有权限
     * @param permissions
     * @return
     */
	boolean isPermittedAll(Collection<? extends Permission> permissions);

	/**
	 * 是否具备某角色
	 * @param role
	 * @return
	 */
	boolean hasRole(String role);

	/**
	 * 是否具备对应的所有角色
	 * @param roles
	 * @return
	 */
	boolean hasAllRoles(Collection<String> roles);

	/**
	 * 是否具备对应角色的某一角色
	 * @param roles
	 * @return
	 */
	boolean hasAnyRole(Collection<String> roles);
	
	/**
	 * 断言
	 * 是否具备对应的所有角色,没有抛出AuthenticationException异常
	 * @param role
	 * @throws AuthenticationException
	 */
	void checkRole(String role) throws AuthenticationException;
	
	/**
	 * 断言
	 * 是否具备对应的所有角色,没有抛出AuthenticationException异常
	 * @param roles
	 * @throws AuthenticationException
	 */
	void checkRoles(Collection<String> roles) throws AuthenticationException;
	/**
	 * 断言
	 * 是否含有操作权限,没有抛出AuthenticationException异常
	 * @param permission
	 * @throws AuthenticationException
	 */
	void checkPermission(OperationPermission permission) throws AuthenticationException;
	/**
	 * 断言
	 * 是否含有层权限,没有抛出AuthenticationException异常
	 * @param permission
	 * @throws AuthenticationException
	 */
	void checkPermission(LevelPermission permission) throws AuthenticationException;
	/**
	 * 断言
	 * 是否含有对应的所有权限,没有抛出AuthenticationException异常
	 * @param permissions
	 * @throws AuthenticationException
	 */
	void checkPermissions(Collection<? extends Permission> permissions) throws AuthenticationException;
	
	/**
	 * 根据权限码、操作码获得传人操作码集合的字符串,以','分隔
	 * @param target 权限码
	 * @param operations 操作码集合
	 * @return 字符串,以','分隔 
	 */
	String getPermissions(String target, Collection<String> operations);
}
