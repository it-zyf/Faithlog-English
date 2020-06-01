package com.comb.framework.frame.util;

import java.math.BigDecimal;
import java.text.DecimalFormat;

/**
 * 小数位数转换
 * @author fwb
 *
 */
public class DecimalUtils {

	public static BigDecimal convert0(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0");
		BigDecimal b = new BigDecimal(value);
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr0(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0");
		BigDecimal b = new BigDecimal(value);
		return df.format(b);
	}
	
	public static BigDecimal convert1(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.0");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(10));
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr1(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.0");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(10));
		return df.format(b);
	}
	
	public static BigDecimal convert2(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.00");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(100));
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr2(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.00");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(100));
		return df.format(b);
	}
	
	public static BigDecimal convert3(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(1000));
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr3(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(1000));
		return df.format(b);
	}
	
	public static BigDecimal convert4(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.0000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(10000));
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr4(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.0000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(10000));
		return df.format(b);
	}
	
	public static BigDecimal convert5(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.00000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(100000));
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr5(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.00000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(100000));
		return df.format(b);
	}
	
	public static BigDecimal convert6(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.000000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(1000000));
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr6(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.000000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(1000000));
		return df.format(b);
	}
	
	public static BigDecimal convert7(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.0000000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(10000000));
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr7(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.0000000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(10000000));
		return df.format(b);
	}
	
	public static BigDecimal convert8(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.00000000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(100000000));
		return new BigDecimal(df.format(b));
	}
	
	public static String convertStr8(Long value) {
		if (value == null) {
			value = 0L;
		}
		DecimalFormat df = new DecimalFormat("#0.00000000");
		BigDecimal b = new BigDecimal(value);
		b = b.divide(new BigDecimal(100000000));
		return df.format(b);
	}
	
	public static String format0(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(0,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0");
		return df.format(value);
	}
	
	public static String format1(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(1,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0.0");
		return df.format(value);
	}
	
	public static String format2(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(2,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0.00");
		return df.format(value);
	}
	
	public static String format3(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(3,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0.000");
		return df.format(value);
	}
	
	public static String format4(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(4,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0.0000");
		return df.format(value);
	}
	
	public static String format5(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(5,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0.00000");
		return df.format(value);
	}
	
	public static String format6(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(6,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0.000000");
		return df.format(value);
	}
	
	public static String format7(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(7,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0.0000000");
		return df.format(value);
	}
	
	public static String format8(BigDecimal value){
		if (value == null) {
			value = new BigDecimal(0);
		}
		value = value.setScale(8,  BigDecimal.ROUND_DOWN);
		DecimalFormat df = new DecimalFormat("#0.00000000");
		return df.format(value);
	}
}
