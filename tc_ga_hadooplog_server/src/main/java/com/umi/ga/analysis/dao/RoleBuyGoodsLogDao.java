package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.RoleBuyGoodsLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class RoleBuyGoodsLogDao extends BaseMyIbatisDao<RoleBuyGoodsLog, Long> {

	public Class<RoleBuyGoodsLog> getEntityClass() {
		return RoleBuyGoodsLog.class;
	}


	String path = this.getEntityClass().getSimpleName() + ".";

	public List<RoleBuyGoodsLog> hive_select_BuyGoods(Condition condition) {
		return this.db().selectList(path + "getBuyGoods", condition);
	}
	public int select_BuyGoods_Count(Condition condition) {
		return this.db().selectOne(path + "getBuyGoodsCount", condition);
	}
	
}
