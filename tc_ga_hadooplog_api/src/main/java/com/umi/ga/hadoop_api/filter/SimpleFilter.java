package com.umi.ga.hadoop_api.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@WebFilter(filterName = "simple", urlPatterns = {"*.z","*.html"})
public class SimpleFilter implements Filter {
    private static final Set<String> ALLOWED_PATHS = Collections.unmodifiableSet(new HashSet<>(
            Arrays.asList("/view/login.html")));
    private static Logger logger = LoggerFactory.getLogger(SimpleFilter.class);
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        logger.info("SimpleFilter init");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse res = (HttpServletResponse)servletResponse;
        HttpServletRequest req = (HttpServletRequest)servletRequest;
        String path = req.getRequestURI().substring(req.getContextPath().length()).replaceAll("[/]+$", "");
        boolean allowedPath = ALLOWED_PATHS.contains(path);
        String user = (String) req.getSession().getAttribute("centeruser");
        filterChain.doFilter(req, res);
//        if(allowedPath){
//            filterChain.doFilter(req, res);
//        }else {
//            if (user == null) {
//                res.sendRedirect("http://center.umi-game.cn/view/login.html");
//            } else {
//                filterChain.doFilter(req, res);
//            }
//        }
    }

    @Override
    public void destroy() {
        logger.info("SimpleFilter destroy");
    }
}
