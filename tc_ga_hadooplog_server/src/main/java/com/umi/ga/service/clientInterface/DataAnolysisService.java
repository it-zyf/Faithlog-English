package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.AuctionLog;
import com.umi.ga.analysis.model.ServerEarlyWarning;
import com.umi.ga.common.PagingResult;
import com.umi.ga.entitys.Condition;
import com.umi.ga.entitys.RankingEntity;

public interface DataAnolysisService {

    PagingResult hive_select_LossOfTask_log(Condition act);
    PagingResult hive_select_LevelDistribution(Condition act);
    PagingResult hive_select_OccupationDistribution(Condition act);
    PagingResult hive_select_Auction(AuctionLog act);
    PagingResult hive_select_rankingList(RankingEntity re);
    PagingResult hive_active_involved(Condition ct);
    PagingResult hive_severEarlyWarning(ServerEarlyWarning sew);
    PagingResult hive_serverDailyOnlineTime(ServerEarlyWarning sew);
}
