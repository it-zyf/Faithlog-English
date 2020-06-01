package com.comb.framework.auth.impl;

import com.comb.framework.auth.AuthorizationPrincipal;
import com.comb.framework.auth.Group;
import com.comb.framework.auth.exception.AuthenticationException;
import com.comb.framework.auth.permission.LevelPermission;
import com.comb.framework.auth.permission.OperationPermission;
import com.comb.framework.auth.permission.Permission;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.CollectionUtils;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public abstract class AbstractAuthorizationPrincipal  implements AuthorizationPrincipal {

	private static final long serialVersionUID = 213836344675687534L;

	private Collection<String> roles = new HashSet<String>();

	private Collection<OperationPermission> operationPermissions = new HashSet<OperationPermission>();

	private Collection<LevelPermission> levelPermissions = new HashSet<LevelPermission>();
	
	private Collection<Group> groups = new HashSet<Group>(); 
	
	private Collection<String> groupNames = new HashSet<String>();
	
	private boolean isRoleInitFromGroups = false;//是否已经从组里面初始化 

	public Collection<Group> getGroups() {
		if (this.groups == null)
			this.groups = new HashSet<Group>();
		return this.groups;
	}

	public void setGroups(Collection<Group> groups) {
		if (this.groups == null)
			this.groups = new HashSet<Group>();
		if(groups == null)
			return;
		this.groups.addAll(groups);
	}
	
	public abstract void addGroup(Group group);

	public Collection<String> getRoles() {
		if(this.roles == null)
			this.roles = new HashSet<String>();
		return this.roles;
	}

	public void setRoles(Collection<String> roles) {
		if(this.roles == null)
			this.roles = new HashSet<String>();
		if(roles == null)
			return;
		this.roles.addAll(roles);
	}

	public Collection<OperationPermission> getOperationPermissions() {
		if (this.operationPermissions == null)
			this.operationPermissions = new HashSet<OperationPermission>();
		return operationPermissions;
	}

	public void setOperationPermissions(Collection<OperationPermission> operationPermissions) {
		this.operationPermissions = operationPermissions;
	}

	public Collection<LevelPermission> getLevelPermissions() {
		return levelPermissions;
	}

	public void setLevelPermissions(Collection<LevelPermission> levelPermissions) {
		if (this.levelPermissions == null)
			this.levelPermissions = new HashSet<LevelPermission>();
		this.levelPermissions = levelPermissions;
	}

	public boolean isGroup() {
		return false;
	}

	public boolean isPermitted(OperationPermission permission) {
		if (!CollectionUtils.isEmpty(this.operationPermissions)) {
			for (OperationPermission op : this.operationPermissions) {
				if (op.isPermitted(permission)){
					return true;
				}
			}
		}
		
		if (!CollectionUtils.isEmpty(this.getGroups())) {
			for (Group g : getGroups()) {
				if (g.isPermitted(permission))
					return true;
			}
		}
		return false;
	}
	
	public boolean isBelongTo(OperationPermission permission){
		if (!CollectionUtils.isEmpty(this.operationPermissions)) {
			for (OperationPermission op : this.operationPermissions) {
				if (permission.isPermitted(op)){
					return true;
				}
			}
		}
		
		if (!CollectionUtils.isEmpty(this.getGroups())) {
			for (Group g : getGroups()) {
				if (g.isBelongTo(permission))
					return true;
			}
		}
		return false;
	}

	public boolean isPermitted(LevelPermission permission) {
		if (!CollectionUtils.isEmpty(this.levelPermissions)) {
			for (LevelPermission lp : this.levelPermissions) {
				if (lp.isPermitted(permission)){
					return true;
				}
			}
		}

		if (!CollectionUtils.isEmpty(this.getGroups())) {
			for (Group g : getGroups()) {
				if (g.isPermitted(permission))
					return true;
			}
		}
		return false;
	}

	public boolean isPermittedAll(Collection<? extends Permission> permissions) {
		if (!CollectionUtils.isEmpty(permissions)) {
			for (Permission p : permissions) {
				if (p instanceof LevelPermission) {
					if (!this.isPermitted((LevelPermission) p))
						return false;
				}
				if (p instanceof OperationPermission) {
					if (!this.isPermitted((OperationPermission) p))
						return false;
				}
			}
			return true;
		}
		return false;
	}

	public boolean hasRole(String role) {
		if (!CollectionUtils.isEmpty(this.roles)) {
			//如果roles里面不存在，则从组里面判断
			boolean isInRole = this.roles.contains(role);
			if(!isInRole && !isRoleInitFromGroups){
				isRoleInitFromGroups = true;
				initRoleFromGroup();
			}
			return this.roles.contains(role);
		}
		return false;
	}

	public boolean hasAllRoles(Collection<String> roles) {
		if (!CollectionUtils.isEmpty(this.roles)
				&& !CollectionUtils.isEmpty(roles)) {
			for (String role : roles) {
				if (!hasRole(role))
					return false;
			}
			return true;
		}
		return false;
	}

	public boolean hasAnyRole(Collection<String> roles) {
		if (!CollectionUtils.isEmpty(this.roles)
				&& !CollectionUtils.isEmpty(roles)) {
			for (String role : roles) {
				if (hasRole(role))
					return true;
			}
		}
		return false;
	}

	public void addRole(String role) {
		if (this.roles == null)
			this.roles = new HashSet<String>();
		this.roles.add(role);
	}

	public void addRoles(Collection<String> roles) {
		if (this.roles == null)
			this.roles = new HashSet<String>();
		this.roles.addAll(roles);
	}

	public void addOperationPermission(OperationPermission operationPermission) {
		if (this.operationPermissions == null)
			this.operationPermissions = new HashSet<OperationPermission>();
		this.operationPermissions.add(operationPermission);
	}

	public void addOperationPermissions(
			Collection<OperationPermission> operationPermissions) {
		if (this.operationPermissions == null)
			this.operationPermissions = new HashSet<OperationPermission>();
		this.operationPermissions.addAll(operationPermissions);
	}

	public void addLevelPermission(LevelPermission levelPermission) {
		if (this.levelPermissions == null)
			this.levelPermissions = new HashSet<LevelPermission>();
		this.levelPermissions.add(levelPermission);
	}

	public void addLevelPermissions(Collection<LevelPermission> levelPermissions) {
		if (this.levelPermissions == null)
			this.levelPermissions = new HashSet<LevelPermission>();
		this.levelPermissions.addAll(levelPermissions);
	}

	public void checkRole(String role) throws AuthenticationException{
		if(!hasRole(role))
		    throw new AuthenticationException("The user not has role:" + role);
	}

	public void checkRoles(Collection<String> roles) throws AuthenticationException{
		for(String role : roles){
			if(!hasRole(role))
			    throw new AuthenticationException("The user not has role:"+role);
		}
	}

	public void checkPermission(OperationPermission permission) throws AuthenticationException{
		if(!this.isPermitted(permission))
		    throw new AuthenticationException("The user not has  OperationPermission:" + permission.getTarget() + "=" + permission.getOperation());
	}

	public void checkPermission(LevelPermission permission) throws AuthenticationException{
		if(!this.isPermitted(permission))
		    throw new AuthenticationException("The user not has LevelPermission:" + permission.getTarget() + "=" + permission.getLevel());
	}

	public void checkPermissions(Collection<? extends Permission> permissions) throws AuthenticationException{
		for(Permission permission : permissions){
			if(permission instanceof OperationPermission){
				OperationPermission op = (OperationPermission)permission;
				if(!this.isPermitted(op))
				    throw new AuthenticationException("The user not has OperationPermission:" + op.getTarget() + "=" + op.getOperation());
			}else if(permission instanceof LevelPermission){
				LevelPermission lp = (LevelPermission)permission;
				if(!this.isPermitted(lp))
				    throw new AuthenticationException("The user not has LevelPermission:" + lp.getTarget() + "=" + lp.getLevel());
			}
		}			
	}
	
	/**
	 * 从对应组里面获得组集合，包括组里面的子组
	 * @return
	 */
	public Collection<String> getGroupNames(){
		if(groupNames == null){
			groupNames = new HashSet<String>();
		}
		if(groupNames.isEmpty()){		
			for(Group g : getGroups()){
				groupNames.add(g.getName());
				if(!this.isRoleInitFromGroups){
				    roles.addAll(g.getRoles());
				}
				addSubGroup(g);
			}
			this.isRoleInitFromGroups = true;
		}
		return groupNames;
	}
	
	/**
	 * 根据权限码、操作码获得传人操作码集合的字符串,以','分隔
	 * @param target 权限码
	 * @param operations 操作码集合
	 * @return
	 */
	public String getPermissions(String target, Collection<String> operations){
		if(StringUtils.isBlank(target)){
			return "";
		}
		Set<String> set = new HashSet<String>();
		if (!CollectionUtils.isEmpty(this.operationPermissions) && !CollectionUtils.isEmpty(operations)) {
			for(String operation : operations){
				OperationPermission permission = OperationPermission.getOperationPermission(target, operation);
				for (OperationPermission op : this.operationPermissions) {
					permission = OperationPermission.getOperationPermission(target, operation);
					if (op.isPermitted(permission)){
						set.add(operation);
					}
				}
			}
		}
		String permissions = "";
		for(String operation : set){
			permissions += operation + ",";
		}
		return permissions;
	}

	private void addSubGroup(Group g){
		if(!CollectionUtils.isEmpty(g.getGroups())){
			for(Group group : g.getGroups()){
				groupNames.add(group.getName());
				addSubGroup(group);
			}
		}
	}
	/**
	 * 因为组里面包含角色
	 * 从组里面获取角色信息
	 */
	private void initRoleFromGroup(){
		for(Group g : getGroups()){
			roles.addAll(g.getRoles());
			initRoleFromSubGroup(g);
		}
	}
	
	private void initRoleFromSubGroup(Group g){
		if(!CollectionUtils.isEmpty(g.getGroups())){
			for(Group group : g.getGroups()){
				roles.addAll(group.getRoles());
				initRoleFromSubGroup(group);
			}
		}
	}

}
