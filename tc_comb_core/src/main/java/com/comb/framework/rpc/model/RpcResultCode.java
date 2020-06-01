package com.comb.framework.rpc.model;

public enum RpcResultCode {
    ERROR(-1, ""),
    SUCCESS(0, "")
    ;
    RpcResultCode(int code, String message){
        this.code = code;
        this.message = message;
    }
    private int code;
    private String message;

}
