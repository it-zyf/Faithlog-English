package com.comb.framework.auth;



/**
 * @author fwb
 *
 * 
 */

public interface Session {
	/**
	 * 访问时间
	 * @return
	 */
    long getCreatedTime();
    
    /**
     * 访问结束时间
     * @return
     */
    long getInvalidateTime();
    
    /**
     * 最后访问时间 
     * @return
     */
    long getLastAccessedTime();
    
    /**
     * 更新访问时间
     * @param timestamp
     */
    void updateLastAccessedTime(long timestamp);
    
    /**
     * 获得登录用户身份标识
     * 一般采用localId
     * @return
     */
    String getPrincipal();
    
    /**
     * 获得session id
     * @return
     */
    String getId();
    
    /**
     * 获得最后访问的ip
     * @return
     */
    String getLastAccesseIp();
    
    /**
     * 
     * @return
     */
    String getHttpSessionId();
    
    /**
     * 获得remember me 字符信息 uuid表示
     * @return
     */
    String getRememberMeId();    
    
    void setRememberMeId(String rememberMeId);
    
    /**
     * 让session 失效
     */
    void invalidate();
    
    /**
     * 让session过期
     */
    void expire();
    
    /**
     * 是否失效
     * @return
     */
    boolean isValid();
    
    /**
     * 是否没有失效
     * @return
     */
    boolean isInvalid();
    
    /**
     * 获得过期时间
     * @return
     */
    int getExpireMinutes();
    
    String getIp();
    
    void setIp(String ip);
    
}
