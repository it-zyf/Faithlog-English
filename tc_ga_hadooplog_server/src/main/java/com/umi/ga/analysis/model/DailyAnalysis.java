package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.math.BigDecimal;

public class DailyAnalysis extends BaseEntity {

    private static final long serialVersionUID = -8696924113860468465L;
    //
    private Long id;
    //
    private String serverId;
    //
    private String channelId;
    //
    private String timedate;
    //
    private Integer dailyRegister = 0;
    //
    private Integer activeNumber = 0;

    // 老用户  活跃账号 - 首登账号
    private Integer oldUser = 0;

    //
    private BigDecimal payAmount = BigDecimal.ZERO;
    //
    private Integer payNumber = 0;
    //
    private Integer payCount = 0;
    //
    private Integer firstNumber = 0;
    //
    private BigDecimal firstAmount = BigDecimal.ZERO;
    //
    private BigDecimal sumpersonnel = BigDecimal.ZERO;
    //
    private BigDecimal firstSumAmount = BigDecimal.ZERO;
    //
    private BigDecimal rate = BigDecimal.ZERO;
    //
    private BigDecimal arpu = BigDecimal.ZERO;
    //
    private BigDecimal arppu = BigDecimal.ZERO;
    //
    private BigDecimal dayRetain = BigDecimal.ZERO;
    //
    private BigDecimal dayAccountCount = BigDecimal.ZERO;
    //
    private BigDecimal threeRetain = BigDecimal.ZERO;
    //
    private BigDecimal threeAccountCount = BigDecimal.ZERO;
    //
    private BigDecimal weekRetain = BigDecimal.ZERO;
    //
    private BigDecimal weekAccountCount = BigDecimal.ZERO;

    //
    private String type;
    // 14留
    private BigDecimal fourteenRetain = BigDecimal.ZERO;
    private BigDecimal fourteenAccountCount = BigDecimal.ZERO;
    // 30留
    private BigDecimal thirtyRetain = BigDecimal.ZERO;
    private BigDecimal thirtyAccountCount = BigDecimal.ZERO;
    // 60留
    private BigDecimal sixtyRetain = BigDecimal.ZERO;
    private BigDecimal sixtyAccountCount = BigDecimal.ZERO;

    //
    private BigDecimal maxOnlineNumber = BigDecimal.ZERO;
    //
    private Integer gameNumber = 0;
    //
    private BigDecimal aveGametime = BigDecimal.ZERO;
    //
    private BigDecimal aveGamenumber = BigDecimal.ZERO;
    //
    private Integer newPlayers = 0;
    //
    private Integer sumGametime = 0;


    private int pageIndex;
    private int pageSize;
    private int pageCount;

    public DailyAnalysis() {
    }

    public DailyAnalysis(String startTime, String endTime, String serverId, String channelId) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.serverId = serverId;
        this.channelId = channelId;
    }

    private String startTime;
    private String endTime;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getTimedate() {
        return timedate;
    }

    public void setTimedate(String timedate) {
        this.timedate = timedate;
    }

    public Integer getDailyRegister() {
        return dailyRegister;
    }

    public void setDailyRegister(Integer dailyRegister) {
        this.dailyRegister = dailyRegister;
    }

    public Integer getActiveNumber() {
        return activeNumber;
    }

    public void setActiveNumber(Integer activeNumber) {
        this.activeNumber = activeNumber;
    }

    public Integer getOldUser() {
        return oldUser;
    }

    public void setOldUser(Integer oldUser) {
        this.oldUser = oldUser;
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

    public Integer getFirstNumber() {
        return firstNumber;
    }

    public void setFirstNumber(Integer firstNumber) {
        this.firstNumber = firstNumber;
    }

    public BigDecimal getFirstAmount() {
        return firstAmount;
    }

    public void setFirstAmount(BigDecimal firstAmount) {
        this.firstAmount = firstAmount;
    }

    public BigDecimal getSumpersonnel() {
        return sumpersonnel;
    }

    public void setSumpersonnel(BigDecimal sumpersonnel) {
        this.sumpersonnel = sumpersonnel;
    }

    public BigDecimal getFirstSumAmount() {
        return firstSumAmount;
    }

    public void setFirstSumAmount(BigDecimal firstSumAmount) {
        this.firstSumAmount = firstSumAmount;
    }

    public BigDecimal getRate() {
        return rate;
    }

    public void setRate(BigDecimal rate) {
        this.rate = rate;
    }

    public BigDecimal getArpu() {
        return arpu;
    }

    public void setArpu(BigDecimal arpu) {
        this.arpu = arpu;
    }

    public BigDecimal getArppu() {
        return arppu;
    }

    public void setArppu(BigDecimal arppu) {
        this.arppu = arppu;
    }

    public BigDecimal getDayRetain() {
        return dayRetain;
    }

    public void setDayRetain(BigDecimal dayRetain) {
        this.dayRetain = dayRetain;
    }

    public BigDecimal getDayAccountCount() {
        return dayAccountCount;
    }

    public void setDayAccountCount(BigDecimal dayAccountCount) {
        this.dayAccountCount = dayAccountCount;
    }

    public BigDecimal getThreeRetain() {
        return threeRetain;
    }

    public void setThreeRetain(BigDecimal threeRetain) {
        this.threeRetain = threeRetain;
    }

    public BigDecimal getThreeAccountCount() {
        return threeAccountCount;
    }

    public void setThreeAccountCount(BigDecimal threeAccountCount) {
        this.threeAccountCount = threeAccountCount;
    }

    public BigDecimal getWeekRetain() {
        return weekRetain;
    }

    public void setWeekRetain(BigDecimal weekRetain) {
        this.weekRetain = weekRetain;
    }

    public BigDecimal getWeekAccountCount() {
        return weekAccountCount;
    }

    public BigDecimal getFourteenRetain() {
        return fourteenRetain;
    }

    public void setFourteenRetain(BigDecimal fourteenRetain) {
        this.fourteenRetain = fourteenRetain;
    }

    public BigDecimal getFourteenAccountCount() {
        return fourteenAccountCount;
    }

    public void setFourteenAccountCount(BigDecimal fourteenAccountCount) {
        this.fourteenAccountCount = fourteenAccountCount;
    }

    public BigDecimal getThirtyRetain() {
        return thirtyRetain;
    }

    public void setThirtyRetain(BigDecimal thirtyRetain) {
        this.thirtyRetain = thirtyRetain;
    }

    public BigDecimal getThirtyAccountCount() {
        return thirtyAccountCount;
    }

    public void setThirtyAccountCount(BigDecimal thirtyAccountCount) {
        this.thirtyAccountCount = thirtyAccountCount;
    }

    public BigDecimal getSixtyRetain() {
        return sixtyRetain;
    }

    public void setSixtyRetain(BigDecimal sixtyRetain) {
        this.sixtyRetain = sixtyRetain;
    }

    public BigDecimal getSixtyAccountCount() {
        return sixtyAccountCount;
    }

    public void setSixtyAccountCount(BigDecimal sixtyAccountCount) {
        this.sixtyAccountCount = sixtyAccountCount;
    }

    public void setWeekAccountCount(BigDecimal weekAccountCount) {
        this.weekAccountCount = weekAccountCount;
    }

    public BigDecimal getMaxOnlineNumber() {
        return maxOnlineNumber;
    }

    public void setMaxOnlineNumber(BigDecimal maxOnlineNumber) {
        this.maxOnlineNumber = maxOnlineNumber;
    }

    public Integer getGameNumber() {
        return gameNumber;
    }

    public void setGameNumber(Integer gameNumber) {
        this.gameNumber = gameNumber;
    }

    public BigDecimal getAveGametime() {
        return aveGametime;
    }

    public void setAveGametime(BigDecimal aveGametime) {
        this.aveGametime = aveGametime;
    }

    public BigDecimal getAveGamenumber() {
        return aveGamenumber;
    }

    public void setAveGamenumber(BigDecimal aveGamenumber) {
        this.aveGamenumber = aveGamenumber;
    }

    public Integer getNewPlayers() {
        return newPlayers;
    }

    public void setNewPlayers(Integer newPlayers) {
        this.newPlayers = newPlayers;
    }

    public Integer getSumGametime() {
        return sumGametime;
    }

    public void setSumGametime(Integer sumGametime) {
        this.sumGametime = sumGametime;
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

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
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

    public Integer getPayCount() {
        return payCount;
    }

    public void setPayCount(Integer payCount) {
        this.payCount = payCount;
    }

    @Override
    public String toString() {
        return "DailyAnalysis{" +
                "id=" + id +
                ", serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", timedate='" + timedate + '\'' +
                ", dailyRegister=" + dailyRegister +
                ", activeNumber=" + activeNumber +
                ", oldUser=" + oldUser +
                ", payAmount=" + payAmount +
                ", payNumber=" + payNumber +
                ", payCount=" + payCount +
                ", firstNumber=" + firstNumber +
                ", firstAmount=" + firstAmount +
                ", sumpersonnel=" + sumpersonnel +
                ", firstSumAmount=" + firstSumAmount +
                ", rate=" + rate +
                ", arpu=" + arpu +
                ", arppu=" + arppu +
                ", dayRetain=" + dayRetain +
                ", dayAccountCount=" + dayAccountCount +
                ", threeRetain=" + threeRetain +
                ", threeAccountCount=" + threeAccountCount +
                ", weekRetain=" + weekRetain +
                ", weekAccountCount=" + weekAccountCount +
                ", type='" + type + '\'' +
                ", fourteenRetain=" + fourteenRetain +
                ", fourteenAccountCount=" + fourteenAccountCount +
                ", thirtyRetain=" + thirtyRetain +
                ", thirtyAccountCount=" + thirtyAccountCount +
                ", sixtyRetain=" + sixtyRetain +
                ", sixtyAccountCount=" + sixtyAccountCount +
                ", maxOnlineNumber=" + maxOnlineNumber +
                ", gameNumber=" + gameNumber +
                ", aveGametime=" + aveGametime +
                ", aveGamenumber=" + aveGamenumber +
                ", newPlayers=" + newPlayers +
                ", sumGametime=" + sumGametime +
                ", pageIndex=" + pageIndex +
                ", pageSize=" + pageSize +
                ", pageCount=" + pageCount +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                '}';
    }
}
