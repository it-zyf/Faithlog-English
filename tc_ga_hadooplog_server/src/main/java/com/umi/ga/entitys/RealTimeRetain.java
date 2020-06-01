package com.umi.ga.entitys;

import java.io.Serializable;

/**
 * @Author guowenchuang
 * @Date 2020/1/16 20:45
 */
public class RealTimeRetain implements Serializable {

    private String id;

    private String timeDate;     // 日期

    private String timePoint;    // 时间点

    private Integer dayAccount = 0;  // 昨日首登

    private Integer dayRetain = 0;  // 今日留存

    private String serverId;

    private String channelId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTimeDate() {
        return timeDate;
    }

    public void setTimeDate(String timeDate) {
        this.timeDate = timeDate;
    }

    public String getTimePoint() {
        return timePoint;
    }

    public void setTimePoint(String timePoint) {
        this.timePoint = timePoint;
    }

    public Integer getDayAccount() {
        return dayAccount;
    }

    public void setDayAccount(Integer dayAccount) {
        this.dayAccount = dayAccount;
    }

    public Integer getDayRetain() {
        return dayRetain;
    }

    public void setDayRetain(Integer dayRetain) {
        this.dayRetain = dayRetain;
    }

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

    @Override
    public String toString() {
        return "RealTimeRetain{" +
                "id='" + id + '\'' +
                ", timeDate='" + timeDate + '\'' +
                ", timePoint='" + timePoint + '\'' +
                ", dayAccount=" + dayAccount +
                ", dayRetain=" + dayRetain +
                ", serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                '}';
    }
}
