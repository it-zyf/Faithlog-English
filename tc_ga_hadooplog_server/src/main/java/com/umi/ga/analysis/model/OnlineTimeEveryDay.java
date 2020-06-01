package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class OnlineTimeEveryDay extends BaseEntity {

    private  String logTime;

    private  Integer onlineTime;

    public String getLogTime() {
        return logTime;
    }

    public void setLogTime(String logTime) {
        this.logTime = logTime;
    }

    public Integer getOnlineTime() {
        return onlineTime;
    }

    public void setOnlineTime(Integer onlineTime) {
        this.onlineTime = onlineTime;
    }
}
