package com.comb.framework.rpc.server;

public class ServerStart {

    public static void main(String[] args) throws Exception {
        final GRpcServer server = new GRpcServer(2051);
        server.start();
        server.blockUntilShutdown();
}
}
