package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.umi.ga.utils.DateForm;

public class CrossServerHarryLog
        extends BaseEntity
{
    private static final long serialVersionUID = 940049416863918921L;
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
    private Integer operType;
    private Integer harryType;
    private String harryServerId;
    private Integer normalHarryCount;
    private Integer sepcailHarryCount;

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

    public Integer getOperType() {
        return operType;
    }

    public void setOperType(Integer operType) {
        this.operType = operType;
    }

    public Integer getHarryType() {
        return harryType;
    }

    public void setHarryType(Integer harryType) {
        this.harryType = harryType;
    }

    public String getHarryServerId() {
        return harryServerId;
    }

    public void setHarryServerId(String harryServerId) {
        this.harryServerId = harryServerId;
    }

    public Integer getNormalHarryCount() {
        return normalHarryCount;
    }

    public void setNormalHarryCount(Integer normalHarryCount) {
        this.normalHarryCount = normalHarryCount;
    }

    public Integer getSepcailHarryCount() {
        return sepcailHarryCount;
    }

    public void setSepcailHarryCount(Integer sepcailHarryCount) {
        this.sepcailHarryCount = sepcailHarryCount;
    }
}
