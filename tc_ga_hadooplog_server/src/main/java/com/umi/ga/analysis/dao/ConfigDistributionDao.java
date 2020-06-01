package com.umi.ga.analysis.dao;

import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.ConfigDistribution;
import com.umi.ga.entitys.Times;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class ConfigDistributionDao extends BaseMyIbatisDao<ConfigDistribution, Long> {

    String path = this.getEntityClass().getSimpleName() + '.';

    @Override
    public Class<ConfigDistribution> getEntityClass() {
        return ConfigDistribution.class;
    }

    public List<ConfigDistribution> hiveSelectScreenResolution(Times times) {
        return this.db().selectList(path + "hiveSelectScreenResolution", times);
    }

    public List<ConfigDistribution> hiveSelectBrand(Times times) {
        return this.db().selectList(path + "hiveSelectBrand", times);
    }

    public List<ConfigDistribution> hiveSelectOS(Times times) {
        return this.db().selectList(path + "hiveSelectOS", times);
    }

    public List<ConfigDistribution> hiveSelectRunMemory(Times times) {
        return this.db().selectList(path + "hiveSelectRunMemory", times);
    }

    public List<ConfigDistribution> hiveSelectCPU(Times times) {
        return this.db().selectList(path + "hiveSelectCPU", times);
    }

    public List<ConfigDistribution> hiveSelectGPU(Times times) {
        return this.db().selectList(path + "hiveSelectGPU", times);
    }

    public List<ConfigDistribution> hiveSelectNumOfPeople(Times times) {
        return this.db().selectList(path + "hiveSelectNumOfPeople", times);
    }

    /*
        ###
     */

    public ConfigDistribution selectMaxTimeDateResolution() {
        return this.db().selectOne(path + "selectMaxTimeDateResolution");
    }

    public int insertBatch(List<ConfigDistribution> srList) {
        return this.db().insert(path + "insertBatch", srList);
    }

    public List<ConfigDistribution> selectScreenResolutionNow(Times times) {
        return this.db().selectList(path + "selectScreenResolutionNow", times);
    }

    public List<ConfigDistribution> selectBrandNow(Times times) {
        return this.db().selectList(path + "selectBrandNow", times);
    }

    public List<ConfigDistribution> selectOSNow(Times times) {
        return this.db().selectList(path + "selectOSNow", times);
    }

    public List<ConfigDistribution> selectRunMemoryNow(Times times) {
        return this.db().selectList(path + "selectRunMemoryNow", times);
    }

    public List<ConfigDistribution> selectCPUNow(Times times) {
        return this.db().selectList(path + "selectCPUNow", times);
    }

    public List<ConfigDistribution> selectGPUNow(Times times) {
        return this.db().selectList(path + "selectGPUNow", times);
    }


    public List<ConfigDistribution> selectScreenResolution(List<Times> timeDateList) {
        return this.db().selectList(path + "selectScreenResolution", timeDateList);
    }

    public List<ConfigDistribution> selectBrand(List<Times> timeDateList) {
        return this.db().selectList(path + "selectBrand", timeDateList);
    }

    public List<ConfigDistribution> selectOS(List<Times> timeDateList) {
        return this.db().selectList(path + "selectOS", timeDateList);
    }

    public List<ConfigDistribution> selectRunMemory(List<Times> timeDateList) {
        return this.db().selectList(path + "selectRunMemory", timeDateList);
    }

    public List<ConfigDistribution> selectCPU(List<Times> timeDateList) {
        return this.db().selectList(path + "selectCPU", timeDateList);
    }

    public List<ConfigDistribution> selectGPU(List<Times> timeDateList) {
        return this.db().selectList(path + "selectGPU", timeDateList);
    }

    public List<ConfigDistribution> selectNumOfPeople(List<Times> times) {
        return this.db().selectList(path + "selectNumOfPeople", times);
    }

    public List<ConfigDistribution> selectCPUSpecial(Times t1) {
        return this.db().selectList(path + "selectCPUSpecial", t1);
    }

    public List<ConfigDistribution> selectGPUSpecial(Times t1) {
        return this.db().selectList(path + "selectGPUSpecial", t1);
    }

    public List<ConfigDistribution> hiveTest() {
        return this.db().selectList(path + "hiveTest");
    }
}
