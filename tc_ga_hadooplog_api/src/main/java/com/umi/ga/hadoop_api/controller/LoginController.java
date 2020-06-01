package com.umi.ga.hadoop_api.controller;


import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;
import com.umi.ga.hadoop_api.provider.CenterProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Component
@RestController
public class LoginController {

    @Autowired
    private CenterProvider centerProvider;

    /**
     * 前端实时页面总查询
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping("/selectStart")
    public HttpResult selectStart(Times times) {
        HttpResult result = new HttpResult();
        result = centerProvider.hiveSelectStart(times);
        return result;
    }

    /**
     * 启动时刻图 五分钟刷新一次
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "selectStartTime")
    public HttpResult selectStartTime(Times times) {
        HttpResult result = new HttpResult();
        result = centerProvider.hiveSelectStartTime(times);
        return result;
    }

    /**
     * 延迟时间、ip分布、网络分布
     *
     * @param times
     * @return
     */
    @CrossOrigin
    @RequestMapping(value = "selectTimeQuantum")
    public HttpResult selectTimeQuantum(Times times) {
        HttpResult result = new HttpResult();
        result = centerProvider.hiveSelectTimeQuantum(times);
        return result;
    }
}