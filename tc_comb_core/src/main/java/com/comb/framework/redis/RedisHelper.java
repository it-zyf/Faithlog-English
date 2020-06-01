package com.comb.framework.redis;

import com.comb.framework.auth.spring.util.SpringContextUtil;
import com.comb.framework.rpc.model.RpcResult;
import org.springframework.data.redis.core.RedisTemplate;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class RedisHelper {
    private static RedisHelper instance = new RedisHelper();
    private static final String Valid_Suffix = "_valid";
    private static final long Default_Expire = 600; //默认过期时间 单位时间秒
    private volatile RedisTemplate redisTemplate = null;

    public static RedisHelper Instance(){
        if(instance.redisTemplate == null){
            instance.InitRedisTemplate();
        }
        return instance;
    }

    private synchronized void InitRedisTemplate(){
        if(redisTemplate == null) {
                instance.redisTemplate = (RedisTemplate) SpringContextUtil.getBean("redisTemplate");
        }
    }


    public boolean UpdateKeyValidAndPutKV(String key, Object value){
        redisTemplate.opsForValue().set(key, value, Default_Expire, TimeUnit.SECONDS);
        SetKeyValid(key, true);
        return true;
    }
    public boolean UpdateKeyValidAndPutKV(String key, Object value, long expire){
        redisTemplate.opsForValue().set(key, value, expire, TimeUnit.SECONDS);
        SetKeyValid(key, true);
        return true;
    }
    public boolean UpdateKeyValidAndPutKV(String key, Object value, long expire, TimeUnit timeUnit){
        redisTemplate.opsForValue().set(key, value, expire, timeUnit);
        SetKeyValid(key, true, expire, timeUnit);
        return true;
    }
    public boolean IsDataValid(String key){
        Long value = redisTemplate.opsForValue().increment(key + Valid_Suffix, 0L);
        return value > 0;
    }
    public Object GetDataByKey(String key){
        return redisTemplate.opsForValue().get(key);
    }
    public void SetDataByKey(String key, Object value) { redisTemplate.opsForValue().set(key, value);}
    public void SetDataByKey(String key, Object value,long expire, TimeUnit timeUnit) { redisTemplate.opsForValue().set(key, value, expire, timeUnit);}

    public List<Object> GetHashSetValuesByKey(String key){
        List<Object> list = redisTemplate.opsForHash().values(key);
        return list;
    }
    public List<Object> GetListByKey(String key){
        List<Object> list = redisTemplate.opsForList().range(key, 0, -1);
        return list;
    }
    public <T> List<T> getlistByKey(String key){
        List<T> list = redisTemplate.opsForList().range(key, 0, -1);
        return list;
    }
    public long GetListSizeByKey(String key){
        return redisTemplate.opsForList().size(key);
    }
    public List<Object> GetListByKey(String key, int start, int end){
        List<Object> list = redisTemplate.opsForList().range(key, start, end);
        return list;
    }

    public Object GetHashSetByKey(String key, Object hk){
        Object obj = redisTemplate.opsForHash().get(key,hk);
        return obj;
    }

    public Map<Object, Object> GetHashMapByKey(String key){
        Map<Object, Object> map = redisTemplate.opsForHash().entries(key);
        return map;
    }

    public boolean UpdateKeyValidAndPutHash(String key, Map<Object, Object> map) {
        //redisTemplate.opsForHash().delete();
        redisTemplate.delete(key);
        redisTemplate.opsForHash().putAll(key, map);
        redisTemplate.expire(key, Default_Expire, TimeUnit.SECONDS);
        SetKeyValid(key, true);
        return true;
    }

    public boolean UpdateKeyValidAndPutHashWithoutExpire(String key, Map<Object, Object> map) {
        //redisTemplate.opsForHash().delete();
        redisTemplate.delete(key);
        redisTemplate.opsForHash().putAll(key, map);
        SetKeyValidWithOutExpire(key, true);
        return true;
    }

    public void SetKeyValidWithOutExpire(String key, boolean b) {
        if(b){
            redisTemplate.opsForValue().increment(key + Valid_Suffix, 1L);
        }
        else{
            redisTemplate.delete(key + Valid_Suffix);
        }
    }

    public boolean PutHashMap(String key, Map<Object, Object> map) {
        //redisTemplate.opsForHash().delete();
        redisTemplate.delete(key);
        redisTemplate.opsForHash().putAll(key, map);
        redisTemplate.expire(key, Default_Expire, TimeUnit.SECONDS);
        return true;
    }

    public boolean UpdateKeyValidAndPutList(String key, List<Object> list) {
        //redisTemplate.opsForHash().delete();
        redisTemplate.delete(key);
        if(list.size() > 0){
            redisTemplate.opsForList().rightPushAll(key, list);
            redisTemplate.expire(key, Default_Expire, TimeUnit.SECONDS);
            SetKeyValid(key, true);
        }
        return true;
    }

    public boolean SetList(String key, List<Object> list) {
        //redisTemplate.opsForHash().delete();
        redisTemplate.delete(key);
        if(list.size() > 0){
            redisTemplate.opsForList().rightPushAll(key, list);
            redisTemplate.expire(key, Default_Expire, TimeUnit.SECONDS);
        }
        return true;
    }
    public <T> boolean setlist(String key, List<T> list){
        redisTemplate.delete(key);
        if(list.size() > 0){
            redisTemplate.opsForList().rightPushAll(key, list);
            redisTemplate.expire(key, Default_Expire, TimeUnit.SECONDS);
        }
        return true;
    }
    public boolean AppendList(String key, List<Object> list){
        if(list.size() > 0){
            redisTemplate.opsForList().rightPushAll(key, list);
            redisTemplate.expire(key, Default_Expire, TimeUnit.SECONDS);
        }
        return true;
    }

    public boolean SetListWithoutExpire(String key, List<Object> list) {
        //redisTemplate.opsForHash().delete();
        redisTemplate.delete(key);
        if(list.size() > 0){
            redisTemplate.opsForList().rightPushAll(key, list);
        }
        return true;
    }

    public void SetKeyValid(String key, boolean b) {
        if(b){
            //redisTemplate.opsForValue().set(key + Valid_Suffix, 0L, Default_Expire, TimeUnit.SECONDS);
            redisTemplate.opsForValue().increment(key + Valid_Suffix, 1L);
            redisTemplate.expire(key + Valid_Suffix, Default_Expire, TimeUnit.SECONDS);
        }
        else{
            redisTemplate.delete(key + Valid_Suffix);
        }

    }

    public void SetKeyValid(String key, boolean b, long expire, TimeUnit timeUnit) {
        if(b){
            //redisTemplate.opsForValue().set(key + Valid_Suffix, 0L, Default_Expire, TimeUnit.SECONDS);
            redisTemplate.opsForValue().increment(key + Valid_Suffix, 1L);
            redisTemplate.expire(key + Valid_Suffix, expire, timeUnit);
        }
        else{
            redisTemplate.delete(key + Valid_Suffix);
        }

    }

    public boolean AddHashValue(String key, Object hk, Object object){
        redisTemplate.opsForHash().put(key, hk, object);
        redisTemplate.expire(key, Default_Expire, TimeUnit.SECONDS);
        return true;
    }
    public boolean AddHashValueWithoutExpire(String key, Object hk, Object object){
        redisTemplate.opsForHash().put(key, hk, object);
        return true;
    }

    public void AddListToLeft(String key, Object obj) {
        redisTemplate.opsForList().leftPush(key, obj);
    }

    public List<Object> GetListByRange(String key, int range) {
        return redisTemplate.opsForList().range(key, 0, range);
    }

    public void SetKeyExpireTime(String key, long time, TimeUnit unit) {
        if(time > 0)
            redisTemplate.expire(key, time, unit);
    }

    public void Reconnect() {
        redisTemplate = null;
    }


    public List useRedisCacheForListResult(Method method, Object args, String key, Object service) throws InvocationTargetException, IllegalAccessException {
        List list = null;
        boolean isValid = IsDataValid(key);
        isValid = false;
        if(!isValid){
            RpcResult result = (RpcResult) method.invoke(service);
            list = (List)result.getData();
            SetList(key, list);
            SetKeyValid(key, true);
            return list;
        }
        list = (List)RedisHelper.Instance().GetListByRange(key, -1);
        return list;
    }

    public Object useRedisCacheForKVResult(String key, Object service, Method method, Object ...args) throws InvocationTargetException, IllegalAccessException {
        Object ret = null;
        boolean isValid = IsDataValid(key);
        isValid = false;
        if(!isValid){
            RpcResult result = (RpcResult) method.invoke(service, new Object[]{args});
            ret =  result.getData();
            SetDataByKey(key, ret);
            SetKeyValid(key, true);
            return ret;
        }
        ret = GetDataByKey(key);
        return ret;
    }

}
