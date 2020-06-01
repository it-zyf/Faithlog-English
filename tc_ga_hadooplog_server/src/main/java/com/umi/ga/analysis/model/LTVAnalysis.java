package com.umi.ga.analysis.model;

import com.comb.framework.frame.base.BaseEntity;

import java.math.BigDecimal;

public class LTVAnalysis extends BaseEntity {

    private static final long serialVersionUID = -7997282590633182686L;
    //
    private Long id;
    //
    private String timedate;
    //
    private String serverid;
    //
    private String channelid;
    //
    private Integer registerNumber = 0;
    //
    private Integer firstLogin = 0;
    //
    private BigDecimal firstPayAmount = BigDecimal.ZERO;
    //
    private BigDecimal payAmount = BigDecimal.ZERO;
    //首日ltv
    private BigDecimal oneLtv = BigDecimal.ZERO;
    //
    private BigDecimal twoLtv = BigDecimal.ZERO;
    //
    private BigDecimal threeLtv = BigDecimal.ZERO;
    //
    private BigDecimal fourLtv = BigDecimal.ZERO;
    //
    private BigDecimal fiveLtv = BigDecimal.ZERO;
    //
    private BigDecimal sixLtv = BigDecimal.ZERO;
    //
    private BigDecimal sevenLtv = BigDecimal.ZERO;
    //
    private BigDecimal eightLtv = BigDecimal.ZERO;
    //
    private BigDecimal nineLtv = BigDecimal.ZERO;
    //
    private BigDecimal tenLtv = BigDecimal.ZERO;
    //
    private BigDecimal elevenLtv = BigDecimal.ZERO;
    //
    private BigDecimal twelveLtv = BigDecimal.ZERO;
    //
    private BigDecimal thirteenLtv = BigDecimal.ZERO;
    //
    private BigDecimal fourteenLtv = BigDecimal.ZERO;
    //
    private BigDecimal fifteenLtv = BigDecimal.ZERO;
    //
    private BigDecimal sixteenLtv = BigDecimal.ZERO;
    //
    private BigDecimal seventeenLtv = BigDecimal.ZERO;
    //
    private BigDecimal eighteenLtv = BigDecimal.ZERO;
    //
    private BigDecimal nineteenLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentyLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentyoneLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentytwoLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentythreeLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentyfourLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentyfiveLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentysixLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentysevenLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentyeightLtv = BigDecimal.ZERO;
    //
    private BigDecimal twentynineLtv = BigDecimal.ZERO;
    //
    private BigDecimal thirtyLtv = BigDecimal.ZERO;
    //
    private BigDecimal sixtyLtv = BigDecimal.ZERO;
    //
    private BigDecimal ninetyLtv = BigDecimal.ZERO;
    //
    private BigDecimal hundredtwentyLtv = BigDecimal.ZERO;
    //
    private BigDecimal hundredfiftyLtv = BigDecimal.ZERO;
    //
    private BigDecimal hundredeightyLtv = BigDecimal.ZERO;
    //
    private BigDecimal threehundredsixtyLtv = BigDecimal.ZERO;

    @Override
    public Long getId() {
        return this.id;
    }

    public void setId(Long value) {
        this.id = value;
    }

    public String getTimedate() {
        return this.timedate;
    }

    public void setTimedate(String value) {
        this.timedate = value;
    }

    public String getServerid() {
        return this.serverid;
    }

    public void setServerid(String value) {
        this.serverid = value;
    }

    public String getChannelid() {
        return this.channelid;
    }

    public void setChannelid(String value) {
        this.channelid = value;
    }

    public Integer getRegisterNumber() {
        return this.registerNumber;
    }

    public void setRegisterNumber(Integer value) {
        this.registerNumber = value;
    }

    public Integer getFirstLogin() {
        return this.firstLogin;
    }

    public void setFirstLogin(Integer value) {
        this.firstLogin = value;
    }

    public BigDecimal getFirstPayAmount() {
        return this.firstPayAmount;
    }

    public void setFirstPayAmount(BigDecimal value) {
        this.firstPayAmount = value;
    }

    public BigDecimal getPayAmount() {
        return this.payAmount;
    }

    public void setPayAmount(BigDecimal value) {
        this.payAmount = value;
    }

    public BigDecimal getOneLtv() {
        return this.oneLtv;
    }

    public void setOneLtv(BigDecimal value) {
        this.oneLtv = value;
    }

    public BigDecimal getTwoLtv() {
        return this.twoLtv;
    }

    public void setTwoLtv(BigDecimal value) {
        this.twoLtv = value;
    }

    public BigDecimal getThreeLtv() {
        return this.threeLtv;
    }

    public void setThreeLtv(BigDecimal value) {
        this.threeLtv = value;
    }

    public BigDecimal getFourLtv() {
        return this.fourLtv;
    }

    public void setFourLtv(BigDecimal value) {
        this.fourLtv = value;
    }

    public BigDecimal getFiveLtv() {
        return this.fiveLtv;
    }

    public void setFiveLtv(BigDecimal value) {
        this.fiveLtv = value;
    }

    public BigDecimal getSixLtv() {
        return this.sixLtv;
    }

    public void setSixLtv(BigDecimal value) {
        this.sixLtv = value;
    }

    public BigDecimal getSevenLtv() {
        return this.sevenLtv;
    }

    public void setSevenLtv(BigDecimal value) {
        this.sevenLtv = value;
    }

    public BigDecimal getEightLtv() {
        return this.eightLtv;
    }

    public void setEightLtv(BigDecimal value) {
        this.eightLtv = value;
    }

    public BigDecimal getNineLtv() {
        return this.nineLtv;
    }

    public void setNineLtv(BigDecimal value) {
        this.nineLtv = value;
    }

    public BigDecimal getTenLtv() {
        return this.tenLtv;
    }

    public void setTenLtv(BigDecimal value) {
        this.tenLtv = value;
    }

    public BigDecimal getElevenLtv() {
        return this.elevenLtv;
    }

    public void setElevenLtv(BigDecimal value) {
        this.elevenLtv = value;
    }

    public BigDecimal getTwelveLtv() {
        return this.twelveLtv;
    }

    public void setTwelveLtv(BigDecimal value) {
        this.twelveLtv = value;
    }

    public BigDecimal getThirteenLtv() {
        return this.thirteenLtv;
    }

    public void setThirteenLtv(BigDecimal value) {
        this.thirteenLtv = value;
    }

    public BigDecimal getFourteenLtv() {
        return this.fourteenLtv;
    }

    public void setFourteenLtv(BigDecimal value) {
        this.fourteenLtv = value;
    }

    public BigDecimal getFifteenLtv() {
        return this.fifteenLtv;
    }

    public void setFifteenLtv(BigDecimal value) {
        this.fifteenLtv = value;
    }

    public BigDecimal getSixteenLtv() {
        return this.sixteenLtv;
    }

    public void setSixteenLtv(BigDecimal value) {
        this.sixteenLtv = value;
    }

    public BigDecimal getSeventeenLtv() {
        return this.seventeenLtv;
    }

    public void setSeventeenLtv(BigDecimal value) {
        this.seventeenLtv = value;
    }

    public BigDecimal getEighteenLtv() {
        return this.eighteenLtv;
    }

    public void setEighteenLtv(BigDecimal value) {
        this.eighteenLtv = value;
    }

    public BigDecimal getNineteenLtv() {
        return this.nineteenLtv;
    }

    public void setNineteenLtv(BigDecimal value) {
        this.nineteenLtv = value;
    }

    public BigDecimal getTwentyLtv() {
        return this.twentyLtv;
    }

    public void setTwentyLtv(BigDecimal value) {
        this.twentyLtv = value;
    }

    public BigDecimal getTwentyoneLtv() {
        return this.twentyoneLtv;
    }

    public void setTwentyoneLtv(BigDecimal value) {
        this.twentyoneLtv = value;
    }

    public BigDecimal getTwentytwoLtv() {
        return this.twentytwoLtv;
    }

    public void setTwentytwoLtv(BigDecimal value) {
        this.twentytwoLtv = value;
    }

    public BigDecimal getTwentythreeLtv() {
        return this.twentythreeLtv;
    }

    public void setTwentythreeLtv(BigDecimal value) {
        this.twentythreeLtv = value;
    }

    public BigDecimal getTwentyfourLtv() {
        return this.twentyfourLtv;
    }

    public void setTwentyfourLtv(BigDecimal value) {
        this.twentyfourLtv = value;
    }

    public BigDecimal getTwentyfiveLtv() {
        return this.twentyfiveLtv;
    }

    public void setTwentyfiveLtv(BigDecimal value) {
        this.twentyfiveLtv = value;
    }

    public BigDecimal getTwentysixLtv() {
        return this.twentysixLtv;
    }

    public void setTwentysixLtv(BigDecimal value) {
        this.twentysixLtv = value;
    }

    public BigDecimal getTwentysevenLtv() {
        return this.twentysevenLtv;
    }

    public void setTwentysevenLtv(BigDecimal value) {
        this.twentysevenLtv = value;
    }

    public BigDecimal getTwentyeightLtv() {
        return this.twentyeightLtv;
    }

    public void setTwentyeightLtv(BigDecimal value) {
        this.twentyeightLtv = value;
    }

    public BigDecimal getTwentynineLtv() {
        return this.twentynineLtv;
    }

    public void setTwentynineLtv(BigDecimal value) {
        this.twentynineLtv = value;
    }

    public BigDecimal getThirtyLtv() {
        return this.thirtyLtv;
    }

    public void setThirtyLtv(BigDecimal value) {
        this.thirtyLtv = value;
    }

    public BigDecimal getSixtyLtv() {
        return sixtyLtv;
    }

    public void setSixtyLtv(BigDecimal sixtyLtv) {
        this.sixtyLtv = sixtyLtv;
    }

    public BigDecimal getNinetyLtv() {
        return this.ninetyLtv;
    }

    public void setNinetyLtv(BigDecimal value) {
        this.ninetyLtv = value;
    }

    public BigDecimal getHundredtwentyLtv() {
        return this.hundredtwentyLtv;
    }

    public void setHundredtwentyLtv(BigDecimal value) {
        this.hundredtwentyLtv = value;
    }

    public BigDecimal getHundredfiftyLtv() {
        return this.hundredfiftyLtv;
    }

    public void setHundredfiftyLtv(BigDecimal value) {
        this.hundredfiftyLtv = value;
    }

    public BigDecimal getHundredeightyLtv() {
        return this.hundredeightyLtv;
    }

    public void setHundredeightyLtv(BigDecimal value) {
        this.hundredeightyLtv = value;
    }

    public BigDecimal getThreehundredsixtyLtv() {
        return this.threehundredsixtyLtv;
    }

    public void setThreehundredsixtyLtv(BigDecimal value) {
        this.threehundredsixtyLtv = value;
    }


}
