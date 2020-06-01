package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.math.BigDecimal;

public class AllTrend extends BaseEntity {

    private static final long serialVersionUID = 1848953211600488311L;
    //
    private Long id;
    //
    private String timedate;
    //
    private String serverId;
    //
    private String channelId;
    //
    private Integer dailyRegister;
    //
    private Integer firstNumber;
    //
    private Integer activeNumber;
    //
    private Integer payNumber;
    //
    private BigDecimal payAmount;
    //
    private BigDecimal arpu;
    //
    private BigDecimal rate;

    @Override
    public Long getId() {
        return this.id;
    }

    public void setId(Long value) {
        this.id = value;
    }

    public String getTimedate() {
        return this.timedate;
    }

    public void setTimedate(String value) {
        this.timedate = value;
    }

    public String getServerId() {
        return this.serverId;
    }

    public void setServerId(String value) {
        this.serverId = value;
    }

    public String getChannelId() {
        return this.channelId;
    }

    public void setChannelId(String value) {
        this.channelId = value;
    }

    public Integer getDailyRegister() {
        return this.dailyRegister;
    }

    public void setDailyRegister(Integer value) {
        this.dailyRegister = value;
    }

    public Integer getFirstNumber() {
        return this.firstNumber;
    }

    public void setFirstNumber(Integer value) {
        this.firstNumber = value;
    }

    public Integer getActiveNumber() {
        return this.activeNumber;
    }

    public void setActiveNumber(Integer value) {
        this.activeNumber = value;
    }

    public Integer getPayNumber() {
        return this.payNumber;
    }

    public void setPayNumber(Integer value) {
        this.payNumber = value;
    }

    public BigDecimal getPayAmount() {
        return this.payAmount;
    }

    public void setPayAmount(BigDecimal value) {
        this.payAmount = value;
    }

    public BigDecimal getArpu() {
        return this.arpu;
    }

    public void setArpu(BigDecimal value) {
        this.arpu = value;
    }

    public BigDecimal getRate() {
        return this.rate;
    }

    public void setRate(BigDecimal value) {
        this.rate = value;
    }


}
