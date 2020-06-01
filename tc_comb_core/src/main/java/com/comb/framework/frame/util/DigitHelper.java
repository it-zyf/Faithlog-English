package com.comb.framework.frame.util;

import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * 
 * @author fwb
 *
 */
public class DigitHelper {

	private static int LEVEL_BIT = 3;// 层位数
	private static int SYSTEM_NEED_LEVEL = 5;// 系统所需层级数

	private static int INTEGER_LEVEL_MAX_SUPPORT_AS_TWO = 5;// 2位层表示最大支持层级数
	private static int INTEGER_FIRST_LEVEL_MAX_SUPPORT_AS_TWO = 21;// 2位层表示第一级最大支持数
	private static int INTEGER_LEVEL_MAX_SUPPORT_AS_THREE = 4;// 3位层表示最大支持层级数
	private static int INTEGER_FIRST_LEVEL_MAX_SUPPORT_AS_THREE = 2;// 3位层表示第一级最大支持数

	private static int LONG_LEVEL_MAX_SUPPORT_AS_TWO = 10;// 2位层表示最大支持层级数
	private static int LONG_FIRST_LEVEL_MAX_SUPPORT_AS_TWO = 9;// 2位层表示第一级最大支持数
	private static int LONG_LEVEL_MAX_SUPPORT_AS_THREE = 7;// 3位层表示最大支持层级数
	private static int LONG_FIRST_LEVEL_MAX_SUPPORT_AS_THREE = 9;// 3位层表示第一级最大支持数

	private static int MAX_SIZE_AS_TWO = 99;
	private static int MAX_SIZE_AS_THREE = 999;

	private static int INTEGER_BIT_MAX_SIZE = 10;
	private static int LONG_BIT_MAX_SIZE = 19;

	/**
	 * 传入合理的值获得对应的下个数字
	 * 
	 * @param i
	 * @param level
	 * @return
	 */
	public static int getNextIntValue(int i, int level) {
		if (i < 0)
			return 0;
		int multiBase = 100;
		int levelMaxSupport = INTEGER_LEVEL_MAX_SUPPORT_AS_TWO;
		if (LEVEL_BIT == 2) {
			// 默认为5
			if (SYSTEM_NEED_LEVEL < INTEGER_LEVEL_MAX_SUPPORT_AS_TWO
					&& SYSTEM_NEED_LEVEL > 0)
				levelMaxSupport = SYSTEM_NEED_LEVEL;
		} else {
			multiBase = 1000;
			levelMaxSupport = INTEGER_LEVEL_MAX_SUPPORT_AS_THREE;
			// 默认为4
			if (SYSTEM_NEED_LEVEL < INTEGER_LEVEL_MAX_SUPPORT_AS_THREE
					&& SYSTEM_NEED_LEVEL > 0)
				levelMaxSupport = SYSTEM_NEED_LEVEL;
		}
		level = levelMaxSupport - level + 1;
		if (level < 1)
			return 0;
		// 补位
		i = getRightIntValue(i, levelMaxSupport);
		if (i == 0)
			return 0;

		int base = 1;
		for (int j = 1; j < level; j++)
			base *= multiBase;
		// 判断是否符合条件
		int result = i / base;
		result %= multiBase;
		result++;
		if (LEVEL_BIT == 2) {
			if (result > MAX_SIZE_AS_TWO)
				return 0;
		} else {
			if (result > MAX_SIZE_AS_THREE)
				return 0;
		}
		if (level == INTEGER_LEVEL_MAX_SUPPORT_AS_TWO)
			if (LEVEL_BIT == 2) {
				if (result > INTEGER_FIRST_LEVEL_MAX_SUPPORT_AS_TWO)
					return 0;
			} else {
				if (result > INTEGER_FIRST_LEVEL_MAX_SUPPORT_AS_THREE)
					return 0;
			}
		i += base;
		if (i > Integer.MAX_VALUE)
			return 0;
		return i;
	}

	/**
	 * 传入合理的值获得对应的下个数字编码
	 * 
	 * @param i 输入值
	 * @param level 第几层
	 * @return
	 */
	public static long getNextLongValue(long i, int level) {
		if (i < 0)
			return 0;
		int multiBase = 100;
		int levelMaxSupport = LONG_LEVEL_MAX_SUPPORT_AS_TWO;
		if (LEVEL_BIT == 2) {
			// 默认为5
			if (SYSTEM_NEED_LEVEL < LONG_LEVEL_MAX_SUPPORT_AS_TWO
					&& SYSTEM_NEED_LEVEL > 0)
				levelMaxSupport = SYSTEM_NEED_LEVEL;
		} else {
			multiBase = 1000;
			levelMaxSupport = LONG_LEVEL_MAX_SUPPORT_AS_THREE;
			// 默认为4
			if (SYSTEM_NEED_LEVEL < LONG_LEVEL_MAX_SUPPORT_AS_TWO
					&& SYSTEM_NEED_LEVEL > 0)
				levelMaxSupport = SYSTEM_NEED_LEVEL;
		}
		level = levelMaxSupport - level + 1;
		if (level < 1)
			return 0;
		// 补位
		i = getRightLongValue(i, levelMaxSupport);
		if (i == 0)
			return 0;

		int base = 1;
		for (int j = 1; j < level; j++)
			base *= multiBase;
		// 判断是否符合条件
		long result = i / base;
		result %= multiBase;
		result++;
		if (LEVEL_BIT == 2) {
			if (result > MAX_SIZE_AS_TWO)
				return 0;
		} else {
			if (result > MAX_SIZE_AS_THREE)
				return 0;
		}
		if (level == LONG_LEVEL_MAX_SUPPORT_AS_TWO)
			if (LEVEL_BIT == 2) {
				if (result > LONG_FIRST_LEVEL_MAX_SUPPORT_AS_TWO)
					return 0;
			} else {
				if (result > LONG_FIRST_LEVEL_MAX_SUPPORT_AS_THREE)
					return 0;
			}
		i += base;
		if (i > Long.MAX_VALUE)
			return 0;
		return i;
	}

	/**
	 * 补位
	 * 
	 * @param i
	 * @return
	 */
	private static int getRightIntValue(int i, int levelMaxSupport) {
		String str = String.valueOf(i);
		// 判断传入的位数是否正确
		int length = str.length();
		int levelBit = 2;
		if (LEVEL_BIT == 3) {
			levelBit = LEVEL_BIT;
		}
		int bitLength = levelMaxSupport * levelBit;
		if (bitLength > INTEGER_BIT_MAX_SIZE)
			bitLength = INTEGER_BIT_MAX_SIZE;
		if (length > bitLength)
			return 0;
		length = bitLength - length;
		for (int j = 0; j < length; j++)
			i *= 10;
		return i;
	}

	/**
	 * 补位
	 * @param i
	 * @param levelMaxSupport
	 * @return
	 */
	private static long getRightLongValue(long i, int levelMaxSupport) {
		String str = String.valueOf(i);
		// 判断传入的位数是否正确
		int length = str.length();
		int levelBit = 2;
		if (LEVEL_BIT == 3) {
			levelBit = LEVEL_BIT;
		}
		int bitLength = levelMaxSupport * levelBit;
		if (bitLength > LONG_BIT_MAX_SIZE)
			bitLength = LONG_BIT_MAX_SIZE;
		if (length > bitLength)
			return 0;
		length = bitLength - length;
		for (int j = 0; j < length; j++)
			i *= 10;
		return i;
	}
	
	/**
	 * 补位处理 
	 * 输入100 输出100000000000000
	 * @param i
	 * @return
	 */
	public static long getFillLongValue(long i){
		String str = String.valueOf(i);
		int length = LEVEL_BIT * SYSTEM_NEED_LEVEL;
		if(str.length() > length){
			str = str.substring(0, length);
		}else{
			length = length - str.length();
			for(int j = 0; j < length ; j++){
				str += "0";
			}
		}
		return Long.valueOf(str);
	}
	
	/**
	 * 根据平台标识判断是否在同一地区
	 * @param platMark1
	 * @param platMark2
	 * @param level 地区级别 1:国家 2:省 3:市 4:区、县 5:机构
	 * @return
	 */
	public static boolean isBelongSameArea(long platMark1, long platMark2, int level){
		String str1 = String.valueOf(platMark1);
		String str2 = String.valueOf(platMark2);
		if (str1.length() != str2.length()) {
			return false;
		}
		if (str1.length() < level * 3) {
			return false;
		}

		switch (level) {
		case 1:
			str1 = str1.substring(0, 3);
			str2 = str2.substring(0, 3);
			return str1.equals(str2);
		case 2:
			str1 = str1.substring(0, 6);
			str2 = str2.substring(0, 6);
			return str1.equals(str2);
		case 3:
			str1 = str1.substring(0, 9);
			str2 = str2.substring(0, 9);
			return str1.equals(str2);
		case 4:
			str1 = str1.substring(0, 12);
			str2 = str2.substring(0, 12);
			return str1.equals(str2);
		case 5:
			return str1.equals(str2);
		default:
			return false;
		}
	}
	
	/**
	 * 根据输入值，获得同层次的下一个编码
	 * 主要查询用 where>=i and i<返回值
	 * 不考虑每层999的情况，若是 返回0
	 * @param i
	 * @return
	 */
	public static long getSameLevelNextLongValue(long i){
		String str = String.valueOf(i);
		if(str.length() <= LEVEL_BIT){
			return ++i;
		}
	    int length = str.length();
	    int begin = length - LEVEL_BIT;
	    String num = "";
	    while(begin >= 0){
	    	String temp = str.substring(begin, length);
	    	if(temp.equals("000")){
	    		num = "000" + num;
	    	}else{
	    		long n = Long.valueOf(temp) + 1;
	    		if(n >= 999){
	    			return 0;
	    		}
	    		if(n < 10){
	    			num = "00"+ n + num;
	    		}else if (n < 100){
	    			num = "0"+ n + num;
	    		}else{
	    			num = n + num;
	    		}
	    		num = str.substring(0,begin) + num;
	    		break;
	    	}
	    	length = begin;
	    	begin = length - LEVEL_BIT;
	    }
	    return Long.valueOf(num);
	}
	
	/**
	 * 根据标识获得同级别的下一个标识
	 * @param i
	 * @return
	 */
	public static long getSameLevelNextLongValue(String i){
		if(StringUtils.isBlank(i)){
			return 0L;
		}
		return getSameLevelNextLongValue(Long.valueOf(i));
	}
	
	/**
	 * 获得上级的编号
	 * @param i
	 * @param isIncludeSelf 是否包含自己
	 * @return
	 */
	public static List<Long> getSuper(long i, boolean isIncludeSelf){
		List<Long> list = new ArrayList<Long>();
		if(i < 0){
			return list;
		}
		String str = String.valueOf(i);
		if(str.length() != LEVEL_BIT * SYSTEM_NEED_LEVEL){
			return list;
		}
		String[] array = new String[5];
		int no = 0;
		for(int j=0; j < str.length(); j=j+3){
			String s = str.substring(j, j+3);
			if(s.equals("000")){
				continue;
			}
			array[no] = s;
			no ++ ;
		}
		Long num = Long.valueOf(array[0] + "000000000000");
		list.add(num);
		
		if(array[1] != null){
			num = Long.valueOf(array[0] + array[1]+ "000000000");
			if(num > i){
				return list;
			}
			list.add(num);
			if(array[2] != null){
				num = Long.valueOf(array[0] + array[1]+ array[2]+ "000000");
				if(num > i){
					return list;
				}
				list.add(num);
				if(array[3] != null){
					num = Long.valueOf(array[0] + array[1]+ array[2] + array[3] + "000");
					if(num > i){
						return list;
					}
					list.add(num);
					if(array[4] != null){
						num = Long.valueOf(str);
						list.add(num);
					}
				}
			}
		}
		
		num = Long.valueOf(str);
		if(!isIncludeSelf){
			list.remove(num);
		}
		return list;
	}
	
	/**
	 * 根据级别获得对应级别的编号
	 * @param i
	 * @param level
	 * @return
	 */
	public static long getByLevel(long i, int level){
		String str = String.valueOf(i);
		if(str.length() != LEVEL_BIT * SYSTEM_NEED_LEVEL){
			return 0L;
		}
		String[] array = new String[5];
		int no = 0;
		for(int j=0; j < str.length(); j=j+3){
			String s = str.substring(j, j+3);
			array[no] = s;
			no ++ ;
		}
		switch (level) {
			case 1:
				return Long.valueOf(array[0] + "000000000000");
			case 2:
				return Long.valueOf(array[0] + array[1] + "000000000");
			case 3:
				return Long.valueOf(array[0] + array[1] + array[2] + "000000");
			case 4:
				return Long.valueOf(array[0] + array[1] + array[2] + array[3] + "000");
			default:
				return i;
		}
	}
	
	/**
	 * 根据地区标识获得地区级别
	 * @param i
	 * @return
	 */
	public static int getLevel(long i){
		String str = String.valueOf(i);
		if(str.length() != LEVEL_BIT * SYSTEM_NEED_LEVEL){
			return 0;
		}
		String[] array = new String[5];
		int no = 0;
		for(int j=0; j < str.length(); j=j+3){
			String s = str.substring(j, j+3);
			array[no] = s;
			no ++ ;
		}
		str = "000";
		if(str.equals(array[3])){
			if(str.equals(array[2])){
				if(str.equals(array[1])){
					return 1;
				}else{
					return 2;
				}
			}else{
				return 3;
			}
		}else{
			return 4;
		}
	}
	
	/**
	 * 根据标识集合、层级获得
	 * @param schoolPlatMarkSet
	 * @param level
	 * @return
	 */
	public static List<Long> getBySet(Set<Long> schoolPlatMarkSet, int level){
		List<Long> list = new ArrayList<Long>();
		if(schoolPlatMarkSet == null || schoolPlatMarkSet.isEmpty()){
			return list;
		}
		Set<Long> set = new HashSet<Long>();
		for(Long i : schoolPlatMarkSet){
			set.add(getByLevel(i, level));
		}
		list.addAll(set);
		return list;
	}
	
	/**
	 * 根据标识集合、层级获得
	 * @param schoolPlatMarkSet
	 * @param level
	 * @return
	 */
	public static List<Long> getByList(List<Long> schoolPlatMarkList, int level){
		List<Long> list = new ArrayList<Long>();
		if(schoolPlatMarkList == null || schoolPlatMarkList.isEmpty()){
			return list;
		}
		Set<Long> set = new HashSet<Long>();
		for(Long i : schoolPlatMarkList){
			set.add(getByLevel(i, level));
		}
		list.addAll(set);
		return list;
	}
	
	/**
	 * 判断平台标识是否相等
	 * @param platMark1
	 * @param platMark2
	 * @return
	 */
	public static boolean compare(Long platMark1, Long platMark2){
		if(platMark1 == null || platMark2 == null){
			return false;
		}
		int platformLevel = getLevel(platMark1);
		int selfLevel = getLevel(platMark2);
		return platformLevel == selfLevel;
	}
	
	public static void main(String... strings) {
		long i=100000000000000L;
		int level=2;
		i = DigitHelper.getNextLongValue(i, level);
        
		System.out.println(i);

	}

}
