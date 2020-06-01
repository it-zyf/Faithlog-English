package com.comb.framework.auth.filter;

import com.comb.framework.auth.web.util.WebUtil;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.CollectionUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.http.HttpServletRequest;
import java.util.Set;

public  abstract class AbstractFilter extends OncePerRequestFilter {
	
	public static final String DEFAULT_CHARACTER_ENCODING = "UTF-8";
	public static final String INCLUDE_CONTEXT_PATH_ATTRIBUTE = "javax.servlet.include.context_path";
	public static final String INCLUDE_REQUEST_URI_ATTRIBUTE = "javax.servlet.include.request_uri";
	public static final String RETURN_URL_NAME = "_ret";
	
	protected String loginUrl = "/";// 登陆页
	
	private Set<String> ignoredUrl;
	private Set<String> resourceUrl;
	
	private static AntPathMatcher pathMatcher = new AntPathMatcher();
	
	public AntPathMatcher getPathMatcher(){
		return pathMatcher;
	}
	
	public Set<String> getIgnoredUrl() {
		return ignoredUrl;
	}

	public void setIgnoredUrl(Set<String> ignoredUrl) {
		this.ignoredUrl = ignoredUrl;
	}
	
	public String getLoginUrl() {
		return loginUrl;
	}

	public void setLoginUrl(String loginUrl) {
		this.loginUrl = loginUrl;
	}
	
	/**
	 * 判断是否是忽略的路径
	 * @param request
	 * @return
	 */
	protected boolean isIgnoreUrl(String relativeUrl) {
		if (CollectionUtils.isEmpty(ignoredUrl))
			return false;
		if(relativeUrl.equals("/"))
			return true;
		for (String url : ignoredUrl) {
			if (pathMatcher.match(url, relativeUrl)){
				return true;
			}
		}
		return false;
	}

	public Set<String> getResourceUrl() {
		return resourceUrl;
	}

	public void setResourceUrl(Set<String> resourceUrl) {
		this.resourceUrl = resourceUrl;
	}
	
	/**
	 * 判断是否是静态资源的路径
	 * @param request
	 * @return
	 */
	protected boolean isResourceUrl(String relativeUrl) {
		if (CollectionUtils.isEmpty(resourceUrl))
			return false;
		if(relativeUrl.equals("/"))
			return true;
		for (String url : resourceUrl) {
			if (pathMatcher.match(url, relativeUrl)){
				return true;
			}
		}
		return false;
	}
	
	public String getUrl(HttpServletRequest request) {
		String url = WebUtil.encodeRequestString(request, request.getRequestURL().toString());
		url = request.getContextPath() + loginUrl + "?" + RETURN_URL_NAME + "=" + url;
		return url;
	}
	
}
