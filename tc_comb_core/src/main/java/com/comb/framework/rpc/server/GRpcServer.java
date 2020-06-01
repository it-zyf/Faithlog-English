package com.comb.framework.rpc.server;

import io.grpc.Server;
import io.grpc.ServerBuilder;

import java.io.IOException;
import java.util.logging.Logger;

public class GRpcServer {
    private static final Logger logger = Logger.getLogger(GRpcServer.class.getName());
    private int port = 2051;
    private Server server;
    public GRpcServer(int port){
        this.port = port;
    }
    public void start() throws IOException {
        server = ServerBuilder.forPort(port)
                .addService(new RpcServiceImpl())
                .build()
                .start();
//        server = NettyServerBuilder.forPort(port)
//                .addService(new RpcServiceImpl())
//                .build()
//                .start();

        //System.out.println("service start...");
        logger.info("service start...");

        Runtime.getRuntime().addShutdownHook(new Thread() {

            @Override
            public void run() {

                //System.err.println("*** shutting down gRPC server since JVM is shutting down");
                logger.info("*** shutting down gRPC server since JVM is shutting down");
                GRpcServer.this.stop();
                //System.err.println("*** server shut down");
                logger.info("*** server shut down");

            }
        });
    }

    public void stop() {
        if (server != null) {
            server.shutdown();
        }
    }
    public void blockUntilShutdown() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }
}
