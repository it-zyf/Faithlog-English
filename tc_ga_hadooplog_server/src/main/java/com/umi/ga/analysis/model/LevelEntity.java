package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class LevelEntity  extends BaseEntity {
    private Integer level;


    private Integer playNum;

    private Long maxPower;

    private Long avgPower;

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getPlayNum() {
        return playNum;
    }

    public void setPlayNum(Integer playNum) {
        this.playNum = playNum;
    }

    public Long getMaxPower() {
        return maxPower;
    }

    public void setMaxPower(Long maxPower) {
        this.maxPower = maxPower;
    }

    public Long getAvgPower() {
        return avgPower;
    }

    public void setAvgPower(Long avgPower) {
        this.avgPower = avgPower;
    }
}
