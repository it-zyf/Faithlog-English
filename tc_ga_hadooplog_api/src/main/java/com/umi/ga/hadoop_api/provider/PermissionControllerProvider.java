package com.umi.ga.hadoop_api.provider;

import com.comb.framework.proxy.annotation.ProxyService;
import com.umi.ga.analysis.model.EyeUser;
import com.umi.ga.analysis.model.Menu;
import com.umi.ga.common.HttpResult;
import com.umi.ga.service.clientInterface.PermissionService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class PermissionControllerProvider {


    @ProxyService
    private PermissionService permissionService;


    public PermissionControllerProvider() {
    }


    /**
     * 查指定用户的菜单
     *
     * @param userId 用户id
     * @return
     */
    public String queryAll(@RequestBody String userId) {
        String s = permissionService.queryPermission(userId);
        return s;
    }

    /**
     * 查所有菜单
     *
     * @return
     */
    public String queryAllMenu() {
        return permissionService.TraversalMenu();
    }


    //赋权
    public String assignPermission(@RequestBody String paramJson) {
        return permissionService.assignPermission(paramJson);
    }


    public HttpResult centerLogin(HttpServletRequest request, HttpSession Session) {
        String username = request.getParameter("username");
        HttpResult result = new HttpResult();
        EyeUser user = new EyeUser();
        user.setAccount(username);
        if (null == user || user.getAccount().equals("")) {
            result.setState(false);
            result.setMessage("登录失败");
        } else {
            List<Menu> menus = permissionService.queryPermission1(username);
            user.setMenuList(menus);
            Session.setAttribute("localuser", user);
            result.setState(true);
            result.setData(user);
            result.setMessage("登录成功");
        }
        return result;
    }

    public HttpResult queryPermissionByName(String name) {
        HttpResult result = new HttpResult();
        List<Menu> menus = permissionService.queryPermission1(name);

        if (menus != null) {
            result.setData(menus);
            result.setState(true);
        }

        return result;
    }

    public String queryData(String paramJson) {
        return permissionService.hiveQueryData(paramJson);
    }
}
