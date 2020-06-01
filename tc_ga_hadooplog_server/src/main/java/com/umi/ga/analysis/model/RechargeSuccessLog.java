package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.umi.ga.utils.DateForm;

public class RechargeSuccessLog extends BaseEntity {

    private String logTime;
	
    private String serverId;


    private String deviceId;

    private String roleId;

    private String roleName;

    private Integer roleLevel;

    private Integer roleVip;

    private String gameOrderId;

    private String gameChannelOrderId;

    private Double orderAmount;

    private Double shareAmount;

    private Double noShareAmount;

    private Integer payId;

    private String rechargeChannel;

    private Long addJewel;

    private Long totalJewel;

    private Integer currencyType;

    private Integer itemId;

    private Integer isFirstRecharge;

    private String deviceModel;

    private String androidId;

    private Integer loginType;

    private Integer vipLevel;

    private Integer roleGender;

    private Long rolePower;

    private String roleType;

    private String logName;

    private String accountId;

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getLogTime() {
        return logTime;
    }

    public void setLogTime(String logTime) {
        this.logTime = logTime;
    }

    public Integer getVipLevel() {
        return vipLevel;
    }

    public void setVipLevel(Integer vipLevel) {
        this.vipLevel = vipLevel;
    }

    public Integer getRoleGender() {
        return roleGender;
    }

    public void setRoleGender(Integer roleGender) {
        this.roleGender = roleGender;
    }



    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

    public String getLogName() {
        return logName;
    }

    public void setLogName(String logName) {
        this.logName = logName;
    }

    public String getServerId() {
        return serverId;
    }

    public void setServerId(String serverId) {
        this.serverId = serverId;
    }


    public Long getRolePower() {
        return rolePower;
    }

    public void setRolePower(Long rolePower) {
        this.rolePower = rolePower;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Integer getRoleLevel() {
        return roleLevel;
    }

    public void setRoleLevel(Integer roleLevel) {
        this.roleLevel = roleLevel;
    }



    public Integer getRoleVip() {
        return roleVip;
    }

    public void setRoleVip(Integer roleVip) {
        this.roleVip = roleVip;
    }

    public String getGameOrderId() {
        return gameOrderId;
    }

    public void setGameOrderId(String gameOrderId) {
        this.gameOrderId = gameOrderId;
    }

    public String getGameChannelOrderId() {
        return gameChannelOrderId;
    }

    public void setGameChannelOrderId(String gameChannelOrderId) {
        this.gameChannelOrderId = gameChannelOrderId;
    }

    public Double getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(Double orderAmount) {
        this.orderAmount = orderAmount;
    }

    public Double getShareAmount() {
        return shareAmount;
    }

    public void setShareAmount(Double shareAmount) {
        this.shareAmount = shareAmount;
    }

    public Double getNoShareAmount() {
        return noShareAmount;
    }

    public void setNoShareAmount(Double noShareAmount) {
        this.noShareAmount = noShareAmount;
    }

    public Integer getPayId() {
        return payId;
    }

    public void setPayId(Integer payId) {
        this.payId = payId;
    }

    public String getRechargeChannel() {
        return rechargeChannel;
    }

    public void setRechargeChannel(String rechargeChannel) {
        this.rechargeChannel = rechargeChannel;
    }

    public Long getAddJewel() {
        return addJewel;
    }

    public void setAddJewel(Long addJewel) {
        this.addJewel = addJewel;
    }

    public Long getTotalJewel() {
        return totalJewel;
    }

    public void setTotalJewel(Long totalJewel) {
        this.totalJewel = totalJewel;
    }

    public Integer getCurrencyType() {
        return currencyType;
    }

    public void setCurrencyType(Integer currencyType) {
        this.currencyType = currencyType;
    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public Integer getIsFirstRecharge() {
        return isFirstRecharge;
    }

    public void setIsFirstRecharge(Integer isFirstRecharge) {
        this.isFirstRecharge = isFirstRecharge;
    }

    public String getDeviceModel() {
        return deviceModel;
    }

    public void setDeviceModel(String deviceModel) {
        this.deviceModel = deviceModel;
    }

    public String getAndroidId() {
        return androidId;
    }

    public void setAndroidId(String androidId) {
        this.androidId = androidId;
    }

    public Integer getLoginType() {
        return loginType;
    }

    public void setLoginType(Integer loginType) {
        this.loginType = loginType;
    }


}