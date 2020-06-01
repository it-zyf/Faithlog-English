package com.umi.ga.service.timeQuantum;

import com.umi.ga.analysis.model.DelayTimeDistribution;
import com.umi.ga.analysis.model.IPaddrDistribution;
import com.umi.ga.analysis.model.NetworkDistribution;
import com.umi.ga.entitys.TimeQuantum;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;

import java.util.LinkedList;
import java.util.List;

public interface HadoopLogTimeQuantumService {

    List<Times> selectTableByColumn(tableDate table);

    DelayTimeDistribution selectMaxTimeDateDealyTime();

    IPaddrDistribution selectMaxTimeIPaddr();

    NetworkDistribution selectMaxTimeNetwork();

    List<TimeQuantum> hiveSelectTimeQuantumByDay(Times times);

    String insertBatch(LinkedList<DelayTimeDistribution> delayTimeList, LinkedList<IPaddrDistribution> addressList, LinkedList<NetworkDistribution> networkList);
}
