package com.comb.framework.rpc.server;
import com.comb.framework.auth.spring.util.SpringContextUtil;
import com.google.protobuf.ByteString;
import com.comb.framework.container.spring.SpringContext;
import com.comb.framework.rpc.model.Request;
import com.comb.framework.rpc.model.Response;
import com.comb.framework.rpc.protoc.RpcProto;
import com.comb.framework.rpc.protoc.RpcServiceGrpc;
import com.comb.framework.serialize.Serialization;
import com.comb.framework.serialize.kryo.KryoSerialization;
import io.grpc.stub.StreamObserver;

import java.lang.reflect.Method;

public class RpcServiceImpl extends RpcServiceGrpc.RpcServiceImplBase {
    @Override
    public void requestFunc(RpcProto.RequestMsg request,
                            StreamObserver<RpcProto.ResponseMsg> responseObserver){
        //通过getRequst获取数据，使用ByteString转换成
        ByteString req = request.getRequest();
        Serialization serialization = KryoSerialization.getInstance();
        Request r = (Request)serialization.deserialize(req.toByteArray(), Request.class);
        Response response = execute(r);
        PushResult(responseObserver, serialization.serialize(response));
    }
    @Override
    public void requestFuncWithConfirmCode(RpcProto.RequestMsg request,
                            StreamObserver<RpcProto.ConfirmMsg> responseObserver){
        ByteString req = request.getRequest();
        //此函数返回确认消息，确认远程调用成功
        PushResult(responseObserver, true);
        Serialization serialization = KryoSerialization.getInstance();
        Request r = (Request)serialization.deserialize(req.toByteArray(), Request.class);
        //放入disruptor
//        disruptorService.put(r);
    }

    //retMsg 传入你自己序列还的byte数组
    private void PushResult(StreamObserver<RpcProto.ResponseMsg> responseObserver, byte[] retMsg){
        RpcProto.ResponseMsg responseMsg = null;
        responseMsg = RpcProto.ResponseMsg.
                newBuilder().setResponse(ByteString.copyFrom(retMsg)).build();
        responseObserver.onNext(responseMsg);
        responseObserver.onCompleted();
    }

    private void PushResult(StreamObserver<RpcProto.ConfirmMsg> responseObserver, boolean result){
        RpcProto.ConfirmMsg responseMsg = null;
        responseMsg = RpcProto.ConfirmMsg.
                newBuilder().setResult(result).build();
        responseObserver.onNext(responseMsg);
        responseObserver.onCompleted();
    }
    private Response execute(final Request request) {
        Object result;
        try {
            Object apiInstance = SpringContextUtil.getApplicationContext().getBean(request.getApiClass());
            Method method = apiInstance.getClass().getMethod(request.getMethod(), getParameterTypes(request.getParameters()));
            result = method.invoke(apiInstance, request.getParameters());
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(request.getMessageId(), null, e.getCause().getMessage());
        }
        return new Response(request.getMessageId(), result);
    }
    private Class<?>[] getParameterTypes(final Object[] parameters) {
        if (parameters == null) {
            return new Class<?>[0];
        }
        Class<?>[] result = new Class<?>[parameters.length];
        int i = 0;
        for (Object each : parameters) {
            if(each == null){
                return null;
            }else{
                result[i] = each.getClass();
                i++;
            }
        }
        return result;
    }
}
