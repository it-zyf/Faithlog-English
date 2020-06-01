package com.umi.ga.hadoop_api.provider;

import com.comb.framework.proxy.annotation.ProxyService;
import com.umi.ga.analysis.model.AuctionLog;
import com.umi.ga.analysis.model.ServerEarlyWarning;
import com.umi.ga.common.PagingResult;
import com.umi.ga.entitys.Condition;
import com.umi.ga.entitys.RankingEntity;
import com.umi.ga.service.clientInterface.DataAnolysisService;
import org.springframework.stereotype.Service;

@Service
public class DataAnalysisProvider {
    @ProxyService
    private DataAnolysisService dataAnolysisService;


    public PagingResult select_LossOfTask_log(Condition ct) {
        return dataAnolysisService.hive_select_LossOfTask_log(ct);
    }

    public PagingResult select_LevelDistribution(Condition ct) {
        return dataAnolysisService.hive_select_LevelDistribution(ct);
    }
    public PagingResult select_OccupationDistribution(Condition ct) {
        return dataAnolysisService.hive_select_OccupationDistribution(ct);
    }
    public PagingResult select_Auction(AuctionLog ct) {
        return dataAnolysisService.hive_select_Auction(ct);
    }

    public PagingResult select_rankingList(RankingEntity re) {
        return dataAnolysisService.hive_select_rankingList(re);
    }
    public PagingResult active_involved(Condition ct) {
        return dataAnolysisService.hive_active_involved(ct);
    }
    public PagingResult severEarlyWarning(ServerEarlyWarning sew) {
        return dataAnolysisService.hive_severEarlyWarning(sew);
    }
    public PagingResult serverDailyOnlineTime(ServerEarlyWarning sew) {
        return dataAnolysisService.hive_serverDailyOnlineTime(sew);
    }
}
