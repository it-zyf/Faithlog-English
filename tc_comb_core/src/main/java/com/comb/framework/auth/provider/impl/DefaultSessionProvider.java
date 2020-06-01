package com.comb.framework.auth.provider.impl;

import com.comb.framework.auth.Session;
import com.comb.framework.auth.provider.SessionProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.TimeUnit;

@Service
public class DefaultSessionProvider implements SessionProvider {
	
	private final static String LOGIN_SESSION_USER_KEY = "login_session_user";
	
	@Autowired
	private RedisTemplate redisTemplate;
	
	
	public DefaultSessionProvider(){
	}

	@Override
	public void save(Session session) {
		if(session == null) return;
//		if(session.getExpireMinutes() > 0){
////			redisTemplate.opsForValue().set(session.getId(), session, session.getExpireMinutes(), TimeUnit.MINUTES);
//			redisTemplate.opsForValue().set(session.getId(), session);
//			redisTemplate.opsForValue().set(session.getPrincipal(), session.getId());
//		} else {
//			redisTemplate.opsForValue().set(session.getId(), session);
//		}

		//单用户登陆
		redisTemplate.opsForValue().set(session.getId(), session,30, TimeUnit.DAYS);
		String pri = (String)redisTemplate.opsForValue().get(session.getPrincipal());
		if(pri != null && !pri.isEmpty())
			redisTemplate.delete(pri);
		redisTemplate.opsForValue().set(session.getPrincipal(), session.getId(),30, TimeUnit.DAYS);

		//一个用户多sesson登录
		//redisTemplate.opsForHash().delete(LOGIN_SESSION_USER_KEY + session.getPrincipal());
		//redisTemplate.opsForHash().put(LOGIN_SESSION_USER_KEY + session.getPrincipal(), session.getHttpSessionId(), session);
	}

	@Override
	public Session findById(Serializable sessionId){
		 if(sessionId == null) return null;
		 return (Session)redisTemplate.opsForValue().get(sessionId);
	}
	
	@Override
	public Session getSessionByHttpSessionId(String httpSessionId){
		return (Session)redisTemplate.opsForHash().get(LOGIN_SESSION_USER_KEY, httpSessionId);
	}

	@Override
	public void update(Session session, boolean isInitExpireTime){
		if(session == null) return;
		if(isInitExpireTime){
			redisTemplate.opsForValue().set(session.getId(), session, session.getExpireMinutes(), TimeUnit.MINUTES);
		} else {
			redisTemplate.opsForValue().set(session.getId(), session);
		}
	}

	@Override
	public void delete(Session session) {
		redisTemplate.delete(session.getId());
		redisTemplate.opsForHash().delete(LOGIN_SESSION_USER_KEY + session.getPrincipal(), session.getHttpSessionId());
	}

	@Override
	public void expire(Session session,long expireMinuts){
		redisTemplate.expire(session.getId(),expireMinuts,TimeUnit.MINUTES);

	}

	@Override
	public Collection<String> findSessionIdByUser(String principal) {
		Set<Object> set = redisTemplate.opsForHash().keys(LOGIN_SESSION_USER_KEY + principal);
		Set<String> result = new HashSet<String>();
		for(Object o : set){
			result.add((String)o);
		}
		return result;
	}


}
