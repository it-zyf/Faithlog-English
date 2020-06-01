/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package com.comb.framework.auth.aop.handler;

import com.comb.framework.auth.AuthorizationPrincipal;
import com.comb.framework.auth.SecurityUtils;
import com.comb.framework.auth.ThreadContext;
import com.comb.framework.auth.User;
import com.comb.framework.auth.exception.AuthenticationException;
import com.comb.framework.db.annotation.DbSwitch;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.lang.annotation.Annotation;
import java.util.*;

/**
 * Annotation 出来类
 * 
 * @author fwb
 *
 */
@Service
public class AnnotationsHandler implements InitializingBean {

	private static final Logger logger = LoggerFactory.getLogger(AnnotationsHandler.class);

	private static Collection<Class<? extends Annotation>> AUTHZ_ANNOTATION_CLASSES = new HashSet<Class<? extends Annotation>>();
	private static Collection<Class<? extends Annotation>> DB_ANNOTATION_CLASSES = new HashSet<Class<? extends Annotation>>();
	private Collection<PermissionHandler> annotationHandlers;
	private Set<String> permissionHandlers;
	private Random random = new Random();

	public void setAnnotationHandlers(Collection<PermissionHandler> annotationHandlers) {
		this.annotationHandlers = annotationHandlers;
	}

	public Set<String> getPermissionHandlers() {
		return permissionHandlers;
	}

	public void setPermissionHandlers(Set<String> permissionHandlers) {
		this.permissionHandlers = permissionHandlers;
	}

	public Collection<Class<? extends Annotation>> getAnnotationClass() {
		return AUTHZ_ANNOTATION_CLASSES;
	}

	public Collection<Class<? extends Annotation>> getDbAnnotationClass() {
		return DB_ANNOTATION_CLASSES;
	}

	/**
	 * 初始化
	 */
	@SuppressWarnings("unchecked")
	private synchronized void init() {
		DB_ANNOTATION_CLASSES.add(DbSwitch.class);

		// 如果有额外的注入

		String str = "";
		try {
			if (annotationHandlers != null && !annotationHandlers.isEmpty()) {
				for (PermissionHandler handler : annotationHandlers) {
					str = handler.getName();
					Class<? extends Annotation> annotationClass = (Class<? extends Annotation>) Class
							.forName(handler.getName());
					// 添加到常量里面去
					addClass(annotationClass);
				}
			}
			if (permissionHandlers != null && !permissionHandlers.isEmpty()) {
				for (String className : permissionHandlers) {
					str = className;
					Class<? extends Annotation> annotationClass = (Class<? extends Annotation>) Class
							.forName(className);
					// 添加到常量里面去
					addClass(annotationClass);
				}
			}
		} catch (ClassNotFoundException e) {
			throw new AuthenticationException("Class：" + str + " not found。");
		}

	}

	/**
	 * 添加annotation
	 * 
	 * @param clazz
	 */
	protected void addClass(Class<? extends Annotation> clazz) {
		AUTHZ_ANNOTATION_CLASSES.add(clazz);
	}

	protected void addHandler(PermissionHandler handler) {
		if (annotationHandlers == null)
			annotationHandlers = new HashSet<PermissionHandler>();
		annotationHandlers.add(handler);
	}

	/**
	 * 处理多数据源切换
	 * 
	 * @param annotations
	 */
	public void processDbSwitch(Collection<Annotation> annotations) {
		if (CollectionUtils.isEmpty(annotations)) {
			return;
		}
		for (Annotation a : annotations) {
			if (a instanceof DbSwitch) {
				switchDB((DbSwitch) a);
				break;
			}
		}
	}

	/**
	 * 数据源切换处理
	 * 
	 * @param dbSwitch
	 */
	private void processDataSource(DbSwitch dbSwitch) {
		/*
		 * //if datasource set before method if(ThreadContext.getDataSource() !=
		 * null){ //判断数据源是否相等
		 * if(!ThreadContext.getDataSource().equals(dbSwitch.type().master())){
		 * ThreadContext.useDataSource(dbSwitch.type().master()); }
		 * if(!dbSwitch.constraint()){ return; } }
		 * ThreadContext.useDataSource(dbSwitch.type().master());
		 */
	}

	/**
	 * 数据源切换处理
	 * 
	 * @param dbSwitch
	 */
	private void switchDB(DbSwitch dbSwitch) {
		// if datasource set before method
		if (dbSwitch.master() != null && dbSwitch.master().length > 0) {
			int i = 0;
			if (dbSwitch.master().length > 1) {
				i = random.nextInt(dbSwitch.master().length);
			}
			ThreadContext.useDataSource(dbSwitch.master()[i]);
		}
		if (dbSwitch.slave() != null && dbSwitch.slave().length > 0) {
			int i = 0;
			if (dbSwitch.master().length > 1) {
				i = random.nextInt(dbSwitch.slave().length);
			}
			ThreadContext.putSlaveDataSource(dbSwitch.slave()[i]);
		}
	}

	/**
	 * Ensures the calling Subject is authorized to execute based on the
	 * directive(s) found in the given annotation. As this is an
	 * AnnotationMethodInterceptor, the implementations of this method typically
	 * inspect the annotation and perform a corresponding authorization check
	 * based.
	 *
	 * @param annotations
	 *            the <code>Annotation</code> to check for performing an
	 *            authorization check.
	 * @throws
	 *             if the class/instance/method is not allowed to
	 *             proceed/execute.
	 */
	public void assertAuthorized(Collection<Annotation> annotations) throws AuthenticationException {
		if (CollectionUtils.isEmpty(annotations))
			return;
		if (getAuthorizationPrincipal() == null) {
			throw new AuthenticationException("The current User is not logined.  Access denied.");
		}
		if (SecurityUtils.isHasGlobalPermission()) {
			return;
		}
		for (Annotation a : annotations) {

				if (!CollectionUtils.isEmpty(annotationHandlers)) {
					for (PermissionHandler handler : annotationHandlers) {
						handler.assertAuthorized(a);
					}
				}
		}
	}

	protected AuthorizationPrincipal getAuthorizationPrincipal() {
		return SecurityUtils.getAuthorizationPrincipal();
	}

	protected User getUser() {
		return SecurityUtils.getUser();
	}

	public void afterPropertiesSet() throws Exception {
		init();
	}
}
