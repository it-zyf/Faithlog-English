package com.comb.framework.channel;


import com.comb.framework.rpc.init.ServicesContainer;
import com.comb.framework.proxy.handler.ProxyException;
import com.comb.framework.rpc.client.IRpcClientApi;
import com.comb.framework.rpc.init.Host;
import com.comb.framework.rpc.model.Request;
import com.comb.framework.rpc.model.Response;
import com.comb.framework.serialize.Serialization;
import com.comb.framework.serialize.kryo.KryoSerialization;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;


public class ChannelMap {


    //	private final static Map<Host, IRpcClientApi> NEETY_CLIENT_CHANNEL_MAP = new ConcurrentHashMap<Host, IRpcClientApi>();
    private final static Map<String, ServicesContainer> PACKAGE_HOST_MAP = new ConcurrentHashMap<String, ServicesContainer>();
    private final static Map<String, Host> HOST_MAP = new ConcurrentHashMap<>();

    private static boolean IS_FILTER_INIT = false;

    public static void put(String prePackage, String serviceName, String ip, Integer port) {
        String hostName = ip + ":" + port;
        Host host = null;
        if (HOST_MAP.containsKey(hostName)) {
            host = HOST_MAP.get(hostName);
        } else {
            host = new Host(serviceName, ip, port);
            HOST_MAP.put(hostName, host);
        }
        ServicesContainer servicesContainer = null;
        if (PACKAGE_HOST_MAP.containsKey(prePackage)) {
            servicesContainer = PACKAGE_HOST_MAP.get(prePackage);
        } else {
            servicesContainer = new ServicesContainer();
        }
        servicesContainer.addHost(host);
        PACKAGE_HOST_MAP.put(prePackage, servicesContainer);
    }

    public static void sub(String prePackage, String serviceName, String ip, Integer port) {
        String hostName = ip + ":" + port;
        Host host = null;
        if (HOST_MAP.containsKey(hostName)) {
            host = HOST_MAP.get(hostName);
        } else {
            return;
        }
        ServicesContainer servicesContainer = null;
        if (PACKAGE_HOST_MAP.containsKey(prePackage)) {
            servicesContainer = PACKAGE_HOST_MAP.get(prePackage);
        } else {
            return;
        }
        servicesContainer.subHost(host);
        PACKAGE_HOST_MAP.put(prePackage, servicesContainer);
    }


    private static IRpcClientApi getChannel(Request request) {
//		return NEETY_CLIENT_CHANNEL_MAP.get("127.0.0.1:10001");
        String prePackage = request.getApiClass().getPackage().getName();
        ServicesContainer servicesContainer = PACKAGE_HOST_MAP.get(prePackage);
        if (servicesContainer == null) {
            return null;
        }

        //获取server服务的实例
        Host host = servicesContainer.getRandomHost();
        //随机获取一个服务的实例
//        Host host = servicesContainer.getWangGuoQiangHost();

//		Host host = servicesContainer.getFILOHost();
        return host != null ? host.getiRpcClientApi() : null;
    }

    /**
     * 发送消息
     *
     * @param request
     * @return
     */
    public static Object sent(Request request) throws Throwable {
        IRpcClientApi channel = getChannel(request);
        if (channel == null) {
            throw new ProxyException("对应接口类未初始化,或者通道断开。");
        }
        // 先序列化后反序列化
        Serialization serialization = KryoSerialization.getInstance();

        byte[] bytes = serialization.serialize(request);
        byte[] res = channel.Request(bytes);
        Response response = (Response) serialization.deserialize(res, Response.class);
        if (response.getException() == null) {
            return response.getReturnValue();
        } else {
            String exception = response.getException();
            if (StringUtils.isNotBlank(exception))
                throw new Exception(exception);
        }
        return null;
    }

}
