package com.umi.ga.entitys;

import java.io.Serializable;

public class Times implements Serializable {

    private String serverId;  // 区服

    private String channelId; // 渠道号

    private String startTime; // 开始时间

    private String endTime; // 结束时间

    private String startTimeSecond; // 第二个开始时间

    private String endTimeSecond; // 第二个结束时间

    private String type; // 类型

    private String times; // 时间

    private int number; // 数量

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

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    private String condition; // 参数

    public Times() {
    }

    public Times(String startTime, String endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Times(String startTime, String endTime, String times) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.times = times;
    }

    public Times(String startTime, String endTime, String startTimeSecond, String endTimeSecond) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.startTimeSecond = startTimeSecond;
        this.endTimeSecond = endTimeSecond;
    }

    public String getTimes() {
        return times;
    }

    public void setTimes(String times) {
        this.times = times;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getStartTimeSecond() {
        return startTimeSecond;
    }

    public void setStartTimeSecond(String startTimeSecond) {
        this.startTimeSecond = startTimeSecond;
    }

    public String getEndTimeSecond() {
        return endTimeSecond;
    }

    public void setEndTimeSecond(String endTimeSecond) {
        this.endTimeSecond = endTimeSecond;
    }

    @Override
    public String toString() {
        return "Times{" +
                "serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", startTimeSecond='" + startTimeSecond + '\'' +
                ", endTimeSecond='" + endTimeSecond + '\'' +
                ", type='" + type + '\'' +
                ", times='" + times + '\'' +
                ", number=" + number +
                ", condition='" + condition + '\'' +
                '}';
    }

}
