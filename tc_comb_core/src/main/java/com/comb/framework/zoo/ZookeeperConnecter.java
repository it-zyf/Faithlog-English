package com.comb.framework.zoo;

import org.apache.log4j.Logger;
import org.apache.zookeeper.*;
import org.apache.zookeeper.data.Stat;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CountDownLatch;


public class ZookeeperConnecter implements Watcher{

    Logger logger = Logger.getLogger(ZookeeperConnecter.class);

    protected CountDownLatch countDownLatch = new CountDownLatch(1);

    //缓存时间
    private static final int SESSION_TIME = 2000;

    public ZooKeeper zooKeeper = null;

    /**
     * 监控所有被触发的事件
     * @param watchedEvent
     */
    public void process(WatchedEvent watchedEvent) {
        logger.info("收到事件通知：" + watchedEvent.getState());
        if(watchedEvent.getState() == Event.KeeperState.SyncConnected){
            countDownLatch.countDown();
        }
    }

    public void connect(String hosts){
        try{
            if(zooKeeper == null){
                //zk客户端允许我们将ZK服务的所有地址进行配置
                zooKeeper = new ZooKeeper(hosts,SESSION_TIME,this);
                //使用countDownLatch的await
                countDownLatch.await();
            }
        }catch(IOException e){
            logger.error("连接创建失败，发生 IOException :" + e.getMessage());
        } catch (InterruptedException e) {
            logger.error("连接创建失败，发生 InterruptedException :" + e.getMessage());
        }
    }

    /**
     * 关闭连接
     */
    public void close(){
        try {
            if (zooKeeper != null) {
                zooKeeper.close();
            }
        }catch (InterruptedException e){
            logger.error("释放连接错误 ："+ e.getMessage());
        }
    }

    /**
     * 读取指定节点的内容
     * @param path 指定的路径
     * @return
     */
    public String readData(String path){
        String data=null;
        try {
            data = new String(zooKeeper.getData(path,false,null));
            logger.info("读取数据成功，其中path:" + path+ ", data-content:" + data);
        } catch (KeeperException e) {
            logger.error( "读取数据失败,发生KeeperException! path: " + path + ", errMsg:" + e.getMessage(), e );
        } catch (InterruptedException e) {
            logger.error( "读取数据失败,InterruptedException! path: " + path + ", errMsg:" + e.getMessage(), e );
        }
        return data;
    }


    public String readDataWithWatch(String path, Watcher watch){
        String data=null;
        try {
            data = new String(zooKeeper.getData(path,watch,null));
            logger.info("读取数据成功，其中path:" + path+ ", data-content:" + data);
        } catch (KeeperException e) {
            logger.error( "读取数据失败,发生KeeperException! path: " + path + ", errMsg:" + e.getMessage(), e );
        } catch (InterruptedException e) {
            logger.error( "读取数据失败,InterruptedException! path: " + path + ", errMsg:" + e.getMessage(), e );
        }
        return data;
    }

    public boolean createZNode(String path,String data){
        try {
            String zkPath = zooKeeper.create(path,data.getBytes(), ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
            logger.info("Zookeeper创建节点成功，节点地址：" + zkPath);
            return true;
        } catch (KeeperException e) {
            logger.error("创建节点失败：" + e.getMessage() + "，path:" + path  ,e);
        } catch (InterruptedException e) {
            logger.error("创建节点失败：" + e.getMessage() + "，path:" + path  ,e);
        }
        return false;
    }

    /**
     * 删除一个节点
     * @param path 节点路径
     * @return
     */
    public boolean deteleZKNode(String path){
        try{
            zooKeeper.delete(path,-1);
            logger.info("Zookeeper删除节点1成功，节点地址：" + path);
            return  true;
        }catch (InterruptedException e){
            logger.error("删除节点失败：" + e.getMessage() + ",path:" + path,e);
        }catch (KeeperException e){
            logger.error("删除节点失败：" + e.getMessage() + ",path:" + path,e);
        }
        return false;
    }

    /**
     * 更新节点内容
     * @param path 节点路径
     * @param data 节点数据
     * @return
     */
    public boolean updateZKNodeData(String path,String data){
        try {
            Stat stat = zooKeeper.setData(path,data.getBytes(),-1);
            logger.info("更新节点数据成功，path:" + path+", stat:" + stat);
            return  true;
        } catch (KeeperException e) {
            logger.error("更新节点数据失败：" + e.getMessage() + "，path:" + path ,e);
        } catch (InterruptedException e) {
            logger.error("更新节点数据失败：" + e.getMessage() + "，path:" + path ,e);
        }
        return false;
    }

    /**
     * 获取某个节点下的所有节点
     * @param path 节点路径
     * @return
     */
    public List<String> getChild(String path){
        try {
            List<String> list = zooKeeper.getChildren(path,false);
            if(list.isEmpty()){
                logger.info(path + "的路径下没有节点");
            }
            return list;
        } catch (KeeperException e) {
            logger.error( "读取子节点数据失败,发生KeeperException! path: " + path
                    + ", errMsg:" + e.getMessage(), e );
        } catch (InterruptedException e) {
            logger.error( "读取子节点数据失败,InterruptedException! path: " + path
                    + ", errMsg:" + e.getMessage(), e );
        }
        return null;
    }

    public boolean isExists(String path){
        try {
            Stat stat = zooKeeper.exists(path,false);
            return null != stat;
        } catch (KeeperException e) {
            logger.error( "读取数据失败,发生KeeperException! path: " + path
                    + ", errMsg:" + e.getMessage(), e );
        } catch (InterruptedException e) {
            logger.error( "读取数据失败,发生InterruptedException! path: " + path
                    + ", errMsg:" + e.getMessage(), e );
        }
        return  false;
    }
}