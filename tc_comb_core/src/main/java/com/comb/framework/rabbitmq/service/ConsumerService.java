package com.comb.framework.rabbitmq.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Consumer;
import com.comb.framework.PropertyConfigurer.ZooPropertyConfigurer;
import com.comb.framework.rabbitmq.config.ConnectionConfig;
import com.comb.framework.rabbitmq.config.ConsumerChannelConfig;
import com.comb.framework.rabbitmq.connection.RmqConsumerConnection;
import com.comb.framework.rabbitmq.consumer.ConsumerCreater;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeoutException;

@Component
public class ConsumerService {
    public String ConsumerConName = "cmqconnection";
    public String ConsumerChlName = "cmqchannels";
//    public RmqConsumerConnection connection = null;
    public List<ConsumerChannelConfig> ccConfigList = new ArrayList<>();
    public ConnectionConfig conConf = null;
    public void Init() throws IOException, TimeoutException, ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        String cmConnectStrKey = ZooPropertyConfigurer.getProperty(ConsumerConName);
        String cmConnectStr = ZooPropertyConfigurer.getProperty(cmConnectStrKey);
        String cmChannelStr = ZooPropertyConfigurer.getProperty(ConsumerChlName);
        conConf = new ConnectionConfig(cmConnectStr);
        List<ConsumerChannelConfig> channelConfigList = new ArrayList<>();
        JSONArray arr = JSON.parseArray(cmChannelStr);
        for(Object obj : arr){
            String key = (String) obj;
            String value = ZooPropertyConfigurer.getProperty(key);
            JSONObject jsonObject = JSON.parseObject(value);
            List<ConsumerChannelConfig> chConfList = GetChannelConfigList(jsonObject);
            for(ConsumerChannelConfig config : chConfList){
                ccConfigList.add(config);
                RmqConsumerConnection connection = new RmqConsumerConnection();
                connection.Init(conConf, config);
                Channel channel = connection.GetChannel();
                Consumer consumer = ConsumerCreater.GetNewConsumer(jsonObject.getString("classname"), channel, config.getCode());
                channel.basicConsume(config.getQueueName(),config.isConsumerAutoAck(),config.getQueueName(),consumer);
            }
        }
    }

    public boolean AppendConsumer(String key, ConsumerChannelConfig config) throws IOException, TimeoutException, ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        String value = ZooPropertyConfigurer.getProperty(key);
        JSONObject jsonObject = JSON.parseObject(value);
        ccConfigList.add(config);
        RmqConsumerConnection connection = new RmqConsumerConnection();
        connection.Init(conConf, config);
        Channel channel = connection.GetChannel();
        Consumer consumer = ConsumerCreater.GetNewConsumer(jsonObject.getString("classname"), channel, config.getCode());
        channel.basicConsume(config.getQueueName(),config.isConsumerAutoAck(),config.getQueueName(),consumer);
        return true;
    }

    private List<ConsumerChannelConfig> GetChannelConfigList(JSONObject jsonObject) {
        List<ConsumerChannelConfig> list = new ArrayList<>();
        String queueName = jsonObject.getString("queuename");
        String codeArgsKey = jsonObject.getString("code");
        String codeArgs = ZooPropertyConfigurer.getProperty(codeArgsKey);
        if(codeArgs == null || codeArgs.isEmpty()){
            codeArgs = codeArgsKey;
        }
        int basicQos = jsonObject.getInteger("basicqos");
        boolean declaredurable = true;
        if(jsonObject.containsKey("declaredurable")){
            declaredurable = jsonObject.getBoolean("declaredurable");
        }
        boolean consumerautoack = false;
        if(jsonObject.containsKey("consumerautoack")){
            consumerautoack = jsonObject.getBoolean("consumerautoack");
        }
        String[] codes = codeArgs.split(",");
        for(int i = 0; i < codes.length; i++){
            String realQueueName = queueName + codes[i];
            ConsumerChannelConfig chConf = new ConsumerChannelConfig(realQueueName, codes[i], basicQos, declaredurable,consumerautoack);
            list.add(chConf);
        }
        return list;
    }

    public List<ConsumerChannelConfig> GetConsumerConfigList(){
        return ccConfigList;
    }

    public void ReloadConfig() throws IOException, TimeoutException, ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        ZooPropertyConfigurer.ReloadConfig();
        String cmChannelStr = ZooPropertyConfigurer.getProperty(ConsumerChlName);
        if(cmChannelStr == null)
            return;
        JSONArray arr = JSON.parseArray(cmChannelStr);
        for(Object obj : arr){
            String key = (String) obj;
            String value = ZooPropertyConfigurer.getProperty(key);
            JSONObject jsonObject = JSON.parseObject(value);
            List<ConsumerChannelConfig> chConfList = GetChannelConfigList(jsonObject);
            for(ConsumerChannelConfig config : chConfList){
                if(!IsContainedChannel(config)){
                    ccConfigList.add(config);
                    RmqConsumerConnection connection = new RmqConsumerConnection();
                    connection.Init(conConf, config);
                    Channel channel = connection.GetChannel();
                    Consumer consumer = ConsumerCreater.GetNewConsumer(jsonObject.getString("classname"), channel, config.getCode());
                    channel.basicConsume(config.getQueueName(),config.isConsumerAutoAck(),config.getQueueName(),consumer);
                }
            }
        }
    }

    private boolean IsContainedChannel(ConsumerChannelConfig consumerChannelConfig) {
        for(ConsumerChannelConfig config : ccConfigList){
            String realQueueName = config.getQueueName() + config.getCode();
            String newQueueName = consumerChannelConfig.getQueueName() + config.getCode();
            if(realQueueName.equals(newQueueName)){
                return true;
            }
        }
        return false;
    }
}
