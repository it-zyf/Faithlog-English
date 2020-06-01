package com.comb.framework.auth.servlet;

import com.comb.framework.auth.ThreadContext;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * 获得登录后的sessoinId
 * 
 * @author fwb
 * 
 */
public class HttpSessionServlet extends HttpServlet {

	private static final long serialVersionUID = -2297675631181221771L;

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8");// 设置将字符以"UTF-8"编码输出到客户端浏览器
		PrintWriter out = response.getWriter();// 获取PrintWriter输出流
		out.write("<meta http-equiv='content-type' content='text/html;charset=UTF-8'/>");
		HttpSession session = ThreadContext.getRequest().getSession();
		if(session == null){
			out.write("<input type='hidden' master='sessionId' id='sessionId' value=''/>");
		} else {
			out.write("<input type='hidden' master='sessionId' id='sessionId' value='" + session.getId() + "'/>");
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
