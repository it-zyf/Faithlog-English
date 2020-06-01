package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.Orders;
import org.springframework.stereotype.Component;


@Component
public class OrdersDao extends BaseMyIbatisDao<Orders, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<Orders> getEntityClass() {
        return Orders.class;
    }


    public long getCount(Orders al) {
        return this.db().selectOne(path + "getCount", al);
    }
}
