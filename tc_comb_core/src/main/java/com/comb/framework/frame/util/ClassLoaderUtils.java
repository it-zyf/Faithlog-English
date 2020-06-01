package com.comb.framework.frame.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.io.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * 类加载器使用工具类.
 */
public abstract class ClassLoaderUtils {
	
    private static Log logger = LogFactory.getLog(ClassLoaderUtils.class);
    
    private static final Properties EMPTY_PROPERTIES = new Properties();

    private ClassLoaderUtils() {
    	
    }
    
    /**
     * 获得资源所在真实文件路径.
     */
    public static String getPath(final String resource) {
	return getURL(resource).getPath();
    }

    public static URL getURL(final String resource) {
	return getClassLoader().getResource(resource);
    }

    /**
     * 创建指定类的实例.
     *
     * @param clazzName 类名
     * @return
     */
    public static Object getInstance(final String clazzName) {
	try {
	    return loadClass(clazzName).newInstance();
	} catch (final InstantiationException e) {
	    e.printStackTrace();
	} catch (final IllegalAccessException e) {
	    e.printStackTrace();
	}
	return null;
    }
    /**
     * 根据指定的类名加载类.
     *
     * @param name
     *                类名
     * @return
     */
    public static Class<?> loadClass(final String name) {
	try {
	    ClassLoaderUtils.class.getClassLoader().loadClass(name);
	    return getClassLoader().loadClass(name);

	} catch (final ClassNotFoundException ex) {
	    throw new RuntimeException(ex);
	}
    }

    public static ClassLoader getClassLoader() {
	return Thread.currentThread().getContextClassLoader();

    }

    /**
     * 将资源文件加载到输入流中.
     *
     * @param resource
     *                资源文件
     * @return
     */
    public static InputStream getStream(final String resource) {
	return getClassLoader().getResourceAsStream(resource);
    }

    /**
     * 将资源文件转化为Properties对象.
     *
     * @param resource
     *                资源文件
     * @return
     */
    public static Properties getProperties(final String resource) {
	final Properties properties = new Properties();
	try {
	    final InputStream is = getStream(resource);
	    if (is == null) {
			return EMPTY_PROPERTIES;
		}
	    properties.load(is);
	    return properties;
	} catch (final IOException ex) {
	    return EMPTY_PROPERTIES;
	}
    }

    /**
     * 将资源文件转化为Reader.
     *
     * @param resource
     *                资源文件
     * @return
     */
    public static Reader getReader(final String resource) {
	final InputStream is = getStream(resource);
	if (is == null) {
	    return null;
	}
	return new BufferedReader(new InputStreamReader(is));
    }

    /**
     * 将资源文件的内容转化为List实例.
     *
     * @param resource
     *                资源文件
     * @return
     */
    public static List<String> getList(final String resource) {
	final List<String> list = new ArrayList<String>();
	final BufferedReader reader = (BufferedReader) getReader(resource);
	if (null == reader) {
	    return list;
	}
	String line = "";
	try {
	    while ((line = reader.readLine()) != null) {
		list.add(line);
	    }
	} catch (final IOException ex) {
	    logger.error("将资源文件转化为list出现异常", ex);
	} finally {
	    if (reader != null) {
			try {
			    reader.close();
			} catch (final IOException ex) {
			   logger.warn(ex.getMessage());
			}
		}
	}
	return list;
    }
}
