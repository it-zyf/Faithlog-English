package com.comb.framework.task.client;

import com.comb.framework.channel.ChannelMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ClientScheduledService {

    private static Logger logger = LoggerFactory.getLogger(ClientScheduledService.class);
    private String RPC_PORT = "rpc-port";
    private String PRE_PACKAGES = "pre_packages";
    private List<String> preList = new ArrayList<>();
    private List<String> newList = new ArrayList<>();
    @Value("${server.discover-list-ennable:false}")
    private boolean discoverListEnnable;
    @Value("#{'${server.discover-list:}'.split(',')}")
    private List<String> discoverList;
    private boolean isInit = false;
    @Autowired
    private DiscoveryClient discoveryClient;

    public void init(){
        if(!isInit && discoverList != null){
            List<String> lowerList= new ArrayList<>();
            for(String discover : discoverList){
                lowerList.add(discover.toLowerCase());
            }
            discoverList = lowerList;
            isInit = true;
        }
    }
//    @Scheduled(cron = "0/20 * * * * *")
    @Scheduled(fixedDelay=10000)
    public void updateEurekaInfo(){
        logger.debug("updateEurekaInfo start!");
        try{
//            Long startTime = System.currentTimeMillis();
            newList.clear();
            List<String> serviceList = discoveryClient.getServices();
            List<String> discoverServiceList = getDiscoverServiceList(serviceList);
            for(String service : discoverServiceList){
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
                                String value = prePackage + "#" + service + "#" + host + "#" + port;
                                newList.add(value);
                            }
                        }
                    }
                    catch (Exception e){
                        e.printStackTrace();
                    }
                }
            }
            List<String> subList = getDifList(preList, newList);
            for(String value : subList){
                String[] args = value.split("#");
                ChannelMap.sub(args[0],args[1],args[2], Integer.parseInt(args[3]));
            }


            List<String> addList = getDifList(newList, preList);
            for(String value : addList){
                String[] args = value.split("#");
                ChannelMap.put(args[0],args[1],args[2], Integer.parseInt(args[3]));
            }
            preList.clear();
            preList.addAll(newList);
//            logger.info("updateEurekaInfo cost ------------- {}", System.currentTimeMillis() - startTime);
        }  catch (Exception e){
            e.printStackTrace();
        }
        logger.debug("updateEurekaInfo end!");
    }

    private List<String> getDifList(List<String> sList, List<String> tList) {
        List<String> tmpList = new ArrayList<>();
        tmpList.addAll(sList);
        tmpList.removeAll(tList);
        return tmpList;
    }

    private List<String> getDiscoverServiceList(List<String> serviceList) {
        if(discoverListEnnable == false){
            return serviceList;
        }
        if(!isInit)
            init();
        serviceList.retainAll(discoverList);
        return serviceList;
    }
}
