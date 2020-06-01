package com.umi.ga.common;

/**
 * @title HTTP请求回调
 */

public class HttpResult {
    private boolean state;// 返回结果:True。成功,False.失败
    private String message;// 失败原因
    private Object data;// 对象
    private Object rows; // 对象
    private Object row1; // 对象
    private Object row2; // 对象
    private String result; // 状态：true or false
    private int count;

    public HttpResult() {
    }

    public HttpResult(boolean state, String message, Object data) {
        this.state = state;
        this.message = message;
        this.data = data;
    }

    public HttpResult(boolean state, String message, Object data, Object rows) {
        this.state = state;
        this.message = message;
        this.data = data;
        this.rows = rows;
    }

    public HttpResult(boolean state, String message, Object data, Object rows, Object row1) {
        this.state = state;
        this.message = message;
        this.data = data;
        this.rows = rows;
        this.row1 = row1;
    }

    public boolean isState() {
        return state;
    }

    public HttpResult setState(boolean state) {
        this.state = state;
        return this;
    }

    public String getMessage() {
        return message;
    }

    public HttpResult setMessage(String message) {
        this.message = message;
        return this;
    }

    public Object getData() {
        return data;
    }

    public HttpResult setData(Object data) {
        this.data = data;
        return this;
    }

    public Object getRows() {
        return rows;
    }

    public HttpResult setRows(Object rows) {
        this.rows = rows;
        return this;
    }

    public Object getRow1() {
        return row1;
    }

    public HttpResult setRow1(Object row1) {
        this.row1 = row1;
        return this;
    }

    public Object getRow2() {
        return row2;
    }

    public HttpResult setRow2(Object row2) {
        this.row2 = row2;
        return this;
    }

    public String getResult() {
        return result;
    }

    public HttpResult setResult(String result) {
        this.result = result;
        return this;
    }

    public int getCount() {
        return count;
    }

    public HttpResult setCount(int count) {
        this.count = count;
        return this;
    }

    @Override
    public String toString() {
        return "HttpResult{" +
                "state=" + state +
                ", message='" + message + '\'' +
                ", data=" + data +
                ", rows=" + rows +
                ", row1=" + row1 +
                ", row2=" + row2 +
                ", result='" + result + '\'' +
                ", count=" + count +
                '}';
    }
}
