package com.comb.framework.disruptor;


import com.comb.framework.rpc.model.Request;

public class RequestEvent {

	private Request request;

	public Request getRequest() {
		return request;
	}

	public void setRequest(Request request) {
		this.request = request;
	}

}
