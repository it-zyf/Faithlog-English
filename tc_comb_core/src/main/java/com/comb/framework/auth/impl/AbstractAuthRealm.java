package com.comb.framework.auth.impl;

import com.comb.framework.auth.AuthRealm;
import com.comb.framework.auth.Group;
import com.comb.framework.auth.ThreadContext;
import com.comb.framework.auth.exception.AuthenticationException;
import com.comb.framework.auth.permission.util.GroupUtils;
import org.springframework.util.StringUtils;

import java.io.Serializable;
import java.util.*;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author fwb on 2013年7月24日
 * 
 */

public abstract class AbstractAuthRealm<ID extends Serializable> implements AuthRealm<ID> {

	private Map<String, Group> allGroups = new ConcurrentHashMap<String, Group>(); //存放所有的组		
	private Collection<String> roles = new HashSet<String>(); //存放所有的角色
	private boolean isHttps = false;
	
	final public Collection<String> getRoles() {
		if (roles.isEmpty())
			reloadAllRoles();
		return roles;
	}

	public void addRoles(Collection<String> roles) {
		if(roles.isEmpty())
			return;
		this.roles.addAll(roles);		
	}
	
	final public void addRole(String role) {
		if(StringUtils.isEmpty(role))
			return;
		roles.add(role);
	}
	
	private boolean reloadAllRoles(){
		Collection<String> roleCollection = queryAllRoles();
		if(roleCollection == null || roleCollection.isEmpty())
			return false;
		this.roles.addAll(roleCollection);
		return true;
	}
	
	/**
	 * 重新加载类
	 */
	private boolean reloadAllGroups() {
		Collection<Group> groups = queryAllGroups();
		if (groups == null || groups.isEmpty())
			return false;
		for (Group g : groups) {
			addGroup(g);
		}
		assertGroupValidation();
		return true;
	}
	
	final public boolean reloadSchema(){
		boolean bool = reloadAllRoles();
		if(!bool)
			return bool;
		return reloadAllGroups();
	}

	final public void addGroup(Group group) {
		if(group == null)
			return;
		this.allGroups.put(group.getName(), group);
	}
	
	public void addGroups(Collection<Group> groups){
		if(groups == null || groups.isEmpty())
			return;
		for(Group group : groups)
			this.allGroups.put(group.getName(), group);
	}
    
	final public Map<String, Group> getAllGroups() {
		if (this.allGroups.isEmpty()){
			reloadAllGroups();
		}
		return allGroups;
	}
	
	/**
	 * 缓存中加载Group 如果不存在，则重新初始化到缓存
	 */
	final public Group findGroup(String groupName) {
		boolean bool = true;
		if (this.getAllGroups().isEmpty())
			bool = this.reloadAllGroups();
		if (bool)
			return (Group) this.getAllGroups().get(groupName);
		return null;
	}

	/**
	 * 缓存中加载Group 如果不存在，则重新初始化到缓存
	 */
	final public Collection<Group> queryGroups(Collection<String> groupNames) {
		boolean bool = true;
		if (this.getAllGroups() == null || this.getAllGroups().isEmpty())
			bool = this.reloadAllGroups();
		if (bool) {
			Set<Group> set = new HashSet<Group>();
			Iterator<String> it = this.getAllGroups().keySet().iterator();
			while (it.hasNext()) {
				set.add(this.getAllGroups().get(it.next()));
			}
			return set;
		}
		return new HashSet<Group>();
	}
		
	/**
	 * 断言 group是否存在死循环
	 * 
	 * @throws IllegalStateException
	 */
	protected void assertGroupValidation() throws AuthenticationException {
		if (this.getAllGroups() == null || this.getAllGroups().isEmpty()) {
			String msg = "Groups is null or empty。";
			throw new AuthenticationException(msg);
		} else {
			Set<Entry<String, Group>> set = this.getAllGroups().entrySet();
			List<Group> groupList = new ArrayList<Group>();
			Set<String> noDeadCycleGroup = new HashSet<String>();
			// 过滤掉不存在死循环的group
			for (Entry<String, Group> e : set) {
				if (e.getValue().getGroups() == null
						|| e.getValue().getGroups().isEmpty()) {
					noDeadCycleGroup.add(e.getKey());
				} else {
					groupList.add(e.getValue());
				}
			}
			ThreadContext.put(GroupUtils.NO_DEAD_CYCLE_GROUP, noDeadCycleGroup);

			for (Group group : groupList) {
				if (GroupUtils.checkClosedCycle(group)) {
					String msg = "group:" + group.getName() + "  >>> exists dead circle。";
					throw new AuthenticationException(msg);
				} else {
					noDeadCycleGroup.add(group.getName());
				}
			}
			// 清除缓存中的group
			for (Entry<String, Group> e : set)
				ThreadContext.remove(e.getKey());
		}
	}

	/**
	 * 检查group是否存在死循环
	 */
	final public void checkClosedCycle(boolean isReload) {
		if (isReload) {
			reloadAllGroups();
		} else {
			assertGroupValidation();
		}
	}

	@Override
	public void flush() throws Exception {
		boolean bool = reloadAllRoles();
		if(!bool){
			String msg = "Role reload error。";
			throw new AuthenticationException(msg);
		}
		bool = reloadAllGroups();
		if(!bool){
			String msg = "Group reload error。";
			throw new AuthenticationException(msg);
		}		
	}
	
	@Override
	public boolean isHttps(){
		return this.isHttps;
	}
	
	public void setIsHttps(boolean isHttps){
		this.isHttps = isHttps;
	}
}
