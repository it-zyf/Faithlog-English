package com.comb.framework.container;

public interface Container {
	
	void start();
	
	void stop();
	
	Context<?> getContext();
	
}
