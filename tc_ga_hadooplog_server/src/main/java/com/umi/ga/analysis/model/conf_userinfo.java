package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.util.ArrayList;
import java.util.List;

public class conf_userinfo extends BaseEntity {
    private Integer userid;

    private String username;

    private String password;

    private String usercode;

    private String moduleids;
    
    private String buttonids;
    
    private List<Menu> menus;
    
    
    
    
    
    public List<Menu> getMenus() {
		return menus;
	}

	public void setMenus(List<Menu> menus) {
		this.menus = menus;
	}

	public List<conf_module> cm = new ArrayList<conf_module>();
    
    private byte[] byteUserName;
 
    
    public byte[] getByteUserName() {
		return byteUserName;
	}

	public void setByteUserName(byte[] byteUserName) {
		this.byteUserName = byteUserName;
	}

	
	
	public List<conf_module> getCm() {
		return cm;
	}

	public void setCm(List<conf_module> cm) {
		this.cm = cm;
	}

	public String getButtonids() {
		return buttonids;
	}

	public void setButtonids(String buttonids) {
		this.buttonids = buttonids;
	}

	public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username)  {   	 
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getUsercode() {
        return usercode;
    }

    public void setUsercode(String usercode) {
        this.usercode = usercode == null ? null : usercode.trim();
    }

    public String getModuleids() {
        return moduleids;
    }

    public void setModuleids(String moduleids) {
        this.moduleids = moduleids == null ? null : moduleids.trim();
    }
}