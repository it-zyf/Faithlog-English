package com.comb.framework.rpc.init;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;

@Service
public class DefaultInitChannel extends AbstractInitChannel implements InitializingBean{

	@Override
	public void initByOutside() {
		
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		this.init();
	}

}
