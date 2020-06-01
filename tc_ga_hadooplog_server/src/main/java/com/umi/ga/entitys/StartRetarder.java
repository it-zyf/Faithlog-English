package com.umi.ga.entitys;

import java.io.Serializable;

public class StartRetarder implements Serializable {

    private String timeCount;

    private String timeNum;

    private String timeTime;

    private String times;

    public String getTimes() {
        return times;
    }

    public void setTimes(String times) {
        this.times = times;
    }

    public String getTimeCount() {
        return timeCount;
    }

    public void setTimeCount(String timeCount) {
        this.timeCount = timeCount;
    }

    public String getTimeNum() {
        return timeNum;
    }

    public void setTimeNum(String timeNum) {
        this.timeNum = timeNum;
    }

    public String getTimeTime() {
        return timeTime;
    }

    public void setTimeTime(String timeTime) {
        this.timeTime = timeTime;
    }

    @Override
    public String toString() {
        return "startRetarder [timeCount=" + timeCount + ", timeNum=" + timeNum + ", timeTime=" + timeTime + ", times="
                + times + "]";
    }

}
