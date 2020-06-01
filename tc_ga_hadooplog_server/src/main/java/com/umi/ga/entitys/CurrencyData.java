package com.umi.ga.entitys;

import java.io.Serializable;

/**
 * @Author guowenchuang
 * @Date 2020/4/21 17:42
 */
public class CurrencyData implements Serializable {

    // 排名
    private String rank;

    // 区服
    private String serverId;

    // 渠道号
    private String channelId;

    // 0=消耗，1=产出
    private String Flag;

    // 货币类型
    private String type;

    // 方式
    private String name;

    // 数量
    private Long number;

    private String startTime;

    private String endTime;

    public String getServerId() {
        return serverId;
    }

    public void setServerId(String serverId) {
        this.serverId = serverId;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    public String getFlag() {
        return Flag;
    }

    public void setFlag(String flag) {
        Flag = flag;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "CurrencyData{" +
                "rank='" + rank + '\'' +
                ", serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", Flag='" + Flag + '\'' +
                ", type='" + type + '\'' +
                ", name='" + name + '\'' +
                ", number=" + number +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                '}';
    }
}
