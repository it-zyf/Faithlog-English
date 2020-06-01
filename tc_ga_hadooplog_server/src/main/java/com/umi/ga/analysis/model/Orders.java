package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.math.BigDecimal;
import java.util.Calendar;

public class Orders extends BaseEntity{

	private static final long serialVersionUID = 7664556245284522799L;
	//
	private Long id;
	//订单号
	private String orderNum;
	//订单状态 0 待付款 1 关闭或支付完成后全额退款 2 交易支付成功 3 交易结束并不可退款，4.付款成功未发货5.订单超时未支付
	private Integer orderStatus;
	//订单金额
	private BigDecimal orderAmount;
	//实际支付金额
	private BigDecimal paidAmount;
	//商品号
	private String productNum;
	//商品购买的个数
	private Integer buyCounts;
	//描述
	private String orderDescribe;
	//用户id
	private String userId;
	//通知时间
	private Calendar notifyTime;
	//订单创建时间
	private Calendar createTime;
	//支付时间
	private Calendar paidTime;
	//交易退款时间
	private Calendar gmtRefund;
	//交易结束时间
	private Calendar gmtClose;
	//支付宝的交易号
	private String tradeNo;
	//商户业务号(商户业务ID，主要是退款通知中返回退款申请的流水号)
	private String outBizNo;
	//买家支付宝账号
	private String buyerLogonId;
	//卖家支付宝用户号
	private String sellerId;
	//卖家支付宝账号
	private String sellerEmail;
	//开票金额:用户在交易中支付的可开发票的金额
	private BigDecimal invoiceAmount;
	//付款金额
	private BigDecimal buyerPayAmount;
	//商品名称
	private String goodsName;
	//商品详情
	private String goodsDetails;
	//支付渠道：1.微信，2.支付包，3.Google，4.ios
	private Integer payType;
	//货币单位:0元，1美元，2韩元，3分，4没分，..
	private String moneyUnit;
	//
	private String roleId;
	//
	private Integer appId;

	public Long getId() {
		return this.id;
	}
	
	public void setId(Long value) {
		this.id = value;
	}
	public String getOrderNum() {
		return this.orderNum;
	}
	
	public void setOrderNum(String value) {
		this.orderNum = value;
	}
	public Integer getOrderStatus() {
		return this.orderStatus;
	}
	
	public void setOrderStatus(Integer value) {
		this.orderStatus = value;
	}
	public BigDecimal getOrderAmount() {
		return this.orderAmount;
	}
	
	public void setOrderAmount(BigDecimal value) {
		this.orderAmount = value;
	}
	public BigDecimal getPaidAmount() {
		return this.paidAmount;
	}
	
	public void setPaidAmount(BigDecimal value) {
		this.paidAmount = value;
	}
	public String getProductNum() {
		return this.productNum;
	}
	
	public void setProductNum(String value) {
		this.productNum = value;
	}
	public Integer getBuyCounts() {
		return this.buyCounts;
	}
	
	public void setBuyCounts(Integer value) {
		this.buyCounts = value;
	}
	public String getOrderDescribe() {
		return this.orderDescribe;
	}
	
	public void setOrderDescribe(String value) {
		this.orderDescribe = value;
	}
	public String getUserId() {
		return this.userId;
	}
	
	public void setUserId(String value) {
		this.userId = value;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public Calendar getNotifyTime() {
		return this.notifyTime;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public void setNotifyTime(Calendar value) {
		this.notifyTime = value;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public Calendar getCreateTime() {
		return this.createTime;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public void setCreateTime(Calendar value) {
		this.createTime = value;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public Calendar getPaidTime() {
		return this.paidTime;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public void setPaidTime(Calendar value) {
		this.paidTime = value;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public Calendar getGmtRefund() {
		return this.gmtRefund;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public void setGmtRefund(Calendar value) {
		this.gmtRefund = value;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public Calendar getGmtClose() {
		return this.gmtClose;
	}
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	public void setGmtClose(Calendar value) {
		this.gmtClose = value;
	}
	public String getTradeNo() {
		return this.tradeNo;
	}
	
	public void setTradeNo(String value) {
		this.tradeNo = value;
	}
	public String getOutBizNo() {
		return this.outBizNo;
	}
	
	public void setOutBizNo(String value) {
		this.outBizNo = value;
	}
	public String getBuyerLogonId() {
		return this.buyerLogonId;
	}
	
	public void setBuyerLogonId(String value) {
		this.buyerLogonId = value;
	}
	public String getSellerId() {
		return this.sellerId;
	}
	
	public void setSellerId(String value) {
		this.sellerId = value;
	}
	public String getSellerEmail() {
		return this.sellerEmail;
	}
	
	public void setSellerEmail(String value) {
		this.sellerEmail = value;
	}
	public BigDecimal getInvoiceAmount() {
		return this.invoiceAmount;
	}
	
	public void setInvoiceAmount(BigDecimal value) {
		this.invoiceAmount = value;
	}
	public BigDecimal getBuyerPayAmount() {
		return this.buyerPayAmount;
	}
	
	public void setBuyerPayAmount(BigDecimal value) {
		this.buyerPayAmount = value;
	}
	public String getGoodsName() {
		return this.goodsName;
	}
	
	public void setGoodsName(String value) {
		this.goodsName = value;
	}
	public String getGoodsDetails() {
		return this.goodsDetails;
	}
	
	public void setGoodsDetails(String value) {
		this.goodsDetails = value;
	}
	public Integer getPayType() {
		return this.payType;
	}
	
	public void setPayType(Integer value) {
		this.payType = value;
	}
	public String getMoneyUnit() {
		return this.moneyUnit;
	}
	
	public void setMoneyUnit(String value) {
		this.moneyUnit = value;
	}
	public String getRoleId() {
		return this.roleId;
	}
	
	public void setRoleId(String value) {
		this.roleId = value;
	}
	public Integer getAppId() {
		return this.appId;
	}
	
	public void setAppId(Integer value) {
		this.appId = value;
	}




	private int pageSize;

	private int pageIndex;

	private String startTime;

	private String endTime;

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}
}
