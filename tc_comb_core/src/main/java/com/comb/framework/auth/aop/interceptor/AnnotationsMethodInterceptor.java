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
import com.comb.framework.auth.exception.AuthenticationException;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.ClassUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.Collection;
import java.util.HashSet;


/**
 * An <tt>AnnotationsAuthorizingMethodInterceptor</tt> is a MethodInterceptor that asserts a given method is authorized
 * to execute based on one or more configured <tt>AuthorizingAnnotationMethodInterceptor</tt>s.
 *
 * <p>This allows multiple annotations on a method to be processed before the method
 * executes, and if any of the <tt>AuthorizingAnnotationMethodInterceptor</tt>s indicate that the method should not be
 * executed, an <tt>AuthorizationException</tt> will be thrown, otherwise the method will be invoked as expected.
 *
 * <p>It is essentially a convenience mechanism to allow multiple annotations to be processed in a single method
 * interceptor.
 *
 */
@Service
public class AnnotationsMethodInterceptor implements MethodInterceptor, InitializingBean {
		
	@Autowired
    private AnnotationsHandler annotationsHandler;	 
	

    /**
     * Creates a Shiro {@link MethodInvocation MethodInvocation} instance and then immediately calls
     * {@link org.apache.shiro.authz.aop.AuthorizingMethodInterceptor#invoke super.invoke}.
     *
     * @param methodInvocation the AOP Alliance-specific <code>methodInvocation</code> instance.
     * @return the return value from invoking the method invocation.
     * @throws Throwable if the underlying AOP Alliance method invocation throws a <code>Throwable</code>.
     */
    public Object invoke(MethodInvocation methodInvocation) throws Throwable {    	
    	 assertAuthorized(methodInvocation);    	 
         return methodInvocation.proceed();
    }
    
	public Collection<Class<? extends Annotation>> getAnnotationClass(){
    	return annotationsHandler.getAnnotationClass();
    }
    
    /**
     * Ensures the calling Subject is authorized to execute the specified <code>MethodInvocation</code>.
     * <p/>
     * As this is an AnnotationMethodInterceptor, this implementation merely delegates to the internal
     * {@link AuthorizingAnnotationHandler AuthorizingAnnotationHandler} by first acquiring the annotation by
     * calling {@link #getAnnotation(MethodInvocation) getAnnotation(methodInvocation)} and then calls
     * {@link AuthorizingAnnotationHandler#assertAuthorized(Annotation) handler.assertAuthorized(annotation)}.
     *
     * @param mi the <code>MethodInvocation</code> to check to see if it is allowed to proceed/execute.
     * @throws AuthorizationException if the method invocation is not allowed to continue/execute.
     */
    public void assertAuthorized(MethodInvocation mi) throws AuthenticationException {  
        try {
        	//先判断方法级别的
        	annotationsHandler.assertAuthorized(getPermissionAnnotations(mi));        	
        }catch(AuthenticationException ae) {        	
        	HttpServletResponse response = ThreadContext.getResponse();
        	if(response == null){
        		throw new AuthenticationException("Not authorized to invoke method: " + mi.getMethod());
        	}else{
        		try {
        			String url = (String)ThreadContext.get(ThreadContext.ERROR_URL);
        			if(url == null){
        				throw new AuthenticationException("Not authorized to invoke method: " + mi.getMethod());
        			}
					response.sendRedirect(url);
				} catch (IOException e) {
					throw new AuthenticationException("Not authorized to invoke method: " + mi.getMethod());
				}
        	}        	
        }   
    }
    
    /**
     * 解析annotaion集合
     * @param mi
     * @param clazzList
     * @return
     */
	private  Collection<Annotation> getPermissionAnnotations(MethodInvocation mi) {
		Collection<Annotation> set = new HashSet<Annotation>();
		for (Class<? extends Annotation> clazz : getAnnotationClass()) {
			Annotation a = getAnnotation(mi, clazz);
			if (a != null){
				set.add(a);
			}
		}
		//如果方法存在，则不需要查找类级别的
        if(set.isEmpty()){
        	for (Class<? extends Annotation> clazz : getAnnotationClass()) {
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
        //if (a != null) return a;
        // See if the class has the same annotation
        //return AnnotationUtils.findAnnotation(mi.getThis().getClass(), clazz);
    }

    // See if the class has the same annotation
    private  Annotation getAnnotationFromClass(MethodInvocation mi, Class<? extends Annotation> clazz) {        
        return AnnotationUtils.findAnnotation(mi.getThis().getClass(), clazz);
    }

    public void afterPropertiesSet() throws Exception {

        
    }    
    
}
