package com.comb.framework.rabbitmq.test;

public class RabbitmqConsumerMain {
    public static int customCount = 0;
//    public static void main(String[] args) throws Exception {
//        ConnectionFactory factory = new ConnectionFactory();
//        factory.setHost("118.190.43.32");
//        factory.setPort(5672);
//        factory.setUsername("fwb");
//        factory.setPassword("Ff25713803");
//        factory.setVirtualHost("TestHost");
//
//        Connection connection =  factory.newConnection();
//
//        Channel channel = connection.createChannel();
//        String queueName = "buyQueue";
//        channel.queueDeclare(queueName,false,false,false,null);
//
//        channel.basicQos(500);  //每次取5条消息
//        customCount = 0;
//        long start = System.currentTimeMillis();
//        Consumer consumer = new DefaultConsumer(channel){
//            @Override
//            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
//                //消费消费
//                String msg = null;
//                try {
//                    msg = new String(body,"utf-8");
//                    //System.out.println("consume msg: "+msg);
////                    try {
////                        TimeUnit.MILLISECONDS.sleep((long) (Math.random()*500));
////                    } catch (InterruptedException e) {
////                        e.printStackTrace();
////                    }
//                    //手动消息确认
//                    getChannel().basicAck(envelope.getDeliveryTag(),false);
//                    customCount++;
//                    if(customCount % 1500 == 0){
//                        System.out.println(customCount + ":" + (System.currentTimeMillis() - start));
//                    }
//                } catch (UnsupportedEncodingException e) {
//                    e.printStackTrace();
//                }
//
//            }
//        };
//
//
//        //调用消费消息
//        channel.basicConsume(queueName,false,"testQueue1",consumer);
//
//    }
    public static void main(String[] args) throws Exception {
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
//        ConsumerChannelConfig chConf = new ConsumerChannelConfig();
//        chConf.setQueueName("tQueue");
//        chConf.setBasicQos(200);
//        chConf.setDeclareDurable(true);
//        chConf.setConsumerAutoAck(false);
//
//        RmqConsumerConnection connection = new RmqConsumerConnection();
//        connection.Init(conConf, chConf);
//        Channel channel = connection.GetChannel();
//        long start = System.currentTimeMillis();
////        Class<?> clazz = Class.forName("test.TestConsumer");
////        Constructor constructor = clazz.getConstructor(Channel.class);
//        //Consumer consumer = new TestConsumer(channel);
////        Consumer consumer = (Consumer)constructor.newInstance(channel);
//        Consumer consumer = ConsumerCreater.GetNewConsumer("com.comb.framework.rabbitmq.test.TestConsumer", channel);
////        Consumer consumer = new DefaultConsumer(channel){
////            @Override
////            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
////                //消费消费
////                String msg = null;
////                try {
////                    msg = new String(body,"utf-8");
////                    System.out.println("consume msg: "+msg);
////
////                    //手动消息确认
////                    getChannel().basicAck(envelope.getDeliveryTag(),false);
////                    customCount++;
////                    if(customCount % 1500 == 0){
////                        System.out.println(customCount + ":" + (System.currentTimeMillis() - start));
////                    }
////                } catch (UnsupportedEncodingException e) {
////                    e.printStackTrace();
////                }
////
////            }
////        };
//        channel.basicConsume(chConf.getQueueName(),chConf.isConsumerAutoAck(),chConf.getQueueName(),consumer);
    }
}
