package com.comb.framework.PropertyConfigurer;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import java.util.Properties;

public class ConfigServerPropertyConfigurer extends PropertyPlaceholderConfigurer {
    protected void processProperties(
            ConfigurableListableBeanFactory beanFactoryToProcess,
            Properties props) throws BeansException {

        super.processProperties(beanFactoryToProcess, props);
    }
}
