package com.umi.ga.service.clientInterface;

import com.google.api.Http;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;

/**
 * @Author guowenchuang
 * @Date 2020/4/17 16:39
 */
public interface AnalysisService {

    //玩家充值排行
    HttpResult hiveRechargeRanking(Flag flag);

    // 等级流失
    HttpResult hiveLevelAway(Flag flag);

    // 货币产出与消耗数据
    HttpResult hiveQueryCurrency(Flag flag);

    // 物品产出与消耗
    HttpResult hiveQueryGoods(Flag flag);

    // 商城购买
    HttpResult hiveQueryMallLog(Flag flag);

    // 军团列表
    HttpResult hiveQueryLegionLog(Flag flag);

    // 活跃玩家数据
    HttpResult hiveQueryActivePlayer(Flag flag);

    // 全部货币类型
    HttpResult hiveQueryCurrencyType();

    // 全部商店类型
    HttpResult hiveQueryStoreType();

    // 全部vip等级
    HttpResult hiveQueryVipLevel();

    // 付费玩家留存
    HttpResult hiveQueryVipRetain(Flag flag);
}

