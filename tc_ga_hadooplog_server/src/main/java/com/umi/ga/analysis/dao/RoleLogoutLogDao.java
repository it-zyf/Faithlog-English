package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.ActiveEntity;
import com.umi.ga.analysis.model.LevelEntity;
import com.umi.ga.analysis.model.OccupationEntity;
import com.umi.ga.analysis.model.RoleLogoutLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RoleLogoutLogDao extends BaseMyIbatisDao<RoleLogoutLog, Long> {
    public Class<RoleLogoutLog> getEntityClass()
    {
        return RoleLogoutLog.class;
    }

    String path = getEntityClass().getSimpleName() + ".";

    public List<RoleLogoutLog> hive_select_Loginout_log(Condition al)
    {
        return db().selectList(this.path + "getLoginouts", al);
    }

    public int getLoginoutsCount(Condition condition) {
        return this.db().selectOne(path + "getLoginoutsCount", condition);
    }
    public int select_LossOfTask_log_Count(Condition condition) {
        return this.db().selectOne(path + "getLevelDistributionCount", condition);
    }

    public List<LevelEntity> hive_select_LevelDistribution(Condition al)
    {
        return db().selectList(this.path + "getLevelDistribution", al);
    }


    public List<OccupationEntity> hive_select_OccupationDistribution(Condition al)
    {
        return db().selectList(this.path + "getOccupation", al);
    }

    public int select_OccupationDistribution_Count(Condition condition) {
        return this.db().selectOne(path + "getOccupationCount", condition);
    }

    public int findAllCount(Condition cl) {
        return this.db().selectOne(path + "findAllCount",cl);
    }

    public List<ActiveEntity> hive_select_activeList(Condition al)
    {
        return db().selectList(this.path + "hive_select_activeList", al);
    }


    public int findActiveNum(Condition condition) {
        return this.db().selectOne(path + "findActiveNum", condition);
    }


}
