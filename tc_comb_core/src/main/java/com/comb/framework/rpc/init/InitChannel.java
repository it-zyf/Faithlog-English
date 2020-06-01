package com.comb.framework.rpc.init;

public interface InitChannel {

	void init();
	
	/**
	 * 外部初始化
	 * 主要是缓存或者数据库
	 */
	void initByOutside();
	
}
