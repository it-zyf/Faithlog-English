package com.umi.ga.entitys;

/**
 * @Author guowenchuang
 * @Date 2020/1/13 19:56
 */
public class HeartLog {

    private String logId;

    private String serverId;

    private String logTime;

    private String normversion;

    private String onlinePlayerCount;

    public String getLogId() {
        return logId;
    }

    public void setLogId(String logId) {
        this.logId = logId;
    }

    public String getServerId() {
        return serverId;
    }

    public void setServerId(String serverId) {
        this.serverId = serverId;
    }

    public String getLogTime() {
        return logTime;
    }

    public void setLogTime(String logTime) {
        this.logTime = logTime;
    }

    public String getNormversion() {
        return normversion;
    }

    public void setNormversion(String normversion) {
        this.normversion = normversion;
    }

    public String getOnlinePlayerCount() {
        return onlinePlayerCount;
    }

    public void setOnlinePlayerCount(String onlinePlayerCount) {
        this.onlinePlayerCount = onlinePlayerCount;
    }

    @Override
    public String toString() {
        return "HeartLog{" +
                "logId='" + logId + '\'' +
                ", serverId='" + serverId + '\'' +
                ", logTime='" + logTime + '\'' +
                ", normversion='" + normversion + '\'' +
                ", onlinePlayerCount='" + onlinePlayerCount + '\'' +
                '}';
    }
}
