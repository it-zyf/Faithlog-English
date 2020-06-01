package com.comb.framework.proxy.handler;

import com.comb.framework.Exception.CasFailedException;
import com.comb.framework.Exception.CasTryTooMuchException;
import org.checkerframework.checker.units.qual.A;
import org.springframework.aop.support.AopUtils;
import org.springframework.dao.DeadlockLoserDataAccessException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.util.ClassUtils;

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.HashSet;
import java.util.Set;

public class CasHandler<T> implements InvocationHandler{

	private static int CAS_TRY_LIMIT = 100;

	private T object;

	public CasHandler(T object){
		this.object = object;
	}
	
	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

		Object result = null;
		int tryCount = 0;

//		Annotation[] annotations = method.getDeclaredAnnotations();
//
//		for(Annotation annotation : annotations){
//			System.out.println("_____________________" + annotation.annotationType().getName());
//		}
//		Class<?> targetClass = AopUtils.getTargetClass(object);
//		Method m = AopUtils.getMostSpecificMethod(method, targetClass);
////		AopUtils.getMostSpecificMethod(method, );
//		annotations = m.getAnnotations();
//		for(Annotation annotation : annotations){
//			System.out.println("_____________________" + annotation.annotationType().getName());
//		}

		while(true){
			try{
				result = method.invoke(object, args);
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
				throw new CasTryTooMuchException("Cas try " + CAS_TRY_LIMIT + " times, serious problem !");
			}

		}

		return result;
    }
}
