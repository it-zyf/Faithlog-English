package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.db.annotation.DbSwitch;
import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.dao.DailyAnalysisDao;
import com.umi.ga.analysis.dao.PayAnalysisDao;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.analysis.model.PayAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.clientInterface.HadoopLogPayForAnalysisService;
import com.umi.ga.utils.ArgumentsConver;
import com.umi.ga.utils.BaseResultUtil;
import com.umi.ga.utils.DateHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/2/10 17:11
 */
@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogPayForAnalysisServiceImpl implements HadoopLogPayForAnalysisService {

    @Autowired
    private PayAnalysisDao payAnalysisDao;

    @Autowired
    private DailyAnalysisDao dailyAnalysisDao;

    /**
     * 付费分析
     *
     * @param flag
     * @return
     */
    @Override
    public HttpResult queryPayForAnalysis(Flag flag) {
        flag = ArgumentsConver.converServerIdAndChannelId(flag);
        List<DailyAnalysis> dailyList = new ArrayList<>();
        List<PayAnalysis> payList = new ArrayList<>();
        int pageIndex = Math.max(flag.getPageIndex(), 1);
        int fromIndex = (pageIndex - 1) * flag.getPageSize();
        int toIndex = pageIndex * flag.getPageSize();
        int count = 0;
        DailyAnalysis dailyAnalysis = new DailyAnalysis(flag.getStartTime(), flag.getEndTime(), flag.getServerId(), flag.getChannelId());
        PayAnalysis payAnalysis = new PayAnalysis();
        DailyAnalysis da = new DailyAnalysis();
        try {
            dailyList = dailyAnalysisDao.selectDaily(dailyAnalysis);
            if (null != dailyList && 0 != dailyList.size()) {
                for (DailyAnalysis daily : dailyList) {
                    PayAnalysis pay = new PayAnalysis();
                    pay.setTimedate(daily.getTimedate());
                    pay.setActiveNumber(daily.getActiveNumber());
                    pay.setArppu(daily.getArppu());
                    pay.setArpu(daily.getArpu());
                    pay.setFirstPayAmount(daily.getFirstAmount());
                    // 首付总额
                    payAnalysis.setFirstPayAmount(payAnalysis.getFirstPayAmount().add(daily.getFirstAmount()));
                    pay.setFirstPayNumber(daily.getFirstNumber());
                    // 首付账号
                    payAnalysis.setFirstPayNumber(payAnalysis.getFirstPayNumber() + daily.getFirstNumber());
                    pay.setPayAmount(daily.getPayAmount());
                    // 付费总额
                    payAnalysis.setPayAmount(payAnalysis.getPayAmount().add(daily.getPayAmount()));
                    pay.setPayNumber(daily.getPayNumber());
                    // 付费账号
                    payAnalysis.setPayNumber(payAnalysis.getPayNumber() + daily.getPayNumber());
                    pay.setPaycount(daily.getPayCount());
                    // 付费次数
                    payAnalysis.setPaycount(payAnalysis.getPaycount() + daily.getGameNumber());
                    pay.setRate(daily.getRate());
                    payList.add(pay);
                }
            }
            da = this.hiveQueryNumber(flag);
            payAnalysis.setActiveNumber(0 == da.getActiveNumber() ? payAnalysis.getActiveNumber() : da.getActiveNumber());
            payAnalysis.setPayNumber(0 == da.getPayNumber() ? payAnalysis.getPayNumber() : da.getPayNumber());
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", payList, payAnalysis);
        }
        return BaseResultUtil.resultSuccess("查询成功", payList, payAnalysis);
    }

    /**
     * 时间段内的活跃玩家数量和付费玩家数量
     *
     * @param flag
     * @return
     */
    private DailyAnalysis hiveQueryNumber(Flag flag) {
        ThreadContext.setMethodName("hive");
        DailyAnalysis da = new DailyAnalysis();
        try {
            da = dailyAnalysisDao.selectNumber(flag);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return da;
    }

    /**
     * 插入
     *
     * @param payAnalysis
     * @return
     */
    @Override
    public int insert(PayAnalysis payAnalysis) {
        int num = 0;
        num = payAnalysisDao.insert(payAnalysis);
        return num;
    }

    /**
     * 支付金额
     *
     * @param time
     * @return
     */
    @Override
    public Double hiveSelectPayAmount(Times time) {
        return payAnalysisDao.hiveSelectPayAmount(time);
    }

    /**
     * 支付账号
     *
     * @param time
     * @return
     */
    @Override
    public Integer hiveSelectPayNumber(Times time) {
        return payAnalysisDao.hiveSelectPayNumber(time);
    }

    /**
     * 首付金额
     *
     * @param time
     * @return
     */
    @Override
    public Double hiveSelectFirstPayAmount(Times time) {
        return payAnalysisDao.hiveSelectFirstPayAmount(time);
    }

    /**
     * 首付账号
     *
     * @param time
     * @return
     */
    @Override
    public Integer hiveSelectFirstPayNumber(Times time) {
        return payAnalysisDao.hiveSelectFirstPayNumber(time);
    }

    /**
     * 支付次数
     *
     * @param time
     * @return
     */
    @Override
    public Integer hiveSelectPayCount(Times time) {
        return payAnalysisDao.hiveSelectPayCount(time);
    }

    /**
     * 活跃账号 -- 计数
     *
     * @param time
     * @return
     */
    @Override
    public Integer hiveSelectActiveNumber(Times time) {
        return payAnalysisDao.hiveSelectActiveNumber(time);
    }

    /**
     * 付费账号 -- 集合
     *
     * @param dailyAnalysis
     * @return
     */
    @Override
    public List<Flag> hiveSelectPayList(DailyAnalysis dailyAnalysis) {
        return payAnalysisDao.hiveSelectPayList(dailyAnalysis);
    }

    /**
     * 付费金额 -- 集合
     *
     * @param dailyAnalysis
     * @return
     */
    @Override
    public List<Flag> hiveSelectPayAmountList(DailyAnalysis dailyAnalysis) {
        return payAnalysisDao.hiveSelectPayAmountList(dailyAnalysis);
    }

    /**
     * 批量插入
     *
     * @param payAnalysisList
     * @return
     */
    @Override
    public int insertBatch(List<PayAnalysis> payAnalysisList) {
        int insert = 0;
        if (null != payAnalysisList && 0 != payAnalysisList.size())
            insert = payAnalysisDao.isnertBatch(payAnalysisList);
        return insert;
    }

}
