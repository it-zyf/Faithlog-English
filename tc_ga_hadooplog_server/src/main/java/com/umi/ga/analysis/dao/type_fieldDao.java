package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.type_field;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class type_fieldDao  extends BaseMyIbatisDao<type_field, Long> {
    @Override
    public Class<type_field> getEntityClass() {
        return type_field.class;
    }
    String path = this.getEntityClass().getSimpleName() + ".";

    public List<type_field> getfield(type_field al) {
        return this.db().selectList(path + "getfield", al);
    }

    public int select_create_account_Count(Condition condition) {
        return this.db().selectOne(path + "type_field", condition);
    }

}
