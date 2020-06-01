package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.umi.ga.utils.DateForm;

public class CrossServerBossKillLog extends BaseEntity {

	private static final long serialVersionUID = -6757516349180737710L;
	private Integer gameId;

	private Integer channelId;

	private String mediaId;

	private String deviceId;

	private String versionName;

	private String versionCode;
	private String accountId;

	private String serverId;

	private String logTime;

	private String roleId;

	private String roleName;

	private Integer roleLevel;

	private Integer roleGender;

	private Long rolePower;

	private String roleType;

	private Integer vipLevel;
	/*以上是通用字段,每个表中都会有.*/


	private String logName;
	//
	private Integer bossId;
	//
	private String killLegionId;
	//
	private String killLegionName;
	//
	private Long top1Id;
	//
	private String top1Name;
	//
	private Long top2Id;
	//
	private String top2Name;
	//
	private Long top3Id;
	//
	private String top3Name;
	//


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

	public String getaccountId() {
		return accountId;
	}

	public void setaccountId(String accountId) {
		this.accountId = accountId;
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

	public Long getrolePower() {
		return rolePower;
	}

	public void setrolePower(Long rolePower) {
		this.rolePower = rolePower;
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

	public Integer getBossId() {
		return bossId;
	}

	public void setBossId(Integer bossId) {
		this.bossId = bossId;
	}

	public String getKillLegionId() {
		return killLegionId;
	}

	public void setKillLegionId(String killLegionId) {
		this.killLegionId = killLegionId;
	}

	public String getKillLegionName() {
		return killLegionName;
	}

	public void setKillLegionName(String killLegionName) {
		this.killLegionName = killLegionName;
	}

	public Long getTop1Id() {
		return top1Id;
	}

	public void setTop1Id(Long top1Id) {
		this.top1Id = top1Id;
	}

	public String getTop1Name() {
		return top1Name;
	}

	public void setTop1Name(String top1Name) {
		this.top1Name = top1Name;
	}

	public Long getTop2Id() {
		return top2Id;
	}

	public void setTop2Id(Long top2Id) {
		this.top2Id = top2Id;
	}

	public String getTop2Name() {
		return top2Name;
	}

	public void setTop2Name(String top2Name) {
		this.top2Name = top2Name;
	}

	public Long getTop3Id() {
		return top3Id;
	}

	public void setTop3Id(Long top3Id) {
		this.top3Id = top3Id;
	}

	public String getTop3Name() {
		return top3Name;
	}

	public void setTop3Name(String top3Name) {
		this.top3Name = top3Name;
	}
}
