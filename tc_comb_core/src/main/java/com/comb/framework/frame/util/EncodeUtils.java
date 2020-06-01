/**
 * Copyright (c) 2005-2009 springside.org.cn
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * 
 * $Id: EncodeUtils.java 862 2010-01-10 14:59:16Z calvinxiu $
 */
package com.comb.framework.frame.util;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.lang3.StringEscapeUtils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

/**
 * 各种格式的编码加码工具类.
 * 
 * 集成Commons-Codec,Commons-Lang及JDK提供的编解码方法.
 * 
 * @author calvin
 */
public abstract class EncodeUtils {
	private EncodeUtils() {
		
	}

	private static final String DEFAULT_URL_ENCODING = "UTF-8";

	/**
	 * Hex编码.
	 */
	public static String hexEncode(final byte[] input) {
		return Hex.encodeHexString(input);
	}

	/**
	 * Hex解码.
	 */
	public static byte[] hexDecode(final String input) {
		try {
			return Hex.decodeHex(input.toCharArray());
		} catch (DecoderException e) {
			throw new IllegalStateException("Hex Decoder exception", e);
		}
	}

	/**
	 * Base64编码.
	 */
	public static String base64Encode(final byte[] input) {
		return new String(Base64.encodeBase64(input));
	}

	/**
	 * Base64编码, URL安全(将Base64中的URL非法字符如+,/=转为其他字符, 见RFC3548).
	 */
	public static String base64UrlSafeEncode(final byte[] input) {
		return Base64.encodeBase64URLSafeString(input);
	}
	
	public static String base64Decode(final String input, final String charset) {
		try {
			return new String(base64Decode(input), charset);
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * Base64解码.
	 */
	public static byte[] base64Decode(final String input) {
		return Base64.decodeBase64(input);
	}
	
	/**
	 * Base64解码.
	 */
	public static String base64DecodeAsString(final String input) {
		return new String(Base64.decodeBase64(input));
	}

	/**
	 * URL 编码, Encode默认为UTF-8. 
	 */
	public static String urlEncode(final String input) {
		return urlEncode(input, DEFAULT_URL_ENCODING);
	}

	/**
	 * URL 编码.
	 */
	public static String urlEncode(final String input, final String encoding) {
		try {
			return URLEncoder.encode(input, encoding);
		} catch (UnsupportedEncodingException e) {
			throw new IllegalArgumentException("Unsupported Encoding Exception", e);
		}
	}

	/**
	 * URL 解码, Encode默认为UTF-8. 
	 */
	public static String urlDecode(final String input) {
		return urlDecode(input, DEFAULT_URL_ENCODING);
	}

	/**
	 * URL 解码.
	 */
	public static String urlDecode(final String input, final String encoding) {
		try {
			return URLDecoder.decode(input, encoding);
		} catch (UnsupportedEncodingException e) {
			throw new IllegalArgumentException("Unsupported Encoding Exception", e);
		}
	}

	/**
	 * Html 转码.
	 */
	public static String htmlEscape(final String html) {
		return StringEscapeUtils.escapeHtml3(html);
	}

	/**
	 * Html 解码.
	 */
	public static String htmlUnescape(final String htmlEscaped) {
		return StringEscapeUtils.unescapeHtml3(htmlEscaped);
	}

	/**
	 * Xml 转码.
	 */
	public static String xmlEscape(final String xml) {
		return StringEscapeUtils.escapeXml(xml);
	}

	/**
	 * Xml 解码.
	 */
	public static String xtmlUnescape(final String xmlEscaped) {
		return StringEscapeUtils.unescapeXml(xmlEscaped);
	}
	
	public static void main(String[] args) {
		String name = "1340871449984.2007-12-9  # 11415,54&58_2.jpg";
		System.out.println(base64UrlSafeEncode(name.getBytes()));
	}
}
