//package com.comb.framework.auth.filter;
//
//import com.comb.framework.auth.SecurityUtils;
//import com.comb.framework.auth.ThreadContext;
//import com.comb.framework.auth.annotation.*;
//import com.comb.framework.auth.aop.handler.AnnotationsHandler;
//import com.comb.framework.auth.exception.AuthenticationException;
//import com.comb.framework.auth.realm.Ini;
//import com.comb.framework.auth.web.util.WebUtil;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.lang.annotation.Annotation;
//import java.util.*;
//import java.util.Map.Entry;
//
///**
// * 自定义过滤器
// *
// * @author fwb
// *
// */
//public class AuthorizationFilter extends AbstractFilter {
//
//   	private static Map<String, Collection<Annotation>> filterChainDefinitionMap = new HashMap<String,Collection<Annotation>>();
//
//	public static final String TOKEN_DELIMITER = ",";
//	public static final String TOKEN_PART = "=";
//	public static final String TOKEN_OR = "|";
//	public static final String TOKEN_SPLIT_OR = "\\|";
//	public static final String TOKEN_AND = "&";
//
//	private AnnotationsHandler annotationsHandler;
//
//	public AnnotationsHandler getAnnotationsHandler() {
//		return annotationsHandler;
//	}
//
//	public void setAnnotationsHandler(AnnotationsHandler annotationsHandler) {
//		this.annotationsHandler = annotationsHandler;
//	}
//
//	/**
//     * A convenience method that sets the {@link #setFilterChainDefinitionMap(Map) filterChainDefinitionMap}
//     * property by accepting a {@link java.util.Properties Properties}-compatible string (multi-line key/value pairs).
//     * Each key/value pair must conform to the format defined by the
//     * {@link FilterChainManager#createChain(String,String)} JavaDoc - each property key is an ant URL
//     * path expression and the value is the comma-delimited chain definition.
//     *
//     * @param definitions a {@link java.util.Properties Properties}-compatible string (multi-line key/value pairs)
//     *                    where each key/value pair represents a single urlPathExpression-commaDelimitedChainDefinition.
//     */
//    public void setFilterChainDefinitions(String definitions) {
//        Ini ini = new Ini();
//        ini.load(definitions);
//        Ini.Section section = ini.getSection(Ini.DEFAULT_SECTION_NAME);
//        setFilterChainDefinitionMap(section);
//    }
//
//	@Override
//	protected void doFilterInternal(HttpServletRequest request,	HttpServletResponse response, FilterChain filterChain)	throws ServletException, IOException {
//		 String relativeUrl = WebUtil.getPathWithinApplication(request);
//          if(isResourceUrl(relativeUrl) || isIgnoreUrl(relativeUrl) || SecurityUtils.isHasGlobalPermission()){
//        	  filterChain.doFilter(request, response);
//          } else {
//        	  boolean isHavePermission = false;
//        	  //循环遍历过滤器，如果存在访问权限，则继续
//        	  for(Entry<String,Collection<Annotation>> entry : filterChainDefinitionMap.entrySet()){
//        		  if (getPathMatcher().match(entry.getKey(), relativeUrl)){
//					try {
//						getAnnotationsHandler().assertAuthorized(entry.getValue());
//						isHavePermission = true;
//					} catch (AuthenticationException e) {
//						//e.printStackTrace();
//						continue;
//					}
//					if(isHavePermission){
//						break;
//					}
//        		  }
//        	  }
//        	  if(!isHavePermission){
//        		  response.sendRedirect((String)ThreadContext.get(ThreadContext.ERROR_URL));
//        		  return;
//        	  }
//        	  filterChain.doFilter(request, response);
//          }
//	}
//
//
//	/**
//     * Sets the chainName-to-chainDefinition map of chain definitions to use for creating filter chains intercepted
//     * by the Shiro Filter.  Each map entry should conform to the format defined by the
//     * {@link FilterChainManager#createChain(String, String)} JavaDoc, where the map key is the chain master (e.g. URL
//     * path expression) and the map value is the comma-delimited string chain definition.
//     *
//     * @param filterChainDefinitionMap the chainName-to-chainDefinition map of chain definitions to use for creating
//     *                                 filter chains intercepted by the Filter.
//     */
//    public void setFilterChainDefinitionMap(Map<String, String> filterChainDefinitionMap) {
//    	String context = "";
//    	for(Entry<String,String> entry : filterChainDefinitionMap.entrySet()){
//    		context = entry.getValue();
//    		context = context.trim();
//    		if("".equals(context) || "?".equals(context))
//    			continue;
//    		initFilterChain(entry.getKey().trim(), context);
//    	}
//    }
//
//}
