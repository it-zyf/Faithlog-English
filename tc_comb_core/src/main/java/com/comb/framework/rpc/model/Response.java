package com.comb.framework.rpc.model;

import java.io.Serializable;

public final class Response implements Serializable {

    private static final long serialVersionUID = 5887232731148682128L;

    private final String messageId;
    private final Object returnValue;
    private final String exception;
//    private Exception exceptionObj;

    public Response(final String messageId, final Object returnValue) {
        this.messageId = messageId;
        this.returnValue = returnValue;
        this.exception = null;
    }

    public Response(final String messageId, final Object returnValue, final String exception) {
        this.messageId = messageId;
        this.returnValue = null;
        this.exception = exception;
    }



    public String getMessageId() {
        return messageId;
    }

    public Object getReturnValue() {
        return returnValue;
    }

    public String getException() {
        return exception;
    }


}
