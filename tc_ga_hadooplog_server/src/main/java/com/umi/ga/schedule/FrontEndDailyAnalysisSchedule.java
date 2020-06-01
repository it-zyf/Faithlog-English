package com.umi.ga.schedule;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.cons.RetainDays;
import com.umi.ga.entitys.AnalysisData;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;
import com.umi.ga.service.clientInterface.HadoopLogDailyAnalysisService;
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import com.umi.ga.utils.DateHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.*;

/**
 * @Author guowenchuang
 * @Date 2020/1/10 12:06
 */
@Component
public class FrontEndDailyAnalysisSchedule {

    private Logger scheduleLog = LoggerFactory.getLogger("scheduleLog");
    @Autowired
    private HadoopLogTimeQuantumService timeQuantumService;

    @Autowired
    private HadoopLogDailyAnalysisService dailyAnalysisService;

    @Scheduled(cron = "0 */30 * * * ?")
    public void DailyAnalysiSchedule() throws Exception {

        List<Times> timeDateList = timeQuantumService.selectTableByColumn(new tableDate("daily_analysis", "timeDate", null, null));
        timeDateList.add(new Times(null, null, DateHelper.dateSimpleFormatString(new Date())));
        List<Flag> serverList = dailyAnalysisService.selectServerAll();
        List<Flag> channelList = dailyAnalysisService.selectChannelAll();
        for (Times time : timeDateList) {
            int insert = 0;
            try {
                if (null == time || time.getTimes() == null) continue;

                // 日报
                List<DailyAnalysis> roleList = dailyAnalysisService.hiveSelectDailyAnalysis(time);

                // 空数据时，赋予默认值
                if (null == roleList || 0 == roleList.size()) {
                    for (Flag server : serverList) {
                        if (null == server || "" == server.getFlag()) continue;
                        for (Flag channel : channelList) {
                            if (null == channel || "" == channel.getFlag()) continue;
                            DailyAnalysis daily = new DailyAnalysis();
                            daily.setServerId(server.getFlag());
                            daily.setChannelId(channel.getFlag());
                            daily.setTimedate(time.getTimes());
                            roleList.add(daily);
                        }
                    }
                }
                // 插入
                insert = dailyAnalysisService.insertBatch(roleList);
                scheduleLog.info("日报分析数据初始化 timeDate=" + time.getTimes() + " daily_analysis = " + insert);
                // 留存
                List<AnalysisData> retainList = dailyAnalysisService.hiveSelectRetainLast(time);

                if (null != retainList && 0 != retainList.size()) retainConver(retainList);

                // 更新留存
                int update = dailyAnalysisService.updateAllRetainBatch(retainList);

            } catch (Exception e) {
                scheduleLog.info("日报分析数据初始化失败 timeDate=" + time.getTimes() + " daily_analysis = " + insert, e);
            }
        }

    }

    /**
     * 转换 -- 垃圾
     *
     * @param retainList
     */
    private void retainConver(List<AnalysisData> retainList) {
        if (null != retainList && 0 != retainList.size())
            for (AnalysisData rd : retainList) {
                if (null != rd && null != rd.getDays()) {
                    switch (rd.getDays()) {
                        case "2":
                            rd.setDays(RetainDays.DAY_RETAIN);
                            break;
                        case "3":
                            rd.setDays(RetainDays.THREE_RETAIN);
                            break;
                        case "7":
                            rd.setDays(RetainDays.WEEK_RETAIN);
                            break;
                        case "14":
                            rd.setDays(RetainDays.FOURTEEN_RETAIN);
                            break;
                        case "30":
                            rd.setDays(RetainDays.THIRTY_RETAIN);
                            break;
                        case "60":
                            rd.setDays(RetainDays.SIXTY_RETAIN);
                            break;
                    }
                }
            }
    }
}
