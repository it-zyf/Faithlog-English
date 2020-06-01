package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.entitys.AnalysisData;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class DailyAnalysisDao extends BaseMyIbatisDao<DailyAnalysis, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    public Class<DailyAnalysis> getEntityClass() {
        return DailyAnalysis.class;
    }

    public List<DailyAnalysis> selectDaily(DailyAnalysis daily) {
        return this.db().selectList(path + "selectDaily", daily);
    }

    public int insert(DailyAnalysis daily) {
        return this.db().insert(path + "insert", daily);
    }

    public List<Flag> selectServerAll() {
        return this.db().selectList(path + "selectServerAll");
    }

    public List<Flag> selectChannelAll() {
        return this.db().selectList(path + "selectChannelAll");
    }

    public List<Flag> hiveSelectAreas() {
        return this.db().selectList(path + "hiveSelectAreas");
    }

    public List<Flag> hiveSelectChannels() {
        return this.db().selectList(path + "hiveSelectChannels");
    }

    public Integer hiveSelectRegisterCount(DailyAnalysis daily) {
        return this.db().selectOne(path + "hiveSelectRegisterCount", daily);
    }

    public List<Flag> hiveSelectFirstLogin(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectFirstLogin", daily);
    }

    public Integer hiveSelectActive(DailyAnalysis daily) {
        return this.db().selectOne(path + "hiveSelectActive", daily);
    }

    public Times hiveSelectTotalMoney(Times time) {
        return this.db().selectOne(path + "hiveSelectTotalMoney", time);
    }

    public Integer hiveSelectPCU(DailyAnalysis daily) {
        return this.db().selectOne(path + "hiveSelectPCU", daily);
    }

    public List<Flag> hiveSelectRetain(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectRetain", daily);
    }

    public int updateRetain(DailyAnalysis daily) {
        return this.db().update(path + "updateRetain", daily);
    }

    public List<Flag> hiveSelectActiveList(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectActiveList", daily);
    }

    public int selectCount(DailyAnalysis daily) {
        return this.db().selectOne(path + "selectCount", daily);
    }

    public List<Flag> hiveSelectRegisterList(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectRegisterList", daily);
    }

    public List<Flag> hiveSelectFirstLoginList(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectFirstLoginList", daily);
    }

    public List<Flag> hiveSelectPayList(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectPayList", daily);
    }

    public List<Flag> hiveSelectPayAmountList(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectPayAmountList", daily);
    }

    public List<Flag> hiveSelectActiveList2(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectActiveList2", daily);
    }

    public List<Flag> hiveSelectActiveTodayList(DailyAnalysis daily) {
        return this.db().selectList(path + "hiveSelectActiveTodayList", daily);
    }

    public List<Flag> selectServerList() {
        return this.db().selectList(path + "selectServerList");
    }

    public List<Flag> selectChannelList() {
        return this.db().selectList(path + "selectChannelList");
    }

    public List<DailyAnalysis> hiveSelectRoleLoginOut(Times time) {
        return this.db().selectList(path + "hiveSelectRoleLoginOut", time);
    }

    public List<Flag> hiveSelectRegister(Times time) {
        return this.db().selectList(path + "hiveSelectRegister", time);
    }

    public List<Flag> hiveSelectFirst(Times time) {
        return this.db().selectList(path + "hiveSelectFirst", time);
    }

    public List<Flag> hiveSelectPay(Times time) {
        return this.db().selectList(path + "hiveSelectPay", time);
    }

    public List<Flag> hiveFirstPay(Times time) {
        return this.db().selectList(path + "hiveFirstPay", time);
    }

    public List<Flag> hiveMaxPlayCount(Times time) {
        return this.db().selectList(path + "hiveMaxPlayCount", time);
    }

    public int insertBatch(List<DailyAnalysis> roleList) {
        return this.db().insert(path + "insertBatch", roleList);
    }

    public List<Flag> hiveSelectRoleloginOutViewList(Times time) {
        return this.db().selectList(path + "hiveSelectRoleloginOutViewList", time);
    }

    public List<Flag> hiveSelectFirstLoginViewList(Times t) {
        return this.db().selectList(path + "hiveSelectFirstLoginViewList", t);
    }

    public int updateBatch(List<Flag> dayRetainList) {
        return this.db().update(path + "updateBatch", dayRetainList);
    }

    public DailyAnalysis queryData(Times time) {
        return this.db().selectOne(path + "queryData", time);
    }

    /**
     * 日报分析
     *
     * @param time
     * @return
     */
    public List<DailyAnalysis> hiveSelectDailyAnalysis(Times time) {
        return this.db().selectList(path + "hiveSelectDailyAnalysis", time);
    }

    /**
     * 日报留存
     *
     * @param time
     * @return
     */
    public List<AnalysisData> hiveSelectRetainLast(Times time) {
        return this.db().selectList(path + "hiveSelectRetainLast", time);
    }

    /**
     * 删除
     *
     * @param dailyAnalysis
     * @return
     */
    public int deleteBatch(DailyAnalysis dailyAnalysis) {
        return this.db().delete(path + "deleteBatch", dailyAnalysis);
    }

    /**
     * 批量更新留存
     *
     * @param retainList
     * @return
     */
    public int updateAllRetainBatch(List<AnalysisData> retainList) {
        return this.db().update(path + "updateAllRetainBatch", retainList);
    }

    /**
     * 查询时间段内的活跃人数和付费人数
     *
     * @param flag
     * @return
     */
    public DailyAnalysis selectNumber(Flag flag) {
        return this.db().selectOne(path + "selectNumber", flag);
    }

    public DailyAnalysis hiveQueryData(Times time) {
        return this.db().selectOne(path + "hiveQueryData", time);
    }
}
