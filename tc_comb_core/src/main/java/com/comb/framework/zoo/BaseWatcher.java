package com.comb.framework.zoo;

import com.alibaba.fastjson.JSONObject;
import com.comb.framework.PropertyConfigurer.ZooPropertyConfigurer;
import org.apache.log4j.Logger;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;

import java.util.HashMap;
import java.util.Map;

public abstract class BaseWatcher implements Watcher {
    private final static Logger logger = Logger.getLogger(BaseWatcher.class);
    private Map<String, ZooCommand> commandMap = new HashMap<String, ZooCommand>();

    public  void Init(){
    }
    @Override
    public void process(WatchedEvent watchedEvent) {
        try {
            if (watchedEvent.getState() == Event.KeeperState.SyncConnected) {
                if (watchedEvent.getType() == Event.EventType.NodeDataChanged) {
                    logger.info("Watch trigger enter.");
                    String value = ZooPropertyConfigurer.getData(watchedEvent.getPath(), this);
                    JSONObject jsonObject = JSONObject.parseObject(value);
                    String commandValue = jsonObject.getString("Command");
                    String paramsValue = jsonObject.getString("Params");
                    logger.info("Watch commond:" + commandValue + " parmas:" + paramsValue);
                    ZooCommand zooCommand = commandMap.get(commandValue);
                    if (zooCommand != null) {
                        String[] params = paramsValue.split(",");
                        logger.info("Command:" + commandValue + "  paramsValue:" + paramsValue);
                        boolean result = zooCommand.Exec(params);
                        if(!result){
                            logger.error("Watch trigger exec failed!");
                        }
                    }
                    logger.info("Watch trigger completed.");
                }
            }
        }
        catch (Exception e){
            logger.error("Watcher process error", e);
        }
    }
    public  void CommandRegist(String com, ZooCommand zooCommand){
        commandMap.put(com, zooCommand);
    }
}
