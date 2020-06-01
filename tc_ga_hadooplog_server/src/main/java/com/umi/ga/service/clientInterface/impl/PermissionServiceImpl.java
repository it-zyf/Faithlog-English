package com.umi.ga.service.clientInterface.impl;

import com.alibaba.fastjson.JSONObject;
import com.comb.framework.auth.ThreadContext;
import com.comb.framework.db.annotation.DbSwitch;
import com.mysql.jdbc.StringUtils;
import com.umi.ga.analysis.dao.DailyAnalysisDao;
import com.umi.ga.analysis.dao.MenuDao;
import com.umi.ga.analysis.dao.PermissionDao;
import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.analysis.model.Menu;
import com.umi.ga.analysis.model.Permission;
import com.umi.ga.entitys.Times;
import com.umi.ga.service.clientInterface.PermissionService;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Component
@Transactional
@Aspect
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private MenuDao menuDao;

    @Autowired
    private PermissionDao permissionDao;

    @Autowired
    private DailyAnalysisDao dailyAnalysisDao;


    /**
     * 总控页面 -- 查询数据
     *
     * @param paramJson = {startTime: yyyy-MM-dd, endTime: yyyy-MM-dd }
     * @return m
     */
    @Override
    public String hiveQueryData(String paramJson) {
        // 创建一个json对象
        JSONObject json = new JSONObject();
        try {
            JSONObject jsonObject = JSONObject.parseObject(paramJson);
            String startTime = jsonObject.getString("startTime");
            String endTime = jsonObject.getString("endTime");

            Times time = new Times(startTime, endTime, null);
            // 重置数据源为 hive源
//            ThreadContext.setMethodName("hive");
            DailyAnalysis dailyAnalysis = dailyAnalysisDao.hiveQueryData(time);

            // 注册 addUser
            json.put("addUser", dailyAnalysis.getDailyRegister());
            // 全部活跃 avgActive -- 全部去重
            json.put("avgActive", dailyAnalysis.getActiveNumber());
            // 支付人数 payNumber
            json.put("payNumber", dailyAnalysis.getPayNumber());
            // 支付总额 payAmount
            json.put("payAmount", dailyAnalysis.getPayAmount());
            // 状态码 state  = false or true
            json.put("state", true);
        } catch (Exception e) {
            json.put("state", false);
            e.printStackTrace();
        }
        return JSONObject.toJSONString(json);
    }


    @Override
    public String assignPermission(String paramJson) {
        Map<String, Object> map = new HashMap<>();
        JSONObject jsonObject = JSONObject.parseObject(paramJson);
        String userId = jsonObject.getString("userId");
        //清空权限
        permissionDao.clearPermission(userId.trim());
        String ps = jsonObject.getString("ps");
        //如果是0表示清空权限
        if (ps.equals("0")) {
            return "success";
        }
        String[] split = ps.split(",");
        List<String> list = new ArrayList<>(Arrays.asList(split));
//处理空格问题
        List<String> newList = new ArrayList<>();
        list.forEach(s -> {
            if (!StringUtils.isNullOrEmpty(s.trim())) {
                newList.add(s.trim());
            }
        });
        if (newList.size() == 0) {

            return "error";
        }
//去重
        List<String> lisss = newList.stream().distinct().collect(Collectors.toList());
//        分配权限
        for (String s : lisss) {
            if (StringUtils.isNullOrEmpty(s.trim())) {
                return "error";
            }
            //查菜单pid
            Menu menu = menuDao.queryMenu(Integer.valueOf(s.trim()));
            if (menu == null) {
                throw new NullPointerException("数据库中没有menuId为：" + s + "的菜单！");
            }
            Permission permission = new Permission();
            permission.setMenuPid(menu.getPId());
            permission.setMenuId(menu.getMenuId());
            permission.setUserId(userId);
            permissionDao.insertPermission(permission);
        }
        return "success";
    }


    @Override
    public String queryPermission(String userId) {

        JSONObject jsonObject = JSONObject.parseObject(userId.trim());
        String userId1 = jsonObject.getString("userId");
        List<Permission> permissions = permissionDao.queryAllPermissionByUserId(userId1.trim());
        List<Menu> m3List;
        List<Menu> m2List;
        List<Menu> m1List = new ArrayList<>();
        Menu menu1;
        for (Permission permission : permissions) {
            // 一级菜单     菜单信息
            menu1 = menuDao.queryMenu(permission.getMenuId());
            if (null == menu1) {
                throw new NullPointerException("menu表没有有这个数据！menuId：" + permission.getMenuId());
            }
            //查询二级菜单
            Permission p1 = new Permission();
            p1.setUserId(userId1.trim());
            p1.setMenuPid(permission.getMenuId());
            List<Permission> p2List = permissionDao.queryNextMenu(p1);
            m2List = new ArrayList<>();
            Menu menu2;
            for (Permission p2 : p2List) {
                //二級菜單  菜单信息
                menu2 = menuDao.queryMenu(p2.getMenuId());
                if (null == menu2) {
                    throw new NullPointerException("menu表没有这个数据，menuId：" + p2.getMenuId());
                }
                //查询三级菜单
                Permission p = new Permission();
                p.setUserId(userId1.trim());
                p.setMenuPid(p2.getMenuId());
                List<Permission> p3List = permissionDao.queryNextMenu(p);
                m3List = new ArrayList<>();
                for (Permission p3 : p3List) {
                    //三級菜單 菜单信息
                    Menu menu3 = menuDao.queryMenu(p3.getMenuId());
                    if (null == menu3) {
                        throw new NullPointerException("menu表没有这个数据，menuId：" + p3.getMenuId());
                    }
                    m3List.add(menu3);
                }
                if (m3List.size() > 0) {
                    menu2.setMenus(m3List);
                }
                m2List.add(menu2);
            }
            if (m2List.size() > 0) {
                menu1.setMenus(m2List);
            }
            m1List.add(menu1);
        }
//        String s = JSONObject.toJSONString(m1List);
//        System.out.println(s);
        return JSONObject.toJSONString(m1List);

    }

    @Override
    public String TraversalMenu() {

        //所有的一级菜单
        List<Menu> menus = menuDao.queryFirstMenu();
        List<Menu> m1List = new ArrayList<>();
        for (Menu menu : menus) {
            //一级菜单
            Menu menu4 = menuDao.queryMenu(menu.getMenuId());
//            所有的二级菜单
            List<Menu> menus1 = menuDao.querySecondMenu(menu4.getMenuId());
            List<Menu> m2List = new ArrayList<>();
            for (Menu menu1 : menus1) {
//                二级菜单
                Menu menu5 = menuDao.queryMenu(menu1.getMenuId());
                //所有的三级菜单
                List<Menu> menus2 = menuDao.queryThridMenu(menu5.getMenuId());
                List<Menu> m3List = new ArrayList<>();
                for (Menu menu2 : menus2) {
//                    三级菜单
                    Menu menu3 = menuDao.queryMenu(menu2.getMenuId());
                    m3List.add(menu3);
                }
                menu5.setMenus(m3List); //三级菜单设置进去二级菜单
                m2List.add(menu5);
            }
            menu4.setMenus(m2List);
            m1List.add(menu4);
        }
        return JSONObject.toJSONString(m1List);
    }


    @Override
    public List<Menu> queryPermission1(String usercode) {
        List<Menu> m1List = new ArrayList<>();
        try {
            List<Permission> permissions = permissionDao.queryAllPermissionByUserId(usercode.trim());
            List<Menu> m3List;
            List<Menu> m2List;
            Menu menu1;
            for (Permission permission : permissions) {
                // 一级菜单     菜单信息
                menu1 = menuDao.queryMenu(permission.getMenuId());
                if (null == menu1) {
                    throw new NullPointerException("menu表没有有这个数据！menuId：" + permission.getMenuId());
                }
                //查询二级菜单
                Permission p1 = new Permission();
                p1.setUserId(usercode.trim());
                p1.setMenuPid(permission.getMenuId());
                List<Permission> p2List = permissionDao.queryNextMenu(p1);
                m2List = new ArrayList<>();
                Menu menu2;
                for (Permission p2 : p2List) {
                    //二級菜單  菜单信息
                    menu2 = menuDao.queryMenu(p2.getMenuId());
                    if (null == menu2) {
                        throw new NullPointerException("menu表没有这个数据，menuId：" + p2.getMenuId());
                    }
                    //查询三级菜单
                    Permission p = new Permission();
                    p.setUserId(usercode.trim());
                    p.setMenuPid(p2.getMenuId());
                    List<Permission> p3List = permissionDao.queryNextMenu(p);
                    m3List = new ArrayList<>();
                    for (Permission p3 : p3List) {
                        //三級菜單 菜单信息
                        Menu menu3 = menuDao.queryMenu(p3.getMenuId());
                        if (null == menu3) {
                            throw new NullPointerException("menu表没有这个数据，menuId：" + p3.getMenuId());
                        }
                        m3List.add(menu3);
                    }
                    if (m3List.size() > 0) {
                        menu2.setMenus(m3List);
                    }
                    m2List.add(menu2);
                }
                if (m2List.size() > 0) {
                    menu1.setMenus(m2List);
                }
                m1List.add(menu1);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return m1List;
    }
}
