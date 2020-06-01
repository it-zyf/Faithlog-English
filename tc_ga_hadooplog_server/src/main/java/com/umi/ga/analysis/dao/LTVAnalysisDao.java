package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.LTVAnalysis;
import com.umi.ga.analysis.model.PayAnalysis;
import com.umi.ga.entitys.AnalysisData;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class LTVAnalysisDao extends BaseMyIbatisDao<LTVAnalysis, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<LTVAnalysis> getEntityClass() {
        return LTVAnalysis.class;
    }

    public int insert(LTVAnalysis ltvAnalysis) {
        return this.db().insert(path + "insert", ltvAnalysis);
    }

    public List<PayAnalysis> queryLTVAnalysis(Times time) {
        return this.db().selectList(path + "queryLTVAnalysis", time);
    }

    public Integer hiveSelectRegisterNumber(Times time) {
        return this.db().selectOne(path + "hiveSelectRegisterNumber", time);
    }

    public List<Flag> hiveSelectFirstLogin(Times time) {
        return this.db().selectList(path + "hiveSelectFirstLogin", time);
    }

    public int updateLTV(Times t) {
        return this.db().update(path + "updateLTV", t);
    }

    /**
     * 批量插入
     *
     * @param ltvList
     * @return
     */
    public int insertBatch(List<LTVAnalysis> ltvList) {
        return this.db().insert(path + "insertBatch", ltvList);
    }

    /**
     * 批量删除
     *
     * @param ltvAnalysis
     * @return
     */
    public int deleteBatch(LTVAnalysis ltvAnalysis) {
        return this.db().delete(path + "deleteBatch", ltvAnalysis);
    }

    /**
     * LTV 分析
     *
     * @param time
     * @return
     */
    public List<AnalysisData> hiveSelectLtvLast(Times time) {
        return this.db().selectList(path + "hiveSelectLtvLast", time);
    }

    /**
     * 批量更新LTV
     *
     * @param ltvLastList
     * @return
     */
    public int updateLTVBatch(List<AnalysisData> ltvLastList) {
        return this.db().update(path + "updateLTVBatch", ltvLastList);
    }
}
