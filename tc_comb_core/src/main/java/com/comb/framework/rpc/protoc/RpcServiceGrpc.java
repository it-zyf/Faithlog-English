package com.comb.framework.rpc.protoc;

import io.grpc.stub.ClientCalls;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.11.0)",
    comments = "Source: rpc.proto")
public final class RpcServiceGrpc {

  private RpcServiceGrpc() {}

  public static final String SERVICE_NAME = "com.tt.rpc.protoc.RpcService";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @Deprecated // Use {@link #getRequestFuncMethod()} instead.
  public static final io.grpc.MethodDescriptor<RpcProto.RequestMsg,
      RpcProto.ResponseMsg> METHOD_REQUEST_FUNC = getRequestFuncMethodHelper();

  private static volatile io.grpc.MethodDescriptor<RpcProto.RequestMsg,
      RpcProto.ResponseMsg> getRequestFuncMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<RpcProto.RequestMsg,
      RpcProto.ResponseMsg> getRequestFuncMethod() {
    return getRequestFuncMethodHelper();
  }

  private static io.grpc.MethodDescriptor<RpcProto.RequestMsg,
      RpcProto.ResponseMsg> getRequestFuncMethodHelper() {
    io.grpc.MethodDescriptor<RpcProto.RequestMsg, RpcProto.ResponseMsg> getRequestFuncMethod;
    if ((getRequestFuncMethod = RpcServiceGrpc.getRequestFuncMethod) == null) {
      synchronized (RpcServiceGrpc.class) {
        if ((getRequestFuncMethod = RpcServiceGrpc.getRequestFuncMethod) == null) {
          RpcServiceGrpc.getRequestFuncMethod = getRequestFuncMethod =
              io.grpc.MethodDescriptor.<RpcProto.RequestMsg, RpcProto.ResponseMsg>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "com.tt.rpc.protoc.RpcService", "RequestFunc"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  RpcProto.RequestMsg.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  RpcProto.ResponseMsg.getDefaultInstance()))
                  .setSchemaDescriptor(new RpcServiceMethodDescriptorSupplier("RequestFunc"))
                  .build();
          }
        }
     }
     return getRequestFuncMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @Deprecated // Use {@link #getRequestFuncWithConfirmCodeMethod()} instead.
  public static final io.grpc.MethodDescriptor<RpcProto.RequestMsg,
      RpcProto.ConfirmMsg> METHOD_REQUEST_FUNC_WITH_CONFIRM_CODE = getRequestFuncWithConfirmCodeMethodHelper();

  private static volatile io.grpc.MethodDescriptor<RpcProto.RequestMsg,
      RpcProto.ConfirmMsg> getRequestFuncWithConfirmCodeMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<RpcProto.RequestMsg,
      RpcProto.ConfirmMsg> getRequestFuncWithConfirmCodeMethod() {
    return getRequestFuncWithConfirmCodeMethodHelper();
  }

  private static io.grpc.MethodDescriptor<RpcProto.RequestMsg,
      RpcProto.ConfirmMsg> getRequestFuncWithConfirmCodeMethodHelper() {
    io.grpc.MethodDescriptor<RpcProto.RequestMsg, RpcProto.ConfirmMsg> getRequestFuncWithConfirmCodeMethod;
    if ((getRequestFuncWithConfirmCodeMethod = RpcServiceGrpc.getRequestFuncWithConfirmCodeMethod) == null) {
      synchronized (RpcServiceGrpc.class) {
        if ((getRequestFuncWithConfirmCodeMethod = RpcServiceGrpc.getRequestFuncWithConfirmCodeMethod) == null) {
          RpcServiceGrpc.getRequestFuncWithConfirmCodeMethod = getRequestFuncWithConfirmCodeMethod =
              io.grpc.MethodDescriptor.<RpcProto.RequestMsg, RpcProto.ConfirmMsg>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "com.tt.rpc.protoc.RpcService", "RequestFuncWithConfirmCode"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  RpcProto.RequestMsg.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  RpcProto.ConfirmMsg.getDefaultInstance()))
                  .setSchemaDescriptor(new RpcServiceMethodDescriptorSupplier("RequestFuncWithConfirmCode"))
                  .build();
          }
        }
     }
     return getRequestFuncWithConfirmCodeMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static RpcServiceStub newStub(io.grpc.Channel channel) {
    return new RpcServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static RpcServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new RpcServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static RpcServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new RpcServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class RpcServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void requestFunc(RpcProto.RequestMsg request,
        io.grpc.stub.StreamObserver<RpcProto.ResponseMsg> responseObserver) {
      asyncUnimplementedUnaryCall(getRequestFuncMethodHelper(), responseObserver);
    }

    /**
     */
    public void requestFuncWithConfirmCode(RpcProto.RequestMsg request,
        io.grpc.stub.StreamObserver<RpcProto.ConfirmMsg> responseObserver) {
      asyncUnimplementedUnaryCall(getRequestFuncWithConfirmCodeMethodHelper(), responseObserver);
    }

    @Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getRequestFuncMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                RpcProto.RequestMsg,
                RpcProto.ResponseMsg>(
                  this, METHODID_REQUEST_FUNC)))
          .addMethod(
            getRequestFuncWithConfirmCodeMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                RpcProto.RequestMsg,
                RpcProto.ConfirmMsg>(
                  this, METHODID_REQUEST_FUNC_WITH_CONFIRM_CODE)))
          .build();
    }
  }

  /**
   */
  public static final class RpcServiceStub extends io.grpc.stub.AbstractStub<RpcServiceStub> {
    private RpcServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private RpcServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @Override
    protected RpcServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new RpcServiceStub(channel, callOptions);
    }

    /**
     */
    public void requestFunc(RpcProto.RequestMsg request,
        io.grpc.stub.StreamObserver<RpcProto.ResponseMsg> responseObserver) {
      ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRequestFuncMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void requestFuncWithConfirmCode(RpcProto.RequestMsg request,
        io.grpc.stub.StreamObserver<RpcProto.ConfirmMsg> responseObserver) {
      ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRequestFuncWithConfirmCodeMethodHelper(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class RpcServiceBlockingStub extends io.grpc.stub.AbstractStub<RpcServiceBlockingStub> {
    private RpcServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private RpcServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @Override
    protected RpcServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new RpcServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public RpcProto.ResponseMsg requestFunc(RpcProto.RequestMsg request) {
      return blockingUnaryCall(
          getChannel(), getRequestFuncMethodHelper(), getCallOptions(), request);
    }

    /**
     */
    public RpcProto.ConfirmMsg requestFuncWithConfirmCode(RpcProto.RequestMsg request) {
      return blockingUnaryCall(
          getChannel(), getRequestFuncWithConfirmCodeMethodHelper(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class RpcServiceFutureStub extends io.grpc.stub.AbstractStub<RpcServiceFutureStub> {
    private RpcServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private RpcServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @Override
    protected RpcServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new RpcServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<RpcProto.ResponseMsg> requestFunc(
        RpcProto.RequestMsg request) {
      return futureUnaryCall(
          getChannel().newCall(getRequestFuncMethodHelper(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<RpcProto.ConfirmMsg> requestFuncWithConfirmCode(
        RpcProto.RequestMsg request) {
      return futureUnaryCall(
          getChannel().newCall(getRequestFuncWithConfirmCodeMethodHelper(), getCallOptions()), request);
    }
  }

  private static final int METHODID_REQUEST_FUNC = 0;
  private static final int METHODID_REQUEST_FUNC_WITH_CONFIRM_CODE = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final RpcServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(RpcServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_REQUEST_FUNC:
          serviceImpl.requestFunc((RpcProto.RequestMsg) request,
              (io.grpc.stub.StreamObserver<RpcProto.ResponseMsg>) responseObserver);
          break;
        case METHODID_REQUEST_FUNC_WITH_CONFIRM_CODE:
          serviceImpl.requestFuncWithConfirmCode((RpcProto.RequestMsg) request,
              (io.grpc.stub.StreamObserver<RpcProto.ConfirmMsg>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @Override
    @SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class RpcServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    RpcServiceBaseDescriptorSupplier() {}

    @Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return RpcProto.getDescriptor();
    }

    @Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("RpcService");
    }
  }

  private static final class RpcServiceFileDescriptorSupplier
      extends RpcServiceBaseDescriptorSupplier {
    RpcServiceFileDescriptorSupplier() {}
  }

  private static final class RpcServiceMethodDescriptorSupplier
      extends RpcServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    RpcServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (RpcServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new RpcServiceFileDescriptorSupplier())
              .addMethod(getRequestFuncMethodHelper())
              .addMethod(getRequestFuncWithConfirmCodeMethodHelper())
              .build();
        }
      }
    }
    return result;
  }
}
