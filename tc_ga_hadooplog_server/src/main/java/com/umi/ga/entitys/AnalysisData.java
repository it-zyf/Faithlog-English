package com.umi.ga.entitys;

/**
 * @Author guowenchuang
 * @Date 2020/5/2 10:51
 */
public class AnalysisData {

    private String serverId;

    private String channelId;

    private String timeDate;

    private String days;

    private Integer num;

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

    public String getTimeDate() {
        return timeDate;
    }

    public void setTimeDate(String timeDate) {
        this.timeDate = timeDate;
    }

    public String getDays() {
        return days;
    }

    public void setDays(String days) {
        this.days = days;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    @Override
    public String toString() {
        return "RetainData{" +
                "serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", timeDate='" + timeDate + '\'' +
                ", days='" + days + '\'' +
                ", num=" + num +
                '}';
    }
}
