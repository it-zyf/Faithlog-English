package com.umi.ga.hadoop_api.controller;

import com.umi.ga.analysis.model.AuctionLog;
import com.umi.ga.analysis.model.ServerEarlyWarning;
import com.umi.ga.common.PagingResult;
import com.umi.ga.entitys.Condition;
import com.umi.ga.entitys.RankingEntity;
import com.umi.ga.hadoop_api.provider.DataAnalysisProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@Component
@RestController
public class DataAnalysisController {
    @Autowired
    private DataAnalysisProvider dataAnalysisProvider;

    //排行榜需求
    @CrossOrigin
    @RequestMapping(value = "/rankingList")
    @ResponseBody
    public Object rankingList(RankingEntity re) {
        PagingResult result = new PagingResult();
        result = dataAnalysisProvider.select_rankingList(re);//查询方法
        return result;
    }



    //任务流失分析
    @CrossOrigin
    @RequestMapping(value = "/querylossOfTask")
    @ResponseBody
    public Object lossOfTask(Condition ct) {
        PagingResult result = new PagingResult();
        result = dataAnalysisProvider.select_LossOfTask_log(ct);//查询方法
        return result;
    }

    //职业分布
    @CrossOrigin
    @RequestMapping(value = "/queryOccupationDistribution")
    @ResponseBody
    public Object queryOccupationDistribution(Condition ct) {
        PagingResult result = new PagingResult();
        result = dataAnalysisProvider.select_OccupationDistribution(ct);//查询方法
        return result;
    }




    //等级分布
    @CrossOrigin
    @RequestMapping(value = "/queryLevelDistribution")
    @ResponseBody
    public Object queryLevelDistribution(Condition ct) {
        PagingResult result = new PagingResult();
        result = dataAnalysisProvider.select_LevelDistribution(ct);//查询方法
        return result;
    }


    //拍卖行日志
    @CrossOrigin
    @RequestMapping(value = "/queryAuction_xl")
    @ResponseBody
    public Object queryAuction_xl(AuctionLog ct) {
        PagingResult result = new PagingResult();
        result = dataAnalysisProvider.select_Auction(ct);//查询方法
        return result;
    }

    //活动参与情况
    @CrossOrigin
    @RequestMapping(value = "/active_involved")
    @ResponseBody
    public Object active_involved(Condition ct) {
        PagingResult result = new PagingResult();
        result = dataAnalysisProvider.active_involved(ct);//查询方法
        return result;
    }


    //预警名单
    @CrossOrigin
    @RequestMapping(value = "/severEarlyWarning")
    @ResponseBody
    public Object severEarlyWarning(ServerEarlyWarning sew) {
        PagingResult result = new PagingResult();
        result = dataAnalysisProvider.severEarlyWarning(sew);//查询方法
        return result;
    }


    //每日在线时长分析
    @CrossOrigin
    @RequestMapping(value = "/serverDailyOnlineTime")
    @ResponseBody
    public Object serverDailyOnlineTime(ServerEarlyWarning sew) {
        PagingResult result = new PagingResult();
        result = dataAnalysisProvider.serverDailyOnlineTime(sew);//查询方法
        return result;
    }












}
