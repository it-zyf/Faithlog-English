package com.comb.framework.db.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 
 * @author
 * 应用于spring的action，表示该action的request cycle内，都使用某个数据库<br/>
 * 
 * <p>
 * 默认的都是使用<strong>master</strong>，不需要用本annotation来注解。<br/>
 * 如果该action里的数据库操作全部是只读的，则可以注解成<strong>DbSwtichType.SLAVE</strong><br/>
 * </p>
 */
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface DbSwitch {
	
	//DbSwitchType type() default DbSwitchType.MASTER;
	
	boolean constraint() default false;
	
	String[] master();
	
	String[] slave();
}

