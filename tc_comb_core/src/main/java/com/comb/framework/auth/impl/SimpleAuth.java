package com.comb.framework.auth.impl;

import com.comb.framework.auth.Group;

/**
 * 权限实现类 跟用户存在对应关系
 * 一个用户一个权限
 * 多个用户一个权限
 * 保存在session中
 * @author fwb
 *
 */
public class SimpleAuth extends AbstractAuthorizationPrincipal {

	private static final long serialVersionUID = -6564145340495598538L;
	
	private String name;
	
	public void setName(String name) {
		this.name = name;
	}
	
	@Override
	public void addGroup(Group group) {
		if (group == null) {
			return;
		}
		this.getGroups().add(group);
	}

	@Override
	public String getName() {
		return name;
	}

}
