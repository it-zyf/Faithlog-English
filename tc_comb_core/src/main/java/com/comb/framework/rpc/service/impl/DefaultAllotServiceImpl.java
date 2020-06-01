package com.comb.framework.rpc.service.impl;

import com.comb.framework.rpc.model.Request;
import com.comb.framework.rpc.service.AllotService;

public class DefaultAllotServiceImpl implements AllotService {

	private static int DISRUPTOR_POOL_SIZE = 8;
	private static int DISRUPTOR_STEP = 0;
	
	@Override
	public int getDisruptorStep(Request request) {
		DISRUPTOR_STEP++;
		if(DISRUPTOR_STEP > 7){
			DISRUPTOR_STEP = 0;
		}
		return DISRUPTOR_STEP;
	}

	@Override
	public void setDisruptorSize(int disruptorSize) {
		DISRUPTOR_POOL_SIZE = disruptorSize;
	}

	@Override
	public int getDisruptorSize() {
		return DISRUPTOR_POOL_SIZE;
	}

	
}
