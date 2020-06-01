/**
 * 
 */
package com.comb.framework.frame.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

/**
 * @author jelee
 * 
 */
public class CmdUtils {
	static protected Logger log = LoggerFactory.getLogger(CmdUtils.class);

	/**
	 * 运行命令字符串
	 * 
	 * @param sCmd
	 * @return
	 * @throws Exception
	 */
	static public int runCommand(String exePath, String cmdLine, PrintWriter out) throws Exception {
		// sCmd = "cmd /c " + sCmd;
		String sCmd = "\""+exePath + "\"" + " " + cmdLine;
		
		String[] aCmds = sCmd.split(" ");

		List<String> command = new ArrayList<String>();
		for (String item : aCmds) {
			command.add(item);
		}

		ProcessBuilder builder = new ProcessBuilder();
		builder.command(command);
		builder.redirectErrorStream(true);

		Process p = null;
		try {
			log.debug("running " + sCmd + " ... ");
			if (out != null)
				out.println(sCmd);
			p = builder.start();
			BufferedReader buf = null;
			String line = null;
			
			//for test debug
			//OutputStreamWriter osw = new OutputStreamWriter(p.getOutputStream());  
			//osw.write("y");
			
			// read the standard output
			buf = new BufferedReader(new InputStreamReader(p.getInputStream(), "gbk"));
			
			if (out != null)
				while ((line = buf.readLine()) != null) {
					out.println(line);
					out.flush();
				}
			p.waitFor();
			int exitValue = p.exitValue();
			if (out != null)
				out.println("return = " + exitValue);
			return exitValue;
		} catch (Exception e) {
			log.error(sCmd + " 失败：", e);
			throw e;
		}
	}

	/**
	 * 获得exe文件的完整路径以便运行，当前，此文件放在此程序的工作目录下即可
	 */
	public static String getExeFilePath(String exeName) {
		return System.getProperty("user.dir") + File.separator + exeName;
	}


}
