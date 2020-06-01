package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class conf_module extends BaseEntity {
    private Integer confid;

    private String moduleid;

    private String modulename;

    private Integer type;

    public Integer getConfid() {
        return confid;
    }

    public void setConfid(Integer confid) {
        this.confid = confid;
    }

    public String getModuleid() {
        return moduleid;
    }

    public void setModuleid(String moduleid) {
        this.moduleid = moduleid == null ? null : moduleid.trim();
    }

    public String getModulename() {
        return modulename;
    }

    public void setModulename(String modulename) {
        this.modulename = modulename == null ? null : modulename.trim();
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}