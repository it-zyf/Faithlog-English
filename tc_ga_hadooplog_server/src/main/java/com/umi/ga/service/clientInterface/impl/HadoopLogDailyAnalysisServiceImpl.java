package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.DailyAnalysisDao;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.AnalysisData;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.clientInterface.HadoopLogDailyAnalysisService;
import com.umi.ga.utils.BaseResultUtil;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/1/2 11:56
 */
@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogDailyAnalysisServiceImpl implements HadoopLogDailyAnalysisService {

    // 日志
    protected final Logger log = Logger.getLogger(this.getClass());

    @Autowired
    private DailyAnalysisDao dailyAnalysis;

    /**
     * 日报分析
     *
     * @param daily
     * @return
     */
    @Override
    public HttpResult queryDaily(DailyAnalysis daily) {
        List<DailyAnalysis> dailyAnalysisList = new LinkedList<>();
        List<DailyAnalysis> dailyAnalysisList2 = new LinkedList<>();
        // 日期段
        int pageIndex = Math.max(daily.getPageIndex(), 1);
        int pageSize = daily.getPageSize() == 0 ? 30 : daily.getPageSize();
        int fromIndex = (pageIndex - 1) * pageSize;
        int toIndex = pageIndex * pageSize;
        int count = 0;
        try {
            dailyAnalysisList = dailyAnalysis.selectDaily(daily);
            count = null != dailyAnalysisList ? dailyAnalysisList.size() : 0;
            if (null != dailyAnalysisList && 0 != dailyAnalysisList.size()) {
                for (int i = Math.min(count, fromIndex); i < Math.min(count, toIndex); i++)
                    dailyAnalysisList2.add(dailyAnalysisList.get(i));
            }
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", dailyAnalysisList2);
        }
        return BaseResultUtil.resultSuccess("查询成功", dailyAnalysisList2, null, count);
    }

    @Override
    public HttpResult queryAreas() {
        List<Flag> areasList = new LinkedList<>();
        try {
            areasList = dailyAnalysis.selectServerAll();
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", areasList);
        }
        return BaseResultUtil.resultSuccess("查询成功", areasList);
    }

    @Override
    public HttpResult queryChannels() {
//        List channelsRedis = RedisHelper.Instance().getlistByKey(FrontEnd.CHANNELS);
//        if (null != channelsRedis && 0 != channelsRedis.size()) {
//            return BaseResultUtil.resultSuccess("查询成功", channelsRedis);
//        }
        List<Flag> channelsList = new LinkedList<>();
        try {
            channelsList = dailyAnalysis.selectChannelAll();
//            if (null != channelsList && 0 != channelsList.size()) {
//                RedisHelper.Instance().setlist(FrontEnd.CHANNELS, channelsList);
//                // 设置过期时间
//                RedisHelper.Instance().SetKeyExpireTime(FrontEnd.CHANNELS, 24, TimeUnit.HOURS);
//            }
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", channelsList);
        }
        return BaseResultUtil.resultSuccess("查询成功", channelsList);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int insert(DailyAnalysis daily) {
        return dailyAnalysis.insert(daily);
    }

    @Override
    public List<Flag> hiveSelectAreas() {
        return dailyAnalysis.hiveSelectAreas();
    }

    @Override
    public List<Flag> hiveSelectChannels() {
        return dailyAnalysis.hiveSelectChannels();
    }

    @Override
    public Integer hiveSelectRegisterCount(DailyAnalysis daily) {
        return this.dailyAnalysis.hiveSelectRegisterCount(daily);
    }

    @Override
    public List<Flag> hiveSelectFirstLogin(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectFirstLogin(daily);
    }

    @Override
    public Integer hiveSelectActive(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectActive(daily);
    }

    @Override
    public Times hiveSelectTotalMoney(Times time) {
        return dailyAnalysis.hiveSelectTotalMoney(time);
    }

    @Override
    public Integer hiveSelectPCU(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectPCU(daily);
    }

    @Override
    public List<Flag> hiveSelectActiveList(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectActiveList(daily);
    }

    @Override
    public List<Flag> hiveSelectRegisterList(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectRegisterList(daily);
    }

    @Override
    public List<Flag> hiveSelectFirstLoginList(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectFirstLoginList(daily);
    }

    @Override
    public List<Flag> hiveSelectPayList(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectPayList(daily);
    }

    @Override
    public List<Flag> hiveSelectPayAmountList(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectPayAmountList(daily);
    }

    @Override
    public List<Flag> hiveSelectActiveList2(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectActiveList2(daily);
    }

    @Override
    public List<Flag> hiveSelectActiveTodayList(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectActiveTodayList(daily);
    }

    /**
     * 分组 -- 活跃
     *
     * @param time
     * @return
     */
    @Override
    public List<DailyAnalysis> hiveSelectRoleLoginOut(Times time) {
        return dailyAnalysis.hiveSelectRoleLoginOut(time);
    }

    /**
     * 分组 -- 注册
     *
     * @param time
     * @return
     */
    @Override
    public List<Flag> hiveSelectRegister(Times time) {
        return dailyAnalysis.hiveSelectRegister(time);
    }

    /**
     * 分组 -- 首登
     *
     * @param time
     * @return
     */
    @Override
    public List<Flag> hiveSelectFirst(Times time) {
        return dailyAnalysis.hiveSelectFirst(time);
    }

    /**
     * 分组 -- 支付
     *
     * @param time
     * @return
     */
    @Override
    public List<Flag> hiveSelectPay(Times time) {
        return dailyAnalysis.hiveSelectPay(time);
    }

    /**
     * 分组 -- 首付
     *
     * @param time
     * @return
     */
    @Override
    public List<Flag> hiveFirstPay(Times time) {
        return dailyAnalysis.hiveFirstPay(time);
    }

    /**
     * 分组 -- 最高在线人数
     *
     * @param time
     * @return
     */
    @Override
    public List<Flag> hiveMaxPlayCount(Times time) {
        return dailyAnalysis.hiveMaxPlayCount(time);
    }

    /**
     * 分组 -- 今日活跃 -- 集合
     *
     * @param time
     * @return
     */
    @Override
    public List<Flag> hiveSelectRoleloginOutViewList(Times time) {
        return dailyAnalysis.hiveSelectRoleloginOutViewList(time);
    }

    /**
     * 分组 -- 首登 -- 集合
     *
     * @param t
     * @return
     */
    @Override
    public List<Flag> hiveSelectFirstLoginViewList(Times t) {
        return dailyAnalysis.hiveSelectFirstLoginViewList(t);
    }

    /**
     * 更新留存信息
     *
     * @param dayRetainList
     * @return
     */
    @Override
    public int updateRetain2(List<Flag> dayRetainList) {
        int update = 0;
        if (null != dayRetainList && 0 != dayRetainList.size())
            update = dailyAnalysis.updateBatch(dayRetainList);
        return update;
    }

    /**
     * mysql 中查询区服
     *
     * @return
     */
    @Override
    public List<Flag> selectServerAll() {
        return dailyAnalysis.selectServerAll();
    }

    /**
     * MySQL 中查询渠道号
     *
     * @return
     */
    @Override
    public List<Flag> selectChannelAll() {
        return dailyAnalysis.selectChannelAll();
    }

    /**
     * 批量插入
     *
     * @param roleList
     * @return
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public int insertBatch(List<DailyAnalysis> roleList) {
        int delete = 0, insert = 0;
        if (null != roleList && 0 != roleList.size()) {
            delete = dailyAnalysis.deleteBatch(roleList.get(0));
            insert = dailyAnalysis.insertBatch(roleList);
        }
        return insert;
    }


    @Override
    public List<Flag> hiveSelectRetain(DailyAnalysis daily) {
        return dailyAnalysis.hiveSelectRetain(daily);
    }

    @Override
    public int updateRetain(DailyAnalysis daily) {
        return dailyAnalysis.updateRetain(daily);
    }

    /**
     * 日报分析
     *
     * @param time
     * @return
     */
    @Override
    public List<DailyAnalysis> hiveSelectDailyAnalysis(Times time) {
        return dailyAnalysis.hiveSelectDailyAnalysis(time);
    }

    /**da
     * 日报留存
     *
     * @param time
     * @return
     */
    @Override
    public List<AnalysisData> hiveSelectRetainLast(Times time) {
        return dailyAnalysis.hiveSelectRetainLast(time);
    }

    /**
     * 批量更新留存
     *
     * @param retainList
     * @return
     */
    @Override
    public int updateAllRetainBatch(List<AnalysisData> retainList) {
        int update = 0;
        if (null != retainList && 0 != retainList.size())
            update = dailyAnalysis.updateAllRetainBatch(retainList);
        return update;
    }
}
