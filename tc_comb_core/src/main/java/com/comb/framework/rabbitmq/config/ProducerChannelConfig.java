package com.comb.framework.rabbitmq.config;

import com.alibaba.fastjson.JSONObject;
import com.comb.framework.PropertyConfigurer.ZooPropertyConfigurer;
import com.comb.framework.util.Helper;

import java.util.List;
import java.util.Map;

public class ProducerChannelConfig {
    private String exchangeName = "";
    private String queueName = null;
    private List<String> routingKey = null;
    private String echangeDeclare = "topic";
    private boolean declareDurable = true;
    private boolean declareexclusive = false;
    private boolean declareAutoDelete = false;
    private Map<String, Object> declareArguments = null;
    private JSONObject jsonConfig = null;

    public String getExchangeName() {
        return exchangeName;
    }

    public void setExchangeName(String exchangeName) {
        this.exchangeName = exchangeName;
    }

    public String getEchangeDeclare() {
        return echangeDeclare;
    }

    public void setEchangeDeclare(String echangeDeclare) {
        this.echangeDeclare = echangeDeclare;
    }

    public boolean isDeclareDurable() {
        return declareDurable;
    }

    public void setDeclareDurable(boolean declareDurable) {
        this.declareDurable = declareDurable;
    }

    public boolean isDeclareexclusive() {
        return declareexclusive;
    }

    public void setDeclareexclusive(boolean declareexclusive) {
        this.declareexclusive = declareexclusive;
    }

    public boolean isDeclareAutoDelete() {
        return declareAutoDelete;
    }

    public void setDeclareAutoDelete(boolean declareAutoDelete) {
        this.declareAutoDelete = declareAutoDelete;
    }

    public Map<String, Object> getDeclareArguments() {
        return declareArguments;
    }

    public void setDeclareArguments(Map<String, Object> declareArguments) {
        this.declareArguments = declareArguments;
    }

    public String getQueueName() {
        return queueName;
    }

    public void setQueueName(String queueName) {
        this.queueName = queueName;
    }

    public List<String> getRoutingKey() {
        return routingKey;
    }

    public void setRoutingKey(List<String> routingKey) {
        this.routingKey = routingKey;
    }

    public ProducerChannelConfig(String confStr){
        jsonConfig = JSONObject.parseObject(confStr);
        setExchangeName(jsonConfig.getString("exchangename"));
        String queueName = jsonConfig.getString("queuename");
        setQueueName(queueName);
        String routingKey = jsonConfig.getString("routingkey");
        String routingKeyStr = ZooPropertyConfigurer.getProperty(routingKey);
        if(routingKeyStr == null || routingKeyStr.isEmpty()){
            routingKeyStr = routingKey;
        }
        List<String> routingKeyList = Helper.ParseList(routingKeyStr, ",");
        setRoutingKey(routingKeyList);
        if(jsonConfig.containsKey("exchangedeclare")){
            setEchangeDeclare(jsonConfig.getString("exchangedeclare"));
        }
        if(jsonConfig.containsKey("declaredurable")){
            setDeclareDurable(jsonConfig.getBoolean("declaredurable"));
        }
    }
    @Override
    public String toString(){
        return jsonConfig.toString();
    }

}
