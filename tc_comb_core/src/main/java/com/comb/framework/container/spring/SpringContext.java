package com.comb.framework.container.spring;

import com.comb.framework.container.Context;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.support.AbstractApplicationContext;


public final class SpringContext implements Context<AbstractApplicationContext>,ApplicationContextAware{

	private static AbstractApplicationContext applicationContext;
	private static ApplicationContext wac;

	@SuppressWarnings("static-access")
	public SpringContext(final AbstractApplicationContext applicationContext) {
		this.applicationContext = applicationContext;
	}

	@Override
	public AbstractApplicationContext get() {
		return applicationContext;
	}
	
	public static AbstractApplicationContext getApplicationContext(){
		return applicationContext;
	}

	public static ApplicationContext getWac(){
		return wac;
	}
	public static Object getBean(Class<?> c){
		if(applicationContext != null){
			return applicationContext.getBean(c);
		}
		else if(wac != null){
			return wac.getBean(c);
		}
		return null;
	}
	public static Object getBean(String name){
		if(applicationContext != null){
			return applicationContext.getBean(name);
		}
		else if(wac != null){
			return wac.getBean(name);
		}
		return null;
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.wac = applicationContext;
	}
}
