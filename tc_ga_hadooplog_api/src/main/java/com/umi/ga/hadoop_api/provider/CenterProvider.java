package com.umi.ga.hadoop_api.provider;

import com.comb.framework.proxy.annotation.ProxyService;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.clientInterface.*;
import com.umi.ga.service.configuration.HadoopLogConfigurationService;
import com.umi.ga.service.dataInfo.HadoopLogManageService;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;

@Service
public class CenterProvider {

    @ProxyService
    private HadoopLogManageService hadoopLogProvider;

    @ProxyService
    private HadoopLogConfigurationService configProvider;

    @ProxyService
    private HadoopLogBreakdownService breakdownProvider;

    @ProxyService
    private HadoopLogDailyAnalysisService dailyAnalysisProvider;

    @ProxyService
    private HadoopLogAllTrendService allTrendService;

    @ProxyService
    private HadoopLogRetainAnalysisService retainAnalysisService;

    @ProxyService
    private HadoopLogRealTimeStatisticsService realTimeStatisticsService;

    @ProxyService
    private HadoopLogPayForAnalysisService payForAnalysisService;

    @ProxyService
    private HadoopLogLTVAnalysisService ltvAnalysisService;

    @ProxyService
    private eventLogManageService eventLogService;


    public HttpResult hiveSelectTimeQuantum(Times times) {
        return hadoopLogProvider.hiveSelectTimeQuantum(times);
    }

    public HttpResult hiveSelectStartTime(Times times) {
        return hadoopLogProvider.hiveSelectStartTime(times);
    }

    public HttpResult hiveSelectStart(Times times) {
        return hadoopLogProvider.hiveSelectStart(times);
    }

    public HttpResult selectStartTime(Times times) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String startTime = null;
        try {
            startTime = null != times.getEndTime() ? sdf.format(sdf.parse(times.getEndTime())) : sdf.format(System.currentTimeMillis() - 24 * 60 * 60 * 1000);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        times.setStartTime(startTime);
        return hadoopLogProvider.selectStartTime(times);
    }

    public HttpResult selectStart(Times times) {
        return hadoopLogProvider.selectStart(times);
    }

    public HttpResult selectTimeQuantum(Times times) {
        return hadoopLogProvider.selectTimeQuantum(times);
    }

    public HttpResult selectConfiguration(Times times) {
        return configProvider.selectConfiguration(times);
    }

    public HttpResult test() {
        return configProvider.test();
    }

    public HttpResult test2() {
        return hadoopLogProvider.test2();
    }

    public HttpResult selectNumOfPeople(Times times) {
        return configProvider.selectNumOfPeople(times);
    }

    public HttpResult selectNumOfBreakdown(Times times) {
        return breakdownProvider.selectNumOfBreakdown(times);
    }

    public HttpResult hiveTest() {
        return configProvider.hiveTest();
    }

    public HttpResult selectBreakDown(Times times) {
        return breakdownProvider.selectBreakDown(times);
    }

    public HttpResult selectBreakDownCount(Times times) {
        return breakdownProvider.selectBreakDownCount(times);
    }


    public HttpResult queryAreas() {
        return dailyAnalysisProvider.queryAreas();
    }

    public HttpResult queryChannels() {
        return dailyAnalysisProvider.queryChannels();
    }


    public HttpResult queryDaily(DailyAnalysis daily) {
        return dailyAnalysisProvider.queryDaily(daily);
    }

    public HttpResult queryAllTrend(DailyAnalysis dailyAnalysis) {
        return allTrendService.queryAllTrend(dailyAnalysis);
    }

    public HttpResult queryRetain(DailyAnalysis dailyAnalysis) {
        return retainAnalysisService.queryRetain(dailyAnalysis);
    }

    //    public HttpResult queryRealTimeOnline(Times time) {
//        return realTimeStatisticsService.queryRealTimeOnline(time);
//    }
    public HttpResult queryRealTimeOnline(Flag flag) {
        return realTimeStatisticsService.hiveRealTimeOnline(flag);
    }

    //    public HttpResult queryRealTimeStatistics(Times time) {
//        return realTimeStatisticsService.queryRealTimeStatistics(time);
//    }
    public HttpResult queryRealTimeStatistics(Flag flag) {
        return realTimeStatisticsService.hiveRealTimeStatistics(flag);
    }

    public HttpResult queryPayForAnalysis(Flag flag) {
        return payForAnalysisService.queryPayForAnalysis(flag);
    }

    public HttpResult queryLTVAnalysis(Times time) {
        return ltvAnalysisService.queryLTVAnalysis(time);
    }

    /*
       TEST
     */

    public HttpResult testImpala() {
        return eventLogService.testImpala();
    }
}