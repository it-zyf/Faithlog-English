package com.comb.framework.rpc.service;


import com.comb.framework.rpc.model.Request;

public interface AllotService {

	public int getDisruptorStep(Request request);
	
	public void setDisruptorSize(int disruptorSize);
	
	public int getDisruptorSize();
}
	
	
