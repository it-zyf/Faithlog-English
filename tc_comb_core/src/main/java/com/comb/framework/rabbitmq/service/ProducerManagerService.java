package com.comb.framework.rabbitmq.service;

import com.comb.framework.PropertyConfigurer.ZooPropertyConfigurer;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeoutException;

@Component
public class ProducerManagerService {
    private String ProducerNames = "producer_names";
    private Map<String, ProducerService> producerServiceMap = new HashMap<>();
    private Map<String, ProducerService> producerServiceRoutingKeyMap = new HashMap<>();
    public void Init() throws IOException, TimeoutException {
        producerServiceRoutingKeyMap.clear();
        String names = ZooPropertyConfigurer.getProperty(ProducerNames);
        String[] args = names.split(",");
        for(String name : args){
            ProducerService producerService = new ProducerService();
            producerService.Init(name);
            List<String> keys = producerService.getRoutingKeys();
            for(String key : keys){
                producerServiceRoutingKeyMap.put(key, producerService);
            }
            producerServiceMap.put(name, producerService);
        }
    }
    public ProducerService GetProducerServiceByRoutingKey(String key){
        return producerServiceRoutingKeyMap.get(key);
    }
    public ProducerService GetProducerServiceByName(String key){
        return producerServiceMap.get(key);
    }
    public void AppendRoutingKey(String producer, List<String> routingKeyList) throws IOException {
        ProducerService producerService = GetProducerServiceByName(producer);
        if(producer != null){
            producerService.AppendRoutingKey(routingKeyList);
            for(String routingKey : routingKeyList){
                producerServiceRoutingKeyMap.put(routingKey, producerService);
            }
        }

    }

    public void ReloadConfig() throws IOException, TimeoutException {
        ZooPropertyConfigurer.ReloadConfig();
        String names = ZooPropertyConfigurer.getProperty(ProducerNames);
        if(names == null)
            return;
        String[] args = names.split(",");
        for(String name : args){
            ProducerService producerService = GetProducerServiceByName(name);
            if(producerService != null){
                producerService.reloadRoutingKeys(name);
                List<String> keys = producerService.getRoutingKeys();
                List<String> appendRoutingKeyList = new ArrayList<>();
                for(String key : keys){
                    if(!producerServiceRoutingKeyMap.containsKey(key)){
                        appendRoutingKeyList.add(key);
                    }
                }
                if(appendRoutingKeyList.size() > 0){
                    producerService.AppendRoutingKey(appendRoutingKeyList);
                }
                for(String key : appendRoutingKeyList){
                    producerServiceRoutingKeyMap.put(key, producerService);
                }
            }
        }
    }
}
