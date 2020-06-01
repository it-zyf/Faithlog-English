var timedaily
var timeltv
var timereten
var timepay3
var timeserver1
var timeserver2
var timeonline
var old
var newtime
today()
function today() {
	var today = new Date();
	var y = today.getFullYear() - 1;
	today.setMonth(today.getMonth() - 1)
	var m = today.getMonth() + 1;
	var d = today.getDate();
	if(m >= 1 && m < 10) {
		m = "0" + m
	}
	if(d >= 1 && d < 10) {
		d = "0" + d
	}
	old = y + "-" + m + "-" + d;
	var newtoday = new Date();
	var newy = newtoday.getFullYear();
	var newm = newtoday.getMonth() + 1;
	var newd = newtoday.getDate();
	if(newm >= 1 && newm < 10) {
		newm = "0" + newm
	}
	if(newd >= 1 && newd < 10) {
		newd = "0" + newd
	}
	newtime = newy + "-" + newm + "-" + newd;
}
var timedaily = old+"~"+newtime
var timeltv = old+"~"+newtime
var timereten = old+"~"+newtime
var timepay3 = old+"~"+newtime
var timeserver1 = newtime 
var timeserver2 = newtime 
var timeonline = newtime 
////layui配置
layui.use(['element', 'laydate', 'table'], function() {
	var element = layui.element;
	var laydate = layui.laydate;
	var table = layui.table;
	element.init();
	//日历配置
	var now = new Date();
	laydate.render({
		elem: '#datatimes',
		//		type:'datetime',//日期可选时分秒
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		//		showBottom: false//是否显示底部栏
		done:function(res){
			timedaily = res
		}
	})
	laydate.render({
		elem: '#datatimesltv',
		//		type:'datetime',//日期可选时分秒
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		//		showBottom: false//是否显示底部栏
		done:function(res){
			timeltv = res
		}
	})
	laydate.render({
		elem: '#datatimespay3',
		//		type:'datetime',//日期可选时分秒
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		//		showBottom: false//是否显示底部栏
		done:function(res){
			timepay3 = res
		}
	})
	laydate.render({
		elem: '#datatimesreten',
		//		type:'datetime',//日期可选时分秒
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		//		showBottom: false//是否显示底部栏
		done:function(res){
			timereten = res
		}
	})
	laydate.render({
		elem: '#datatimesserver1',
		//		type:'datetime',//日期可选时分秒
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: newtime,
		max: 'now',
		done:function(res){
			timeserver1 = res
		}
	})
	laydate.render({
		elem: '#datatimesserver2',
		//		type:'datetime',//日期可选时分秒
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: newtime,
		max: 'now',
		done:function(res){
			timeserver2 = res
		}
	})
	laydate.render({
		elem: '#datatimesonline',
		//		type:'datetime',//日期可选时分秒
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: newtime,
		max: 'now',
		done:function(res){
			timeonline = res
		}
	})
});

homedata()
function onread(){
    $("#real-datatableAll").bootstrapTable('destroy');
    $('#real-datatableAll').css('display','none')
    $('.titleLoadAdd').css('display','block')
   daychannel=$("#top_channel").val()
    retentionTable()
}
function onreadLTV(){
    $("#real-datatableAllLTV").bootstrapTable('destroy');
    $('.LTVContent').css('display','none')
    $('.ltvLoad').css('display','block')
    retentionTableLTV()
}
function onreadRe(){
    $("#real-datatableAllRe").bootstrapTable('destroy');
    $('.ReContent').css('display','none')
    $('.reLoad').css('display','block')
    retentionTableRe()
}
function onreadPay1(){
    $("#real-datatableAllPay").bootstrapTable('destroy');
   
    paytable1()
}
function onreadPay2(){
    $("#real-datatableAllPay2").bootstrapTable('destroy');
  
    paytable2()
}
function onreadPay3(){
    $("#real-datatableAllPay3").bootstrapTable('destroy');
    
    paytable3()
}
function onreadServer(){
    $("#real-datatableAllServer").bootstrapTable('destroy');
    servertable1()
}
function onreadServer2(){
    $("#real-datatableAllServer2").bootstrapTable('destroy');
    servertable2()
}
function onreadOnline(){
    $("#real-datatableAllOnline").bootstrapTable('destroy');
    onlinetable()
    query()
}
var daychannel//留存渠道号


function change() {
    $('#district_service').css('display','block')
	$.ajax({
		type: "get",
		url: serverURL+"queryAreas",
		async: false,
		success: function (obj) {
			for (var i = 0; i < obj.rows.length; i++) {
				$("#district_service").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#district_servicePay1").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#district_servicePay2").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#district_servicePay3").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#district_serviceOnline").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
			}
			$("#district_service").prepend("<option value='0'>全部</option>");
			 $("#district_service").find('option:eq(0)').prop('selected', true);
			$('#district_service').multiselect("destroy").multiselect({
				buttonWidth: '80%',
				nonSelectedText: '请选择',
				maxHeight: 200,
				numberDisplayed: 1,
				includeSelectAllOption: true,
				selectAllText: '全选/全不选', //全选按钮显示的文本
				nSelectedText: '项被选中',
				allSelectedText: '已选中所有区服',
			});
			$("#district_servicePay1").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$('#district_servicePay1').multiselect("destroy").multiselect({
				buttonWidth: '80%',
				nonSelectedText: '请选择',
				maxHeight: 200,
				numberDisplayed: 1,
				includeSelectAllOption: true,
				selectAllText: '全选/全不选', //全选按钮显示的文本
				nSelectedText: '项被选中',
				allSelectedText: '已选中所有区服',
			});
			$("#district_servicePay2").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$('#district_servicePay2').multiselect("destroy").multiselect({
				buttonWidth: '80%',
				nonSelectedText: '请选择',
				maxHeight: 200,
				numberDisplayed: 1,
				includeSelectAllOption: true,
				selectAllText: '全选/全不选', //全选按钮显示的文本
				nSelectedText: '项被选中',
				allSelectedText: '已选中所有区服',
			});
			$("#district_servicePay3").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$('#district_servicePay3').multiselect("destroy").multiselect({
				buttonWidth: '80%',
				nonSelectedText: '请选择',
				maxHeight: 200,
				numberDisplayed: 1,
				includeSelectAllOption: true,
				selectAllText: '全选/全不选', //全选按钮显示的文本
				nSelectedText: '项被选中',
				allSelectedText: '已选中所有区服',
			});
			for (var i = 0; i < obj.rows.length; i++) {
				$("#district_serviceLTV").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
			}
			$("#district_serviceLTV").prepend("<option value='0'>全部</option>");
			 $("#district_serviceLTV").find('option:eq(0)').prop('selected', true);
			$('#district_serviceLTV').multiselect("destroy").multiselect({
				buttonWidth: '80%',
				nonSelectedText: '请选择',
				maxHeight: 200,
				numberDisplayed: 1,
				includeSelectAllOption: true,
				selectAllText: '全选/全不选', //全选按钮显示的文本
				nSelectedText: '项被选中',
				allSelectedText: '已选中所有区服',
			});
			for (var i = 0; i < obj.rows.length; i++) {
				$("#district_serviceRe").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
			}
			$("#district_serviceRe").prepend("<option value='0'>全部</option>");
			 $("#district_serviceRe").find('option:eq(0)').prop('selected', true);
			$('#district_serviceRe').multiselect("destroy").multiselect({
				buttonWidth: '80%',
				nonSelectedText: '请选择',
				maxHeight: 200,
				numberDisplayed: 1,
				includeSelectAllOption: true,
				selectAllText: '全选/全不选', //全选按钮显示的文本
				nSelectedText: '项被选中',
				allSelectedText: '已选中所有区服',
			});
			$("#district_serviceOnline").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$('#district_serviceOnline').multiselect("destroy").multiselect({
				buttonWidth: '80%',
				nonSelectedText: '请选择',
				maxHeight: 200,
				numberDisplayed: 1,
				includeSelectAllOption: true,
				selectAllText: '全选/全不选', //全选按钮显示的文本
				nSelectedText: '项被选中',
				allSelectedText: '已选中所有区服',
			});
		}
	});
    $.ajax({
		type: "get",
		url: loginURL+"queryField",
		async: true,
		data: {
			type: 3
		},
		success: function(obj) {
			for(var i = 0; i < obj.rows.length; i++) {
				$("#top_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#vipreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#gradereg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#Diamondreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#consumption_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#server_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
			};
			daychannel=$("#top_channel").val()
			$.ajax({
				type: "get",
				url: channelURL+"queryField",
				async: true,
				data: {
					type: 2
						},
				success: function(res) {
					for(var i = 0; i < res.rows.length; i++) {
						$("#vip_channel").append("<option value='" + res.rows[i].id + "'>" + res.rows[i].name + "</option>");
						$("#grade_channel").append("<option value='" + res.rows[i].id + "'>" + res.rows[i].name + "</option>");
						$("#Diamond_channel").append("<option value='" + res.rows[i].id + "'>" + res.rows[i].name + "</option>");
					}
					showdata()
				}
			})
		}
    })
}
var ajaxPath;
function query() {
	$("#hourtable tbody").empty();
	var district = $("#district_serviceOnline").val();//区服
	if(district!=null){
		district = district.join(',')
	}
	var urls="../real_hour_online_people";
	$.ajax({
		type: "post",
		url: urls,
		async: true,
		data:{
			serverId:district,
			seDate:timeonline ,
		},
		success: function(obj) {
			if(obj.data[0].length !== 0){
				for(var i=0;i<obj.data[0].length;i++){
					if((i%2)===0){
						$("#hourtable").append('<tr style="background:#292929;height:28px"><td style="text-align:center">'+obj.data[0][i].logTime+'点</td><td style="text-align:center">'+obj.data[0][i].playerCount+'</td></tr>')
					}else{
						$("#hourtable").append('<tr style="background:#363636;height:28px"><td style="text-align:center">'+obj.data[0][i].logTime+'点</td><td style="text-align:center">'+obj.data[0][i].playerCount+'</td></tr>')
					}
                        //实现隔行变色
				}
				 $("#hourtable").bootstrapTable({
				        method: 'post',
				        cache: false,
				        height: 220,
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
				var url = JSON.stringify(obj);
				ajaxPath = JSON.parse(url);
				chartDaily()
			}
		}
	});
}
function homedata() {
    $('#real-datatableAll').css('display','none')
    $('.titleLoadAdd').css('display','block')
    change()
}
function showdata(){
	retentionTable();
    retentionTableLTV();
    retentionTableRe();
    paytable1();
    paytable2();
    paytable3();
    servertable1();
    servertable2();
    onlinetable();
    query()
}
function retentionTable() {
	var server=$("#district_service").val()
	var state=0
    $('.titleLoadAdd').css('display','none')
    $('#real-datatableAll').css('display','block')
    var t = $("#real-datatableAll").bootstrapTable({
        url: '../queryDaily',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 8, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId: server,
                channelId:daychannel, //渠道号
				seDate:timedaily,
				state:state
            };
        },
        idField: "logId", //指定主键列
        columns: [
            {
                title: '日期',//区服号
                field: 'logTime',//json数据中rows数组中的属性名
                width:150,
                align: 'center',//水平居中
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    var html =('<span>'+row.logTime.substr(0,10)+'</span>');
                    return html;
                }
            },
            {
                title: '注册账号数',
                width:90,
                field: 'dailyRegister',
                align: 'center'
            },
            {
                title: '激活数',
                field: 'newRegister',
                width:90,
                align: 'center',
            },
            {
                title: '活跃账号数',
                field: 'activeNumber',
                width:90,
                align: 'center'
            },
            {
                title: '新增活跃账号数',
                field: 'newActive',
                width:85,
                align: 'center'
            },
            {
                title: '新付费金额',
                field: 'newRecharge',
                width:95,
                align: 'center'
            },
            {
                title: '总付费金额',
                field: 'payAmount',
                width:95,
                align: 'center'
            },
            {
                title: '总付费账号',
                field: 'payNumber',
                width:80,
                align: 'center'
            },
            {
                title: '首付账号数',
                field: 'fristNumber',
                width:80,
                align: 'center'
            },
            {
                title: '首付金额',
                field: 'fristAmount',
                align: 'center',
                width:90,
            },
            {
                title: '新付费账号',
               field: 'newPayNumber',
                align: 'center',
                width:90,
               // formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    //row.dayRetain = Math.floor(row.dayRetain/25 * 100) / 100
//                    var nub=0;
//                    if(row.threeRetainCount==0)
//                    {
//                        nub = "0"
//                        return nub;
//                    }
//                    nub = (row.threeRetain/row.threeRetainCount).toFixed(2);
//                    return Math.floor(nub * 100);
                	//return '0.00'
                //}
            },
            {
                title: '新付费率(%)',
                field: 'newRate',
                align: 'center',
                width:90,
            },
            {
                title: '滚服账号数',
                field: 'rollOverNember',
                align: 'center',
                width:105
            },
            {
                title: '滚服付费账号数',
                field: 'rollOverPayNember',
                align: 'center',
                width:105
            },
            {
                title: '滚服付费额',
                field: 'rollOverAmount',
                width:100,
                align: 'center'
            },
            {
                title: '首付当日总额',
                field: 'fristSumAmount',
                width:100,
                align: 'center'
            },
            {
                title: '总付费率(%)',
                field: 'rate',
                width:110,
                align: 'center'
            },
            {
                title: 'ARPU',
                field: 'arpu',
                width:100,
                align: 'center'
            },
            {
                title: 'ARPPU',
                field: 'arppu',
                width:100,
                align: 'center'
            },
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });
}
function retentionTableLTV() {
	 $('.ltvLoad').css('display','none')
	 $('.LTVContent').css('display','block')
	var state=0
	var server=$("#district_serviceLTV").val()
	var channel=$("#ltvType").val()
    var t = $("#real-datatableAllLTV").bootstrapTable({
        url: '../queryLTV',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 30, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId: server,
                channelId:channel, //渠道号
				seDate:timeltv,
				state:state
            };
        },
        idField: "logId", //指定主键列
        columns: [
        	{
				title: '日期', //区服号
				field: 'logTime', //json数据中rows数组中的属性名
				align: 'center', //水平居中
				width: 120,
				templet: function(row){ //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
					var html = ('<span style="width:90px;display:inline-block;">' + row.logTime.substr(0, 10) + '</span>');
					return html;
				}
			},
			{
				title: '激活数',
				field: 'newRegister',
				width: 120,
				align: 'center',
			},
			{
				title: '新增活跃账号数',
				field: 'newActive',
				width: 150,
			},
			{
				title: '新付费金额',
				field: 'newRecharge',
				width: 120,
				align: 'center',
			},
			{
				title: '当日充值总额',
				field: 'payAmount',
				width: 120,
				align: 'center',
			},
			{
				title: '首日LTV',
				field: 'dayLtv1',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv1.toFixed(2)
				}
			},
			{
				title: '2日LTV',
				field: 'dayLtv2',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv2.toFixed(2)
				}
			},
			{
				title: '3日LTV',
				field: 'dayLtv3',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv3.toFixed(2)
				}
			},
			{
				title: '4日LTV',
				field: 'dayLtv4',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv4.toFixed(2)
				}
			},
			{
				title: '5日LTV',
				field: 'dayLtv5',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv5.toFixed(2)
				}
			},
			{
				title: '6日LTV',
				field: 'dayLtv6',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv6.toFixed(2)
				}			
			},
			{
				title: '7日LTV',
				field: 'dayLtv7',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv7.toFixed(2)
				}
			},
			{
				title: '8日LTV',
				field: 'dayLtv8',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv8.toFixed(2)
				}
			},
			{
				title: '9日LTV',
				field: 'dayLtv9',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv9.toFixed(2)
				}
			},
			{
				title: '10日LTV',
				field: 'dayLtv10',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv10.toFixed(2)
				}
			},
			{
				title: '11日LTV',
				field: 'dayLtv11',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv11.toFixed(2)
				}
			},
			{
				title: '12日LTV',
				field: 'dayLtv12',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv12.toFixed(2)
				}
			},
			{
				title: '13日LTV',
				field: 'dayLtv13',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv13.toFixed(2)
				}
			},
			{
				title: '14日LTV',
				field: 'dayLtv14',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv14.toFixed(2)
				}
			},
			{
				title: '15日LTV',
				field: 'dayLtv15',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv15.toFixed(2)
				}
			},
			{
				title: '16日LTV',
				field: 'dayLtv16',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv16.toFixed(2)
				}
			},
			{
				title: '17日LTV',
				field: 'dayLtv17',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv17.toFixed(2)
				}
			},
			{
				title: '18日LTV',
				field: 'dayLtv18',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv18.toFixed(2)
				}
			},
			{
				title: '19日LTV',
				field: 'dayLtv19',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv19.toFixed(2)
				}
			},
			{
				title: '20日LTV',
				field: 'dayLtv20',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv20.toFixed(2)
				}
			},
			{
				title: '21日LTV',
				field: 'dayLtv21',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv21.toFixed(2)
				}
			},
			{
				title: '22日LTV',
				field: 'dayLtv22',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv22.toFixed(2)
				}
			},
			{
				title: '23日LTV',
				field: 'dayLtv23',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv23.toFixed(2)
				}
			},
			{
				title: '24日LTV',
				field: 'dayLtv24',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv24.toFixed(2)
				}
			},
			{
				title: '25日LTV',
				field: 'dayLtv25',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv25.toFixed(2)
				}
			},
			{
				title: '26日LTV',
				field: 'dayLtv26',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv26.toFixed(2)
				}
			},
			{
				title: '27日LTV',
				field: 'dayLtv27',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv27.toFixed(2)
				}
			},
			{
				title: '28日LTV',
				field: 'dayLtv28',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv28.toFixed(2)
				}
			},
			{
				title: '29日LTV',
				field: 'dayLtv29',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv29.toFixed(2)
				}
			},
			{
				title: '30日LTV',
				field: 'dayLtv30',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv30.toFixed(2)
				}
			},
			{
				title: '31日LTV',
				field: 'dayLtv31',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv31.toFixed(2)
				}
			},
			{
				title: '32日LTV',
				field: 'dayLtv32',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv32.toFixed(2)
				}
			},
			{
				title: '33日LTV',
				field: 'dayLtv33',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv33.toFixed(2)
				}
			},
			{
				title: '34日LTV',
				field: 'dayLtv34',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv34.toFixed(2)
				}
			},
			{
				title: '35日LTV',
				field: 'dayLtv35',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv35.toFixed(2)
				}
			},
			{
				title: '36日LTV',
				width: 120,
				field: 'dayLtv36',
				align: 'center',
				templet: function(row){
					return row.dayLtv36.toFixed(2)
				}
			},
			{
				title: '37日LTV',
				width: 120,
				field: 'dayLtv37',
				align: 'center',
				templet: function(row){
					return row.dayLtv37.toFixed(2)
				}
			},
			{
				title: '38日LTV',
				width: 120,
				field: 'dayLtv38',
				align: 'center',
				templet: function(row){
					return row.dayLtv38.toFixed(2)
				}
			},
			{
				title: '39日LTV',
				width: 120,
				field: 'dayLtv39',
				align: 'center',
				templet: function(row){
					return row.dayLtv39.toFixed(2)
				}
			},
			{
				title: '40日LTV',
				width: 120,
				field: 'dayLtv40',
				align: 'center',
				templet: function(row){
					return row.dayLtv40.toFixed(2)
				}
			},
			{
				title: '41日LTV',
				width: 120,
				field: 'dayLtv41',
				align: 'center',
				templet: function(row){
					return row.dayLtv41.toFixed(2)
				}
			},
			{
				title: '42日LTV',
				width: 120,
				field: 'dayLtv42',
				align: 'center',
				templet: function(row){
					return row.dayLtv42.toFixed(2)
				}
			},
			{
				title: '43日LTV',
				width: 120,
				field: 'dayLtv43',
				align: 'center',
				templet: function(row){
					return row.dayLtv43.toFixed(2)
				}
			},
			{
				title: '44日LTV',
				width: 120,
				field: 'dayLtv44',
				align: 'center',
				templet: function(row){
					return row.dayLtv44.toFixed(2)
				}
			},
			{
				title: '45日LTV',
				width: 120,
				field: 'dayLtv45',
				align: 'center',
				templet: function(row){
					return row.dayLtv45.toFixed(2)
				}
			},
			{
				title: '46日LTV',
				width: 120,
				field: 'dayLtv46',
				align: 'center',
				templet: function(row){
					return row.dayLtv46.toFixed(2)
				}
			},
			{
				title: '47日LTV',
				field: 'dayLtv47',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv47.toFixed(2)
				}
			},
			{
				title: '48日LTV',
				field: 'dayLtv48',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv48.toFixed(2)
				}
			},
			{
				title: '49日LTV',
				field: 'dayLtv49',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv49.toFixed(2)
				}
			},
			{
				title: '50日LTV',
				field: 'dayLtv50',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv50.toFixed(2)
				}
			},
			{
				title: '51日LTV',
				field: 'dayLtv51',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv51.toFixed(2)
				}
			},
			{
				title: '52日LTV',
				width: 120,
				field: 'dayLtv52',
				align: 'center',
				templet: function(row){
					return row.dayLtv52.toFixed(2)
				}
			},
			{
				title: '53日LTV',
				width: 120,
				field: 'dayLtv53',
				align: 'center',
				templet: function(row){
					return row.dayLtv53.toFixed(2)
				}
			},
			{
				title: '54日LTV',
				width: 120,
				field: 'dayLtv54',
				align: 'center',
				templet: function(row){
					return row.dayLtv54.toFixed(2)
				}
			},
			{
				title: '55日LTV',
				width: 120,
				field: 'dayLtv55',
				align: 'center',
				templet: function(row){
					return row.dayLtv55.toFixed(2)
				}
			},
			{
				title: '56日LTV',
				width: 120,
				field: 'dayLtv56',
				align: 'center',
				templet: function(row){
					return row.dayLtv56.toFixed(2)
				}
			},
			{
				title: '57日LTV',
				width: 120,
				field: 'dayLtv57',
				align: 'center',
				templet: function(row){
					return row.dayLtv57.toFixed(2)
				}
			},
			{
				title: '58日LTV',
				width: 120,
				field: 'dayLtv58',
				align: 'center',
				templet: function(row){
					return row.dayLtv58.toFixed(2)
				}
			},
			{
				title: '59日LTV',
				width: 120,
				field: 'dayLtv59',
				align: 'center',
				templet: function(row){
					return row.dayLtv59.toFixed(2)
				}
			},
			{
				title: '60日LTV',
				field: 'dayLtv60',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv60.toFixed(2)
				}
			},
			{
				title: '61日LTV',
				field: 'dayLtv61',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv61.toFixed(2)
				}
			},
			{
				title: '62日LTV',
				field: 'dayLtv62',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv62.toFixed(2)
				}
			},
			{
				title: '63日LTV',
				field: 'dayLtv63',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv63.toFixed(2)
				}
			},
			{
				title: '64日LTV',
				width: 120,
				field: 'dayLtv64',
				align: 'center',
				templet: function(row){
					return row.dayLtv64.toFixed(2)
				}
			},
			{
				title: '65日LTV',
				field: 'dayLtv65',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv65.toFixed(2)
				}
			},
			{
				title: '66日LTV',
				field: 'dayLtv66',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv66.toFixed(2)
				}
			},
			{
				title: '67日LTV',
				field: 'dayLtv67',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv67.toFixed(2)
				}
			},
			{
				title: '68日LTV',
				field: 'dayLtv68',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv68.toFixed(2)
				}
			},
			{
				title: '69日LTV',
				field: 'dayLtv69',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv69.toFixed(2)
				}
			},
			{
				title: '70日LTV',
				field: 'dayLtv70',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv70.toFixed(2)
				}
			},
			{
				title: '71日LTV',
				field: 'dayLtv71',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv71.toFixed(2)
				}
			},
			{
				title: '72日LTV',
				field: 'dayLtv72',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv72.toFixed(2)
				}
			},
			{
				title: '73日LTV',
				field: 'dayLtv73',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv73.toFixed(2)
				}
			},
			{
				title: '74日LTV',
				field: 'dayLtv74',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv74.toFixed(2)
				}
			},
			{
				title: '75日LTV',
				field: 'dayLtv75',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv75.toFixed(2)
				}
			},
			{
				title: '76日LTV',
				field: 'dayLtv76',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv76.toFixed(2)
				}
			},
			{
				title: '77日LTV',
				width: 120,
				field: 'dayLtv77',
				align: 'center',
				templet: function(row){
					return row.dayLtv77.toFixed(2)
				}
			},
			{
				title: '78日LTV',
				field: 'dayLtv78',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv78.toFixed(2)
				}
			},
			{
				title: '79日LTV',
				field: 'dayLtv79',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv79.toFixed(2)
				}
			},
			{
				title: '80日LTV',
				field: 'dayLtv80',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv80.toFixed(2)
				}
			},
			{
				title: '81日LTV',
				field: 'dayLtv81',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv81.toFixed(2)
				}
			},
			{
				title: '82日LTV',
				field: 'dayLtv82',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv82.toFixed(2)
				}
			},
			{
				title: '83日LTV',
				field: 'dayLtv83',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv83.toFixed(2)
				}
			},
			{
				title: '84日LTV',
				field: 'dayLtv84',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv84.toFixed(2)
				}
			},
			{
				title: '85日LTV',
				field: 'dayLtv85',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv85.toFixed(2)
				}
			},
			{
				title: '86日LTV',
				field: 'dayLtv86',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv86.toFixed(2)
				}
			},
			{
				title: '87日LTV',
				field: 'dayLtv87',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv87.toFixed(2)
				}
			},
			{
				title: '88日LTV',
				field: 'dayLtv88',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv88.toFixed(2)
				}
			},
			{
				title: '89日LTV',
				width: 120,
				field: 'dayLtv89',
				align: 'center',
				templet: function(row){
					return row.dayLtv89.toFixed(2)
				}
			},
			{
				title: '90日LTV',
				width: 120,
				field: 'dayLtv90',
				align: 'center',
				templet: function(row){
					return row.dayLtv90.toFixed(2)
				}
			},
			{
				title: '120日LTV',
				field: 'dayLtv120',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv120.toFixed(2)
				}
			},
			{
				title: '150日LTV',
				field: 'dayLtv150',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv150.toFixed(2)
				}
			},
			{
				title: '180日LTV',
				field: 'dayLtv180',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv180.toFixed(2)
				}
			},
			{
				title: '360日LTV',
				field: 'dayLtv360',
				width: 120,
				align: 'center',
				templet: function(row){
					return row.dayLtv360.toFixed(2)
				}
			},
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });

}
function retentionTableRe() {
	var state=0
	var server=$("#district_serviceRe").val()
	 $('.reLoad').css('display','none')
	 $('.ReContent').css('display','block')
    var t = $("#real-datatableAllRe").bootstrapTable({
        url: '../queryRetain',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 30, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId: server,
				seDate:timereten ,
				state:state
            };
        },
        idField: "logId", //指定主键列
        columns: [
        	{
				title: '日期', //区服号
				field: 'logTime', //json数据中rows数组中的属性名
				width: 120, //水平居中
				formatter: function( value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
					var html = ('<span style="width:90px;display:inline-block;">' + row.logTime.substring(0,row.logTime.indexOf(' ')) + '</span>');
					return html;
				}
			},
			{
				title: '激活数',
				field: 'newRegister',
				width: 120, //水平居中
				align: 'center',
			},
			{
				title: '新增活跃账号数',
				field: 'newActive',
				width: 150,
			},
			{
				title: '新付费金额',
				field: 'newRecharge',
				width: 120,
				align: 'center',
			},
			{
				title: '当日充值总额',
				width: 120,
				field: 'payAmount',
				width: 120,
			},
			
			{
				title: '首日留存',
				field: 'dayRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.dayRetain==null){
                		row.dayRetain=0
                	}
                	if(row.dayAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.dayRetain/row.dayAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '2日留存',
				field: 'twoRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twoRetain==null){
                		row.twoRetain=0
                	}
                	if(row.twoAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twoRetain/row.twoAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '3日留存',
				field: 'threeRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.threeRetain==null){
                		row.threeRetain=0
                	}
                	if(row.threeAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.threeRetain/row.threeAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '4日留存',
				field: 'fourRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.fourRetain==null){
                		row.fourRetain=0
                	}
                	if(row.fourAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.fourRetain/row.fourAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '5日留存',
				field: 'fiveRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.fiveRetain==null){
                		row.fiveRetain=0
                	}
                	if(row.fiveAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.fiveRetain/row.fiveAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '6日留存',
				field: 'sixRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.sixRetain==null){
                		row.sixRetain=0
                	}
                	if(row.sixAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.sixRetain/row.sixAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '7日留存',
				field: 'sevenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.sevenRetain==null){
                		row.sevenRetain=0
                	}
                	if(row.sevenAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.sevenRetain/row.sevenAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '8日留存',
				field: 'eightRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.eightRetain==null){
                		row.eightRetain=0
                	}
                	if(row.eightAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.eightRetain/row.eightAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '9日留存',
				field: 'nineRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.nineRetain==null){
                		row.nineRetain=0
                	}
                	if(row.nineAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.nineRetain/row.nineAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '10日留存',
				field: 'tenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.tenRetain==null){
                		row.tenRetain=0
                	}
                	if(row.tenAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.tenRetain/row.tenAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '11日留存',
				field: 'elevenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.elevenRetain==null){
                		row.elevenRetain=0
                	}
                	if(row.elevenAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.elevenRetain/row.elevenAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '12日留存',
				field: 'twelveRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twelveRetain==null){
                		row.twelveRetain=0
                	}
                	if(row.twelveAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twelveRetain/row.twelveAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '13日留存',
				field: 'thirteenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.thirteenRetain==null){
                		row.thirteenRetain=0
                	}
                	if(row.thirteenAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.thirteenRetain/row.thirteenAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '14日留存',
				field: 'fourteenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.fourteenRetain==null){
                		row.fourteenRetain=0
                	}
                	if(row.fourteenAccountCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.fourteenRetain/row.fourteenAccountCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '15日留存',
				field: 'fifteenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.fifteenRetain==null){
                		row.fifteenRetain=0
                	}
                	if(row.fifteenRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.fifteenRetain/row.fifteenRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '16日留存',
				field: 'sixteenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.sixteenRetain==null){
                		row.sixteenRetain=0
                	}
                	if(row.sixteenRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.sixteenRetain/row.sixteenRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '17日留存',
				field: 'seventeenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.seventeenRetain==null){
                		row.seventeenRetain=0
                	}
                	if(row.seventeenRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.seventeenRetain/row.seventeenRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '18日留存',
				field: 'eighteenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.eighteenRetain==null){
                		row.eighteenRetain=0
                	}
                	if(row.eighteenRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.eighteenRetain/row.eighteenRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '19日留存',
				field: 'nineteenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.nineteenRetain==null){
                		row.nineteenRetain=0
                	}
                	if(row.nineteenRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.nineteenRetain/row.nineteenRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '20日留存',
				field: 'twentyRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentyRetain==null){
                		row.twentyRetain=0
                	}
                	if(row.twentyRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentyRetain/row.twentyRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '21日留存',
				field: 'twentyOneRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentyOneRetain==null){
                		row.twentyOneRetain=0
                	}
                	if(row.twentyOneRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentyOneRetain/row.twentyOneRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '22日留存',
				width: 120,
				field: 'twentyTwoRetain',
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentyTwoRetain==null){
                		row.twentyTwoRetain=0
                	}
                	if(row.twentyTwoRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentyTwoRetain/row.twentyTwoRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '23日留存',
				width: 120,
				field: 'twentyThreeRetain',
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentyThreeRetain==null){
                		row.twentyThreeRetain=0
                	}
                	if(row.twentyThreeRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentyThreeRetain/row.twentyThreeRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '24日留存',
				field: 'twentyFourRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentyFourRetain==null){
                		row.twentyFourRetain=0
                	}
                	if(row.twentyFourRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentyFourRetain/row.twentyFourRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '25日留存',
				field: 'twentyFiveRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentyFiveRetain==null){
                		row.twentyFiveRetain=0
                	}
                	if(row.twentyFiveRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentyFiveRetain/row.twentyFiveRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '26日留存',
				field: 'twentySixRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentySixRetain==null){
                		row.twentySixRetain=0
                	}
                	if(row.twentySixRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentySixRetain/row.twentySixRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '27日留存',
				field: 'twentySevenRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentySevenRetain==null){
                		row.twentySevenRetain=0
                	}
                	if(row.twentySevenRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentySevenRetain/row.twentySevenRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '28日留存',
				field: 'twentyEightRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentyEightRetain==null){
                		row.twentyEightRetain=0
                	}
                	if(row.twentyEightRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentyEightRetain/row.twentyEightRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '29日留存',
				field: 'twentyNineRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.twentyNineRetain==null){
                		row.twentyNineRetain=0
                	}
                	if(row.twentyNineRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.twentyNineRetain/row.twentyNineRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '30日留存',
				field: 'thirtyRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.thirtyRetain==null){
                		row.thirtyRetain=0
                	}
                	if(row.thirtyRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.thirtyRetain/row.thirtyRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '45日留存',
				field: 'fortyfiveRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.fortyfiveRetain==null){
                		row.fortyfiveRetain=0
                	}
                	if(row.fortyfiveRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.fortyfiveRetain/row.fortyfiveRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '60日留存',
				field: 'sixtyRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.sixtyRetain==null){
                		row.sixtyRetain=0
                	}
                	if(row.sixtyRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.sixtyRetain/row.sixtyRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '90日留存',
				field: 'ninetyRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.ninetyRetain==null){
                		row.ninetyRetain=0
                	}
                	if(row.ninetyRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.ninetyRetain/row.ninetyRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '120日留存',
				field: 'onehatwentyRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.onehatwentyRetain==null){
                		row.onehatwentyRetain=0
                	}
                	if(row.onehatwentyRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.onehatwentyRetain/row.onehatwentyRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '150日留存',
				field: 'onehafiftyRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.onehafiftyRetain==null){
                		row.onehafiftyRetain=0
                	}
                	if(row.onehafiftyRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.onehafiftyRetain/row.onehafiftyRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '180日留存',
				field: 'onehaeightRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.onehaeightRetain==null){
                		row.onehaeightRetain=0
                	}
                	if(row.onehaeightRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.onehaeightRetain/row.onehaeightRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
			{
				title: '360日留存',
				field: 'oneYearRetain',
				width: 120,
				align: 'center',
				formatter: function( value, row, index) {
					var nub=0;
                	if(row.oneYearRetain==null){
                		row.oneYearRetain=0
                	}
                	if(row.oneYearRetainCount==0)
                		{
                		nub = "0.00"
                		return nub;
                		}
                	nub = (row.oneYearRetain/row.oneYearRetainCount).toFixed(4);
                    var a= (nub * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return "<span class='down_number'>" + b + "</span>"
				}
			},
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });
}
function paytable1() {
	var state=0
	var server=$("#district_servicePay1").val()
	if(server!=null){
		server = server.join(","); 		
	}
	var channel=$("#vip_channel").val()//
	var deng=$("#vipreg_channel").val()//
    var t = $("#real-datatableAllPay").bootstrapTable({
        url: '../queryVipLevel',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 30, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId: server,
				loginType:channel,
				channelId:deng,
            };
        },
        idField: "logId", //指定主键列
        columns: [
        	{
				title: 'VIP等级',
				field: 'rolelevel',
				align: 'center',
			},
			{
				title: '人数',
				field: 'accountIdCount',
				align: 'center',
			},
			{
				title: '占比',
				field: 'proportionRate',
				align: 'center',
				formatter: function (value, row, index) {
                    var a= (row.proportionRate * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return b+"%"
                }
			},
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });
}
function paytable2() {
	var state=0
	var server=$("#district_servicePay2").val()
	if(server!=null){
		server = server.join(","); 		
	}
	var channel=$("#grade_channel").val()
	var deng=$("#gradereg_channel").val()
    var t = $("#real-datatableAllPay2").bootstrapTable({
        url: '../queryLevelDistribution',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 30, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId: server,
				loginType:channel,
				channelId:deng,
            };
        },
        idField: "logId", //指定主键列
        columns: [
        	{
				title: '等级',
				field: 'rolelevel',
				align: 'center',
			},
			{
				title: '人数',
				field: 'accountIdCount',
				align: 'center',
			},
			{
				title: '占比',
				field: 'proportionRate',
				align: 'center',
				formatter: function (value, row, index) {
                    var a= (row.proportionRate * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
                    if(c<=0){
                    	c=b.length;
                    	b+='.';
                    }
                    while(b.length<=c+2){
                    	b+='0';
                    }
					return b+"%"
                }
			},
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });
}
function paytable3(server,start,end) {
	var state=0
	var server=$("#district_servicePay3").val()
	if(server!=null){
		server = server.join(","); 		
	}
	var channel=$("#Diamond_type").val()
	var deng=$("#Diamondreg_channel").val()
	var nel=$("#Diamond_channel").val()
    var t = $("#real-datatableAllPay3").bootstrapTable({
        url: '../queryDiamondsConsume',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 30, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId: server,
				loginType:nel,
				channelId:deng,
				seDate: timepay3 ,
				moneyType:channel
            };
        },
        idField: "logId", //指定主键列
        columns: [
        	{
				title: '消耗类型',
				field: 'causeId',
				align: 'center',
				formatter: function(value, row, index) {
					var a = $.cookie('value');
					if(a == null) {
						return obj[row.causeId]
					}
					if(a == "chinese") {
						return obj[row.causeId]
					}
					if(a == "Korean") {
						return only[row.causeId]
					}
				}
			},
			{
				title: '消耗次数',
				field: 'nmberOfCos',
				align: 'center',
			},
			{
				title: '钻石总数',
				field: 'locationMoney',
				align: 'center',
			},
			{
				title: '钻石总数占比',
				field: '',
				align: 'center',
				formatter: function(value, row, index) {
					var sum = (row.locationMoney / row.locationTotalMoney).toFixed(4);
					var a= (sum * 100).toFixed(2);
                    var b = a.toString();
                    var c = b.indexOf('.');
					if(c <= 0) {
						c = b.length;
						b += '.';
					}
					while(b.length <= c + 2) {
						b += '0';
					}
					return b + "%"
				}
			},
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });
}
function  servertable1(){
	var state=0
	var channel=$("#consumption_channel").val()
    var t = $("#real-datatableAllServer").bootstrapTable({
        url: '../queryDailyList',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 30, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                channelId:channel,
				startTime:timeserver1 
            };
        },
        idField: "logId", //指定主键列
        columns: [
        	{
				title: '区服号',
				field: 'serverId',
			},
			{
				title: '日期',
				field: 'logTime',
				formatter: function(value, row, index) {
                	var html =('<span>'+row.logTime.substr(0,10)+'</span>');
					return html;
                }
			},
			{
				title: '激活数',
				field: 'dailyRegister',
			},
			{
				title: '活跃数',
				field: 'activeNumber',
			},
			{
				title: '总付费金额',
				field: 'payAmount',
				width: 130
			},
			{
				title: '新激活贡献',
				field: 'newRegRecMon',
				width: 120
			},
			{
				title: '付费人数',
				field: 'payNumber',
			},
			{
				title: '新登充值人数',
				field: 'newRegRecNum',
				width:120
			},
			{
				title: '2次付费人数',
				field: 'doublePlyNum',
				width:120
			},
			{
				title: '付费率(%)',
				field: 'rate',
				width: 100
			},
			{
				title: 'ARPU',
				field: 'arpu',
			},
			{
				title: 'ARPPU',
				field: 'arppu',
			},
			{
				title: '新增注册付费率',
				field: 'newRegRate',
				width:130
			},
			{
				title: '新注册ARPU',
				field: 'newRegArpu',
				width:120
			},
			{
				title: '新注册ARPPU',
				field: 'newRegArppu',
				width:130
			},
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });
}
function  servertable2(){
	var state=0
	var channel=$("#server_channel").val()
    var t = $("#real-datatableAllServer2").bootstrapTable({
        url: '../queryDailyList',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 30, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                channelId:channel,
				startTime:timeserver2 
            };
        },
        idField: "logId", //指定主键列
        columns: [
        	{
				title: '区服号',
				field: 'serverId',
				align: 'center',
			},
			{
				title: '开服时间',
				field: 'startTime',
				width: 200,
				formatter: function(value, row, index) {
					var html = ('<span>' + row.startTime.substr(0, 10) + '</span>');
					return html;
				}
			},
			{
				title: '本日活跃数',
				field: 'activeNumber',
				align: 'center',
			},
			{
				title: '累计注册数',
				field: 'cumRegister',
				align: 'center',
			},
			{
				title: '本日充值',
				field: 'payAmount',
				align: 'center',
			},
			{
				title: '本日充值人数',
				field: 'payNumber',
				align: 'center',
			},
			{
				title: '累计充值',
				field: 'cumRecharge',
				align: 'center',
			},
			{
				title: '累计充值人数',
				field: 'cumRecNum',
				align: 'center',
			},
			{
				title: '累计LTV',
				field: 'cumLtv',
				align: 'center',
			},
			{
				title: '开服天数',
				field: 'roleLevel',
				align: 'center',
				formatter: function(value, row, index) {
					var a = new Date(times3);
					var html = new Date(row.startTime.substr(0, 10));
					var c = (a - html) / 1000
					var day = parseInt(c / (24 * 60 * 60))
					return day;
				}
			},
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });
}
function onlinetable(){
	var district = $("#district_serviceOnline").val();//区服
	if(district!=null){
		district = district.join(',')
	}
    var t = $("#real-datatableAllOnline").bootstrapTable({
        url: '../real_time_online_people',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageSize: 30, //如果设置了分页，页面数据条数
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId:district,
				seDate:timeonline 
            };
        },
        idField: "logId", //指定主键列
        columns: [
        	  {
					title: '区服号', //区服号
					field: 'serverId', //json数据中rows数组中的属性名
					align: 'center', //水平居中
				},
				{
					title: '最高玩家数',
					field: 'max_player_count',
					align: 'center'
				},
				{
					title: '最低玩家数',
					field: 'min_player_count',
					align: 'center'
				},
				{
					title: '当前在线玩家数',
					field: 'playerCount',
					align: 'center'
				},
        ],
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
       
    });
}
function chartDaily() {
	var someDate
	var logTime = [];//时间
	var dataToday = [];//今日
	var active = [];//昨日
	getForm()
	function getForm(){
		if(ajaxPath.data.length !==0){
			for(var i=0;i<ajaxPath.data[0].length;i++){
				someDate=ajaxPath.data[0][i].logTime
				var rq=ajaxPath.data[0][i].playerCount;
				logTime.push(someDate)
				dataToday.push(rq);
			}
			if(ajaxPath.data[1].length===0){
				for(var i=0;i<logTime.length;i++){
					var rq=0
					active.push(rq);
				}
			}else{
				for(var i=0;i<ajaxPath.data[1].length;i++){
					var rq=ajaxPath.data[1][i].playerCount;
					active.push(rq);
				}
			}
		}
	};
	console.log(logTime)
    chart = Highcharts.chart('container', {
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
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            
            gridLineWidth: .5,
            gridLineColor:'#202020',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            categories: logTime,
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
            enabled:false
        },
        series: [{
            name:  '今日',
            data: dataToday,
            lineWidth: 2,
            color:"#AF611C",
            symbolWidth:35,
            symbol:'circle',
        },
            {
            name: '昨日',
            data: active,
            lineWidth: 2,
            color:"#999999",
            symbolWidth:35,
            symbol:'circle',
        }
        ],
    });
}
