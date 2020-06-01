package com.umi.ga.entitys;

import org.apache.hadoop.hive.metastore.api.Decimal;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * @Author guowenchuang
 * @Date 2020/4/20 17:13
 */
public class LegionLog implements Serializable {

    // 排名
    private String rank;

    // 区服
    private String ServerId;

    // 渠道号
    private String channelId;

    // 军团id
    private String legionId;

    // 军团名称
    private String legionName;

    // 军团等级
    private Integer legionLevel;

    // 军团战力
    private BigDecimal legionPower = BigDecimal.ZERO;

    //军团人数
    private Integer legionNum;


    private String startTime;

    private String endTime;

    public String getServerId() {
        return ServerId;
    }

    public void setServerId(String serverId) {
        ServerId = serverId;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    public Integer getLegionLevel() {
        return legionLevel;
    }

    public void setLegionLevel(Integer legionLevel) {
        this.legionLevel = legionLevel;
    }

    public String getLegionName() {
        return legionName;
    }

    public void setLegionName(String legionName) {
        this.legionName = legionName;
    }

    public BigDecimal getLegionPower() {
        return legionPower;
    }

    public void setLegionPower(BigDecimal legionPower) {
        this.legionPower = legionPower;
    }

    public Integer getLegionNum() {
        return legionNum;
    }

    public void setLegionNum(Integer legionNum) {
        this.legionNum = legionNum;
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

    public String getLegionId() {
        return legionId;
    }

    public void setLegionId(String legionId) {
        this.legionId = legionId;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "LegionLog{" +
                "rank='" + rank + '\'' +
                ", ServerId='" + ServerId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", legionId='" + legionId + '\'' +
                ", legionName='" + legionName + '\'' +
                ", legionLevel=" + legionLevel +
                ", legionPower=" + legionPower +
                ", legionNum=" + legionNum +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                '}';
    }
}
