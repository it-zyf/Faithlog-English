package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RechargeStepLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RechargeStepLogDao
        extends BaseMyIbatisDao<RechargeStepLog, Long>
{
    public Class<RechargeStepLog> getEntityClass()
    {
        return RechargeStepLog.class;
    }

    String path = getEntityClass().getSimpleName() + ".";

    public List<RechargeStepLog> hive_select_Recharge_StepLog(Condition condition)
    {
        return db().selectList(this.path + "getRecharge_Step", condition);
    }

    public int select_Recharge_StepLog_Count(Condition condition)
    {
        return ((Integer)db().selectOne(this.path + "select_Recharge_StepLogCount", condition)).intValue();
    }
}
