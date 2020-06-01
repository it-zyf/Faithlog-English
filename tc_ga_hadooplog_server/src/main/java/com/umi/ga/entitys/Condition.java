package com.umi.ga.entitys;

import java.io.Serializable;

public class Condition implements Serializable {
    private String[] stringsArray;

    private  String[] channelArray;
    //第二个字符串数组
    private String[] stringsArrayTwo;

    private int[] intArray;

    private String serverId;  // 区服

    private String channelId; // 渠道号

    private String startTime; // 开始时间

    private String endTime; // 结束时间

    private String startTime2; // 开始时间

    private String endTime2; // 结束时间

    private String starT;

    private String endT;


    private String accountId; //账号ID

    private Integer startroleLevel; //最小等级

    private Integer endroleLevel; //最大等级

    private String roleId; //角色Id

    private String isShow; //空订单

    private String itemId; //商品id

    private String gameChannelOrderId; //渠道订单号

    private Integer roleLevel;

    private String seDate;

    private Integer loginType;//登录方式

    private String roleName; //角色名

    private int pageIndex;  //当前页

    private int pageSize;   //每页显示个数

    private String deviceId;

    private String stepId;

    private String taskId;

    private String taskType;
    //货币类型
    private String currencyId;

    private String orders;

    private String stepNum;

    private String goodsId;

    private String orderId;

    private String treasureType;

    private Integer costType;

    private String sellerAccountId;

    private String sellerRoleGuid;

    private String sellerRoleName;

    private String buyerAccountId;

    private String buyerRoleGuid;

    private String buyerRoleName;
    //聊天类型
    private String chatType;
    //货币类型
    private String costMoneyType;

    private String moneyType;

//限时活动Id
    private String  activityId;

    //变化类型 1是进入 0是离开
    private Integer changeType;

    //操作类型 ： 0 采集羽毛 1上交羽毛 2被击杀羽毛掉落
    private Integer operType;
    // 掠夺类型 ： 0 普通掠夺 1高倍掠夺
    private Integer harryType;

    //比赛阶段
//    0 ： 海选淘汰
//    1 ： 进入16强
//    2 ： 16进8
//    3  ： 8-4
//    4   ： 4-2
//    5  ： 决赛
    private Integer stateValue;

    private String activeType;

    private String type;

    public String getStarT() {
        return starT;
    }

    public void setStarT(String starT) {
        this.starT = starT;
    }

    public String getEndT() {
        return endT;
    }

    public void setEndT(String endT) {
        this.endT = endT;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getActiveType() {
        return activeType;
    }

    public void setActiveType(String activeType) {
        this.activeType = activeType;
    }

    public String[] getStringsArray() {
        return stringsArray;
    }

    public void setStringsArray(String[] stringsArray) {
        this.stringsArray = stringsArray;
    }

    public int[] getIntArray() {
        return intArray;
    }

    public void setIntArray(int[] intArray) {
        this.intArray = intArray;
    }

    public Integer getStateValue() {
        return stateValue;
    }

    public void setStateValue(Integer stateValue) {
        this.stateValue = stateValue;
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

    public Integer getChangeType() {
        return changeType;
    }

    public void setChangeType(Integer changeType) {
        this.changeType = changeType;
    }

    public String getActivityId() {
        return activityId;
    }

    public void setActivityId(String activityId) {
        this.activityId = activityId;
    }

    public String getCostMoneyType() {
        return costMoneyType;
    }

    public void setCostMoneyType(String costMoneyType) {
        this.costMoneyType = costMoneyType;
    }

    public String getChatType() {
        return chatType;
    }

    public void setChatType(String chatType) {
        this.chatType = chatType;
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

    public Integer getCostType() {
        return costType;
    }

    public void setCostType(Integer costType) {
        this.costType = costType;
    }

    public String getTreasureType() {
        return treasureType;
    }

    public void setTreasureType(String treasureType) {
        this.treasureType = treasureType;
    }

    public String getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(String goodsId) {
        this.goodsId = goodsId;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getStepNum() {
        return stepNum;
    }

    public void setStepNum(String stepNum) {
        this.stepNum = stepNum;
    }


    public String getStepId() {
        return stepId;
    }

    public void setStepId(String stepId) {
        this.stepId = stepId;
    }

    public String getOrders() {
        return orders;
    }

    public void setOrders(String orders) {
        this.orders = orders;
    }

    public Integer getRoleLevel() {
        return roleLevel;
    }

    public void setRoleLevel(Integer roleLevel) {
        this.roleLevel = roleLevel;
    }

    public String getCurrencyId() {
        return currencyId;
    }

    public void setCurrencyId(String currencyId) {
        this.currencyId = currencyId;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }



    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
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

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getServerId() {
        return serverId;
    }

    public void setServerId(String serverId) {
        this.serverId = serverId;
    }


    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
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

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public Integer getStartroleLevel() {
        return startroleLevel;
    }

    public void setStartroleLevel(Integer startroleLevel) {
        this.startroleLevel = startroleLevel;
    }

    public Integer getEndroleLevel() {
        return endroleLevel;
    }

    public void setEndroleLevel(Integer endroleLevel) {
        this.endroleLevel = endroleLevel;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public Integer getLoginType() {
        return loginType;
    }

    public void setLoginType(Integer loginType) {
        this.loginType = loginType;
    }


    public String getIsShow() {
        return isShow;
    }

    public void setIsShow(String isShow) {
        this.isShow = isShow;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getGameChannelOrderId() {
        return gameChannelOrderId;
    }

    public void setGameChannelOrderId(String gameChannelOrderId) {
        this.gameChannelOrderId = gameChannelOrderId;
    }

    public String getSeDate() {
        return seDate;
    }

    public String[] getChannelArray() {
        return channelArray;
    }

    public void setChannelArray(String[] channelArray) {
        this.channelArray = channelArray;
    }

    public void setSeDate(String seDate) {
        this.seDate = seDate;
    }

    public String[] getStringsArrayTwo() {
        return stringsArrayTwo;
    }

    public void setStringsArrayTwo(String[] stringsArrayTwo) {
        this.stringsArrayTwo = stringsArrayTwo;
    }

    public String getMoneyType() {
        return moneyType;
    }

    public void setMoneyType(String moneyType) {
        this.moneyType = moneyType;
    }

    public String getStartTime2() {
        return startTime2;
    }

    public void setStartTime2(String startTime2) {
        this.startTime2 = startTime2;
    }

    public String getEndTime2() {
        return endTime2;
    }

    public void setEndTime2(String endTime2) {
        this.endTime2 = endTime2;
    }

    @Override
    public String toString() {
        return "Condition{" +
                "serverId='" + serverId + '\'' +
                ", channelId='" + channelId + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", accountId='" + accountId + '\'' +
                ", startroleLevel=" + startroleLevel +
                ", endroleLevel=" + endroleLevel +
                ", roleId='" + roleId + '\'' +
                ", isShow='" + isShow + '\'' +
                ", itemId='" + itemId + '\'' +
                ", gameChannelOrderId='" + gameChannelOrderId + '\'' +
                ", loginType=" + loginType +
                ", roleName='" + roleName + '\'' +
                ", pageIndex=" + pageIndex +
                ", pageSize=" + pageSize +
                '}';
    }

}
