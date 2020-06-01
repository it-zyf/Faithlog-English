package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.db.annotation.DbSwitch;
import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.dao.AllTrendDao;
import com.umi.ga.analysis.dao.DailyAnalysisDao;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.analysis.model.PayAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.PropertyCount;
import com.umi.ga.service.clientInterface.HadoopLogAllTrendService;
import com.umi.ga.utils.ArgumentsConver;
import com.umi.ga.utils.BaseResultUtil;
import com.umi.ga.utils.DateHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/1/6 16:46
 */
@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogAllTrendServiceImpl implements HadoopLogAllTrendService {

    @Autowired
    private AllTrendDao allTrendDao;

    @Autowired
    private DailyAnalysisDao dailyAnalysisDao;

    @Override
    public HttpResult queryAllTrend(DailyAnalysis dailyAnalysis) {
        List<DailyAnalysis> dailyList = new ArrayList<>();
        List<DailyAnalysis> dailyList2 = new ArrayList<>();
        int pageIndex = Math.max(dailyAnalysis.getPageIndex(), 1);
        int fromIndex = (pageIndex - 1) * dailyAnalysis.getPageSize();
        int toIndex = pageIndex * dailyAnalysis.getPageSize();
        int count = 0;
        Flag flag = new Flag(dailyAnalysis.getStartTime(), dailyAnalysis.getEndTime(), dailyAnalysis.getServerId(), dailyAnalysis.getChannelId());
        flag = ArgumentsConver.converServerIdAndChannelId(flag);
        PropertyCount pCount = new PropertyCount();
        DailyAnalysis da = new DailyAnalysis();
        try {
            dailyList = dailyAnalysisDao.selectDaily(dailyAnalysis);
            if (null != dailyList && 0 != dailyList.size()) {
                for (DailyAnalysis daily : dailyList) {
                    // 注册
                    pCount.setNumOfregister(daily.getDailyRegister() + pCount.getNumOfregister());
                    // 首登
                    pCount.setNumOfNewPlayer(daily.getNewPlayers() + pCount.getNumOfNewPlayer());
                    // 活跃
                    pCount.setNumOfactive(daily.getActiveNumber() + pCount.getNumOfactive());
                    // 付费人数
                    pCount.setNumOfpay(daily.getPayNumber() + pCount.getNumOfpay());
                    // 付费总额
                    pCount.setPayAmount(daily.getPayAmount().add(pCount.getPayAmount()));
                }
            }
            da = this.hiveQueryNumber(flag);
            pCount.setNumOfactive(0 == da.getActiveNumber() ? pCount.getNumOfactive() : da.getActiveNumber());
            pCount.setNumOfpay(0 == da.getPayNumber() ? pCount.getNumOfpay() : da.getPayNumber());
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", dailyList, pCount, count);
        }
        return BaseResultUtil.resultSuccess("查询成功", dailyList, pCount, count);
    }

    /**
     * 时间段内的活跃玩家数量和付费玩家数量
     *
     * @param flag
     * @return
     */
    @Override
    public DailyAnalysis hiveQueryNumber(Flag flag) {
        ThreadContext.setMethodName("hive");
        DailyAnalysis da = new DailyAnalysis();
        try {
            da = dailyAnalysisDao.selectNumber(flag);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return da;
    }
}
