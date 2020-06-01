package com.comb.framework.auth.provider;

import com.comb.framework.auth.AuthRealm;
import com.comb.framework.auth.Group;
import com.comb.framework.auth.User;
import com.comb.framework.auth.permission.LevelPermission;
import com.comb.framework.auth.permission.OperationPermission;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.util.Collection;

/**
 * 
 * @author fwb
 *
 * @param <ID>
 */
public abstract class ForwardingAuthRealm<ID extends Serializable> implements AuthRealm<ID>{
	
	@Autowired
	protected AuthRealm<ID> delegate;
	
	protected boolean isNeedReload = false;

	public boolean reloadSchema() {
		return delegate.reloadSchema();
	}

	public Group findGroup(String groupName) {
		return delegate.findGroup(groupName);
	}

	public Collection<Group> queryGroups(Collection<String> groupNames) {
		return delegate.queryGroups(groupNames);
	}

	public Collection<String> queryAllRoles() {
		return delegate.queryAllRoles();
	}

	public Collection<Group> queryAllGroups() {
		return delegate.queryAllGroups();
	}

	public Collection<OperationPermission> queryOperationPermissionByUser(User<ID> user) {
		return delegate.queryOperationPermissionByUser(user);
	}

	public Collection<LevelPermission> queryLevelPermissionByUser(User<ID> user) {
		return delegate.queryLevelPermissionByUser(user);
	}

	public Collection<String> queryRoleByUser(User<ID> user) {
		return delegate.queryRoleByUser(user);
	}

	public Collection<String> queryGroupByUser(User<ID> user) {
		return delegate.queryGroupByUser(user);
	}

	public void checkClosedCycle(boolean isReload) {
		delegate.checkClosedCycle(isReload);
	}
	
	@Override
	public User<ID> findUserById(ID id) {
		return delegate.findUserById(id);
	}

	
	public AuthRealm<ID> getRealm(){
		return delegate;
	}

	public boolean isNeedReload() {
		return isNeedReload;
	}

	public void setNeedReload(boolean isNeedReload) {
		this.isNeedReload = isNeedReload;
	}
	
	@Override
	public boolean isHttps() {
		return delegate.isHttps();
	}
	
	public abstract void updateUser(User<ID> user);
	/**
	 * 清楚用户缓存，包括权限信息
	 * @param user
	 */
	public abstract void deleteUser(User<ID> user);
	
	/**
	 * 更新用户权限
	 * @param user
	 */
	public abstract void updateUserAuthorizationPrincipal(User<ID> user);
	
	/**
	 * 获得对应模块的操作权限信息
	 * @param user
	 * @param target
	 * @return
	 */
	public abstract String getOperatePermissions(User<ID> user, String target);
	
	/**
	 * 保存对应模块的操作权限信息
	 * 仅保存30分钟
	 * @param user
	 * @param target
	 * @param permissions
	 */
	public abstract void saveOperatePermissions(User<ID> user, String target, String permissions);
	
	/**
	 * 检查token
	 * 如果存在,则去掉
	 * @param token
	 * @return
	 */
	public abstract boolean checkToken(String token);
	
	/**
	 * 检查移动端URL访问控制
	 * 是否是重复移动端访问URL
	 * 暂定10秒
	 * @param estime
	 * @return
	 */
	public abstract boolean isRepeatMobileURL(String estime);
	
	/**
	 * 检查需要间隔访问的路径
	 * @param sessionId
	 * @param relativeUrl
	 * @param times
	 * @return
	 */
	public abstract boolean checkAccessIntervalUrl(String sessionId, String relativeUrl, long times);
}
