/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package com.comb.framework.auth.aop.interceptor;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.auth.aop.handler.AnnotationsHandler;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.ClassUtils;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.Collection;
import java.util.HashSet;


/**
 * 数据库DbSwitch annotation 方法拦截器处理类
 * @author fwb
 *
 */
@Service
//@SuppressWarnings({"unchecked"})
public class TestAnnotationMethodInterceptor implements MethodInterceptor, InitializingBean {

	@Autowired
    private AnnotationsHandler annotationsHandler;


	public TestAnnotationMethodInterceptor(){
	    System.out.println();
    }
    /**
     * Creates a Shiro {@link MethodInvocation MethodInvocation} instance and then immediately calls
     * {@link org.apache.shiro.authz.aop.AuthorizingMethodInterceptor#invoke super.invoke}.
     *
     * @param methodInvocation the AOP Alliance-specific <code>methodInvocation</code> instance.
     * @return the return value from invoking the method invocation.
     * @throws Throwable if the underlying AOP Alliance method invocation throws a <code>Throwable</code>.
     */
    public Object invoke(MethodInvocation methodInvocation) throws Throwable {    	
    	 ThreadContext.setMethodName(methodInvocation.getMethod().getName());
    	 annotationsHandler.processDbSwitch(getPermissionAnnotations(methodInvocation));
         return methodInvocation.proceed();
    }
    
	public Collection<Class<? extends Annotation>> getDbAnnotationClass(){
    	return annotationsHandler.getDbAnnotationClass();
    }
    
    /**
     * 解析annotaion集合
     * @param mi
     * @param clazzList
     * @return
     */
	private  Collection<Annotation> getPermissionAnnotations(MethodInvocation mi) {
		Collection<Annotation> set = new HashSet<Annotation>();
		for (Class<? extends Annotation> clazz : getDbAnnotationClass()) {
			Annotation a = getAnnotation(mi, clazz);
			if (a != null){
				set.add(a);
			}
		}
		//如果方法存在，则不需要查找类级别的
        if(set.isEmpty()){
        	for (Class<? extends Annotation> clazz : getDbAnnotationClass()) {
    			Annotation a = getAnnotationFromClass(mi, clazz);
    			if (a != null){
    				set.add(a);
    			}
    		}
		}
		return set;		
	}
    
    private  Annotation getAnnotation(MethodInvocation mi, Class<? extends Annotation> clazz) {
        Method m = mi.getMethod();
        Annotation a = AnnotationUtils.findAnnotation(m, clazz);
        if (a != null) return a;

        //The MethodInvocation's method object could be a method defined in an interface.
        //However, if the annotation existed in the interface's implementation (and not
        //the interface itself), it won't be on the above method object.  Instead, we need to
        //acquire the method representation from the targetClass and check directly on the
        //implementation itself:
        Class<?> targetClass = mi.getThis().getClass();
        m = ClassUtils.getMostSpecificMethod(m, targetClass);
        a = AnnotationUtils.findAnnotation(m, clazz);
        return a;
    }
    
    // See if the class has the same annotation
    private  Annotation getAnnotationFromClass(MethodInvocation mi, Class<? extends Annotation> clazz) {        
        return AnnotationUtils.findAnnotation(mi.getThis().getClass(), clazz);
    }

    public void afterPropertiesSet() throws Exception {

        
    }    
    
}
