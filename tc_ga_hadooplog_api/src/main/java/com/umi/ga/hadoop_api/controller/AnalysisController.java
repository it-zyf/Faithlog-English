package com.umi.ga.hadoop_api.controller;


import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;
import com.umi.ga.hadoop_api.provider.AnalysisProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author guowenchuang
 * @Date 2020/4/17 16:31
 */
@Component
@RestController
@RequestMapping(value = "/analysis")
public class AnalysisController {

    @Autowired
    private AnalysisProvider analysisProvider;

    /**
     * @api {POST} /analysis/rechargeRanking rechargeRanking
     * @apiVersion 1.0.0
     * @apiGroup AnalysisController - 排行分析
     * @apiName rechargeRanking
     * @apiDescription 玩家充值排行
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParam (请求参数) {Number} pageIndex 页数
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParamExample 请求参数示例
     * pageIndex=5400&pageSize=5464&startTime=cimEITIhB&endTime=Ezh&serverId=pi6FdU&channelId=iPfku
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"icplCyh","row1":{},"data":{},"count":760,"state":true,"message":"2rEv","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/rechargeRanking")
    public HttpResult rechargeRanking(Flag flag) {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveRechargeRanking(flag);
        return result;
    }

    /**
     * @api {POST} /analysis/levelAway levetAway
     * @apiVersion 1.0.0
     * @apiGroup AnalysisController - 流失分析
     * @apiName levetAway
     * @apiDescription 等级流失
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParam (请求参数) {Number} pageIndex 页数
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParamExample 请求参数示例
     * toIndex=7951&pageIndex=3295&pageSize=1281&startTime=B4x&endTime=V&serverId=yq&channelId=PS4cl&fromIndex=4841
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"qT","row1":{},"data":{},"count":5450,"state":false,"message":"CawizC","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/levelAway")
    public HttpResult levetAway(Flag flag) {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveLevelAway(flag);
        return result;
    }

    /**
     * @api {POST} /analysis/queryCurrencyType queryCurrencyType
     * @apiVersion 1.0.0
     * @apiGroup Controller - 基础查询
     * @apiName queryCurrencyType
     * @apiDescription 查询货币类型
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"Qd","row1":{},"data":{},"count":8255,"state":true,"message":"caL","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryCurrencyType")
    public HttpResult queryCurrencyType() {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryCurrencyType();
        return result;
    }

    /**
     * @api {POST} /analysis/queryCurrency queryCurrency
     * @apiVersion 1.0.0
     * @apiGroup AnalysisController - 游戏数据
     * @apiName queryCurrency
     * @apiDescription 货币产出与消耗
     * @apiParam (请求参数) {String} flag 1:产出, 2:消耗
     * @apiParam (请求参数) {String} type 货币类型（null:查询全部货币类型）
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParam (请求参数) {Number} pageIndex 页数
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParamExample 请求参数示例
     * flag=fQe&pageIndex=9440&pageSize=7857&startTime=H77GI&endTime=GxQjUJ71&type=weq240y&serverId=jlxp&channelId=dchtPX
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"sIawk3gO","row1":{},"data":{},"count":4449,"state":true,"message":"m0sc3ORL5","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryCurrency")
    public HttpResult queryCurrency(Flag flag) {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryCurrency(flag);
        return result;
    }

    /**
     * @api {POST} /analysis/queryGoods queryGoods
     * @apiVersion 1.0.0
     * @apiGroup AnalysisController - 游戏数据
     * @apiName queryGoods
     * @apiDescription 物品产出与消耗
     * @apiParam (请求参数) {String} flag 1:产出, 2:消耗
     * @apiParam (请求参数) {String} type 物品id（null:查询全部物品id）
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParam (请求参数) {Number} pageIndex 页数
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParamExample 请求参数示例
     * flag=lJ25E3W&pageIndex=6316&pageSize=7263&startTime=kkNuws2&endTime=Q30k&type=m1C&serverId=e8NZl&channelId=baC
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"FHy9icv","row1":{},"data":{},"count":6038,"state":false,"message":"p4h1r6jcS","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryGoods")
    public HttpResult queryGoods(Flag flag) {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryGoods(flag);
        return result;
    }

    /**
     * @api {POST} /analysis/queryStoreType queryStoreType
     * @apiVersion 1.0.0
     * @apiGroup Controller - 基础查询
     * @apiName queryStoreType
     * @apiDescription 查询全部商店
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"ISr7q","row1":{},"data":{},"count":9492,"state":true,"message":"V1","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryStoreType")
    public HttpResult queryStoreType() {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryStoreType();
        return result;
    }

    /**
     * @api {POST} /analysis/queryMall queryMall
     * @apiVersion 1.0.0
     * @apiGroup AnalysisController - 游戏数据
     * @apiName queryMall
     * @apiDescription 商城狗购买日志
     * @apiParam (请求参数) {String} type 商店id（null:全部商店）
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParam (请求参数) {Number} pageIndex 页数
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParamExample 请求参数示例
     * pageIndex=3743&pageSize=6719&startTime=8o3eZLpLve&endTime=mD2je7H&type=VW0OY3BLR&serverId=8r5XX3nvZI&channelId=Ml
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"JH5ZWgeqbC","row1":{},"data":{},"count":5710,"state":false,"message":"WrxFblz5","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryMall")
    public HttpResult queryMall(Flag flag) {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryMallLog(flag);
        return result;
    }

    /**
     * @api {POST} /analysis/queryLegion queryLegion
     * @apiVersion 1.0.0
     * @apiGroup AnalysisController - 游戏数据
     * @apiName queryLegion
     * @apiDescription 军团列表查询
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParam (请求参数) {Number} pageIndex 页数
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParamExample 请求参数示例
     * pageIndex=848&pageSize=6728&startTime=tun8LgCMg&endTime=tb&serverId=1V&channelId=c
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"7RUFEfp1HL","row1":{},"data":{},"count":3241,"state":false,"message":"m1","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryLegion")
    public HttpResult queryLegion(Flag flag) {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryLegionLog(flag);
        return result;
    }

    /**
     * @api {POST} /analysis/queryActivePlayer queryActivePlayer
     * @apiVersion 1.0.0
     * @apiGroup AnalysisController - 游戏数据
     * @apiName queryActivePlayer
     * @apiDescription 活动玩家数据 - 查询指定日期段内在最近七天活跃玩家数据
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParam (请求参数) {Number} pageIndex 页数
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParamExample 请求参数示例
     * pageIndex=7423&pageSize=9324&startTime=iY0vDZ&endTime=GVS&serverId=o&channelId=kJ
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"peVGQ","row1":{},"data":{},"count":4619,"state":true,"message":"juDSZliV1U","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryActivePlayer")
    public HttpResult queryActivePlayer(Flag flag) {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryActivePlayer(flag);
        return result;
    }

    /**
     * @api {POST} /analysis/queryVipLevel queryVipLevel
     * @apiVersion 1.0.0
     * @apiGroup Controller - 基础查询
     * @apiName queryVipLevel
     * @apiDescription 查询全部VIP等级
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"Y18sdlL","row1":{},"data":{},"count":4664,"state":false,"message":"iBDgtWX","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryVipLevel")
    public HttpResult queryVipLevel() {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryVipLevel();
        return result;
    }

    /**
     * @api {POST} /analysis/queryVipRetain queryVipRetain
     * @apiVersion 1.0.0
     * @apiGroup AnalysisController - 流失分析
     * @apiName queryVipRetain
     * @apiDescription 付费玩家留存
     * @apiParam (请求参数) {String} type VIP等级 (null:全部VIP等级 )
     * @apiParam (请求参数) {String} serverId 区服
     * @apiParam (请求参数) {String} channelId 渠道号
     * @apiParam (请求参数) {String} startTime 开始日期
     * @apiParam (请求参数) {String} endTime 结束日期
     * @apiParam (请求参数) {Number} pageIndex 页数
     * @apiParam (请求参数) {Number} pageSize 条数
     * @apiParamExample 请求参数示例
     * pageIndex=6853&pageSize=7028&startTime=vb6&endTime=0qUGhnp&type=D&serverId=dER4B41U1&channelId=nE8oTZ
     * @apiSuccess (响应结果) {Boolean} state
     * @apiSuccess (响应结果) {String} message
     * @apiSuccess (响应结果) {Object} data
     * @apiSuccess (响应结果) {Object} rows
     * @apiSuccess (响应结果) {Object} row1
     * @apiSuccess (响应结果) {Object} row2
     * @apiSuccess (响应结果) {String} result
     * @apiSuccess (响应结果) {Number} count
     * @apiSuccessExample 响应结果示例
     * {"result":"3","row1":{},"data":{},"count":6683,"state":true,"message":"O5leSeDeiD","rows":{},"row2":{}}
     */
    @CrossOrigin
    @RequestMapping(value = "/queryVipRetain")
    public HttpResult queryVipRetain(Flag flag) {
        HttpResult result = new HttpResult();
        result = analysisProvider.hiveQueryVipRetain(flag);
        return result;
    }
}
