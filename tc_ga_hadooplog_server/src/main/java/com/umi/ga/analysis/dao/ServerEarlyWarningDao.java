package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.LevelEntity;
import com.umi.ga.analysis.model.OnlineTimeEveryDay;
import com.umi.ga.analysis.model.ServerCrystalLog;
import com.umi.ga.analysis.model.ServerEarlyWarning;
import com.umi.ga.entitys.Condition;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
@Component
public class ServerEarlyWarningDao extends BaseMyIbatisDao<ServerEarlyWarning, Long> {
    @Override
    public Class<ServerEarlyWarning> getEntityClass() {
        return ServerEarlyWarning.class;
    }
    String path = this.getEntityClass().getSimpleName() + ".";


    public List<ServerEarlyWarning> hive_select_ServerEarlyWarning(ServerEarlyWarning al)
    {
        return db().selectList(this.path + "hive_select_ServerEarlyWarning", al);
    }

    public List<OnlineTimeEveryDay> hive_serverDailyOnlineTime(ServerEarlyWarning al)
    {
        return db().selectList(this.path + "hive_serverDailyOnlineTime", al);
    }

    public Integer hive_select_onlineTime(ServerEarlyWarning sew)
    {
        return db().selectOne(this.path + "hive_select_onlineTime",sew);
    }


}
