package com.umi.ga.hadoop_api.provider;

import com.comb.framework.proxy.annotation.ProxyService;
import com.umi.ga.analysis.model.conf_area;
import com.umi.ga.analysis.model.conf_userinfo;
import com.umi.ga.analysis.model.type_field;
import com.umi.ga.common.HttpResult;
import com.umi.ga.common.PagingResult;
import com.umi.ga.service.clientInterface.SystemManageService;
import org.springframework.stereotype.Service;

@Service
public class SystemManageProvider {
    @ProxyService
    private SystemManageService systemManageService;
    //查询区服
    public PagingResult get_Areas(conf_area al){
        return systemManageService.get_Areas(al);
    }
    //添加区服
    public HttpResult add_Areas(conf_area al){
        return systemManageService.add_Areas(al);
    }
    //修改区服
    public HttpResult update_Areas(conf_area al){
        return systemManageService.update_Areas(al);
    }
    //删除区服
    public HttpResult delete_Areas(conf_area al){
        return systemManageService.deleteAreas(al);
    }
    //用户管理
    public PagingResult select_Users(conf_userinfo al){
        return systemManageService.select_Users(al);
    }
    //根据id获取用户
    public PagingResult queryUsersById(conf_userinfo al){
        return systemManageService.queryUsersById(al);
    }
    //修改用户
    public HttpResult update_User(conf_userinfo al){
        return systemManageService.update_User(al);
    }
    //添加用户
    public HttpResult add_User(conf_userinfo al){
        return systemManageService.add_User(al);
    }
    //删除用户
    public HttpResult deleteUser(conf_userinfo al){
        return systemManageService.deleteUser(al);
    }

    //查询渠道号
    public PagingResult get_Field(type_field al){
        return systemManageService.get_Field(al);
    }

}
