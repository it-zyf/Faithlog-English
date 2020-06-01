package com.comb.framework.auth.aop.handler;

import java.lang.annotation.Annotation;

public interface PermissionHandler {

	String getName();
	
	Class<? extends Annotation> getAnnotationClass();
	
	void assertAuthorized(Annotation a);
}
