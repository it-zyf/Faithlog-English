package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.IPaddrDistribution;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;


@Component
public class IPaddrDistributionDao extends BaseMyIbatisDao<IPaddrDistribution, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    public Class<IPaddrDistribution> getEntityClass() {
        return IPaddrDistribution.class;
    }

    public IPaddrDistribution selectMaxTimeIPaddr() {
        return this.db().selectOne(path + "selectMaxTimeIPaddr");
    }

    public int insertBatch(LinkedList<IPaddrDistribution> addressList) {
        return this.db().insert(path + "insertBatch", addressList);
    }

    public List<IPaddrDistribution> selectListByTimeDate(List<Times> timeDateList) {
        return this.db().selectList(path + "selectListByTimeDate", timeDateList);
    }
}
