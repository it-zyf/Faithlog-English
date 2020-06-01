package com.umi.ga.entitys;

import java.math.BigDecimal;

/**
 * @Author guowenchuang
 * @Date 2020/1/19 16:33
 */
public class RealTimeTotal {

    private Integer totalRegister = 0;

    private Integer totalActive = 0;

    private Integer totalFirstLogin = 0;

    private Integer totalPay = 0;

    private BigDecimal totalPayAmount = BigDecimal.ZERO;

    private Integer dayRetain = 0;

    private Integer totaldayAccount = 0;

    public Integer getTotalRegister() {
        return totalRegister;
    }

    public void setTotalRegister(Integer totalRegister) {
        this.totalRegister = totalRegister;
    }

    public Integer getTotalActive() {
        return totalActive;
    }

    public void setTotalActive(Integer totalActive) {
        this.totalActive = totalActive;
    }

    public Integer getTotalFirstLogin() {
        return totalFirstLogin;
    }

    public void setTotalFirstLogin(Integer totalFirstLogin) {
        this.totalFirstLogin = totalFirstLogin;
    }

    public Integer getTotalPay() {
        return totalPay;
    }

    public void setTotalPay(Integer totalPay) {
        this.totalPay = totalPay;
    }

    public BigDecimal getTotalPayAmount() {
        return totalPayAmount;
    }

    public void setTotalPayAmount(BigDecimal totalPayAmount) {
        this.totalPayAmount = totalPayAmount;
    }

    public Integer getDayRetain() {
        return dayRetain;
    }

    public void setDayRetain(Integer dayRetain) {
        this.dayRetain = dayRetain;
    }

    public Integer getTotaldayAccount() {
        return totaldayAccount;
    }

    public void setTotaldayAccount(Integer totaldayAccount) {
        this.totaldayAccount = totaldayAccount;
    }

    @Override
    public String toString() {
        return "RealTimeSum{" +
                "totalRegister=" + totalRegister +
                ", totalActive=" + totalActive +
                ", totalFirstLogin=" + totalFirstLogin +
                ", totalPay=" + totalPay +
                ", totalPayAmount=" + totalPayAmount +
                ", dayRetain=" + dayRetain +
                ", totaldayAccount=" + totaldayAccount +
                '}';
    }
}
