package com.comb.framework.rabbitmq.test;

import com.rabbitmq.client.Channel;
import com.comb.framework.rabbitmq.consumer.CommonConsumer;

import java.io.UnsupportedEncodingException;

public class TestConsumer extends CommonConsumer {
    public TestConsumer(Channel channel, String consumerLabel) {
        super(channel, consumerLabel);
    }

    public boolean OnMessage(byte[] body) throws UnsupportedEncodingException {
        String msg = null;
        msg = new String(body,"utf-8");
        System.out.println(_consumerLabel + " --- consume msg: "+msg);
        return true;
    }
}
