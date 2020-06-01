package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.AuctionLog;
import com.umi.ga.analysis.model.BeatBoss;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

@Component
public class BeatBossDao extends BaseMyIbatisDao<BeatBoss, Long> {
    @Override
    public Class<BeatBoss> getEntityClass() {
        return BeatBoss.class;
    }

    String path = this.getEntityClass().getSimpleName() + ".";

    public int findAllBossNum(Condition condition) {
        return this.db().selectOne(path + "findAllBossNum", condition);
    }
    public int findAllArmyNum(Condition condition) {
        return this.db().selectOne(path + "findAllArmyNum", condition);
    }

    public int faindAllBreakNum(Condition condition) {
        return this.db().selectOne(path + "faindAllBreakNum", condition);
    }
}
