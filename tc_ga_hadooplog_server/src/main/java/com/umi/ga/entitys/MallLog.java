package com.umi.ga.entitys;

import java.io.Serializable;

/**
 * @Author guowenchuang
 * @Date 2020/4/20 16:11
 */
public class MallLog implements Serializable {

    private String rank;

    private String serverId;

    private String channelId;

    private String goodsId;

    private String itemId;

    private Long totalNum;

    private String costMoneyType;

    private Long constMoneyNum;

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

    public String getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(String goodsId) {
        this.goodsId = goodsId;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public Long getTotalNum() {
        return totalNum;
    }

    public void setTotalNum(Long totalNum) {
        this.totalNum = totalNum;
    }

    public String getCostMoneyType() {
        return costMoneyType;
    }

    public void setCostMoneyType(String costMoneyType) {
        this.costMoneyType = costMoneyType;
    }

    public Long getConstMoneyNum() {
        return constMoneyNum;
    }

    public void setConstMoneyNum(Long constMoneyNum) {
        this.constMoneyNum = constMoneyNum;
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
        return "MallLog{" +
                "rank='" + rank + '\'' +
                ", serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", goodsId='" + goodsId + '\'' +
                ", itemId='" + itemId + '\'' +
                ", totalNum=" + totalNum +
                ", costMoneyType='" + costMoneyType + '\'' +
                ", constMoneyNum=" + constMoneyNum +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                '}';
    }
}
