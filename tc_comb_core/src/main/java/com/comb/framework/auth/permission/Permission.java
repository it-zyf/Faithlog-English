package com.comb.framework.auth.permission;

public interface Permission {

	String WILDCARD_TOKEN = "*";//层通配符
	String PART_DIVIDER_TOKEN = ":";//层分隔符
	String PART_DIVIDER_PACKAGE_TOKEN = "\\.";//层分隔符
	String SUBPART_DIVIDER_TOKEN = ",";//子层分隔符
	String PART_SPLIT_TOKEN = "=";//权限分隔符
	String EXCLUDE_DIVIDER_TOKEN = "-";//子层不包含符
	String CROSS_WILDCARD_TOKEN = "**";//夸层通配符
}
