package com.comb.framework.auth.aop.annotation;


import java.lang.annotation.*;
import java.lang.reflect.Method;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RedisCache {

    String key();

    RedisCacheType type();
}
