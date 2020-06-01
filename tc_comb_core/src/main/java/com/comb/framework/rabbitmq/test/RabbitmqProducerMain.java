package com.comb.framework.rabbitmq.test;

import java.util.concurrent.ConcurrentHashMap;

public class RabbitmqProducerMain {
    public static String msgObj = "abcdefghijklmnopqrstuvwxyz11111111111111111111111111" +
            "1111111111111111111111111122222222222222222222222222222222222222222222" +
            "2222222223333333333333333333333333333333333333333334444444444444444444" +
            "5555555555555555555555555555555555555555555555555555555555555555555555" +
            "6666666666666666666666666666666666666666666666666666666666666666666666" +
            "7777777777777777777777777777777777777777777777777777777777777777777777";
    public static ConcurrentHashMap<Integer, Long> costMap = new ConcurrentHashMap<>();
    public static void main(String[] args) throws Exception {
//        ConnectionFactory factory = new ConnectionFactory();
//        factory.setHost("118.190.43.32");
//        factory.setPort(5672);
//        factory.setUsername("fwb");
//        factory.setPassword("Ff25713803");
//        factory.setVirtualHost("TestHost");
//        System.out.println(msgObj.length());
//        RmqProducerConnectionPool connectionPool = new RmqProducerConnectionPool(5, 20);
//        ConnectionConfig conConf = new ConnectionConfig();
//        conConf.setHost("118.190.43.32");
//        conConf.setPort(5672);
//        conConf.setUserName("fwb");
//        conConf.setPassword("Ff25713803");
//        conConf.setVirtualHost("TestHost");
//        conConf.setAutomaticRecoveryEnabled(true);
//        conConf.setNetworkRecoveryInterval(1000);
//        conConf.setTopologyRecoveryEnabled(false);
//
//        ProducerChannelConfig chConf = new ProducerChannelConfig();
//        chConf.setExchangeName("testT");
//        chConf.setQueueName(new ArrayList<String>(){{add("tQueue");}});
//        chConf.setRoutingKey(new ArrayList<String>(){{add("buy");add("sell");add("key");}});
//        chConf.setEchangeDeclare("topic");
//        chConf.setDeclareDurable(true);
//        connectionPool.Init(conConf, chConf);
//        long cs = System.currentTimeMillis();
////        Connection connection =  factory.newConnection();
////        System.out.println("Create connection time:" + (System.currentTimeMillis() - cs));
////        Channel channel = connection.createChannel();
////        String queueName = "buyQueue";
////        String exchangeName = "testQ";
////        String routingKey = "buy";
////        channel.exchangeDeclare(exchangeName,"topic");
////        channel.queueDeclare(queueName,false,false,false,null);
////        channel.queueBind(queueName,exchangeName,routingKey);
//
////        Channel channel1 = connection.createChannel();
////        queueName = "sellQueue";
////        String sellRoutingKey = "sell";
////        channel1.exchangeDeclare(exchangeName,"topic");
////        channel1.queueDeclare(queueName,false,false,false,null);
////        channel1.queueBind(queueName,exchangeName,sellRoutingKey);
////
////        int msgCnt =150000;
////        long start = System.currentTimeMillis();
////        while(msgCnt-->0){
////            String msg = "msg"+Math.random()*100;
////            channel.basicPublish(exchangeName,routingKey,null,msg.getBytes());  //发送消息
////            channel1.basicPublish(exchangeName,sellRoutingKey, null, msg.getBytes());
////            //System.out.println("produce msg :"+msg);
////            //TimeUnit.MILLISECONDS.sleep((long) (Math.random()*500));
////        }
////        System.out.println(System.currentTimeMillis() - start);
////        channel.close();
//        for(int i = 0; i < 5; i++){
//            thread t = new thread(new Runnable() {
//                @Override
//                public void run() {
//                    try{
//                        int[] costArr = new int[10];
//                        long start = System.currentTimeMillis();
//                        for(int j = 0 ; j < 100; j++){
//                            long ts = System.currentTimeMillis();
//                            //Channel channel1 = connection.createChannel();
////                            String qn= "tQueue";
////                            String rk = "buy";
////                            String en = "testT";
//                            Channel channel1 = null;
//                            try{
//                                channel1 = connectionPool.GetChannel();
//                                //System.out.println("Channel init time: " +  ((System.currentTimeMillis() - start)));
//                                //start = System.currentTimeMillis();
//
////                            channel1.exchangeDeclare(en,"topic", true);
////                            //System.out.println("Channel exchangeDeclare time: " +  ((System.currentTimeMillis() - start)));
////                            //start = System.currentTimeMillis();
////                            channel1.queueDeclare(qn,true,false,false,null);
////                            //System.out.println("Channel queueDeclare time: " +  ((System.currentTimeMillis() - start)));
////                            //start = System.currentTimeMillis();
////                            channel1.queueBind(qn,en,rk);
//                                //System.out.println("Channel queueBind time: " +  ((System.currentTimeMillis() - start)));
//                                //start = System.currentTimeMillis();
//                                String msg = "msg"+Math.random()*100 + msgObj;
//                                channel1.txSelect();
//                                channel1.basicPublish(chConf.getExchangeName(), "key", MessageProperties.PERSISTENT_TEXT_PLAIN,msg.getBytes());  //发送消息
//                                channel1.txCommit();
//                                int msgCnt =1;
//                                long cost = System.currentTimeMillis() - ts;
//                                if(cost > 50){
//                                    System.out.println("长消耗: " + cost);
//                                }
//                                int index = (int)cost / 5;
//                                if(index >= 10 )
//                                    index = 9;
//                                costArr[index] ++ ;
////                            for(int k = 0; k < msgCnt; k++)
////                            {
////                                String msg = "msg"+Math.random()*100;
////                                channel1.txSelect();
////                                channel1.basicPublish(en,rk,null,msg.getBytes());  //发送消息
////                                channel1.txCommit();
////                                //channel1.basicPublish(en,rk, null, msg.getBytes());
////                                //System.out.println("produce msg :"+msg);
////                                //TimeUnit.MILLISECONDS.sleep((long) (Math.random()*500));
////                            }
//                                //long totalCost = System.currentTimeMillis() - start;
//                                //System.out.println(thread.currentThread().getName() + "total cost :" + totalCost);
//                                //System.out.println("平均耗时:" + totalCost / msgCnt);
//                                //start = System.currentTimeMillis();
//                                //System.out.println("Channel close time: " +  ((System.currentTimeMillis() - start)));
//                            }
//                            catch (Exception e){
//                                j--;
//                                e.printStackTrace();
//
//                            }
//                            finally {
//                                thread.sleep(500);
//                                if(channel1 != null)
//                                    connectionPool.ReleaseChannel(channel1);
//                            }
//                        }
//                        for(int i = 0; i < 10; i++){
//                            System.out.println(i + ":" + costArr[i]);
//                        }
//                        System.out.println(thread.currentThread().getName() + " send 1000 time: " +  ((System.currentTimeMillis() - start)));
//                    }
//                    catch (Exception e){
//                        e.printStackTrace();
//                    }
//
//                }
//            });
//            t.start();
//        }
//        System.out.println("等待结束");
//        System.in.read();
//        connectionPool.CloseAll();
    }
}
