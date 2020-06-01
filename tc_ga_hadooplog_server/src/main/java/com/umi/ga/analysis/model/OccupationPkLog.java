package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.umi.ga.utils.DateForm;

public class OccupationPkLog extends BaseEntity{

	private static final long serialVersionUID = -4571301116594691980L;

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

	private Integer roleVip;
	/*以上是通用字段,每个表中都会有.*/


	private String logName;

	//
	private Integer classType;
	//
	private Integer stateValue;
	//
	private String oppoGuid;
	//
	private Integer pkResult;
	//
	private Integer itemId1;
	//
	private Integer itemNum1;
	//
	private Integer itemId2;
	//
	private Integer itemNum2;
	//
	private Integer itemId3;
	//
	private Integer itemNum3;
	//
	private Integer itemId4;
	//
	private Integer itemNum4;
	//
	private Integer itemId5;
	//
	private Integer itemNum5;
	//
	private Integer itemId6;
	//
	private Integer itemNum6;
	//
	private Integer itemId7;
	//
	private Integer itemNum7;
	//
	private Integer itemId8;
	//
	private Integer itemNum8;
	//
	private Integer itemId9;
	//
	private Integer itemNum9;
	//
	private Integer itemId10;
	//
	private Integer itemNum10;

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

	public Integer getRoleVip() {
		return roleVip;
	}

	public void setRoleVip(Integer roleVip) {
		this.roleVip = roleVip;
	}

	public String getLogName() {
		return logName;
	}

	public void setLogName(String logName) {
		this.logName = logName;
	}

	public Integer getClassType() {
		return classType;
	}

	public void setClassType(Integer classType) {
		this.classType = classType;
	}

	public Integer getStateValue() {
		return stateValue;
	}

	public void setStateValue(Integer stateValue) {
		this.stateValue = stateValue;
	}

	public String getOppoGuid() {
		return oppoGuid;
	}

	public void setOppoGuid(String oppoGuid) {
		this.oppoGuid = oppoGuid;
	}

	public Integer getPkResult() {
		return pkResult;
	}

	public void setPkResult(Integer pkResult) {
		this.pkResult = pkResult;
	}

	public Integer getItemId1() {
		return itemId1;
	}

	public void setItemId1(Integer itemId1) {
		this.itemId1 = itemId1;
	}

	public Integer getItemNum1() {
		return itemNum1;
	}

	public void setItemNum1(Integer itemNum1) {
		this.itemNum1 = itemNum1;
	}

	public Integer getItemId2() {
		return itemId2;
	}

	public void setItemId2(Integer itemId2) {
		this.itemId2 = itemId2;
	}

	public Integer getItemNum2() {
		return itemNum2;
	}

	public void setItemNum2(Integer itemNum2) {
		this.itemNum2 = itemNum2;
	}

	public Integer getItemId3() {
		return itemId3;
	}

	public void setItemId3(Integer itemId3) {
		this.itemId3 = itemId3;
	}

	public Integer getItemNum3() {
		return itemNum3;
	}

	public void setItemNum3(Integer itemNum3) {
		this.itemNum3 = itemNum3;
	}

	public Integer getItemId4() {
		return itemId4;
	}

	public void setItemId4(Integer itemId4) {
		this.itemId4 = itemId4;
	}

	public Integer getItemNum4() {
		return itemNum4;
	}

	public void setItemNum4(Integer itemNum4) {
		this.itemNum4 = itemNum4;
	}

	public Integer getItemId5() {
		return itemId5;
	}

	public void setItemId5(Integer itemId5) {
		this.itemId5 = itemId5;
	}

	public Integer getItemNum5() {
		return itemNum5;
	}

	public void setItemNum5(Integer itemNum5) {
		this.itemNum5 = itemNum5;
	}

	public Integer getItemId6() {
		return itemId6;
	}

	public void setItemId6(Integer itemId6) {
		this.itemId6 = itemId6;
	}

	public Integer getItemNum6() {
		return itemNum6;
	}

	public void setItemNum6(Integer itemNum6) {
		this.itemNum6 = itemNum6;
	}

	public Integer getItemId7() {
		return itemId7;
	}

	public void setItemId7(Integer itemId7) {
		this.itemId7 = itemId7;
	}

	public Integer getItemNum7() {
		return itemNum7;
	}

	public void setItemNum7(Integer itemNum7) {
		this.itemNum7 = itemNum7;
	}

	public Integer getItemId8() {
		return itemId8;
	}

	public void setItemId8(Integer itemId8) {
		this.itemId8 = itemId8;
	}

	public Integer getItemNum8() {
		return itemNum8;
	}

	public void setItemNum8(Integer itemNum8) {
		this.itemNum8 = itemNum8;
	}

	public Integer getItemId9() {
		return itemId9;
	}

	public void setItemId9(Integer itemId9) {
		this.itemId9 = itemId9;
	}

	public Integer getItemNum9() {
		return itemNum9;
	}

	public void setItemNum9(Integer itemNum9) {
		this.itemNum9 = itemNum9;
	}

	public Integer getItemId10() {
		return itemId10;
	}

	public void setItemId10(Integer itemId10) {
		this.itemId10 = itemId10;
	}

	public Integer getItemNum10() {
		return itemNum10;
	}

	public void setItemNum10(Integer itemNum10) {
		this.itemNum10 = itemNum10;
	}
}
