package com.comb.framework.zoo;

import com.comb.framework.redis.RedisHelper;

public class CommandRedisReconnect implements ZooCommand{

    @Override
    public boolean Exec(Object... params) {
        RedisHelper.Instance().Reconnect();
        return true;
    }
}
