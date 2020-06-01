package com.umi.ga.utils;

import com.umi.ga.analysis.model.RealTimeStatistics;
import com.umi.ga.entitys.RealTimeRetain;
import com.umi.ga.entitys.Times;
import org.apache.commons.math3.analysis.function.Sqrt;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @Author guowenchuang
 * @Date 2019/12/30 20:27
 */
public class DateHelper {

    /**
     * 日期段 -- 以天为单位
     *
     * @param times (startTime - endTime)
     * @return timeDateList (Times.getTimes())
     */
    public static List dateSplitByDay(Times times) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<Times> timeDateList = new LinkedList<>();
        Date startTime = null;
        try {
            startTime = sdf.parse(times.getStartTime());
            Date endTime = sdf.parse(times.getEndTime());
            String timeDate = sdf.format(startTime);
            String end = sdf.format(endTime);
            Times date;
            if (sdf.format(startTime).equals(sdf.format(endTime))) {
                date = new Times();
                date.setNumber(0);
                date.setTimes(timeDate);
                timeDateList.add(date);
            } else {
                do {
                    date = new Times();
                    date.setNumber(0);
                    date.setTimes(timeDate);
                    timeDateList.add(date);
                    timeDate = sdf.format(sdf.parse(sdf.format(startTime.getTime() + 24 * 60 * 60 * 1000)));
                    startTime = sdf.parse(timeDate);
                } while (startTime.before(endTime));
                date = new Times();
                date.setNumber(0);
                date.setTimes(sdf.format(endTime));
                timeDateList.add(date);
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return timeDateList;
    }

    /**
     * 时间段 -- 分钟
     *
     * @param times startTime - endTime (yyyy-MM-dd HH:mm:ss)
     * @return map<String, Integer> (key = startTime + "/" + endTime,value = 0)
     */
    public static Map dateSplitByMinute(Times times, Long incr) {
        // 有序
        Map<String, Integer> map = new LinkedHashMap<>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String startTime = times.getStartTime();
        String endTime = times.getEndTime();
        Date start = null;
        try {
            start = sdf.parse(startTime);
            Date end = sdf.parse(endTime);

            // 从startTime开始累加，每次五分钟，当大于end累加结束。放入到Map集合中，key为startTime/endTime,value默认为0
            // 一天共288个时间段
            while (true) {
                endTime = sdf.format(start.getTime() + (incr * 60 * 1000));
                startTime = sdf.format(start);
                start = sdf.parse(endTime);
                if (start.after(end))
                    break;
                map.put(startTime + "/" + endTime, 0);
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return map;
    }

    /**
     * 时间段 -- 分钟
     *
     * @param times startTime - endTime (yyyy-MM-dd HH:mm:ss)
     * @return map<String, Integer> (key = startTime + "/" + endTime,value = new new RealTimeStatistics() )
     */
    public static Map dateSplitByMinute2(Times times, Long incr) {
        // 有序
        Map<String, RealTimeStatistics> map = new LinkedHashMap<>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String startTime = times.getStartTime();
        String endTime = times.getEndTime();
        Date start = null;
        try {
            start = sdf.parse(startTime);
            Date end = sdf.parse(endTime);

            // 从startTime开始累加，每次五分钟，当大于end累加结束。放入到Map集合中，key为startTime/endTime,value默认为0
            // 一天共288个时间段
            while (true) {
                endTime = sdf.format(start.getTime() + (incr * 60 * 1000));
                startTime = sdf.format(start);
                start = sdf.parse(endTime);
                if (start.after(end))
                    break;
                map.put(startTime + "/" + endTime, new RealTimeStatistics());
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return map;
    }


    public static Map<String, RealTimeRetain> dateSplitByHour(Times time, Long incr) {
        // 有序
        Map<String, RealTimeRetain> map = new LinkedHashMap<>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String startTime = time.getStartTime();
        String endTime = time.getEndTime();
        // 有序
        Map<String, Integer> retainMap = new LinkedHashMap<>();
        Date start = null;
        try {
            start = sdf.parse(startTime);
            Date end = sdf.parse(endTime);

            // 从startTime开始累加，每次1小时
            // 一天共24个时间段
            while (true) {
                endTime = sdf.format(start.getTime() + (incr * 60 * 60 * 1000));
                start = sdf.parse(endTime);
                if (start.after(end)) break;
                map.put(startTime + "/" + endTime, new RealTimeRetain());
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return map;
    }


    /**
     * 日期转string -- perfect
     *
     * @param date (yyyy-MM-dd HH:mm:ss)
     * @return str (yyyy-MM-dd HH:mm:ss)
     */
    public static String datePerfectFormatToStr(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format = sdf.format(date);
        return format;
    }

    /**
     * 日期转string -- simple
     *
     * @param date (yyyy-MM-dd)
     * @return str (yyyy-MM-dd)
     */
    public static String dateSimpleFormatString(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String format = sdf.format(date);
        return format;
    }

    /**
     * 日期转string -- special
     *
     * @param date (yyyyMMdd)
     * @return str (yyyyMMdd)
     */
    public static String dateSpecialFormatString(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        String format = sdf.format(date);
        return format;
    }

    /**
     * string转日期 -- perfect
     *
     * @param string (yyyy-MM-dd HH:mm:ss)
     * @return date (yyyy-MM-dd HH:mm:ss)
     */
    public static Date strPerfectFormatDate(String string) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = null;
        try {
            date = sdf.parse(string);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    /**
     * string转日期 -- simple
     *
     * @param string (yyyy-MM-dd)
     * @return date (yyyy-MM-dd)
     */
    public static Date strSimpleFormatDate(String string) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = null;
        try {
            date = sdf.parse(string);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    /**
     * string转日期 -- special
     *
     * @param string (yyyyMMdd)
     * @return date (yyyyMMdd)
     */
    public static Date strSpecialFormatDate(String string) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Date date = null;
        try {
            date = sdf.parse(string);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    /**
     * 增加或减少日期  -- 以天为单位
     *
     * @param string (yyyy-MM-dd)
     * @return string (yyyy-MM-dd)
     */
    public static String dateIncrease(String string, Long incr) {
        String str = "";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            str = sdf.format(sdf.parse(string).getTime() + (incr * 24 * 60 * 60 * 1000));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return str;
    }

    /**
     * @param time 毫秒时间戳   (1586415090000)
     * @return (yyyy - MM - dd HH : mm : ss)
     */
    public static String dateConver(String time) {
        String str = "";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            str = sdf.format(Long.parseLong(time));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return str;
    }
}