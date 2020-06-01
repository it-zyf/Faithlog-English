package com.umi.ga.entitys;

import java.io.Serializable;

public class RankingEntity implements Serializable {
    private String[] stringsArray;

    private  String[] channelArray;

    private String serverId;  // 区服

    private String channelId; // 渠道号

    private String startTime; // 开始时间

    private String endTime; // 结束时间

    private int pageIndex;  //当前页

    private int pageSize;   //每页显示个数

    private String seDate;

    private String rankingType;
    private Integer fromIndex;

    private Integer toIndex;

    public Integer getFromIndex() {
        return fromIndex;
    }

    public void setFromIndex(Integer fromIndex) {
        this.fromIndex = fromIndex;
    }

    public Integer getToIndex() {
        return toIndex;
    }

    public void setToIndex(Integer toIndex) {
        this.toIndex = toIndex;
    }

    public String[] getStringsArray() {
        return stringsArray;
    }

    public void setStringsArray(String[] stringsArray) {
        this.stringsArray = stringsArray;
    }

    public String[] getChannelArray() {
        return channelArray;
    }

    public void setChannelArray(String[] channelArray) {
        this.channelArray = channelArray;
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

    public int getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(int pageIndex) {
        this.pageIndex = pageIndex;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public String getSeDate() {
        return seDate;
    }

    public void setSeDate(String seDate) {
        this.seDate = seDate;
    }

    public String getRankingType() {
        return rankingType;
    }

    public void setRankingType(String rankingType) {
        this.rankingType = rankingType;
    }
}
