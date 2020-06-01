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
})


function onready1() {
    $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 3150
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis3150'
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
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 13) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 14) {
                            $("#wanjiaquery").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
            // console.log(json)
        }

    })
    $("#pull-right").css("display", "none");
}

function huangsheng() {
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 3160
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis3160'
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
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#jishadata").append('<tr style="text-align: center;background: #202020"><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>击杀' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
                // console.log(json)
            }
        }
    })
    // $("#pull-right").css("display", "none");
}

function onready3() {
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 3132
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis3132'
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
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 13) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 14) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 15) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 16) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 17) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 18) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 19) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 20) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 21) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 22) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 23) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 24) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 25) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 26) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 27) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 28) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 35) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 48) {
                            $("#kangtatack").append('<tr style="text-align: center;"><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>上树' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
    // $("#pull-right").css("display", "none");
}

function onready4() {
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 3134
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis3134'
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
                    $("#wunabian").append(`<thead style="background: #121212;"><th>第1圈</th>
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
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#wunabian").append('<tr style="text-align: center;"><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>Gank' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
            // console.log(json)
        }

    })
    // $("#pull-right").css("display", "none");
}

function onready5() {
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 3135
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis3135'
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
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 13) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 14) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #575757"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 15) {
                            $("#zhenamban").append('<tr style="text-align: center;background: #363636"><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>1段' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }
        }

    })
    // $("#pull-right").css("display", "none");
}

function onready6() {
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 75000201
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis75000201'
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
    // $("#pull-right").css("display", "none");
}

function onready7() {
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 75000301
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis75000301'
        },
        success: function (json) {
            // $("body").mLoading("hide");
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
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#jusyinter2").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }

        }

    })
    // $("#pull-right").css("display", "none");
}

function onready8() {
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 75000401
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis75000401'
        },
        success: function (json) {
            // $("body").mLoading("hide");
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
                    for (var i = 0; i < json.data.length; i++) {
                        if (json.data[i].stepNum == 0) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 13) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 14) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 15) {
                            $("#jusyinter3").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }

        }

    })
    // $("#pull-right").css("display", "none");
}

function onready9() {
    //自带沙盒拳法
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 75000901
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis75000901'
        },
        success: function (json) {
            // $("body").mLoading("hide");
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
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 13) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 14) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 15) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 16) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 17) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 18) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 19) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 20) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 21) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 22) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 23) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 24) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 25) {
                            $("#jusyinter4").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }

        }

    })
    // $("#pull-right").css("display", "none");
}

function onready10() {
    //自带沙盒
    // $("#pull-right").css("display", "block");
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var statetext = 'Analysis' + 75001001
    $.ajax({
        type: 'post',
        url: '../queryDetailedAnalysis.action',
        async: true,
        data: {
            startTime: textday_to,
            state: 'Analysis75001001'
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
                        if (json.data[i].stepNum == 0) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 1) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 2) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 3) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 4) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 5) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 6) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 7) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 8) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 9) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 10) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 11) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 12) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 13) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 14) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 15) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 16) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 17) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 18) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 19) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 20) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 21) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 22) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 23) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 24) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 25) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 26) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 27) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 28) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 29) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                        if (json.data[i].stepNum == 30) {
                            $("#jusyinter5").append('<tr style="text-align: center;"><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].firstLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].secondLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].thirdLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fourthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].fifthLap + '</td><td>使用' + json.data[i].stepNum + '</td><td>' + json.data[i].sixthLap + '</td></tr>')
                        }
                    }
                }
            }

        }

    })
    // $("#pull-right").css("display","none");
}