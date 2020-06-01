package com.umi.ga.hadoop_api.controller;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import com.umi.ga.hadoop_api.provider.CenterProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Component
@RestController
@RequestMapping(value = "/frontEnd")
public class FrontEndController {

    @Autowired
    private CenterProvider centerProvider;

    /**
     * 启动分析 -- 启动时间点
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/selectStartTime")
    public HttpResult selectStartTime(Times times) {  // startTime = 'yyyy-MM-dd'
        HttpResult result = new HttpResult();
        result = centerProvider.selectStartTime(times);
        return result;
    }

    /**
     * 启动分析
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/selectStart")
    public HttpResult selectStart(Times times) { //  startTime & endTime  = 'yyyy-MM-dd HH:mm:ss'  startTimeSecond & endTimeSecond = 'yyy-MM-dd HH:mm:ss'
        HttpResult result = new HttpResult();
        result = centerProvider.selectStart(times);
        return result;
    }

    /**
     * 启动分析 -- ip、延迟、网络分布图
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/selectTimeQuantum")
    public HttpResult selectTimeQuantum(Times times) { // startTimeSecond & endTimeSecond = 'yyy-MM-dd HH:mm:ss'
        HttpResult result = new HttpResult();
        result = centerProvider.selectTimeQuantum(times);
        return result;
    }

    /**
     * 配置分析 configuration
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/selectConfiguration")
    public HttpResult selectConfig(Times times) { // startTime='2019-12-15' endTime='2019-12-17'
        HttpResult result = new HttpResult();
        result = centerProvider.selectConfiguration(times);
        return result;
    }

    /**
     * 配置分析 -- 时间点配置数
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/selectNumOfPeople")
    public HttpResult selectNumPeople(Times times) { // startTime='2019-12-15' endTime='2019-12-17'
        HttpResult result = new HttpResult();
        result = centerProvider.selectNumOfPeople(times);
        return result;
    }

    /**
     * 崩溃分析 -- 时间点崩溃人数
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "selectNumOfBreakdown") // startTime='2019-12-23 23:55:00' endTime='2019-12-24 23:55:00'
    public HttpResult selectNumOfBreakDown(Times times) {
        HttpResult result = new HttpResult();
        result = centerProvider.selectNumOfBreakdown(times);
        return result;
    }

    /**
     * 崩溃分析 -- 七个分布图
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/selectBreakdown")
    public HttpResult selectBreakDown(Times times) { // startTime='2019-11-23 00:00:00' endTime='2019-12-25 23:59:59'
        HttpResult result = new HttpResult();
        result = centerProvider.selectBreakDown(times);
        return result;
    }

    /**
     * 崩溃分析 -- 总数
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "/selectBreakdownCount")
    public HttpResult selectBreandownCount(Times times) {
        HttpResult result = new HttpResult();
        result = centerProvider.selectBreakDownCount(times);
        return result;

    }

    /**
     * @api {POST} /frontEnd/queryAreas queryAreas
     * @apiVersion 1.0.0
     * @apiGroup Controller - 基础查询
     * @apiName queryAreas
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"n9uFMAML7V","row1":{},"data":{},"count":1160,"state":true,"message":"g","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryAreas")
    public HttpResult queryAreas() {
        HttpResult result = new HttpResult();
        result = centerProvider.queryAreas();
        return result;
    }

    /**
     * @api {POST} /frontEnd/queryChannels queryChannels
     * @apiVersion 1.0.0
     * @apiGroup Controller - 基础查询
     * @apiName queryChannels
     * @apiDescription 查询全部渠道号
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"0xCP2eF","row1":{},"data":{},"count":4393,"state":true,"message":"e4xkGqwY","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryChannels")
    public HttpResult queryChannels() {
        HttpResult result = new HttpResult();
        result = centerProvider.queryChannels();
        return result;
    }

    /**
     * @api {POST} /frontEnd/queryDaily queryDaily
     * @apiVersion 1.0.0
     * @apiGroup FrontEndController - 综合分析
     * @apiName queryDaily
     * @apiDescription 日报查询
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParam (请求参数) {Number} pageCount 页数
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParamExample 请求参数示例
     * pageCount=138&pageSize=708&startTime=Zu&endTime=dmw&serverId=A&channelId=F7JaD
     * @apiSuccess (响应结果) {Boolean} state 状态
     * @apiSuccess (响应结果) {String} message 信息
     * @apiSuccess (响应结果) {Object} data 日报数据
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count 总条数
     * @apiSuccessExample 响应结果示例
     * {"result":"m7","row1":{},"data":{},"count":556,"state":true,"message":"qW","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryDaily")
    public HttpResult queryDaily(DailyAnalysis daily) {
        HttpResult result = new HttpResult();
        result = centerProvider.queryDaily(daily);
        return result;
    }

    /**
     * @api {POST} /frontEnd/queryAllTrend queryAllTrend
     * @apiVersion 1.0.0
     * @apiGroup FrontEndController - 综合分析
     * @apiName queryAllTrend
     * @apiDescription 总览趋势查询
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParamExample 请求参数示例
     * startTime=85yzFgD&endTime=nVso&serverId=oxGhB&channelId=nJDsq5BwK
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"saRO","row1":{},"data":{},"count":5073,"state":true,"message":"TgWfxbWbM","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "queryAllTrend")
    public HttpResult queryAllTrend(DailyAnalysis dailyAnalysis) {
        HttpResult result = new HttpResult();
        result = centerProvider.queryAllTrend(dailyAnalysis);
        return result;
    }

    /**
     * @api {POST} /frontEnd/queryRetain queryRetain
     * @apiVersion 1.0.0
     * @apiGroup FrontEndController - 综合分析
     * @apiName queryRetain
     * @apiDescription 留存分析
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParamExample 请求参数示例
     * startTime=qpwsh88&endTime=GcC8J&serverId=uz3VIZijJ&channelId=vK4j33i
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"xqTCUq6u","row1":{},"data":{},"count":3218,"state":false,"message":"xc","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "queryRetain")
    public HttpResult queryRetain(DailyAnalysis dailyAnalysis) {
        HttpResult result = new HttpResult();
        result = centerProvider.queryRetain(dailyAnalysis);
        return result;
    }

    /**
     * @api {POST} /frontEnd/queryRealTimeOnline queryRealTimeOnline
     * @apiVersion 1.0.0
     * @apiGroup FrontEndController - 综合分析
     * @apiName queryRealTimeOnline
     * @apiDescription 实时统计 - 在线账号
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParamExample 请求参数示例
     * startTime=0Eema&endTime=8AS3lWfh&serverId=CxChntktJs&channelId=d5IeTyQ
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"JE","row1":{},"data":{},"count":7169,"state":false,"message":"4xiC1SeC","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "queryRealTimeOnline")
    public HttpResult queryRealTimeOnline(Flag flag) {
        HttpResult result = new HttpResult();
        result = centerProvider.queryRealTimeOnline(flag);
        return result;
    }

    /**
     * @api {POST} /frontEnd/queryRealTimeStatistics queryRealTimeStatistics
     * @apiVersion 1.0.0
     * @apiGroup FrontEndController - 综合分析
     * @apiName queryRealTimeStatistics
     * @apiDescription 实时统计 - 注册账号、活跃账号、付费账号、付费金额、实时留存
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParamExample 请求参数示例
     * startTime=8&endTime=1twvh&serverId=t&channelId=JzD5M0
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"t1CKtj8Kpr","row1":{},"data":{},"count":7826,"state":true,"message":"nrNx","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "queryRealTimeStatistics")
    public HttpResult queryRealTimeStatistics(Flag flag) {
        HttpResult result = new HttpResult();
        result = centerProvider.queryRealTimeStatistics(flag);
        return result;
    }

    /**
     * @api {POST} /frontEnd/queryPayForAnalysis queryPayForAnalysis
     * @apiVersion 1.0.0
     * @apiGroup FrontEndController - 综合分析
     * @apiName queryPayForAnalysis
     * @apiDescription 付费分析
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParamExample 请求参数示例
     * startTime=kuVvdIcM&endTime=w5cKXt&serverId=Q4&channelId=V6UnxHf
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"yqL4g2HOzp","row1":{},"data":{},"count":3306,"state":true,"message":"V097HuuYro","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "queryPayForAnalysis")
    public HttpResult queryPayForAnalysis(Flag flag) {
        HttpResult result = new HttpResult();
        result = centerProvider.queryPayForAnalysis(flag);
        return result;
    }

    /**
     * @api {POST} /frontEnd/queryLTVAnalysis queryLTVAnalysis
     * @apiVersion 1.0.0
     * @apiGroup FrontEndController - 综合分析
     * @apiName queryLTVAnalysis
     * @apiDescription LTV查询
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParamExample 请求参数示例
     * startTime=BYlS2Z7a8&endTime=d5rSa&serverId=ciuVWWC3eN&channelId=d2
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"vO","row1":{},"data":{},"count":6509,"state":true,"message":"MTyhsp","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "queryLTVAnalysis")
    public HttpResult queryLTVAnalysis(Times time) {
        HttpResult result = new HttpResult();
        result = centerProvider.queryLTVAnalysis(time);
        return result;
    }

    @CrossOrigin
    @RequestMapping(value = "/hiveTest")
    public HttpResult hiveTest() {
        HttpResult result = new HttpResult();
        result = centerProvider.hiveTest();
        return result;
    }

    @CrossOrigin
    @RequestMapping(value = "/test")
    public HttpResult test() {
        HttpResult result = new HttpResult();
        result = centerProvider.test();
        return result;
    }

    @CrossOrigin
    @RequestMapping(value = "/test2")
    public HttpResult test2() {
        HttpResult result = new HttpResult();
        result = centerProvider.test2();
        return result;
    }

   /*
      数据生成接口
    */

    /**
     * 启动分析 -- 288
     * MyApplicationRunner
     */
//    @CrossOrigin
//    @RequestMapping
//    public HttpResult startTime1() {
//        HttpResult result = new HttpResult();
//        result = centerProvider.startTime1();
//        return result;
//    }
//
//    /**
//     * 启动分析 -- 三张图
//     */
//    @CrossOrigin
//    @RequestMapping
//    public HttpResult startTime2() {
//        HttpResult result = new HttpResult();
//        result = centerProvider.startTime2();
//        return result;
//    }
//
//    /**
//     * 配置分析
//     */
//    @CrossOrigin
//    @RequestMapping
//    public HttpResult configuration1() {
//        HttpResult result = new HttpResult();
//        result = centerProvider.configuration1();
//        return result;
//    }
//
//    /**
//     * 崩溃分析 -- 288
//     *
//     * @return
//     */
//    @CrossOrigin
//    @RequestMapping
//    public HttpResult breakdown1() {
//        HttpResult result = new HttpResult();
//        result = centerProvider.breakdown1();
//        return result;
//    }
//
//    /**
//     * 崩溃数据 -- 七张图
//     *
//     * @return
//     */
//    @CrossOrigin
//    @RequestMapping
//    public HttpResult breakdown2() {
//        HttpResult result = new HttpResult();
//        result = centerProvider.breakdown2();
//        return result;
//    }
}
