package com.comb.framework.zoo;

import com.comb.framework.auth.spring.util.SpringContextUtil;
import com.comb.framework.container.spring.SpringContext;
import com.comb.framework.rabbitmq.config.ConsumerChannelConfig;
import com.comb.framework.rabbitmq.service.ConsumerService;

public class AppendConsumer implements ZooCommand {
    @Override
    public boolean Exec(Object... params) throws Exception{
        if(params.length < 2)
            return false;
        String channelKey = (String)params[0];
        String configStr = (String)params[1];
        String[] args = configStr.split("#");
        String queueName = args[0];
        String code = args[1];
        String realQueueName = queueName + code;
        ConsumerService consumerService = (ConsumerService) SpringContextUtil.getApplicationContext().getBean(ConsumerService.class);
        if(consumerService == null)
            return false;
        ConsumerChannelConfig config = new ConsumerChannelConfig(realQueueName, code);
        consumerService.AppendConsumer(channelKey, config);
        return true;
    }
}
