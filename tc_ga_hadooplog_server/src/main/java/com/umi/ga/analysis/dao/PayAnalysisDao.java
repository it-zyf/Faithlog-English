package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.analysis.model.PayAnalysis;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class PayAnalysisDao extends BaseMyIbatisDao<PayAnalysis, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<PayAnalysis> getEntityClass() {
        return PayAnalysis.class;
    }

    public int insert(PayAnalysis payAnalysis) {
        return this.db().insert(path + "insert", payAnalysis);
    }

    public List<PayAnalysis> queryPayForAnalysis(Times time) {
        return this.db().selectList(path + "queryPayForAnalysis", time);
    }

    public Double hiveSelectPayAmount(Times time) {
        return this.db().selectOne(path + "hiveSelectPayAmount", time);
    }

    public Integer hiveSelectPayNumber(Times time) {
        return this.db().selectOne(path + "hiveSelectPayNumber", time);
    }

    public Double hiveSelectFirstPayAmount(Times time) {
        return this.db().selectOne(path + "hiveSelectFirstPayAmount", time);
    }

    public Integer hiveSelectFirstPayNumber(Times time) {
        return this.db().selectOne(path + "hiveSelectFirstPayNumber", time);

    }

    public Integer hiveSelectPayCount(Times time) {
        return this.db().selectOne(path + "hiveSelectPayCount", time);
    }

    public Integer hiveSelectActiveNumber(Times time) {
        return this.db().selectOne(path + "hiveSelectActiveNumber", time);
    }

    public List<Flag> selectServerList() {
        return this.db().selectList(path + "selectServerList");
    }

    public List<Flag> selectChannelList() {
        return this.db().selectList(path + "selectChannelList");
    }

    public List<Flag> hiveSelectPayList(DailyAnalysis dailyAnalysis) {
        return this.db().selectList(path + "hiveSelectPayList", dailyAnalysis);
    }

    public List<Flag> hiveSelectPayAmountList(DailyAnalysis dailyAnalysis) {
        return this.db().selectList(path + "hiveSelectPayAmountList", dailyAnalysis);
    }

    public int isnertBatch(List<PayAnalysis> payAnalysisList) {
        return this.db().insert(path + "insertBatch", payAnalysisList);
    }
}
