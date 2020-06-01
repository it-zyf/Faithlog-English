package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class ConfigDistribution extends BaseEntity {

    private static final long serialVersionUID = -2056509856689303541L;
    //
    private Long id;
    //
    private String count;
    //
    private String property;
    //
    private String flag;
    //
    private String timedate;

    @Override
    public Long getId() {
        return this.id;
    }

    public void setId(Long value) {
        this.id = value;
    }

    public String getCount() {
        return this.count;
    }

    public void setCount(String value) {
        this.count = value;
    }

    public String getProperty() {
        return this.property;
    }

    public void setProperty(String value) {
        this.property = value;
    }

    public String getFlag() {
        return this.flag;
    }

    public void setFlag(String value) {
        this.flag = value;
    }

    public String getTimedate() {
        return this.timedate;
    }

    public void setTimedate(String value) {
        this.timedate = value;
    }

    @Override
    public String toString() {
        return "ConfigDistribution{" +
                "id=" + id +
                ", count='" + count + '\'' +
                ", property='" + property + '\'' +
                ", flag='" + flag + '\'' +
                ", timedate='" + timedate + '\'' +
                '}';
    }
}
