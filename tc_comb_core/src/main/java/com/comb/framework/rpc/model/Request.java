package com.comb.framework.rpc.model;

import java.io.Serializable;
import java.util.Random;

public final class Request implements Serializable{
	
	private static final long serialVersionUID = 2750646443189480771L;
	private static final char[] REQUEST_SALT_CODE = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };
	
	private final String messageId;
	private final Class<?> apiClass;
	private final String method;
	private final Object[] parameters;
	private final String principal;
	
	public Request(final String principal, final Class<?> apiClass, final String method, final Object... parameters) {
		messageId = System.nanoTime() + getSalt(4);
		this.principal = principal;
		this.apiClass = apiClass;
		this.method = method;
		this.parameters = parameters;
	}

	public String getMessageId() {
		return messageId;
	}

	public Class<?> getApiClass() {
		return apiClass;
	}

	public String getMethod() {
		return method;
	}

	public Object[] getParameters() {
		return parameters;
	}

	public String getPrincipal() {
		return principal;
	}
	
	private String getSalt(int length) {
		StringBuilder sb = new StringBuilder();
		Random random = new Random();
		int k = 0;
		for (int i = 0; i < length; i++) {
			k = random.nextInt(REQUEST_SALT_CODE.length);
			sb.append(REQUEST_SALT_CODE[k]);
		}
		return sb.toString();
	}
	
}
