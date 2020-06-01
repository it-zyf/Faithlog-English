package com.comb.framework.proxy.handler;


public final class ProxyException extends RuntimeException {
	
	private static final long serialVersionUID = 1400214981125931724L;
	
	public ProxyException(final Exception cause) {
		super(cause);
	}
	
	public ProxyException(String message){
		super(message);
	}
}
