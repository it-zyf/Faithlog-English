package com.umi.ga.utils;

import com.umi.ga.analysis.model.OnlineTimeEveryDay;
import com.umi.ga.analysis.model.ServerEarlyWarning;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class DefaultUtils {
    //转换List
    public static <T> List<T> toList(Optional<T> option) {
        return option.
                map(Collections::singletonList).
                orElse(Collections.emptyList());
    }

    //对集合进行排序
    public static List getSortList(ServerEarlyWarning sew,List<ServerEarlyWarning> list) {
        if(null ==sew.getSortName()){
            sew.setSortName("roleLevel");
            sew.setSortOrder("desc");
        }
        if("roleLevel".equals(sew.getSortName())){
            if("desc".equals(sew.getSortOrder())){
                Collections.sort(list, new Comparator<ServerEarlyWarning>() {
                    @Override
                    public int compare(ServerEarlyWarning o1, ServerEarlyWarning o2) {
                        return o2.getRoleLevel().compareTo(o1.getRoleLevel());
                    }
                });
                return list;
            }

            if("asc".equals(sew.getSortOrder())){
                Collections.sort(list, new Comparator<ServerEarlyWarning>() {
                    @Override
                    public int compare(ServerEarlyWarning o1, ServerEarlyWarning o2) {
                        return o1.getRoleLevel().compareTo(o2.getRoleLevel());
                    }
                });
                return list;
            }

        }

        if("rolePower".equals(sew.getSortName())){
            if("desc".equals(sew.getSortOrder())){
                Collections.sort(list, new Comparator<ServerEarlyWarning>() {
                    @Override
                    public int compare(ServerEarlyWarning o1, ServerEarlyWarning o2) {
                        return o2.getRolePower().compareTo(o1.getRolePower());
                    }
                });
                return list;
            }

            if("asc".equals(sew.getSortOrder())){
                Collections.sort(list, new Comparator<ServerEarlyWarning>() {
                    @Override
                    public int compare(ServerEarlyWarning o1, ServerEarlyWarning o2) {
                        return o1.getRolePower().compareTo(o2.getRolePower());
                    }
                });
                return list;
            }

        }
        if("vipLevel".equals(sew.getSortName())){
            if("desc".equals(sew.getSortOrder())){
                Collections.sort(list, new Comparator<ServerEarlyWarning>() {
                    @Override
                    public int compare(ServerEarlyWarning o1, ServerEarlyWarning o2) {
                        return o2.getVipLevel().compareTo(o1.getVipLevel());
                    }
                });
                return list;
            }

            if("asc".equals(sew.getSortOrder())){
                Collections.sort(list, new Comparator<ServerEarlyWarning>() {
                    @Override
                    public int compare(ServerEarlyWarning o1, ServerEarlyWarning o2) {
                        return o1.getVipLevel().compareTo(o2.getVipLevel());
                    }
                });
                return list;
            }

        }

        if("warningLevel".equals(sew.getSortName())){
            if("desc".equals(sew.getSortOrder())){
                Collections.sort(list, new Comparator<ServerEarlyWarning>() {
                    @Override
                    public int compare(ServerEarlyWarning o1, ServerEarlyWarning o2) {
                        return o2.getWarningLevel().compareTo(o1.getWarningLevel());
                    }
                });
                return list;
            }

            if("asc".equals(sew.getSortOrder())){
                Collections.sort(list, new Comparator<ServerEarlyWarning>() {
                    @Override
                    public int compare(ServerEarlyWarning o1, ServerEarlyWarning o2) {
                        return o1.getWarningLevel().compareTo(o2.getWarningLevel());
                    }
                });
                return list;
            }


        }
        return null;
    }


    public static List getSortListByLogTime(List<OnlineTimeEveryDay> list){

        Collections.sort(list, new Comparator<OnlineTimeEveryDay>() {
            @Override
            public int compare(OnlineTimeEveryDay o1, OnlineTimeEveryDay o2) {
                return o1.getLogTime().compareTo(o2.getLogTime());
            }
        });
        return list;
    }


}
