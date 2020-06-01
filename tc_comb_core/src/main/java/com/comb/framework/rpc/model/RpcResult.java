package com.comb.framework.rpc.model;

public class RpcResult implements java.io.Serializable{
    private static final long serialVersionUID = -8758079541234285898L;
//    public static final int SUCCESS = 3000;//成功
//    public static final int OTHER_ERROR = 1001;//失败, 其他原因
//    public static final int CAS_ERROR = -9999;

    private RpcResultCode result ;
    private Object data = null;
    private String mes;

    public RpcResult(RpcResultCode rpcResultCode){
        result = rpcResultCode;
    }

    public RpcResultCode getResult() {
        return result;
    }

    public void setResult(RpcResultCode result) {
        this.result = result;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }
}
