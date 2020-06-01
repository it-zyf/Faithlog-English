package com.umi.ga.entitys;

import java.math.BigDecimal;

/**
 * @Author guowenchuang
 * @Date 2020/1/6 17:44
 */
public class PropertyCount {

    // 时间
    private String timeDate;

    // 注册
    private Integer numOfregister = 0;

    // 首登
    private Integer numOfNewPlayer = 0;

    // 活跃
    private Integer numOfactive = 0;

    // 老帐号
    private Integer numOfOldUser = 0;

    // 付费人数
    private Integer numOfpay = 0;

    // 付费总额
    private BigDecimal payAmount = BigDecimal.ZERO;

    public String getTimeDate() {
        return timeDate;
    }

    public void setTimeDate(String timeDate) {
        this.timeDate = timeDate;
    }

    public Integer getNumOfOldUser() {
        return numOfOldUser;
    }

    public void setNumOfOldUser(Integer numOfOldUser) {
        this.numOfOldUser = numOfOldUser;
    }

    public Integer getNumOfregister() {
        return numOfregister;
    }

    public void setNumOfregister(Integer numOfregister) {
        this.numOfregister = numOfregister;
    }

    public Integer getNumOfNewPlayer() {
        return numOfNewPlayer;
    }

    public void setNumOfNewPlayer(Integer numOfNewPlayer) {
        this.numOfNewPlayer = numOfNewPlayer;
    }

    public Integer getNumOfactive() {
        return numOfactive;
    }

    public void setNumOfactive(Integer numOfactive) {
        this.numOfactive = numOfactive;
    }

    public Integer getNumOfpay() {
        return numOfpay;
    }

    public void setNumOfpay(Integer numOfpay) {
        this.numOfpay = numOfpay;
    }

    public BigDecimal getPayAmount() {
        return payAmount;
    }

    public void setPayAmount(BigDecimal payAmount) {
        this.payAmount = payAmount;
    }

    @Override
    public String toString() {
        return "PropertyCount{" +
                "numOfregister=" + numOfregister +
                ", numOfNewPlayer=" + numOfNewPlayer +
                ", numOfactive=" + numOfactive +
                ", numOfOldUser=" + numOfOldUser +
                ", numOfpay=" + numOfpay +
                ", payAmount=" + payAmount +
                '}';
    }
}
