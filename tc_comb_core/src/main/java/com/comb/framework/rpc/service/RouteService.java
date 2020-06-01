package com.comb.framework.rpc.service;


import com.comb.framework.rpc.model.Request;

import java.util.List;

/**
 * 路由接口
 * 
 * @author fwb
 *
 */
public interface RouteService {

	public String getRoute(Request request, List<String> list);
	
}
