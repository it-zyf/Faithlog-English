package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.Permission;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class PermissionDao extends BaseMyIbatisDao<Permission, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<Permission> getEntityClass() {
        return Permission.class;
    }


    public int clearPermission(@Param("userId") String userId) {
        return this.db().delete(path + "clearPermission", userId);
    }

    public List<Permission> queryAllPermissionByUserId(@Param("userId") String userId) {
        return this.db().selectList(path + "queryAllPermissionByUserId", userId);
    }

    public List<Permission> queryAllPermission() {
        return this.db().selectList(path + "queryAllPermission");
    }

    public List<Permission> queryNextMenu(Permission permission) {
        return this.db().selectList(path + "queryNextMenu", permission);
    }

    public int insertPermission(Permission permission) {
        return this.db().insert(path + "insert", permission);
    }

}
