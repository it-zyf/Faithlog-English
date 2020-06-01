package com.comb.framework.proxy.processor;

import com.comb.framework.proxy.ClassProxy;
import com.comb.framework.proxy.annotation.ProxyService;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanCreationException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;

@Service
public class ProxyServiceProcessor implements BeanPostProcessor {
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        Class<?> targeClass = bean.getClass();
        Field[] fields = targeClass.getDeclaredFields();
        for (Field field : fields) {
            if (field.isAnnotationPresent(ProxyService.class)) {  //判断属性是否是自定义注解
                if (!field.getType().isInterface()) {  //加自定义注解的属性必须是接口类型（这样才可能出现多个不同的实例bean)
                    throw new BeanCreationException("ProxyService field must be declared an interface");
                } else {
                    try {
                        field.setAccessible(true);
                        field.set(bean, ClassProxy.getInstance().getProxyClass(field.getType()));
                    } catch (IllegalAccessException e) {
                        e.printStackTrace();
                    }
                }
            }
//            else if(field.isAnnotationPresent(CasService.class)){
//                if(!field.getType().isInterface()) {  //加自定义注解的属性必须是接口类型（这样才可能出现多个不同的实例bean)
//                    throw new BeanCreationException("ProxyService field must be declared an interface");
//                } else {
//                    try {
//                        field.setAccessible(true);
//                        field.set(bean, CasClassProxy.getInstance().getProxyClass(SpringContextUtil.getBean(field.getType()), field.getType()));
//                    } catch (IllegalAccessException e) {
//                        e.printStackTrace();
//                    }
//                }
//            }
        }
        return bean;
    }

    private void hanldMyAnnotation(Field field, Object bean, Class<?> type) throws IllegalAccessException {

    }
}
