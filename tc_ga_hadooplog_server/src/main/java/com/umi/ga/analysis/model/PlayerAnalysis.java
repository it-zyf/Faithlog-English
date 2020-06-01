package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

/**
 * @Author guowenchuang
 * @Date 2020/4/17 17:11
 */
public class PlayerAnalysis extends BaseEntity {

    private Long id;

    // 排名
    private Integer rank;

    // 区服
    private String serverId;

    // 渠道号
    private String channelId;

    // 账号id
    private String accountId;

    // 角色id
    private String roleId;

    // 角色名称
    private String roleName;

    // 职业
    private String roleType;

    // 累计充值额度
    private Double totalPayAmount;

    // 角色等级
    private Integer roleLevel;

    // 角色vip等级
    private Integer vipLevel;

    // 角色战力
    Double battlePoints;

    // 支付次数
    private Integer payCount;

    // 最少支付金额
    private Double minPay;

    // 最大支付金额
    private Double maxPay;

    // 平均支付金额
    private Double avgPay;

    // 首充时间
    private String firstRechargeTime;

    // 最后充值时间
    private String lastRechargeTime;

    // 最后下线时间
    private String logoutTime;

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
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

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
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

    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

    public Double getTotalPayAmount() {
        return totalPayAmount;
    }

    public void setTotalPayAmount(Double totalPayAmount) {
        this.totalPayAmount = totalPayAmount;
    }

    public Integer getRoleLevel() {
        return roleLevel;
    }

    public void setRoleLevel(Integer roleLevel) {
        this.roleLevel = roleLevel;
    }

    public Integer getVipLevel() {
        return vipLevel;
    }

    public void setVipLevel(Integer vipLevel) {
        this.vipLevel = vipLevel;
    }

    public Double getBattlePoints() {
        return battlePoints;
    }

    public void setBattlePoints(Double battlePoints) {
        this.battlePoints = battlePoints;
    }

    public Integer getPayCount() {
        return payCount;
    }

    public void setPayCount(Integer payCount) {
        this.payCount = payCount;
    }

    public Double getMinPay() {
        return minPay;
    }

    public void setMinPay(Double minPay) {
        this.minPay = minPay;
    }

    public Double getMaxPay() {
        return maxPay;
    }

    public void setMaxPay(Double maxPay) {
        this.maxPay = maxPay;
    }

    public Double getAvgPay() {
        return avgPay;
    }

    public void setAvgPay(Double avgPay) {
        this.avgPay = avgPay;
    }

    public String getFirstRechargeTime() {
        return firstRechargeTime;
    }

    public void setFirstRechargeTime(String firstRechargeTime) {
        this.firstRechargeTime = firstRechargeTime;
    }

    public String getLastRechargeTime() {
        return lastRechargeTime;
    }

    public void setLastRechargeTime(String lastRechargeTime) {
        this.lastRechargeTime = lastRechargeTime;
    }

    public String getLogoutTime() {
        return logoutTime;
    }

    public void setLogoutTime(String logoutTime) {
        this.logoutTime = logoutTime;
    }

    @Override
    public String toString() {
        return "PlayerAnalysis{" +
                "id=" + id +
                ", rank=" + rank +
                ", serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", accountId='" + accountId + '\'' +
                ", roleId='" + roleId + '\'' +
                ", roleName='" + roleName + '\'' +
                ", roleType='" + roleType + '\'' +
                ", totalPayAmount=" + totalPayAmount +
                ", roleLevel=" + roleLevel +
                ", vipLevel=" + vipLevel +
                ", battlePoints=" + battlePoints +
                ", payCount=" + payCount +
                ", minPay=" + minPay +
                ", maxPay=" + maxPay +
                ", avgPay=" + avgPay +
                ", firstRechargeTime='" + firstRechargeTime + '\'' +
                ", lastRechargeTime='" + lastRechargeTime + '\'' +
                ", logoutTime='" + logoutTime + '\'' +
                '}';
    }
}
