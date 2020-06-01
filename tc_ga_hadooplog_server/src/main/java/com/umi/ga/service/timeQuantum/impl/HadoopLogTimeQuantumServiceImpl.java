package com.umi.ga.service.timeQuantum.impl;

import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.DelayTimeDistributionDao;
import com.umi.ga.analysis.dao.IPaddrDistributionDao;
import com.umi.ga.analysis.dao.NetworkDistributionDao;
import com.umi.ga.analysis.dao.dataInfoDao;
import com.umi.ga.analysis.model.DelayTimeDistribution;
import com.umi.ga.analysis.model.IPaddrDistribution;
import com.umi.ga.analysis.model.NetworkDistribution;
import com.umi.ga.entitys.TimeQuantum;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import com.umi.ga.utils.dataUtil;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class HadoopLogTimeQuantumServiceImpl implements HadoopLogTimeQuantumService {
    protected final Logger log = Logger.getLogger(HadoopLogTimeQuantumServiceImpl.class);//日志
    @Autowired
    private DelayTimeDistributionDao dtDistribution;

    @Autowired
    private IPaddrDistributionDao ipDistribution;

    @Autowired
    private NetworkDistributionDao netDistribution;

    @Autowired
    private dataInfoDao dataInfo;

    @Override
    public List<Times> selectTableByColumn(tableDate table) {
        List<Times> dataList = new ArrayList<Times>();
        try {
            String datestart = dtDistribution.selectTableByColumn(table);
            LocalDate dateend = LocalDate.now();
            dataList = dataUtil.getDays(datestart, dateend.toString());
            System.out.println(dataList);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return dataList;
    }

    @Override
    public DelayTimeDistribution selectMaxTimeDateDealyTime() {
        return dtDistribution.selectMaxTimeDateDealyTime();
    }

    @Override
    public IPaddrDistribution selectMaxTimeIPaddr() {
        return ipDistribution.selectMaxTimeIPaddr();
    }

    @Override
    public NetworkDistribution selectMaxTimeNetwork() {
        return netDistribution.selectMaxTimeNetwork();
    }

    @Override
    public List<TimeQuantum> hiveSelectTimeQuantumByDay(Times times) {
        return dataInfo.hiveSelectTimeQuantumByDay(times);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String insertBatch(LinkedList<DelayTimeDistribution> delayTimeList, LinkedList<IPaddrDistribution> addressList, LinkedList<NetworkDistribution> networkList) {
        int dt = 0, addr = 0, net = 0;
        if (null != delayTimeList && 0 != delayTimeList.size()) {
            dt = dtDistribution.insertBatch(delayTimeList);
        }
        if (null != addressList && 0 != addressList.size()) {
            addr = ipDistribution.insertBatch(addressList);
        }
        if (null != networkList && 0 != networkList.size()) {
            net = netDistribution.insertBatch(networkList);
        }
        return dt + " : " + addr + " : " + net;
    }
}
