function today() { //构建方法
	var today = new Date(); //new 出当前时间
    today.setTime(today.getTime()-24*60*60*1000)
	var h = today.getFullYear(); //获取年
	var m = today.getMonth() + 1; //获取月
	var d = today.getDate(); //获取日
	if (m < 10) {
		m = "0" + m
	}
	if (d < 10) {
		d = "0" + d
	}
	return h + "-" + m + "-" + d; //返回 年-月-日
};
var time=today()
var dataTodayTop
var dataTodayBottom
var dataDateTop
var dataDateBottom
//在线刷新
function refreshtop(time) {
    $.ajax({
        type: "post",
        url: "../queryRealTimeByRedis.action",
        async: true,
        data:{
            serverId: 300,
            startTime: time,
            endTime:time
        },
        success: function (ob) {
            dataTodayTop=ob
            mostAvg(ob)
            topTarget(dataDateTop,ob)//在线图形
        }
    });
}
//下部刷新
function refreshanother(time) {
    $.ajax({
        type: "post",
        url: "../queryRealTimeByRedis.action",
        async: true,
        data:{
            serverId: 300,
            startTime: time,
            endTime:time
        },
        success: function (ob) {
            numberToday(ob)
            dataTodayBottom=ob
            AddUser(dataDateBottom,ob);//今日新增
            OfficaNum(dataDateBottom,ob);//今日活跃
            active(dataDateBottom,ob);//今日首次登陆
            PayMoney(dataDateBottom,ob);//今日付费总金额
            PayNum(dataDateBottom,ob);//今日付费人数
            waitNow(dataDateBottom,ob);//当前留存
        }
    });
}
//document.getElementById("in1").value = today();
function innite1(time){
    var query=time.substring(5)
    document.getElementById('daydayO').innerText=query+'日:'
    document.getElementById('daydayT').innerText=query+'日:'
    document.getElementById('daydayTh').innerText=query+'日:'
    document.getElementById('daydayF').innerText=query+'日:'
    document.getElementById('daydayFi').innerText=query+'日:'
    document.getElementById('daydayS').innerText=query+'日:'
}
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
            // $(document.body).mLoading("show")
            var timeMM= document.getElementsByClassName('el-input__inner')
            var  texts=timeMM[0].value//上时间
            var  texte=timeMM[1].value//下时间
            innite1(texte)
            refreshtop(texts)
            refreshanother(texte)
            // $(document.body).mLoading("hide")
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
var lastNew
change()
function change() {
    $('#districtNext').css('display','block')
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
            for (var i = 0; i < obj.data.length; i++) {
                $("#district").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
            }
            $("#districtNext").each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#districtNext').multiselect("destroy").multiselect({
                buttonWidth: '80%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 1,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有区服',
            });
            homedata1()
        }
    });
}
function homedata1() {
    $('#contenton').css('background','#202020')
    $('#contentzoo').css('background','#202020')
    $('#loadres').css('display','block')
    $('#loadAdd').css('display','block')
    countDown()
    var thistime=time//昨天
    innite1(thistime)
    $.ajax({
        type: "post",
        url: "../queryRealTimeByDB.action",
        async: true,
        data:{
            serverId: 300,
            startTime: thistime,
            endTime:thistime
        },
        success: function (ob) {
            // base = ob;
            dataDateTop=ob
            dataDateBottom=ob
            todaydata(ob)
            sample(ob,thistime)//拿平均值
            timeshowFun(thistime)//tab栏时间
            topTable(ob)//在线表格
            // timepicker(thistime)
        }
    });
}
function  todaydata(datalast) {
    var date=new Date()
    date.setTime(date.getTime())
    var h = date.getFullYear(); //获取年
    var m = date.getMonth() + 1; //获取月
    var d = date.getDate(); //获取日
    if (m < 10) {
        m = "0" + m
    }
    if (d < 10) {
        d = "0" + d
    }
    var thistime=h+'-'+m+'-'+d//今天
    $.ajax({
        type: "post",
        url: "../queryRealTimeByRedis.action",
        async: true,
        data:{
            serverId: 300,
            startTime: thistime,
            endTime:thistime
        },
        success: function (ob) {
            dataTodayTop=ob
            dataTodayBottom=ob
            mostAvg(ob)
            numberToday(ob)
            $('#loadAdd').css('display','none')
            $('#div-T').css('display','block')
            $('#contenton').css('background','#363636')
            topTarget(datalast,ob)//在线图形
          setPar(datalast,ob);//更新下部分数据
        }
    });
}
//发送ajax请求 更新下部分数据
function HistoryData(newdata) {
    $('#contenfour').css('background','#202020')
    $('#contentzoo').css('background','#202020')
    $('#content_one').css('background','#202020')
    $('#contentwo').css('background','#202020')
    $('#contenthree').css('background','#202020')
    $('#contenfive').css('background','#202020')
    $('#div-A').css('display','none')
    $('#div-one').css('display','none')
    $('#div-two').css('display','none')
    $('#div-three').css('display','none')
    $('#div-four').css('display','none')
    $('#div-five').css('display','none')
    $('.real-table').css('display','none')
    $('.real-table-A').css('display','none')
    $('.real-table-one').css('display','none')
    $('.real-table-five').css('display','none')
    $('#loadres').css('display','block')
    $('#loadacti').css('display','block')
    $('#loadnext').css('display','block')
    $('#loadpay').css('display','block')
    $('#loadamount').css('display','block')
    $('#loadretain').css('display','block')
    var data=new Date()
    var h = data.getFullYear(); //获取年
    var m = data.getMonth() + 1; //获取月
    var d = data.getDate(); //获取日
    if(m<10){
        m='0'+m
    }
    if(d<10){
        d='0'+d
    }
    var todayTime=h+'-'+m+'-'+d
    if(todayTime===newdata){
        dataDateBottom=dataTodayBottom
        timeshowFun(newdata)
        onreal(dataTodayBottom);
        var ob=dataTodayBottom
        if (ob.totalAddUser == "NaN" || ob.totalAddUser == null) {//今日新增
            ob.totalAddUser = 0;
        }
        if (ob.totalActive == "NaN" || ob.totalActive == null) {//今日活跃
            ob.totalActive = 0;
        }
        if (ob.firstLoginNum == "NaN" || ob.firstLoginNum == null) {//今日首次登陆
            ob.firstLoginNum = 0;
        }
        if (ob.payNumber == "NaN" || ob.payNumber == null) {//付费人数
            ob.payNumber = 0;
        }
        if (ob.dayRetain == "NaN" || ob.dayRetain == null) {//实时留存
            ob.dayRetain = 0;
        }
        if (ob.payAmount == "NaN" || ob.payAmount == null) {//付费金额
            ob.payAmount = 0;
        }
        ob.dayRetain=ob.dayRetain*100;

        ob.dayRetain=(ob.dayRetain).toFixed(2);

        $("#add").text('+'+ob.totalAddUser);//新增
        $("#acti").text('+'+ob.totalActive);//活跃
        $("#fir").text('+'+ob.firstLoginNum);//首登
        $("#stay").text(ob.dayRetain+'%');//留存
        AddUser(ob,ob);//今日新增
        OfficaNum(ob,ob);//今日活跃
        active(ob,ob);//今日首次登陆
        PayMoney(ob,ob);//今日付费总金额
        PayNum(ob,ob);//今日付费人数
        waitNow(ob,ob);//当前留存
    }else{
        $.ajax({
            type: "post",
            url: "../queryRealTimeByDB.action",
            async: true,
            data:{
                serverId: 300,
                startTime: newdata,
                endTime: newdata,
            },
            success: function (ob) {
                dataDateBottom=ob
                timeshowFun(newdata)
                setPar(ob,dataTodayBottom);
                // $(document.body).mLoading("hide")
            }
        });
    }

}
//在线表格和图形
function HistoryDataForTop(newdata) {
    $('#contenton').css('background','#202020')
    $('#div-T').css('display','none')
    $('.real-table-T').css('display','none')
    $('#loadAdd').css('display','block')
    // $(document.body).mLoading("show")
    var data=new Date()
    var h = data.getFullYear(); //获取年
    var m = data.getMonth() + 1; //获取月
    var d = data.getDate(); //获取日
    if(m<10){
        m='0'+m
    }
    if(d<10){
        d='0'+d
    }
   var todayTime=h+'-'+m+'-'+d
    if(todayTime===newdata){
        dataDateTop=dataTodayTop
        topTarget(dataTodayTop,dataTodayTop)
        if(dataTodayTop.maxOnlineNum==''||dataTodayTop.maxOnlineNum==undefined||dataTodayTop.maxOnlineNum==null){
            dataTodayTop.maxOnlineNum=0
        }
        if(dataTodayTop.avgOnlineNum==''||dataTodayTop.avgOnlineNum==undefined||dataTodayTop.avgOnlineNum==null){
            dataTodayTop.avgOnlineNum=0
        }
        document.getElementById('changetime').innerText=newdata.substring(5)
        document.getElementById('querymost').innerText=dataTodayTop.maxOnlineNum
        document.getElementById('queryavg').innerText=dataTodayTop.avgOnlineNum
        datahtml=timeshow="<span>"+newdata.substring(5)+"</span><span>日</span>"
        $("#real-datatableT").bootstrapTable('destroy')
        $("#real-tbodyT").empty();
        var array=[]
        //顶部实时
        var peo=[]
        var someDate=['00:00',
            '00:05','00:10','00:15','00:20','00:25','00:30','00:35','00:40','00:45','00:50','00:55','01:00',
            '01:05','01:10','01:15','01:20','01:25','01:30','01:35','01:40','01:45','01:50','01:55','02:00',
            '02:05','02:10','02:15','02:20','02:25','02:30','02:35','02:40','02:45','02:50','02:55','03:00',
            '03:05','03:10','03:15','03:20','03:25','03:30','03:35','03:40','03:45','03:50','03:55','04:00',
            '04:05','04:10','04:15','04:20','04:25','04:30','04:35','04:40','04:45','04:50','04:55','05:00',
            '05:05','05:10','05:15','05:20','05:25','05:30','05:35','05:40','05:45','05:50','05:55','06:00',
            '06:05','06:10','06:15','06:20','06:25','06:30','06:35','06:40','06:45','06:50','06:55','07:00',
            '07:05','07:10','07:15','07:20','07:25','07:30','07:35','07:40','07:45','07:50','07:55','08:00',
            '08:05','08:10','08:15','08:20','08:25','08:30','08:35','08:40','08:45','08:50','08:55','09:00',
            '09:05','09:10','09:15','09:20','09:25','09:30','09:35','09:40','09:45','09:50','09:55','10:00',
            '10:05','10:10','10:15','10:20','10:25','10:30','10:35','10:40','10:45','10:50','10:55','11:00',
            '11:05','11:10','11:15','11:20','11:25','11:30','11:35','11:40','11:45','11:50','11:55','12:00',
            '12:05','12:10','12:15','12:20','12:25','12:30','12:35','12:40','12:45','12:50','12:55','13:00',
            '13:05','13:10','13:15','13:20','13:25','13:30','13:35','13:40','13:45','13:50','13:55','14:00',
            '14:05','14:10','14:15','14:20','14:25','14:30','14:35','14:40','14:45','14:50','14:55','15:00',
            '15:05','15:10','15:15','15:20','15:25','15:30','15:35','15:40','15:45','15:50','15:55','16:00',
            '16:05','16:10','16:15','16:20','16:25','16:30','16:35','16:40','16:45','16:50','16:55','17:00',
            '17:05','17:10','17:15','17:20','17:25','17:30','17:35','17:40','17:45','17:50','17:55','18:00',
            '18:05','18:10','18:15','18:20','18:25','18:30','18:35','18:40','18:45','18:50','18:55','19:00',
            '19:05','19:10','19:15','19:20','19:25','19:30','19:35','19:40','19:45','19:50','19:55','20:00',
            '20:05','20:10','20:15','20:20','20:25','20:30','20:35','20:40','20:45','20:50','20:55','21:00',
            '21:05','21:10','21:15','21:20','21:25','21:30','21:35','21:40','21:45','21:50','21:55','22:00',
            '22:05','22:10','22:15','22:20','22:25','22:30','22:35','22:40','22:45','22:50','22:55','23:00',
            '23:05','23:10','23:15','23:20','23:25','23:30','23:35','23:40','23:45','23:50','23:55',]
        if(dataDateTop.data!=null)
            for (var i = 0; i < dataDateTop.data[1].length; i++) {
                $("#real-tbodyT").append(
                    "<tr><td>" + someDate[i] +
                    "</td><td>" + dataDateTop.data[1][i].device_count +
                    "</td></tr>"
                )
            };
        $("#real-datatableT").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
    }else{
        $.ajax({
            type: "post",
            url: "../queryRealTimeByDB.action",
            async: true,
            data:{
                serverId: 300,
                startTime: newdata,
                endTime: newdata,
            },
            success: function (ob) {
                dataDateTop=ob
                $("#real-datatableT").bootstrapTable('destroy')
                sample(ob,newdata)
                topTarget(ob,dataTodayTop)
                topTable(ob)
            }
        });
    }

}
//更新下部分图形
function setPar(datalast,today){
    onreal(datalast);
    numberlastday(datalast)
    AddUser(datalast,today);//今日新增
    OfficaNum(datalast,today);//今日活跃
    active(datalast,today);//今日首次登陆
    PayMoney(datalast,today);//今日付费总金额
    PayNum(datalast,today);//今日付费人数
    waitNow(datalast,today);//当前留存
}
//在线表格
function topTable(ob){
    $("#real-datatableT").bootstrapTable('destroy')
    $("#real-tbodyT").empty();
    var array=[]
    //顶部实时
    var peo=[]
    var someDate=['00:00',
        '00:05','00:10','00:15','00:20','00:25','00:30','00:35','00:40','00:45','00:50','00:55','01:00',
        '01:05','01:10','01:15','01:20','01:25','01:30','01:35','01:40','01:45','01:50','01:55','02:00',
        '02:05','02:10','02:15','02:20','02:25','02:30','02:35','02:40','02:45','02:50','02:55','03:00',
        '03:05','03:10','03:15','03:20','03:25','03:30','03:35','03:40','03:45','03:50','03:55','04:00',
        '04:05','04:10','04:15','04:20','04:25','04:30','04:35','04:40','04:45','04:50','04:55','05:00',
        '05:05','05:10','05:15','05:20','05:25','05:30','05:35','05:40','05:45','05:50','05:55','06:00',
        '06:05','06:10','06:15','06:20','06:25','06:30','06:35','06:40','06:45','06:50','06:55','07:00',
        '07:05','07:10','07:15','07:20','07:25','07:30','07:35','07:40','07:45','07:50','07:55','08:00',
        '08:05','08:10','08:15','08:20','08:25','08:30','08:35','08:40','08:45','08:50','08:55','09:00',
        '09:05','09:10','09:15','09:20','09:25','09:30','09:35','09:40','09:45','09:50','09:55','10:00',
        '10:05','10:10','10:15','10:20','10:25','10:30','10:35','10:40','10:45','10:50','10:55','11:00',
        '11:05','11:10','11:15','11:20','11:25','11:30','11:35','11:40','11:45','11:50','11:55','12:00',
        '12:05','12:10','12:15','12:20','12:25','12:30','12:35','12:40','12:45','12:50','12:55','13:00',
        '13:05','13:10','13:15','13:20','13:25','13:30','13:35','13:40','13:45','13:50','13:55','14:00',
        '14:05','14:10','14:15','14:20','14:25','14:30','14:35','14:40','14:45','14:50','14:55','15:00',
        '15:05','15:10','15:15','15:20','15:25','15:30','15:35','15:40','15:45','15:50','15:55','16:00',
        '16:05','16:10','16:15','16:20','16:25','16:30','16:35','16:40','16:45','16:50','16:55','17:00',
        '17:05','17:10','17:15','17:20','17:25','17:30','17:35','17:40','17:45','17:50','17:55','18:00',
        '18:05','18:10','18:15','18:20','18:25','18:30','18:35','18:40','18:45','18:50','18:55','19:00',
        '19:05','19:10','19:15','19:20','19:25','19:30','19:35','19:40','19:45','19:50','19:55','20:00',
        '20:05','20:10','20:15','20:20','20:25','20:30','20:35','20:40','20:45','20:50','20:55','21:00',
        '21:05','21:10','21:15','21:20','21:25','21:30','21:35','21:40','21:45','21:50','21:55','22:00',
        '22:05','22:10','22:15','22:20','22:25','22:30','22:35','22:40','22:45','22:50','22:55','23:00',
        '23:05','23:10','23:15','23:20','23:25','23:30','23:35','23:40','23:45','23:50','23:55',]
    if(ob.data!=null)
        for (var i = 0; i < ob.data[0].length; i++) {
            $("#real-tbodyT").append(
                "<tr><td>" + someDate[i] +
                "</td><td>" + ob.data[0][i].onlineNum +
                "</td></tr>"
            )
        };
    $("#real-datatableT").bootstrapTable({
        method: 'post',
        cache: false,
        height: 560,
        striped: true,
        pagination: false,
        pageSize: 20,
        pageNumber: 1,
        pageList: [10, 20, 50, 100, 200, 500],
        sidePagination: 'server',
        search: false,
        showColumns: false,
        showRefresh: false,
        showExport: false,
        exportTypes: ['csv', 'txt', 'xml'],
        search: false,
        clickToSelect: false,
    })
}
function numberToday(ob) {
    if (ob.totalAddUser == "NaN" || ob.totalAddUser == null) {//今日新增
        ob.totalAddUser = 0;
    }
    if (ob.totalActive == "NaN" || ob.totalActive == null) {//今日活跃
        ob.totalActive = 0;
    }
    if (ob.firstLoginNum == "NaN" || ob.firstLoginNum == null) {//今日首次登陆
        ob.firstLoginNum = 0;
    }
    if (ob.payNumber == "NaN" || ob.payNumber == null) {//付费人数
        ob.payNumber = 0;
    }
    if (ob.dayRetain == "NaN" || ob.dayRetain == null) {//实时留存
        ob.dayRetain = 0;
    }
    if (ob.payAmount == "NaN" || ob.payAmount == null) {//付费金额
        ob.payAmount = 0;
    }
    ob.dayRetain=ob.dayRetain*100;

    ob.dayRetain=(ob.dayRetain).toFixed(2);

    $("#leiji").text('+'+ob.totalAddUser);//新增
    $("#guanwang").text('+'+ob.totalActive);//活跃
    $("#huo").text('+'+ob.firstLoginNum);//首登

    $("#peopleNum").text(ob.dayRetain+'%');//留存
}
function numberlastday(ob){
    if (ob.totalAddUserByDate == "NaN" || ob.totalAddUserByDate == null) {//今日新增
        ob.totalAddUserByDate = 0;
    }
    if (ob.totalActiveByDate == "NaN" || ob.totalActiveByDate == null) {//今日活跃
        ob.totalActiveByDate = 0;
    }
    if (ob.firstLoginNumByDate == "NaN" || ob.firstLoginNumByDate == null) {//今日首次登陆
        ob.firstLoginNumByDate = 0;
    }
    if (ob.payNumber == "NaN" || ob.payNumber == null) {//付费人数
        ob.payNumber = 0;
    }
    if (ob.dayRetainByDate == "NaN" || ob.dayRetainByDate == null) {//实时留存
        ob.dayRetainByDate = 0;
    }
    if (ob.payAmount == "NaN" || ob.payAmount == null) {//付费金额
        ob.payAmount = 0;
    }
    ob.dayRetainByDate=ob.dayRetainByDate*100;
    ob.dayRetainByDate=ob.dayRetainByDate.toFixed(2);
    $("#add").text('+'+ob.totalAddUserByDate);//新增
    $("#acti").text('+'+ob.totalActiveByDate);//活跃
    $("#fir").text('+'+ob.firstLoginNumByDate);//首登
    $("#stay").text(ob.dayRetainByDate+'%');//留存
}
//按日期查询的表格
function onreal(ob) {

	//新增
    $("#real-datatable").bootstrapTable('destroy')
    $("#real-datatableA").bootstrapTable('destroy')
    $("#real-datatable2").bootstrapTable('destroy')
    $("#real-datatable3").bootstrapTable('destroy')
    $("#real-datatabl4").bootstrapTable('destroy')
    $("#real-datatabl5").bootstrapTable('destroy')
    $("#real-tbody").empty();
    $("#real-tbodyA").empty();
    $("#real-tbody2").empty();
    $("#real-tbody3").empty();
    $("#real-tbody4").empty();
    $("#real-tbody5").empty();
    if(ob.data.length===2){
        for (var i = 0; i < ob.data[0].length; i++) {
            var date=ob.data[0][i].logTime
            var index=date.indexOf(' ')
            var someDateA = date.substring(index)
            var someDate=someDateA.substring(0,6)
            $("#real-tbody").append(
                "<tr><td>" + someDate +
                "</td><td>" + ob.data[0][i].registerNum +
                "</td></tr>"
            )
        };
        $("#real-datatable").bootstrapTable({
            method: 'post',
            cache: false,
            height: 500,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
        //活跃

            for (var i = 0; i < ob.data[0].length; i++) {
                var date=ob.data[0][i].logTime
                var index=date.indexOf(' ')
                var someDateA = date.substring(index)
                var someDate=someDateA.substring(0,6)
                $("#real-tbodyA").append(
                    "<tr><td>" + someDate +
                    "</td><td>" + ob.data[0][i].activeNum +
                    "</td></tr>"
                )
            };
        $("#real-datatableA").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
        //首登

            for (var i = 0; i < ob.data[0].length; i++) {
                var date=ob.data[0][i].logTime
                var index=date.indexOf(' ')
                var someDateA = date.substring(index)
                var someDate=someDateA.substring(0,6)
                $("#real-tbody2").append(
                    "<tr><td>" +someDate +
                    "</td><td>" + ob.data[0][i].firstLoginNum +
                    "</td></tr>"
                )
            };
        $("#real-datatable2").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
        //留存
            for (var i = 0; i < ob.data[1].length; i++) {
                $("#real-tbody5").append(
                    "<tr><td>" + ob.data[1][i].remark + ":00" +
                    "</td><td>" + (((ob.data[1][i].retentionRate)*100).toFixed(2)+'%') +
                    "</td></tr>"
                )
            };
        $("#real-datatable5").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
    }else if(ob.data.length===5){
        for (var i = 0; i < ob.data[0].length; i++) {
            var date=ob.data[0][i].logTime
            var index=date.indexOf(' ')
            var someDateA = date.substring(index)
            var someDate=someDateA.substring(0,6)
            $("#real-tbody").append(
                "<tr><td>" + someDate +
                "</td><td>" + ob.data[0][i].device_count +
                "</td></tr>"
            )
        };
        $("#real-datatable").bootstrapTable({
            method: 'post',
            cache: false,
            height: 500,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
        //活跃
            for (var i = 0; i < ob.data[2].length; i++) {
                var date=ob.data[2][i].logTime
                var index=date.indexOf(' ')
                var someDateA = date.substring(index)
                var someDate=someDateA.substring(0,6)
                $("#real-tbodyA").append(
                    "<tr><td>" + someDate +
                    "</td><td>" + ob.data[2][i].device_count +
                    "</td></tr>"
                )
            };
        $("#real-datatableA").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
        //首登
            for (var i = 0; i < ob.data[3].length; i++) {
                var date=ob.data[3][i].logTime
                var index=date.indexOf(' ')
                var someDateA = date.substring(index)
                var someDate=someDateA.substring(0,6)
                $("#real-tbody2").append(
                    "<tr><td>" +someDate +
                    "</td><td>" + ob.data[3][i].device_count +
                    "</td></tr>"
                )
            };
        $("#real-datatable2").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
        //留存
            for (var i = 0; i < ob.data[4].length; i++) {
                $("#real-tbody5").append(
                    "<tr><td>" + ob.data[4][i].serverId+':00'+
                    "</td><td>" + (((ob.data[4][i].statisticsData)*100).toFixed(2)+'%') +
                    "</td></tr>"
                )
            };
        $("#real-datatable5").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
    }

}
Highcharts.setOptions({
	global: {
		useUTC: false
	}
});
//顶部实时
var timeshow
var datahtml
function mostAvg(data){
    if(data.maxOnlineNum==''||data.maxOnlineNum==undefined||data.maxOnlineNum==null){
        data.maxOnlineNum=0
    }
    if(data.avgOnlineNum==''||data.avgOnlineNum==undefined||data.avgOnlineNum==null){
        data.avgOnlineNum=0
    }
    document.getElementById('nowmost').innerText=data.maxOnlineNum
    document.getElementById('nowavg').innerText=data.avgOnlineNum
}
function sample(data,time) {
    if(data.maxOnlineNumByDate==''||data.maxOnlineNumByDate==undefined||data.maxOnlineNumByDate==null){
        data.maxOnlineNumByDate=0
    }
    if(data.avgOnlineNumByDate==''||data.avgOnlineNumByDate==undefined||data.avgOnlineNumByDate==null){
        data.avgOnlineNumByDate=0
    }
    // htmlContentNow="<div><span>当前 ( </span><span style='color: #FFB665 !important;'><span>最高</span><span>"+data.maxOnlineNum+"</span><span>平均</span><span>"+data.avgOnlineNum+"</span></span><span> ) </span></div>"
    // htmlContentHis="<div><span>"+time.substring(5)+"</span><span>日 ( </span><span style='color: #6CBBDE;'><span>最高</span><span>"+data.maxOnlineNumByDate+"</span><span>平均</span><span>"+data.avgOnlineNumByDate+"</span></span><span> ) </span></div>"
    document.getElementById('changetime').innerText=time.substring(5)
    document.getElementById('querymost').innerText=data.maxOnlineNumByDate
    document.getElementById('queryavg').innerText=data.avgOnlineNumByDate
    datahtml=timeshow="<span>"+time.substring(5)+"</span><span>日</span>"
}
function timeshowFun(time) {
    timeshow="<span>"+time.substring(5)+"</span><span>日</span>"
}

function topTarget(last,today){
    $('#loadAdd').css('display','none')
    $('#div-T').css('display','block')
    $('#contenton').css('background','#363636')
    var chart = null;
    var arr = [];
    var arr4 = [];
    var arrNow = [];
    var lineNow = [];
    var newCaculateArr=['00:00',
        '00:05','00:10','00:15','00:20','00:25','00:30','00:35','00:40','00:45','00:50','00:55','01:00',
        '01:05','01:10','01:15','01:20','01:25','01:30','01:35','01:40','01:45','01:50','01:55','02:00',
        '02:05','02:10','02:15','02:20','02:25','02:30','02:35','02:40','02:45','02:50','02:55','03:00',
        '03:05','03:10','03:15','03:20','03:25','03:30','03:35','03:40','03:45','03:50','03:55','04:00',
        '04:05','04:10','04:15','04:20','04:25','04:30','04:35','04:40','04:45','04:50','04:55','05:00',
        '05:05','05:10','05:15','05:20','05:25','05:30','05:35','05:40','05:45','05:50','05:55','06:00',
        '06:05','06:10','06:15','06:20','06:25','06:30','06:35','06:40','06:45','06:50','06:55','07:00',
        '07:05','07:10','07:15','07:20','07:25','07:30','07:35','07:40','07:45','07:50','07:55','08:00',
        '08:05','08:10','08:15','08:20','08:25','08:30','08:35','08:40','08:45','08:50','08:55','09:00',
        '09:05','09:10','09:15','09:20','09:25','09:30','09:35','09:40','09:45','09:50','09:55','10:00',
        '10:05','10:10','10:15','10:20','10:25','10:30','10:35','10:40','10:45','10:50','10:55','11:00',
        '11:05','11:10','11:15','11:20','11:25','11:30','11:35','11:40','11:45','11:50','11:55','12:00',
        '12:05','12:10','12:15','12:20','12:25','12:30','12:35','12:40','12:45','12:50','12:55','13:00',
        '13:05','13:10','13:15','13:20','13:25','13:30','13:35','13:40','13:45','13:50','13:55','14:00',
        '14:05','14:10','14:15','14:20','14:25','14:30','14:35','14:40','14:45','14:50','14:55','15:00',
        '15:05','15:10','15:15','15:20','15:25','15:30','15:35','15:40','15:45','15:50','15:55','16:00',
        '16:05','16:10','16:15','16:20','16:25','16:30','16:35','16:40','16:45','16:50','16:55','17:00',
        '17:05','17:10','17:15','17:20','17:25','17:30','17:35','17:40','17:45','17:50','17:55','18:00',
        '18:05','18:10','18:15','18:20','18:25','18:30','18:35','18:40','18:45','18:50','18:55','19:00',
        '19:05','19:10','19:15','19:20','19:25','19:30','19:35','19:40','19:45','19:50','19:55','20:00',
        '20:05','20:10','20:15','20:20','20:25','20:30','20:35','20:40','20:45','20:50','20:55','21:00',
        '21:05','21:10','21:15','21:20','21:25','21:30','21:35','21:40','21:45','21:50','21:55','22:00',
        '22:05','22:10','22:15','22:20','22:25','22:30','22:35','22:40','22:45','22:50','22:55','23:00',
        '23:05','23:10','23:15','23:20','23:25','23:30','23:35','23:40','23:45','23:50','23:55',]
    if(last===today){
        for (var i = 0; i < today.data[1].length; i++) {
            var rqNow = today.data[1][i].device_count
            var dateT=today.data[1][i].logTime
            var index=dateT.indexOf(' ')
            var someDateA = dateT.substring(index)
            var someDateNew=someDateA.substring(0,6)
            arr.push(rqNow)
            arr4.push(someDateNew)
        }
    }else{
        for (var i = 0; i < last.data[0].length; i++) {
            var date=last.data[0][i].logTime
            var index=date.indexOf(' ')
            var someDateA = date.substring(index)
            var someDate=someDateA.substring(0,6)
            var rq = last.data[0][i].onlineNum
            arr.push(rq)
            arr4.push(someDate)
            //	console.log(arr)
        }
    }
    if(today.data){
        for (var i = 0; i < today.data[1].length; i++) {
            var rqNow = today.data[1][i].device_count
            var dateT=today.data[1][i].logTime
            var index=dateT.indexOf(' ')
            var someDateA = dateT.substring(index)
            var someDateNew=someDateA.substring(0,6)
            arrNow.push(rqNow)
            lineNow.push(someDateNew)
            //	console.log(arr)
        }
    }else{
        for (var i = 0; i < last.data[0].length; i++) {
            var date=last.data[0][i].logTime
            var index=date.indexOf(' ')
            var someDateA = date.substring(index)
            var someDate=someDateA.substring(0,6)
            arrNow.push(0)
            lineNow.push(someDate)
        }
    }

    chart = Highcharts.chart('div-T', {
        chart: {
        	height:275,
            // width:1580,
            marginLeft:35,
        	reflow: true,
            type: 'line',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text:'在<br />线<br />帐<br />号<br />',
            align: 'left',
            verticalAlign: 'middle',
            x:-10,
            y: -60,
            useHTML:true,
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
            enabled: false
        },
        xAxis: {
            categories: newCaculateArr,
            tickInterval: 12,
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineWidth: .5,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            labels: {
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            shared: true,
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px;">{point.key}</span><br />',
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
            // formatter: function () {
            // 	return this.x+'<br />'+'注册玩家:' +this.point.y
            // }
        },
        yAxis: {
            title: {
                text: ''
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
        series: [{
            name: '当前',
            data: arrNow,
            lineWidth: 2,
            color:"#D6731B",
            baseSeries: 'exSeries',
            symbolWidth:35,
            symbol:'circle',
            tooltip:{
                formatter: function() {
                    return '当前'+'&nbsp;&nbsp;'+this.point.y;
                },
            }
		},{
            id: 'exSeries',
            name: datahtml,
            data: arr,
            lineWidth: 2,
            color:"#999999",
            // tooltip:{
            //     formatter: function() {
            //         return timeshow+this.point.y;
            //     },
            // }
        },],
    });

}

//今日新增
function AddUser(datalast,today) {
    $('#loadres').css('display','none')
    $('#div-one').css('display','block')
    $('#contentzoo').css('background','#363636')
	var chart = null;
	var arr = [];
	var arr4 = [];
    var arrNow = [];
    var arrFNow = [];
    if(datalast===today){
        for (var i = 0; i < today.data[0].length; i++) {
            var index=today.data[0][i].logTime.indexOf(' ')
            var someDateA = today.data[0][i].logTime.substring(index)
            var someDateNow=someDateA.substring(0,6)
            var rqNow = today.data[0][i].device_count
            arr.push(rqNow)
            arr4.push(someDateNow)
        }
    }else{
        for (var i = 0; i < datalast.data[0].length; i++) {
            var index=datalast.data[0][i].logTime.indexOf(' ')
            var someDateA = datalast.data[0][i].logTime.substring(index)
            var someDate=someDateA.substring(0,6)
            var rq = datalast.data[0][i].registerNum
            arr.push(rq)
            arr4.push(someDate)
            //	console.log(arr)
        }
    }
    if(today.data){
        for (var i = 0; i < today.data[0].length; i++) {
            var index=today.data[0][i].logTime.indexOf(' ')
            var someDateA = today.data[0][i].logTime.substring(index)
            var someDateNow=someDateA.substring(0,6)
            var rqNow = today.data[0][i].device_count
            arrNow.push(rqNow)
            arrFNow.push(someDateNow)
        }
    }else{
        for (var i = 0; i < datalast.data[0].length; i++) {
            var index=datalast.data[0][i].logTime.indexOf(' ')
            var someDateA = datalast.data[0][i].logTime.substring(index)
            var someDate=someDateA.substring(0,6)
            arr.push(0)
            arrFNow.push(someDate)
            //	console.log(arr)
        }
    }

	chart = Highcharts.chart('div-one', {
		chart: {
			height:275,
            // width:1580,
            reflow: true,
			type: 'line',
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
        title: {
            text:'注<br />册<br />帐<br />号<br />',
            align: 'left',
            verticalAlign: 'middle',
            x:-10,
            y: -60,
            useHTML:true,
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
			enabled: false
		},

		xAxis: {
			categories: arr4,
            gridLineWidth: .5,
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            tickInterval: 12,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
			tickmarkPlacement:'on',
			labels: {
				enable: true,
				style: {
					color: '#999999'
				}
			}
		},
        tooltip: {
            shared: true,
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px;">{point.key}</span><br/>',
            crosshairs:{
                width: 1,
                color: '#ffffff',
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
				text: ''
			},
            lineWidth:1,
            lineColor:'#707070',
            gridLineColor:'#707070',
			labels: {
				format: '{value}',
				style: {
					color: '#999999'
				}
			}
		},
        legend: {
		    enabled:false,
        },
        plotOptions: {
            // series: {
            //     lineWidth: 2,
            //     color:"#872F9F"
            // },
            // line: {
            //     pointStart:,
            // }
        },
		series: [{
            name: '当前',
            data: arrNow,
            lineWidth: 2,
            color:"#10CFBD",
        },{
            id: 'exSeries',
            name: timeshow,
            data: arr,
            lineWidth: 2,
            color:"#999999"
        },],
	});

}


//活跃总数
function OfficaNum(datalast,today) {
    $('#loadacti').css('display','none')
    $('#div-A').css('display','block')
    $('#content_one').css('background','#363636')
	var chartA = null;
	var arrA = [];
	var arrArr = [];
    var arrANow = [];
    var arrArrNow = [];
    if(datalast===today){
        for (var i = 0; i < today.data[2].length; i++) {
            var index=today.data[2][i].logTime.indexOf(' ')
            var someDateAaa = today.data[2][i].logTime.substring(index)
            var someDateANow=someDateAaa.substring(0,6)
            var rqANow = today.data[2][i].device_count
            arrA.push(rqANow)
            arrArr.push(someDateANow)
            //	console.log(arr)
        }
    }else{
        for (var i = 0; i < datalast.data[0].length; i++) {
            var index=datalast.data[0][i].logTime.indexOf(' ')
            var someDateAaa = datalast.data[0][i].logTime.substring(index)
            var someDateA=someDateAaa.substring(0,6)
            var rqA = datalast.data[0][i].activeNum
            arrA.push(rqA)
            arrArr.push(someDateA)
            //	console.log(arr)
        }
    }
    if(today.data!=null)
    for (var i = 0; i < today.data[2].length; i++) {
        var index=today.data[2][i].logTime.indexOf(' ')
        var someDateAaa = today.data[2][i].logTime.substring(index)
        var someDateANow=someDateAaa.substring(0,6)
        var rqANow = today.data[2][i].device_count
        arrANow.push(rqANow)
        arrArrNow.push(someDateANow)
        //	console.log(arr)
    }
	chartA = Highcharts.chart('div-A', {
		chart: {
            height:275,
            // width:1580,
            marginLeft:35 ,
            reflow: true,
			type: 'line',
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
        title: {
            text:'活<br />跃<br />帐<br />号<br />',
            align: 'left',
            verticalAlign: 'middle',
            x:-10,
            y: -60,
            useHTML:true,
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
			enabled: false
		},
		xAxis: {
            tickmarkPlacement:'on',
			categories: arrArr,
            gridLineWidth: .5,
            tickInterval: 12,
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            labels: {
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            shared: true,
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px;">{point.key}</span><br/>',
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
				text: ''
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
            // series: {
            //     lineWidth: 2,
            //     color:"#872F9F"
            // }
        },
		series: [{
            name: '当前',
            data: arrANow,
            lineWidth: 2,
            color:"#F55753"
        },{
            name: timeshow,
            data: arrA,
            lineWidth: 2,
            color:"#999999"
        },],
	});
}

//今日首次登陆
function active(datalast,today) {
    $('#loadnext').css('display','none')
    $('#div-two').css('display','block')
    $('#contentwo').css('background','#363636')
	var chart1 = null;
	var arr1 = [];
	var arr5 = [];
    var arrFirst = [];
    var arrNow = [];
    if(datalast===today){
        for (var i = 0; i < today.data[3].length; i++) {
            var index=today.data[3][i].logTime.indexOf(' ')
            var someDateAaa = today.data[3][i].logTime.substring(index)
            var someDateNow=someDateAaa.substring(0,6)
            var rqNow = today.data[3][i].device_count
            arr1.push(rqNow)
            arr5.push(someDateNow)
            //	console.log(arr)
        }
    }
    else{
        for (var i = 0; i < datalast.data[0].length; i++) {
            var index=datalast.data[0][i].logTime.indexOf(' ')
            var someDateAaa = datalast.data[0][i].logTime.substring(index)
            var someDate=someDateAaa.substring(0,6)
            var rq = datalast.data[0][i].firstLoginNum
            arr1.push(rq)
            arr5.push(someDate)
            //	console.log(arr)
        }
    }
    if(today.data!=null)
    for (var i = 0; i < today.data[3].length; i++) {
        var index=today.data[3][i].logTime.indexOf(' ')
        var someDateAaa = today.data[3][i].logTime.substring(index)
        var someDateNow=someDateAaa.substring(0,6)
        var rqNow = today.data[3][i].device_count
        arrFirst.push(rqNow)
        arrNow.push(someDateNow)
        //	console.log(arr)
    }
	chart1 = Highcharts.chart('div-two', {
		chart: {
            height:275,
            // width:1580,
            marginLeft:45,
            reflow: true,
			type: 'line',
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
        title: {
            text:'激<br />活<br />帐<br />号<br />',
            align: 'left',
            verticalAlign: 'middle',
            x:-10,
            y: -60,
            useHTML:true,
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
			enabled: false
		},
		xAxis: {
            tickmarkPlacement:'on',
			categories: arr5,
            gridLineWidth: .5,
            tickInterval: 12,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
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
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
        },
		yAxis: {
			title: {
				text: ''
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
            // series: {
            //     lineWidth: 2,
            //     color:"#872F9F"
            // }
        },
		series: [{
            name: '当前',
            data: arrFirst,
            lineWidth: 2,
            color:"#A873EC"
        },{
        name: timeshow,
            data: arr1,
            lineWidth: 2,
            color:"#999999"
    },],
	});

}
//今日付费总金额
function PayMoney(data) {
    $('#loadpay').css('display','none')
    $('#div-three').css('display','block')
    // $('#contenthree').css('background','#363636')
	// var chart2 = null;
	// var arr2 = [];
	// var arr6 = []
    // if(data.data!=null)
	// for (var i = 0; i < data.data[11].length; i++) {
	// 	var someDate = data.data[11][i].serverId
	// 	var rq = data.data[11][i].device_count
	// 	arr2.push(rq)
	// 	arr6.push(someDate)
	// 	//	console.log(arr)
	// }
	// chart2 = Highcharts.chart('div-three', {
	// 	chart: {
    //         height:275,
    //         // width:1580,
    //         marginLeft:35,
    //         reflow: true,
	// 		type: 'line',
	// 		backgroundColor: {
	// 			stops: [
	// 				[0, 'rgb(54, 54, 54)']
	// 			]
	// 		},
	// 	},
    //     title: {
    //         text:'付<br />费<br />金<br />额<br />',
    //         align: 'left',
    //         verticalAlign: 'middle',
    //         x:-10,
    //         y: -60,
    //         useHTML:true,
    //         style: {
    //             color: '#999999',
    //             fontWeight:'400',
    //             fontSize:'12',
    //         }
    //     },
    //
    //     credits: {
	// 		enabled: false // 禁用版权信息
	// 	},
	// 	exporting: {
	// 		enabled: false
	// 	},
	// 	xAxis: {
	// 		type: 'datetime',
    //         tickmarkPlacement:'on',
	// 		categories: arr6,
    //         gridLineWidth: .5,
    //         gridLineColor:'#363636',
    //         lineWidth:1,
    //         lineColor:'#707070',
    //         gridLineColor:'#707070',
    //         gridLineDashStyle:"Dash",
	// 		labels: {
	// 			enable: true,
    //
	// 			style: {
	// 				color: '#fff'
	// 			}
	// 		}
	// 	},
    //     tooltip: {
    //         shared: true,
    //         crosshairs:{
    //             width: 1,
    //             color: '#ffffff',
    //             dashStyle: 'Dash'
    //         },
    //
    //         },
	// 	yAxis: {
	// 		title: {
	// 			text: ''
	// 		},
    //         lineWidth:1,
    //         lineColor:'#707070',
    //         gridLineColor:'#707070',
    //         labels: {
    //             format: '{value}',
    //             style: {
    //                 color: '#707070',
    //
    //             }
    //         }
    //
    //     },
    //     legend: {
    //        enabled:false,
    //     },
    //     plotOptions: {
    //         series: {
    //             lineWidth: 2,
    //             color:"#872F9F"
    //         }
    //     },
	// 	series: [
    //         {
    //             name: '当前',
    //             data: arr2,
    //             lineWidth: 2,
    //             color:"#E1AA13"
    //         },{
    //             name: timeshow,
    //             data: arr2,
    //             lineWidth: 2,
    //             color:"#4AA3E5"
    //         },],
	// });

}
//付费人数
function PayNum(data) {
    $('#loadamount').css('display','none')
    $('#div-four').css('display','block')
    // $('#contenfour').css('background','#363636')
// 	var chart3 = null;
// 	var arr3 = [];
// 	var arr7 = []
//     if(data.data!=null)
// 	for (var i = 0; i < data.data[10].length; i++) {
// 		var someDate = data.data[10][i].serverId
// 		var rq = data.data[10][i].device_count
// 		arr3.push(rq)
// 		arr7.push(someDate)
// 		//	console.log(arr)
// 	}
// 	chart3 = Highcharts.chart('div-four', {
// 		chart: {
//             height:275,
//             // width:1580,
//             marginLeft:35,
//             reflow: true,
// 			type: 'spline',
// 			backgroundColor: {
// 				stops: [
// 					[0, 'rgb(54, 54, 54)']
// 				]
// 			},
// 		},
//         title: {
//             text:'付<br />费<br />帐<br />号<br />',
//             align: 'left',
//             verticalAlign: 'middle',
//             x:-10,
//             y: -60,
//             useHTML:true,
//             style: {
//                 color: '#999999',
//                 fontWeight:'400',
//                 fontSize:'12',
//             }
//         },
//         credits: {
// 			enabled: false // 禁用版权信息
// 		},
// 		exporting: {
// 			enabled: false
// 		},
// 		xAxis: {
// 			type: 'datetime',
//             tickmarkPlacement:'on',
// 			categories: arr7,
//             lineWidth:1,
//             lineColor:'#707070',
//             tickColor:'#707070',
//             gridLineColor:'#c0c0c0',
//             gridLineWidth: .5,
//             gridLineDashStyle:"Dash",
// 			labels: {
// 				enable: true,
//
// 				style: {
// 					color: '#fff'
// 				}
// 			}
// 		},
// 		tooltip: {
// 			formatter: function () {
// 				return this.x+'<br />' + this.series.name +':'+
//                     this.point.y + '个';
// 			}
// 		},
// 		yAxis: {
// 			title: {
// 				text: ''
// 			},
//             lineWidth:1,
//             lineColor:'#707070',
//             gridLineColor:'#707070',
//             labels: {
//                 format: '{value}',
//                 style: {
//                     color: '#999999',
//
//                 }
//             }
//
//         },
//         legend: {
//             // align: 'center', //水平方向位置
//             // verticalAlign: 'top', //垂直方向位置
//             // x: 550, //距离x轴的距离
//             // y: -10, //距离Y轴的距离
//             enabled:false,
//         },
//         // plotOptions: {
//         //     series: {
//         //         lineWidth: 2,
//         //         color:"#4AA3E5"
//         //     }
//         // },
// 		series: [
// {
//     name: '当前',
//         data: arr3,
//     lineWidth: 2,
//     color:"#10CFBD"
// },{
//         name: timeshow,
//             data: arr3,
//             lineWidth: 2,
//             color:"#999999"
//     },],
// 	});
}
//实时留存
function waitNow(datalast,today) {
    $('#loadretain').css('display','none')
    $('#div-five').css('display','block')
    $('#contenfive').css('background','#363636')
    var chart3 = null;
    var arr3 = [];
    var arr7 = [];
    var arrRetain = [];
    var arrTime = []
    if(datalast===today){
        for (var i = 0; i < today.data[4].length; i++) {
            var someDateTime = today.data[4][i].serverId+':00'
            var rqTimeNumberOld = today.data[4][i].statisticsData
            var rqTimeNumbertt=(rqTimeNumberOld*100).toFixed(2)
            var rqTimeNumber=parseFloat(rqTimeNumbertt)
            arr3.push(rqTimeNumber)
            arr7.push(someDateTime)
        }
    }else{
        for (var i = 0; i < datalast.data[1].length; i++) {
            var someDate = datalast.data[1][i].remark+':00'
            var rqNumberOld = datalast.data[1][i].retentionRate
            var rqNumbertt=(rqNumberOld*100).toFixed(2)
            var rqNumber=parseFloat(rqNumbertt)
            arr3.push(rqNumber)
            arr7.push(someDate)

        }
    }
    if(today.data!=null)
    for (var i = 0; i < today.data[4].length; i++) {
        var someDateTime = today.data[4][i].serverId+':00'
        var rqTimeNumberOld = today.data[4][i].statisticsData
        var rqTimeNumbertt=(rqTimeNumberOld*100).toFixed(2)
        var rqTimeNumber=parseFloat(rqTimeNumbertt)
        arrRetain.push(rqTimeNumber)
        arrTime.push(someDateTime)
    }
    chart3 = Highcharts.chart('div-five', {
        chart: {
            height:275,
            // width:1580,
            marginLeft:35,
            reflow: true,
            type: 'line',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text:'实<br />时<br />留<br />存<br />',
            align: 'left',
            verticalAlign: 'middle',
            x:-10,
            y: -60,
            useHTML:true,
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
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            tickmarkPlacement:'on',
            categories: arr7,
            gridLineWidth: .5,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
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
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
            valueSuffix: '%'
        },
        yAxis: {
            title: {
                text: ''
            },
            lineWidth:1,
            lineColor:'#707070',
            gridLineColor:'#707070',
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
            // series: {
            //     lineWidth: 2,
            //     color:"#872F9F"
            // }
        },
        series: [{
            name: '当前',
            data: arrRetain,
            lineWidth: 2,
            color:"#D6731B",
            tooltip:{
    //             formatter:function() {
    //     return (this.value*100).toFixed(2)
    // },
                valueSuffix: '%'
            }
        },{
            name: timeshow,
            data: arr3,
            lineWidth: 2,
            color:"#999999",
            tooltip:{
                // formatter:function() {
                //     return (this.value*100).toFixed(2)
                // },
                valueSuffix: '%'
            }
    }],
    });
}
$(function () {
	$("#real-p3").click(function () {
		$('#teambtn').show()
		$('#teambtn2').hide()
	})
	$("#real-pA").click(function () {
		$('#teambtn').hide()
		$('#teambtn2').hide()
	})
	$("#real-p4").click(function () {
		$('#teambtn').hide()
		$('#teambtn2').show()
	})
	$("#real-p1").click(function () {
		$('#teambtn').hide()
		$('#teambtn2').hide()
	})
	$("#real-p2").click(function () {
		$('#teambtn').hide()
		$('#teambtn2').hide()
	})
    $("#real-p5").click(function () {
        $('#teambtn').hide()
        $('#teambtn2').hide()
    })

	$('.fenxipass').click(function(){
		$(".fenxi").hide()
	})
	$('#teambtn').click(function(){
		if($("#real-p3").hasClass('lll')==true){
			$(".fenxi1").show()
			$(".fenxi2").hide()
		}
	})
	$("#teambtn2").click(function(){
		if($("#real-p4").hasClass('llll')==true){
			$(".fenxi2").show()
			$(".fenxi1").hide()
		}

	})

})
//
// function shuju(){
// 	var newlogTime = $("#in1").val()
// 	$("#exampleop").bootstrapTable('destroy');
// 	var t =$('#exampleop').bootstrapTable({
// 		url: '../getGameAccountRetain.action',
// 		method: 'post',
// 		dataType: "json",
// 		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
// 		queryParamsType: "",
// 		striped: true, //设置为 true 会有隔行变色效果
// 		undefinedText: "0", //当数据为 undefined 时显示的字符
// 		pagination: false, //分页
// 		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
//
// 		pageNumber: 1, //如果设置了分页，首页页码
// 		// showPaginationSwitch:true,//是否显示 数据条数选择框
// 		pageSize: 20, //如果设置了分页，页面数据条数
// 		pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
// 		paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
// 		paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
// 		// singleSelect: false,//设置True 将禁止多选
// 		search: false, //显示搜索框
// 		data_local: "zh-US", //表格汉化
// 		sidePagination: "server", //服务端处理分页
// 		queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
// 				return { //这里的params是table提供的
// 					pageIndex: params.pageNumber, //从数据库第几条记录开始
// 					pageSize: params.pageSize, //找多少条
// 					startTime:newlogTime
// 				};
// 			},
// 		columns:[{
// 			title: '时间起止',
// 			field: 'startTime',
// 			align: 'center',
// 			formatter:function(value, row, value){
// 				return row.startTime
// 			}
// 		},
// 		{
// 			title: '登录的有效账号对局数',
// 			field: 'gameNumStrinig',
// 			align: 'center'
// 		},
// 		{
// 			title: '账号数量',
// 			field: 'accountNum',
// 			align: 'center'
// 		},
// 		{
// 			title: '留存率',
// 			field: 'dayRetainRate',
// 			align: 'center',
//
// 		}]
//
// 	  })
// 	  t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
// 			 $("body").mLoading("hide");
// 			 $(".pull-right").css("display", "block");
//
// 		 });
// 	  $("#exampleop2").bootstrapTable('destroy');
// 	  var t = $('#exampleop2').bootstrapTable({
// 		url: '../getGameAccountRetain.action',
// 		method: 'post',
// 		dataType: "json",
// 		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
// 		queryParamsType: "",
// 		striped: true, //设置为 true 会有隔行变色效果
// 		undefinedText: "0", //当数据为 undefined 时显示的字符
// 		pagination: false, //分页
// 		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
//
// 		pageNumber: 1, //如果设置了分页，首页页码
// 		// showPaginationSwitch:true,//是否显示 数据条数选择框
// 		pageSize: 20, //如果设置了分页，页面数据条数
// 		pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
// 		paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
// 		paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
// 		// singleSelect: false,//设置True 将禁止多选
// 		search: false, //显示搜索框
// 		data_local: "zh-US", //表格汉化
// 		sidePagination: "server", //服务端处理分页
// 		queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
// 			return { //这里的params是table提供的
// 				pageIndex: params.pageNumber, //从数据库第几条记录开始
// 				pageSize: params.pageSize, //找多少条
// 				startTime:newlogTime
// 			};
// 		},
// 		columns:[{
// 			title: '时间起止',
// 			field: 'startTime',
// 			align: 'center',
// 			formatter:function(value, row, value){
// 				return row.startTime
// 			}
// 		},
// 		{
// 			title: '登录的有效账号对局数',
// 			field: 'gameNumStrinig',
// 			align: 'center'
// 		},
// 		{
// 			title: '账号数量',
// 			field: 'accountNum',
// 			align: 'center'
// 		},
// 		{
// 			title: '留存率',
// 			field: 'threeDayRetainRate',
// 			align: 'center'
// 		}],
//
// 	  })
// 	t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
// 			 $("body").mLoading("hide");
// 			 $(".pull-right").css("display", "block");
// 		 });
//
// }







