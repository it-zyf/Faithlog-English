package com.umi.ga.entitys;

import java.io.Serializable;

public class tableDate implements Serializable {

    public tableDate(String table, String columnTime, String column, String value) {
        this.columnTime = columnTime;
        this.column = column;
        this.table = table;
        this.value = value;
    }

    private String columnTime; // 开始时间

    private String column; // 结束时间

    private String table; // 第二个开始时间

    private String value;

    public String getColumnTime() {
        return columnTime;
    }

    public void setColumnTime(String columnTime) {
        this.columnTime = columnTime;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }


    public String getColumn() {
        return column;
    }

    public void setColumn(String column) {
        this.column = column;
    }

    public String getTable() {
        return table;
    }

    public void setTable(String table) {
        this.table = table;
    }
}
