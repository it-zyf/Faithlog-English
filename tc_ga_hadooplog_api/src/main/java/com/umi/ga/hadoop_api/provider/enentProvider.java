package com.umi.ga.hadoop_api.provider;

import com.comb.framework.proxy.annotation.ProxyService;
import com.umi.ga.analysis.model.eventCustom;
import com.umi.ga.analysis.model.eventManage;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.clientInterface.eventLogManageService;
import org.springframework.stereotype.Service;

@Service
public class enentProvider {

    @ProxyService
    private eventLogManageService eventlog;

    //通过hive分析事件数据
    public HttpResult hiveSelectEventCustom(Times times) {
        return eventlog.hiveSelectEventCustom(times);
    }

    //保存事件信息
    public HttpResult saveEvent(eventManage event) {
        return eventlog.saveEvent(event);
    }

    //保存自定义事件组信息
    public HttpResult saveCustomEvent(eventCustom custom) {
        return eventlog.saveCustomEvent(custom);
    }

    //查询自定义事件组信息
    public HttpResult selectCustomEvent(Times times) {
        return eventlog.selectCustomEvent(times);
    }

    //根据事件id事件
    public HttpResult selectEventByEventId(Times times) {
        return eventlog.selectEventByEventId(times);
    }

    public HttpResult selectCustomEventList(Times times) {
        return eventlog.selectCustomEventList(times);
    }

    //查询所有事件
    public HttpResult selectAllEventList(Times times) {
        return eventlog.selectAllEvent(times);
    }

    //修改自定义事件组信息
    public HttpResult updateCustomEvent(eventCustom custom) {
        return eventlog.updateCustomEvent(custom);
    }

    //根据条件查询事件
    public HttpResult getEventManage(eventManage custom) {
        return eventlog.getEventManage(custom);
    }

    //删除自定义事件组信息
    public HttpResult deleteCustomEvent(eventCustom custom) {
        return eventlog.deleteCustomEvent(custom);
    }
    //手动生成事件信息
    public HttpResult generateEventData() { return eventlog.generateEventData(); }

}