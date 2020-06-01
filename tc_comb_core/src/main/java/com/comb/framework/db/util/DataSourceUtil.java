package com.comb.framework.db.util;

/**
 * 
 * 手工分配db source的工具类<br/>
 * 
 * 数据库分为master(writeable)和slave/sphinx(readonly)三种，通过本工具类指定使用哪一种
 * 
 * 增加service层的数据源配置支持 本类新增ThreadLocal 存储action原来的数据源类型 当service使用完配置的数据源后使用contextHolderAction进行还原
 * 
 * @author fwb
 *
 */
public final class DataSourceUtil {
	private DataSourceUtil() {}
	
	private static final ThreadLocal<String> contextHolder =  new ThreadLocal<String>();
	private static final ThreadLocal<String> contextHolderAction =  new ThreadLocal<String>();//web层所使用的数据源	
	
	public static final String MASTER = "master";
	public static final String SLAVE =  "slave";
	public static final String SPHINX = "sphinx";
	public static final String SLOW = "slow";
	public static final String LAWSPHINX = "lawsphinx";
	public static final String LOGMASTER = "logMaster"; // 日志主库
	public static final String LOGSLAVE = "logSlave"; // 日志从库
	public static final String LOGSHIVE = "hivemaster"; // hive日志
	
	private static void setDataSourceType(final String type) {
		contextHolder.set(type);    
	}	
	
	private static void clearDataSourceType() { 
		contextHolder.remove();
	}
	
	public static void setActionDataSourceType(){
		contextHolderAction.set(getDataSourceType());
	}
	public static void backToActionSourceType(){
		setDataSourceType(contextHolderAction.get()); 
	}
	
	/**
	 * 
	 * @return 当前的数据库类别
	 */
	public static String getDataSourceType() {   
		return (String) contextHolder.get();
	}

	/**
	 * 强制使用master数据库
	 */
	public static void useMaster() {
		setDataSourceType(MASTER);
	}
	
	/**
	 * 强制使用slave数据库
	 */
	public static void useSlave() {
		setDataSourceType(SLAVE);    
	}
	
	/**
	 * 强制使用slow数据库
	 */
	public static void useSlow() {
		setDataSourceType(SLOW);
	}
	
	/**
	 * 强制使用Sphinx全文检索引擎
	 */
	public static void useSphinx() {
		setDataSourceType(SPHINX);    
	}
	
	/**
	 * 强制使用法规库的Sphinx全文检索引擎
	 */
	public static void useLawSphinx() {
		setDataSourceType(LAWSPHINX);    
	}
	
	/**
	 * 使用日志主库
	 */
	public static void useLogMaster() {
		setDataSourceType(LOGMASTER);
	}
	
	/**
	 * 使用日志从库
	 */
	public static void useLogSlave() {
		setDataSourceType(LOGSLAVE);
	}
	/**
	 * 使用hadoop从库
	 */
	public static void useLogHive() {
		setDataSourceType(LOGSHIVE);
	}
	/**
	 * 使用默认的数据库列表，目前默认的是master
	 */
	public static void useDefault() {
		clearDataSourceType();
	}
}
