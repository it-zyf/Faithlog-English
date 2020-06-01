package com.comb.framework.rpc.client;

import com.google.protobuf.ByteString;
import com.comb.framework.rpc.protoc.RpcProto;
import com.comb.framework.rpc.protoc.RpcServiceGrpc;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import java.util.concurrent.TimeUnit;

public class GRpcClient implements IRpcClientApi{

    private ManagedChannel channel;
    private RpcServiceGrpc.RpcServiceBlockingStub blockingStub;

    public GRpcClient(String host, int port){
        Init(host, port);
    }
    private void Init(String host, int port){
        channel = ManagedChannelBuilder.forAddress(host,port)
                .usePlaintext()
                .build();
        blockingStub = RpcServiceGrpc.newBlockingStub(channel);
    }
    @Override
    public byte[] Request(byte[] msg, int offset, int size){
        RpcProto.RequestMsg request = RpcProto.RequestMsg.newBuilder().setRequest(ByteString.copyFrom(msg, offset, size)).build();
        RpcProto.ResponseMsg response = blockingStub.requestFunc(request);
        return response.getResponse().toByteArray();
    }
    @Override
    public byte[] Request(byte[] msg){
        RpcProto.RequestMsg request = RpcProto.RequestMsg.newBuilder().setRequest(ByteString.copyFrom(msg)).build();
        RpcProto.ResponseMsg response = blockingStub.requestFunc(request);
        return response.getResponse().toByteArray();
    }

    @Override
    public boolean RequestWithConfirmCode(byte[] msg, int offset, int size) {
        RpcProto.RequestMsg request = RpcProto.RequestMsg.newBuilder().setRequest(ByteString.copyFrom(msg)).build();
        RpcProto.ConfirmMsg response = blockingStub.requestFuncWithConfirmCode(request);
        return response.getResult();
    }

    @Override
    public boolean RequestWithConfirmCode(byte[] msg) {
        RpcProto.RequestMsg request = RpcProto.RequestMsg.newBuilder().setRequest(ByteString.copyFrom(msg)).build();
        RpcProto.ConfirmMsg response = blockingStub.requestFuncWithConfirmCode(request);
        return response.getResult();
    }

    @Override
    public void shutdown() throws InterruptedException {
        channel.shutdown().awaitTermination(5, TimeUnit.SECONDS);
    }

}
