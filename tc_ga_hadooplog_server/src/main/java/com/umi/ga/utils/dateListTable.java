package com.umi.ga.utils;

import com.umi.ga.analysis.model.DelayTimeDistribution;
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
public class dateListTable {

    @Autowired
    private HadoopLogTimeQuantumService timeQuantumService;

    public  List<String> returnDate(String table){
        DelayTimeDistribution dtDistribution = timeQuantumService.selectMaxTimeDateDealyTime();
        return null;
    }
}
