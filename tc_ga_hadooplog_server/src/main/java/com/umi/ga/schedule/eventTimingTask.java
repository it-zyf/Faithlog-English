package com.umi.ga.schedule;

import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;
import com.umi.ga.service.clientInterface.eventLogManageService;
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class eventTimingTask {
    private Logger evlog = LoggerFactory.getLogger("eventLog");

    @Autowired
    private HadoopLogTimeQuantumService timeQuantumService;


    @Autowired
    private eventLogManageService eventlogmanageservice;

    //事件定时任务
//    @Scheduled(cron = "0 0 1 * * ?")
    public void eventTask() throws Exception {
        List<Times> list = timeQuantumService.selectTableByColumn(new tableDate("event_distribution", "log_time", "", ""));
        for (Times t : list) {
            HttpResult hresu = eventlogmanageservice.hiveSelectEventCustom(t);

            HttpResult mresu = eventlogmanageservice.saveEventDataForMysql(hresu);
            if (!mresu.isState() || !hresu.isState()) {
                evlog.info("写入失败");
            }
        }
    }
}
