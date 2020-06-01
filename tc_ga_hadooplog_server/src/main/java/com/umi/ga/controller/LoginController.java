package com.umi.ga.controller;


import com.comb.framework.proxy.annotation.ProxyService;
import com.comb.framework.redis.RedisHelper;
import com.umi.ga.analysis.model.eventCustom;
import com.umi.ga.analysis.model.eventManage;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;
import com.umi.ga.service.clientInterface.eventLogManageService;
import com.umi.ga.service.dataInfo.HadoopLogManageService;
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import com.umi.ga.utils.dateListTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Component
@RestController
public class LoginController {
    @ProxyService
    private eventLogManageService HadoopLog;
    @ProxyService
    private HadoopLogTimeQuantumService HadoopLog1;
    @RequestMapping(value = "/sessions", method = RequestMethod.GET)
    public Object sessions (HttpServletRequest request){
        Map<String, Object> map = new HashMap<>();
        List<Times> aaa = new ArrayList<Times>();
        Times a = new Times();
        a.setNumber(123);
        aaa.add(a);
        RedisHelper.Instance().setlist("aaa",aaa);
        List<Times> aaaa = RedisHelper.Instance().getlistByKey("aaa");
        map.put("sessionId", request.getSession().getId());
        map.put("message", request.getSession().getAttribute("centeruser"));
        return map;
    }
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public HttpResult test (HttpServletRequest request,Times time){
        HttpResult aaa= new HttpResult();
        //aaa= HadoopLog.hiveSelectEventCustom(time);
        List<Times> list = HadoopLog1.selectTableByColumn(new tableDate("event_distribution","log_time","event_id","1002"));
        aaa.setData(list);
        return aaa;
    }
}
