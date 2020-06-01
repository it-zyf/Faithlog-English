package com.comb.framework.zoo;

import java.io.IOException;

public class ZookeeperCliTest {
    public static void main(String[] args) throws IOException {
//        //定义父子类节点路径
//        String rootPath = "/ZookeeperRoot01";
//        String childPath1 = rootPath+ "/child101";
//        String childPath2 = rootPath+ "/child201";
//
//        //ZookeeperOperation操作API
//
//        //连接Zookeeper服务器
//        ZookeeperConnecter zookeeperDemo =new ZookeeperConnecter();
//        zookeeperDemo.connect("118.190.43.23:2181");
//
//        //创建节点
//        if(zookeeperDemo.createZNode(rootPath,"<父>父节点数据")){
//            System.out.println("节点 [ " +rootPath + " ],数据 [ " + zookeeperDemo.readData(rootPath)+" ]");
//        }
//
//        // 创建子节点, 读取 + 删除
//        if ( zookeeperDemo.createZNode( childPath1, "<父-子(1)>节点数据" ) ) {
//            System.out.println( "节点[" + childPath1 + "]数据内容[" + zookeeperDemo.readData( childPath1 ) + "]" );
//            zookeeperDemo.deteleZKNode(childPath1);
//            System.out.println( "节点[" + childPath1 + "]删除值后[" + zookeeperDemo.readData( childPath1 ) + "]" );
//        }
//
//        // 创建子节点, 读取 + 修改
//        if ( zookeeperDemo.createZNode(childPath2, "<父-子(2)>节点数据" ) ) {
//            System.out.println( "节点[" + childPath2 + "]数据内容[" + zookeeperDemo.readData( childPath2 ) + "]" );
//            zookeeperDemo.updateZKNodeData(childPath2, "<父-子(2)>节点数据,更新后的数据" );
//            System.out.println( "节点[" + childPath2+ "]数据内容更新后[" + zookeeperDemo.readData( childPath2 ) + "]" );
//        }
//
//        // 获取子节点
//        List<String> childPaths = zookeeperDemo.getChild(rootPath);
//        if(null != childPaths){
//            System.out.println( "节点[" + rootPath + "]下的子节点数[" + childPaths.size() + "]" );
//            for(String childPath : childPaths){
//                System.out.println(" |--节点名[" +  childPath +  "]");
//            }
//        }
//        // 判断节点是否存在
//        System.out.println( "检测节点[" + rootPath + "]是否存在:" + zookeeperDemo.isExists(rootPath)  );
//        System.out.println( "检测节点[" + childPath1 + "]是否存在:" + zookeeperDemo.isExists(childPath1)  );
//        System.out.println( "检测节点[" + childPath2 + "]是否存在:" + zookeeperDemo.isExists(childPath2)  );
//
//
//        zookeeperDemo.close();


    }

}
