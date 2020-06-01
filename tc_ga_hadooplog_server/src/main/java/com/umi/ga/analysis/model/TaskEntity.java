package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

public class TaskEntity extends BaseEntity {

    private Integer num;

    private String taskId;

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }
}
