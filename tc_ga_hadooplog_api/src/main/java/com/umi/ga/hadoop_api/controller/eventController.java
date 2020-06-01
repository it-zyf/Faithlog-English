package com.umi.ga.hadoop_api.controller;

import com.umi.ga.analysis.model.eventCustom;
import com.umi.ga.analysis.model.eventManage;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;
import com.umi.ga.hadoop_api.provider.enentProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Component
@RestController
public class eventController {

    @Autowired
    private enentProvider enent;
    //通过hive分析事件数据
    @CrossOrigin
    @RequestMapping(value = "/hiveSelectEventCustom")
    public HttpResult hiveSelectEventCustom(Times times) {
        HttpResult result = new HttpResult();
        result = enent.hiveSelectEventCustom(times);
        return result;
    }
    //保存事件信息
    @CrossOrigin
    @RequestMapping(value = "/saveEvent")
    public HttpResult saveEvent(eventManage event) {
        HttpResult result = new HttpResult();
        result = enent.saveEvent(event);
        return result;
    }
    //保存自定义事件组信息
    @CrossOrigin
    @RequestMapping(value = "/saveCustomEvent")
    public HttpResult saveCustomEvent(eventCustom custom) {
        HttpResult result = new HttpResult();
        result = enent.saveCustomEvent(custom);
        return result;
    }
    //修改自定义事件组信息
    @CrossOrigin
    @RequestMapping(value = "/updateCustomEvent")
    public HttpResult updateCustomEvent(eventCustom custom) {
        HttpResult result = new HttpResult();
        result = enent.updateCustomEvent(custom);
        return result;
    }
    //删除自定义事件组信息
    @CrossOrigin
    @RequestMapping(value = "/deleteCustomEvent")
    public HttpResult deleteCustomEvent(eventCustom custom) {
        HttpResult result = new HttpResult();
        result = enent.deleteCustomEvent(custom);
        return result;
    }
    //查询自定义事件组信息
    @CrossOrigin
    @RequestMapping(value = "/selectCustomEvent")
    public HttpResult selectCustomEvent(Times times) {
        HttpResult result = new HttpResult();
        result = enent.selectCustomEvent(times);
        return result;
    }
    //根据事件id事件
    @CrossOrigin
    @RequestMapping(value = "/selectEventByEventId")
    public HttpResult selectEventByEventId(Times times) {
        HttpResult result = new HttpResult();
        result = enent.selectEventByEventId(times);
        return result;
    }
    //查询所有自定义事件
    @CrossOrigin
    @RequestMapping(value = "/selectCustomEventList")
    public HttpResult selectCustomEventList(Times times) {
        HttpResult result = new HttpResult();
        result = enent.selectCustomEventList(times);
        return result;
    }
    //查询所有事件
    @CrossOrigin
    @RequestMapping(value = "/selectAllEventList")
    public HttpResult selectAllEventList(Times times) {
        HttpResult result = new HttpResult();
        result = enent.selectAllEventList(times);
        return result;
    }
    //根据条件查询事件
    @CrossOrigin
    @RequestMapping(value = "/getEventManage")
    public HttpResult getEventManage(eventManage event) {
        HttpResult result = new HttpResult();
        result = enent.getEventManage(event);
        return result;
    }
    //手动生成事件数据
    @CrossOrigin
    @RequestMapping(value = "/generateEventData")
    public HttpResult generateEventData() {
        HttpResult result = new HttpResult();
        result = enent.generateEventData();
        return result;
    }
}
