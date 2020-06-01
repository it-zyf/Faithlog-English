package com.comb.framework.proxy.annotation;


import java.lang.annotation.*;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface ProxyService {
    String value() default "";
}
