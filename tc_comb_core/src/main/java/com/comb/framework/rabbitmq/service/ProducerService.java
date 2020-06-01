package com.comb.framework.rabbitmq.service;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.MessageProperties;
import com.comb.framework.PropertyConfigurer.ZooPropertyConfigurer;
import com.comb.framework.rabbitmq.config.ConnectionConfig;
import com.comb.framework.rabbitmq.config.ProducerChannelConfig;
import com.comb.framework.rabbitmq.connection.RmqProducerConnectionPool;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeoutException;


public class ProducerService {
    private String ProducerNames = "producer_names";
    private String ProducerConName = "pmqconnection";
    private String ProducerChlName = "pmqchannel";
    private String PoolSizeName = "poolsize";
    private String ChannelPerCountName = "channelcountofconnection";
    private List<String> routingKeys = null;
    private RmqProducerConnectionPool connectionPool = null;
    private ProducerChannelConfig producerChannelConfig;
    public void Init(String producerName) throws IOException, TimeoutException {
        String pdConnectStrKey = ZooPropertyConfigurer.getProperty(producerName, ProducerConName);
        String pdConnectStr = ZooPropertyConfigurer.getProperty(pdConnectStrKey);
        String pdChannelStrKey = ZooPropertyConfigurer.getProperty(producerName, ProducerChlName);
        String pdChannelStr = ZooPropertyConfigurer.getProperty(pdChannelStrKey);
        int poolSize = Integer.parseInt(ZooPropertyConfigurer.getProperty(producerName, PoolSizeName));
        int channelCountOfConnection = Integer.parseInt(ZooPropertyConfigurer.getProperty(producerName, ChannelPerCountName));
        ConnectionConfig connectionConfig = new ConnectionConfig(pdConnectStr);
        producerChannelConfig = new ProducerChannelConfig(pdChannelStr);
        connectionPool = new RmqProducerConnectionPool(poolSize, channelCountOfConnection);
        connectionPool.Init(connectionConfig, producerChannelConfig);
        routingKeys = producerChannelConfig.getRoutingKey();
    }
    public void reloadRoutingKeys(String producerName) {
        String pdChannelStrKey = ZooPropertyConfigurer.getProperty(producerName, ProducerChlName);
        String pdChannelStr = ZooPropertyConfigurer.getProperty(pdChannelStrKey);
        ProducerChannelConfig newProducerChannelConfig = new ProducerChannelConfig(pdChannelStr);
        producerChannelConfig.setRoutingKey(newProducerChannelConfig.getRoutingKey());
        routingKeys = producerChannelConfig.getRoutingKey();
    }
    public Channel GetChannel(){
        return connectionPool.GetChannel();
    }
    public void ReleaseChannel(Channel channel){
        connectionPool.ReleaseChannel(channel);
    }
    public boolean AppendRoutingKey(List<String> routingKeyList) throws IOException {
        return connectionPool.AppendRoutingKey(routingKeyList);
    }

    public boolean PushMsg(String exchangeName, String routeKey, byte[] msg) throws IOException {
        Channel channel = GetChannel();
        try{
            channel.txSelect();
            channel.basicPublish(exchangeName, routeKey, MessageProperties.PERSISTENT_TEXT_PLAIN, msg);  //发送消息
            channel.txCommit();
        }
        catch (Exception e){
            channel.txRollback();
            return false;
        }
        finally {
            ReleaseChannel(channel);
        }
        return true;
    }

    public String GetExchangeName() {
        return connectionPool.GetExName();
    }

    public List<String> getRoutingKeys() {
        return routingKeys;
    }
}
