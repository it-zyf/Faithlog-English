package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.dataInfo;
import com.umi.ga.entitys.Range;
import com.umi.ga.entitys.StartRetarder;
import com.umi.ga.entitys.TimeQuantum;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class dataInfoDao extends BaseMyIbatisDao<dataInfo, Long> {

    public Class<dataInfo> getEntityClass() {
        return dataInfo.class;
    }

    String path = this.getEntityClass().getSimpleName() + ".";


    public Range selectStartRetarder(Times times) {
        return this.db().selectOne(path + "selectStartRetarder", times);
    }

    public Object selectStartRetarder1() {
        return this.db().selectOne(path + "test");
    }

    public Object selectStartRetarder11() {
        return this.db().selectOne(path + "test1");
    }

    public List<TimeQuantum> hiveSelectTimeQuantum(Times times) {
        return this.db().selectList(path + "hiveSelectTimeQuantum", times);
    }

    public List<StartRetarder> hiveSelectStartTime(Times times) {
        return this.db().selectList(path + "hiveSelectStartTime", times);
    }

    public StartRetarder hiveSelectCount(Times times) {
        return this.db().selectOne(path + "hiveSelectCount", times);
    }

    public List<TimeQuantum> hiveSelectTimeQuantumByDay(Times times) {
        return this.db().selectList(path + "hiveSelectTimeQuantumByDay", times);
    }
}
