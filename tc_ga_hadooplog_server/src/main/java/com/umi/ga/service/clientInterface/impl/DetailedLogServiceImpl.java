package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.*;
import com.umi.ga.analysis.model.*;
import com.umi.ga.common.PagingResult;
import com.umi.ga.entitys.Condition;
import com.umi.ga.service.clientInterface.DetailedLogService;
import com.umi.ga.utils.DateForm;
import com.umi.ga.utils.Query;
import org.apache.log4j.Logger;
import org.apache.velocity.runtime.directive.Foreach;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class DetailedLogServiceImpl implements DetailedLogService {
    protected final Logger log = Logger.getLogger(this.getClass());//日志
    private org.slf4j.Logger DetailedLog = LoggerFactory.getLogger("DetailedLog");
    @Autowired
    private RoleLogoutLogDao roleLogOutLogDao;

    @Autowired
    private RechargeSuccessLogDao rechargeSuccessLogDao;

    @Autowired
    private CreateRoleLogDao createRoleLogDao;

    @Autowired
    private NewGuideLogDao newGuideLogDao;

    @Autowired
    private RoleTaskLogDao roleTaskLogDao;

    @Autowired
    private MoneyChangeLogDao moneyChangeLogDao;

    @Autowired
    private LevelChangeLogDao levelChangeLogDao;

    @Autowired
    private RechargeStepLogDao rechargeStepLogDao;

    @Autowired
    private RoleLuckDrawLogDao roleLuckDrawLogDao;

    @Autowired
    private AuctionLogDao auctionLogDao;

    @Autowired
    private RoleChatLogDao roleChatLogDao;

    @Autowired
    private RoleBuyGoodsLogDao roleBuyGoodsLogDao;

    @Autowired
    private RoleGetMailContentLogDao roleGetMailContentLogDao;

    @Autowired
    private ItemChangeLogDao itemChangeLogDao;

    @Autowired
    private GrowthFundDao growthFundDao;

    @Autowired
    private RoleTimeLimitActivityLogDao roleTimeLimitActivityLogDao;

    @Autowired
    private MapChangeLogDao mapChangeLogDao;

    @Autowired
    private BossKillLogDao bossKillLogDao;

    @Autowired
    private BossKillDropLogDao bossKillDropLogDao;

    @Autowired
    private OccupationPkLogDao occupationPkLogDao;

    @Autowired
    private CrossServerBossKillLogDao crossServerBossKillLogDao;

    @Autowired
    private CrossServerHarryLogDao crossServerHarryLogDao;


    @Override
    public PagingResult hive_select_Loginout_log(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_Loginout_logCount(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RoleLogoutLog> roleLogoutLogs = roleLogOutLogDao.hive_select_Loginout_log(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleLogoutLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();

    }


    public int select_Loginout_logCount(Condition ct) {
        int result = 0;
        try {
            result = roleLogOutLogDao.getLoginoutsCount(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_Recharge_Success(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_recharge_logCount(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RechargeSuccessLog> recharges = rechargeSuccessLogDao.hive_select_recharge_log(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(recharges);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_recharge_logCount(Condition ct) {
        int result = 0;
        try {
            result = rechargeSuccessLogDao.select_recharge_logCount(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    /**
     * @param ct
     * @description: Garbage company qingming will not have a holiday
     */
    @Override
    public PagingResult hive_select_RoleLog(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_create_account_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<CreateRoleLog> recharges = createRoleLogDao.hive_select_RoleLog(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(recharges);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_create_account_Count(Condition ct) {
        int result = 0;
        try {
            result = createRoleLogDao.select_create_account_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_GuideLog(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_GuideLog_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<NewGuideLog> newGuideLogs = newGuideLogDao.hive_select_GuideLog(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(newGuideLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_GuideLog_Count(Condition ct) {
        int result = 0;
        try {
            result = newGuideLogDao.select_GuideLog_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_TaskLog(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_TaskLog_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RoleTaskLog> roleTaskLogs = roleTaskLogDao.hive_select_TaskLog(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }

    public int select_TaskLog_Count(Condition ct) {
        int result = 0;
        try {
            result = roleTaskLogDao.select_TaskLog_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    /**
     * @param ct
     * @description: Garbage company qingming  not have a holiday
     * @author: zjySm
     * @Date: 2020-04-04
     */
    @Override
    public PagingResult hive_select_Money_ChangeLog(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_Money_ChangeLog_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<MoneyChangeLog> roleTaskLogs = moneyChangeLogDao.hive_select_Money_ChangeLog(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_Money_ChangeLog_Count(Condition ct) {
        int result = 0;
        try {
            result = moneyChangeLogDao.select_Money_ChangeLog_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_select_Level_ChangeLog(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_Level_ChangeLog_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<LevelChangeLog> roleTaskLogs = levelChangeLogDao.hive_select_Level_ChangeLog(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_Level_ChangeLog_Count(Condition ct) {
        int result = 0;
        try {
            result = levelChangeLogDao.select_Level_ChangeLog_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_Recharge_StepLog(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_Recharge_StepLog_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RechargeStepLog> roleTaskLogs = rechargeStepLogDao.hive_select_Recharge_StepLog(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_Recharge_StepLog_Count(Condition ct) {
        int result = 0;
        try {
            result = rechargeStepLogDao.select_Recharge_StepLog_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_select_LuckyDraw(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_LuckyDraw_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RoleLuckDrawLog> roleTaskLogs = roleLuckDrawLogDao.hive_select_LuckyDraw(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_LuckyDraw_Count(Condition ct) {
        int result = 0;
        try {
            result = roleLuckDrawLogDao.select_LuckyDraw_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_Auction(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_Auction_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<AuctionLog> roleTaskLogs = auctionLogDao.hive_select_Auction(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_Auction_Count(Condition ct) {
        int result = 0;
        try {
            result = auctionLogDao.select_Auction_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_RoleChat(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_RoleChat_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RoleChatLog> roleTaskLogs = roleChatLogDao.hive_select_RoleChat(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_RoleChat_Count(Condition ct) {
        int result = 0;
        try {
            result = roleChatLogDao.select_RoleChat_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_BuyGoods(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_BuyGoods_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RoleBuyGoodsLog> roleTaskLogs = roleBuyGoodsLogDao.hive_select_BuyGoods(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_BuyGoods_Count(Condition ct) {
        int result = 0;
        try {
            result = roleBuyGoodsLogDao.select_BuyGoods_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_RoleGetMail(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_RoleGetMail_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RoleGetMailContentLog> roleTaskLogs = roleGetMailContentLogDao.hive_select_RoleGetMail(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_RoleGetMail_Count(Condition ct) {
        int result = 0;
        try {
            result = roleGetMailContentLogDao.select_RoleGetMail_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_select_ArticlesFlowing(Condition ct) {
        PagingResult result = new PagingResult();
        try {
        Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = select_ArticlesFlowing_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<ItemChangeLog> roleTaskLogs = itemChangeLogDao.hive_select_ArticlesFlowing(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int select_ArticlesFlowing_Count(Condition ct) {
        int result = 0;
        try {
            result = itemChangeLogDao.select_ArticlesFlowing_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_queryGrowth_FundGrowth(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = queryGrowth_FundGrowth_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<GrowthFund> roleTaskLogs = growthFundDao.hive_queryGrowth_FundGrowth(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int queryGrowth_FundGrowth_Count(Condition ct) {
        int result = 0;
        try {
            result = growthFundDao.queryGrowth_FundGrowth_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_findListByActive(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = findListByActive_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<RoleTimeLimitActivityLog> roleTaskLogs = roleTimeLimitActivityLogDao.hive_findListByActive(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int findListByActive_Count(Condition ct) {
        int result = 0;
        try {
            result = roleTimeLimitActivityLogDao.queryGrowth_FundGrowth_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    public int query_timeOutIn_Count(Condition ct) {
        int result = 0;
        try {
            result = mapChangeLogDao.query_timeOutIn_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_query_timeOutIn(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = query_timeOutIn_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<MapChangeLog> roleTaskLogs = mapChangeLogDao.hive_query_timeOutIn(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int query_killBoss_Count(Condition ct) {
        int result = 0;
        try {
            result = bossKillLogDao.query_killBoss_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_query_killBoss(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = query_killBoss_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<BossKillLog> roleTaskLogs = bossKillLogDao.hive_query_killBoss(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int query_killDrop_Count(Condition ct) {
        int result = 0;
        try {
            result = bossKillDropLogDao.query_killBoss_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult hive_query_killDrop(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = query_killDrop_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<BossKillDropLog> roleTaskLogs = bossKillDropLogDao.hive_query_killDrop(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }

    public int query_PK_Count(Condition ct) {
        int result = 0;
        try {
            result = occupationPkLogDao.query_PK_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_query_PK(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = query_PK_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<OccupationPkLog> roleTaskLogs = occupationPkLogDao.hive_query_PK(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }

    public int query_legion_Count(Condition ct) {
        int result = 0;
        try {
            result = crossServerBossKillLogDao.query_legion_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult hive_query_legion(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = query_legion_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<CrossServerBossKillLog> roleTaskLogs = crossServerBossKillLogDao.hive_query_legion(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
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
    public PagingResult hive_query_crossHarry(Condition ct) {
        PagingResult result = new PagingResult();
        try {
            Query.changeOver(ct);
            //通过hive去数据库查询数据
            ThreadContext.setMethodName("hive");
            //查询中条数
            int count = query_crossHarry_Count(ct);
            ct.setPageIndex(ct.getPageSize() * (ct.getPageIndex() - 1));
            List<CrossServerHarryLog> roleTaskLogs = crossServerHarryLogDao.hive_query_crossHarry(ct);
            result.setTotal(count);
            result.setState(true);
            result.setRows(roleTaskLogs);
            result.setMessage("查询成功");
            return result;
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }

        return new PagingResult();
    }


    public int query_crossHarry_Count(Condition ct) {
        int result = 0;
        try {
            result = crossServerHarryLogDao.query_crossHarry_Count(ct);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return result;
    }


    @Override
    public PagingResult test(Condition act) {
        ThreadContext.setMethodName("hive");
        Integer num = createRoleLogDao.test(act);
        System.out.println(num);
        return null;
    }

}
