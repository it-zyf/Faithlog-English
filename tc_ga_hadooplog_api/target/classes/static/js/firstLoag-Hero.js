$(function () {
    onready1();
    onready2();
    onready3();
    onready4();
})

//查询英雄分布
function onready1() {
    $("#pull-right").css("display", "block");
    //时间
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间

    $.ajax({
        type: "post",
        url: "../getHeroDistribution.action",
        async: true,
        data: {
            startTime: textday_to,
        },
        success: function (json) {
            if (json.state == true) {
                $("#pull-right").css("display", "none");
                if (json.data.length == 0) {
                    $("#table1").append('<tr><td colspan="6" style="text-align: center;background: #202020">无数据</td></tr>')
                } else {
                    for (var i = 0; i < json.data.length; i++) {


                        if (json.data[i].heroId == 75000101) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>战神装甲</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000201) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>巡林者</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000301) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>大魔导师</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000401) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>魔法斗士</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000501) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>战天使</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000601) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>自动人形</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000701) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>浑天候</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000801) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>守护神</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75000901) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>拳法家</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75001001) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>狩魔人</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75001101) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>圣团长</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75001201) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>深海革命军</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }
                        if (json.data[i].heroId == 75001301) {
                            $("#table1").append('<tr style="text-align: center;background: #202020"><td>空之灵</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td><td>' + json.data[i].onLineOneGameNum + '</td><td>' + json.data[i].offLineSettlementRate + '</td></tr>')
                        }

                    }
                }
            }
        }
    })
}

//首局活人数对2局率的影响
function onready2() {
    $("#wangjia").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间

    $.ajax({
        type: "post",
        url: "../getTwoRate.action",
        async: true,
        data: {
            startTime: textday_to,
        },
        success: function (json) {
            if (json.state == true) {
                $("#wangjia").css("display", "none");
                if (json.data.length == 0) {
                    $("#table2").append('<tr><td colspan="4" style="text-align: center;background: #202020">无数据</td></tr>')
                } else {
                    for (var i = 0; i < json.data.length; i++) {
                        $("#table2").append('<tr style="text-align: center;background: #202020"><td>' + json.data[i].playerNum + '</td><td>' + json.data[i].firstGameNum + '</td><td>' + json.data[i].oneGameNum + '</td><td>' + json.data[i].twoRate + '</td></tr>')
                    }
                }
            }
        }
    })
}

//死亡原因表
function onready3() {
    $("#liangemx").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    $.ajax({
        type: "post",
        url: "../getCauseOfDeathDistribution.action",
        async: true,
        data: {
            startTime: textday_to,
        },
        success: function (json) {
            if (json.state == true) {
                $("#liangemx").css("display", "none");
                if (json.data.length == 0) {
                    $("#table3").append('<tr><td colspan="3" style="text-align: center;background: #202020">无数据</td></tr>')
                } else {
                    for (var i = 0; i < json.data.length; i++) {
                        $("#table3").append('<tr style="text-align: center;background: #202020"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].offLineNum + '</td><td>' + json.data[i].onLineNum + '</td></tr>')
                    }
                }
            }
        }
    })
}

//通过筛选结算日志库在线结算用户游戏时间分布
function onready4() {
    $("#liange").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    // var  text4=timeMM[1].value//结束时间
    $.ajax({
        type: "post",
        url: "../getGameTimeDistribution.action",
        async: true,
        data: {
            startTime: textday_to,
        },
        success: function (json) {
            if (json.state == true) {
                $("#liange").css("display", "none");
                console.log(json.data.length)
                if (json.data.length == 0) {
                    $("#table4").append('<tr><td colspan="3" style="text-align: center;background: #202020">无数据</td></tr>')
                } else {
                    for (var i = 0; i < json.data.length; i++) {
                        console.log(json.data.cycles)
                        if (json.data[i].cycles == 0) {
                            $("#table4").append('<t style="text-align: center;background: #202020"r><td>异常用户（游戏时间为0）</td><td>' + json.data[i].ratio + '</td><td>' + json.data[i].playerNum + '</td></tr>')

                        } else {
                            $("#table4").append('<tr style="text-align: center;background: #202020"><td>第' + json.data[i].cycles + '圈</td><td>' + json.data[i].ratio + '</td><td>' + json.data[i].playerNum + '</td></tr>')
                        }
                    }
                }
            }
        }
    })
}
