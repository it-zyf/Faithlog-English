package com.umi.ga.hadoop_api.provider;

import com.comb.framework.proxy.annotation.ProxyService;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;
import com.umi.ga.service.clientInterface.AnalysisService;
import org.springframework.stereotype.Service;

/**
 * @Author guowenchuang
 * @Date 2020/4/17 16:35
 */
@Service
public class AnalysisProvider {

    @ProxyService
    private AnalysisService analysisService;

    /**
     * 玩家充值排行
     *
     * @param flag
     * @return
     */
    public HttpResult hiveRechargeRanking(Flag flag) {
        return analysisService.hiveRechargeRanking(flag);
    }

    /**
     * 等级流失
     *
     * @param flag
     * @return
     */
    public HttpResult hiveLevelAway(Flag flag) {
        return analysisService.hiveLevelAway(flag);
    }

    /**
     * 查询全部货币类型
     *
     * @return
     */
    public HttpResult hiveQueryCurrencyType() {
        return analysisService.hiveQueryCurrencyType();
    }

    /**
     * 货币产出与消耗数据
     *
     * @param flag
     * @return
     */
    public HttpResult hiveQueryCurrency(Flag flag) {
        return analysisService.hiveQueryCurrency(flag);
    }

    /**
     * 物品产出与消耗
     *
     * @param flag
     * @return
     */
    public HttpResult hiveQueryGoods(Flag flag) {
        return analysisService.hiveQueryGoods(flag);
    }

    /**
     * 查询商城类型
     *
     * @return
     */
    public HttpResult hiveQueryStoreType() {
        return analysisService.hiveQueryStoreType();
    }

    /**
     * 商城购买日志
     *
     * @param flag
     * @return
     */
    public HttpResult hiveQueryMallLog(Flag flag) {
        return analysisService.hiveQueryMallLog(flag);
    }

    /**
     * 军团列表
     *
     * @param flag
     * @return
     */
    public HttpResult hiveQueryLegionLog(Flag flag) {
        return analysisService.hiveQueryLegionLog(flag);
    }


    /**
     * 活跃玩家数据
     *
     * @param flag
     * @return
     */
    public HttpResult hiveQueryActivePlayer(Flag flag) {
        return analysisService.hiveQueryActivePlayer(flag);
    }

    /**
     * 查询全部vip等级
     *
     * @return
     */
    public HttpResult hiveQueryVipLevel() {
        return analysisService.hiveQueryVipLevel();
    }

    /**
     * 查询付费玩家留存
     *
     * @param flag
     * @return
     */
    public HttpResult hiveQueryVipRetain(Flag flag) {
        return analysisService.hiveQueryVipRetain(flag);
    }

}
