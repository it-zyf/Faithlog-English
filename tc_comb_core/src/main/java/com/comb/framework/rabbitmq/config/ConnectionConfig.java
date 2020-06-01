package com.comb.framework.rabbitmq.config;

import com.alibaba.fastjson.JSONObject;

public class ConnectionConfig {
    private String host = "127.0.0.1";
    private int port = 5672;
    private String userName = "";
    private String password = "";
    private String virtualHost = "/";
    private boolean automaticRecoveryEnabled = false;
    private int networkRecoveryInterval = 1000;
    private boolean topologyRecoveryEnabled = false;
    private JSONObject jsonConfig = null;

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVirtualHost() {
        return virtualHost;
    }

    public void setVirtualHost(String virtualHost) {
        this.virtualHost = virtualHost;
    }

    public boolean isAutomaticRecoveryEnabled() {
        return automaticRecoveryEnabled;
    }

    public void setAutomaticRecoveryEnabled(boolean automaticRecoveryEnabled) {
        this.automaticRecoveryEnabled = automaticRecoveryEnabled;
    }

    public int getNetworkRecoveryInterval() {
        return networkRecoveryInterval;
    }

    public void setNetworkRecoveryInterval(int networkRecoveryInterval) {
        this.networkRecoveryInterval = networkRecoveryInterval;
    }

    public boolean isTopologyRecoveryEnabled() {
        return topologyRecoveryEnabled;
    }

    public void setTopologyRecoveryEnabled(boolean topologyRecoveryEnabled) {
        this.topologyRecoveryEnabled = topologyRecoveryEnabled;
    }

    public ConnectionConfig(String conStr){
        jsonConfig = JSONObject.parseObject(conStr);
        setHost(jsonConfig.getString("host"));
        setPort(jsonConfig.getInteger("port"));
        setUserName(jsonConfig.getString("username"));
        setPassword(jsonConfig.getString("password"));
        setVirtualHost(jsonConfig.getString("virturalhost"));
        setAutomaticRecoveryEnabled(jsonConfig.getBoolean("automaticrecovery"));
        setNetworkRecoveryInterval(jsonConfig.getInteger("networkrecoveryinterval"));
        setTopologyRecoveryEnabled(jsonConfig.getBoolean("topologyrecovery"));
    }

    @Override
    public String toString(){
        return jsonConfig.toString();
    }
}
