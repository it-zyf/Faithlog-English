package com.comb.framework.util;

import java.util.ArrayList;
import java.util.List;

public class Helper {
    public static List<String> ParseList(String str, String splitC){
        String[] args = str.split(splitC);
        List<String> list = new ArrayList<>();
        for(String arg : args){
            list.add(arg);
        }
        return list;
    }
}
