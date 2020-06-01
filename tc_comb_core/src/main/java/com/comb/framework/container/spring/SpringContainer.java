package com.comb.framework.container.spring;

import com.comb.framework.container.Container;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/**
 * Spring启动容器
 * @author fwb
 *
 */
public final class SpringContainer implements Container {
	
	public static String CONFIG_FILE = "classpath:spring/*.xml";
	
	private SpringContext springContext;
	
	public SpringContainer(){
	}

	/**
	 * spring初始化xml文件路径
	 * @param configFilePath
	 */
	public SpringContainer(String configFilePath){
		CONFIG_FILE = configFilePath;
	}
	
	@Override
	public void start() {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext(CONFIG_FILE);
		springContext = new SpringContext(context);
		context.start();
	}
	
	@Override
	public void stop() {
		if (null != springContext && null != springContext.get()) {
			springContext.get().close();
			springContext = null;
		}
	}
	
	@Override
	public SpringContext getContext() {
		return springContext;
	}
}
