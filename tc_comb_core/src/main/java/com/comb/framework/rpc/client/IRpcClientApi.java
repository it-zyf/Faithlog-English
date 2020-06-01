package com.comb.framework.rpc.client;

public interface IRpcClientApi {
    public byte[] Request(byte[] msg, int offset, int size);
    public byte[] Request(byte[] msg);
    public boolean RequestWithConfirmCode(byte[] msg, int offset, int size);
    public boolean RequestWithConfirmCode(byte[] msg);
    public void shutdown() throws InterruptedException ;
}
