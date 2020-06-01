package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class OccupationEntity extends BaseEntity {
    private Integer serialNumber;
    private String roleType;
    private Integer num;
    private Long maxPower;
    private Long avgPower;

    public Integer getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(Integer serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Long getMaxPower() {
        return maxPower;
    }

    public void setMaxPower(Long maxPower) {
        this.maxPower = maxPower;
    }

    public Long getAvgPower() {
        return avgPower;
    }

    public void setAvgPower(Long avgPower) {
        this.avgPower = avgPower;
    }
}
