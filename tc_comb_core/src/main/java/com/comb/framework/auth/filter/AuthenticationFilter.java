//package com.comb.framework.auth.filter;
//
//import com.comb.framework.auth.*;
//import com.comb.framework.auth.provider.ForwardingAuthRealm;
//import com.comb.framework.auth.web.util.WebUtil;
//import org.apache.commons.lang3.StringUtils;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.util.CollectionUtils;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.Cookie;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.net.URL;
//import java.util.Map;
//import java.util.Map.Entry;
//import java.util.Set;
//import java.util.concurrent.ConcurrentHashMap;
//
///**
// * @author fwb
// *
// * 获得用户信息 并绑定到ThreadContext
// */
//public class AuthenticationFilter extends AbstractFilter {
//
//	private static final Logger logger = LoggerFactory.getLogger(AuthenticationFilter.class);
//
//	@Autowired
//	private SessionManager<Long> sessionManager;
//	@Autowired
//	private Authenticator authenticator;
//
//	@Value("${referUrl}")
//	private String referUrl;// 前台登录首页
//
//	private String loginUrlForFront = "/";// 前台登录首页
//	private String loginUrlForBackend = "/backend.jsp";// 后台登录首页
//	private String errorUrl = "/error.jsp";// 错误提示页面，如没有权限访问
//	private String logoutUrlForFront = "/";// 前台退出页面
//	private String logoutUrlForBackend = "/login.jsp";// 后台退出页面
//	private String indexUrl = "/";// 首页
//	private String maintenanceUrl = "/maintenance.jsp";
//
//
//	public String getIndexUrl() {
//		return indexUrl;
//	}
//
//	public void setIndexUrl(String indexUrl) {
//		this.indexUrl = indexUrl;
//	}
//
//	public String getErrorUrl() {
//		return errorUrl;
//	}
//
//	public void setErrorUrl(String errorUrl) {
//		this.errorUrl = errorUrl;
//	}
//
//	public void setSessionManager(SessionManager<Long> sessionManager) {
//		this.sessionManager = sessionManager;
//	}
//
//	public void setRealm(ForwardingAuthRealm<Long> realm) {
//		this.realm = realm;
//	}
//
//	private final static String SSO_TOKEN = "sso_token";
//	private final static Map<String, Long> ACCESS_INTERVAL_MAP = new ConcurrentHashMap<String, Long>();
//	private Set<String> backendUrl;
//	private Set<String> tokenUrl;
//	//防盗链url
//	private Set<String> antiStealingUrl;
//	//监控url
//	private Set<String> monitorUrl;
//	private Long overtime = 0L;
//
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)	throws ServletException, IOException {
//		String relativeUrl = WebUtil.getPathWithinApplication(request);
//		if(this.isAntiStealingLink(request, relativeUrl)){
//			JsonUtils.outJson(response, "100004", request.getContextPath() + antiStealingUrl);
//			return;
//		}
//		if (isResourceUrl(relativeUrl)) {
//			filterChain.doFilter(request, response);
//		} else {
//
//			//
//			long monitorTime = 0L;
//			try {
//				if (!relativeUrl.equals("/")) {
//					//先进行访问间隔控制
//					boolean bool = this.checkAccessIntervalUrl(request.getSession().getId(), relativeUrl);
//					if (!bool) {
//						if (request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
//							JsonUtils.outJson(response, "100003", request.getContextPath() + errorUrl);
//						} else {
//							response.sendRedirect(request.getContextPath() + errorUrl);
//						}
//						return;
//					}
//
//					if (this.checkTokenUrl(relativeUrl)) {
//						if (relativeUrl.contains("mobile")) {
//							// 判断是否来自移动端
//							String userAgent = request.getHeader("user-agent").toLowerCase();
//							if (userAgent.contains("android") || userAgent.contains("iphone") || userAgent.contains("okhttp")) {
//								// 检查参数为空返回
//								for (String para : request.getParameterMap().keySet()) {
//									String value = request.getParameter(para);
//									if (null == value || "".equals(value.trim())) {
//										JsonUtils.outJson(response, "100002", request.getContextPath() + errorUrl);
//										return;
//									}
//								}
//								String[] stime = request.getParameterMap().get("stime");
//								String[] estime = request.getParameterMap().get("estime");
//								if (stime.length == 0 || estime.length == 0) {
//									JsonUtils.outJson(response, "100005", request.getContextPath() + errorUrl);
//									return;
//								}
//
//								bool = this.realm.isRepeatMobileURL(estime[0]);
//								if (bool) {
//									JsonUtils.outJson(response, "100005", request.getContextPath() + errorUrl);
//									return;
//								}
//								// 是否匹配
//								if (!authenticator.match(stime[0], estime[0])) {
//									JsonUtils.outJson(response, "100005", request.getContextPath() + errorUrl);
//									return;
//								}
//							} else {
//								JsonUtils.outJson(response, "100002", request.getContextPath() + errorUrl);
//								return;
//							}
//						} else {
//							String[] values = request.getParameterMap().get("token");
//							if (values == null || values.length == 0) {
//								response.sendRedirect(request.getContextPath() + errorUrl);
//								return;
//							}
//							bool = this.realm.checkToken(values[0]);
//							if (!bool) {
//								response.sendRedirect(request.getContextPath() + errorUrl);
//								return;
//							}
//						}
//					}
//					this.initLoginUrl(relativeUrl);
//				}
//				RequestWrapper req = new RequestWrapper(request);
//				FilterBean bean = this.initThreadContext(req, response);
//				// 判断服务器是否保存
//				Session session = sessionManager.getSessionById(bean.getSessionId());
//				//System.out.println("doFilterInternal in 174 session id :" + bean.getSessionId());
//				if (session == null) {
//					//session过期 也没有记住
//					if (!isIgnoreUrl(relativeUrl)) {
//						if (request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
//							System.out.println("doFilterInternal in 178 getUrl(request):" + getUrl(request));
//							JsonUtils.outJson(response, "100001", getUrl(request));
//						} else {
//							System.out.println("doFilterInternal in 181 getUrl(request):" + getUrl(request));
//							response.sendRedirect(getUrl(request));
//						}
//						return;
//					}
//				} else {
//					if (session.isValid()) {// 如果session失效
//						if (request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
//							System.out.println("doFilterInternal in 189 getUrl(request):" + getUrl(request));
//							JsonUtils.outJson(response, "100001", getUrl(request));
//						} else {
//							System.out.println("doFilterInternal in 192 getUrl(request):" + getUrl(request));
//							response.sendRedirect(getUrl(request));
//						}
//						return;
//					} else {
//						User<Long> user = realm.findUserByPrincipal(session.getPrincipal());
//						if (user != null) {
//							AuthorizationPrincipal authorizationPrincipal = realm.findUserAuthorizationPrincipal(user);
//							ThreadContext.bind(user, authorizationPrincipal, session, sessionManager);
//						}
//						else{
//							System.out.println("doFilterInternal in 203 user is null session.getPrincipal():" + session.getPrincipal());
//						}
//					}
//				}
//
//				// 访问首页的时候
////				if (relativeUrl.equals("/")) {
////					response.sendRedirect(getIndexUrl(request));
////					return;
////				}
//				//失效一分钟前更新cookie值
//				//if(bean.getCookie() != null && session != null){
//					//this.sessionManager.expire(session,session.getExpireMinutes());
////					bean.getCookie().setMaxAge(bean.getCookie().getMaxAge());
////					response.addCookie(bean.getCookie());
//				//}
//				monitorTime = this.checkMonitorUrl(relativeUrl);
//				if(StringUtils.isNotBlank(referUrl)) {
//					String[] referUrlList = referUrl.split(",");
//					String referer=request.getHeader("Referer");
//					Boolean flag = false;
//					//判断 Referer 是否以 bank.example 开头
//					for (String url : referUrlList){
//						if((referer!=null) &&(referer.trim().contains(url))){
//							flag = true;
//						}
//					}
//					if (!flag) {
//						JsonUtils.outJson(response,"请求不合法",request.getContextPath());
//						return;
//					}
//				}
//				filterChain.doFilter(req, response);
//			} finally {
//				// Clear all thread local variable
//				ThreadContext.remove();
//				if(monitorTime > 0){
//					monitorTime = System.currentTimeMillis() - monitorTime;
//					if(overtime == 0){
//						logger.info(request.getRemoteAddr() + "  [" + relativeUrl + "] 执行时间 : " + monitorTime + "毫秒");
//					} else {
//						if(monitorTime > overtime){
//							logger.info(request.getRemoteAddr() + "  [" + relativeUrl + "] 执行时间 : " + monitorTime + "毫秒");
//						}
//					}
//				}
//			}
//		}
//	}
//
//	/**
//	 * 初始化ThreadContext
//	 *
//	 * @param request
//	 * @param response
//	 */
//	private FilterBean initThreadContext(HttpServletRequest request, HttpServletResponse response) {
//		FilterBean bean = new FilterBean();
//		ThreadContext.bind(request);
//		ThreadContext.bind(response);
//		ThreadContext.put(ThreadContext.ERROR_URL, request.getContextPath() + errorUrl);
//		String sessionId = (String)request.getSession().getAttribute(sessionManager.getSessionIdKey());
//		//if HttpSession exists sessionId
//		Cookie[] cookies = request.getCookies();
//		Cookie c = null;
//		if(sessionId == null){
//			if (cookies != null) {
//				for (Cookie cookie : cookies) {
//					if (sessionManager.getSessionIdKey().equals(cookie.getName())) {
//						ThreadContext.put(cookie.getName(), cookie.getValue());
//						sessionId = cookie.getValue();
//						c = cookie;
//					}
//				}
//			}
//		} else {
//			if (cookies != null) {
//				for (Cookie cookie : cookies) {
//					if (sessionManager.getSessionIdKey().equals(cookie.getName())) {
//						c = cookie;
//					}
//				}
//			}
//		}
//		bean.setSessionId(sessionId);
//		bean.setCookie(c);
//		return bean;
//	}
//
//	/**
//	 * 检查URL是否是后台的 并设置登录首页（分前台和后台）
//	 *
//	 * @param
//	 */
//	private void initLoginUrl(String relativeUrl) {
//		for (String url : backendUrl) {
//			if (getPathMatcher().match(url, relativeUrl)) {
//				loginUrl = loginUrlForBackend;
//				ThreadContext.put(ThreadContext.LOGOUT_URL, logoutUrlForBackend);
//				return;
//			}
//			loginUrl = loginUrlForFront;
//			ThreadContext.put(ThreadContext.LOGOUT_URL, logoutUrlForFront);
//		}
//	}
//
//	/**
//	 * 检查需要间隔访问的路径
//	 * 比如发送短信验证码
//	 * @param relativeUrl
//	 * @return false不能访问 true可以访问
//	 */
//	private boolean checkAccessIntervalUrl(String sessionId, String relativeUrl) {
//		for(Entry<String, Long> entry : ACCESS_INTERVAL_MAP.entrySet()){
//			if (getPathMatcher().match(entry.getKey(), relativeUrl)) {
//				//如果存在则不能访问
//				if(this.realm.checkAccessIntervalUrl(sessionId, relativeUrl, entry.getValue())){
//					return false;
//				} else {
//					return true;
//				}
//			}
//		}
//		return true;
//	}
//
//	/**
//	 * 检查是否是还有token提交的URL
//	 *
//	 * @param relativeUrl
//	 * @return
//	 */
//	private boolean checkTokenUrl(String relativeUrl) {
//		if (tokenUrl == null || tokenUrl.isEmpty()) {
//			return false;
//		}
//		for (String url : tokenUrl) {
//			if (getPathMatcher().match(url, relativeUrl)) {
//				return true;
//			}
//		}
//		return false;
//	}
//
//	/**
//	 * 检查是否是还有token提交的URL
//	 *
//	 * @param relativeUrl
//	 * @return
//	 */
//	private long checkMonitorUrl(String relativeUrl) {
//		if (monitorUrl == null || monitorUrl.isEmpty()) {
//			return 0;
//		}
//		for (String url : monitorUrl) {
//			if (getPathMatcher().match(url, relativeUrl)) {
//				return System.currentTimeMillis();
//			}
//		}
//		return 0;
//	}
//
//	private String getIndexUrl(HttpServletRequest request) {
//		return request.getContextPath() + indexUrl;
//	}
//
//	/**
//	 * 判断是否是静态资源的路径
//	 * @param request
//	 * @return
//	 */
//	private boolean isAntiStealingLink(HttpServletRequest request, String relativeUrl) {
//		if (CollectionUtils.isEmpty(antiStealingUrl))
//			return false;
//		if(relativeUrl.equals("/"))
//			return false;
//		try{
//			String address = request.getHeader("referer"); // 获取页面的请求地址
//			String pathAdd = ""; // 定义空字符串
//			if (address != null) { // 判断当前的页面的请求地址为空时
//				URL urlOne = new URL(address);// 实例化URL方法
//				pathAdd = urlOne.getHost(); // 获取请求页面的服务器主机
//			}
//			String address1 = request.getRequestURL().toString(); // 获取当前页面的地址
//			String pathAdd1 = "";
//			if (address1 != null) {
//				URL urlTwo = new URL(address1);
//				pathAdd1 = urlTwo.getHost(); // 获取当前服务器的主机
//			}
//			for (String url : antiStealingUrl) {
//				if (getPathMatcher().match(url, relativeUrl)){
//					if (!pathAdd.equals(pathAdd1)) { // 判断当前页面的主机与服务器的主机是否相同
//						return true;
//					}
//				}
//			}
//		}catch(Exception e){
//			e.printStackTrace();
//		}
//		return false;
//	}
//
//	public void setLoginUrlForBackend(String loginUrlForBackend) {
//		this.loginUrlForBackend = loginUrlForBackend;
//	}
//
//	public void setBackendUrl(Set<String> backendUrl) {
//		this.backendUrl = backendUrl;
//	}
//
//	public void setTokenUrl(Set<String> tokenUrl) {
//		this.tokenUrl = tokenUrl;
//	}
//
//	public String getLoginUrlForFront() {
//		return loginUrlForFront;
//	}
//
//	public void setLoginUrlForFront(String loginUrlForFront) {
//		this.loginUrlForFront = loginUrlForFront;
//	}
//
//	public String getLogoutUrlForFront() {
//		return logoutUrlForFront;
//	}
//
//	public void setLogoutUrlForFront(String logoutUrlForFront) {
//		this.logoutUrlForFront = logoutUrlForFront;
//	}
//
//	public String getLogoutUrlForBackend() {
//		return logoutUrlForBackend;
//	}
//
//	public void setLogoutUrlForBackend(String logoutUrlForBackend) {
//		this.logoutUrlForBackend = logoutUrlForBackend;
//	}
//
//	public String getMaintenanceUrl() {
//		return maintenanceUrl;
//	}
//
//	public void setMaintenanceUrl(String maintenanceUrl) {
//		this.maintenanceUrl = maintenanceUrl;
//	}
//
//	public Set<String> getAntiStealingUrl() {
//		return antiStealingUrl;
//	}
//
//	public void setAntiStealingUrl(Set<String> antiStealingUrl) {
//		this.antiStealingUrl = antiStealingUrl;
//	}
//
//	public Set<String> getMonitorUrl() {
//		return monitorUrl;
//	}
//
//	public void setMonitorUrl(Set<String> monitorUrl) {
//		this.monitorUrl = monitorUrl;
//	}
//
//	public Long getOvertime() {
//		return overtime;
//	}
//
//	public void setOvertime(Long overtime) {
//		this.overtime = overtime;
//	}
//
//	public void setAccessIntervalUrl(Set<String> accessIntervalUrl) {
//		if(accessIntervalUrl != null && !accessIntervalUrl.isEmpty()){
//			for(String str : accessIntervalUrl){
//				String[] strs = str.split("=");
//				if(strs.length > 1){
//					try {
//						ACCESS_INTERVAL_MAP.put(strs[0].trim(), Long.valueOf(strs[1]));
//					} catch (Exception e) {
//						e.printStackTrace();
//					}
//				}
//			}
//		}
//	}
//
//}
