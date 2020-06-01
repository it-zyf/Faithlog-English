language()
var old;
var newtime;
var dis_choice;
var dis_allaction;
var dis_selec;
var dis_allserver;
var dis_server;
var dis_times;
var dis_cycles;
var dis_actnumber;
var dis_regnumber;
var dis_account_rate;
var dis_regsum_number;
var dis_arpu;
var dis_arppu;
var dis_addnumber;
var dis_addrefill_number;
var dis_addrefill_rate;
var dis_addtotal;
var dis_regamount;
var dis_newregcont;
var dis_regnumber;
var dis_newregnumber;
var dis_towreg;
var dis_rate;
var dis_newreg_rate;
var dis_newreg_arpu;
var dis_newreg_arppu;
var dis_opentime;
var dis_daynumber;
var dis_cumregnum;
var dis_todayreg;
var dis_todayreg_number;
var dis_cumreg_number;
var dis_cumreg_out;
var dis_cumltv;
var dis_opennum;
function language(){
	var cook = $.cookie("value");
	if(cook == null){
		dis_choice = "请选择";
		dis_allaction = "全选/全不选";
		dis_selec = "项被选中";
		dis_allserver = "已选中所有选项";
		dis_server = "区服号";
		dis_times = "日期";
		dis_cycles = "周期日期";
		dis_actnumber = "活跃数";
		dis_regnumber = "充值账号数";
		dis_account_rate = "付费帐号率";
		dis_regsum_number = "充值总额";
		dis_arpu = "ARPU";
		dis_arppu = "ARPPU";
		dis_addnumber = "注册账号数";
		dis_addrefill_number = "新增注册充值数";
		dis_addrefill_rate = "新增注册付费率";
		dis_addtotal = "新增贡献总额";
		dis_regamount = "充值金额";
		dis_newregcont = "新注册贡献";
		dis_regnumber = "充值人数";
		dis_newregnumber = "新登充值人数";
		dis_towreg = "2次付费人数";
		dis_rate = "付费率(%)";
		dis_newreg_arpu = "新注册ARPU";
		dis_newreg_arppu = "新注册ARPPU";
		dis_opentime = "开服时间";
		dis_daynumber = "本日活跃数";
		dis_cumregnum = "累计注册数";
		dis_todayreg = "本日充值";
		dis_todayreg_number = "本日充值人数";
		dis_cumreg_out = "累计充值";
		dis_cumreg_number = "累计充值人数";
		dis_cumltv = "累计LTV";
		dis_opennum = "开服天数";
	}else if(cook == "chinese"){
		dis_choice = "请选择";
		dis_allaction = "全选/全不选";
		dis_selec = "项被选中";
		dis_allserver = "已选中所有选项";
		dis_server = "区服号";
		dis_times = "日期";
		dis_cycles = "周期日期";
		dis_actnumber = "活跃数";
		dis_regnumber = "充值账号数";
		dis_account_rate = "付费帐号率";
		dis_regsum_number = "充值总额";
		dis_arpu = "ARPU";
		dis_arppu = "ARPPU";
		dis_addnumber = "注册账号数";
		dis_addrefill_number = "新增注册充值数";
		dis_addrefill_rate = "新增注册付费率";
		dis_addtotal = "新增贡献总额";
		dis_regamount = "充值金额";
		dis_newregcont = "新注册贡献";
		dis_regnumber = "充值人数";
		dis_newregnumber = "新登充值人数";
		dis_towreg = "2次付费人数";
		dis_rate = "付费率(%)";
		dis_newreg_arpu = "新注册ARPU";
		dis_newreg_arppu = "新注册ARPPU";
		dis_opentime = "开服时间";
		dis_daynumber = "本日活跃数";
		dis_cumregnum = "累计注册数";
		dis_todayreg = "本日充值";
		dis_todayreg_number = "本日充值人数";
		dis_cumreg_out = "累计充值";
		dis_cumreg_number = "累计充值人数";
		dis_cumltv = "累计LTV";
		dis_opennum = "开服天数";
	}else if(cook == "Korean"){
		dis_choice = "请选择";
		dis_allaction = "全选/全不选";
		dis_selec = "项被选中";
		dis_allserver = "已选中所有选项";
		dis_server = "区服号";
		dis_times = "日期";
		dis_cycles = "周期日期";
		dis_actnumber = "活跃数";
		dis_regnumber = "充值账号数";
		dis_account_rate = "付费帐号率";
		dis_regsum_number = "充值总额";
		dis_arpu = "ARPU";
		dis_arppu = "ARPPU";
		dis_addnumber = "注册账号数";
		dis_addrefill_number = "新增注册充值数";
		dis_addrefill_rate = "新增注册付费率";
		dis_addtotal = "新增贡献总额";
		dis_regamount = "充值金额";
		dis_newregcont = "新注册贡献";
		dis_regnumber = "充值人数";
		dis_newregnumber = "新登充值人数";
		dis_towreg = "2次付费人数";
		dis_rate = "付费率(%)";
		dis_newreg_arpu = "新注册ARPU";
		dis_newreg_arppu = "新注册ARPPU";
		dis_opentime = "开服时间";
		dis_daynumber = "本日活跃数";
		dis_cumreg = "累计注册数";
		dis_todayreg = "本日充值";
		dis_todayreg_number = "本日充值人数";
		dis_cumreg_out = "累计充值";
		dis_cumreg_number = "累计充值人数";
		dis_cumltv = "累计LTV";
		dis_opennum = "开服天数";
	}
}
//设置默认时间
today()
function today() {
	var today = new Date();
	var y = today.getFullYear();
	today.setDate(today.getDate() - 1)
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
var times = old+"~"+newtime;
var times2 = old;
var times3 = old;
////layui配置
layui.use(['element', 'laydate','table'], function() {
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
		trigger: 'click',
		done:function(res){
			times = res
		}
	});
	laydate.render({
		elem: '#contimes',
		//		type:'datetime',//日期可选时分秒
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old,
		max: 'now',
		done:function(res){
			times2 = res
		}
	})
	laydate.render({
		elem: '#viptimes',
		//		type:'datetime',//日期可选时分秒
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old,
		max: 'now',
		done:function(res){
			times3 = res
		}
	})
	
});
//区服下拉多选
change()
function change() {
	$.ajax({
		type: "get",
		url: "http://localhost:8080/FaithLogNew/queryAreas.action",
		async: true,
		success: function(obj) {
			$('#district_service').multiselect("destroy")
			for(var i = 0; i < obj.rows.length; i++) {
				$("#district_service").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
			};
			$("#district_service").prepend("<option value='0'>全部</option>");
			$("#district_service").each(function() {
				$(this).find("option").eq(0).attr("selected", "selected")
			})
			$('#district_service').multiselect({
				buttonWidth: '66%',
				nonSelectedText: dis_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: dis_allaction, //全选按钮显示的文本	
				nSelectedText: dis_selec,
				allSelectedText: dis_allserver,
				enableFiltering: false, //搜索框
			});
			onchannel()
		}
	});
}
//登录方式下拉赋值
function onchannel() {
	$.ajax({
		type: "get",
		url: "http://localhost:8080/FaithLogNew/queryField.action",
		async: true,
		data: {type: 2},
		success: function(obj) {
			for(var i = 0; i < obj.rows.length; i++) {
				$("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
//				$("#consumption_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
//				$("#vip_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
			};

		}
	})
	$.ajax({
		type: "get",
		url: "http://localhost:8080/FaithLogNew/queryField.action",
		async: true,
		data: {
			type: 3
		},
		success: function(obj) {
			for(var i = 0; i < obj.rows.length; i++) {
				$("#consumption_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#vip_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
			};
//			onread()
			consum()
			vipdistribution()
		}
	})
}


//onread()
//consum()
//vipdistribution()
//区间数据报告分页
//function onread(obj) {
//	$("body").mLoading("show")
//	var x = $(obj).attr("id");
//	var sta = "1";
//	if(x == "export"){
//		sta = "0"
//	}else{
//		sta = "1"
//	}
//	var district_service = $("#district_service").val();//区服
//	var channel = $("#channel").val();//渠道号
//	var Periodic = $("#Periodic").val();//周期日期
//	$("#datatable").bootstrapTable('destroy');
//	var t = $("#datatable").bootstrapTable({
//		url: '../queryCycle.action', //查询数据接口
//		method: 'post',
//		dataType: "json",
//		cache: false,
//		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
//		queryParamsType: "",
//		striped: true, //设置为 true 会有隔行变色效果
//		undefinedText: "0", //当数据为 undefined 时显示的字符
//		pagination: true, //分页
//		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
//		showToggle: false, //是否显示 切换试图（table/card）按钮
//		showColumns: false, //是否显示 内容列下拉框
//		pageNumber: 1, //如果设置了分页，首页页码
//		// showPaginationSwitch:true,//是否显示 数据条数选择框
//		pageSize: 20, //如果设置了分页，页面数据条数
//		pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
//		paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
//		paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
//		search: false, //显示搜索框
//		data_local: "zh-US", //表格汉化
//		sidePagination: "server", //服务端处理分页
//		queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
//			return { //这里的params是table提供的
//				pageIndex: params.pageNumber, //从数据库第几条记录开始
//				pageSize: params.pageSize, //找多少条
//				serverId:district_service,
//				channelId:channel,
//				cycleType:Periodic,
//				seDate:times,
//				state:sta
//			};
//		},
//		idField: "logId", //指定主键列
//		columns: [
//			{
//				title: dis_cycles,
//				field: 'cycleWeekMonth',
//				align: 'center',
//			},
//			{
//				title: dis_actnumber,
//				field: 'activeNumber',
//				align: 'center',
//			},
//			{
//				title: dis_regnumber,
//				field: 'payNumber',
//				align: 'center',
//			},
//			{
//				title: dis_account_rate,
//				field: 'rate',
//				align: 'center',
//			},
//			{
//				title: dis_regsum_number,
//				field: 'payAmount',
//				align: 'center',
//			},
//			{
//				title: dis_arpu,
//				field: 'arpu',
//				align: 'center',
//			},
//			{
//				title: dis_arppu,
//				field: 'arppu',
//				align: 'center',
//			},
//			{
//				title: dis_addnumber,
//				field: 'dailyRegister',
//				align: 'center',
//			},
//			{
//				title: dis_addrefill_number,
//				field: 'newRegRecNum',
//				align: 'center',
//			},
//			{
//				title: dis_addrefill_rate,
//				field: 'newRegRate',
//				align: 'center',
//			},
//			{
//				title: dis_addtotal,
//				field: 'newRegRecMon',
//				align: 'center',
//			},
//		]
//	});
//	t.on('load-success.bs.table', function(data) {
//		$("body").mLoading("hide")
//		$(".pull-right").css("display", "block");
//		$("#datatable tbody tr").css("background-color", "#323232")
//		$("#datatable tbody tr:even").css("background-color", "#3b3b3b")
//	});
//}
//各服每日数据分页
function consum() {
	$("body").mLoading("show");
	var consumption_channel = $("#consumption_channel").val();//渠道
	console.log(consumption_channel)
	layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider'], function(){
		  var laydate = layui.laydate //日期
		  ,laypage = layui.laypage //分页
		  ,layer = layui.layer //弹层
		  ,table = layui.table //表格
		  ,carousel = layui.carousel //轮播
		  ,upload = layui.upload //上传
		  ,element = layui.element //元素操作
		  ,slider = layui.slider //滑块
		  
		//执行一个 table 实例
		  table.render({
		    elem: '#consumption_table'
		    ,height: 648
		    ,method: 'post'
		    ,url: '../queryDailyList.action' //数据接口
		    ,where: {
		    	channelId:consumption_channel,
				startTime:times2
	        }
	        ,text: {none: 'No matching records found'}
		    ,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
		        layout: ['limit','prev',  'page','next' ] //自定义分页布局
		    }
		    ,limit:20
		    ,limits:[5,10,20,40]
	        ,response: {
	            statusName: 'state',
	            msgName: 'message',
	            statusCode: true,
	            countName: 'total',
	            dataName: 'rows'
	        },
	        request: {
	            pageName: 'pageIndex',
	            limitName: 'pageSize'
	        },
	        done: function (res, curr, count) {
	        	$("body").mLoading("hide");
	            $("table").css("width", "100%");  
	            if($(".consumption .layui-table-body")[0].textContent == "No matching records found"){
	            	$(".consumption .layui-table-header").css("overflow-x","auto")
	            }
	            var pagetabel = $(".consumption .layui-table-page").width()
	            var pagewidth = $(".layui-laypage-default").width()
	            var pagelimitmargin = pagetabel - pagewidth -20 +"px" +" !important"
	            pagelimitmargin ="margin-right:" + pagelimitmargin
	            $(".layui-laypage-limits").css("cssText", pagelimitmargin);
	         }
	        ,cellMinWidth: 120
	        ,unresize:true
	        ,even: true //开启隔行背景
		    ,title: ''
		    ,page: true //开启分页
		    ,cols: [[ //表头
		    	{
					title: dis_server,
					field: 'serverId',
				},
				{
					title: dis_times,
					field: 'logTime',
					templet: function (row) {
	                	var html =('<span>'+row.logTime.substr(0,10)+'</span>');
						return html;
	                }
				},
				{
					title: dis_addnumber,
					field: 'dailyRegister',
				},
				{
					title: dis_actnumber,
					field: 'activeNumber',
				},
				{
					title: dis_regamount,
					field: 'payAmount',
					width: 130
				},
				{
					title: dis_newregcont,
					field: 'newRegRecMon',
					width: 120
				},
				{
					title: dis_regnumber,
					field: 'payNumber',
				},
				{
					title: dis_newregnumber,
					field: 'newRegRecNum',
					width:120
				},
				{
					title: dis_towreg,
					field: 'doublePlyNum',
					width:120
				},
				{
					title: dis_rate,
					field: 'rate',
					width: 100
				},
				{
					title: dis_arpu,
					field: 'arpu',
				},
				{
					title: dis_arppu,
					field: 'arppu',
				},
				{
					title: dis_addrefill_rate,
					field: 'newRegRate',
					width:130
				},
				{
					title: dis_newreg_arpu,
					field: 'newRegArpu',
					width:120
				},
				{
					title: dis_newreg_arppu,
					field: 'newRegArppu',
					width:130
				},
		    ]]
		  });
	})
//	$("#aaa").bootstrapTable('destroy');
	var t = $("#aaa").bootstrapTable({
		url: '../queryDailyList.action',
		method: 'post',
		dataType: "json",
		cache: false,
		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
		queryParamsType: "",
		striped: true, //设置为 true 会有隔行变色效果
		undefinedText: "0", //当数据为 undefined 时显示的字符
		pagination: true, //分页
		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
		showToggle: false, //是否显示 切换试图（table/card）按钮
		showColumns: false, //是否显示 内容列下拉框
		pageNumber: 1, //如果设置了分页，首页页码
		// showPaginationSwitch:true,//是否显示 数据条数选择框
		pageSize: 20, //如果设置了分页，页面数据条数
		pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
		paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
		paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
		search: false, //显示搜索框
		data_local: "zh-US", //表格汉化
		sidePagination: "server", //服务端处理分页
		queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
			return { //这里的params是table提供的
				pageIndex: params.pageNumber, //从数据库第几条记录开始
				pageSize: params.pageSize, //找多少条
				channelId:consumption_channel,
				startTime:times2
			};
		},
		idField: "logId", //指定主键列
		columns: [{
				title: dis_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: dis_times,
				field: 'logTime',
				align: 'center',
				formatter: function (value, row, index) {
                	var html =('<span>'+row.logTime.substr(0,10)+'</span>');
					return html;
                }
			},
			{
				title: dis_addnumber,
				field: 'dailyRegister',
				align: 'center',
			},
			{
				title: dis_actnumber,
				field: 'activeNumber',
				align: 'center',
			},
			{
				title: dis_regamount,
				field: 'payAmount',
				align: 'center',
			},
			{
				title: dis_newregcont,
				field: 'newRegRecMon',
				align: 'center',
			},
			{
				title: dis_regnumber,
				field: 'payNumber',
				align: 'center',
			},
			{
				title: dis_newregnumber,
				field: 'newRegRecNum',
				align: 'center',
			},
			{
				title: dis_towreg,
				field: 'doublePlyNum',
				align: 'center',
			},
			{
				title: dis_rate,
				field: 'rate',
				align: 'center',
			},
			{
				title: dis_arpu,
				field: 'arpu',
				align: 'center',
			},
			{
				title: dis_arppu,
				field: 'arppu',
				align: 'center',
			},
			{
				title: dis_addrefill_rate,
				field: 'newRegRate',
				align: 'center',
			},
			{
				title: dis_newreg_arpu,
				field: 'newRegArpu',
				align: 'center',
			},
			{
				title: dis_newreg_arppu,
				field: 'newRegArppu',
				align: 'center',
			},
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#consumption_table tbody tr").css("background-color", "#323232")
		$("#consumption_table tbody tr:even").css("background-color", "#3b3b3b")
	});
}
//各服累计数据
function vipdistribution() {
	$("body").mLoading("show")
	var channel = $("#vip_channel").val();//渠道
	layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider'], function(){
		  var laydate = layui.laydate //日期
		  ,laypage = layui.laypage //分页
		  ,layer = layui.layer //弹层
		  ,table = layui.table //表格
		  ,carousel = layui.carousel //轮播
		  ,upload = layui.upload //上传
		  ,element = layui.element //元素操作
		  ,slider = layui.slider //滑块
		  
		//执行一个 table 实例
		  table.render({
		    elem: '#vip_table'
		    ,height: 648
		    ,method: 'post'
		    ,url: '../queryDailyList.action' //数据接口
		    ,cellMinWidth: 120
		    ,text: {none: 'No matching records found'}
		    ,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
		        layout: ['limit','prev',  'page','next' ] //自定义分页布局
		    }
		    ,limit:20
		    ,limits:[5,10,20,40]
		    ,where: {
		    	channelId:channel,
				startTime:times3
	        },
	        response: {
	            statusName: 'state',
	            msgName: 'message',
	            statusCode: true,
	            countName: 'total',
	            dataName: 'rows'
	        },
	        request: {
	            pageName: 'pageIndex',
	            limitName: 'pageSize'
	        },
	        done: function (res, curr, count) {
	        	$("body").mLoading("hide");
	            $("table").css("width", "100%");  
	            if($(".consumption .layui-table-body")[0].textContent == "No matching records found"){
	            	$(".consumption .layui-table-header").css("overflow-x","auto")
	            }
	         }
	        ,unresize:true
	        ,even: true //开启隔行背景
		    ,title: ''
		    ,page: true //开启分页
		    ,cols: [[ //表头
		    	{
					title: dis_server,
					field: 'serverId',
					align: 'center',
				},
				{
					title: dis_opentime,
					field: 'startTime',
					width: 200,
					templet: function(row) { 
						var html = ('<span>' + row.startTime.substr(0, 10) + '</span>');
						return html;
					}
				},
				{
					title: dis_daynumber,
					field: 'activeNumber',
					align: 'center',
				},
				{
					title: dis_cumregnum,
					field: 'cumRegister',
					align: 'center',
				},
				{
					title: dis_todayreg,
					field: 'payAmount',
					align: 'center',
				},
				{
					title: dis_todayreg_number,
					field: 'payNumber',
					align: 'center',
				},
				{
					title: dis_cumreg_out,
					field: 'cumRecharge',
					align: 'center',
				},
				{
					title: dis_cumreg_number,
					field: 'cumRecNum',
					align: 'center',
				},
				{
					title: dis_cumltv,
					field: 'cumLtv',
					align: 'center',
				},
				{
					title: dis_opennum,
					field: 'roleLevel',
					align: 'center',
					templet: function(row) {
						var a = new Date(times3);
						var html = new Date(row.startTime.substr(0, 10));
						var c = (a - html) / 1000
						var day = parseInt(c / (24 * 60 * 60))
						return day;
					}
				},
		    ]]
		  });
	})
	$("#aaa").bootstrapTable('destroy');
	var t = $("#aaa").bootstrapTable({
		url: '../queryDailyList.action',
		method: 'post',
		dataType: "json",
		cache: false,
		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
		queryParamsType: "",
		striped: true, //设置为 true 会有隔行变色效果
		undefinedText: "0", //当数据为 undefined 时显示的字符
		pagination: true, //分页
		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
		showToggle: false, //是否显示 切换试图（table/card）按钮
		showColumns: false, //是否显示 内容列下拉框
		pageNumber: 1, //如果设置了分页，首页页码
		// showPaginationSwitch:true,//是否显示 数据条数选择框
		pageSize: 20, //如果设置了分页，页面数据条数
		pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
		paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
		paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
		search: false, //显示搜索框
		data_local: "zh-US", //表格汉化
		sidePagination: "server", //服务端处理分页
		queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
			return { //这里的params是table提供的
				pageIndex: params.pageNumber, //从数据库第几条记录开始
				pageSize: params.pageSize, //找多少条
				channelId:channel,
				startTime:times3
			};
		},
		idField: "logId", //指定主键列
		columns: [{
				title: dis_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: dis_opentime,
				field: 'startTime',
				align: 'center',
				formatter: function(value, row, index) { 
					var html = ('<span>' + row.startTime.substr(0, 10) + '</span>');
					return html;
				}
			},
			{
				title: dis_daynumber,
				field: 'activeNumber',
				align: 'center',
			},
			{
				title: dis_cumregnum,
				field: 'cumRegister',
				align: 'center',
			},
			{
				title: dis_todayreg,
				field: 'payAmount',
				align: 'center',
			},
			{
				title: dis_todayreg_number,
				field: 'payNumber',
				align: 'center',
			},
			{
				title: dis_cumreg_out,
				field: 'cumRecharge',
				align: 'center',
			},
			{
				title: dis_cumreg_number,
				field: 'cumRecNum',
				align: 'center',
			},
			{
				title: dis_cumltv,
				field: 'cumLtv',
				align: 'center',
			},
			{
				title: dis_opennum,
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
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#vip_table tbody tr").css("background-color", "#323232")
		$("#vip_table tbody tr:even").css("background-color", "#3b3b3b")
	});
}