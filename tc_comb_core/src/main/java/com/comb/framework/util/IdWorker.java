package com.comb.framework.util;

public class IdWorker
{
    private long workerId;
    private long datacenterId;
    private long sequence = 0l;

    private static long twepoch = 1288834974657L;

    private static long workerIdBits = 5l;
    private static long datacenterIdBits = 5l;
    private static long maxWorkerId = -1l ^ (-1l << (int)workerIdBits);
    private static long maxDatacenterId = -1l ^ (-1l << (int)datacenterIdBits);
    private static long sequenceBits = 12l;

    private long workerIdShift = sequenceBits;
    private long datacenterIdShift = sequenceBits + workerIdBits;
    private long timestampLeftShift = sequenceBits + workerIdBits + datacenterIdBits;
    private long sequenceMask = -1L ^ (-1L << (int)sequenceBits);

    private long lastTimestamp = -1L;
    private static Object syncRoot = new Object();

    public IdWorker(long workerId) throws Exception {
        // sanity check for workerId
        if (workerId > maxWorkerId || workerId < 0)
        {
           throw new Exception("workerId > maxWorkerId, maxWorkerId:" + maxWorkerId);
        }
        this.workerId = workerId;
        this.datacenterId = 0;
    }

    public long nextId() throws Exception {
        synchronized(syncRoot)
        {
            long timestamp = timeGen();

            if (timestamp < lastTimestamp)
            {
                throw new Exception("严重错误: 时间戳逆转");
//                throw new ApplicationException(string.Format("Clock moved backwards.  Refusing to generate id for %d milliseconds", lastTimestamp - timestamp));
            }

            if (lastTimestamp == timestamp)
            {
                sequence = (sequence + 1) & sequenceMask;
                if (sequence == 0)
                {
                    timestamp = tilNextMillis(lastTimestamp);
                }
            }
            else
            {
                sequence = 0L;
            }

            lastTimestamp = timestamp;

            return ((timestamp - twepoch) << (int)timestampLeftShift) | (datacenterId << (int)datacenterIdShift) | (workerId << (int)workerIdShift) | sequence;
        }
    }

    protected long tilNextMillis(long lastTimestamp)
    {
        long timestamp = timeGen();
        while (timestamp <= lastTimestamp)
        {
            timestamp = timeGen();
        }
        return timestamp;
    }

    protected long timeGen()
    {
        return System.currentTimeMillis();
    }
}
