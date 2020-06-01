package com.umi.ga.service.clientInterface;

import com.comb.framework.frame.base.BaseService;
import com.umi.ga.analysis.model.eventCustom;
import com.umi.ga.analysis.model.eventDistribution;
import com.umi.ga.analysis.model.eventManage;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;

public interface eventLogManageService extends BaseService<eventDistribution> {
    public HttpResult hiveSelectEventCustom(Times times);//通过hive分析事件数据

    public HttpResult hiveSelectCustom(Times times);//通过hive分析事件数据

    public HttpResult saveEventDataForMysql(HttpResult resule);//保存事件信息到mysql

    public HttpResult saveEvent(eventManage event);//保存事件信息

    public HttpResult saveCustomEvent(eventCustom custom);//保存自定义事件组信息

    public HttpResult updateCustomEvent(eventCustom custom);//修改自定义事件组信息

    public HttpResult deleteCustomEvent(eventCustom custom);//删除自定义事件组信息

    public HttpResult selectCustomEvent(Times times);//查询自定义事件组信息

    public HttpResult selectCustomEventList(Times times);//查询所有自定义事件

    public HttpResult selectEventByEventId(Times times);//根据事件id事件

    public HttpResult selectAllEvent(Times times);//查询所有事件

    public HttpResult getEventManage(eventManage event);//根据添加查询事件

    public HttpResult generateEventData();//手动生成事件数据


    HttpResult testImpala();
}
