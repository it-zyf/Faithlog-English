package com.umi.ga.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.*;

public class DateForm {
    /**
     * @Description: long类型转换成日期
     *
     * @param lo 毫秒数
     * @return String yyyy-MM-dd HH:mm:ss
     */
       public static String longToDate(long lo){
        Date date = new Date(lo);
        SimpleDateFormat sd = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sd.format(date);
    }


    public static String longToDate2(long lo){
        Date date = new Date(lo*1000);
        SimpleDateFormat sd = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sd.format(date);
    }



    /**
     * 将日期转换为时间戳
     */
    public static  Long dateToLong(String time){

        SimpleDateFormat format =  new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        String time="2018-09-29 16:39:00";
        Date date = null;
        try {
            date = format.parse(time);
            //日期转时间戳（毫秒）
          return  date.getTime();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return  null;
    }


    /**
     * 将日期转换为时间戳
     */
    public static  Long dateToLong2(String time){

        SimpleDateFormat format =  new SimpleDateFormat("yyyy-MM-dd");
//        String time="2018-09-29 16:39:00";
        Date date = null;
        try {
            date = format.parse(time);
            //日期转时间戳（毫秒）
            return  date.getTime();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return  null;
    }

    /**
     * 传入的时间减去7Day
     */

    public static String dateMinus7(String time) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Calendar c = new GregorianCalendar();
        try {
            c.setTime(sdf.parse(time));
            c.add(Calendar.SECOND, -7 * 24 * 3600);
            java.util.Date dateBefore = c.getTime();//两种把Calendar转化成Long类型的方法（毫秒）
            String newTime = sdf.format(dateBefore);
            return newTime;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 传入时间减去7Day返回为时间戳
     */

    public static Long longMinus7(String time) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Calendar c = new GregorianCalendar();
        try {
            c.setTime(sdf.parse(time));
            c.add(Calendar.SECOND, -7 * 24 * 3600);
            java.util.Date dateBefore = c.getTime();//两种把Calendar转化成Long类型的方法（毫秒）
            String newTime = sdf.format(dateBefore);
            return dateToLong(newTime);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 获取时间段的日期.
     * @param dBegin
     * @param dEnd
     * @return
     */
    public static List<String> findDates(Date dBegin, Date dEnd){
        List<String> lDate = new ArrayList<String>();
        SimpleDateFormat sd = new SimpleDateFormat("yyyy-MM-dd");
        lDate.add(sd.format(dBegin));
        Calendar calBegin = Calendar.getInstance();
        // 使用给定的 Date 设置此 Calendar 的时间
        calBegin.setTime(dBegin);
        Calendar calEnd = Calendar.getInstance();
        // 使用给定的 Date 设置此 Calendar 的时间
        calEnd.setTime(dEnd);
        // 测试此日期是否在指定日期之后
        while (dEnd.after(calBegin.getTime()))
        {
            // 根据日历的规则，为给定的日历字段添加或减去指定的时间量
            calBegin.add(Calendar.DAY_OF_MONTH, 1);
            lDate.add(sd.format(calBegin.getTime()));
        }
        return lDate;
    }


    public static Date strToDateLong(String strDate) {
          SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        ParsePosition pos = new ParsePosition(0);
          Date strtodate = formatter.parse(strDate, pos);
          return strtodate;
        }

    /**
     * 加一天
     */
     public static String addDay(String strDate,int day){
         DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
         try {
             Date dd = df.parse(strDate);
             Calendar calendar = Calendar.getInstance();
             calendar.setTime(dd);
             calendar.add(Calendar.DAY_OF_MONTH, day);
//            System.out.println("增加一天之后：" + df.format(calendar.getTime()));
             return  df.format(calendar.getTime());
         } catch (ParseException e) {
             e.printStackTrace();
         }
            return  null;
     }


    public static void main(String[] args) {
        addDay("2020-05-14",-1);
        System.out.println(longToDate2(1588406187));
    }




}
