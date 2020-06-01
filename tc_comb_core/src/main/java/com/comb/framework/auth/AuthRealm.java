package com.comb.framework.auth;

import com.comb.framework.auth.permission.LevelPermission;
import com.comb.framework.auth.permission.OperationPermission;

import java.io.Serializable;
import java.util.Collection;

/**
 * realm接口 用户和权限数据之间的桥梁
 *
 * @author fwb
 *
 */
public interface AuthRealm<ID extends Serializable> {
	
	
	/**
	 * 根据标识获得
	 * @param principal
	 * @return
	 */
	User<ID> findUserByPrincipal(String principal);
	
	/**
	 * 根据登录名活动
	 * @param name
	 * @return
	 */
	User<ID> findUserByName(String name);
	
	/**
	 * 根据角色获得用户
	 * @param name
	 * @param role
	 * @return
	 */
	User<ID> findUserByNameRole(String name, String role);
	
	
	/**
	 * 根据用户ID获得
	 * @param id
	 * @return
	 */
	User<ID> findUserById(ID id);
	
	/**
	 * 根据角色获得用户
	 * @param role
	 * @return
	 */
	User<ID> findUserByRole(String role);
	
	/**
	 * 根据用户获得该用户的权限信息
	 * @param user
	 * @return
	 */
	AuthorizationPrincipal findUserAuthorizationPrincipal(User<ID> user);
	
	/**
	 * 根据组名获得组
	 * @param groupName
	 * @return
	 */
	Group findGroup(String groupName);

	/**
	 * 获得组名集合获得组集合
	 * @param groupNames
	 * @return
	 */
	Collection<Group> queryGroups(Collection<String> groupNames);
	
	/**
	 * 获得所有的角色
	 * @return
	 */
	Collection<String> queryAllRoles();
	/**
	 * 获得所有的组
	 * @return
	 */
	Collection<Group> queryAllGroups();
	
	/**
	 * 根据用户获得对应用户的操作权限
	 * @param user
	 * @return
	 */
	Collection<OperationPermission> queryOperationPermissionByUser(User<ID> user);
	
	/**
	 * 根据用户获得对应用户的层权限
	 * @param user
	 * @return
	 */
	Collection<LevelPermission> queryLevelPermissionByUser(User<ID> user);
	
	/**
	 * 根据用户获得对应用户的角色
	 * @param user
	 * @return
	 */
	Collection<String> queryRoleByUser(User<ID> user); 
	/**
	 * 根据用户获得对应用户的组
	 * @param user
	 * @return
	 */
    Collection<String> queryGroupByUser(User<ID> user); 

    /**
     * 碰到组是否存在死循环
     * @param isReload
     */
    void checkClosedCycle(boolean isReload);    
    /**
     * 重新初始化
     * Role、Group信息
     * @return
     */
    boolean reloadSchema();
    
    /**
     * 清除内存中缓存
     * 并重新初始化Role、Group信息
     * @throws Exception
     */
    void flush() throws Exception;
    
    boolean isHttps();
}
