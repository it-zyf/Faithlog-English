package com.umi.ga.utils;

import com.umi.ga.entitys.Condition;
import org.apache.commons.lang3.StringUtils;

import java.util.Date;


public class Query {

    public static int[] getIntArray(String name) {
        if (StringUtils.isNotEmpty(name)) {
            final String[] split = name.split(",");
            final int[] array = new int[split.length];
            for (int i = 0; i < split.length; i++) {
                array[i] = Integer.parseInt(split[i]);
            }
            return array;
        }
        return null;
    }


    public static String[] getArray(String name) {
        if (StringUtils.isEmpty(name)) {
            return null;
        }
        return name.split(",");
    }

    public static Condition changeOver(Condition ct) {
        if (null != ct.getSeDate() && !"".equals(ct.getSeDate())) {
            String[] dataStrings = ct.getSeDate().split("~");
            ct.setStartTime(dataStrings[0].replace(" ", ""));
            ct.setEndTime(dataStrings[1].replace(" ", ""));
        }
        if (null != ct.getServerId() && !"".equals(ct.getServerId())) {
            ct.setStringsArray(Query.getArray(ct.getServerId()));
        }
        if (null != ct.getChannelId() && !"".equals(ct.getChannelId())) {
            ct.setChannelArray(Query.getArray(ct.getChannelId()));
        }

        if (null != ct.getActivityId() && !"".equals(ct.getActivityId())) {
            ct.setStringsArrayTwo(Query.getArray(ct.getActivityId()));
        }

        return ct;

    }
}
