package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.CrossServerHarryLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CrossServerHarryLogDao
        extends BaseMyIbatisDao<CrossServerHarryLog, Long>
{
    public Class<CrossServerHarryLog> getEntityClass()
    {
        return CrossServerHarryLog.class;
    }

    String path = getEntityClass().getSimpleName() + ".";

    public List<CrossServerHarryLog> hive_query_crossHarry(Condition condition)
    {
        return db().selectList(this.path + "findCrossHarryList", condition);
    }

    public int query_crossHarry_Count(Condition condition)
    {
        return ((Integer)db().selectOne(this.path + "findCrossHarryListCount", condition)).intValue();
    }
}
