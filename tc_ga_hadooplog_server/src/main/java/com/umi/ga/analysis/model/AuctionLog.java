package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.umi.ga.utils.DateForm;

public class AuctionLog extends BaseEntity{

	private static final long serialVersionUID = -3079349499289495109L;
	private Integer gameId;

	private String channelId;

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
	private String sellerAccountId;
	//
	private String sellerRoleGuid;
	//
	private String sellerRoleName;
	//
	private Integer sellerRoleLevel;
	//
	private Long itemGuid;
	//
	private Integer itemId;
	//
	private Integer itemNum;
	//
	private Integer auctionType;
	//
	private String buyerAccountId;
	//
	private String buyerRoleGuid;
	//
	private String buyerRoleName;
	//
	private Integer buyerRoleLevel;
	//
	private Integer moneyType;
	//
	private Integer moneyValue;
	//
	private Integer auctionState;

	private int pageIndex;  //当前页

	private int pageSize;   //每页显示个数

	private String seDate;
	private String startTime; // 开始时间

	private String endTime; // 结束时间

	private String[] stringsArray;

	private String auctionstate;

	private String[] channelArray;

	//拍卖和交易  0表示交易,1表示拍卖
	private String auctiontype;

	public String[] getChannelArray() {
		return channelArray;
	}

	public void setChannelArray(String[] channelArray) {
		this.channelArray = channelArray;
	}

	public String getAuctiontype() {
		return auctiontype;
	}

	public void setAuctiontype(String auctiontype) {
		this.auctiontype = auctiontype;
	}

	public String getAuctionstate() {
		return auctionstate;
	}

	public void setAuctionstate(String auctionstate) {
		this.auctionstate = auctionstate;
	}

	public String[] getStringsArray() {
		return stringsArray;
	}

	public void setStringsArray(String[] stringsArray) {
		this.stringsArray = stringsArray;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getSeDate() {
		return seDate;
	}

	public void setSeDate(String seDate) {
		this.seDate = seDate;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getGameId() {
		return gameId;
	}

	public void setGameId(Integer gameId) {
		this.gameId = gameId;
	}

	public String getChannelId() {
		return channelId;
	}

	public void setChannelId(String channelId) {
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

	public String getAccountId() {
		return accountId;
	}

	public void setAccountId(String accountId) {
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

	public Long getRolePower() {
		return rolePower;
	}

	public void setRolePower(Long rolePower) {
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

	public String getSellerAccountId() {
		return sellerAccountId;
	}

	public void setSellerAccountId(String sellerAccountId) {
		this.sellerAccountId = sellerAccountId;
	}

	public String getSellerRoleGuid() {
		return sellerRoleGuid;
	}

	public void setSellerRoleGuid(String sellerRoleGuid) {
		this.sellerRoleGuid = sellerRoleGuid;
	}

	public String getSellerRoleName() {
		return sellerRoleName;
	}

	public void setSellerRoleName(String sellerRoleName) {
		this.sellerRoleName = sellerRoleName;
	}

	public Integer getSellerRoleLevel() {
		return sellerRoleLevel;
	}

	public void setSellerRoleLevel(Integer sellerRoleLevel) {
		this.sellerRoleLevel = sellerRoleLevel;
	}

	public Long getItemGuid() {
		return itemGuid;
	}

	public void setItemGuid(Long itemGuid) {
		this.itemGuid = itemGuid;
	}

	public Integer getItemId() {
		return itemId;
	}

	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}

	public Integer getItemNum() {
		return itemNum;
	}

	public void setItemNum(Integer itemNum) {
		this.itemNum = itemNum;
	}

	public Integer getAuctionType() {
		return auctionType;
	}

	public void setAuctionType(Integer auctionType) {
		this.auctionType = auctionType;
	}

	public String getBuyerAccountId() {
		return buyerAccountId;
	}

	public void setBuyerAccountId(String buyerAccountId) {
		this.buyerAccountId = buyerAccountId;
	}

	public String getBuyerRoleGuid() {
		return buyerRoleGuid;
	}

	public void setBuyerRoleGuid(String buyerRoleGuid) {
		this.buyerRoleGuid = buyerRoleGuid;
	}

	public String getBuyerRoleName() {
		return buyerRoleName;
	}

	public void setBuyerRoleName(String buyerRoleName) {
		this.buyerRoleName = buyerRoleName;
	}

	public Integer getBuyerRoleLevel() {
		return buyerRoleLevel;
	}

	public void setBuyerRoleLevel(Integer buyerRoleLevel) {
		this.buyerRoleLevel = buyerRoleLevel;
	}

	public Integer getMoneyType() {
		return moneyType;
	}

	public void setMoneyType(Integer moneyType) {
		this.moneyType = moneyType;
	}

	public Integer getMoneyValue() {
		return moneyValue;
	}

	public void setMoneyValue(Integer moneyValue) {
		this.moneyValue = moneyValue;
	}

	public Integer getAuctionState() {
		return auctionState;
	}

	public void setAuctionState(Integer auctionState) {
		this.auctionState = auctionState;
	}
}
