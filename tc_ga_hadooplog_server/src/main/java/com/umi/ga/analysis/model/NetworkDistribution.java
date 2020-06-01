package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;


public class NetworkDistribution extends BaseEntity {

    private static final long serialVersionUID = 1211877743446605066L;
    //
    private Long id;
    //
    private String networktype;
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

    public String getNetworktype() {
        return this.networktype;
    }

    public void setNetworktype(String value) {
        this.networktype = value;
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
        return "NetworkDistribution{" +
                "id=" + id +
                ", networktype='" + networktype + '\'' +
                ", count='" + count + '\'' +
                ", timedate='" + timedate + '\'' +
                '}';
    }
}
