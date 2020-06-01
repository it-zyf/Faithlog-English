package com.comb.framework.proxy.processor;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.stereotype.Service;

//另一种处理注解的方式, 把自定义Processer注册到beanfactory的bean装填流程中，如同@Autowaired一样
public class ProxyServiceBeanProcessor implements BeanFactoryPostProcessor {
    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory configurableListableBeanFactory) throws BeansException {
        configurableListableBeanFactory.addBeanPostProcessor(new ProxyServiceProcessor());
    }
}
