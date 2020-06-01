package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RechargeSuccessLog;

import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RechargeSuccessLogDao extends BaseMyIbatisDao<RechargeSuccessLog, Long> {
    public Class<RechargeSuccessLog> getEntityClass() {
        return RechargeSuccessLog.class;
    }
    String path = this.getEntityClass().getSimpleName() + ".";

    public List<RechargeSuccessLog> hive_select_recharge_log(Condition condition) {
        return this.db().selectList(path + "getRecharge_Success", condition);
    }




    public int select_recharge_logCount(Condition condition) {
        return this.db().selectOne(path + "getRecharge_Success_Count", condition);
    }

}
