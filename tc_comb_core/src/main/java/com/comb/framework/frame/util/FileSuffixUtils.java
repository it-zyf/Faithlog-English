package com.comb.framework.frame.util;

/**
 * 根据文件后缀名判断文件格式工具类.
 * 风险：伪装的文件无法判断
 * @author xuqiao
 *
 */
public class FileSuffixUtils {
	/**
	 * 判断文件名是否是Excel文件.
	 * @param fileName
	 * @return
	 */
	public static boolean isExcel(String fileName) {
		if (fileName.toLowerCase().endsWith(".xls")
				|| fileName.toLowerCase().endsWith(".xlsx")) {
			return true;
		}

		return false;
	}

	/**
	 * 判断文件名是否是压缩文件
	 * @author jaun
	 * @param fileName
	 * @return
	 */
	public static boolean isCompress(String fileName) {
		if (fileName.toLowerCase().endsWith(".rar")
				|| fileName.toLowerCase().endsWith(".zip")) {
			return true;
		}
		return false;
	}

	/**
	 * 判断文件名是否为flash文件
	 * @author jaun
	 * @param fileName
	 * @return
	 */
	public static boolean isFlash(String fileName) {
		if (fileName.toLowerCase().endsWith(".swf")) {
			return true;
		}
		return false;
	}

	/**
	 * 判定是否是视频文件
	 * @author jaun
	 * @param fileName
	 * @return
	 */
	public static boolean isVideo(String fileName) {
		if (fileName.toLowerCase().endsWith(".mpg")
				|| fileName.toLowerCase().endsWith(".flv")
				|| fileName.toLowerCase().endsWith(".swf")
				|| fileName.toLowerCase().endsWith(".wmv")
				|| fileName.toLowerCase().endsWith(".mp4")) {
			return true;
		}
		return false;
	}

	/**
	 * 判定是否是音频文件
	 * @author jaun
	 * @param fileName
	 * @return
	 */
	public static boolean isAudio(String fileName) {
		if (fileName.toLowerCase().endsWith(".wma")
				|| fileName.toLowerCase().endsWith(".mp3")
				|| fileName.toLowerCase().endsWith(".wav")) {
			return true;
		}
		return false;
	}
	
	/**
	 * 判断文件名是否是Word文件.
	 * @param fileName
	 * @return
	 */
	public static boolean isWord(String fileName) {
		if (fileName.toLowerCase().endsWith(".doc")
				|| fileName.toLowerCase().endsWith(".docx")) {
			return true;
		}
		return false;
	}
	
	/**
	 * 判断文件名是否是PowerPoint文件.
	 * @param fileName
	 * @return
	 */
	public static boolean isPowerPoint(String fileName) {
		if (fileName.toLowerCase().endsWith(".ppt")
				|| fileName.toLowerCase().endsWith("pptx")) {
			return true;
		}
		return false;
	}
	
	/**
	 * 判断文件名是否是pdf文件.
	 * @param fileName
	 * @return
	 */
	public static boolean isPDF(String fileName) {
		if (fileName.toLowerCase().endsWith(".pdf")) {
			return true;
		}
		return false;
	}

	/**
	 * 根据文件名判断是否图片文件
	 * @author jaun
	 * @param fileName
	 * @return
	 */
	public static boolean isImage(String fileName) {
		if (fileName.toLowerCase().endsWith(".jpg")
				|| fileName.toLowerCase().endsWith(".jpeg")
				|| fileName.toLowerCase().endsWith(".gif")
				|| fileName.toLowerCase().endsWith(".png")
				|| fileName.toLowerCase().endsWith(".bmp")) {
			return true;
		}
		return false;
	}
	/**
	 * 根据文件名判断是否txt文件
	 * @author jaun
	 * @param fileName
	 * @return
	 */
	public static boolean isTxt(String fileName) {
		if (fileName.toLowerCase().endsWith(".txt")) {
			return true;
		}
		return false;
	}
}
