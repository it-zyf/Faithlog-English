package com.umi.ga.entitys;

import java.io.Serializable;

public class TimeQuantum implements Serializable {

    private String coldStartTime;

    private String region;

    private String networkStates;

    private String macAddr;

    public String getMacAddr() {
        return macAddr;
    }

    public TimeQuantum setMacAddr(String macAddr) {
        this.macAddr = macAddr;
        return this;
    }

    public String getColdStartTime() {
        return coldStartTime;
    }

    public void setColdStartTime(String coldStartTime) {
        this.coldStartTime = coldStartTime;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getNetworkStates() {
        return networkStates;
    }

    public void setNetworkStates(String networkStates) {
        this.networkStates = networkStates;
    }

    @Override
    public String toString() {
        return "TimeQuantum{" +
                "coldStartTime='" + coldStartTime + '\'' +
                ", region='" + region + '\'' +
                ", networkStates='" + networkStates + '\'' +
                ", macAddr='" + macAddr + '\'' +
                '}';
    }
}
