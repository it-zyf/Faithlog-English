package com.umi.ga.utils;

import com.umi.ga.analysis.model.DailyAnalysis;
import com.umi.ga.entitys.Flag;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author guowenchuang
 * @Date 2020/4/18 15:26
 */
public class ArgumentsConver {

    /**
     * 转换Flag中的serverId和channelId以符合impala的查询规范
     *
     * @param flag
     * @return flag
     */
    public static Flag converServerIdAndChannelId(Flag flag) {
        String serverId = "";
        String channelId = "";

        flag.setPageIndex(Math.max(flag.getPageIndex(), 1));
        flag.setPageSize(0 == flag.getPageSize() ? 30 : flag.getPageSize());
        flag.setFromIndex((flag.getPageIndex() - 1) * flag.getPageSize());
        flag.setToIndex(flag.getPageIndex() * flag.getPageSize());

        try {
            if (null != flag.getServerId() && !"".equals(flag.getServerId())) {
                String[] server = flag.getServerId().split(",");
                for (String str : server) {
                    serverId = serverId + ",\"" + str + "\"";
                }
            }
            if (null != flag.getChannelId() && !"".equals(flag.getChannelId())) {
                String[] channel = flag.getChannelId().split(",");
                for (String str : channel) {
                    channelId = channelId + ",\"" + str + "\"";
                }
            }
            flag.setChannelId(channelId.replaceFirst(",", ""));
            flag.setServerId(serverId.replaceFirst(",", ""));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

    public static List<DailyAnalysis> retainConver(List<DailyAnalysis> list) {
        List<DailyAnalysis> dailyList = new ArrayList<>();
        if (null != list && 0 != list.size()) {
            for (DailyAnalysis dailyAnalysis : list) {
//                dailyAnalysis.setTimedate();
            }
        }

        return dailyList;
    }
}

