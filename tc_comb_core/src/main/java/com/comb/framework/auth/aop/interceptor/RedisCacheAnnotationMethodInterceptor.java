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

import com.comb.framework.Exception.CasFailedException;
import com.comb.framework.auth.aop.annotation.RedisCache;
import com.comb.framework.auth.aop.handler.CasAnnotationsHandler;
import com.comb.framework.auth.aop.handler.RedisCacheAnnotationsHandler;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.dao.DeadlockLoserDataAccessException;
import org.springframework.dao.DuplicateKeyException;
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
//@Service
//@SuppressWarnings({"unchecked"})
public class RedisCacheAnnotationMethodInterceptor implements MethodInterceptor, InitializingBean {

	@Autowired
    private RedisCacheAnnotationsHandler redisCacheAnnotationsHandler;

    /**
     * Creates a Shiro {@link MethodInvocation MethodInvocation} instance and then immediately calls
     * {@link  super.invoke}.
     *
     * @param methodInvocation the AOP Alliance-specific <code>methodInvocation</code> instance.
     * @return the return value from invoking the method invocation.
     * @throws Throwable if the underlying AOP Alliance method invocation throws a <code>Throwable</code>.
     */
    public Object invoke(MethodInvocation methodInvocation) throws Throwable {
        Object result = null;

//        RedisCache annotation = (RedisCache)getPermissionAnnotations(methodInvocation);
//        String method = annotation.getKeyMehthod();
//
//        String type = annotation.type();
//
//        methodInvocation.

        methodInvocation.proceed();

        return result;
    }
    /**
     * 解析annotaion集合
     * @param mi
     * @param
     * @return
     */
    private  Annotation getPermissionAnnotations(MethodInvocation mi) {
        Collection<Annotation> set = new HashSet<Annotation>();
        Class<? extends Annotation> clazz  = getAnnotationClass();
        Annotation a = getAnnotation(mi, clazz);
        return a;
    }
    
	public Class<? extends Annotation> getAnnotationClass(){
    	return redisCacheAnnotationsHandler.getAnnotationClass();
    }

    private  Annotation getAnnotation(MethodInvocation mi, Class<? extends Annotation> clazz) {
        Method m = mi.getMethod();
        Annotation a = AnnotationUtils.findAnnotation(m, clazz);
        if (a != null) return a;
        Class<?> targetClass = mi.getThis().getClass();
        m = ClassUtils.getMostSpecificMethod(m, targetClass);
        a = AnnotationUtils.findAnnotation(m, clazz);
        return a;
    }

    public  Annotation getAnnotation(Method m, Class<?> targetClass) {
         Class<? extends Annotation> annotationClass = redisCacheAnnotationsHandler.getAnnotationClass();
        Annotation a = AnnotationUtils.findAnnotation(m, annotationClass);
        if (a != null) return a;
        m = ClassUtils.getMostSpecificMethod(m, targetClass);
        a = AnnotationUtils.findAnnotation(m, annotationClass);
        return a;
    }

    public void afterPropertiesSet() throws Exception {

        
    }    
    
}
