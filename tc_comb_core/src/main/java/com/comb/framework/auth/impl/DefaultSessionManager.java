package com.comb.framework.auth.impl;

import com.comb.framework.auth.AbstractSessionManager;
import org.springframework.stereotype.Service;

@Service("sessionManager")
public class DefaultSessionManager extends AbstractSessionManager<Long> {
	
	
	public DefaultSessionManager() {
	}

}
