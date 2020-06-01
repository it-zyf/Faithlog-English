package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.eventCustom;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class eventCustomDao extends BaseMyIbatisDao<eventCustom, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<eventCustom> getEntityClass() {
        return eventCustom.class;
    }

    public List<String> testImpala() {
        return this.db().selectList(path + "testImpala");
    }
}
