package com.comb.framework.zoo;

import com.comb.framework.auth.spring.util.SpringContextUtil;
import com.comb.framework.container.spring.SpringContext;
import com.comb.framework.rabbitmq.service.ProducerManagerService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AppendProducerRoutingKey implements ZooCommand {
    @Override
    public boolean Exec(Object... params) throws IOException {
        if(params.length < 2)
            return false;
        String producer = (String)params[0];
        String routingKeys = (String)params[1];
        String[] args = routingKeys.split("#");
        List<String> routingKeyList = new ArrayList<>();
        for(String arg : args){
            routingKeyList.add(arg);
        }
        ProducerManagerService producerService = (ProducerManagerService) SpringContextUtil.getApplicationContext().getBean(ProducerManagerService.class);
        if(producerService == null)
            return false;
        producerService.AppendRoutingKey(producer, routingKeyList);
        return true;
    }
}
