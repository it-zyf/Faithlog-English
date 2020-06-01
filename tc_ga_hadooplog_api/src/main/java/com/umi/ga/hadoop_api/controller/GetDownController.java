package com.umi.ga.hadoop_api.controller;

import com.umi.ga.analysis.model.conf_area;
import com.umi.ga.analysis.model.conf_userinfo;
import com.umi.ga.analysis.model.type_field;
import com.umi.ga.common.HttpResult;
import com.umi.ga.common.PagingResult;
import com.umi.ga.hadoop_api.provider.SystemManageProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GetDownController {
    @Autowired
    private SystemManageProvider systemManageProvider;
    //用户管理
    @CrossOrigin
    @RequestMapping(value = "/queryUsers")
    @ResponseBody
    public Object queryUsers(conf_userinfo al) {
        PagingResult result = new PagingResult();
        result = systemManageProvider.select_Users(al);//查询方法
        return result;

    }
    //根据ID获取用户
    @CrossOrigin
    @RequestMapping(value = "/queryUsersById")
    @ResponseBody
    public Object queryUsersById(conf_userinfo al)  {
        PagingResult result = new PagingResult();
        result = systemManageProvider.queryUsersById(al);//查询方法
        return result;

    }
    //修改用户
    @CrossOrigin
    @RequestMapping("/updateUser")
    @ResponseBody
    public Object updateLogin(conf_userinfo al) {
        HttpResult result = new HttpResult();
        result = systemManageProvider.update_User(al);//修改方法
        return result;

    }
    //添加用户
    @CrossOrigin
    @RequestMapping("/addUser")
    @ResponseBody
    public Object addUser(conf_userinfo al)  {
        HttpResult result = new HttpResult();
        result = systemManageProvider.add_User(al);//添加用户
        return result;

    }
    //删除用户
    @CrossOrigin
    @RequestMapping("/deleteUser")
    @ResponseBody
    public Object deleteUser(conf_userinfo al) {
        HttpResult result = new HttpResult();
        result = systemManageProvider.deleteUser(al);//删除用户
        return result;

    }


    /**
     * 获取区服
     * @param al
     * @return
     */
    @CrossOrigin
    @RequestMapping("/queryAreas")
    @ResponseBody
    public Object queryAreas(conf_area al)  {
        PagingResult result = new PagingResult();
        result = systemManageProvider.get_Areas(al);//查询区服
        return result;

    }

    //添加区服
    @RequestMapping("/addAreas")
    @ResponseBody
    public Object addAreas(conf_area al)  {
        HttpResult result = new HttpResult();
        result = systemManageProvider.add_Areas(al);//添加区服
        return result;

    }
    //修改区服
    @RequestMapping("/updateAreas")
    @ResponseBody
    public Object updateAreas(conf_area al) {
        HttpResult result = new HttpResult();
        result = systemManageProvider.update_Areas(al);//修改方法
        return result;

    }

    //删除区服
    @RequestMapping("/deleteAreas")
    @ResponseBody
    public Object deleteAreas(conf_area al) {
        HttpResult result = new HttpResult();
        result = systemManageProvider.delete_Areas(al);//删除区服
        return result;

    }




    /**
     * 充值渠道
     */
    //查询下拉字段
    @CrossOrigin
    @RequestMapping("/queryField")
    @ResponseBody
    public Object queryField(type_field al) {
        PagingResult result = new PagingResult();
        result = systemManageProvider.get_Field(al);//查询区服
        return result;

    }


}
