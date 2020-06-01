package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.BreakdownDistribution;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class BreakdownDistributionDao extends BaseMyIbatisDao<BreakdownDistribution, Long> {

    String path = this.getEntityClass().getSimpleName() + '.';

    @Override
    public Class<BreakdownDistribution> getEntityClass() {
        return BreakdownDistribution.class;
    }

    public List<Times> hiveSelectTime(Times times) {
        return this.db().selectList(path + "hiveSelectTime", times);
    }

    public int insertBatch(List<BreakdownDistribution> bdDisList) {
        return this.db().insert(path + "insertBatch", bdDisList);
    }

    public List<Times> selectBreakdownNow(Times times) {
        return this.db().selectList(path + "selectBreakdownNow", times);
    }

    //
    public List<BreakdownDistribution> selectBreakdown(Times times) {
        return this.db().selectList(path + "selectBreakdown", times);
    }

    public List<BreakdownDistribution> hiveSelectBreakdownScreenResolution(Times times) {
        return this.db().selectList(path + "hiveSelectBreakdownScreenResolution", times);
    }

    public List<BreakdownDistribution> hiveSelectBreakdownBrand(Times times) {
        return this.db().selectList(path + "hiveSelectBreakdownBrand", times);
    }

    public List<BreakdownDistribution> hiveSelectBreakdownOS(Times times) {
        return this.db().selectList(path + "hiveSelectBreakdownOS", times);
    }

    public List<BreakdownDistribution> hiveSelectBreakdownNetwork(Times times) {
        return this.db().selectList(path + "hiveSelectBreakdownNetwork", times);
    }

    public List<BreakdownDistribution> hiveSelectRunMemory(Times times) {
        return this.db().selectList(path + "hiveSelectRunMemory", times);
    }

    public List<BreakdownDistribution> hiveSelectBreakdownRunMemory(Times times) {
        return this.db().selectList(path + "hiveSelectBreakdownRunMemory", times);
    }

    public List<BreakdownDistribution> hiveSelectBreakdownCPU(Times times) {
        return this.db().selectList(path + "hiveSelectBreakdownCPU", times);
    }

    public List<BreakdownDistribution> hiveSelectBreakdownGPU(Times times) {
        return this.db().selectList(path + "hiveSelectBreakdownGPU", times);
    }


    public List<BreakdownDistribution> selectBreakdownScreenResolutionNow(Times times) {
        return this.db().selectList(path + "selectBreakdownScreenResolutionNow", times);
    }

    public List<BreakdownDistribution> selectBreakdownBrandNow(Times times) {
        return this.db().selectList(path + "selectBreakdownBrandNow", times);
    }

    public List<BreakdownDistribution> selectBreakdownOSNow(Times times) {
        return this.db().selectList(path + "selectBreakdownOSNow", times);
    }

    public List<BreakdownDistribution> selectBreakdownNetworkNow(Times times) {
        return this.db().selectList(path + "selectBreakdownNetworkNow", times);
    }

    public List<BreakdownDistribution> selectBreakdownRunMemoryNow(Times times) {
        return this.db().selectList(path + "selectBreakdownRunMemoryNow", times);
    }

    public List<BreakdownDistribution> selectBreakdownCPUNow(Times times) {
        return this.db().selectList(path + "selectBreakdownCPUNow", times);
    }

    public List<BreakdownDistribution> selectBreakdownGPUNow(Times times) {
        return this.db().selectList(path + "selectBreakdownGPUNow", times);
    }

    public List<BreakdownDistribution> selectBreakdownScreenResolution(List<Times> timeDateList) {
        return this.db().selectList(path + "selectBreakdownScreenResolution", timeDateList);
    }

    public List<BreakdownDistribution> selectBreakdownBrand(List<Times> timeDateList) {
        return this.db().selectList(path + "selectBreakdownBrand", timeDateList);
    }

    public List<BreakdownDistribution> selectBreakdownOS(List<Times> timeDateList) {
        return this.db().selectList(path + "selectBreakdownOS", timeDateList);
    }

    public List<BreakdownDistribution> selectBreakdownNetwork(List<Times> timeDateList) {
        return this.db().selectList(path + "selectBreakdownNetwork", timeDateList);
    }

    public List<BreakdownDistribution> selectBreakdownRunMemory(List<Times> timeDateList) {
        return this.db().selectList(path + "selectBreakdownRunMemory", timeDateList);
    }

    public List<BreakdownDistribution> selectBreakdownCPU(List<Times> timeDateList) {
        return this.db().selectList(path + "selectBreakdownCPU", timeDateList);
    }

    public List<BreakdownDistribution> selectBreakdownCPUSpecial(Times t1) {
        return this.db().selectList(path + "selectBreakdownCPUSpecial", t1);
    }

    public List<BreakdownDistribution> selectBreakdownGPU(List<Times> timeDateList) {
        return this.db().selectList(path + "selectBreakdownGPU", timeDateList);
    }

    public List<BreakdownDistribution> selectBreakdownGPUSpecial(Times t1) {
        return this.db().selectList(path + "selectBreakdownGPUSpecial", t1);
    }

    public Times selectBreakdownCount(List timeDateList) {
        return this.db().selectOne(path + "selectBreakdownCount", timeDateList);
    }

    public Times selectBreakdownCountNow(Times times) {
        return this.db().selectOne(path + "selectBreakdownCountNow", times);
    }

    public List<BreakdownDistribution> hiveSelectBreakdownTime(Times times) {
        return this.db().selectList(path + "hiveSelectBreakdownTime", times);
    }
}