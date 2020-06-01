package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.AnalysisData;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;

import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/1/2 11:56
 */
public interface HadoopLogDailyAnalysisService {

    HttpResult queryDaily(DailyAnalysis daily);

    int insert(DailyAnalysis daily);

    Integer hiveSelectRegisterCount(DailyAnalysis daily);

    List<Flag> hiveSelectFirstLogin(DailyAnalysis daily);

    Integer hiveSelectActive(DailyAnalysis time);

    Times hiveSelectTotalMoney(Times time);

    HttpResult queryAreas();

    HttpResult queryChannels();

    List<Flag> hiveSelectRetain(DailyAnalysis t);

    int updateRetain(DailyAnalysis t);

    List<Flag> hiveSelectAreas();

    List<Flag> hiveSelectChannels();

    Integer hiveSelectPCU(DailyAnalysis time);

    List<Flag> hiveSelectActiveList(DailyAnalysis time);

    List<Flag> hiveSelectRegisterList(DailyAnalysis dailyAnalysis);

    List<Flag> hiveSelectFirstLoginList(DailyAnalysis dailyAnalysis);

    List<Flag> hiveSelectPayList(DailyAnalysis dailyAnalysis);

    List<Flag> hiveSelectPayAmountList(DailyAnalysis dailyAnalysis);

    List<Flag> hiveSelectActiveList2(DailyAnalysis dailyAnalysis);

    List<Flag> hiveSelectActiveTodayList(DailyAnalysis dailyAnalysis);

    /*
      分组 -- 区服、渠道号
     */
    List<DailyAnalysis> hiveSelectRoleLoginOut(Times time);

    List<Flag> hiveSelectRegister(Times time);

    List<Flag> hiveSelectFirst(Times time);

    List<Flag> hiveSelectPay(Times time);

    List<Flag> hiveFirstPay(Times time);

    List<Flag> hiveMaxPlayCount(Times time);

    int insertBatch(List<DailyAnalysis> roleList);

    List<Flag> hiveSelectRoleloginOutViewList(Times time);

    List<Flag> hiveSelectFirstLoginViewList(Times t);

    int updateRetain2(List<Flag> dayRetainList);

    List<Flag> selectServerAll();

    List<Flag> selectChannelAll();

    // 日报分析
    List<DailyAnalysis> hiveSelectDailyAnalysis(Times time);

    List<AnalysisData> hiveSelectRetainLast(Times time);

    /**
     * 批量更新留存
     *
     * @param retainList
     * @return
     */
    int updateAllRetainBatch(List<AnalysisData> retainList);
}
