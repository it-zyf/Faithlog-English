package com.umi.ga.hadoop_api.controller;

import com.umi.ga.common.PagingResult;
import com.umi.ga.entitys.Condition;
import com.umi.ga.hadoop_api.provider.DetailedLogProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 泰版log详细日志部分
 * @author wuyanzu
 */

@Component
@RestController
public class DetailedLogController {
    @Autowired
    private DetailedLogProvider detailedLogProvider;

    //登录登出日志
    @CrossOrigin
    @RequestMapping(value = "/queryLoginout")
    @ResponseBody
    public Object queryLoginout(Condition ct) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_Loginout_log(ct);//查询方法
        return result;
    }

    //充值日志
    @CrossOrigin
    @RequestMapping(value = "/queryRecharge_Success")
    @ResponseBody
    public Object queryRecharge_Success(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_Recharge_Success(al);//查询方法
        return result;

    }

    //创建角色日志
    @CrossOrigin
    @RequestMapping(value = "/queryRoleLog")
    @ResponseBody
    public Object queryRoleLog(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_RoleLog(al);//查询方法
        return result;

    }

    //新手引导日志
    @CrossOrigin
    @RequestMapping(value = "/queryGuideLog")
    @ResponseBody
    public Object queryGuideLog(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_GuideLog(al);//查询方法
        return result;

    }

    //任务日志
    @RequestMapping(value = "/queryTaskLog")
    @ResponseBody
    public Object queryTaskLog(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_TaskLog(al);//查询方法
        return result;

    }

    //货币变化日志
    @CrossOrigin
    @RequestMapping(value = "/queryMoney_Change")
    @ResponseBody
    public Object queryMoney_Change(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_Money_ChangeLog(al);//查询方法
        return result;

    }

    //等级变化日志
    @CrossOrigin
    @RequestMapping(value = "/queryLevel_Change")
    @ResponseBody
    public Object queryLevel_Change(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_Level_ChangeLog(al);//查询方法
        return result;

    }

    //充值步骤日志
    @CrossOrigin
    @RequestMapping(value = "/queryRecharge_Step")
    @ResponseBody
    public Object queryRecharge_Step(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_Recharge_StepLog(al);//查询方法
        return result;

    }

    //宝藏寻宝日志
    @CrossOrigin
    @RequestMapping(value = "/queryLuckyDraw")
    @ResponseBody
    public Object queryLuckyDraw(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_LuckyDraw(al);//查询方法
        return result;

    }

    //拍卖行日志
    @CrossOrigin
    @RequestMapping(value = "/queryAuction")
    @ResponseBody
    public Object queryAuction(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_Auction(al);//查询方法
        return result;

    }

    //聊天日志
    @CrossOrigin
    @RequestMapping(value = "/queryRoleChat")
    @ResponseBody
    public Object queryRoleChat(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_RoleChat(al);//查询方法
        return result;

    }

    //商城购买日志
    @CrossOrigin
    @RequestMapping(value = "/queryBuyGoods")
    @ResponseBody
    public Object queryBuyGoods(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_BuyGoods(al);//查询方法
        return result;

    }

    //邮件提取日志
    @CrossOrigin
    @RequestMapping(value = "/queryRoleGetMail")
    @ResponseBody
    public Object queryRoleGetMail(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_RoleGetMail(al);//查询方法
        return result;

    }

    //物品流水日志
    @CrossOrigin
    @RequestMapping(value = "/queryArticlesFlowing")
    @ResponseBody
    public Object queryArticlesFlowing(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.select_ArticlesFlowing(al);//查询方法
        return result;

    }

    //成长基金
    @CrossOrigin
    @RequestMapping(value = "/queryGrowth_FundGrowth")
    @ResponseBody
    public Object queryGrowth_FundGrowth(Condition al)   {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.queryGrowth_FundGrowth(al);//查询方法
        return result;
    }

    //活动查询日志
    @CrossOrigin
    @RequestMapping(value = "/query_activeLog")
    @ResponseBody
    public Object query_active(Condition al)  {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.findListByActive(al);//查询方法
        return result;
    }


    //进出副本日志
    @CrossOrigin
    @RequestMapping(value = "/query_timeOutInLog")
    @ResponseBody
    public Object query_timeOutIn(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.query_timeOutIn(al);//查询方法
        return result;
    }

    //击杀怪物日志
    @CrossOrigin
    @RequestMapping(value = "/query_killBossLog")
    @ResponseBody
    public Object query_killBoss(Condition al){
        PagingResult result = new PagingResult();
        result = detailedLogProvider.query_killBoss(al);//查询方法
        return result;
    }

    //物品掉落日志
    @CrossOrigin
    @RequestMapping(value = "/query_killDropLog")
    @ResponseBody
    public Object query_killDrop(Condition al) {
        PagingResult result = new PagingResult();
        result = detailedLogProvider.query_killDrop(al);//查询方法
        return result;
    }

    //竞技场日志
    @CrossOrigin
    @RequestMapping(value = "/query_PKLog")
    @ResponseBody
    public Object query_PK(Condition al){
        PagingResult result = new PagingResult();
        result = detailedLogProvider.query_PK(al);//查询方法
        return result;
    }
    //军团击杀日志
    @CrossOrigin
    @RequestMapping(value = "/query_legionLog")
    @ResponseBody
    public Object query_legion(Condition al){
        PagingResult result = new PagingResult();
        result = detailedLogProvider.query_legion(al);//查询方法
        return result;
    }

    //跨服掠夺日志
    @CrossOrigin
    @RequestMapping(value = "/query_crossHarryLog")
    @ResponseBody
    public Object query_crossHarry(Condition al){
        PagingResult result = new PagingResult();
        result = detailedLogProvider.query_crossHarry(al);//查询方法
        return result;
    }


    //impala数据测试
    @RequestMapping(value = "/test")
    @ResponseBody
    public Object test(Condition al){
        PagingResult result = new PagingResult();
        result = detailedLogProvider.test(al);//查询方法
        return result;
    }




}
