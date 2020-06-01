package com.comb.framework.zoo;

import com.comb.framework.auth.spring.util.SpringContextUtil;
import com.comb.framework.container.spring.SpringContext;
import com.comb.framework.rabbitmq.service.ConsumerService;
import com.comb.framework.rabbitmq.service.ProducerManagerService;

public class ReloadConfig implements ZooCommand {
    @Override
    public boolean Exec(Object... params) throws Exception{
        ProducerManagerService producerService = (ProducerManagerService) SpringContextUtil.getApplicationContext().getBean(ProducerManagerService.class);
        if(producerService == null)
            return false;
        producerService.ReloadConfig();
        ConsumerService consumerService = (ConsumerService) SpringContextUtil.getApplicationContext().getBean(ConsumerService.class);
        if(consumerService == null)
            return false;
        consumerService.ReloadConfig();
        return true;
    }
}
