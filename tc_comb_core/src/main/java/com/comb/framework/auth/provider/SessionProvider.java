package com.comb.framework.auth.provider;

import com.comb.framework.auth.Session;

import java.io.Serializable;
import java.util.Collection;

/**
 * session相关操作接口，主要是提供session缓存操作接口
 * @author fwb
 *
 */
public interface SessionProvider {

	/**
	 * 保存session到缓存,如EhCache、Redis
	 * @param session
	 */
    void save(Session session);

    /**
     * 根据sessionId获得session
     * 从EhCache、Redis等第三方缓存中获取
     * @param sessionId
     * @return
     */
    Session findById(Serializable sessionId);
    
    Session getSessionByHttpSessionId(String httpSessionId);

    /**
     * 更新缓存中的session
     * @param session
     * @param isInitExpireTime 是否初始化过期时间
     */
    void update(Session session, boolean isInitExpireTime);
    
    void delete(Session session);

    void expire(Session session, long expireMinuts);
    
    /**
     * 根据用户获得用户登录的所有session，一个用户多浏览器登录
     * @param principal
     * @return
     */
    Collection<String> findSessionIdByUser(String principal);
    
}
