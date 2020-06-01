package com.umi.ga.controller;

import com.umi.ga.analysis.model.conf_area;
import com.umi.ga.analysis.model.type_field;
import com.umi.ga.common.PagingResult;
import com.umi.ga.service.clientInterface.SystemManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GetDownController {
    @Autowired
    private SystemManageService systemManageService;

    /**
     * 获取区服
     * @param al
     * @return
     */
    @RequestMapping("/queryAreas")
    @ResponseBody
    public Object queryAreas(conf_area al)  {
        PagingResult result = new PagingResult();
        result = systemManageService.get_Areas(al);//查询区服
        return result;

    }

    /**
     * 充值渠道
     */
    //查询下拉字段
    @RequestMapping("/queryField")
    @ResponseBody
    public Object queryField(type_field al) {
        PagingResult result = new PagingResult();
        result = systemManageService.get_Field(al);//查询区服
        return result;

    }


}
