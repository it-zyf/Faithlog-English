package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.NetworkDistribution;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;


@Component
public class NetworkDistributionDao extends BaseMyIbatisDao<NetworkDistribution, Long> {

    String path = this.getEntityClass().getSimpleName() + ".";

    @Override
    public Class<NetworkDistribution> getEntityClass() {
        return NetworkDistribution.class;
    }

    public NetworkDistribution selectMaxTimeNetwork() {
        return this.db().selectOne(path + "selectMaxTimeNetwork");
    }

    public int insertBatch(LinkedList<NetworkDistribution> networkList) {
        return this.db().insert(path + "insertBatch", networkList);
    }

    public List<NetworkDistribution> selectListByTimeDate(List<Times> timeDateList) {
        return this.db().selectList(path + "selectListByTimeDate", timeDateList);
    }
}
