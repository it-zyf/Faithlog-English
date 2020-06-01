package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.CreateRoleLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CreateRoleLogDao extends BaseMyIbatisDao<CreateRoleLog, Long> {

    @Override
    public Class<CreateRoleLog> getEntityClass() {
        return CreateRoleLog.class;
    }
    String path = this.getEntityClass().getSimpleName() + ".";

    public List<CreateRoleLog> hive_select_RoleLog(Condition condition) {
        return this.db().selectList(path + "getcreate_role_log", condition);
    }

    public int select_create_account_Count(Condition condition) {
        return this.db().selectOne(path + "getcreate_role_log_count", condition);
    }


    public int test(Condition condition) {
        return this.db().selectOne(path + "test", condition);
    }
}
