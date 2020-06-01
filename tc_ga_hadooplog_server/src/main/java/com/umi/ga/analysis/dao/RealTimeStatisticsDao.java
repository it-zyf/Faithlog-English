package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RealTimeStatistics;
import com.umi.ga.entitys.*;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class RealTimeStatisticsDao extends BaseMyIbatisDao<RealTimeStatistics, Long> {

    private String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<RealTimeStatistics> getEntityClass() {
        return RealTimeStatistics.class;
    }

    public List<HeartLog> hiveSelectHeartLog(Times time) {
        return this.db().selectList(path + "hiveSelectHeartLog", time);
    }

    public int insertBatchRTStatistics(List<RealTimeStatistics> rtList) {
        return this.db().insert(path + "insertBatchRTStatistics", rtList);
    }

    public int insertBatchStatisticsRetain(List<RealTimeRetain> rtRetainList) {
        return this.db().insert(path + "insertBatchStatisticsRetain", rtRetainList);
    }

    public List<RealTimeStatistics> selectRealTimeOnline(Times time) {
        return this.db().selectList(path + "selectRealTimeOnline", time);
    }

    public List<RealTimeStatistics> selectRealTimeStatistics(Times time) {
        return this.db().selectList(path + "selectRealTimeStatistics", time);
    }

    public List<RealTimeRetain> selectRealTimeRetain(Times time) {
        return this.db().selectList(path + "selectRealTimeRetain", time);
    }

    public String hiveSelectMaxTime(Times time) {
        return this.db().selectOne(path + "hiveSelectMaxTime", time);
    }

    public List<RealTimeStatistics> hiveRealTimeOnline(Flag flag) {
        return this.db().selectList(path + "hiveRealTimeOnline", flag);
    }

    /**
     * 实时统计中查询总数: 注册.活跃.付费账号.付费金额
     *
     * @param flag
     */
    public RealTimeTotal selectDailyData(Flag flag) {
        return this.db().selectOne(path + "selectDailyData", flag);
    }

    /**
     * 实时统计 -- 注册 288
     *
     * @param flag
     * @return
     */
    public List<RealTimeStatistics> selectRealTimeRegister(Flag flag) {
        return this.db().selectList(path + "selectRealTimeRegister", flag);
    }


    /**
     * 实时统计 -- 活跃 288
     *
     * @param flag
     * @return
     */
    public List<RealTimeStatistics> selectRealTimeActive(Flag flag) {
        return this.db().selectList(path + "selectRealTimeActive", flag);
    }

    /**
     * 实时统计 -- 付费账号 288
     *
     * @param flag
     * @return
     */
    public List<RealTimeStatistics> selectRealTimePayNumber(Flag flag) {
        return this.db().selectList(path + "selectRealTimePayNumber", flag);
    }

    /**
     * 实时统计 -- 付费金额 288
     *
     * @param flag
     * @return
     */
    public List<RealTimeStatistics> selectRealTimePayAmount(Flag flag) {
        return this.db().selectList(path + "selectRealTimePayAmount", flag);
    }

    /**
     * 实时统计 -- 实时留存 24
     *
     * @param flag
     * @return
     */
    public List<RealTimeRetain> selectRealTimeRetainLast(Flag flag) {
        return this.db().selectList(path + "selectRealTimeRetainLast", flag);
    }
}
