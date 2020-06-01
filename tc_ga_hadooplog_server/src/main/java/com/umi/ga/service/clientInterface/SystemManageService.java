package com.umi.ga.service.clientInterface;

import com.umi.ga.analysis.model.conf_area;
import com.umi.ga.analysis.model.conf_userinfo;
import com.umi.ga.analysis.model.type_field;
import com.umi.ga.common.HttpResult;
import com.umi.ga.common.PagingResult;


public interface SystemManageService {
    //查询区服
    public PagingResult get_Areas(conf_area al);
    //添加区服
    public HttpResult add_Areas(conf_area al);
    //修改区服
    public HttpResult update_Areas(conf_area al);
    //删除区服
    public HttpResult deleteAreas(conf_area al);

    public PagingResult select_Users(conf_userinfo al);
    //根据id获取用户
    public PagingResult queryUsersById(conf_userinfo al);
    //修改用户
    public HttpResult update_User(conf_userinfo al);
    //添加用户
    public HttpResult add_User(conf_userinfo al);
    //删除用户
    public HttpResult deleteUser(conf_userinfo al);

    //查询渠道号
    public PagingResult get_Field(type_field al);

}
