package com.comb.framework.auth.impl;

import com.comb.framework.auth.Group;

public class SimpleGroup extends AbstractAuthorizationPrincipal implements Group {

	private static final long serialVersionUID = 3896841272396237898L;
	private String name;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public boolean isGroup() {
		return true;
	}

	public void addGroup(Group group) {
		if(group == null)
			return;
		this.getGroups().add(group);
	}

}
