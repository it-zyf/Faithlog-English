package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.util.Arrays;


public class ServerEarlyWarning extends BaseEntity {
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
    private  Integer onlineTime;
    //预警等级
    private Integer warningLevel;
    //排名
    private  Integer rank;

    private Integer pageIndex;

    private Integer pageSize;

    private String startTime;

    private String endTime;


    private Integer fromIndex;

    private Integer toIndex;

    private String endTime1;
    private String startTime1;


    private String[] stringsArray;

    private  String[] channelArray;

    private  int[] typeArray;
    //红色预警值
    private  Integer redWarningValue;
    //黄色预警值
    private Integer yellowWarningValue;

    private Integer onlineTimeYesterDay;

    private String yesToDayLogTime;

    private String type;

    private String sortName;

    private String sortOrder;


    public int[] getTypeArray() {
        return typeArray;
    }

    public void setTypeArray(int[] typeArray) {
        this.typeArray = typeArray;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSortName() {
        return sortName;
    }

    public void setSortName(String sortName) {
        this.sortName = sortName;
    }

    public String getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(String sortOrder) {
        this.sortOrder = sortOrder;
    }

    public String getYesToDayLogTime() {
        return yesToDayLogTime;
    }


    public String getStartTime1() {
        return startTime1;
    }

    public void setStartTime1(String startTime1) {
        this.startTime1 = startTime1;
    }

    public void setYesToDayLogTime(String yesToDayLogTime) {
        this.yesToDayLogTime = yesToDayLogTime;
    }

    public String getEndTime1() {
        return endTime1;
    }

    public void setEndTime1(String endTime1) {
        this.endTime1 = endTime1;
    }

    public Integer getOnlineTimeYesterDay() {
        return onlineTimeYesterDay;
    }

    public void setOnlineTimeYesterDay(Integer onlineTimeYesterDay) {
        this.onlineTimeYesterDay = onlineTimeYesterDay;
    }

    public Integer getRedWarningValue() {
        return redWarningValue;
    }

    public void setRedWarningValue(Integer redWarningValue) {
        this.redWarningValue = redWarningValue;
    }

    public Integer getYellowWarningValue() {
        return yellowWarningValue;
    }

    public void setYellowWarningValue(Integer yellowWarningValue) {
        this.yellowWarningValue = yellowWarningValue;
    }

    public Integer getFromIndex() {
        return fromIndex;
    }

    public void setFromIndex(Integer fromIndex) {
        this.fromIndex = fromIndex;
    }

    public Integer getToIndex() {
        return toIndex;
    }

    public void setToIndex(Integer toIndex) {
        this.toIndex = toIndex;
    }

    public String[] getStringsArray() {
        return stringsArray;
    }

    public void setStringsArray(String[] stringsArray) {
        this.stringsArray = stringsArray;
    }

    public String[] getChannelArray() {
        return channelArray;
    }

    public void setChannelArray(String[] channelArray) {
        this.channelArray = channelArray;
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

    public Integer getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(Integer pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
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

    public Integer getOnlineTime() {
        return onlineTime;
    }

    public void setOnlineTime(Integer onlineTime) {
        this.onlineTime = onlineTime;
    }

    public Integer getWarningLevel() {
        return warningLevel;
    }

    public void setWarningLevel(Integer warningLevel) {
        this.warningLevel = warningLevel;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "ServerEarlyWarning{" +
                "gameId=" + gameId +
                ", channelId='" + channelId + '\'' +
                ", mediaId='" + mediaId + '\'' +
                ", deviceId='" + deviceId + '\'' +
                ", versionName='" + versionName + '\'' +
                ", versionCode='" + versionCode + '\'' +
                ", accountId='" + accountId + '\'' +
                ", serverId='" + serverId + '\'' +
                ", logTime='" + logTime + '\'' +
                ", roleId='" + roleId + '\'' +
                ", roleName='" + roleName + '\'' +
                ", roleLevel=" + roleLevel +
                ", roleGender=" + roleGender +
                ", rolePower=" + rolePower +
                ", roleType='" + roleType + '\'' +
                ", vipLevel=" + vipLevel +
                ", onlineTime=" + onlineTime +
                ", warningLevel='" + warningLevel + '\'' +
                ", rank=" + rank +
                ", pageIndex=" + pageIndex +
                ", pageSize=" + pageSize +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", fromIndex=" + fromIndex +
                ", toIndex=" + toIndex +
                ", endTime1='" + endTime1 + '\'' +
                ", stringsArray=" + Arrays.toString(stringsArray) +
                ", channelArray=" + Arrays.toString(channelArray) +
                ", redWarningValue=" + redWarningValue +
                ", yellowWarningValue=" + yellowWarningValue +
                ", onlineTimeYesterDay=" + onlineTimeYesterDay +
                ", yesToDayLogTime='" + yesToDayLogTime + '\'' +
                '}';
    }
}
