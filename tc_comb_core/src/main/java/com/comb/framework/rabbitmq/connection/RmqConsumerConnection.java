package com.comb.framework.rabbitmq.connection;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.comb.framework.rabbitmq.config.ConnectionConfig;
import com.comb.framework.rabbitmq.config.ConsumerChannelConfig;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class RmqConsumerConnection {
    private  static Logger logger = Logger.getLogger(RmqConsumerConnection.class);
    private ConnectionFactory factory = null;
    private Connection connection = null;
    private Channel channel = null;

    public void Init(ConnectionConfig connectionConfig, ConsumerChannelConfig consumerChannelConfig) throws IOException, TimeoutException {
        factory = new ConnectionFactory();
        factory.setHost(connectionConfig.getHost());
        factory.setPort(connectionConfig.getPort());
        factory.setUsername(connectionConfig.getUserName());
        factory.setPassword(connectionConfig.getPassword());
        factory.setVirtualHost(connectionConfig.getVirtualHost());
        connection =  factory.newConnection();
        channel = connection.createChannel();
        channel.queueDeclare(consumerChannelConfig.getQueueName(), consumerChannelConfig.isDeclareDurable(),
                consumerChannelConfig.isDeclareexclusive(), consumerChannelConfig.isDeclareAutoDelete(), consumerChannelConfig.getDeclareArguments());
        channel.basicQos(consumerChannelConfig.getBasicQos());
        logger.info("RmqConsumerConnection init.");
        logger.info("ConnectionConfig : " + connectionConfig.toString());
        logger.info("ConsumerChannelConfig :" + consumerChannelConfig.toString());
    }


    public Channel GetChannel() {
        return channel;
    }

    public void Close() throws IOException, TimeoutException {
        channel.close();
        connection.close();
    }
}
