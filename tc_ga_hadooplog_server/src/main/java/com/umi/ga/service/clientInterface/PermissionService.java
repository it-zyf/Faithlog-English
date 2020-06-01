package com.umi.ga.service.clientInterface;


import com.umi.ga.analysis.model.Menu;

import java.util.List;

public interface PermissionService {
    public String assignPermission(String paramJson);

    public String queryPermission(String userId);

    public String TraversalMenu();

    public List<Menu> queryPermission1(String userId);

    String hiveQueryData(String paramJson);
}
