package com.comb.framework.auth.impl;

import com.comb.framework.auth.Authenticator;
import com.comb.framework.auth.common.ExceptionConstant;
import com.comb.framework.auth.exception.AuthenticationException;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

@Service
public class DefaultAuthenticator implements Authenticator {

	private static final int ENCODED_CREDENTIALS_LENGTH = 50;

	private static final char[] SALT_CODE = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };// 用来将字节转换成16进制表示的字符

	@Override
	public void authenticate(String principal, Object credentials, Object encodedCredentials)
			throws AuthenticationException {
		boolean bool = credentialsMatch((String) credentials, (String) encodedCredentials);
		if (!bool)
			throw new AuthenticationException(ExceptionConstant.EXCEPTION_PASSWORD_ERROR);
	}

	/**
	 * 判断密码是否一致
	 * 
	 * @param credentials
	 *            加密前密码
	 * @param encodedCredentials
	 *            加密后的密码 密码长度为50
	 * @return
	 */
	public boolean credentialsMatch(String credentials, String encodedCredentials) {
		if (encodedCredentials == null || encodedCredentials.length() != ENCODED_CREDENTIALS_LENGTH)
			return false;
		String salt, suffixSalt;
		String temp;
		for (int i = 1; i < ENCODED_CREDENTIALS_LENGTH - 32; i++) {
			salt = encodedCredentials.substring(0, i);
			suffixSalt = encodedCredentials.substring(32 + i, ENCODED_CREDENTIALS_LENGTH);
			temp = encodeCredentials(salt, credentials, suffixSalt);
			if (temp.equals(encodedCredentials)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public String encodeCredentials(String credentials) {
		String salt = getSalt();
		String suffixSalt = this.getSalt(ENCODED_CREDENTIALS_LENGTH - 32 - salt.length());
		credentials = salt + credentials + suffixSalt;
		return salt + getMD5(credentials.getBytes()) + suffixSalt;
	}

	@Override
	public String generateId() {
		String credentials = this.getSalt(10);
		return this.encodeCredentials(credentials);
	}

	private String encodeCredentials(String salt, String credentials, String suffixSalt) {
		credentials = salt + credentials + suffixSalt;
		return salt + getMD5(credentials.getBytes()) + suffixSalt;
	}

	private String getSalt() {
		StringBuilder sb = new StringBuilder();
		Random random = new Random();
		int k = 0;
		int length = random.nextInt(17) + 1;
		for (int i = 0; i < length; i++) {
			k = random.nextInt(SALT_CODE.length);
			sb.append(SALT_CODE[k]);
		}
		return sb.toString();
	}

	private String getSalt(int length) {
		StringBuilder sb = new StringBuilder();
		Random random = new Random();
		int k = 0;
		for (int i = 0; i < length; i++) {
			k = random.nextInt(SALT_CODE.length);
			sb.append(SALT_CODE[k]);
		}
		return sb.toString();
	}

	private String getMD5(byte[] source) {
		String s = null;
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(source);
			byte tmp[] = md.digest();// MD5 的计算结果是一个 128 位的长整数，
			// 用字节表示就是 16 个字节
			char str[] = new char[16 * 2];// 每个字节用 16 进制表示的话，使用两个字符， 所以表示成 16
			// 进制需要 32 个字符
			int k = 0;// 表示转换结果中对应的字符位置
			for (int i = 0; i < 16; i++) {// 从第一个字节开始，对 MD5 的每一个字节// 转换成 16
				// 进制字符的转换
				byte byte0 = tmp[i];// 取第 i 个字节
				str[k++] = SALT_CODE[byte0 >>> 4 & 0xf];// 取字节中高 4 位的数字转换,// >>>
				// 为逻辑右移，将符号位一起右移
				str[k++] = SALT_CODE[byte0 & 0xf];// 取字节中低 4 位的数字转换

			}
			s = new String(str);// 换后的结果转换为字符串

		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return s;
	}
	
	private String encode(String str){
		Random random = new Random();
		int i = random.nextInt(10);
		return encodeCredentials(i + "") + encodeCredentials(str.charAt(i) + "");
	}
	
	public boolean match(String stime, String estime){
		if(stime == null || estime == null || stime.length() < 10 || estime.length() != 100){
			return false;
		}
		String r = estime.substring(0, 50);
		String e= estime.substring(50);
		int p = 0;
		for(int i = 0; i < 10; i++){
			if(credentialsMatch(i + "", r)){
				p = i;
				break;
			}
		}
		return credentialsMatch(stime.charAt(p) + "", e);
	}
	
	
}
