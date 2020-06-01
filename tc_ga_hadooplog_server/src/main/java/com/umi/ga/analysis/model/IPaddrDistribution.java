package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;


public class IPaddrDistribution extends BaseEntity {

    private static final long serialVersionUID = -4602336309798752844L;
    //
    private Long id;
    //
    private String ipaddr;
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

    public String getIpaddr() {
        return this.ipaddr;
    }

    public void setIpaddr(String value) {
        this.ipaddr = value;
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
        return "IPaddrDistribution{" +
                "id=" + id +
                ", ipaddr='" + ipaddr + '\'' +
                ", count='" + count + '\'' +
                ", timedate='" + timedate + '\'' +
                '}';
    }
}
