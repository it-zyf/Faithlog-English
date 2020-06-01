package com.comb.framework.PropertyConfigurer;

import com.alibaba.fastjson.JSONObject;
import com.comb.framework.zoo.BaseWatcher;
import com.comb.framework.zoo.ZookeeperUtil;
import org.apache.zookeeper.Watcher;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.util.PropertyPlaceholderHelper;

import java.lang.reflect.Constructor;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

public class ZooPropertyConfigurer  extends PropertyPlaceholderConfigurer {
    private static List<String> pathList = null;
    private static List<String> watchPathList = null;
    private String connectstr = "";
    private static Map<String,String> properties = new HashMap<String,String>();
    protected void processProperties(
            ConfigurableListableBeanFactory beanFactoryToProcess,
            Properties props) throws BeansException {
        // cache the properties
        PropertyPlaceholderHelper helper = new PropertyPlaceholderHelper(
                DEFAULT_PLACEHOLDER_PREFIX, DEFAULT_PLACEHOLDER_SUFFIX, DEFAULT_VALUE_SEPARATOR, false);
        ZookeeperUtil.getInstance().Init(connectstr);
        ReadZookeeperByPath(props);
        for(Map.Entry<Object,Object> entry:props.entrySet()){
            String stringKey = String.valueOf(entry.getKey());
            String stringValue = String.valueOf(entry.getValue());
            stringValue = helper.replacePlaceholders(stringValue, props);
            properties.put(stringKey, stringValue);
        }
        RegistWatcher();
        super.processProperties(beanFactoryToProcess, props);
    }
    public static void ReloadConfig(){
        for(String path : pathList){
            Map<String, Object> map = ZookeeperUtil.getInstance().ReadMap(path);
            for(Map.Entry<String,Object> entry:map.entrySet()){
                properties.put(entry.getKey(), String.valueOf(entry.getValue()));
            }
        }
    }
    private void RegistWatcher() {
        try{
            if(watchPathList != null){
                for(String path : watchPathList){
                    String value = getData(path, null);
                    JSONObject jsonObject = JSONObject.parseObject(value);
                    String watchPath = jsonObject.getString("path");
                    String className = jsonObject.getString("class");
                    Class<?> clazz = Class.forName(className);
                    Constructor constructor = clazz.getConstructor();
                    BaseWatcher watcher = (BaseWatcher)constructor.newInstance();
                    watcher.Init();
                    getData(watchPath, watcher);
                }
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

    private void ReadZookeeperByPath(Properties props) {
        for(String path : pathList){
            Map<String, Object> map = ZookeeperUtil.getInstance().ReadMap(path);
            for(Map.Entry<String,Object> entry:map.entrySet()){
                props.put(entry.getKey(), entry.getValue());
            }
        }
    }

    public static String getData(String path, Watcher watcher){
        return ZookeeperUtil.getInstance().ReadString(path, watcher);
    }

    public static Map<String, String> getProperties() {
        return properties;
    }

    public static String getProperty(String key){
        return properties.get(key);
    }
    public static String getProperty(String key, String jsonKey){
        String jsonStr = properties.get(key);
        JSONObject jsonObject = JSONObject.parseObject(jsonStr);
        String value = jsonObject.getString(jsonKey);
        return value;
    }

    public String getConnectstr() {
        return connectstr;
    }

    public void setConnectstr(String connectstr) {
        this.connectstr = connectstr;
    }

    public List<String> getPathList() {
        return pathList;
    }

    public void setPathList(List<String> pathList) {
        this.pathList = pathList;
    }

    public List<String> getWatchPathList() {
        return watchPathList;
    }

    public void setWatchPathList(List<String> watchPathList) {
        this.watchPathList = watchPathList;
    }

}
