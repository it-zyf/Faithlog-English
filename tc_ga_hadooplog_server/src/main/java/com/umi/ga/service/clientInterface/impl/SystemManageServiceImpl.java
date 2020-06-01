package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.db.annotation.DbSwitch;
import com.umi.ga.analysis.dao.UserInfoDao;
import com.umi.ga.analysis.dao.conf_areaDao;
import com.umi.ga.analysis.model.conf_area;
import com.umi.ga.analysis.model.conf_userinfo;
import com.umi.ga.analysis.model.type_field;
import com.umi.ga.common.HttpResult;
import com.umi.ga.common.PagingResult;
import com.umi.ga.service.clientInterface.SystemManageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.List;

//import com.github.pagehelper.PageHelper;
@Service
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class SystemManageServiceImpl implements SystemManageService {
    @Autowired
    private com.umi.ga.analysis.dao.conf_areaDao conf_areaDao;
    @Autowired
    private com.umi.ga.analysis.dao.type_fieldDao type_fieldDao;

    @Autowired
    private UserInfoDao userInfoDao;

    @Override
    public PagingResult get_Areas(conf_area al) {
        PagingResult result = new PagingResult();
        try {
            List<conf_area> au = conf_areaDao.getAreas(al);
//            Page<Object> startPage = PageHelper.startPage(1,50);
//            result.setTotal(startPage.getTotal());
//            result.setPage(startPage.getPages());
            result.setState(true);
            result.setRows(au);
            result.setMessage("查询成功");
        } catch (Exception e) {
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult add_Areas(conf_area al) {
        HttpResult result = new HttpResult();
        ResultSet rs = null;
        try {
            int au = conf_areaDao.insert(al);
            result.setState(true);
            result.setData(au);
            result.setMessage("添加成功");
        } catch (Exception e) {
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult update_Areas(conf_area al) {
        HttpResult result = new HttpResult();
        try {
            int au = conf_areaDao.updateByPrimaryKeySelective(al);
            result.setState(true);
            result.setData(au);
            result.setMessage("修改成功");
        } catch (Exception e) {
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult deleteAreas(conf_area al) {
        HttpResult result = new HttpResult();
        try {
            int au = conf_areaDao.deleteByPrimaryKey(al.getConfid());
            result.setState(true);
            result.setData(au);
            result.setMessage("删除成功");
        } catch (Exception e) {
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult select_Users(conf_userinfo al) {
        PagingResult result = new PagingResult();
        try {
//            Page<Object> startPage = PageHelper.startPage(1,50);
            List<conf_userinfo> au = userInfoDao.getUserInfo(al);
//            result.setTotal(startPage.getTotal());
//            result.setPage(startPage.getPages());
            result.setState(true);
            result.setRows(au);
            result.setMessage("查询成功");
            // resultMap.put("jsessionId", request.getSession().getId());
        } catch (Exception e) {
//            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult queryUsersById(conf_userinfo al) {
        PagingResult result = new PagingResult();
        try {
            conf_userinfo au = userInfoDao.selectByPrimaryKey(al.getUserid());
            result.setState(true);
            result.setRows(au);
            result.setMessage("查询成功");
            // resultMap.put("jsessionId", request.getSession().getId());
        } catch (Exception e) {
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult update_User(conf_userinfo al) {
        HttpResult result = new HttpResult();
        try {
            int au = userInfoDao.updateByPrimaryKeySelective(al);
            result.setState(true);
            result.setData(au);
            result.setMessage("修改成功");
            // resultMap.put("jsessionId", request.getSession().getId());
        } catch (Exception e) {
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult add_User(conf_userinfo al) {
        HttpResult result = new HttpResult();
        ResultSet rs = null;
        try {
//			loginoutmapper.setname();
            int au = userInfoDao.insert(al);
            result.setState(true);
            result.setData(au);
            result.setMessage("添加成功");
            // resultMap.put("jsessionId", request.getSession().getId());
        } catch (Exception e) {
//            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult deleteUser(conf_userinfo al) {
        HttpResult result = new HttpResult();
        ResultSet rs = null;
        try {
            int au = userInfoDao.deleteByPrimaryKey(al.getUserid());
            result.setState(true);
            result.setData(au);
            result.setMessage("删除成功");
        } catch (Exception e) {
//            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public PagingResult get_Field(type_field al) {
        PagingResult result = new PagingResult();
        try {
//            Page<Object> startPage = PageHelper.startPage(1,50);
            List<type_field> au = type_fieldDao.getfield(al);
//            result.setTotal(startPage.getTotal());
//            result.setPage(startPage.getPages());
            result.setState(true);
            result.setRows(au);
            result.setMessage("查询成功");
            // resultMap.put("jsessionId", request.getSession().getId());
        } catch (Exception e) {
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }
}
