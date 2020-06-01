package com.comb.framework.rabbitmq.consumer;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Consumer;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class ConsumerCreater {
    public static Consumer GetNewConsumer(String className, Channel channel, String consumerLabel) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Class<?> clazz = Class.forName(className);
        Constructor constructor = clazz.getConstructor(Channel.class, String.class);
        Consumer consumer = (Consumer)constructor.newInstance(channel, consumerLabel);
        return consumer;
    }
}
