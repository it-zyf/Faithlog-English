package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class RankListLog extends BaseEntity {
    private  Integer rankingIndex;

    private String userId;

    private String roleId;

    private String roleName;

    private String roleType;

    private Integer roleLevel;
    //玩家战力
    private Integer battlePoints;

    private Integer vipLevel;
    //所属军团
    private String supportingName;

    private Integer peak;


    public Integer getRankingIndex() {
        return rankingIndex;
    }

    public void setRankingIndex(Integer rankingIndex) {
        this.rankingIndex = rankingIndex;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
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

    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

    public Integer getRoleLevel() {
        return roleLevel;
    }

    public void setRoleLevel(Integer roleLevel) {
        this.roleLevel = roleLevel;
    }

    public Integer getBattlePoints() {
        return battlePoints;
    }

    public void setBattlePoints(Integer battlePoints) {
        this.battlePoints = battlePoints;
    }

    public Integer getVipLevel() {
        return vipLevel;
    }

    public void setVipLevel(Integer vipLevel) {
        this.vipLevel = vipLevel;
    }

    public String getSupportingName() {
        return supportingName;
    }

    public void setSupportingName(String supportingName) {
        this.supportingName = supportingName;
    }

    public Integer getPeak() {
        return peak;
    }

    public void setPeak(Integer peak) {
        this.peak = peak;
    }
}
