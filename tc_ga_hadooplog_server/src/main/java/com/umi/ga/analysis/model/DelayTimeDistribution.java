package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;


public class DelayTimeDistribution extends BaseEntity {

    private static final long serialVersionUID = 8635312610925755922L;
    //
    private Long id;
    //
    private String timequantum;
    //
    private String count;
    //
    private String timedate;

    @Override
    public Long getId() {
        return this.id;
    }

    public void setId(Long value) {
        this.id = value;
    }

    public String getTimequantum() {
        return this.timequantum;
    }

    public void setTimequantum(String value) {
        this.timequantum = value;
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
        return "DelayTimeDistribution{" +
                "id=" + id +
                ", timequantum='" + timequantum + '\'' +
                ", count='" + count + '\'' +
                ", timedate='" + timedate + '\'' +
                '}';
    }
}
