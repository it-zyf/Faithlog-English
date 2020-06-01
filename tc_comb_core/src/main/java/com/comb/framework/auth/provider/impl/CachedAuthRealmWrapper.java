package com.comb.framework.auth.provider.impl;

import com.comb.framework.auth.AuthorizationPrincipal;
import com.comb.framework.auth.User;
import com.comb.framework.auth.provider.ForwardingAuthRealm;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.Serializable;
import java.util.concurrent.TimeUnit;

/**
 * 
 * @author fwb
 *
 * @param <ID>
 */
@Service
public class CachedAuthRealmWrapper<ID extends Serializable> extends ForwardingAuthRealm<ID> implements InitializingBean{
	
	private final static String WEBSITE_NEED_MAINTENANCE_KEY = "website_need_maintenance";
	private final static String AP_KEY_PREFIX = "ap";
	private final static String SESSION_KEY_PREFIX = "session";
	private final static String WEB_KEY="web_member_";
	
	@Autowired
	private RedisTemplate redisTemplate;
	
	/**
	 * 一般login调用的时候，传入的是用户名
	 * 过滤器调用的时候，传入的是localId，也就是缓存中的key
	 */
	public User<ID> findUserByPrincipal(String principal) {
		User<ID> user = null;
		if(this.isNeedReload){
			user = delegate.findUserByPrincipal(principal);
			if(user != null){
				saveUser(user);
			}
		}else{
			user = getUser(principal);
			if(user == null){
				user = delegate.findUserByPrincipal(principal);
				if(user != null){
					saveUser(user);
				}
			}
		}
		return user;
	}
	
	
	@Override
	public User<ID> findUserByName(String name) {
		User<ID> user = null;
		if(this.isNeedReload){
			user = delegate.findUserByName(name);
			if(user != null){
				saveUser(user);
			}
		}else{
			user = delegate.findUserByName(name);
			if(user != null){
				saveUser(user);
			}
		}
		return user;
	}
	
	@Override
	public User<ID> findUserByNameRole(String name, String role) {
		return delegate.findUserByNameRole(name, role);
	}
	
	public AuthorizationPrincipal findUserAuthorizationPrincipal(User<ID> user) {
		AuthorizationPrincipal authorizationPrincipal = null;
		if(this.isNeedReload){
			authorizationPrincipal = delegate.findUserAuthorizationPrincipal(user);
			if(authorizationPrincipal != null){
				saveAuthorizationPrincipal(user, authorizationPrincipal);
			}
		}else{
			authorizationPrincipal = getAuthorizationPrincipal(user);
			if(authorizationPrincipal == null){
				authorizationPrincipal = delegate.findUserAuthorizationPrincipal(user);
				if(authorizationPrincipal != null){
					saveAuthorizationPrincipal(user, authorizationPrincipal);
				}
			}	
		}
		return authorizationPrincipal;
	}
	
	private void saveUser(User<ID> user) {
		if(StringUtils.isEmpty(user.getLocalId()))
			return;
		redisTemplate.boundValueOps(WEB_KEY + user.getLocalId()).set(user);
	}
	
	private User<ID> getUser(String principal) {
	    if(StringUtils.isEmpty(principal))
	    	return null;
	    return (User<ID>)redisTemplate.boundValueOps(WEB_KEY + principal).get();
	}
	
	private void saveAuthorizationPrincipal(User<ID> user, AuthorizationPrincipal authorizationPrincipal) {
        if(user == null || authorizationPrincipal == null)
        {
        	return;
        }
        redisTemplate.boundValueOps(user.getLocalId() + AP_KEY_PREFIX).set(authorizationPrincipal);
	}
	
	private AuthorizationPrincipal getAuthorizationPrincipal(User<ID> user) {
	    if(user == null)
	    	return null;
	    ValueOperations<String, Object> ops = redisTemplate.opsForValue();
	    return (AuthorizationPrincipal)ops.get(user.getLocalId() + AP_KEY_PREFIX);
	}

	
	@Override
	public void afterPropertiesSet() throws Exception {
		
	}

	@Override
	public void flush() throws Exception {
		
	}

	@Override
	public void updateUser(User<ID> user) {
		if(user != null){
			redisTemplate.boundValueOps(WEB_KEY + user.getLocalId()).set(user);
		}
	}
	
	@Override
	public void deleteUser(User<ID> user){
		if(user != null){
			redisTemplate.delete(WEB_KEY + user.getLocalId());
			redisTemplate.delete(user.getLocalId() + AP_KEY_PREFIX);
		}
	}
	
	@Override
	public void updateUserAuthorizationPrincipal(User<ID> user){
		if(user != null){
			AuthorizationPrincipal authorizationPrincipal = delegate.findUserAuthorizationPrincipal(user);
			if(authorizationPrincipal != null){
				redisTemplate.boundValueOps(user.getLocalId() + AP_KEY_PREFIX).set(authorizationPrincipal);
			}
		}
	}

	@Override
	public User<ID> findUserByRole(String role) {
		return delegate.findUserByRole(role);
	}

	@Override
	public String getOperatePermissions(User<ID> user, String target){
		return (String)redisTemplate.opsForValue().get(user.getName() + target);
	}
	
	@Override
	public void saveOperatePermissions(User<ID> user, String target, String permissions){
		redisTemplate.opsForValue().set(user.getName() + target, permissions);
		redisTemplate.expire(user.getName() + target, 5, TimeUnit.MINUTES);
	}

	@Override
	public boolean checkToken(String token) {
		return redisTemplate.hasKey(token);
	}

	@Override
	public boolean isRepeatMobileURL(String estime){
		if(redisTemplate.hasKey(estime)){
			return true;
		} else {
			redisTemplate.opsForValue().set(estime, "");
			redisTemplate.expire(estime, 10, TimeUnit.SECONDS);
			return false;
		}
	}

	@Override
	public boolean checkAccessIntervalUrl(String sessionId, String relativeUrl, long times){
		if(redisTemplate.hasKey(SESSION_KEY_PREFIX + sessionId)){
			return true;
		} else {
			redisTemplate.opsForValue().set(SESSION_KEY_PREFIX + sessionId, relativeUrl, times, TimeUnit.SECONDS);
			return false;
		}
	}

}
