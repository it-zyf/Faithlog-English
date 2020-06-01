package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.util.Date;

public class AccountCreateLog extends BaseEntity {
	private Long logId;

    private Date logTime;
	
	
    private String serverId;

    private String accountId;

    private String deviceId;

    private Integer loginType;

    private String appid;

    private String version;

    private String stepnumid;

    private String normversion;

    private String gamechannel;

    private String adchannel;

    private String crossService;

    private String ip;

    private String osVersion;

    private String model;

    private String idfa;

    private String imei;

    private String androidid;

    private String mac;

    private String sn;

    public Long getLogId() {
        return logId;
    }

    public void setLogId(Long logId) {
        this.logId = logId;
    }

    public Date getLogTime() {
        return logTime;
    }

    public void setLogTime(Date logTime) {
        this.logTime = logTime;
    }
    
    public String getServerId() {
        return serverId;
    }

    public void setServerId(String serverId) {
        this.serverId = serverId;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public Integer getLoginType() {
        return loginType;
    }

    public void setLoginType(Integer loginType) {
        this.loginType = loginType;
    }

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getStepnumid() {
        return stepnumid;
    }

    public void setStepnumid(String stepnumid) {
        this.stepnumid = stepnumid;
    }

    public String getNormversion() {
        return normversion;
    }

    public void setNormversion(String normversion) {
        this.normversion = normversion;
    }

    public String getGamechannel() {
        return gamechannel;
    }

    public void setGamechannel(String gamechannel) {
        this.gamechannel = gamechannel;
    }

    public String getAdchannel() {
        return adchannel;
    }

    public void setAdchannel(String adchannel) {
        this.adchannel = adchannel;
    }

    public String getCrossService() {
        return crossService;
    }

    public void setCrossService(String crossService) {
        this.crossService = crossService;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getOsVersion() {
        return osVersion;
    }

    public void setOsVersion(String osVersion) {
        this.osVersion = osVersion;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getIdfa() {
        return idfa;
    }

    public void setIdfa(String idfa) {
        this.idfa = idfa;
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei;
    }

    public String getAndroidid() {
        return androidid;
    }

    public void setAndroidid(String androidid) {
        this.androidid = androidid;
    }

    public String getMac() {
        return mac;
    }

    public void setMac(String mac) {
        this.mac = mac;
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn;
    }
}