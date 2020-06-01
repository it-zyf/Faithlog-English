package com.comb.framework.rpc.client;

public class TestClient {
    public final static String testMsg = "fdffffffffffffffffffffffffffff" +
            "fffffffffffifififififififififififif" +
            "ffffffsdsdsfdsjfjeifjeifjeifjefjefiefie" +
            "fejfiejfiefjeifjeifjeifejfiejfeifeif" +
            "fejfiejfiefjeifjeifeifjeifjeife" +
            "fefefjiejfiefjeifjeifejfiefjeifjeifjeifjiefjef" +
            "fejifjefiejfeifjeifjeifjeifjeifjeifeifjef" +
            "fjiefjeifjeifjeifjeifjeifjeifefjeif" +
            "fjiefjiefjeifjeifjeifjeifjeifjeifjef" +
            "fjeifjiefjeifjeifjeifjeifjeifjeife" +
            "fejfiejfiejfeifjeifjeifjefeifjeifjeifejif" +
            "fejfiejfiejfeifjeifjeifjeifeifjeifj";
    public static void main(String[] args) {
        try {
            final  IRpcClientApi  client = new GRpcClient("127.0.0.1", 2051);
            Thread.sleep(1000);
            for (int i = 0; i < 300; i++) {
                Thread thread = new Thread(new Runnable() {
                    @Override
                    public void run() {
                        long start = System.currentTimeMillis();

                        for (int i = 0; i < 10; i++) {
                            long tstart = System.currentTimeMillis();

                            //System.out.println(thread.currentThread().getName() + " connect：" + (System.currentTimeMillis() - tstart));
                            //client.greet("world:"+i);
                            //System.out.println(client.GetState());
                            byte[] req = testMsg.getBytes();
                            //System.out.println(new String(req));
                            //byte[] res = client.Request(req);
                            boolean res = client.RequestWithConfirmCode(req);
//                            if(i%5 == 0){
//                                try {
//                                    thread.sleep(1);
//                                } catch (InterruptedException e) {
//                                    e.printStackTrace();
//                                }
//                                //System.out.println(thread.currentThread().getName() + "：" + (System.currentTimeMillis() - start));
//
//                            }

                            //System.out.println(res);
                            //System.out.println(new String(res));
                            //System.out.println(client.GetState());
                            //System.out.println(thread.currentThread().getName() + " send：" + (System.currentTimeMillis() - tstart));
//                        try {
//                            client.shutdown();
//                        } catch (InterruptedException e) {
//                            e.printStackTrace();
//                        }
                        }
                        System.out.println(Thread.currentThread().getName() + "：" + (System.currentTimeMillis() - start));
                    }
                });
                thread.start();
            }
        }
        catch(Exception e){

            e.printStackTrace();
            return;
        }
    }
}
