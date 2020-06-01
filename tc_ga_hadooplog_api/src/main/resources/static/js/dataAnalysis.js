

change()
function onblu(){
    $('#div-one').css('display','none')
    $('#div-two').css('display','none')
    $('#div-three').css('display','none')
    $('#div-four').css('display','none')

    $('#loadget').css('display','block')
    $('#loadpay').css('display','block')
    $('#loadway').css('display','block')
    var timeMM= document.getElementsByClassName('el-range-input')
    var  texts=timeMM[0].value
    var  texte=timeMM[1].value
    var serverSub= $("#district").val(); //区服
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    $.ajax({
        type: "post",
        url: "../queryDayReatinAndOnLineTimeAndFirstLogin.action",
        async: true,
        data: {
            serverId: serverSub,
            startTime: texts,
            endTime:texte
        },
        success: function (ob) {
            $('#loadget').css('display','none')
            $('#loadpay').css('display','none')
            $('#loadway').css('display','none')
            $('#loadarpu').css('display','none')
            $('#div-one').css('display','block')
            $('#div-two').css('display','block')
            $('#div-three').css('display','block')
            $('#div-four').css('display','block')
            AddUser(ob);
            payrate(ob)
            arpu(ob)
            // retentionTable(text5,text1,textTime)
        }
    });
    // $.ajax({
    //     type: "post",
    //     url: '../getGameAccountRetain.action',
    //     async: true,
    //     data: {
    //         serverId: serverSub,
    //         startTime: texts,
    //         endTime:texte
    //     },
    //     success: function (res) {
    //         $('#loadarput').css('display','none')
    //        console.log(res)
    //
    //     }
    // });
}
function change() {
    $('#district').css('display','block')
    $.ajax({
        type: "get",
        url: "http://150.109.167.142:9110/frontEnd/queryAreas",
        async: false,
        success: function (obj) {
            for (var i = 0; i < obj.data.length; i++) {
                $("#district").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
            }
            $("#district").each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#district').multiselect("destroy").multiselect({
                buttonWidth: '80%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 1,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有区服',
            });
            homedata()
        }
    });
}
function homedata() {
    $('#div-one').css('display','none')
    $('#div-two').css('display','none')
    $('#div-three').css('display','none')
    $('#loadget').css('display','block')
    $('#loadpay').css('display','block')
    $('#loadway').css('display','block')
    var text5 = $("#district").val(); //
    	if(text5!=null){
		text5 = text5.join(",");
	}
    var date = new Date();
    var today=new Date(date-24*3600*1000)
    var oneweekdate = new Date(date-30*24*3600*1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth()+1;
    var d = oneweekdate.getDate();
    if(m<10){
        m='0'+m
    }
    if(d<10){
        d='0'+d
    }
    formatwdate = y+'-'+m+'-'+d;//30前
    var yn = today.getFullYear();
    var mn = today.getMonth()+1;
    var dn = today.getDate();
    if(mn<10){
        mn='0'+mn
    }
    if(dn<10){
        dn='0'+dn
    }
    formatwdateNow = yn+'-'+mn+'-'+dn;//昨天
    $.ajax({
        type: "post",
        url: "../queryDayReatinAndOnLineTimeAndFirstLogin.action",
        async: true,
        data: {
            startTime: formatwdate,
            endTime:formatwdateNow,
            serverId:text5,
        },
        success: function (ob) {
            console.log(ob)
            AddUser(ob);
            payrate(ob)
            arpu(ob)
        }
    });
    // $.ajax({
    //     type: "post",
    //     url: "../getGameAccountRetainTable.action",
    //     async: true,
    //     data: {
    //         startTime: formatwdate,
    //         endTime:formatwdateNow,
    //     },
    //     success: function (ob) {
    //         console.log(ob)
    //         Agreen(ob)
    //         console.log(typeof Agreen)
    //         console.log($('#datatableAll').html())
    //     }
    // })$.ajax({
    //     type: "post",
    //     url: "../getGameAccountRetainTable.action",
    //     async: true,
    //     data: {
    //         startTime: formatwdate,
    //         endTime:formatwdateNow,
    //     },
    //     success: function (ob) {
    //         console.log(ob)
    //         Agreen(ob)
    //         console.log(typeof Agreen)
    //         console.log($('#datatableAll').html())
    //     }
    // })
}
// function form(Arr) {
//     let str = ''
//     console.log(Arr)
//     for(let i=0;i<Arr.data.length;i++){
//         console.log(Arr.data[i][0].startTime)
//         str += `<td>${Arr.data[i][0].startTime}</td>`
//     }
//     console.log(str)
//     return str
// }
// function jushu(Arr,i,Num) {
//     let Jusau =''
//     let Ju
//     // console.log(Arr.data[0][0].gameNumStrinig)
//     console.log(i,Num)
//     for(let l=0;l<Arr.data.length;l++){
//         console.log('Arr.data[l][i])',Arr.data[l][i],!Arr.data[l][i])
//         if(!Arr.data[l][i]){
//             Ju = "<td>第"+i+"局</td>"
//         }else{
//             Ju = "<td>第"+(Arr.data[l][i].gameNumStrinig)+"局</td>"
//         }
//         if(!Arr.data[l][i]){
//             Arr.data[l][i].dayRetainRate = null
//         }else{
//             Jusau +="<td>"+(Arr.data[l][i].dayRetainRate)+"</td>"
//         }
//         // console.log(Arr.data[i][Num].gameNumStrinig)
//         // console.log(Arr.data[i][Num].dayRetainRate)
//
//
//
//     }
//     Ju+=Jusau
//     console.log(Ju)
//     return Ju
//
//     }

    // console.log(Jusau)
    //
// }
//
// function Agreen(Arr) {
//     $('#datatableAll').append(function () {
//         let Append=''
//         let Num = 0
//
//         for(let i=0;i<Arr.data.length;i++){
//             Append += `<tr>${jushu(Arr,i,Num)}</tr>`
//             if(Num < Arr.data.length){
//                 Num++
//             }
//         }
//         return Append
//     })
//
// }
//次日留存j
function AddUser(data) {
    $('#loadget').css('display','none')
    $('#div-one').css('display','block')
    var chart=null
    var arr = [];
    var arr4 = [];
    for (var i = 0; i < data.data[0].length; i++) {
        var date=data.data[0][i].logTime
        var index=date.indexOf(' ')
        var someDate = date.substring(0,index);
        var dayRate
            if(data.data[0][i].dayRetainCount===0){
                dayRate=0.00
            }else{
                var rate= data.data[0][i].dayRetain/data.data[0][i].dayRetainCount
                dayRate=(rate*100).toFixed(2)
            }
        arr.push(parseFloat(dayRate))
        arr4.push(someDate)
    }
    chart = Highcharts.chart('div-one', {
        chart: {
            height:273,
            reflow: true,
            type: 'spline',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text: '',
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled:false,//默认为可用，当设置为false时，图表的打印及导出功能失效
            filename:'注册数据',//导出的文件名
        },
        xAxis: {

            lineColor:'#333333',
            tickColor:'#333333',
            gridLineWidth: .5,
            gridLineColor:'#202020',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            categories:arr4,
            labels: {
                enable: true,
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
            valueSuffix: '%',
            style: {                      // 文字内容相关样式
                color: "#ffffff",
                opacity:'1',
                fontSize: "12px",
            },
        },
        yAxis: {
            title: {
                text:'',
            },
            gridLineColor:'#333333',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            },
            valueSuffix: '%'
        },
        legend: {
           enabled:false,
        },
        plotOptions: {
            series: {
                lineWidth: 2,
                color:"#10CFBD"
            }
        },
        series: [{
            id: 'exSeries',
            name: '次日留存',
            data: arr,
            tooltip:{
                valueSuffix: '%'
            }
        }],
    });
    retaintable(data)
}
function  retaintable(data) {
    $("#tableRetain").bootstrapTable('destroy')
    $("#tbodyRetain").empty();
    for (var i = 0; i < data.data[0].length; i++) {
        var date=data.data[0][i].logTime
        var index=date.indexOf(' ')
        var someDate = date.substring(0,index);
        var dayRate
        if(data.data[0][i].dayRetainCount===0){
            dayRate=0.00
        }else{
            var rate= data.data[0][i].dayRetain/data.data[0][i].dayRetainCount
            dayRate=(rate*100).toFixed(2)
        }
        $("#tbodyRetain").append(
            "<tr><td>" + someDate +
            "</td><td>" + parseFloat(dayRate) +
            "</td></tr>"
        )
    }
}
//人均在线时长
function payrate(data) {
    $('#loadpay').css('display','none')
    $('#div-two').css('display','block')
    var chart=null
    var arr = [];
    var arr4 = [];
    for (var i = 0; i < data.data[0].length; i++) {
        var date=data.data[0][i].logTime
        var index=date.indexOf(' ')
        var someDate = date.substring(0,index);
        var onlineTime
            if(data.data[0][i].activeNumber===0){
                onlineTime =0
            }else{
                var rate= data.data[0][i].sumGametime/data.data[0][i].activeNumber
                onlineTime=Math.floor(rate)
            }
        arr.push(onlineTime)
        arr4.push(someDate)

    }
    chart = Highcharts.chart('div-two', {
        chart: {
            marginLeft:50,
            height:270,
            reflow: true,
            type: 'spline',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text: ' ',
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled:false,//默认为可用，当设置为false时，图表的打印及导出功能失效
            filename:'注册数据',//导出的文件名
        },
        xAxis: {
            lineColor:'#333333',
            tickColor:'#333333',
            gridLineWidth: .5,
            gridLineColor:'#202020',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            type: 'datetime',
            categories: arr4,
            labels: {
                enable: true,
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
            // useHTML: true,
            style: {                      // 文字内容相关样式
                color: "#ffffff",
                opacity:'1',
                fontSize: "12px",
            },
            valueSuffix: 's'
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
        },
        yAxis: {
            title: {
                text: '',
            },
            gridLineColor:'#333333',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            },
            valueSuffix: 's'
        },
        legend: {
           enabled:false,
        },
        plotOptions: {
            series: {
                lineWidth: 2,
                color:"#10CFBD"
            }
        },
        series: [{
            id: 'exSeries',
            name: '人均在线时长',
            data: arr,
            tooltip:{
                valueSuffix: 's'
            }
        }],
    });
    onlinetable(data)
}
function  onlinetable(data) {
    $("#tableOnline").bootstrapTable('destroy')
    $("#tbodyOnline").empty();
    for (var i = 0; i < data.data[0].length; i++) {
        var date=data.data[0][i].logTime
        var index=date.indexOf(' ')
        var someDate = date.substring(0,index);
        var onlineTime
        if(data.data[0][i].activeNumber===0){
            onlineTime =0
        }else{
            var rate= data.data[0][i].sumGametime/data.data[0][i].activeNumber
            onlineTime=Math.floor(rate)
        }
        $("#tbodyOnline").append(
            "<tr><td>" + someDate +
            "</td><td>" + onlineTime +
            "</td></tr>"
        )
    }
}
//首登对比
//首登对比
function arpu(data) {
    $('#loadarpu').css('display','none')
    $('#div-three').css('display','block')
    var chart=null
    var arr = [];
    var arr4 = [];
    for (var i = 0; i < data.data[1].length; i++) {
        var date=data.data[1][i].logTime
        var index=date.indexOf(' ')
        var someDate = date.substring(0,index);
        var battleRate
        if(data.data[1][i].gameNum===0){
            battleRate=0.00
        }else{
            var rate= data.data[1][i].accountNum/data.data[1][i].gameNum
            battleRate=(rate*100).toFixed(2)
        }
        arr.push(parseFloat(battleRate))
        arr4.push(someDate)

    }
    chart = Highcharts.chart('div-three', {
        chart: {
            height:273,
            reflow: true,
            type: 'spline',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text: ' ',

        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled:false,//默认为可用，当设置为false时，图表的打印及导出功能失效
            filename:'ARPU',//导出的文件名
        },
        xAxis: {
            lineColor:'#333333',
            tickColor:'#333333',
            gridLineWidth: .5,
            gridLineColor:'#202020',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            categories: arr4,
            labels: {
                enable: true,
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
// useHTML: true,
            style: {                      // 文字内容相关样式
                color: "#ffffff",
                opacity:'1',
                fontSize: "12px",
            },
            valueSuffix: '%'
        },
        yAxis: {
            title: {
                text: '',
            },
            gridLineColor:'#333333',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            },
            valueSuffix: '%'
        },
        legend: {
            enabled:false,
        },
        plotOptions: {
            series: {
                lineWidth: 2,
                color:"#10CFBD"
            }
        },
        series: [{
            id: 'exSeries',
            name: '3局及以上首登对局数占比',
            data: arr,
            tooltip:{
                valueSuffix: '%'
            }
        }],
    });
    ratetable(data)
}
function  ratetable(data) {
    $("#tableRate").bootstrapTable('destroy')
    $("#tbodyRate").empty();
    for (var i = 0; i < data.data[1].length; i++) {
        var date=data.data[1][i].logTime
        var index=date.indexOf(' ')
        var someDate = date.substring(0,index);
        var battleRate
        if(data.data[1][i].gameNum===0){
            battleRate=0.00
        }else{
            var rate= data.data[1][i].accountNum/data.data[1][i].gameNum
            battleRate=(rate*100).toFixed(2)
        }
        $("#tbodyRate").append(
            "<tr><td>" + someDate +
            "</td><td>" +parseFloat(battleRate) +
            "</td></tr>"
        )
    }
}

