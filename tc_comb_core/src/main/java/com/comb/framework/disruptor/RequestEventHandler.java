package com.comb.framework.disruptor;//package com.comb.framework.disruptor;
//
//import com.lmax.disruptor.EventHandler;
//import com.comb.framework.container.spring.SpringContext;
//import com.comb.framework.rpc.model.Request;
//import com.comb.framework.rpc.model.Response;
//
//
//import java.lang.reflect.Method;
//
//
///**
// * 处理接口
// * @author fwb
// *
// */
//public class RequestEventHandler implements EventHandler<RequestEvent> {
//
//    @Override
//    public void onEvent(RequestEvent requestEvent, long l, boolean b) throws Exception {
//    	execute(requestEvent.getRequest());
//    }
//
//	private Response execute(final Request request) {
//		Object result;
//		try {
//			Object apiInstance = SpringContextUtil.getApplicationContext().getBean(request.getApiClass());
//			Method method = apiInstance.getClass().getMethod(request.getMethod(), getParameterTypes(request.getParameters()));
//			result = method.invoke(apiInstance, request.getParameters());
//		} catch (Exception e) {
//			e.printStackTrace();
//			return new Response(request.getMessageId(), null, e.getCause().getMessage());
//		}
//		return new Response(request.getMessageId(), result);
//	}
//
//	private Class<?>[] getParameterTypes(final Object[] parameters) {
//		if (parameters == null) {
//			return new Class<?>[0];
//		}
//		Class<?>[] result = new Class<?>[parameters.length];
//		int i = 0;
//		for (Object each : parameters) {
//			if(each == null){
//				return null;
//			}else{
//				result[i] = each.getClass();
//				i++;
//			}
//		}
//		return result;
//	}
//
//}
