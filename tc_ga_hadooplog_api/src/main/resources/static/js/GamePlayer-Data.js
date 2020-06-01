$(function () {
    // $("body").mLoading("show");
    onready1();
    onready2();
    onready3();
    // $("body").mLoading("hide");
})


//不同时间分段内，1局在线结算用户不同行为次数均值
function onready1() {
    $("#right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'AvgPlayerNum'
    $.ajax({
        type: "post",
        url: "../queryDetailedAnalysis.action",
        async: true,
        data: {
            startTime: textday_to,
            state: 'AvgPlayerNum'
        },
        success: function (json) {
            if (json.state == true) {
                $("#right").css("display", "none");
                if (json.data.length == 0) {
                    $("#table1").append('<tr style="text-align: center;background: #202020"><td colspan="7">无数据</td></tr>')
                } else {
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == "populationBase") {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>人口基数</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3150) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>击杀玩家</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3160) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>击杀荒神</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3180) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>技能升级</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3170) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>更换沙盒技能</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3132) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>上树</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3133) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>下树</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3134) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>使用Gank</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3135) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>轻功1段</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3136) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>轻功2段</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3137) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>轻功3段</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3138) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>轻功打空</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3139) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>轻功打地</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }
    })
    // console.log(Lock1)
}

//英雄人数分布
function onready2() {
    // $("body").mLoading("show");
    $("#jiazhan").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'CommonSandbox'
    $.ajax({
        type: "post",
        url: "../getHeroNum.action",
        async: true,
        data: {
            startTime: textday_to,
        },
        success: function (json) {
            if (json.state == true) {
                $("#jiazhan").css("display", "none");
                if (json.data.length !== 0) {
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].heroId == 75000201) {
                            $("#table2").append('<tr style="text-align: center;background: #202020"><td>西斯人数</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000401) {
                            $("#table2").append('<tr style="text-align: center;background: #202020"><td>死神人数</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000901) {
                            $("#table2").append('<tr style="text-align: center;background: #202020"><td>拳法人数</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75001001) {
                            $("#table2").append('<tr style="text-align: center;background: #202020"><td>范海辛人数</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                } else {
                    $("#table2").append('<tr style="text-align: center;background: #202020">无数据</tr>')
                }
                //自带沙盒使用情况分布累计数表
                $.ajax({
                    type: "post",
                    url: "../queryDetailedAnalysis.action",
                    async: true,
                    data: {
                        startTime: textday_to,
                        state: 'CommonSandbox'
                    },
                    success: function (json) {
                        if (json.state == true) {
                            if (json.data.length == 0) {
                                $("#table2").append('<tr style="text-align: center;background: #202020"><td colspan="7">无数据</td></tr>')
                            } else {
                                for (var i = 0; i < json.data.length; i++) {
                                    if (json.data[i].stepNum == 75000201) {
                                        $("#table2").append('<tr style="text-align: center;background: #202020"><td>西斯公共沙盒次</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                                    }
                                    if (json.data[i].stepNum == 75000401) {
                                        $("#table2").append('<tr style="text-align: center;background: #202020"><td>死神公共沙盒次</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                                    }
                                    if (json.data[i].stepNum == 75000901) {
                                        $("#table2").append('<tr style="text-align: center;background: #202020"><td>拳法公共沙盒次</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                                    }
                                    if (json.data[i].stepNum == 75001001) {
                                        $("#table2").append('<tr style="text-align: center;background: #202020"><td>范海辛公共沙盒次</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                                    }
                                }
                            }
                        }
                    }
                })
            }
        }
    })
}

//自带沙盒使用情况分布均值表
function onready3() {
    $("#yonhu").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'SelfSandbox'
    $.ajax({
        type: "post",
        url: "../queryDetailedAnalysis.action",
        async: true,
        data: {
            startTime: textday_to,
            state: 'SelfSandbox'
        },
        success: function (json) {
            if (json.state == true) {
                $("#yonhu").css("display", "none");
                if (json.data.length == 0) {
                    $("#table3").append('<tr style="text-align: center;background: #202020"><td colspan="7">无数据</td></tr>')
                } else {
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 75000201) {
                            $("#table3").append('<tr style="text-align: center;background: #202020"><td>西斯</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 75000401) {
                            $("#table3").append('<tr style="text-align: center;background: #202020"><td>死神</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 75000901) {
                            $("#table3").append('<tr style="text-align: center;background: #202020"><td>拳法</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 75001001) {
                            $("#table3").append('<tr style="text-align: center;background: #202020"><td>范海辛</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }
    })
}
