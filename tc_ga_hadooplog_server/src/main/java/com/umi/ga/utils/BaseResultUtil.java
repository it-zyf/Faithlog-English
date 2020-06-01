package com.umi.ga.utils;

import com.umi.ga.common.HttpResult;
import com.umi.ga.common.PagingResult;
import org.apache.commons.lang3.StringUtils;

/**
 * 封装请求回调
 *
 * @author Administrator
 */
public class BaseResultUtil {

    /**
     * 请求回调
     *
     * @param state   请求状态 true为成功，false失败
     * @param message 回调信息
     * @param data    回调数据
     * @return
     */
    public static HttpResult baseResult(boolean state, String message, Object data) {
        HttpResult result = new HttpResult();
        result.setState(state);
        if (message != null) {
            result.setMessage(message);
        }
        if (data != null) {
            result.setData(data);
        }
        return result;
    }

    public static HttpResult baseResult(boolean state, String message, Object data, Object rows) {
        HttpResult result = new HttpResult();
        result.setState(state);
        if (message != null) {
            result.setMessage(message);
        }
        if (data != null) {
            result.setData(data);
        }
        if (rows != null) {
            result.setRows(rows);
        }
        return result;
    }

    public static HttpResult baseResult2(boolean state, String message, Object data, String rst) {
        HttpResult result = new HttpResult();
        result.setState(state);
        result.setResult(rst);
        if (message != null) {
            result.setMessage(message);
        }
        if (data != null) {
            result.setData(data);
        }

        return result;
    }

    /**
     * 请求回调  -- 两种不同类型的参数
     *
     * @param state   请求状态 true为成功，false失败
     * @param message 回调信息
     * @param data    回调数据
     * @return
     */
    public static HttpResult baseResult(boolean state, String message, Object data, Object rows, int count) {
        HttpResult result = new HttpResult();
        result.setState(state);
        if (message != null) {
            result.setMessage(message);
        }
        if (data != null) {
            result.setData(data);
        }
        if (rows != null) {
            result.setRows(rows);
        }
        if (count >= 0) {
            result.setCount(count);
        }
        return result;
    }

    public static HttpResult baseResult(boolean state, String message, Object data, Object rows, Object row1) {
        HttpResult result = new HttpResult();
        result.setState(state);
        if (message != null) {
            result.setMessage(message);
        }
        if (data != null) {
            result.setData(data);
        }
        if (rows != null) {
            result.setRows(rows);
        }
        if (row1 != null) {
            result.setRow1(row1);
        }
        return result;
    }

    /**
     * 响应成功的回调 -- 两种不同类型的参数
     *
     * @param message 回调信息
     * @param data    回调数据
     * @return
     */
    public static HttpResult resultSuccess(String message, Object data, Object rows, int count) {
        HttpResult result = baseResult(true, message, data, rows, count);
        return result;
    }

    /**
     * 响应成功的回调
     *
     * @param message 回调信息
     * @param data    回调数据
     * @return
     */
    public static HttpResult resultSuccess(String message, Object data) {
        HttpResult result = baseResult(true, message, data);
        return result;
    }

    public static HttpResult resultSuccess(String message, Object data, Object rows) {
        HttpResult result = baseResult(true, message, data, rows);
        return result;
    }

    public static HttpResult resultSuccess(String message, Object data, Object rows, Object row1) {
        HttpResult result = baseResult(true, message, data, rows, row1);
        return result;
    }

    public static HttpResult resultSuccess2(String message, Object data, String rst) {
        HttpResult result = baseResult2(true, message, data, rst);
        return result;
    }

    /**
     * 响应成功的回调
     *
     * @param message 回调信息
     * @return
     */
    public static HttpResult resultSuccess(String message) {
        HttpResult result = baseResult(true, message, null);
        return result;
    }

    /**
     * 响应失败的回调
     *
     * @param message 回调信息
     * @param data    回调数据
     * @return
     */
    public static HttpResult resultFail(String message, Object data) {
        HttpResult result = baseResult(false, message, data);
        return result;
    }

    public static HttpResult resultFail(String message, Object data, Object rows) {
        HttpResult result = baseResult(false, message, data, rows);
        return result;
    }

    public static HttpResult resultFail(String message, Object data, Object rows, Object row1) {
        HttpResult result = baseResult(false, message, data, rows, row1);
        return result;
    }

    public static HttpResult resultFail2(String message, Object data, String rst) {
        HttpResult result = baseResult2(false, message, data, rst);
        return result;
    }

    /**
     * 响应失败的回调
     *
     * @param message 回调信息
     * @return
     */
    public static HttpResult resultFail(String message) {
        HttpResult result = baseResult(false, message, null);
        return result;
    }

    /**
     * 分页返回结果BASE
     *
     * @param page     页码
     * @param setCount 总条数
     * @param rows     分类数据
     * @param message  信息
     * @return
     */
    public static PagingResult basePageResultSuccess(Long page, Integer setCount, Object rows, String message) {
        PagingResult pageResult = new PagingResult();

        pageResult.setState(true);

        if (rows != null) {
            pageResult.setRows(rows);
        }
        if (StringUtils.isNotBlank(message)) {
            pageResult.setMessage(message);
        }

        if (page != null) {
            pageResult.setPage(page);
        }
        if (setCount != null) {
            pageResult.setTotal(setCount);
        }
        return pageResult;
    }

    /**
     * @param page  页码
     * @param total 总条数
     * @param rows  数据
     * @return
     */
    public static PagingResult basePageResultSuccess(Long page, Long total, Object rows) {
        PagingResult pageResult = new PagingResult();

        pageResult.setState(true);

        if (rows != null) {
            pageResult.setRows(rows);
        }
        if (page != null) {
            pageResult.setPage(page);
        }
        if (total != null) {
            pageResult.setTotal(total);
        }
        return pageResult;

    }

    /**
     * @param page 页码
     * @param rows 数据
     * @return
     */
    public static PagingResult basePageResultSuccess(Long page, Object rows) {
        PagingResult pageResult = new PagingResult();

        pageResult.setState(true);

        if (rows != null) {
            pageResult.setRows(rows);
        }
        if (page != null) {
            pageResult.setPage(page);
        }
        return pageResult;
    }

    /**
     * @param rows 数据
     * @return
     */
    public static PagingResult basePageResultSuccess(Object rows) {
        PagingResult pageResult = new PagingResult();
        pageResult.setState(true);
        if (rows != null) {
            pageResult.setRows(rows);
        }
        return pageResult;
    }

    /**
     * 只返回成功状态不返回数据
     *
     * @return
     */
    public static PagingResult basePageResultSuccess() {
        PagingResult pageResult = new PagingResult();
        pageResult.setState(true);
        return pageResult;
    }

    /**
     * 失败
     *
     * @return
     */
    public static PagingResult basePageResultFail() {
        PagingResult pageResult = new PagingResult();
        pageResult.setState(false);
        return pageResult;
    }

    /**
     * 响应失败
     *
     * @param message 错误信息
     * @return
     */
    public static PagingResult basePageResultFail(String message) {
        PagingResult pageResult = new PagingResult();
        pageResult.setState(false);
        if (StringUtils.isNotBlank(message)) {
            pageResult.setMessage(message);
        }
        return pageResult;
    }
}
