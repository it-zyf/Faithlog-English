package com.comb.framework.auth;

import com.comb.framework.auth.exception.AuthenticationException;

public interface Authenticator {

    /**
     * 
     * @param principal
     * @param credential
     * @param encodedCredential
     * @throws AuthenticationException
     */
	void authenticate(String principal, Object credential, Object encodedCredential) throws AuthenticationException;
	
	/**
	 * 
	 * @param credentials
	 * @return
	 */
	String encodeCredentials(String credentials);
	
	/**
	 * 判断密码是否一致
	 * @param credentials 加密前密码
	 * @param encodedCredentials 加密后的密码
	 * @return
	 */
	public boolean credentialsMatch(String credentials, String encodedCredentials);
	
	/**
	 * 生成ID 50个字符长度
	 * @return
	 */
	public String generateId();
	
	/**
	 * 移动端校验
	 * @param stime
	 * @param estime
	 * @return
	 */
	public boolean match(String stime, String estime);
}
