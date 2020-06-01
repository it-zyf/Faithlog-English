package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.umi.ga.utils.DateForm;

public class MoneyChangeLog extends BaseEntity{

	private static final long serialVersionUID = 2977436661870289004L;
	private Integer gameId;

	private Integer channelId;

	private String mediaId;

	private String deviceId;

	private String versionName;

	private String versionCode;
	private String userId;

	private String serverId;

	private String logTime;

	private String roleId;

	private String roleName;

	private Integer roleLevel;

	private Integer roleGender;

	private Long battlePoints;

	private String roleType;

	private Integer vipLevel;
	/*以上是通用字段,每个表中都会有.*/


	private String logName;

	private String currencyId;

	private Integer changeType;

	private Integer recharge;

	private Integer changeDescribe;

	private Integer changeCount;

	private Integer residueCount;

	//vip等级
	private String roleVip;

	//角色战力
	private String rolePower;
	//账号Id
	private String accountId;
    //之前数量
	private String  oldMoney;
	//货币类型
	private String moneyType;
	//现在数量
	private String newMoney;
	//变化类型
	private String opType;
	//变更方式
	private String causeId;


	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getGameId() {
		return gameId;
	}

	public void setGameId(Integer gameId) {
		this.gameId = gameId;
	}

	public Integer getChannelId() {
		return channelId;
	}

	public void setChannelId(Integer channelId) {
		this.channelId = channelId;
	}

	public String getMediaId() {
		return mediaId;
	}

	public void setMediaId(String mediaId) {
		this.mediaId = mediaId;
	}

	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}

	public String getVersionName() {
		return versionName;
	}

	public void setVersionName(String versionName) {
		this.versionName = versionName;
	}

	public String getVersionCode() {
		return versionCode;
	}

	public void setVersionCode(String versionCode) {
		this.versionCode = versionCode;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getServerId() {
		return serverId;
	}

	public void setServerId(String serverId) {
		this.serverId = serverId;
	}

	public String getLogTime() {
		return logTime;
	}

	public void setLogTime(String logTime) {
		this.logTime = logTime;
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

	public Integer getRoleGender() {
		return roleGender;
	}

	public void setRoleGender(Integer roleGender) {
		this.roleGender = roleGender;
	}

	public Long getBattlePoints() {
		return battlePoints;
	}

	public void setBattlePoints(Long battlePoints) {
		this.battlePoints = battlePoints;
	}

	public String getRoleType() {
		return roleType;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public Integer getVipLevel() {
		return vipLevel;
	}

	public void setVipLevel(Integer vipLevel) {
		this.vipLevel = vipLevel;
	}

	public String getLogName() {
		return logName;
	}

	public void setLogName(String logName) {
		this.logName = logName;
	}

	public String getCurrencyId() {
		return currencyId;
	}

	public void setCurrencyId(String currencyId) {
		this.currencyId = currencyId;
	}

	public Integer getChangeType() {
		return changeType;
	}

	public void setChangeType(Integer changeType) {
		this.changeType = changeType;
	}

	public Integer getRecharge() {
		return recharge;
	}

	public void setRecharge(Integer recharge) {
		this.recharge = recharge;
	}

	public Integer getChangeDescribe() {
		return changeDescribe;
	}

	public void setChangeDescribe(Integer changeDescribe) {
		this.changeDescribe = changeDescribe;
	}

	public Integer getChangeCount() {
		return changeCount;
	}

	public void setChangeCount(Integer changeCount) {
		this.changeCount = changeCount;
	}

	public Integer getResidueCount() {
		return residueCount;
	}

	public void setResidueCount(Integer residueCount) {
		this.residueCount = residueCount;
	}

	public String getRoleVip() {
		return roleVip;
	}

	public void setRoleVip(String roleVip) {
		this.roleVip = roleVip;
	}

	public String getRolePower() {
		return rolePower;
	}

	public void setRolePower(String rolePower) {
		this.rolePower = rolePower;
	}

	public String getAccountId() {
		return accountId;
	}

	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}

	public String getOldMoney() {
		return oldMoney;
	}

	public void setOldMoney(String oldMoney) {
		this.oldMoney = oldMoney;
	}

	public String getMoneyType() {
		return moneyType;
	}

	public void setMoneyType(String moneyType) {
		this.moneyType = moneyType;
	}

	public String getNewMoney() {
		return newMoney;
	}

	public void setNewMoney(String newMoney) {
		this.newMoney = newMoney;
	}

	public String getOpType() {
		return opType;
	}

	public void setOpType(String opType) {
		this.opType = opType;
	}

	public String getCauseId() {
		return causeId;
	}

	public void setCauseId(String causeId) {
		this.causeId = causeId;
	}

	@Override
	public String toString() {
		return "MoneyChangeLog{" +
				"gameId=" + gameId +
				", channelId=" + channelId +
				", mediaId='" + mediaId + '\'' +
				", deviceId='" + deviceId + '\'' +
				", versionName='" + versionName + '\'' +
				", versionCode='" + versionCode + '\'' +
				", userId='" + userId + '\'' +
				", serverId='" + serverId + '\'' +
				", logTime=" + logTime +
				", roleId='" + roleId + '\'' +
				", roleName='" + roleName + '\'' +
				", roleLevel=" + roleLevel +
				", roleGender=" + roleGender +
				", battlePoints=" + battlePoints +
				", roleType='" + roleType + '\'' +
				", vipLevel=" + vipLevel +
				", logName='" + logName + '\'' +
				", currencyId='" + currencyId + '\'' +
				", changeType=" + changeType +
				", recharge=" + recharge +
				", changeDescribe=" + changeDescribe +
				", changeCount=" + changeCount +
				", residueCount=" + residueCount +
				'}';
	}
}
