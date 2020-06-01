package com.umi.ga.service.dataInfo;


import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.StartRetarder;
import com.umi.ga.entitys.Times;

public interface HadoopLogManageService {

    HttpResult hiveSelectTimeQuantum(Times times);

    HttpResult hiveSelectStartTime(Times times);

    HttpResult hiveSelectStart(Times times);

    /*
     *  ###
     *  ###
     */

    HttpResult selectStartTime(Times times);

    HttpResult selectStart(Times times);

    StartRetarder hiveSelectCount(Times times);

    HttpResult selectTimeQuantum(Times times);


    HttpResult test2();

    HttpResult selectStartTimeNow(Times times);

}
