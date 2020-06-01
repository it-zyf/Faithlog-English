package com.umi.ga.service.clientInterface;

import com.umi.ga.common.PagingResult;
import com.umi.ga.entitys.Condition;

public interface DetailedLogService {

    public PagingResult hive_select_Loginout_log(Condition act);

    public PagingResult hive_select_Recharge_Success(Condition act);
    public PagingResult hive_select_RoleLog(Condition act);
    public PagingResult hive_select_GuideLog(Condition act);
    public PagingResult hive_select_TaskLog(Condition act);
    public PagingResult hive_select_Money_ChangeLog(Condition act);
    public PagingResult hive_select_Level_ChangeLog(Condition act);
    public PagingResult hive_select_Recharge_StepLog(Condition act);
    public PagingResult hive_select_LuckyDraw(Condition act);
    public PagingResult hive_select_Auction(Condition act);
    public PagingResult hive_select_RoleChat(Condition act);
    public PagingResult hive_select_BuyGoods(Condition act);
    public PagingResult hive_select_RoleGetMail(Condition act);
    public PagingResult hive_select_ArticlesFlowing(Condition act);
    public PagingResult hive_queryGrowth_FundGrowth(Condition act);
    public PagingResult hive_findListByActive(Condition act);
    public PagingResult hive_query_timeOutIn(Condition act);
    public PagingResult hive_query_killBoss(Condition act);
    public PagingResult hive_query_killDrop(Condition act);
    public PagingResult hive_query_PK(Condition act);
    public PagingResult hive_query_legion(Condition act);
    public PagingResult hive_query_crossHarry(Condition act);

    public PagingResult test(Condition act);

}
