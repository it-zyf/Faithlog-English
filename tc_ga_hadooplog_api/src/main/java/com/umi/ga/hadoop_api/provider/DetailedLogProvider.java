package com.umi.ga.hadoop_api.provider;

import com.comb.framework.proxy.annotation.ProxyService;
import com.umi.ga.common.PagingResult;
import com.umi.ga.entitys.Condition;
import com.umi.ga.service.clientInterface.DetailedLogService;
import org.springframework.stereotype.Service;
@Service
public class DetailedLogProvider {
@ProxyService
private DetailedLogService detailedLogService;

    public PagingResult select_Loginout_log(Condition ct) {
        return detailedLogService.hive_select_Loginout_log(ct);
    }

    public PagingResult select_Recharge_Success(Condition ct) {
        return detailedLogService.hive_select_Recharge_Success(ct);
    }

    public PagingResult select_RoleLog(Condition ct) {
        return detailedLogService.hive_select_RoleLog(ct);
    }

    public PagingResult select_GuideLog(Condition ct) {
        return detailedLogService.hive_select_GuideLog(ct);
    }
    public PagingResult select_TaskLog(Condition ct) {
        return detailedLogService.hive_select_TaskLog(ct);
    }
    public PagingResult select_Money_ChangeLog(Condition ct) {
        return detailedLogService.hive_select_Money_ChangeLog(ct);
    }
    public PagingResult select_Level_ChangeLog(Condition ct) {
        return detailedLogService.hive_select_Level_ChangeLog(ct);
    }
    public PagingResult select_Recharge_StepLog(Condition ct) {
        return detailedLogService.hive_select_Recharge_StepLog(ct);
    }
    public PagingResult select_LuckyDraw(Condition ct) {
        return detailedLogService.hive_select_LuckyDraw(ct);
    }
    public PagingResult select_Auction(Condition ct) {
        return detailedLogService.hive_select_Auction(ct);
    }
    public PagingResult select_RoleChat(Condition ct) {
        return detailedLogService.hive_select_RoleChat(ct);
    }
    public PagingResult select_BuyGoods(Condition ct) {
        return detailedLogService.hive_select_BuyGoods(ct);
    }
    public PagingResult select_RoleGetMail(Condition ct) {
        return detailedLogService.hive_select_RoleGetMail(ct);
    }
    public PagingResult select_ArticlesFlowing(Condition ct) {
        return detailedLogService.hive_select_ArticlesFlowing(ct);
    }
    public PagingResult queryGrowth_FundGrowth(Condition ct) {
        return detailedLogService.hive_queryGrowth_FundGrowth(ct);
    }
    public PagingResult findListByActive(Condition ct) {
        return detailedLogService.hive_findListByActive(ct);
    }
    public PagingResult query_timeOutIn(Condition ct) {
        return detailedLogService.hive_query_timeOutIn(ct);
    }
    public PagingResult query_killBoss(Condition ct) {
        return detailedLogService.hive_query_killBoss(ct);
    }
    public PagingResult query_killDrop(Condition ct) {
        return detailedLogService.hive_query_killDrop(ct);
    }
    public PagingResult query_PK(Condition ct) {
        return detailedLogService.hive_query_PK(ct);
    }
    public PagingResult query_legion(Condition ct) {
        return detailedLogService.hive_query_legion(ct);
    }
    public PagingResult query_crossHarry(Condition ct) {
        return detailedLogService.hive_query_crossHarry(ct);
    }


    public PagingResult test(Condition ct) {
        return detailedLogService.test(ct);
    }

}
