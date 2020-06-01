
//倒计时
var countDownAll//定义一个全局变量,用来转换清除内部定时器
function countDown(){
    var m = 5;  //分
    var s = 00;  //秒
    var countdown = document.getElementsByClassName("countdown");
    var len=countdown.length
    function getCountdown (){
        var htm=m+'min'
        for(var i=0;i<len;i++){
            countdown[i].innerHTML=htm
        }
        if( m == 0 && s == 0 ){
            var timeMM= document.getElementsByClassName('el-range-input')
            var  texts=timeMM[0].value//开始时间
            var  texte=timeMM[1].value//结束时间
            var textstart=texts+' 00:00:00'
            var textend=texte+' 23:59:59'
            var timetoday= document.getElementsByClassName('el-input__inner')
            var  top=timetoday[0].value//开始时间
            var top_to=top+' 23:55:00'
            var datetop = new Date(top_to.replace(/-/g, '/'));
            var topthis =Date.parse(datetop)
            var to_totop=new Date(topthis-24*3600*1000)
            var dday=to_totop.getDate()
            var mm=(to_totop.getMonth()+1)
            if(dday<10){
                dday='0'+dday
            }
            if(mm<10){
                mm='0'+mm
            }
            var formatwdatetop = to_totop.getFullYear()+'-'+mm+'-'+dday
            var topstarttime=formatwdatetop+' 23:55:00'//开始
            var getTimetop=top.substring(5,10)
            timequeryShow=getTimetop+'日'
            $.ajax({
                type: "post",
                url: "http://152.136.218.252:8123/selectCollapseTime",//启动时间点
                async: true,
                data: {
                    startTime:zeotime_substart,
                    endTime:todayend,
                },
                success: function (data) {
                    todaydateall=[]
                    if(data.state===false){
                        alert('崩溃时间点查询错误')
                    }
                    for (var i = 0; i < data.data.length; i++) {
                        var rq = parseInt(data.data[i].timeNum)
                        todaydateall.push(rq)
                    }
                    $("#page-inner").mLoading("hide");
                }
            });
            $("#page-inner").mLoading("show");
            todaytime(todaydateall,topstarttime,top_to)
            anotherCharts(textstart,textend,ostype)
            m = 5;
            s = 00;
        }else if( m >= 0 ){
            if( s >= 0 && s<59){
                s++;
            }else if( s == 59 ){
                m--;
                s = 00;
            }
        }
    }
    getCountdown();
    countDownAll=setInterval(function(){ getCountdown() },1000);
}
// change()
function onblu(){
    $('#partFourLeft').css('display','none')
    $('#partFiveRight').css('display','none')
    $('#partFiveL').css('display','none')
    $('#partFiveR').css('display','none')
    $('.partThree').css('display','none')
    $('.cpu').css('display','none')
    $('.gpu').css('display','none')
    $('#loaddelay').css('display','block')
    $('#loadcpu').css('display','block')
    $('#loadnet').css('display','block')
    $('#loadgpu').css('display','block')
    $('#loadver').css('display','block')
    $('#loadphone').css('display','block')
    $('#loadfen').css('display','block')
    clearInterval(countDownAll);
    countDown()
    var timeMM= document.getElementsByClassName('el-range-input')
    var  texts=timeMM[0].value//开始时间
    var  texte=timeMM[1].value//结束时间
    var textstart=texts+' 00:00:00'
    var textend=texte+' 23:59:59'
    var totopstart=texte+' 23:55:00'
    var date = new Date(totopstart.replace(/-/g, '/'));
    var thisthis =Date.parse(date)
    var to_to=new Date(thisthis-24*3600*1000)
    var dday=to_to.getDate()
    var mmon=to_to.getMonth()+1
    if(dday<10){
        dday='0'+dday
    }
    if(mmon<10){
        mmon='0'+mmon
    }
    var formatwdate = to_to.getFullYear()+'-'+mmon+'-'+dday
    var starttimetime=formatwdate+' 23:55:00'//开始
    var getTime=texte.substring(5,10)
    showPart(textstart,textend)
    anotherCharts(textstart,textend,ostype)

}
function onbluTop(){
    $('#chartTop').css('display','none')
    $('#loadstart').css('display','block')

    clearInterval(countDownAll);
    countDown()
    var timeMM= document.getElementsByClassName('el-input__inner')
    var  texts=timeMM[0].value//开始时间
    // var  texte=timeMM[1].value//结束时间
    var textstart=texts+' 00:00:00'
    var textend=texts+' 23:59:59'
    var totopstart=texts+' 23:55:00'
    var date = new Date(totopstart.replace(/-/g, '/'));
    var thisthis =Date.parse(date)
    var to_to=new Date(thisthis-24*3600*1000)
    var dd=to_to.getDate()
    var mmon=to_to.getMonth()+1
    if(dd<10){
        dd='0'+dd
    }
    if(mmon<10){
        mmon='0'+mmon
    }
    var formatwdate = to_to.getFullYear()+'-'+mmon+'-'+dd
    var starttimetime=formatwdate+' 23:55:00'//开始
    var getTime=texts.substring(5,10)
    timequeryShow=getTime+'日'

    $(document.body).mLoading("show")
    todaytime(todaydateall,starttimetime,totopstart)
    $(document.body).mLoading("hide")
    // anotherCharts(textstart,textend,ostype)
}
// function onblu(){
//     var timeMM= document.getElementsByClassName('el-range-input')
//     var  texts=timeMM[0].value//开始时间
//     var  texte=timeMM[1].value//结束时间
//
// }
var ostype=0
function change() {
    // $("#page-wrapper").mLoading("show");
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
				buttonWidth: '70%',
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
homedata()
var todaydateall=[]
var timequeryShow
var zeotime_substart
var todayend
function homedata() {
    ostype=0
    var date=new Date()
    var today=new Date();
    var ty = today.getFullYear();
    var tm = today.getMonth()+1;
    var td = today.getDate();
    if(td<10){
        td='0'+td
    }
    if(tm<10){
        tm='0'+tm
    }
    var gettoday=ty+'-'+tm+'-'+td;//今天
    todayend=gettoday+' 23:55:00'//今天结束
    var defaltOneTime=gettoday+' 23:59:59'//今天结束
    var date = new Date();
    var lastday= new Date(date-24*3600*1000*2);
    var oneweekdate = new Date(date-30*24*3600*1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth()+1;
    var d = oneweekdate.getDate();
    if(d<10){
        d='0'+d
    }
    if(m<10){
        m='0'+m
    }
    var formatwdate = y+'-'+m+'-'+d;//8天前
    var yn = lastday.getFullYear();
    var mn = lastday.getMonth()+1;
    var dn = lastday.getDate();
    if(dn<10){
        dn='0'+dn
    }
    if(mn<10){
        mn='0'+mn
    }
    var formatwdateNow = yn+'-'+mn+'-'+dn;
    var text1=formatwdate
    var textTime=formatwdateNow
    var defaltDuraTime=text1+' 00:00:00'//一周前
    var zeotime=new Date(date-24*3600*1000);
    var zeoy=zeotime.getFullYear();
    var zeom=zeotime.getMonth()+1;
    var zeod=zeotime.getDate();
    if(zeod<10){
        zeod='0'+zeod
    }
    if(zeom<10){
        zeom='0'+zeom
    }
    var zeotime_to=zeoy+'-'+zeom+'-'+zeod
    var yesterdaySt=zeotime_to+' 00:00:00'
    var yesterdayEn=zeotime_to+' 23:59:59'
    zeotime_substart=zeotime_to+' 23:55:00'//昨天
    var zeotime_subend=textTime+' 23:55:00'
    timequeryShow=zeotime_to.substring(5,10)+'日'
    countDown()
    $('#chartTop').css('display','none')
    $('#partFourLeft').css('display','none')
    $('#partFiveRight').css('display','none')
    $('#partFiveL').css('display','none')
    $('#partFiveR').css('display','none')
    $('.partThree').css('display','none')
    $('.cpu').css('display','none')
    $('.gpu').css('display','none')
    $('#loadstart').css('display','block')
    $('#loaddelay').css('display','block')
    $('#loadcpu').css('display','block')
    $('#loadnet').css('display','block')
    $('#loadgpu').css('display','block')
    $('#loadver').css('display','block')
    $('#loadphone').css('display','block')
    $('#loadfen').css('display','block')
	$.ajax({
		type: "post",
		url: "http://152.136.218.252:8123/selectCollapseTime",//启动时间点
		async: true,
		data: {
		    startTime:zeotime_substart,
            endTime:todayend,
		},
		success: function (data) {
            $(document.body).mLoading("hide")
            if(data.state===false){
                alert('崩溃时间点查询错误')
            }
            for (var i = 0; i < data.data.length; i++) {
                var rq = parseInt(data.data[i].timeNum)
                todaydateall.push(rq)
            }
            showPart(defaltDuraTime,defaltOneTime)
            todaytime(todaydateall,zeotime_subend,zeotime_substart)
            anotherCharts(defaltDuraTime,defaltOneTime,ostype)//更新下部图表
		}
	});

}
function showPart(start,end) {
    // var dayday = document.getElementById("query_day");
    // dayday.innerHTML=start.substring(5,10)+'日'
    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseTotal",//启动时间点
        async: true,
        data: {
            startTime:start,
            endTime:end,
        },
        success: function (data) {
            var number = document.getElementById("query_number");
            number.innerHTML=data.data[0].timeNum
        }
    });
}
//更新下部图
function anotherCharts(startTime,endTime,ostype) {
    resolution(startTime,endTime)//分辨率
    phoneBrands(startTime,endTime)//手机品牌
    osVersion(startTime,endTime,ostype)//操作系统版本
    internetCon(startTime,endTime)//网络连接
    storage(startTime,endTime);//运行内存
    cpu(startTime,endTime)//CPU
    gpu(startTime,endTime)//GPU
}

//崩溃时间点数据
function todaytime(datatoday,start,end) {
    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseTime",//启动时间点
        async: true,
        data: {
            startTime:start,
            endTime:end,
        },
        success: function (data) {
            if(data.state===false){
                alert('崩溃时间点查询错误')
            }
            startTime(datatoday,data)
            collapsetable(data)
        }
    });
}
function startTime(valueall,data) {
    $('#loadstart').css('display','none')
    $('#chartTop').css('display','block')
	var chart=null
	var arr = [];
	var arr4 = [];
	for (var i = 0; i < data.data.length; i++) {
		var date=data.data[i].timeCount
		var index=date.indexOf(' ')
		var someDate = date.substring(index,index+6);
		var rq = parseInt(data.data[i].timeNum)
		arr.push(rq)
		arr4.push(someDate)
	}
    chart = Highcharts.chart('chartTop', {
        chart: {
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
            // x: -10,
            // verticalAlign: 'middle',
            // y: 0,
            // style: {
            //     color: '#CCC',
            //     fontWeight:'400',
            //     fontSize:'12',
            // }
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            // plotLines:[{
            //     color:'#707070',            //线的颜色
            //     dashStyle:'longdashdot',//标示线的样式，默认是solid（实线），这里定义为长虚线
            //     value:this,                //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
            //     width:1                 //标示线的宽度，2px
            // }],
            lineWidth:1,
            lineColor:'#333333',
            tickColor:'#333333',
            tickInterval: 12,
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
            shared: true,
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
        },
        yAxis: {
            title: {
                text:' ',
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
            enabled:false
        },
        series: [{
            name:  '今日',
            data: valueall,
            lineWidth: 2,
            color:"#AF611C",
            symbolWidth:35,
            symbol:'circle',
        },
            {
            name: timequeryShow,
            data: arr,
            lineWidth: 2,
            color:"#999999",
            symbolWidth:35,
            symbol:'circle',
        }
        ],
    });
}
function collapsetable(data) {
    $("#real-datatableCol").bootstrapTable('destroy')
    $("#real-tbodyCol").empty();
    for (var i = 0; i < data.data.length; i++) {
        var date=data.data[i].timeCount
        var index=date.indexOf(' ')
        var someDate = date.substring(index,index+6);
        var rq = parseInt(data.data[i].timeNum)
        $("#real-tbodyCol").append(
            "<tr><td>" + someDate +
            "</td><td>" + rq +
            "</td></tr>"
        )
    }
}
//分辨率
function resolution(start,end) {

    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseScreenResolution",//接口-分辨率
        async: true,
        data: {
            startTime:start,
            endTime:end
        },
        success: function (ob) {
            if(ob.state===false){
                alert('分辨率查询错误')
            }
            resoluchart(ob)

        }
    });
}
function resoluchart(data) {
    var partFiveLeft = echarts.init(document.getElementById('partFourLeft'));
    var number=[]
    var range=[]
    var rate=[]
    var acount=0
    for(var i=0;i<data.data.length;i++){
        var num=data.data[i].timeCount
        var ran=data.data[i].timeNum
        acount+=parseInt(ran)
        number.push(num)
        range.push(ran)
    }
    for(var i=0;i<data.data.length;i++){
        if(acount===0){
            rate.push('0.00')
        }
        var ra=(parseInt(data.data[i].timeNum))/acount
        var nn=(ra*100).toFixed(2)
        rate.push(nn)
    }
    var option = {
        title: {
            text: '分辨率',
            left: 'center',
            y:10,
            textStyle:{
                color:'#999999',
                fontSize:12,
                fontWeight:'normal',
            },

        },
        // backgroundColor: "#363636",
        color: "#10CFBD",
        tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
            formatter:function (params) {
                var tipHtml = '';
                tipHtml = '<div style="width:200px;height:40px;line-height:40px;font-size:14px;background: #363F48;padding-left: 10px">'+'<i style="display:inline-block;width:8px;height:8px;background:#10CFBD;border-radius:4px;">'+'</i>'
                    +'<span style="margin-left:10px;color:#fff;font-size:14px;">'+params.name+':'+'</span>'+'<span style="color:#ffffff;margin:0 6px;">'+params.data+'人'+'</span>'+'</div>';
                // +'<div style="padding-left:8px;">'
                // +'<p style="color:#fff;font-size:14px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
                // +'总数：'+'<span style="color:#ffffff;margin:0 6px;">'+params.data['value']+'</span>'+'人'+'</p>'
                // +'</div>';
                // setTimeout(function() {
                //     tooltipCharts(params.name);
                // }, 10);
                return tipHtml;
            }
        },
        grid:{//图表距离外边框的距离
            x:'4%',
            width:'94%',
            height:'82%',
            y:'11%',
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
                    color: "#202020"
                },
                show: true
            }
        },],
        yAxis: [{
            type: "category",
            data: number,
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
        },
            {
                type: "category",
                data:rate,
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
            }],
        series: [{//数据柱
            type: "bar",
            itemStyle: {
                normal: {
                    opacity: 1,
                    // barBorderRadius: 5,
                }
            },
            barWidth: "10",//数据柱样式
            data: range,//数据柱以y轴为基准数---改
            markLine: {
                label: {
                    position: "middle",
                    formatter: "{b}",
                },

            }
        }]
    }
    partFiveLeft.setOption(option);
}
// //手机品牌
function phoneBrands(startTime,endTime) {

    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseBrand",//接口-手机品牌
        async: true,
        data: {
            startTime:startTime,
            endTime:endTime
            // serverId: 300,
            // startTime: text1,
            // endTime:textTime,
        },
        success: function (ob) {
            if(ob.state===false){
                alert('手机品牌查询错误')
            }
            phone(ob)

        }
    });
}
function phone(data) {
    var partThreeRight=echarts.init(document.getElementById('partFiveRight'));
    var phoneB=[]
    var number=[]
    var rate=[]
    var acount=0
    for(var i=0;i<data.data.length;i++){
        var cate=data.data[i].timeCount
        if(cate===null||cate===undefined||cate===''){
            cate='Unknow'
        }
        var num=data.data[i].timeNum
        acount+=parseInt(num)
        phoneB.push(cate)//手机品牌
        number.push(num)//数量
    }
    for(var i=0;i<data.data.length;i++){
        if(acount===0){
            rate.push('0.00')
        }
        var ra=(parseInt(data.data[i].timeNum))/acount
        var nn=(ra*100).toFixed(2)
        rate.push(nn)
    }
// Generate data
    var category = phoneB;//手机品牌
    var option = {
        title: {
            text: '手机品牌',
            left: 'center',
            y: 10,
            textStyle:{
                color:'#999999',
                fontSize:12,
                fontWeight:'normal',
            },

        },
        // backgroundColor: '#363636',
        tooltip: {
            trigger: 'axis',
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
            formatter:function (params){
                var tipHtml = '';
                    tipHtml = '<div style="width:130px;height:70px;font-size:14px;background: #363F48;padding-left: 10px">'
                        +'<span style="color:#fff;font-size:14px;">'+params[0].name+'</span>'+'<br />'
                        +'<i style="display:inline-block;width:8px;height:8px;background:#10CFBD;border-radius:4px;">'+'</i>'+'<span style="color:#ffffff;font-size:14px;margin:0 6px;">'+'数量:  '+params[1].data+'人'+'</span>'+'<br />'
                        +'<i style="display:inline-block;width:8px;height:8px;background:#A873EC;border-radius:4px;">'+'</i>'+'<span style="color:#ffffff;margin:0 6px;">'+'占比:  '+params[0].data+'%'+'</span>'+'</div>';
                    return tipHtml;
            }
        },
        legend: {//图例
            show:false,
        },
        grid:{//图表距离外边框的距离
            x:'5%',
            right:'4%',
            width:'89%',
            height:'75%',
            bottom:'4%',
            y:'12%',
        },
        xAxis: {
            data: category,//x坐标轴刻度
            axisLabel:{
                textStyle: {
                    color: "#999999"
                },
                interval: 0
            },
            axisLine: {
                lineStyle: {//坐标轴样式
                    color: '#333333'
                }
            },
            axisTick:{
                show:false,
            },
        },
        yAxis: [{
            // name:'手机品牌',
            // position: 'left', // 位置靠左
            // nameLocation: 'middle', // 位置居中
            // nameGap: 42, // 与y轴距离
            // nameRotate: 90 ,// 角度
            splitLine: {show: false},//是否显示网格线
            axisLine: {
                lineStyle: {
                    color: '#333333',
                }
            },
            nameTextStyle: {
                color: "#999999"
            },
            axisLabel:{
                textStyle: {
                    color: "#999999"
                },
                formatter:'{value} ',
            }
        },
            {

                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: '#333333',
                    }
                },
                axisLabel:{
                    textStyle: {
                        color: "#999999"
                    },
                    formatter:'{value}%',
                }
            }],
        series: [
            {
                name: '百分比',
                type: 'line',
                smooth: false,//false是指折线是直线而不是圆滑曲线
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize:6,
                yAxisIndex: 1,
                itemStyle: {//折点样式
                    normal: {
                        color:'#A873EC'},
                },
                data: rate
            },
            {
                name: '人数',
                type: 'bar',
                barWidth:10,
                itemStyle: {
                    normal: {
                        // barBorderRadius: 5,
                        color:'#10CFBD'
                    }
                },
                data: number
            }
        ]
    };
    partThreeRight.setOption(option);

}
//操作系统版本
function osVersion(startTime,endTime,ostype) {

    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseSystemVersion",//接口-操作系统版本
        async: true,
        data: {
            startTime:startTime,
            endTime:endTime,
            type:ostype
            // serverId: 300,
            // startTime: text1,
            // endTime:textTime,
        },
        success: function (ob) {
            if(ob.state===false){
                alert('操作系统版本查询错误')
            }
            version(ob)

        }
    });
}
function version(data){
    var partFourRight = echarts.init(document.getElementById('partFiveL'));
    var number=[]
    var range=[]
    var rate=[]
    var acount=0
    for(var i=0;i<data.data.length;i++){
        var num=data.data[i].timeCount
        var ran=data.data[i].timeNum
        acount+=parseInt(ran)
        number.push(num)
        range.push(ran)
    }
    for(var i=0;i<data.data.length;i++){
        if(acount===0){
            rate.push('0.00')
        }
        var ra=(parseInt(data.data[i].timeNum))/acount
        var nn=(ra*100).toFixed(2)
        rate.push(nn)
    }
    var option = {
        title: {
            text: '操作系统版本',
            left: 'center',
            y: 10,
            textStyle:{
                color:'#999999',
                fontSize:12,
                fontWeight:'normal',
            },

        },
        // backgroundColor: "#363636",
        color: "#10CFBD",
        tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
            formatter:function (params) {
                var tipHtml = '';
                tipHtml = '<div style="width:200px;height:40px;line-height:40px;font-size:14px;background: #363F48;padding-left: 10px">'+'<i style="display:inline-block;width:8px;height:8px;background:#10CFBD;border-radius:4px;">'+'</i>'
                    +'<span style="margin-left:10px;color:#fff;font-size:14px;">'+params.name+':'+'</span>'+'<span style="color:#ffffff;margin:0 6px;">'+params.data+'人'+'</span>'+'</div>';
                return tipHtml;
            }},
        grid:{//图表距离外边框的距离
            x:'3%',
            width:'94%',
            height:'85%',
            y:'12%',
            containLabel: true
        },
        xAxis: [{
            type: "value",
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
                    color: "#202020"
                },
                show: true
            }
        },],
        yAxis: [{
            type: "category",
            data: number,
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
        },
            {
                type: "category",
                data:rate,
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
            }],
        series: [{//数据柱
            type: "bar",
            itemStyle: {
                normal: {
                    opacity: 1,
                    // barBorderRadius: 5,
                }
            },
            barWidth: "10",//数据柱样式
            data: range,//数据柱以y轴为基准数
            markLine: {
                label: {
                    position: "middle",
                    formatter: "{b}",
                },

            }
        }]
    }
    partFourRight.setOption(option);
}
//网络连接
function  internetCon(startTime,endTime) {

    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseNetWork",//网络连接
        async: true,
        data: {
            startTime:startTime,
            endTime:endTime
        },
        success: function (ob) {
            if(ob.state===false){
                alert('网络连接查询错误')
            }
            internet(ob)

        }
    });
}
function internet(data) {
    var datashow=[]
    for(var i=0;i<data.data.length;i++){
        var nameNet=data.data[i].timeCount
        if(nameNet==='0'||nameNet===''||nameNet===undefined||nameNet===null){
            nameNet='Unkown'
        }else if(nameNet==='1'){
            nameNet='Wifi'
        }else if(nameNet==='2'){
            nameNet='2G'
        }else if(nameNet==='3'){
            nameNet='3G'
        }else if(nameNet==='4'){
            nameNet='4G'
        }
        var num=data.data[i].timeNum
        var obj={}
        obj.value=num
        obj.name=nameNet
        datashow.push(obj)
    }
    var partFiveRight = echarts.init(document.getElementById('partFiveR'));
    var option = {
        title: {
            text: '网络连接',
            left: 'center',
            y: 10,
            textStyle:{
                color:'#999999',
                fontSize:12,
                fontWeight:'normal',
            },

        },
        // backgroundColor:'#363636',
        tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
            formatter:function (params) {
                var tipHtml = '';
                tipHtml =
                    '<div style="width:200px;height:40px;line-height:40px;background:#363F48;padding-left: 5px">'+'<div style="width: 100%;height: 100%">'
                    +'<span style="margin-left:5px;color:#fff;font-size:14px;">'+params.name+': '+params.value+'</span>'+'<span style="color:#ffffff;margin:0 3px;">'+'   占比: '+params.percent+'% '+'</span>'+'</div>'+'</div>'
                return tipHtml;
            }
            // formatter: "{a}:{b} <br/>{c}人  ({d}%)"
        },
        color:['#9F17FF','#00FFA8', '#FFE400','#FE2C8A','#ACA7F1'],
        legend: {
            itemWidth: 20,
            itemHeight: 8,
            orient: 'horizontal',
            left:'center',
            bottom:20,
            textStyle: {
                color: '#999999'
            },
            data:['Wifi','2G','3G','4G','Unkown'],
        },
        series: [
            // {
            //     name:'访问来源',
            //     type:'pie',
            //     selectedMode: 'single',
            //     radius: [0, '30%'],
            //
            //     label: {
            //         normal: {
            //             position: 'inner'
            //         }
            //     },
            //     labelLine: {
            //         normal: {
            //             show: false
            //         }
            //     },
            //     data:[
            //         {value:335, name:'直达', selected:true},
            //         {value:679, name:'营销广告'},
            //         {value:1548, name:'搜索引擎'}
            //     ]
            // },
            {
                name:' 网络来源',
                type:'pie',
                radius: ['35%', '55%'],
                label: {
                    normal: {
                        formatter: ' {b}：{c}   '+'占比'+'：{d}%  ',
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 33,
                                align: 'center'
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 44
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data:datashow
            }
        ]
    };
    partFiveRight.setOption(option);
}
//内存
function storage(startTime,endTime) {

    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseRunMemory",//接口-内存
        async: true,
        data: {
            startTime:startTime,
            endTime:endTime,
        },
        success: function (ob) {
            if(ob.state===false){
                alert('内存查询错误')
            }
            save(ob)
            savetable(ob)

        }
    });
}
function save(data) {
    var partFourLeft = echarts.init(document.getElementById('partThreeLeft'));
    var number=[]
    var range=[]
    var rate=[]
    var acount=0
    for(var i=0;i<data.data.length;i++){
        var num=data.data[i].timeCount
        var ran=data.data[i].timeNum
        acount+=parseInt(ran)
        number.push(num)
        range.push(ran)
    }
    for(var i=0;i<data.data.length;i++){
        if(acount===0){
            rate.push('0.00')
        }
        var ra=(parseInt(data.data[i].timeNum))/acount
        var nn=(ra*100).toFixed(2)
        rate.push(nn)
    }
    var option = {
        title: {
            text: ' ',
        },
        // backgroundColor: "#363636",
        color: "#10CFBD",
        tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
            formatter:function (params) {
                var tipHtml = '';
                tipHtml = '<div style="width:200px;height:40px;line-height:40px;font-size:14px;background: #363F48;padding-left: 10px">'+'<i style="display:inline-block;width:8px;height:8px;background:#10CFBD;border-radius:4px;">'+'</i>'
                    +'<span style="margin-left:10px;color:#fff;font-size:14px;">'+params.name+'G: '+'</span>'+'<span style="color:#ffffff;margin:0 6px;">'+params.data+'人'+'</span>'+'</div>';
                return tipHtml;
            }
        },
        grid:{//图表距离外边框的距离
            x:'2.5%',
            width:'95.5%',
            height:'92%',
            y:'2%',
            containLabel: true
        },
        xAxis: [{
            type: "value",
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
                    color: "#202020"
                },
                show: true
            }
        },],
        yAxis: [{
            type: "category",
            data: number,
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
                formatter: "{value} G"
            },
        },
            {
                type: "category",
                data:rate,
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
            }],
        series: [{//数据柱
            type: "bar",
            itemStyle: {
                normal: {
                    opacity: 1,
                    // barBorderRadius: 5,
                }
            },
            barWidth: "10",//数据柱样式
            data: range,//数据柱以y轴为基准数
            markLine: {
                label: {
                    position: "middle",
                    formatter: "{b}",
                },

            }
        }]
    }
    partFourLeft.setOption(option);
}
function savetable(data) {
    $("#real-datatableSave").bootstrapTable('destroy')
    $("#real-tbodySave").empty();
    for (var i = 0; i < data.data.length; i++) {
        var someDate = data.data[i].timeCount
        var rq = parseInt(data.data[i].timeNum)
        $("#real-tbodySave").append(
            "<tr><td>" + someDate +
            "</td><td>" + rq +
            "</td></tr>"
        )
    }
    // $("#real-datatableSave").bootstrapTable({
    //     method: 'post',
    //     cache: false,
    //     height: 560,
    //     striped: true,
    //     pagination: false,
    //     pageSize: 20,
    //     pageNumber: 1,
    //     pageList: [10, 20, 50, 100, 200, 500],
    //     sidePagination: 'server',
    //     search: false,
    //     showColumns: false,
    //     showRefresh: false,
    //     showExport: false,
    //     exportTypes: ['csv', 'txt', 'xml'],
    //     search: false,
    //     clickToSelect: false,
    // })
}
//CPU
function cpu(startTime,endTime) {
    var index=startTime.indexOf(' ')
    var start=startTime.substring(0,index)
    var indexte=endTime.indexOf(' ')
    var end=endTime.substring(0,indexte)
    var number=parseInt((Date.parse(end)-Date.parse(start))/(1000*60*60*24))
    var num=number+1

    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseCpu",//接口-CPU
        async: true,
        data: {
            startTime:startTime,
            endTime:endTime,
            number:num
        },
        success: function (ob) {
            if(ob.state===false){
                alert('CPU查询错误')
            }
            cpuchart(ob,num)
            $(document.body).mLoading("hide")
        }
    });
}
function cpuchart(data,num) {
    echarts.init(document.getElementById('chartCpu')).dispose();//销毁前一个实例
    var chartCpu = echarts.init(document.getElementById('chartCpu'));
    vm_collapse.cpulist=[]
    var gpuname=[]
    var numberzoo=[]
    var numberone=[]
    var numbertwo=[]
    var numberthree=[]
    var numberfour=[]
    var numberfive=[]
    var numbersix=[]
    var numberseven=[]
    var numbereight=[]
    var numbernine=[]
    var date=[]
    var numon=0
    var numtw=0
    var numth=0
    var numfo=0
    var numfi=0
    var numsi=0
    var numse=0
    var numei=0
    var numni=0
    var numte=0
    var accountall=0
    for(var i=0;i<data.data[0].length;i++){
        date.push(data.data[0][i].timeTime)
    }
    for(var i=0;i<data.data.length;i++){
        gpuname.push(data.data[i][0].timeCount)
    }
    var leng=gpuname.length
    if(leng<10){
        for(var j=0;j<(10-leng);j++){
            gpuname.push('未知')
        }
    }
    if(data.data[0]){
        for(var i=0;i<data.data[0].length;i++){
            numberzoo.push(parseInt(data.data[0][i].timeNum))
        }
    }else{
        for(var i=0;i<num;i++){
            numberzoo.push(0)
        }
    }
    if(data.data[1]){
        for(var i=0;i<data.data[1].length;i++){
            numberone.push(parseInt(data.data[1][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberone.push(0)
        }
    }
    if(data.data[2]){
        for(var i=0;i<data.data[2].length;i++){
            numbertwo.push(parseInt(data.data[2][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numbertwo.push(0)
        }
    }
    if(data.data[3]){
        for(var i=0;i<data.data[3].length;i++){
            numberthree.push(parseInt(data.data[3][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberthree.push(0)
        }
    }
    if(data.data[4]){
        for(var i=0;i<data.data[4].length;i++){
            numberfour.push(parseInt(data.data[4][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberfour.push(0)
        }
    }
    if(data.data[5]){
        for(var i=0;i<data.data[5].length;i++){
            numberfive.push(parseInt(data.data[5][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberfive.push(0)
        }
    }
    if(data.data[6]){
        for(var i=0;i<data.data[6].length;i++){
            numbersix.push(parseInt(data.data[6][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numbersix.push(0)
        }
    }
    if(data.data[7]){
        for(var i=0;i<data.data[7].length;i++){
            numberseven.push(parseInt(data.data[7][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberseven.push(0)
        }
    }
    if(data.data[8]){
        for(var i=0;i<data.data[8].length;i++){
            numbereight.push(parseInt(data.data[8][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numbereight.push(0)
        }
    }
    if(data.data[9]){
        for(var i=0;i<data.data[9].length;i++){
            numbernine.push(parseInt(data.data[9][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numbernine.push(0)
        }
    }
    for(var i=0;i<numberzoo.length;i++){
        accountall+=numbernine[i]+numbereight[i]+numberseven[i]+numbersix[i]+numberfive[i]+numberfour[i]+numberthree[i]+numbertwo[i]+numberone[i]+numberzoo[i]
        numon+=numberzoo[i]
        numtw+=numberone[i]
        numth+=numbertwo[i]
        numfo+=numberthree[i]
        numfi+=numberfour[i]
        numsi+=numberfive[i]
        numse+=numbersix[i]
        numei+=numberseven[i]
        numni+=numbereight[i]
        numte+=numbernine[i]
    }
    var number=[numon,numtw,numth,numfo,numfi,numsi,numse,numei,numni,numte]
    console.log(accountall,numon,numtw,numth,numfo,numfi,numsi,numse,numei,numni,numte)
    var serieszoo=gpuname[0]
    var seriesone=gpuname[1]
    var seriestwo=gpuname[2]
    var seriesthree=gpuname[3]
    var seriesfour=gpuname[4]
    var seriesfive=gpuname[5]
    var seriessix=gpuname[6]
    var seriesseven=gpuname[7]
    var serieseight=gpuname[8]
    var seriesnine=gpuname[9]
    var cpu_List=[]
    var percentData=[]
    if(accountall===0){
       for(var i=0;i<10;i++ ){
           var obj={}
           obj.name=gpuname[i]
           obj.percent='0.00%'
           percentData.push('0.00')
           cpu_List.push(obj)
       }
    }else{
        for(var i=0;i<10;i++){
            var obj={}
            obj.name=gpuname[i]
            obj.percent=((number[i]/accountall)*100).toFixed(2)+'%'
            percentData.push(((number[i]/accountall)*100).toFixed(2))
            cpu_List.push(obj)
        }
    }
    vm_collapse.cpulist=cpu_List
    expCPU(gpuname,percentData)
    option = {
        title: {
            text: ' ',
        },
        tooltip : {
            trigger: 'axis',
            borderColor:'#363F48',
            padding:0,
            backgroundColor:'#363F48',
            textStyle: {
                fontSize:12,
                // color: '#ffffff',
                align:'left',
                // fontSize:'12px',
            },
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                lineStyle:{
                    color:'#707070'
                },
                itemStyle: {normal: {
                        borderColor:'#ffffff',
                    }},
            }
        },
        legend: {
            show:false,
        },
        toolbox: {
            show:false,
        },
        grid: {
            left: '2%',
            width:'95%',
            height:'94%',
            top:"2%",
            containLabel: true

        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                data :date,
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
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitNumber:4,
                axisTick: {
                    alignWithLabel: true
                },
                nameTextStyle: {
                    color: "#999999"
                },
                splitLine: {
                    lineStyle: {
                        color: "#202020",
                        width:2,
                    }
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
                },
            }
        ],
        series : [
            {
                name:serieszoo,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(16,207,189,0.5)",
                        lineStyle: {
                            color: "#10cfbd"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#10cfbd",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#10cfbd"
                        }
                    }},
                symbol: 'circle',
                data:numberzoo
            },
            {
                name:seriesone,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(245,87,83,0.5)",
                        lineStyle: {
                            color: "#f55753"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#f55753",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#f55753"
                        }
                    }},
                symbol: 'circle',
                data:numberone
            },
            {
                name:seriestwo,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(168,115,236,0.5)",
                        lineStyle: {
                            color: "#a873ec"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#a873ec",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#a873ec"
                        }
                    }},
                symbol: 'circle',
                data:numbertwo
            },
            {
                name:seriesthree,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(207,16,162,0.5)",
                        lineStyle: {
                            color: "#cf10a2"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#cf10a2",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#cf10a2"
                        }
                    }},
                symbol: 'circle',
                data:numberthree
            },
            {
                name:seriesfour,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(66,226,79,0.5)",
                        lineStyle: {
                            color: "#42e24f"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#42e24f",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#42e24f"
                        }
                    }},
                symbol: 'circle',
                data:numberfour
            },
            {
                name:seriesfive,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(214,115,27,0.5)",
                        lineStyle: {
                            color: "#d6731b"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#d6731b",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#d6731b"
                        }
                    }},
                symbol: 'circle',
                data:numberfive
            },
            {
                name:seriessix,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(112,149,242,0.5)",
                        lineStyle: {
                            color: "#7095f2"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#7095f2",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#7095f2"
                        }
                    }},
                symbol: 'circle',
                data:numbersix
            },
            {
                name:seriesseven,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(37,64,119,0.5)",
                        lineStyle: {
                            color: "#254077"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#254077",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#254077"
                        }
                    }},
                symbol: 'circle',
                data:numberseven
            },
            {
                name:serieseight,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(5,73,243,0.5)",
                        lineStyle: {
                            color: "#0549f3"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#0549f3",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#0549f3"
                        }
                    }},
                symbol: 'circle',
                data:numbereight
            },
            {
                name:seriesnine,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(174,169,35,0.5)",
                        lineStyle: {
                            color: "#aea923"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#aea923",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#aea923"
                        }
                    }},
                symbol: 'circle',
                data:numbernine
            },
        ]
    };
    chartCpu.setOption(option);
}
function expCPU(name,percent) {
    $("#real-datatableCPU").bootstrapTable('destroy')
    $("#real-tbodyCPU").empty();
    for (var i = 0; i < name.length; i++) {
        var date=name[i]
        var rq = percent[i]
        $("#real-tbodyCPU").append(
            "<tr><td>" + date +"</td><td>" + rq +
            "</td></tr>"
        )
    }
}
//GPU
function gpu(startTime,endTime) {
    var index=startTime.indexOf(' ')
    var start=startTime.substring(0,index)
    var indexte=endTime.indexOf(' ')
    var end=endTime.substring(0,indexte)
    var number=parseInt((Date.parse(end)-Date.parse(start))/(1000*60*60*24))
    var num=number+1

    $.ajax({
        type: "post",
        url: "http://152.136.218.252:8123/selectCollapseGpu",//接口-GPU
        async: true,
        data: {
            startTime:startTime,
            endTime:endTime,
            number:num
        },
        success: function (ob) {
            if(ob.state===false){
                alert('GPU查询错误')
            }
            console.log(ob)
            gpucharts(ob,num)

        }
    });
}
function gpucharts(data,num) {
    $('#loaddelay').css('display','none')
    $('#loadcpu').css('display','none')
    $('#loadnet').css('display','none')
    $('#loadgpu').css('display','none')
    $('#loadver').css('display','none')
    $('#loadphone').css('display','none')
    $('#loadfen').css('display','none')
    $('#partFourLeft').css('display','block')
    $('#partFiveRight').css('display','block')
    $('#partFiveL').css('display','block')
    $('#partFiveR').css('display','block')
    $('.partThree').css('display','block')
    $('.cpu').css('display','block')
    $('.gpu').css('display','block')
    echarts.init(document.getElementById('chartGPU')).dispose();//销毁前一个实例
    var chartGPU = echarts.init(document.getElementById('chartGPU'));
    vm_collapse.gpulist=[]
    var gpuname=[]
    var numberzoo=[]
    var numberone=[]
    var numbertwo=[]
    var numberthree=[]
    var numberfour=[]
    var numberfive=[]
    var numbersix=[]
    var numberseven=[]
    var numbereight=[]
    var numbernine=[]
    var date=[]
    var numon=0
    var numtw=0
    var numth=0
    var numfo=0
    var numfi=0
    var numsi=0
    var numse=0
    var numei=0
    var numni=0
    var numte=0
    var accountall=0
    for(var i=0;i<data.data[0].length;i++){
        date.push(data.data[0][i].timeTime)
    }
    for(var i=0;i<data.data.length;i++){
        gpuname.push(data.data[i][0].timeCount)
    }
    var leng=gpuname.length
    if(leng<10){
        for(var j=0;j<(10-leng);j++){
            gpuname.push('未知')
        }
    }
    if(data.data[0]){
        for(var i=0;i<data.data[0].length;i++){
            numberzoo.push(parseInt(data.data[0][i].timeNum))
        }
    }else{
        for(var i=0;i<num;i++){
            numberzoo.push(0)
        }
    }
    if(data.data[1]){
        for(var i=0;i<data.data[1].length;i++){
            numberone.push(parseInt(data.data[1][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberone.push(0)
        }
    }
    if(data.data[2]){
        for(var i=0;i<data.data[2].length;i++){
            numbertwo.push(parseInt(data.data[2][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numbertwo.push(0)
        }
    }
    if(data.data[3]){
        for(var i=0;i<data.data[3].length;i++){
            numberthree.push(parseInt(data.data[3][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberthree.push(0)
        }
    }
    if(data.data[4]){
        for(var i=0;i<data.data[4].length;i++){
            numberfour.push(parseInt(data.data[4][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberfour.push(0)
        }
    }
    if(data.data[5]){
        for(var i=0;i<data.data[5].length;i++){
            numberfive.push(parseInt(data.data[5][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberfive.push(0)
        }
    }
    if(data.data[6]){
        for(var i=0;i<data.data[6].length;i++){
            numbersix.push(parseInt(data.data[6][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numbersix.push(0)
        }
    }
    if(data.data[7]){
        for(var i=0;i<data.data[7].length;i++){
            numberseven.push(parseInt(data.data[7][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numberseven.push(0)
        }
    }
    if(data.data[8]){
        for(var i=0;i<data.data[8].length;i++){
            numbereight.push(parseInt(data.data[8][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numbereight.push(0)
        }
    }
    if(data.data[9]){
        for(var i=0;i<data.data[9].length;i++){
            numbernine.push(parseInt(data.data[9][i].timeNum))
        }
    }else{
        for(var i=0;i<numberzoo.length;i++){
            numbernine.push(0)
        }
    }
    for(var i=0;i<numberzoo.length;i++){
        accountall+=numbernine[i]+numbereight[i]+numberseven[i]+numbersix[i]+numberfive[i]+numberfour[i]+numberthree[i]+numbertwo[i]+numberone[i]+numberzoo[i]
        numon+=numberzoo[i]
        numtw+=numberone[i]
        numth+=numbertwo[i]
        numfo+=numberthree[i]
        numfi+=numberfour[i]
        numsi+=numberfive[i]
        numse+=numbersix[i]
        numei+=numberseven[i]
        numni+=numbereight[i]
        numte+=numbernine[i]
    }
    var number=[numon,numtw,numth,numfo,numfi,numsi,numse,numei,numni,numte]
    var serieszoo=gpuname[0]
    var seriesone=gpuname[1]
    var seriestwo=gpuname[2]
    var seriesthree=gpuname[3]
    var seriesfour=gpuname[4]
    var seriesfive=gpuname[5]
    var seriessix=gpuname[6]
    var seriesseven=gpuname[7]
    var serieseight=gpuname[8]
    var seriesnine=gpuname[9]
    var cpu_List=[]
    var percentData=[]
    if(accountall===0){
        for(var i=0;i<10;i++ ){
            var obj={}
            obj.name=gpuname[i]
            obj.percent='0.00%'
            percentData.push('0.00')
            cpu_List.push(obj)
        }
    }else{
        for(var i=0;i<10;i++){
            var obj={}
            obj.name=gpuname[i]
            obj.percent=((number[i]/accountall)*100).toFixed(2)+'%'
            percentData.push(((number[i]/accountall)*100).toFixed(2))
            cpu_List.push(obj)
        }
    }
    vm_collapse.gpulist=cpu_List
    expGPU(gpuname,percentData)
    option = {
        title: {
            text: ' ',
        },
        tooltip : {
            trigger: 'axis',
            borderColor:'#363F48',
            padding:0,
            backgroundColor:'#363F48',
            textStyle: {
                fontSize:12,
                // color: '#ffffff',
                align:'left',
                // fontSize:'12px',
            },
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                lineStyle:{
                    color:'#707070'
                },
                itemStyle: {normal: {
                        borderColor:'#ffffff',
                    }},
            }
        },
        legend: {
            show:false,
        },
        toolbox: {
            show:false,
        },
        grid: {
            left: '2%',
            width:'95%',
            height:'94%',
            top:"2%",
            containLabel: true

        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                data :date,
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
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitNumber:4,
                axisTick: {
                    alignWithLabel: true
                },
                nameTextStyle: {
                    color: "#999999"
                },
                splitLine: {
                    lineStyle: {
                        color: "#202020",
                        width:2,
                    }
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
                },
            }
        ],
        series : [
            {
                name:serieszoo,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(16,207,189,0.5)",
                        lineStyle: {
                            color: "#10cfbd"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#10cfbd",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#10cfbd"
                        }
                    }},
                symbol: 'circle',
                data:numberzoo
            },
            {
                name:seriesone,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(245,87,83,0.5)",
                        lineStyle: {
                            color: "#f55753"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#f55753",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#f55753"
                        }
                    }},
                symbol: 'circle',
                data:numberone
            },
            {
                name:seriestwo,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(168,115,236,0.5)",
                        lineStyle: {
                            color: "#a873ec"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#a873ec",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#a873ec"
                        }
                    }},
                symbol: 'circle',
                data:numbertwo
            },
            {
                name:seriesthree,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(207,16,162,0.5)",
                        lineStyle: {
                            color: "#cf10a2"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#cf10a2",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#cf10a2"
                        }
                    }},
                symbol: 'circle',
                data:numberthree
            },
            {
                name:seriesfour,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(66,226,79,0.5)",
                        lineStyle: {
                            color: "#42e24f"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#42e24f",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#42e24f"
                        }
                    }},
                symbol: 'circle',
                data:numberfour
            },
            {
                name:seriesfive,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(214,115,27,0.5)",
                        lineStyle: {
                            color: "#d6731b"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#d6731b",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#d6731b"
                        }
                    }},
                symbol: 'circle',
                data:numberfive
            },
            {
                name:seriessix,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(112,149,242,0.5)",
                        lineStyle: {
                            color: "#7095f2"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#7095f2",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#7095f2"
                        }
                    }},
                symbol: 'circle',
                data:numbersix
            },
            {
                name:seriesseven,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(37,64,119,0.5)",
                        lineStyle: {
                            color: "#254077"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#254077",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#254077"
                        }
                    }},
                symbol: 'circle',
                data:numberseven
            },
            {
                name:serieseight,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(5,73,243,0.5)",
                        lineStyle: {
                            color: "#0549f3"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#0549f3",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#0549f3"
                        }
                    }},
                symbol: 'circle',
                data:numbereight
            },
            {
                name:seriesnine,
                type:'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: "rgba(174,169,35,0.5)",
                        lineStyle: {
                            color: "#aea923"
                        }
                    }},
                itemStyle: {normal: {
                        color: "#aea923",
                        // borderColor:'#ffffff',
                        lineStyle: {
                            color: "#aea923"
                        }
                    }},
                symbol: 'circle',
                data:numbernine
            },
        ]
    };
    chartGPU.setOption(option);
}
function expGPU(name,percent) {
    $("#real-datatableGPU").bootstrapTable('destroy')
    $("#real-tbodyGPU").empty();
    for (var i = 0; i < name.length; i++) {
        var date=name[i]
        var rq = percent[i]
        $("#real-tbodyGPU").append(
            "<tr><td>" + date +"</td><td>" + rq +
            "</td></tr>"
        )
    }
}
//启动时间点图表单独查询
// function querytime(value) {
//     clearInterval(countDownAll);
//     countDown()
//     var endtimetime=value+' 23:54:59'//结束
//     var date = new Date(endtimetime.replace(/-/g, '/'));
//     var thisthis =Date.parse(date)
//     var to_to=new Date(thisthis-24*3600*1000)
//     var formatwdate = to_to.getFullYear()+'-'+(to_to.getMonth()+1)+'-'+to_to.getDate()
//     var starttimetime=formatwdate+' 23:55:00'//开始
//     var getTime=value.substring(5,10)
//     timequeryShow=getTime+'日'
//     $("#page-inner").mLoading("show");
//     $.ajax({
//         type: "post",
//         url: "http://152.136.218.252:8123/selectStartTime",//启动时间点
//         async: true,
//         data: {
//             startTime:starttimetime,
//             endTime:endtimetime
//         },
//         success: function (ob) {
//             startTime(todaydateall,ob);//启动时间点
//             $("#page-inner").mLoading("hide");
//         }
//     });
// }
// function querydurationTime(valuestart,valueend) {
//     clearInterval(countDownAll);
//     countDown()
//     var  textst=valuestart//开始时间
//     var  texten=valueend//结束时间
//     var starttime=textst+' 00:00:00'//开始
//     var endtime=texten+' 23:59:59'//结束
//     anotherCharts(starttime,endtime)
// }
