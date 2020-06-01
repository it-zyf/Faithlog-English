package com.umi.ga.entitys;

import java.io.Serializable;

/**
 * @Author guowenchuang
 * @Date 2020/4/23 20:12
 */
public class VipRetain implements Serializable {

    private String rank;

    private String serverId;

    private String channelId;

    private String vipLevel;

    private Integer num;

    private Integer two;

    private Integer three;

    private Integer seven;

    private Integer fourteen;

    private Integer thirty;

    private Integer sixty;

    private String timeDate;

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
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

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Integer getTwo() {
        return two;
    }

    public void setTwo(Integer two) {
        this.two = two;
    }

    public Integer getThree() {
        return three;
    }

    public void setThree(Integer three) {
        this.three = three;
    }

    public Integer getSeven() {
        return seven;
    }

    public void setSeven(Integer seven) {
        this.seven = seven;
    }

    public Integer getFourteen() {
        return fourteen;
    }

    public void setFourteen(Integer fourteen) {
        this.fourteen = fourteen;
    }

    public Integer getThirty() {
        return thirty;
    }

    public void setThirty(Integer thirty) {
        this.thirty = thirty;
    }

    public Integer getSixty() {
        return sixty;
    }

    public void setSixty(Integer sixty) {
        this.sixty = sixty;
    }

    public String getTimeDate() {
        return timeDate;
    }

    public void setTimeDate(String timeDate) {
        this.timeDate = timeDate;
    }

    public String getVipLevel() {
        return vipLevel;
    }

    public void setVipLevel(String vipLevel) {
        this.vipLevel = vipLevel;
    }

    @Override
    public String toString() {
        return "VipRetain{" +
                "rank='" + rank + '\'' +
                ", serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", vipLevel='" + vipLevel + '\'' +
                ", num=" + num +
                ", two=" + two +
                ", three=" + three +
                ", seven=" + seven +
                ", fourteen=" + fourteen +
                ", thirty=" + thirty +
                ", sixty=" + sixty +
                ", timeDate='" + timeDate + '\'' +
                '}';
    }
}
