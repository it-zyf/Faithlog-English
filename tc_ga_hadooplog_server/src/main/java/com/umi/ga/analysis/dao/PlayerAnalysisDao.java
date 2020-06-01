package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.PlayerAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.*;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/4/17 19:53
 */
@Component
public class PlayerAnalysisDao extends BaseMyIbatisDao<PlayerAnalysis, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<PlayerAnalysis> getEntityClass() {
        return PlayerAnalysis.class;
    }

    /**
     * 玩家充值排行
     *
     * @param flag
     * @return
     */
    public List<PlayerAnalysis> queryRechargeRanking(Flag flag) {
        return this.db().selectList(path + "queryRechargeRanking", flag);
    }

    /**
     * 等级流失
     *
     * @param flag
     * @return
     */
    public List<Flag> hiveLevelAway(Flag flag) {
        return this.db().selectList(path + "hiveLevelAway", flag);
    }


    /**
     * 全部货币类型
     *
     * @return
     */
    public List<CurrencyData> hiveQueryCurrencyType() {
        return this.db().selectList(path + "hiveQueryCurrencyType");
    }

    /**
     * 货币产出与消耗
     *
     * @param flag
     * @return
     */
    public List<CurrencyData> hiveQueryCurrency(Flag flag) {
        return this.db().selectList(path + "hiveQueryCurrency", flag);
    }

    /**
     * 物品产出与消耗
     *
     * @param flag
     * @return
     */
    public List<Flag> hiveQueryGoods(Flag flag) {
        return this.db().selectList(path + "hiveQueryGoods", flag);
    }

    /**
     * 全部商店类型
     *
     * @return
     */
    public List<MallLog> hiveQueryStoreType() {
        return this.db().selectList(path + "hiveQueryStoreType");
    }

    /**
     * 商城日志
     *
     * @param flag
     */
    public List<MallLog> hiveQueryMallLog(Flag flag) {
        return this.db().selectList(path + "hiveQueryMallLog", flag);
    }


    /**
     * 军团列表
     *
     * @param flag
     * @return
     */
    public List<LegionLog> hiveQueryLegionLog(Flag flag) {
        return this.db().selectList(path + "hiveQueryLegionLog", flag);
    }

    /**
     * 活跃玩家数据
     *
     * @param flag
     * @return
     */
    public List<PlayerAnalysis> hiveQueryActivePlayer(Flag flag) {
        return this.db().selectList(path + "hiveQueryActivePlayer", flag);
    }

    /**
     * 查询全部vip等级
     *
     * @return
     */
    public List<VipRetain> hiveQueryVipLevel() {
        return this.db().selectList(path + "hiveQueryVipLevel");
    }

    /**
     * 查询
     *
     * @param flag
     * @return
     */
    public List<VipRetain> hiveQueryVipRetain(Flag flag) {
        return this.db().selectList(path + "hiveQueryVipRetain", flag);
    }


}
