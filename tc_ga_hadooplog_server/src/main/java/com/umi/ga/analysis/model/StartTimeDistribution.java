package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class StartTimeDistribution extends BaseEntity {

    private static final long serialVersionUID = -7221490774952166557L;
    //
    private Long id;
    //
    private String timepoint;
    //
    private String count;
    //
    private String timedate;

    public Long getId() {
        return this.id;
    }

    public void setId(Long value) {
        this.id = value;
    }

    public String getTimepoint() {
        return this.timepoint;
    }

    public void setTimepoint(String value) {
        this.timepoint = value;
    }

    public String getCount() {
        return this.count;
    }

    public void setCount(String value) {
        this.count = value;
    }

    public String getTimedate() {
        return this.timedate;
    }

    public void setTimedate(String value) {
        this.timedate = value;
    }

    @Override
    public String toString() {
        return "StartTimeDistribution{" +
                "id=" + id +
                ", timepoint='" + timepoint + '\'' +
                ", count='" + count + '\'' +
                ", timedate='" + timedate + '\'' +
                '}';
    }
}
