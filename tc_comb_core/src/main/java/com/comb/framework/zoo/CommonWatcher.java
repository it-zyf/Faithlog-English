package com.comb.framework.zoo;

public class CommonWatcher extends BaseWatcher {
    public static String RECONNECT_REDIS = "ReconnectRedis";
    public static String APPEND_ROUTING_KEY = "AppendProducerRoutingKey";
    public static String APPEND_CONSUMER = "AppendConsumer";
    public static String RELOAD_CONFIG = "ReloadConfig";
    public  void Init(){
//        CommandRegist(RECONNECT_REDIS, new CommandRedisReconnect());
//        CommandRegist(APPEND_ROUTING_KEY, new AppendProducerRoutingKey());
//        CommandRegist(APPEND_CONSUMER, new AppendConsumer());
        CommandRegist(RELOAD_CONFIG, new ReloadConfig());
    }
}
