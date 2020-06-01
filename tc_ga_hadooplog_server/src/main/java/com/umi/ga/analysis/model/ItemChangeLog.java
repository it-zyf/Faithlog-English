package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.umi.ga.utils.DateForm;

public class ItemChangeLog extends BaseEntity{

	private static final long serialVersionUID = 183077476524618134L;
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

	private String propId;

	private String opType;

	private Integer causeId;

	private  Integer changeCount;

	private  Integer residueCount;

	//角色vip
	private String roleVip;
	//物品id
	private String itemId;
	//变化数量
	private String changeNum;
	//剩余数量
	private String leftNum;


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

	public String getPropId() {
		return propId;
	}

	public void setPropId(String propId) {
		this.propId = propId;
	}

	public String getopType() {
		return opType;
	}

	public void setopType(String opType) {
		this.opType = opType;
	}

	public Integer getcauseId() {
		return causeId;
	}

	public void setcauseId(Integer causeId) {
		this.causeId = causeId;
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

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getChangeNum() {
		return changeNum;
	}

	public void setChangeNum(String changeNum) {
		this.changeNum = changeNum;
	}

	public String getLeftNum() {
		return leftNum;
	}

	public void setLeftNum(String leftNum) {
		this.leftNum = leftNum;
	}
}
