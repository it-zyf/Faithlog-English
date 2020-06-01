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
import com.comb.framework.Exception.CasTryTooMuchException;
import com.comb.framework.auth.ThreadContext;
import com.comb.framework.auth.aop.handler.AnnotationsHandler;
import com.comb.framework.auth.aop.handler.CasAnnotationsHandler;
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
@Service
//@SuppressWarnings({"unchecked"})
public class CasAnnotationMethodInterceptor implements MethodInterceptor, InitializingBean {

	@Autowired
    private CasAnnotationsHandler casAnnotationsHandler;
	private int CAS_TRY_LIMIT = 100;

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
        int tryCount = 0;

        while(true){
            try{
                result = methodInvocation.proceed();
                break;
            }
            catch (CasFailedException ce){
                tryCount++;

            }
            catch (DeadlockLoserDataAccessException de){
                tryCount++;
            }
            catch (DuplicateKeyException dke){
                tryCount++;
            }
            if(tryCount >= CAS_TRY_LIMIT){
                break;
//                throw new CasTryTooMuchException("Cas try " + CAS_TRY_LIMIT + " times, serious problem !");
            }

        }
        return result;
    }
    
	public Collection<Class<? extends Annotation>> getAnnotationClass(){
    	return casAnnotationsHandler.getAnnotationClass();
    }

    public  Annotation getAnnotation(Method m, Class<?> targetClass) {
        for( Class<? extends Annotation> annotationClass : casAnnotationsHandler.getAnnotationClass() ){
            Annotation a = AnnotationUtils.findAnnotation(m, annotationClass);
            if (a != null) return a;
            m = ClassUtils.getMostSpecificMethod(m, targetClass);
            a = AnnotationUtils.findAnnotation(m, annotationClass);
            return a;
        }
        return null;
    }
    
    // See if the class has the same annotation
    private  Annotation getAnnotationFromClass(MethodInvocation mi, Class<? extends Annotation> clazz) {        
        return AnnotationUtils.findAnnotation(mi.getThis().getClass(), clazz);
    }

    public void afterPropertiesSet() throws Exception {

        
    }    
    
}
