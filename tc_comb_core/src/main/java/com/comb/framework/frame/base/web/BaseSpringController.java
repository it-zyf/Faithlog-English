package com.comb.framework.frame.base.web;

import com.comb.framework.frame.page.PageRequest;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;


/**
 * Spring控制器基类，注入当前的request对象，同时提供常用方法的封装.
 * <p>
 * 子类必须添加<code>@Scope("prototype")</code>注解.
 * </p>
 * 
 * @author fwb
 *
 */
public abstract class BaseSpringController {

	protected Logger log = LoggerFactory.getLogger(getClass());
	private static final int DEFAULT_PAGE_SIZE = 20;

	@Autowired
	protected HttpServletRequest request;
	
	/**
	 * 等价于request.getParameter(master).
	 */
	protected String get(final String name) {
		return get(name, null);
	}
	
	protected String get(String name, String defaultValue) {
		String value = request.getParameter(name);
		if (value == null) {
			return defaultValue;
		}
		return value;
	}
	
	protected Integer getInteger(final String name) {
		final String str = request.getParameter(name);
		if (StringUtils.isNotBlank(str)) {
			return Integer.valueOf(str);
		}
		return null;
	}
	
	protected Long getLong(final String name) {
		final String str = request.getParameter(name);
		if (StringUtils.isNotBlank(str)) {
			return Long.valueOf(str);
		}
		return null;
	}
	
	protected PageRequest<HashMap<String, Object>> newPageRequest(final HttpServletRequest request, final String defaultSortColumns) {
		PageRequest<HashMap<String, Object>> pageRequest = new PageRequest<HashMap<String, Object>>();
		String str = request.getParameter("pageNumber");
		if(str == null || "".equals(str.trim())){
			pageRequest.setPageNumber(1);
		}else{
			pageRequest.setPageNumber(Integer.valueOf(str));
		}
		str = request.getParameter("pageSize");
		if(str == null || "".equals(str.trim())){
			pageRequest.setPageSize(DEFAULT_PAGE_SIZE);
		}else{
			pageRequest.setPageSize(Integer.valueOf(str));
		}
		str = request.getParameter("sortColumns");
		if(str != null && !"".equals(str.trim())){
			pageRequest.setSortColumns(defaultSortColumns);
		}
		pageRequest.setFilters(new HashMap<String, Object>());
		//pageRequest.setFilters(WebUtils.getParametersStartingWith(request, "s_"));
		pageRequest.setSkip(0);
		return pageRequest;
	}

	protected PageRequest<HashMap<String, Object>> newPageRequest(final HttpServletRequest request, final String defaultSortColumns, int pageSize) {
		PageRequest<HashMap<String, Object>> pageRequest = new PageRequest<HashMap<String, Object>>();
		String str = request.getParameter("pageNumber");
		if(str == null || "".equals(str.trim())){
			pageRequest.setPageNumber(1);
		}else{
			pageRequest.setPageNumber(Integer.valueOf(str));
		}
		pageRequest.setPageSize(pageSize);
		str = request.getParameter("sortColumns");
		if(str != null && !"".equals(str.trim())){
			pageRequest.setSortColumns(defaultSortColumns);
		}
		pageRequest.setFilters(new HashMap<String, Object>());
		//pageRequest.setFilters(WebUtils.getParametersStartingWith(request, "s_"));
		pageRequest.setSkip(0);
		return pageRequest;
	}

	/**
	 * 等价于request.setAttribute(key, value).
	 */
	protected void put(final String key, final Object value) {
		request.setAttribute(key, value);
	}

	/**
	 * 将值设置到request中，参数为偶数，键值对对应request.setAttrubite(key, value);.
	 */
	protected void putValues(final Object... valeus) {
		if (valeus.length % 2 != 0) {
			log.debug("参数必须为偶数个");
			return;
		}
		for (int i = 0; i < valeus.length; i += 2) {
			put(valeus[i].toString(), valeus[i + 1]);
		}
	}

	/**
	 * 等价于request.getSession().removeAttribute(key).
	 */
	protected void removeSessionAttribute(final String key) {
		request.getSession().removeAttribute(key);
	}
	protected String getJsonStr(final String name) {
		return getJsonStr(name, null);
	}

	protected String getJsonStr(String name, String defaultValue) {
		String value = (String) request.getAttribute(name);
		if (value == null) {
			return defaultValue;
		}
		return value;
	}

	protected Integer getJsonInteger(final String name) {
		final String str = getJsonStr(name);
		if (StringUtils.isNotBlank(str)) {
			return Integer.valueOf(str);
		}
		return null;
	}

	protected Long getJsonLong(final String name) {
		final String str = getJsonStr(name);
		if (StringUtils.isNotBlank(str)) {
			return Long.valueOf(str);
		}
		return null;
	}
}
