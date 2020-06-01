package com.comb.framework.auth.spring.listener;

import com.comb.framework.auth.spring.util.SpringContextUtil;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * spring启动listener
 * 
 * @author fwb
 * 
 */
public class SpringLoaderListener extends ContextLoaderListener implements ServletContextListener {

	public void contextInitialized(ServletContextEvent event) {
		super.contextInitialized(event);
		ServletContext sc = event.getServletContext();
		WebApplicationContext wac = WebApplicationContextUtils.getWebApplicationContext(sc);
		SpringContextUtil.setApplicationContextStaticlly(wac);
	}

	
	public void contextDestroyed(ServletContextEvent event) {
		
	}

}
