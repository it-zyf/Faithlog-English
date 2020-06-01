/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package com.comb.framework.auth.permission.util;

import com.comb.framework.auth.exception.AuthenticationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.lang.reflect.Constructor;


/**
 * Utility method library used to conveniently interact with <code>Class</code>es, such as acquiring them from the
 * application <code>ClassLoader</code>s and instantiating Objects from them.
 *
 * @since 0.1
 */
public class ClassUtils {

    //TODO - complete JavaDoc

    /**
     * Private internal logger instance.
     */
    private static final Logger logger = LoggerFactory.getLogger(ClassUtils.class);

    /**
     * @since 1.0
     */
    private static final ClassLoaderAccessor THREAD_CL_ACCESSOR = new ExceptionIgnoringAccessor() {
        @Override
        protected ClassLoader doGetClassLoader() throws Throwable {
            return Thread.currentThread().getContextClassLoader();
        }
    };

    /**
     * @since 1.0
     */
    private static final ClassLoaderAccessor CLASS_CL_ACCESSOR = new ExceptionIgnoringAccessor() {
        @Override
        protected ClassLoader doGetClassLoader() throws Throwable {
            return ClassUtils.class.getClassLoader();
        }
    };

    /**
     * @since 1.0
     */
    private static final ClassLoaderAccessor SYSTEM_CL_ACCESSOR = new ExceptionIgnoringAccessor() {
        @Override
        protected ClassLoader doGetClassLoader() throws Throwable {
            return ClassLoader.getSystemClassLoader();
        }
    };

    /**
     * Returns the specified resource by checking the current thread's
     * {@link Thread#getContextClassLoader() context class loader}, then the
     * current ClassLoader (<code>ClassUtils.class.getClassLoader()</code>), then the system/application
     * ClassLoader (<code>ClassLoader.getSystemClassLoader()</code>, in that order, using
     * {@link ClassLoader#getResourceAsStream(String) getResourceAsStream(master)}.
     *
     * @param name the master of the resource to acquire from the classloader(s).
     * @return the InputStream of the resource found, or <code>null</code> if the resource cannot be found from any
     *         of the three mentioned ClassLoaders.
     * @since 0.9
     */
    public static InputStream getResourceAsStream(String name) {

        InputStream is = THREAD_CL_ACCESSOR.getResourceStream(name);

        if (is == null) {
            if (logger.isTraceEnabled()) {
                logger.trace("Resource [" + name + "] was not found via the thread context ClassLoader.  Trying the " +
                        "current ClassLoader...");
            }
            is = CLASS_CL_ACCESSOR.getResourceStream(name);
        }

        if (is == null) {
            if (logger.isTraceEnabled()) {
                logger.trace("Resource [" + name + "] was not found via the current class loader.  Trying the " +
                        "system/application ClassLoader...");
            }
            is = SYSTEM_CL_ACCESSOR.getResourceStream(name);
        }

        if (is == null && logger.isTraceEnabled()) {
            logger.trace("Resource [" + name + "] was not found via the thread context, current, or " +
                    "system/application ClassLoaders.  All heuristics have been exhausted.  Returning null.");
        }

        return is;
    }

    /**
     * Attempts to load the specified class master from the current thread's
     * {@link Thread#getContextClassLoader() context class loader}, then the
     * current ClassLoader (<code>ClassUtils.class.getClassLoader()</code>), then the system/application
     * ClassLoader (<code>ClassLoader.getSystemClassLoader()</code>, in that order.  If any of them cannot locate
     * the specified class, an <code>AuthenticationException</code> is thrown (our AuthenticationException equivalent of
     * the JRE's <code>ClassNotFoundException</code>.
     *
     * @param fqcn the fully qualified class master to load
     * @return the located class
     * @throws AuthenticationException if the class cannot be found.
     */
    public static Class forName(String fqcn) throws AuthenticationException {

        Class clazz = THREAD_CL_ACCESSOR.loadClass(fqcn);

        if (clazz == null) {
            if (logger.isTraceEnabled()) {
                logger.trace("Unable to load class named [" + fqcn +
                        "] from the thread context ClassLoader.  Trying the current ClassLoader...");
            }
            clazz = CLASS_CL_ACCESSOR.loadClass(fqcn);
        }

        if (clazz == null) {
            if (logger.isTraceEnabled()) {
                logger.trace("Unable to load class named [" + fqcn + "] from the current ClassLoader.  " +
                        "Trying the system/application ClassLoader...");
            }
            clazz = SYSTEM_CL_ACCESSOR.loadClass(fqcn);
        }

        if (clazz == null) {
            String msg = "Unable to load class named [" + fqcn + "] from the thread context, current, or " +
                    "system/application ClassLoaders.  All heuristics have been exhausted.  Class could not be found.";
            throw new AuthenticationException(msg);
        }

        return clazz;
    }

    public static boolean isAvailable(String fullyQualifiedClassName) {
        try {
            forName(fullyQualifiedClassName);
            return true;
        } catch (AuthenticationException e) {
            return false;
        }
    }

    public static Object newInstance(String fqcn) {
        return newInstance(forName(fqcn));
    }

    public static Object newInstance(String fqcn, Object... args) {
        return newInstance(forName(fqcn), args);
    }

    public static Object newInstance(Class clazz) {
        if (clazz == null) {
            String msg = "Class method parameter cannot be null.";
            throw new AuthenticationException(msg);
        }
        try {
            return clazz.newInstance();
        } catch (Exception e) {
            throw new AuthenticationException("Unable to instantiate class [" + clazz.getName() + "]", e);
        }
    }

    public static Object newInstance(Class clazz, Object... args) {
        Class[] argTypes = new Class[args.length];
        for (int i = 0; i < args.length; i++) {
            argTypes[i] = args[i].getClass();
        }
        Constructor ctor = getConstructor(clazz, argTypes);
        return instantiate(ctor, args);
    }

    public static Constructor getConstructor(Class clazz, Class... argTypes) {
        try {
            return clazz.getConstructor(argTypes);
        } catch (NoSuchMethodException e) {
            throw new AuthenticationException(e);
        }

    }

    public static Object instantiate(Constructor ctor, Object... args) {
        try {
            return ctor.newInstance(args);
        } catch (Exception e) {
            String msg = "Unable to instantiate Permission instance with constructor [" + ctor + "]";
            throw new AuthenticationException(msg, e);
        }
    }

    /**
     * @since 1.0
     */
    private static interface ClassLoaderAccessor {
        Class loadClass(String fqcn);
        InputStream getResourceStream(String name);
    }

    /**
     * @since 1.0
     */
    private static abstract class ExceptionIgnoringAccessor implements ClassLoaderAccessor {

        public Class loadClass(String fqcn) {
            Class clazz = null;
            ClassLoader cl = getClassLoader();
            if (cl != null) {
                try {
                    clazz = cl.loadClass(fqcn);
                } catch (ClassNotFoundException e) {
                    if (logger.isTraceEnabled()) {
                        logger.trace("Unable to load clazz named [" + fqcn + "] from class loader [" + cl + "]");
                    }
                }
            }
            return clazz;
        }

        public InputStream getResourceStream(String name) {
            InputStream is = null;
            ClassLoader cl = getClassLoader();
            if (cl != null) {
                is = cl.getResourceAsStream(name);
            }
            return is;
        }

        protected final ClassLoader getClassLoader() {
            try {
                return doGetClassLoader();
            } catch (Throwable t) {
                if (logger.isDebugEnabled()) {
                    logger.debug("Unable to acquire ClassLoader.", t);
                }
            }
            return null;
        }

        protected abstract ClassLoader doGetClassLoader() throws Throwable;
    }
}
