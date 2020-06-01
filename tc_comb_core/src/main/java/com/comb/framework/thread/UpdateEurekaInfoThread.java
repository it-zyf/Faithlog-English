package com.comb.framework.thread;


import com.comb.framework.channel.ChannelMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UpdateEurekaInfoThread implements Runnable {
    private static Logger logger = LoggerFactory.getLogger(UpdateEurekaInfoThread.class);
    private DiscoveryClient discoveryClient;
    private String RPC_PORT = "rpc-port";
    private String PRE_PACKAGES = "pre_packages";
    private long intervalMS = 10000;
    private Map<String, Integer> preInfo = new HashMap<>();
    private Map<String, Integer> newInfo = new HashMap<>();
    public UpdateEurekaInfoThread(DiscoveryClient client){
        discoveryClient = client;
    }
    public UpdateEurekaInfoThread(DiscoveryClient client, long intervalMS){
        discoveryClient = client;
        this.intervalMS = intervalMS;
    }
    @Override
    public void run() {
        logger.info("UpdateEurekaInfoThread start!");
        while(true){
            try{
                Thread.sleep(intervalMS);
                Long startTime = System.currentTimeMillis();
                newInfo.clear();
                List<String> serviceList = discoveryClient.getServices();
                for(String service : serviceList){
                    List<ServiceInstance> instanceList = discoveryClient.getInstances(service);
                    for(ServiceInstance instance : instanceList){
                        try{
                            String host = instance.getHost();
                            Map<String, String> metaData = instance.getMetadata();
                            if(metaData.containsKey(RPC_PORT)){
                                String port = metaData.get(RPC_PORT);
                                String prePackages = metaData.get(PRE_PACKAGES);
                                String[] packages = prePackages.split(",");
                                for(String prePackage : packages){
                                    prePackage = prePackage.trim();
                                    String key = prePackage + "#" + service + "#" + host + "#" + port;
                                    if(newInfo.containsKey(key)){
                                        newInfo.put(key, newInfo.get(key) + 1);
                                    }
                                    else{
                                        newInfo.put(key, 1);
                                    }
                                }
                            }
                        }
                       catch (Exception e){
                           e.printStackTrace();
                       }
                    }
                }
                for(String key : newInfo.keySet()){
                    int nCount = newInfo.get(key);
                    int oCount = preInfo.containsKey(key) ? preInfo.get(key) : 0;
                    if(nCount > oCount){
                        String[] args = key.split("#");
                        for(int i = 0; i < nCount - oCount; i++){
                            ChannelMap.put(args[0],args[1],args[2], Integer.parseInt(args[3]));
                        }
                    }
                }
                for(String key : preInfo.keySet()) {
                    int nCount = newInfo.containsKey(key) ? newInfo.get(key) : 0;
                    int oCount = preInfo.get(key);
                    if(nCount < oCount) {
                        String[] args = key.split("#");
                        for (int i = 0; i < oCount - nCount; i++) {
                            ChannelMap.sub(args[0], args[1], args[2], Integer.parseInt(args[3]));
                        }
                    }
                }
                preInfo.clear();
                preInfo.putAll(newInfo);
//                logger.info("UpdateEurekaInfoThread cost ------------- {}", System.currentTimeMillis() - startTime);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (Exception e){
                e.printStackTrace();
            }
            logger.info("UpdateEurekaInfoThread end!");
        }

    }
}
