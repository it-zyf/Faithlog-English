package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.math.BigDecimal;

public class RealTimeStatistics extends BaseEntity {

    private static final long serialVersionUID = 3398064491638185732L;
    //
    private Long id;
    //
    private String timedate;
    //
    private String serverId;
    //
    private String channelId;
    //
    private String flag;
    //
    private String timepoint;
    //
    private Integer online = 0;
    //
    private Integer register = 0;
    //
    private Integer active = 0;
    //
    private Integer firstlogin = 0;
    //
    private Integer numofpay = 0;
    //
    private BigDecimal payamount = BigDecimal.ZERO;

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

    public String getFlag() {
        return this.flag;
    }

    public void setFlag(String value) {
        this.flag = value;
    }

    public String getTimepoint() {
        return this.timepoint;
    }

    public void setTimepoint(String value) {
        this.timepoint = value;
    }

    public Integer getOnline() {
        return this.online;
    }

    public void setOnline(Integer value) {
        this.online = value;
    }

    public Integer getRegister() {
        return this.register;
    }

    public void setRegister(Integer value) {
        this.register = value;
    }

    public Integer getActive() {
        return this.active;
    }

    public void setActive(Integer value) {
        this.active = value;
    }

    public Integer getFirstlogin() {
        return this.firstlogin;
    }

    public void setFirstlogin(Integer value) {
        this.firstlogin = value;
    }

    public Integer getNumofpay() {
        return this.numofpay;
    }

    public void setNumofpay(Integer value) {
        this.numofpay = value;
    }

    public BigDecimal getPayamount() {
        return this.payamount;
    }

    public void setPayamount(BigDecimal value) {
        this.payamount = value;
    }

    @Override
    public String toString() {
        return "RealTimeStatistics{" +
                "id=" + id +
                ", timedate='" + timedate + '\'' +
                ", serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", flag='" + flag + '\'' +
                ", timepoint='" + timepoint + '\'' +
                ", online=" + online +
                ", register=" + register +
                ", active=" + active +
                ", firstlogin=" + firstlogin +
                ", numofpay=" + numofpay +
                ", payamount=" + payamount +
                '}';
    }
}
