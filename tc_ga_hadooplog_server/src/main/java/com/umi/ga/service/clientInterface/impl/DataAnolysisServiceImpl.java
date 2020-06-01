package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.*;
import com.umi.ga.analysis.model.*;
import com.umi.ga.common.PagingResult;
import com.umi.ga.entitys.Condition;
import com.umi.ga.entitys.RankingEntity;
import com.umi.ga.service.clientInterface.DataAnolysisService;
import com.umi.ga.utils.BaseResultUtil;
import com.umi.ga.utils.DateForm;
import com.umi.ga.utils.DefaultUtils;
import com.umi.ga.utils.Query;
import org.apache.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

import static com.umi.ga.cons.Constants.RANK_INDEX;

@Service
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class DataAnolysisServiceImpl implements DataAnolysisService {
    protected final Logger log = Logger.getLogger(this.getClass());//日志
    private org.slf4j.Logger DetaAnolysisLog = LoggerFactory.getLogger("DetaAnolysisLog");

    @Autowired
    private RoleTaskLogDao roleTaskLogDao;
    @Autowired
    private RoleLogoutLogDao roleLogoutLogDao;
    @Autowired
    private AuctionLogDao auctionLogDao;

    @Autowired
    private RankListDao rankListDao;

    @Autowired
    private ServerEarlyWarningDao serverEarlyWarningDao;



    @Override
    public PagingResult hive_select_LossOfTask_log(Condition ct) {
        PagingResult result = new PagingResult();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        try {
            Query.changeOver(ct);
            ct.setStartTime2(DateForm.addDay(df.format(new Date()),-7));
            ct.setEndTime2(df.format(new Date()));
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_LossOfTask_log_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<TaskEntity> list = roleTaskLogDao.hive_elect_LossOfTask_log(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(list);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_LossOfTask_log_Count(Condition ct) {
        int result = 0;
        try {
            result = roleTaskLogDao.select_LossOfTask_log_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_LevelDistribution(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_LevelDistribution_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<LevelEntity> list = roleLogoutLogDao.hive_select_LevelDistribution(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(list);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_LevelDistribution_Count(Condition ct) {
        int result = 0;
        try {
            result = roleLogoutLogDao.select_LossOfTask_log_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_select_OccupationDistribution(Condition ct) {
        PagingResult result = new PagingResult();
        try {
          Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_OccupationDistribution_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<OccupationEntity> list = roleLogoutLogDao.hive_select_OccupationDistribution(ct);
            int i = 0;
            if (list != null) {
                for (OccupationEntity m : list) {
                    m.setSerialNumber(i + 1);
                    i++;
                }
            }

            result.setTotal(count);
            result.setState(true);
            result.setRows(list);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_OccupationDistribution_Count(Condition ct) {
        int result = 0;
        try {
            result = roleLogoutLogDao.select_OccupationDistribution_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_select_Auction(AuctionLog ct) {
        PagingResult result = new PagingResult();
        try {
            auctionLogChange(ct);
            if (ct.getAuctiontype().equals("0")) {
                ct.setAuctiontype(null);
            }
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_Auction_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<AuctionEntity> list = auctionLogDao.hive_select_Auction_xl(ct);
            int i = 0;
            if (null != list && 0 != list.size()) {
                for (AuctionEntity m : list) {
                    m.setSerialNumber(i + 1);
                    i++;
                }
            }
            result.setTotal(count);
            result.setState(true);
            result.setRows(list);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }

    private AuctionLog auctionLogChange(AuctionLog ct){
        String[] dataStrings = ct.getSeDate().split("~");
        ct.setStartTime(dataStrings[0].replace(" ", ""));
        ct.setEndTime(dataStrings[1].replace(" ", ""));
        ct.setStringsArray(Query.getArray(ct.getServerId()));
        ct.setChannelArray(Query.getArray(ct.getChannelId()));
        return ct;
    }


    public int select_Auction_Count(AuctionLog ct) {
        int result = 0;
        try {
            result = auctionLogDao.select_Auction_Count_xl(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_rankingList(RankingEntity re) {
        PagingResult result = new PagingResult();
        ArrayList<RankListLog> list1 = new ArrayList<>();
        int count=0;
        try {
            changeOver(re);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            List<RankListLog> list = rankListDao.hive_select_rankingList(re);
            count = null != list ? list.size() : 0;
            for (int i = Math.min(count, re.getFromIndex()); i < Math.min(count, re.getToIndex()); i++)
                list1.add(list.get(i));
            result.setTotal(count);
            result.setState(true);
            result.setRows(list1);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }

    private RankingEntity changeOver(RankingEntity re) {
        String[] dataStrings = re.getSeDate().split("~");
        re.setStartTime(dataStrings[0].replace(" ", ""));
        re.setEndTime(dataStrings[1].replace(" ", ""));
        re.setStringsArray(Query.getArray(re.getServerId()));
        re.setChannelArray(Query.getArray(re.getChannelId()));
        re.setFromIndex((re.getPageIndex() - 1) * re.getPageSize());
        re.setToIndex(re.getPageIndex() * re.getPageSize());
        return re;
    }


    public int select_rankingList(RankingEntity re) {
        int result = 0;
        try {
            result = rankListDao.select_rankingList_Count(re);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_active_involved(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            String[] dataStrings = ct.getSeDate().split("~");
            ct.setStarT(dataStrings[0]);
            ct.setEndT(dataStrings[1]);
            ct.setStringsArray(Query.getArray(ct.getServerId()));
            ct.setChannelArray(Query.getArray(ct.getChannelId()));
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询总的记录条数
            int count = roleLogoutLogDao.findAllCount(ct);
            //查询中条数
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<ActiveEntity> list1 = roleLogoutLogDao.hive_select_activeList(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(list1);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }

    @Override
    public PagingResult hive_severEarlyWarning(ServerEarlyWarning sew) {
        int count = 0;
        int rank = RANK_INDEX;
        List<ServerEarlyWarning> list1 = new ArrayList<>();
        List<ServerEarlyWarning> repeatList = new ArrayList<>();
        Date d = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            sew.setEndTime1(sew.getEndTime());
            sew.setStartTime(sew.getStartTime());
            if (sew.getEndTime().equals(sdf.format(d))) {
                sew.setEndTime(sew.getEndTime());
            } else {
                sew.setEndTime(DateForm.addDay(sew.getEndTime(), 2));
            }
            sew.setStringsArray(Query.getArray(sew.getServerId()));
            sew.setChannelArray(Query.getArray(sew.getChannelId()));
            sew.setTypeArray(Query.getIntArray(sew.getType()));
            sew.setFromIndex((sew.getPageIndex() - 1) * sew.getPageSize());
            sew.setToIndex(sew.getPageIndex() * sew.getPageSize());
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            List<ServerEarlyWarning> list = serverEarlyWarningDao.hive_select_ServerEarlyWarning(sew);
            if (null != list && 0 != list.size()) {
                for (int i = 0; i < list.size(); i++) {
                    if (DateForm.dateToLong2(list.get(i).getLogTime()) > DateForm.dateToLong2(sew.getEndTime1()))
                        continue;
                    //1
                    if (list.get(i).getLogTime().equals(sew.getEndTime1()) && sew.getEndTime1().equals(sdf.format(d)) || list.get(i).getLogTime().equals(DateForm.addDay(sew.getEndTime1(), -1)) && sew.getEndTime1().equals(sdf.format(d))) {
                        if (sew.getRedWarningValue().intValue() > list.get(i).getOnlineTime().intValue()) {
                            list.get(i).setWarningLevel(1);
                            continue;
                        }
                        if (sew.getRedWarningValue().intValue() < list.get(i).getOnlineTime().intValue() && list.get(i).getOnlineTime().intValue() > sew.getRedWarningValue().intValue()) {
                            list.get(i).setWarningLevel(3);
                            continue;
                        }
                    }
                    //2
                    if (sew.getRedWarningValue().intValue() > list.get(i).getOnlineTime().intValue()) {
                        list.get(i).setWarningLevel(1);
                        continue;
                    }
                    if (sew.getRedWarningValue().intValue() < list.get(i).getOnlineTime().intValue() && list.get(i).getOnlineTime().intValue() > sew.getRedWarningValue().intValue()) {

                        if (
                                DateForm.addDay(list.get(i).getLogTime(), 1).equals(list.get(i + 1).getLogTime()) && DateForm.addDay(list.get(i + 1).getLogTime(), 1).equals(list.get(i + 2).getLogTime())
                                        && list.get(i).getRoleId().equals(list.get(i + 1).getRoleId()) && list.get(i).getRoleId().equals(list.get(i + 2).getRoleId())
                                        && list.get(i).getOnlineTime() > list.get(i + 1).getOnlineTime() && list.get(i + 1).getOnlineTime() > list.get(i + 2).getOnlineTime()
                        ) {
                            list.get(i).setWarningLevel(2);
                        } else {
                            list.get(i).setWarningLevel(3);
                        }
                    }

                }
            }
            list1 = list.stream().filter(s -> s.getWarningLevel() != null).collect(Collectors.toList());
            list.clear();
            //对数据进行去重
            Map<String, Optional<ServerEarlyWarning>> collect = list1.stream().collect(Collectors.groupingBy(ServerEarlyWarning::getRoleId, Collectors.minBy((a, b) -> a.getWarningLevel().compareTo(b.getWarningLevel()))));
            //进行转换
            for (Map.Entry<String, Optional<ServerEarlyWarning>> entry : collect.entrySet()) {
                for (ServerEarlyWarning warning : DefaultUtils.toList(entry.getValue())) {
                    repeatList.add(warning);
                }
            }
            count = null != repeatList ? repeatList.size() : 0;
            DefaultUtils.getSortList(sew, repeatList);
            for (ServerEarlyWarning li : repeatList) {
                li.setRank(rank);
                rank++;
            }
            for (int i = Math.min(count, sew.getFromIndex()); i < Math.min(count, sew.getToIndex()); i++)
                list.add(repeatList.get(i));
            for (ServerEarlyWarning lii : list) {
                sew.setYesToDayLogTime(lii.getLogTime());
                sew.setRoleId(lii.getRoleId());
                Integer yesterDayOnlineTime = serverEarlyWarningDao.hive_select_onlineTime(sew);
                lii.setOnlineTimeYesterDay(yesterDayOnlineTime);
            }
            return BaseResultUtil.basePageResultSuccess(Long.valueOf(sew.getPageIndex()), count, list, "查询成功");
        } catch (Exception e) {
            log.error(e.getMessage());
            return BaseResultUtil.basePageResultFail(e.getMessage());
        }

    }


    @Override
    public PagingResult hive_serverDailyOnlineTime(ServerEarlyWarning sew) {
        int count = 0;
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            sew.setStringsArray(Query.getArray(sew.getServerId()));
            sew.setChannelArray(Query.getArray(sew.getChannelId()));
            List<String> dates = DateForm.findDates(sf.parse(sew.getStartTime()), sf.parse(sew.getEndTime()));
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            List<OnlineTimeEveryDay> list = serverEarlyWarningDao.hive_serverDailyOnlineTime(sew);
            //获取集合中的日期值
            List<String> dateList = list.stream().map(OnlineTimeEveryDay::getLogTime).collect(Collectors.toList());
            List<String> sList = getSDate(dateList, dates);
            List<OnlineTimeEveryDay> allList = getAllList(list, sList);
            DefaultUtils.getSortListByLogTime(allList);
            return BaseResultUtil.basePageResultSuccess(null, count, allList, "查询成功");
        } catch (Exception e) {
            log.error(e.getMessage());
            return BaseResultUtil.basePageResultFail(e.getMessage());
        }
    }

    private List<String> getSDate(List<String> dateList, List<String> toTalList) {
        List<String> sList = new ArrayList<>();
        if(null !=toTalList && 0<toTalList.size())
        for (String dl : toTalList) {
            if (!dateList.contains(dl)) {
                sList.add(dl);
            }
        }
        return sList;
    }

    private List<OnlineTimeEveryDay> getAllList(List<OnlineTimeEveryDay> list, List<String> sList) {
        if (null !=sList && 0<sList.size())
        for (String s : sList) {
            OnlineTimeEveryDay se = new OnlineTimeEveryDay();
            se.setLogTime(s);
            se.setOnlineTime(0);
            list.add(se);
        }
        return list;

    }

}
