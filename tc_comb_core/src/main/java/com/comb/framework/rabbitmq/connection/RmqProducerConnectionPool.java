package com.comb.framework.rabbitmq.connection;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.comb.framework.rabbitmq.config.ConnectionConfig;
import com.comb.framework.rabbitmq.config.ProducerChannelConfig;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.TimeoutException;

public class RmqProducerConnectionPool {
    private static Logger logger =  Logger.getLogger(RmqProducerConnectionPool.class);
    private List<Connection> connections = new ArrayList<>();
    private ConcurrentLinkedQueue<Channel> channelQueue = new ConcurrentLinkedQueue<>();
    private List<Channel> channelList = new ArrayList<>();
    private int poolSize = 5;
    private int channelCountOfConnection = 20;
    private ProducerChannelConfig producerChannelConfig;
    private ConnectionConfig connectionConfig;
    private ConnectionFactory factory = null;
    private Object ExtendLock = new Object();

    public RmqProducerConnectionPool(int poolSize, int channelCountOfConnection){
        this.poolSize = poolSize;
        this.channelCountOfConnection = channelCountOfConnection;
    }

    public void Init(ConnectionConfig connectionConfig, ProducerChannelConfig channelConfig) throws IOException, TimeoutException {
        producerChannelConfig = channelConfig;
        this.connectionConfig = connectionConfig;
        factory = new ConnectionFactory();
        //factory.setHost("10.29.165.116");
        factory.setHost(connectionConfig.getHost());
        factory.setPort(connectionConfig.getPort());
        factory.setUsername(connectionConfig.getUserName());
        factory.setPassword(connectionConfig.getPassword());
        factory.setVirtualHost(connectionConfig.getVirtualHost());
        factory.setAutomaticRecoveryEnabled(connectionConfig.isAutomaticRecoveryEnabled());
        factory.setNetworkRecoveryInterval(connectionConfig.getNetworkRecoveryInterval());
        factory.setTopologyRecoveryEnabled(connectionConfig.isTopologyRecoveryEnabled());
        for(int i = 0; i < poolSize; i++){
            Connection connection =  factory.newConnection();
            connections.add(connection);
            for(int j = 0; j < channelCountOfConnection; j++){
                Channel channel = connections.get(i).createChannel();
                channel.exchangeDeclare(channelConfig.getExchangeName(), channelConfig.getEchangeDeclare(), channelConfig.isDeclareDurable());
                String queueName = channelConfig.getQueueName();
                List<String> routingKeyList = channelConfig.getRoutingKey();
                for(int k = 0; k < routingKeyList.size(); k++){
                    String routingKey = routingKeyList.get(k);
                    String realQueueName = queueName + routingKey;
                    channel.queueDeclare(realQueueName, channelConfig.isDeclareDurable(),
                            channelConfig.isDeclareexclusive(),channelConfig.isDeclareAutoDelete(),channelConfig.getDeclareArguments());
                    channel.queueBind(realQueueName, channelConfig.getExchangeName(),  routingKey);
                }
                channelQueue.add(channel);
                channelList.add(channel);
            }
        }
        logger.info("RmqProducerConnectionPool init:");
        logger.info("Pool size:" + poolSize);
        logger.info("Total channel count:" + channelQueue.size());
        logger.info("Connection config:" + connectionConfig.toString());
        logger.info("Channel config:" + channelConfig.toString());
        Start();
    }
    public Channel GetChannel(){
        Channel channel = channelQueue.poll();
        if(channel == null){
            logger.warn("Have no channel to user! Try to load new ");
            synchronized(ExtendLock){
                ExtendQueue();
                channel = channelQueue.poll();
            }
        }
        return channel;
    }

    public boolean AppendRoutingKey(List<String> routingKeyList) throws IOException {
        for(String rk : routingKeyList){
            String queueName = producerChannelConfig.getQueueName();
            String realQueueName = queueName + rk;
            for(Channel channel : channelList){
                channel.queueDeclare(realQueueName, producerChannelConfig.isDeclareDurable(),
                        producerChannelConfig.isDeclareexclusive(),producerChannelConfig.isDeclareAutoDelete(),producerChannelConfig.getDeclareArguments());
                channel.queueBind(realQueueName, producerChannelConfig.getExchangeName(),  rk);
            }
        }

        return true;
    }

    public boolean RemoveRoutingKey(List<String> routingKeyList) throws IOException {
        for(String rk : routingKeyList){
            String queueName = producerChannelConfig.getQueueName();
            String realQueueName = queueName + rk;
            for(Channel channel : channelList){
                channel.queueUnbind(realQueueName, producerChannelConfig.getExchangeName(),  rk);
            }
        }
        return true;
    }
    private void ExtendQueue(){
        if(channelQueue.size() == 0){
            try{
                logger.info("Add new channels to queue!");
                long start = System.currentTimeMillis();
                for(int i = 0; i < connections.size(); i++){
                    for(int j = 0; j < channelCountOfConnection; j++) {
                        Channel newChannel = connections.get(i).createChannel();
                        newChannel.exchangeDeclare(producerChannelConfig.getExchangeName(), producerChannelConfig.getEchangeDeclare(), producerChannelConfig.isDeclareDurable());
                        String queueName = producerChannelConfig.getQueueName();
                        List<String> routingKeyList = producerChannelConfig.getRoutingKey();
                        for (int k = 0; k < routingKeyList.size(); k++) {
                            String routingKey = routingKeyList.get(k);
                            String realQueueName = queueName + routingKey;
                            newChannel.queueDeclare(realQueueName, producerChannelConfig.isDeclareDurable(),
                                    producerChannelConfig.isDeclareexclusive(), producerChannelConfig.isDeclareAutoDelete(), producerChannelConfig.getDeclareArguments());
                            newChannel.queueBind(realQueueName, producerChannelConfig.getExchangeName(), routingKey);
                        }
                        channelQueue.add(newChannel);
                        channelList.add(newChannel);
                    }
                }
                logger.info("Add new channels to queue complete! Cost:" + (System.currentTimeMillis() - start) + "ms");
            }
            catch (Exception e){
                e.printStackTrace();
            }
        }
    }
    public void ReleaseChannel(Channel channel){
        if (!channelQueue.contains(channel)){
            channelQueue.add(channel);
        }
        else{

        }
    }
    public String GetExName(){
        return producerChannelConfig.getExchangeName();
    }
    public void CloseAll() throws IOException {
        for(Connection con : connections){
            con.close();
        }
    }

    public void Start(){
        new Thread(new Runnable() {
            @Override
            public void run() {
                while(true){
                    try {
                        Thread.sleep(10000);
                        logger.info("Channel queue size:" + channelQueue.size());
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                }
            }
        }).start();
    }
}
