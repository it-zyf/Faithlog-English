package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.io.UnsupportedEncodingException;

public class conf_area extends BaseEntity {
    private Integer confid;

    private String areaid;

    private String areaname;
    
    private String starttime;
    
    //新增插入操作时间
    private String optime;
    
  
	private byte[] byteAreaName;
 
    
    private int pageSize;
    
    private int pageIndex;
    
    
    
    
    public String getOptime() {
 		return optime;
 	}
 	public void setOptime(String optime) {
 		this.optime = optime;
 	}

    
 
	public String getStarttime() {
		return starttime;
	}
	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}


    public byte[] getByteAreaName() {
		return byteAreaName;
	}

	public void setByteAreaName(byte[] byteAreaName) {
		this.byteAreaName = byteAreaName;
	}

	public Integer getConfid() {
        return confid;
    }

    public void setConfid(Integer confid) {
        this.confid = confid;
    }

    public String getAreaid() {
        return areaid;
    }

    public void setAreaid(String areaid) {
        this.areaid = areaid == null ? null : areaid.trim();
    }

    public String getAreaname() throws UnsupportedEncodingException {
         return areaname;
    }

    public void setAreaname(String areaname) {
    	 
        this.areaname = areaname == null ? null : areaname.trim();
    }
}