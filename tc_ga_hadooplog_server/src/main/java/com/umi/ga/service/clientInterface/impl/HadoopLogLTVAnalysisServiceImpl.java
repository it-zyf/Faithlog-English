package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.LTVAnalysisDao;
import com.umi.ga.analysis.model.LTVAnalysis;
import com.umi.ga.analysis.model.PayAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.AnalysisData;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.clientInterface.HadoopLogLTVAnalysisService;
import com.umi.ga.utils.BaseResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/2/12 17:56
 */
@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogLTVAnalysisServiceImpl implements HadoopLogLTVAnalysisService {

    @Autowired
    private LTVAnalysisDao ltvAnalysisDao;

    @Override
    public HttpResult queryLTVAnalysis(Times time) {
        List<PayAnalysis> ltvList = new LinkedList<>();
        int count = 0;
        try {
            ltvList = ltvAnalysisDao.queryLTVAnalysis(time);
            count = null == ltvList ? 0 : ltvList.size();
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", ltvList, null, count);
        }
        return BaseResultUtil.resultSuccess("查询成功", ltvList, null, count);
    }

    /**
     * 插入
     *
     * @param ltvAnalysis
     * @return
     */
    @Override
    public int insert(LTVAnalysis ltvAnalysis) {
        int insert = 0;
        insert = ltvAnalysisDao.insert(ltvAnalysis);
        return insert;
    }

    @Override
    public Integer hiveSelectRegisterNumber(Times time) {
        return this.ltvAnalysisDao.hiveSelectRegisterNumber(time);
    }

    @Override
    public List<Flag> hiveSelectFirstLogin(Times time) {
        return this.ltvAnalysisDao.hiveSelectFirstLogin(time);
    }

    @Override
    public int updateLTV(Times t) {
        return this.ltvAnalysisDao.updateLTV(t);
    }

    /**
     * 批量插入
     *
     * @param ltvList
     * @return
     */
    @Override
    public int insertBatch(List<LTVAnalysis> ltvList) {
        int insert = 0, delete = 0;
        if (null != ltvList && 0 != ltvList.size())
            delete = ltvAnalysisDao.deleteBatch(ltvList.get(0));
        insert = ltvAnalysisDao.insertBatch(ltvList);
        return insert;
    }

    /**
     * LTV分析
     *
     * @param time
     * @return
     */
    @Override
    public List<AnalysisData> hiveSelectLtvLast(Times time) {
        return this.ltvAnalysisDao.hiveSelectLtvLast(time);
    }

    /**
     * 批量更新LTV
     *
     * @param ltvLastList
     * @return
     */
    @Override
    public int updateLTVBatch(List<AnalysisData> ltvLastList) {
        int update = 0;
        if (null != ltvLastList && 0 != ltvLastList.size())
            update = ltvAnalysisDao.updateLTVBatch(ltvLastList);
        return update;
    }
}
