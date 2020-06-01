$(function () {
    onready1();
    huangsheng();
    onready3();
    onready4();
    onready5();
    onready6();
    onready7();
    onready8();
    onready9();
    onready10();

    struckdown1();
    struckdown2();
    struckdown3();
    struckdown4();
    struckdown5();
    struckdown6();
    struckdown7();
    struckdown8();
    struckdown9();
    struckdown10();
})


function onready1() {
    // 使用魔药次数
    // $("body").mLoading("show");
    $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'use_drug_count'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'use_drug_count'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#wanjiaquery").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#wanjiaquery").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }

                    }
                }
            }
            console.log(json)
        }

    })
    $("#pull-right").css("display", "none");
}

function huangsheng() {
    //获得宝石次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'gain_inscription_count'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'gain_inscription_count'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#jishadata").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#jishadata").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>获得' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
                console.log(json)
            }
        }
    })
}

function onready3() {
    // 使用坐骑
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'ride_horse_count'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'ride_horse_count'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#kangtatack").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#kangtatack").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 13) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 14) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 15) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 16) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 17) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 18) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 19) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 20) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 21) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 22) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 23) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 24) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 25) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 26) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 27) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 28) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 35) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 48) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function onready4() {
    //使用机甲
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'control_magic_machine_count'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'control_magic_machine_count'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#wunabian").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#wunabian").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
            // console.log(json)
        }

    })
}

function onready5() {
    //使用炮
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'down_cannon_count'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'down_cannon_count'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#zhenamban").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#zhenamban").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            console.log()
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 13) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 14) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 15) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function onready6() {
    //坐船
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'up_ship_count'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'up_ship_count'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#jusyinter").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#jusyinter").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#jusyinter").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }

        }

    })
}

function onready7() {
    //承受毒圈伤害总值
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'suffer_damage_by_dead_race'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'suffer_damage_by_dead_race'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#jusyinter2").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#jusyinter2").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == "1000以下") {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == "2000以下") {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == "4000以下") {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == "4000以上") {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }

                    }
                }
            }

        }

    })
}

function onready8() {
    //玩家移动距离
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'total_moving_distance'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'total_moving_distance'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#jusyinter3").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }

                    $("#jusyinter3").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)

                    // let onea,oneb,onec,oned,onee,onef
                    // let ArrNum
                    // for(let l = 0;l<json.data.length; l++){
                    //     if(json.data[l].stepNum<1000){
                    //         // console.log(json.data[l].stepNum)
                    //         let a=0,b=0,c=0,d=0,e=0,f=0
                    //         onea={
                    //             stepNum:'1000以下',
                    //             firstLap:a+=Number(json.data[l].firstLap),
                    //             secondLap:b+=Number(json.data[l].secondLap),
                    //             thirdLap:c+=Number(json.data[l].thirdLap),
                    //             fourthLap:d+=Number(json.data[l].fourthLap),
                    //             fifthLap:e+=Number(json.data[l].fifthLap),
                    //             sixthLap:f+=Number(json.data[l].sixthLap)
                    //         }
                    //     }
                    //     if(json.data[l].stepNum>1000&&json.data[l].stepNum<2000){
                    //         let a=0,b=0,c=0,d=0,e=0,f=0
                    //         oneb={
                    //             stepNum:'2000以下',
                    //             firstLap:a+=Number(json.data[l].firstLap),
                    //             secondLap:b+=Number(json.data[l].secondLap),
                    //             thirdLap:c+=Number(json.data[l].thirdLap),
                    //             fourthLap:d+=Number(json.data[l].fourthLap),
                    //             fifthLap:e+=Number(json.data[l].fifthLap),
                    //             sixthLap:f+=Number(json.data[l].sixthLap)
                    //         }
                    //     }
                    // if(json.data[l].stepNum>2000&&json.data[l].stepNum<3000){
                    //     // console.log(json.data[l].stepNum)
                    //     c+=Number(json.data[l].thirdLap)
                    // }
                    // if(json.data[l].stepNum>3000&&json.data[l].stepNum<4000){
                    //     // console.log(json.data[l].stepNum)
                    //     d+=Number(json.data[l].fourthLap)
                    //     // console.log(d)
                    // }
                    // ArrNum=[onea,oneb]
                    // }
                    // console.log(ArrNum)
                    // console.log(a,b,c,d,e,f)
                    // console.log(ArrNum[0].stepNum)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == '0') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '1000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '2000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '3000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '4000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '5000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '6000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '7000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '8000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '9000以下') {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == "9000以上") {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }

        }

    })
}


function onready9() {
    //击杀活人
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'kill_player_num'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'kill_player_num'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#jusyinter4").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#jusyinter4").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }

                    }
                }
            }

        }

    })
}

function onready10() {
    //使用常规技能次
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'use_routine_skill'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'use_routine_skill'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#jusyinter5").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#jusyinter5").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == '使用0') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用10以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用20以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用30以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用40以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用50以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用60以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用70以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用80以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用90以内') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '使用更多') {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }

                    }
                }
            }

        }

    })
}

function struckdown1() {
    //杀怪总计
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'kill_npc'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'kill_npc'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage1").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage1").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == '击杀0') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀5以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀10以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀20以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀30以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀40以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀50以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀60以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀70以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀80以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀90以内') {
                            $("#damage1").append('<tr style="text-align: center;background: #363636"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀100以内') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == '击杀更多') {
                            $("#damage1").append('<tr style="text-align: center;"><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }

                    }
                }
            }
        }

    })
}

function struckdown2() {
    //Gank技能造成伤害次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'gank_make_damage_times'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'gank_make_damage_times'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage2").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage2").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            console.log()
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage2").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#damage2").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function struckdown3() {
    //Gank技能对活人造成伤寒的次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'gank_make_damage_to_player_times'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'gank_make_damage_to_player_times'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage3").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage3").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            console.log()
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#damage3").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#damage3").append('<tr style="text-align: center;background: #575757"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function struckdown4() {
    //开启宝箱次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'open_treasure_box_times'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'open_treasure_box_times'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage4").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage4").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            console.log()
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#damage4").append('<tr style="text-align: center;background: #575757"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function struckdown5() {
    //开启传奇宝箱次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'open_legend_treasure_box_times'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'open_legend_treasure_box_times'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage5").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage5").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#damage5").append('<tr style="text-align: center;"><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>开启' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function struckdown6() {
    //拾取魔环BuFF次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'pick_magic_ring_times'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'pick_magic_ring_times'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage6").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage6").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            console.log()
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#damage6").append('<tr style="text-align: center;background: #575757"><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>拾取' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function struckdown7() {
    //使用左侧快捷键操作按钮上树次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'up_tree_by_promt_button_times'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'up_tree_by_promt_button_times'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage7").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //                         //     json.data[l].secondLap=0
                        //                         // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage7").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            console.log()
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#damage7").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function struckdown8() {
    //使用左侧快捷键操作按钮开宝箱次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'open_treasure_box_by_promt_button_times'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'open_treasure_box_by_promt_button_times'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage8").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage8").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            console.log()
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#damage8").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
}

function struckdown9() {
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'ride_up_by_promt_button_times'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'ride_up_by_promt_button_times'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage9").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage9").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#damage9").append('<tr style="text-align: center;background: #575757"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }

                    }
                }
            }
        }

    })
}

function struckdown10() {
    //使用神器次数
    // $("body").mLoading("show");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'use_artifact'
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysisTwo.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'use_artifact'
        },
        success: function (json) {
            $("body").mLoading("hide");
            if (json.state == true) {
                if (json.data.length !== 0) {
                    $("#damage10").empty()
                    var one, two, three, four, five, six, None = 0, Ntwo = 0, Nthree = 0, Nfour = 0, Nfive = 0,
                        Nsixe = 0
                    for (let l = 0; l < json.data.length; l++) {
                        // if(!json.data[l].secondLap.length){
                        //     json.data[l].secondLap=0
                        // }
                        // console.log( json.data[l].secondLap)
                        one = None += Number(json.data[l].firstLap)
                        two = Ntwo += Number(json.data[l].secondLap)
                        three = Nthree += Number(json.data[l].thirdLap)
                        four = Nfour += Number(json.data[l].fourthLap)
                        five = Nfive += Number(json.data[l].fifthLap)
                        six = Nsixe += Number(json.data[l].sixthLap)
                        // console.log(json.data[l].secendLap)
                    }
                    $("#damage10").append(`<thead><th>第1圈</th>
                                <th>${one}</th>
                                 <th>第2圈</th>
                                 <th>${two}</th>
                                <th>第3圈</th>
                                <th>${three}</th>
                                <th>第4圈</th>
                                <th>${four}</th>
                                <th>第5圈</th>
                                <th>${five}</th>
                                <th>第6圈</th>
                                <th>${six}</th>
                                </thead>`)
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            console.log()
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#damage10").append('<tr style="text-align: center;background: #363636"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }

                    }
                }
            }
        }

    })
}