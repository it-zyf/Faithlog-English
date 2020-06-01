package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RoleLuckDrawLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RoleLuckDrawLogDao extends BaseMyIbatisDao<RoleLuckDrawLog, Long> {

    public Class<RoleLuckDrawLog> getEntityClass() {
        return RoleLuckDrawLog.class;
    }

    String path = this.getEntityClass().getSimpleName() + ".";

    public List<RoleLuckDrawLog> hive_select_LuckyDraw(Condition condition) {
        return this.db().selectList(path + "getLuckyDraw", condition);
    }
    public int select_LuckyDraw_Count(Condition condition) {
        return this.db().selectOne(path + "getLuckyDrawCount", condition);
    }

}