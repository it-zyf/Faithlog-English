package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.NewGuideLog;
import com.umi.ga.analysis.model.RoleLogoutLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class NewGuideLogDao extends BaseMyIbatisDao<NewGuideLog, Long> {

    public Class<NewGuideLog> getEntityClass()
    {
        return NewGuideLog.class;
    }

    String path = getEntityClass().getSimpleName() + ".";

    public List<NewGuideLog> hive_select_GuideLog(Condition al)
    {
        return db().selectList(this.path + "getGuideLog", al);
    }

    public int select_GuideLog_Count(Condition condition) {
        return this.db().selectOne(path + "getGuideLogCount", condition);
    }

}
