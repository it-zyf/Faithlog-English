package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.DailyAnalysisDao;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.service.clientInterface.HadoopLogRetainAnalysisService;
import com.umi.ga.utils.BaseResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/1/6 20:44
 */
@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogRetainAnalysisServiceImpl implements HadoopLogRetainAnalysisService {

    @Autowired
    private DailyAnalysisDao dailyAnalysisDao;

    @Override
    public HttpResult queryRetain(DailyAnalysis dailyAnalysis) {
        List<DailyAnalysis> dailyList = new LinkedList<>();
        int count = 0;
        count = dailyAnalysisDao.selectCount(dailyAnalysis);
        try {
            dailyList = dailyAnalysisDao.selectDaily(dailyAnalysis);
        } catch (Exception e) {
            e.printStackTrace();
            return BaseResultUtil.resultFail("查询失败", dailyList);
        }
        return BaseResultUtil.resultSuccess("查询成功", dailyList, null, count);
    }
}
