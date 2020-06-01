

change()
function load() {
    $(".right").mLoading("show");
}
function onblu(){
    $('#div-one').css('display','none')
    $('#div-two').css('display','none')
    $('#div-three').css('display','none')
    $('#div-four').css('display','none')
    $('#loadget').css('display','block')
    $('#loadpay').css('display','block')
    $('#loadway').css('display','block')
    $('#loadarpu').css('display','block')
    var timeMM= document.getElementsByClassName('el-range-input')
    var  texts=timeMM[0].value
    var  texte=timeMM[1].value
    var serverSub= $("#district").val(); //区服
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    $.ajax({
        type: "post",
        url: "../queryHomeDate.action",
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
            // retentionTable(text5,text1,textTime)
        }
    });
}
function change() {
    $('#district').css('display','block')
    $.ajax({
        type: "get",
        url: "http://150.109.167.142:9110/frontEnd/queryAreas",
        async: false,
        success: function (obj) {
            for (var i = 0; i < obj.rows.length; i++) {
                $("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
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
    $('#div-four').css('display','none')
    $('#loadget').css('display','block')
    $('#loadpay').css('display','block')
    $('#loadway').css('display','block')
    $('#loadarpu').css('display','block')
    var text5 = $("#district").val(); //区服
    var date = new Date();
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
    var formatwdate = y+'-'+m+'-'+d;//一周前
    var yn = date.getFullYear();
    var mn = date.getMonth()+1;
    var dn = date.getDate();
    if(mn<10){
        mn='0'+mn
    }
    if(dn<10){
        dn='0'+dn
    }
    var formatwdateNow = yn+'-'+mn+'-'+dn;//今天
    var end=formatwdateNow+' 23:59:59'
    var start=formatwdate+' 00:00:00'
    if (text5 != null) {
        text5 = text5.join(",");
    }
    $.ajax({
        type: "post",
        url: "../queryHomeDateNew.action",
        async: true,
        data: {
            serverId: text5,
            startTime: formatwdate,
            endTime:formatwdateNow
        },
        success: function (ob) {
            // var c = Number(ob.payNumber)
            // onreal(ob);
            // OfficaNum(ob);
            // Activation(ob);
            AddUser(ob);
            payrate(ob)
            arpu(ob)
            delayTime(start,end)
        }
    });
}
function retentionTable(text5,text1,textTime) {
    $("#real-datatableAll").bootstrapTable('destroy');
    var t = $("#real-datatableAll").bootstrapTable({
        // url: '../queryHomeDateTable.action',////改接口
        // method: 'post',
        // dataType: "json",
        height:357,
        // contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
        queryParamsType: "",
        striped: true, //设置为 true 会有隔行变色效果
        undefinedText: "0", //当数据为 undefined 时显示的字符
        pagination: true, //分页
        paginationLoop: false,
        // paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
        showToggle: false, //是否显示 切换试图（table/card）按钮
        // showColumns: "true", //是否显示 内容列下拉框
        pageNumber: 1, //如果设置了分页，首页页码
        // showPaginationSwitch:true,//是否显示 数据条数选择框
        pageSize: 20, //如果设置了分页，页面数据条数
        pageList: [5, 10, 20, 40,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "client", //客户端处理分页
        data:[{'logTime':'2019-11-20','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-21','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-22','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-23','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-24','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-25','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-26','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',}],
        // queryParams: function() { //自定义参数，这里的参数是传给后台的，我这是是分页用的
        //     return { //这里的params是table提供的
        //         serverId: text5,
        //         startTime: text1,
        //         endTime:textTime
        //     };
        // },
        idField: "logTime", //指定主键列
        columns: [
            {
                title: '日期',
                field: 'logTime',
                align: 'center',
                width: 100
            },
            {
                title: '新增活跃人数',
                field: 'firstLoginNum',
                align: 'center',
                width: 100
            },
            {
                title: '新增充值金额',
                field: 'activeNum',
                align: 'center',
                width: 100
            },
            {
                title: '新增注册',
                field: 'registerNum',
                align: 'center',
                width: 80
            },

            {
                title: '付费金额',
                field: 'payNum',
                align: 'center',
                width: 80
            },
            {
                title: '首日LTV',
                field: 'amount1',
                align: 'center',
                width: 80
            },
            {
                title: '2日LTV',
                field: 'amount2',
                align: 'center',
                width: 80
            },
            {
                title: '3日LTV',
                field: 'amount3',
                align: 'center',
                width: 80
            },
            {
                title: '4日LTV',
                field: 'amount4',
                align: 'center',
                width: 80
            },
            {
                title: '5日LTV',
                field: 'amount5',
                align: 'center',
                width: 80
            },
            {
                title: '6日LTV',
                field: 'amount6',
                align: 'center',
                width: 80
            },{
                title: '7日LTV',
                field: 'amount7',
                align: 'center',
                width: 80
            },
        ]
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
        $("#page-wrapper").mLoading("hide");
    });
}
//收入金额
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
        var rq = data.data[0][i].device_count
        arr.push(rq)
        arr4.push(someDate)

    }
    chart = Highcharts.chart('div-one', {
        chart: {
            height:340,
            reflow: true,
            type: 'spline',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
            marginLeft:45,
        },
        title: {
            text: '收'+'<br />'+'入'+'<br />'+'金'+'<br />'+'额'+'<br />',
            align: 'left',
            verticalAlign: 'middle',
            x:-10,
            y: -60,
            style: {
                color: '#999999',
                fontWeight:'400',
                fontSize:'12',
            }
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled:false,//默认为可用，当设置为false时，图表的打印及导出功能失效
            filename:'注册数据',//导出的文件名
        },
        xAxis: {
            // plotLines:[{
            //     color:'#999999',            //线的颜色
            //     dashStyle:'longdashdot',//标示线的样式，默认是solid（实线），这里定义为长虚线
            //     value:this,                //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
            //     width:1                 //标示线的宽度，2px
            // }],
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineWidth: .5,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            categories: ['2019-11-22','2019-11-23','2019-11-24','2019-11-25','2019-11-26','2019-11-27','2019-11-28'],
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
                color: '#999999',
                dashStyle: 'Dash'
            },
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
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
        },
        yAxis: {
            title: {
                text:'',
                // margin: 10,
                // rotation:0,
                // text:'收<br />入<br />金<br />额<br />',
                // style: {
                //     color: '#CCC',
                //     fontWeight:'400',
                //     fontSize:'12',
                // }
            },
            lineWidth:1,
            lineColor:'#707070',
            gridLineColor:'#707070',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            }
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
            name: '收入金额',
            data: [0,0,0,0,0,0,0],
        }],
    });
}
//付费率
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
        var rq = data.data[0][i].device_count
        arr.push(rq)
        arr4.push(someDate)

    }
    chart = Highcharts.chart('div-two', {
        chart: {
            marginLeft:30,
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
            // align: 'left',
            // verticalAlign: 'middle',
            // x:-10,
            // y: -60,
            // style: {
            //     color: '#999999',
            //     fontWeight:'400',
            //     fontSize:'12',
            // }
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
            categories: ['2019-11-22','2019-11-23','2019-11-24','2019-11-25','2019-11-26','2019-11-27','2019-11-28'],
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
                color: '#999999',
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
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
        },
        yAxis: {
            title: {
                text: '',
            },
            lineWidth:1,
            lineColor:'#333333',
            gridLineColor:'#333333',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            }
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
            name: '付费率',
            data: [0,0,0,0,0,0,0],
        }],
    });
}
//ARPU
function arpu(data) {
    $('#loadarpu').css('display','none')
    $('#div-three').css('display','block')
    var chart=null
    var arr = [];
    var arr4 = [];
    for (var i = 0; i < data.data[0].length; i++) {
        var date=data.data[0][i].logTime
        var index=date.indexOf(' ')
        var someDate = date.substring(0,index);
        var rq = data.data[0][i].device_count
        arr.push(rq)
        arr4.push(someDate)

    }
    chart = Highcharts.chart('div-three', {
        chart: {
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
            // align: 'left',
            // verticalAlign: 'middle',
            // x:-10,
            // y: -60,
            // style: {
            //     color: '#999999',
            //     fontWeight:'400',
            //     fontSize:'12',
            // }
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
            type: 'datetime',
            categories: ['2019-11-22','2019-11-23','2019-11-24','2019-11-25','2019-11-26','2019-11-27','2019-11-28'],
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
                color: '#999999',
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
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
        },
        yAxis: {
            title: {
                text: '',
            },
            lineWidth:1,
            lineColor:'#333333',
            gridLineColor:'#333333',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            }
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
            name: 'ARPU',
            data: [0,0,0,0,0,0,0],
        }],
    });
}
//渠道收入
function delayTime(startTime,endTime) {
    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectStartRetarder",//接口-延迟时间
        async: true,
        data: {
            startTime:startTime,
            endTime:endTime
        },
        success: function (ob) {
            delay(ob)
        }
    });
}
function delay(data) {
    $('#loadway').css('display','none')
    $('#div-four').css('display','block')
    var partThreeLeft = echarts.init(document.getElementById('div-four'));
    var number=[]
    var range=[]
    var rate=[]
    var acount=0
    for(var i=0;i<data.data.length;i++){
        var num=data.data[i].timeCount
        var ran=data.data[i].timeNum
        acount+=parseInt(num)
        number.push(num)
        range.push(ran)
    }
    for(var i=0;i<data.data.length;i++){
        var ra=(parseInt(data.data[i].timeCount))/acount
        var nn=(ra*100).toFixed(2)
        rate.push(nn)
    }
    var option = {
        title: {
            text: ' ',
            // x: 'left',
            // left:'9',
            // y: 'center',
            // textStyle:{
            //     color:'#999999',
            //     fontSize:12,
            //     fontWeight:'normal',
            // },
        },
        // backgroundColor: "#363636",
        color: "#10CFBD",
        tooltip: {
            //     trigger: 'axis',
            //     formatter:function (params) {
            //         console.log(params)
            //     }
        },
        grid:{//图表距离外边框的距离
            x:'1%',
            width:'96%',
            height:'88%',
            y:'6%',
            containLabel: true
        },
        xAxis: [{
            type:"value",
            // type: "value",
            axisLabel: {
                textStyle: {
                    color: "#999999"
                },
                formatter: "{value}"
            },
            splitLine: {
                lineStyle: {
                    color: "#202020"
                }
            },
            axisLine: {//刻度线
                lineStyle: {
                    color: "#333333"
                },
                show: true
            }
        },],
        yAxis: [{
            type: "category",
            data: ['小米应用市场','华为应用市场','AppStore','360助手','百度助手'],
            axisTick: {
                alignWithLabel: true
            },
            nameTextStyle: {
                color: "#999999"
            },
            axisLine: {
                lineStyle: {
                    color: "#333333"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#999999"
                },
                formatter: "{value}"
            },
            interval:80,//设置刻度间距
        },
            {
                type: "category",
                data:['0','0','0','0','0'],
                axisTick: {
                    alignWithLabel: true
                },

                nameTextStyle: {
                    color: "#999999"
                },
                axisLine: {
                    lineStyle: {
                        color: "#333333"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#999999"
                    },
                    formatter: "{value}%"
                }
            }
        ],
        series: [
            //     {//顶部椭圆突出显示点
            //     name: "",
            //     type: "pictorialBar",
            //     symbolSize: [10, 20],
            //     symbolOffset: [3,0],
            //     symbolPosition: "end",
            //     z: 12,
            //     xAxisIndex: 0,
            //     label: {
            //         normal: {
            //             show: true,
            //             position: "right",
            //             formatter: "{c}%"
            //         }
            //     },
            //     data: rate,//以y轴为基准的右侧提示数据,存放百分比---改
            // },
            {//数据柱
                type: "bar",
                itemStyle: {
                    normal: {
                        opacity: 1,
                        // barBorderRadius: 5,
                    }
                },
                barWidth: "10",//数据柱样式
                data: ['0','0','0','0','0'],//数据柱以y轴为基准数---改
                markLine: {
                    label: {
                        position: "middle",
                        formatter: "{b}",
                    },

                }
            }]
    }
    partThreeLeft.setOption(option);
}
