package com.comb.framework.rabbitmq.config;

import com.alibaba.fastjson.JSONObject;

import java.util.Map;

public class ConsumerChannelConfig {
    private String queueName = "";
    private String code = "";
    private int basicQos = 200;
    private boolean declareDurable = true;
    private boolean declareexclusive = false;
    private boolean declareAutoDelete = false;
    private Map<String, Object> declareArguments = null;
    private boolean consumerAutoAck = false;
    private boolean ackMultiple = false;
    private JSONObject jsonConfig = null;

    public String getQueueName() {
        return queueName;
    }

    public void setQueueName(String queueName) {
        this.queueName = queueName;
    }

    public int getBasicQos() {
        return basicQos;
    }

    public void setBasicQos(int basicQos) {
        this.basicQos = basicQos;
    }

    public boolean isDeclareDurable() {
        return declareDurable;
    }

    public void setDeclareDurable(boolean declareDurable) {
        this.declareDurable = declareDurable;
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

    public boolean isDeclareexclusive() {
        return declareexclusive;
    }

    public void setDeclareexclusive(boolean declareexclusive) {
        this.declareexclusive = declareexclusive;
    }

    public boolean isConsumerAutoAck() {
        return consumerAutoAck;
    }

    public void setConsumerAutoAck(boolean consumerAutoAck) {
        this.consumerAutoAck = consumerAutoAck;
    }

    public boolean isAckMultiple() {
        return ackMultiple;
    }

    public void setAckMultiple(boolean ackMultiple) {
        this.ackMultiple = ackMultiple;
    }

//    public ConsumerChannelConfig(JSONObject jsonObj){
//        //JSONObject jsonObj = JSONObject.parseObject(confStr);
//        jsonConfig = jsonObj;
//        setQueueName(jsonObj.getString("queuename"));
//        setCode(jsonObj.getString("code"));
//        setBasicQos(jsonObj.getInteger("basicqos"));
//        setDeclareDurable(jsonObj.getBoolean("declaredurable"));
//        setConsumerAutoAck(jsonObj.getBoolean("consumerautoack"));
//    }
    public ConsumerChannelConfig(String queueName, String code, int basicQos, boolean declaredurable, boolean consumerautoack){
        JSONObject jsonObj = new JSONObject();
        jsonObj.put("queuename", queueName);
        jsonObj.put("code", code);
        jsonObj.put("basicqos", basicQos);
        jsonObj.put("declaredurable", declaredurable);
        jsonObj.put("consumerautoack", consumerautoack);
        jsonConfig= jsonObj;
        setQueueName(queueName);
        setCode(code);
        setBasicQos(basicQos);
        setDeclareDurable(declaredurable);
        setConsumerAutoAck(consumerautoack);
    }
    public ConsumerChannelConfig(String queueName, String code){
        JSONObject jsonObj = new JSONObject();
        jsonObj.put("queuename", queueName);
        jsonObj.put("code", code);
        jsonObj.put("basicqos", basicQos);
        jsonObj.put("declaredurable", declareDurable);
        jsonObj.put("consumerautoack", consumerAutoAck);
        jsonConfig= jsonObj;
        setQueueName(queueName);
        setCode(code);
        setBasicQos(basicQos);
    }
    @Override
    public String toString(){
        return jsonConfig.toString();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
