package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.math.BigDecimal;

public class PayAnalysis extends BaseEntity {

    private static final long serialVersionUID = -8714494845501713909L;
    //
    private Long id;
    //
    private String timedate;
    //
    private String serverId;
    //
    private String channelId;
    //
    private Integer payNumber = 0;
    //
    private BigDecimal payAmount = BigDecimal.ZERO;
    //
    private Integer firstPayNumber = 0;
    //
    private BigDecimal firstPayAmount = BigDecimal.ZERO;
    //充值次数
    private Integer paycount = 0;
    //
    private Integer activeNumber = 0;
    //
    private BigDecimal arpu = BigDecimal.ZERO;
    //
    private BigDecimal arppu = BigDecimal.ZERO;
    //付费率
    private BigDecimal rate = BigDecimal.ZERO;

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

    public Integer getFirstPayNumber() {
        return this.firstPayNumber;
    }

    public void setFirstPayNumber(Integer value) {
        this.firstPayNumber = value;
    }

    public BigDecimal getFirstPayAmount() {
        return this.firstPayAmount;
    }

    public void setFirstPayAmount(BigDecimal value) {
        this.firstPayAmount = value;
    }

    public Integer getPaycount() {
        return this.paycount;
    }

    public void setPaycount(Integer value) {
        this.paycount = value;
    }

    public Integer getActiveNumber() {
        return this.activeNumber;
    }

    public void setActiveNumber(Integer value) {
        this.activeNumber = value;
    }

    public BigDecimal getArpu() {
        return this.arpu;
    }

    public void setArpu(BigDecimal value) {
        this.arpu = value;
    }

    public BigDecimal getArppu() {
        return this.arppu;
    }

    public void setArppu(BigDecimal value) {
        this.arppu = value;
    }

    public BigDecimal getRate() {
        return this.rate;
    }

    public void setRate(BigDecimal value) {
        this.rate = value;
    }


}
