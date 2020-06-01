package com.comb.framework.auth;

import java.io.Serializable;
import java.security.Principal;

public interface User<ID extends Serializable> extends Principal {
	
	ID getId();
	
	String getPassword();
	
	/**
	 * 本地数据库id
	 * 作为唯一的标识
	 * @return
	 */
	String getLocalId();
	
}
