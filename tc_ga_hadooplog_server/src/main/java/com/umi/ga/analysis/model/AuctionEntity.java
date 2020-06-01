package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class AuctionEntity extends BaseEntity {
    private Integer serialNumber;

    private String itemId;

    private String itemNum;

    private String moneyType;

    private Double moneyValue;

    public Integer getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(Integer serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getItemNum() {
        return itemNum;
    }

    public void setItemNum(String itemNum) {
        this.itemNum = itemNum;
    }

    public String getMoneyType() {
        return moneyType;
    }

    public void setMoneyType(String moneyType) {
        this.moneyType = moneyType;
    }

    public Double getMoneyValue() {
        return moneyValue;
    }

    public void setMoneyValue(Double moneyValue) {
        this.moneyValue = moneyValue;
    }
}
