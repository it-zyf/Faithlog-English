package com.umi.ga.entitys;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * @Author guowenchuang
 * @Date 2020/1/6 16:14
 */
public class Flag implements Serializable {

    private String id;

    private String flag;

    private String name;

    private String type;

    private Integer number;

    private String time;

    private String serverId;

    private String channelId;

    private BigDecimal payAmount;

    private Integer payNumber;

    private Integer payCount;

    private String startTime;

    private String endTime;

    private String startTimeSecond; // 第二个开始时间

    private String endTimeSecond; // 第二个结束时间

    //
    private Integer max = 0;
    //
    private Double avg = 0D;

    private Integer pageIndex = 0;

    private Integer pageSize = 30;

    private Integer fromIndex;

    private Integer toIndex;

    public Flag(String startTime, String endTime, String serverId, String channelId) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.serverId = serverId;
        this.channelId = channelId;
    }

    public Flag() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
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

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
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

    public BigDecimal getPayAmount() {
        return payAmount;
    }

    public void setPayAmount(BigDecimal payAmount) {
        this.payAmount = payAmount;
    }

    public Integer getPayNumber() {
        return payNumber;
    }

    public void setPayNumber(Integer payNumber) {
        this.payNumber = payNumber;
    }

    public Integer getPayCount() {
        return payCount;
    }

    public void setPayCount(Integer payCount) {
        this.payCount = payCount;
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

    public Integer getMax() {
        return max;
    }

    public void setMax(Integer max) {
        this.max = max;
    }

    public Double getAvg() {
        return avg;
    }

    public void setAvg(Double avg) {
        this.avg = avg;
    }

    public Integer getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(Integer pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

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

    @Override
    public String toString() {
        return "Flag{" +
                "id='" + id + '\'' +
                ", flag='" + flag + '\'' +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", number=" + number +
                ", time='" + time + '\'' +
                ", serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", payAmount=" + payAmount +
                ", payNumber=" + payNumber +
                ", payCount=" + payCount +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", startTimeSecond='" + startTimeSecond + '\'' +
                ", endTimeSecond='" + endTimeSecond + '\'' +
                ", max=" + max +
                ", avg=" + avg +
                ", pageIndex=" + pageIndex +
                ", pageSize=" + pageSize +
                ", fromIndex=" + fromIndex +
                ", toIndex=" + toIndex +
                '}';
    }
}
