package com.umi.ga.utils;

import com.umi.ga.entitys.Times;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class dataUtil {
    public static List<Times> getDays(String startTime, String endTime) {
        // 返回的日期集合
        List<Times> days = new ArrayList<Times>();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date start = dateFormat.parse(startTime);
            Date end = dateFormat.parse(endTime);
            Calendar tempStart = Calendar.getInstance();
            tempStart.setTime(start);
            Calendar tempEnd = Calendar.getInstance();
            tempEnd.setTime(end);
            //tempEnd.add(Calendar.DATE, +1);// 日期加1(包含结束)
            tempStart.add(Calendar.DATE, +1);
            while (tempStart.before(tempEnd)) {
                Times day = new Times();
                day.setTimes(dateFormat.format(tempStart.getTime()));
                tempStart.add(Calendar.DAY_OF_YEAR, 1);
                days.add(day);
            }

        } catch (ParseException e) {
            e.printStackTrace();
        }
        return days;
    }
}
