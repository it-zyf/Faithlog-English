package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.conf_userinfo;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserInfoDao extends BaseMyIbatisDao<conf_userinfo, Long> {

    @Override
    public Class<conf_userinfo> getEntityClass() {
        return conf_userinfo.class;
    }
    String path = this.getEntityClass().getSimpleName() + ".";

    public List<conf_userinfo> getUserInfo(conf_userinfo al) {
        return this.db().selectList(path + "getUserInfo", al);
    }

    public conf_userinfo selectByPrimaryKey(Integer al) {
        return this.db().selectOne(path + "type_field", al);
    }

    public int updateByPrimaryKeySelective(conf_userinfo al) {
        return this.db().update(path + "updateByPrimaryKeySelective", al);
    }

    public int insert(conf_userinfo al) {
        return this.db().insert(path + "insert", al);
    }

    public int deleteByPrimaryKey(Integer al) {
        return this.db().delete(path + "deleteByPrimaryKey", al);
    }
}
