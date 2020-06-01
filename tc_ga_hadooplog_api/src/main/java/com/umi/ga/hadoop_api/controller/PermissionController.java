package com.umi.ga.hadoop_api.controller;

import com.umi.ga.analysis.model.EyeUser;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;
import com.umi.ga.hadoop_api.provider.PermissionControllerProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @author NING MEI
 */
@Component
@CrossOrigin
@RestController
@RequestMapping("/admin")
public class PermissionController {


    @Autowired
    private PermissionControllerProvider permissionControllerProvider;

    /**
     * 总控页面 -- 查询数据
     *
     * @param paramJson
     * @return
     */
    @RequestMapping(value = "/queryData")
    public String queryData(@RequestBody String paramJson) {
        return permissionControllerProvider.queryData(paramJson);
    }

    /**
     * 查指定用户的菜单
     *
     * @param userId 用户id
     * @return
     */
    @RequestMapping("/queryPermission")
    @ResponseBody
    public String queryAll(@RequestBody String userId) {
        return permissionControllerProvider.queryAll(userId);
    }

    /**
     * 查所有菜单
     *
     * @return
     */
    @RequestMapping("/queryAllMenu")
    @ResponseBody
    public String queryAllMenu() {
        return permissionControllerProvider.queryAllMenu();
    }


    //赋权
    @RequestMapping("/assignPermission1")
    @ResponseBody
    public String assignPermission(@RequestBody String paramJson) {
        return permissionControllerProvider.assignPermission(paramJson);
    }


    @CrossOrigin
    @RequestMapping("/centerLogin.action")
    @ResponseBody
    public Object centerLogin(HttpServletRequest request, HttpSession Session) {
        HttpResult result = permissionControllerProvider.centerLogin(request, Session);
        return result;
    }


    //是否登录
    @RequestMapping("/isLogin.action")
    @ResponseBody
    public Object isLogin(HttpSession Session) {
        HttpResult result = new HttpResult();
        EyeUser obj = (EyeUser) Session.getAttribute("localuser");
        if (obj == null) {
            result.setState(false);
            result.setData(obj);
            result.setMessage("登录过期");
        } else {
            result = permissionControllerProvider.queryPermissionByName(obj.getAccount());
        }
        return result;
    }

}
