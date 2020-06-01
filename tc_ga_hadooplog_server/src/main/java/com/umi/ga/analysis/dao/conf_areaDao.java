package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.conf_area;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class conf_areaDao extends BaseMyIbatisDao<conf_area, Long> {
    @Override
    public Class<conf_area> getEntityClass() {
        return conf_area.class;
    }
    String path = this.getEntityClass().getSimpleName() + ".";

    public List<conf_area> getAreas(conf_area al) {
        return this.db().selectList(path + "getAreas", al);
    }

    public int select_create_account_Count(Condition condition) {
        return this.db().selectOne(path + "getcreate_role_log_count", condition);
    }

    public int insert(conf_area al) {
        return this.db().insert(path + "insert", al);
    }

    public int updateByPrimaryKeySelective(conf_area al) {
        return this.db().update(path + "updateByPrimaryKeySelective", al);
    }


    public int deleteByPrimaryKey(Integer confid) {
        return this.db().delete(path + "deleteByPrimaryKey", confid);
    }




}
