package com.comb.framework.rabbitmq.consumer;

import com.rabbitmq.client.*;

import java.io.IOException;

public abstract class CommonConsumer  implements Consumer {

    private final Channel _channel;
    protected final String _consumerLabel;
    private volatile String _consumerTag;

    public CommonConsumer(Channel channel, String consumerLabel) {
        this._channel = channel;
        this._consumerLabel = consumerLabel;
    }

    @Override
    public void handleConsumeOk(String consumerTag) {
        this._consumerTag = consumerTag;
    }

    @Override
    public void handleCancelOk(String s) {

    }

    @Override
    public void handleCancel(String s) throws IOException {

    }

    @Override
    public void handleShutdownSignal(String s, ShutdownSignalException e) {

    }

    @Override
    public void handleRecoverOk(String s) {

    }

    @Override
    public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
        try{
            boolean suc = OnMessage(body);
            //手动消息确认
            if(suc){
                _channel.basicAck(envelope.getDeliveryTag(),false);
            }
            else{
                _channel.basicRecover();
            }
        }
        catch (Exception e){
            _channel.basicAck(envelope.getDeliveryTag(),false);
            e.printStackTrace();
        }
    }

    public abstract boolean OnMessage(byte[] body) throws IOException;
}
