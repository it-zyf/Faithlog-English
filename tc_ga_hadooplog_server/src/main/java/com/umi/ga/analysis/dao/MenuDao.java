package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.Menu;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class MenuDao extends BaseMyIbatisDao<Menu, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<Menu> getEntityClass() {
        return Menu.class;
    }


    public Menu queryMenu(@Param("menuId") int menuId) {
        return this.db().selectOne(path + "queryMenu", menuId);
    }


    /************************************************************/
    /*******************遍历所有的菜单****************************/
    /************************************************************/

    //一级菜单
    public List<Menu> queryFirstMenu() {
        return this.db().selectList(path + "queryFirstMenu");
    }

    //二级菜单
    public List<Menu> querySecondMenu(int pId) {
        return this.db().selectList(path + "querySecondMenu", pId);
    }

    //三级菜单
    public List<Menu> queryThridMenu(int pId) {
        return this.db().selectList(path + "queryThridMenu", pId);
    }


}
