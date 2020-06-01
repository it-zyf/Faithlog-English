package com.umi.ga.schedule;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.analysis.model.LTVAnalysis;
import com.umi.ga.cons.LtvDays;
import com.umi.ga.entitys.AnalysisData;
import com.umi.ga.entitys.Flag;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;
import com.umi.ga.service.clientInterface.HadoopLogDailyAnalysisService;
import com.umi.ga.service.clientInterface.HadoopLogLTVAnalysisService;
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import com.umi.ga.utils.DateHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/2/24 15:16
 */
@Component
public class FrontEndLTVAnalysisSchedule {

    private Logger scheduleLog = LoggerFactory.getLogger("scheduleLog");

    @Autowired
    private HadoopLogLTVAnalysisService ltvAnalysisService;

    @Autowired
    private HadoopLogTimeQuantumService timeQuantumService;

    @Autowired
    private HadoopLogDailyAnalysisService dailyAnalysisService;

    @Scheduled(cron = "0 */30 * * * ?")
    public void ltvAnalysisSchedule() throws Exception {
        List<Times> timeDateList = timeQuantumService.selectTableByColumn(new tableDate("ltv_analysis", "timeDate", null, null));
        timeDateList.add(new Times(null, null, DateHelper.dateSimpleFormatString(new Date())));
        List<Flag> serverList = dailyAnalysisService.selectServerAll();
        List<Flag> channelList = dailyAnalysisService.selectChannelAll();
        for (Times time : timeDateList) {
            if (null == time) continue;
            int insert = 0;
            try {
                List<LTVAnalysis> ltvList = new ArrayList<>();
                // ltv
                List<DailyAnalysis> dailyList = dailyAnalysisService.hiveSelectDailyAnalysis(time);
                if (null != dailyList && 0 != dailyList.size()) {
                    for (DailyAnalysis dailyAnalysis : dailyList) {
                        LTVAnalysis ltv = new LTVAnalysis();
                        // 日期
                        ltv.setTimedate(dailyAnalysis.getTimedate());
                        // 区服
                        ltv.setServerid(dailyAnalysis.getServerId());
                        // 渠道号
                        ltv.setChannelid(dailyAnalysis.getChannelId());
                        // 注册
                        ltv.setRegisterNumber(dailyAnalysis.getDailyRegister());
                        // 首登
                        ltv.setFirstLogin(dailyAnalysis.getNewPlayers());
                        // 首付
                        ltv.setFirstPayAmount(dailyAnalysis.getFirstAmount());
                        // 今日付费
                        ltv.setPayAmount(dailyAnalysis.getPayAmount());
                        // 今日ltv
                        ltv.setOneLtv(0 == dailyAnalysis.getNewPlayers() ? BigDecimal.ZERO : dailyAnalysis.getPayAmount().divide(BigDecimal.valueOf(dailyAnalysis.getNewPlayers())).setScale(4, BigDecimal.ROUND_HALF_UP));
                        ltvList.add(ltv);
                    }
                }

                // 空数据时，赋予默认值
                if (null == ltvList || 0 == ltvList.size()) {
                    for (Flag server : serverList) {
                        if (null == server || "" == server.getFlag()) continue;
                        for (Flag channel : channelList) {
                            if (null == channel || "" == channel.getFlag()) continue;
                            LTVAnalysis ltvAnalysis = new LTVAnalysis();
                            ltvAnalysis.setServerid(server.getFlag());
                            ltvAnalysis.setChannelid(channel.getFlag());
                            ltvAnalysis.setTimedate(time.getTimes());
                            ltvList.add(ltvAnalysis);
                        }
                    }
                }
                // 插入
                insert = ltvAnalysisService.insertBatch(ltvList);
                scheduleLog.info("LTV分析数据初始化 timeDate=" + time.getTimes() + " ltv_analysis = " + insert);

                // ltv
                List<AnalysisData> ltvLastList = ltvAnalysisService.hiveSelectLtvLast(time);
                if (null != ltvLastList && 0 != ltvLastList.size()) ltvConver(ltvLastList);

                // 更新 ltv
                int update = ltvAnalysisService.updateLTVBatch(ltvLastList);

            } catch (Exception e) {
                scheduleLog.info("LTV分析数据初始化 timeDate=" + time.getTimes() + " ltv_analysis = " + insert, e);
            }
        }
    }

    /**
     * 垃圾垃圾垃圾
     *
     * @param ltvLastList
     */
    private void ltvConver(List<AnalysisData> ltvLastList) {
        if (null != ltvLastList && 0 != ltvLastList.size()) {
            for (AnalysisData ad : ltvLastList) {
                if (null == ad || null == ad.getDays()) continue;
                switch (ad.getDays()) {
                    case "1":
                        ad.setDays(LtvDays.ONE_LTV);
                        break;
                    case "2":
                        ad.setDays(LtvDays.TWO_LTV);
                        break;
                    case "3":
                        ad.setDays(LtvDays.THREE_LTV);
                        break;
                    case "4":
                        ad.setDays(LtvDays.FOUR_LTV);
                        break;
                    case "5":
                        ad.setDays(LtvDays.FIVE_LTV);
                        break;
                    case "6":
                        ad.setDays(LtvDays.SIX_LTV);
                        break;
                    case "7":
                        ad.setDays(LtvDays.SEVEN_LTV);
                        break;
                    case "8":
                        ad.setDays(LtvDays.EIGHT_LTV);
                        break;
                    case "9":
                        ad.setDays(LtvDays.NINE_LTV);
                        break;
                    case "10":
                        ad.setDays(LtvDays.TEN_LTV);
                        break;
                    case "11":
                        ad.setDays(LtvDays.ELEVEN_LTV);
                        break;
                    case "12":
                        ad.setDays(LtvDays.TWELVE_LTV);
                        break;
                    case "13":
                        ad.setDays(LtvDays.THIRTEEN_LTV);
                        break;
                    case "14":
                        ad.setDays(LtvDays.FOURTEEN_LTV);
                        break;
                    case "15":
                        ad.setDays(LtvDays.FIFTEEN_LTV);
                        break;
                    case "16":
                        ad.setDays(LtvDays.SIXTEEN_LTV);
                        break;
                    case "17":
                        ad.setDays(LtvDays.SEVENTEEN_LTV);
                        break;
                    case "18":
                        ad.setDays(LtvDays.EIGHTEEN_LTV);
                        break;
                    case "19":
                        ad.setDays(LtvDays.NINETEEN_LTV);
                        break;
                    case "20":
                        ad.setDays(LtvDays.TWENTY_LTV);
                        break;
                    case "21":
                        ad.setDays(LtvDays.TWENTYONE_LTV);
                        break;
                    case "22":
                        ad.setDays(LtvDays.TWENTYTWO_LTV);
                        break;
                    case "23":
                        ad.setDays(LtvDays.TWENTYTHREE_LTV);
                        break;
                    case "24":
                        ad.setDays(LtvDays.TWENTYFOUR_LTV);
                        break;
                    case "25":
                        ad.setDays(LtvDays.TWENTYFIVE_LTV);
                        break;
                    case "26":
                        ad.setDays(LtvDays.TWENTYSIX_LTV);
                        break;
                    case "27":
                        ad.setDays(LtvDays.TWENTYSEVEN_LTV);
                        break;
                    case "28":
                        ad.setDays(LtvDays.TWENTYEIGHT_LTV);
                        break;
                    case "29":
                        ad.setDays(LtvDays.TWENTYNINE_LTV);
                        break;
                    case "30":
                        ad.setDays(LtvDays.THIRTY_LTV);
                        break;
                    case "60":
                        ad.setDays(LtvDays.SIXTY_LTV);
                        break;
                    case "90":
                        ad.setDays(LtvDays.NINETY_LTV);
                        break;
                    case "120":
                        ad.setDays(LtvDays.HUNDREDTWENTY_LTV);
                        break;
                    case "150":
                        ad.setDays(LtvDays.HUNDREDFIFTY_LTV);
                        break;
                    case "180":
                        ad.setDays(LtvDays.HUNDREDEIGHTY_LTV);
                        break;
                    case "360":
                        ad.setDays(LtvDays.THREEHUNDREDSIXTY_LTV);
                        break;
                }
            }
        }
    }
}
