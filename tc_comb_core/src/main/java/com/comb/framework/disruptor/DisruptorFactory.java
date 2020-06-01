package com.comb.framework.disruptor;//package com.comb.framework.disruptor;
//
//import com.lmax.disruptor.dsl.Disruptor;
//import com.comb.framework.rpc.model.Request;
//
//import java.util.concurrent.Executors;
//import java.util.concurrent.ThreadFactory;
//
//public class DisruptorFactory {
//
//	private int BUFFER_SIZE = 1024 * 8;
//
//	private Disruptor<RequestEvent> disruptor = null;
//
//	public void start() {
//		if (disruptor == null) {
//			// The factory for the event
//			RequestEventFactory factory = new RequestEventFactory();
//			ThreadFactory threadFactory = Executors.defaultThreadFactory();
//			// Construct the Disruptor
//			disruptor = new Disruptor<RequestEvent>(factory, BUFFER_SIZE, threadFactory);
//			disruptor.setDefaultExceptionHandler(new DisruptorExceptionHandler());
//			// Connect the handler
//			disruptor.handleEventsWith(new RequestEventHandler());
//			// Start the Disruptor, starts all threads running
//			disruptor.start();
//		}
//	}
//
//	public void put(Request request) {
//		// 可以把ringBuffer看做一个事件队列，那么next就是得到下面一个事件槽
//		long sequence = disruptor.getRingBuffer().next();
//		try {
//			// 用上面的索引取出一个空的事件用于填充
//			RequestEvent event = disruptor.getRingBuffer().get(sequence);
//			event.setRequest(request);
//		} finally {
//			// 发布事件
//			disruptor.getRingBuffer().publish(sequence);
//		}
//	}
//}
