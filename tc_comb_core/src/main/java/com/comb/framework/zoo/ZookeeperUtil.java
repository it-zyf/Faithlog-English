package com.comb.framework.zoo;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.apache.zookeeper.Watcher;

import java.util.HashMap;
import java.util.Map;

public class ZookeeperUtil {

    private ZookeeperConnecter zookeeperConnecter = null;
    private static ZookeeperUtil zookeeperUtil = null;
    private ZookeeperUtil(){

    }
    public static ZookeeperUtil getInstance(){
        if(zookeeperUtil == null){
            zookeeperUtil = new ZookeeperUtil();
        }
        return zookeeperUtil;
    }
    public void Init(String connectStr){
        zookeeperConnecter =new ZookeeperConnecter();
        zookeeperConnecter.connect(connectStr);
    }
    public Map<String, Object> ReadMap(String path) {
        Map<String, Object> map = new HashMap<>();
        String data = zookeeperConnecter.readData(path);
        JSONObject jsonObj = JSON.parseObject(data);
        for (Map.Entry<String, Object> entry : jsonObj.entrySet()) {
            map.put(entry.getKey(), entry.getValue());
        }
        return map;
    }

    public String ReadString(String path, Watcher watcher) {
        String result = zookeeperConnecter.readDataWithWatch(path, watcher);
        return result;
    }

    public void WriteString(String path, String jsonString) {
        zookeeperConnecter.updateZKNodeData(path, jsonString);
    }
}
