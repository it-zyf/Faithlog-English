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

import com.comb.framework.auth.aop.annotation.CasArround;
import com.comb.framework.auth.aop.annotation.RedisCache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;

import java.lang.annotation.Annotation;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

/**
 * Annotation 出来类
 * 
 * @author fwb
 *
 */
//@Service
//@Service
public class RedisCacheAnnotationsHandler implements InitializingBean {

	private static final Logger logger = LoggerFactory.getLogger(RedisCacheAnnotationsHandler.class);

	private Class<? extends Annotation> annotation = RedisCache.class;

	private static int newCount = 0;

	public RedisCacheAnnotationsHandler(){

	}


	public void afterPropertiesSet() throws Exception {
	}

	public Class<? extends Annotation> getAnnotationClass() {
		return annotation;
	}
}
