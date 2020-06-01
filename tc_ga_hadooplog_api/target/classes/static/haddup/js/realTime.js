language()
var old;
var lay_tit;
var lay_sure;
var real_choice;
var real_allaction;
var real_selec;
var real_allserver;
var real_times;
var real_server;
var real_channel;
var real_regs;
var real_actives;
var real_payamt;
var real_paynums;
var real_newpayamt;
var real_newpaynums;
var real_sumamt;
var real_sumnums;
var real_rates;
var real_arpus;
var real_arppus;
var real_retains;
function language(){
	var cook = $.cookie("value");
	if(cook == null){
		lay_tit = "更改";
		lay_sure = "确定";
		real_choice = "请选择";
		real_allaction = "全选/全不选";
		real_selec = "项被选中";
		real_allserver = "已选中所有选项";
		real_times = "时间";
		real_server = "区服号";
		real_channel = "渠道号";
		real_regs = "注册";
		real_actives = "活跃数据";
		real_payamt = "付费金额";
		real_paynums = "付费人数";
		real_newpayamt = "首付人数";
		real_newpaynums = "首付金额";
		real_sumamt = "累计充值人数";
		real_sumnums = "首付当日总额";
		real_rates = "付费率(%)";
		real_arpus = "ARPU";
		real_arppus = "ARPPU";
		real_retains = "日留存(%)";
	}else if(cook == "chinese"){
		lay_tit = "更改";
		lay_sure = "确定";
		real_choice = "请选择";
		real_allaction = "全选/全不选";
		real_selec = "项被选中";
		real_allserver = "已选中所有选项";
		real_times = "时间";
		real_server = "区服号";
		real_channel = "渠道号";
		real_regs = "注册";
		real_actives = "活跃数据";
		real_payamt = "付费金额";
		real_paynums = "付费人数";
		real_newpayamt = "首付人数";
		real_newpaynums = "首付金额";
		real_sumamt = "累计充值人数";
		real_sumnums = "首付当日总额";
		real_rates = "付费率(%)";
		real_arpus = "ARPU";
		real_arppus = "ARPPU";
		real_retains = "日留存(%)";
	}else if(cook == "Korean"){
		lay_tit = "更改";
		lay_sure = "确定";
		real_choice = "请选择";
		real_allaction = "全选/全不选";
		real_selec = "项被选中";
		real_allserver = "已选中所有选项";
		real_times = "时间";
		real_server = "区服号";
		real_channel = "渠道号";
		real_regs = "注册";
		real_actives = "活跃数据";
		real_payamt = "付费金额";
		real_paynums = "付费人数";
		real_newpayamt = "首付人数";
		real_newpaynums = "首付金额";
		real_sumamt = "累计充值人数";
		real_sumnums = "首付当日总额";
		real_rates = "付费率(%)";
		real_arpus = "ARPU";
		real_arppus = "ARPPU";
		real_retains = "日留存(%)";
	}
}
//设置默认时间
today()
function today() {
	var today = new Date();
	var y = today.getFullYear();
	var m = today.getMonth() + 1;
	var d = today.getDate();
	if(m >= 1 && m < 10) {
		m = "0" + m
	}
	if(d >= 1 && d < 10) {
		d = "0" + d
	}
	old = y + "-" + m + "-" + d;
}
//layui配置
layui.use(['element', 'laydate', 'layer', 'table'], function() {
	var element = layui.element;
	var laydate = layui.laydate;
	var layer = layui.layer;
	var table = layui.table;
	element.init();
	//日历配置
	var now = new Date();
	laydate.render({
		elem: '#datatimes',
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		//		showBottom: false//是否显示底部栏
		value: old,
		max: 'now',
		done:function(res){
			old = res
		}
	})
});
$(".change").click(function() {
	layer.open({
		type: 1,
		area: ['700px', '300px'],
		title: lay_tit,
		shadeClose: false,
		shade: 0,
		content: $('#selection'),
		closeBtn: 2,
		btn: lay_sure,
		yes: function(index, layero) {
			line()
			layer.close(index)
		}
	})
})
//区服下拉多选
change()
function change() {
	$.ajax({
		type: "get",
		url: "http://localhost:8080/FaithLogNew/queryAreas.action",
		async: true,
		success: function(obj) {
			for(var i = 0; i < obj.rows.length; i++) {
				$("#district_service").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
			};
			$("#district_service").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$('#district_service').multiselect("destroy").multiselect({
				buttonWidth: '70%',
				nonSelectedText: real_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: real_allaction, //全选按钮显示的文本	
				nSelectedText: real_selec,
				allSelectedText: real_allserver,
				enableFiltering: false, //搜索框
			});
			$('#Exclude').multiselect("destroy").multiselect({
				buttonWidth: '70%',
				nonSelectedText: real_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: real_allaction, //全选按钮显示的文本	
				nSelectedText: real_selec,
				allSelectedText: real_allserver,
			});
			onchannel()
		}
	});
}
//渠道号下拉赋值
function onchannel() {
	$.ajax({
		type: "get",
		url: "http://localhost:8080/FaithLogNew/queryField.action",
		async: true,
		data: {
			type: 2
		},
		success: function(obj) {
			for(var i = 0; i < obj.rows.length; i++) {
				$("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
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
				$("#reg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
			};
			onread()
		}
	})
}
//表格分页
var ajaxPath;
function onread() {
	$("body").mLoading("show")
	var district_service = $("#district_service").val();//区服
	var channel = $("#channel").val();//登录方式
	var reg_channel = $("#reg_channel").val();//充值渠道
	if(district_service !=null){
		district_service = district_service.join(',')
	}
	$("#datatable").bootstrapTable('destroy');
	var t = $("#datatable").bootstrapTable({
		url: '../queryRealTime.action',
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
				serverId:district_service,
				seDate:old,
				loginType:channel,
				channelId:reg_channel
			};
		},
		responseHandler: function (res) {
			ajaxPath = res
			return res.list
        },
		idField: "logId", //指定主键列
		columns: [{
				title: real_times, 
				field: 'logTime', 
				align: 'center',
			},
			{
				title: real_regs,
				field: 'dailyRegister',
				align: 'center',
				formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
					return "<span class='register'>" + row.dailyRegister + "</span>"
				}
			},
			{
				title: real_actives,
				field: 'newActive',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='active_data'>" + row.newActive + "</span>"
				}
			},
			{
				title: real_payamt,
				field: 'cumRecharge',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='Payment_amount'>" + row.cumRecharge + "</span>"
				}
			},
			{
				title: real_paynums,
				field: 'payNumber',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='Payment_number'>" + row.payNumber + "</span>"
				}
			},
			{
				title: real_newpayamt,
				field: 'fristAmount',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='down_number'>" + row.fristAmount + "</span>"
				}
			},
			{
				title: real_newpaynums,
				field: 'fristNumber',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='down_amount'>" + row.fristNumber + "</span>"
				}
			},
			{
				title: real_sumamt,
				field: 'cumRecNum',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='Cumulative_number'>" + row.cumRecNum + "</span>"
				}
			},
			{
				title: real_sumnums,
				field: 'fristSumAmount',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='sum_amount'>" + row.fristSumAmount + "</span>"
				}
			},
			
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#datatable tbody tr").css("background-color", "#323232");
		$("#datatable tbody tr:even").css("background-color", "#3b3b3b");
		$(".register").parent().css("background-color", "rgba(43,60,79,0.5)");
		charts()
	});
}
//注册图表
function charts(){
	var resg = [];//注册
	var logTime = [];//注册时间
	var active = [];//活跃数据
	var logTime2 = [];//活跃时间
	var payamount = [];//付费金额
	var logTime3 = [];//付费金额时间
	var paynumb = [];//付费人数
	var logTime4 = [];//付费时间
	var firstnub = [];//首付人数
	var logTime5 = [];//首付人数时间
	var firstamt = [];//首付金额
	var logTime6 = [];//首付金额时间
	var cumulative = [];//累计充值人数
	var logTime7 = [];//累计充值时间
	var summoney = [];//首付当日总额
	var logTime8 = [];//首付当日总额时间
	getform();
	function getform(){
		for(var i = 0;i<ajaxPath.data[0].length;i++){
			var someDate=ajaxPath.data[0][i].logTime+':00'
			var rq=ajaxPath.data[0][i].device_count;
			logTime.push(someDate);
			resg.push(rq);
		}
		for(var i = 0;i<ajaxPath.data[1].length;i++){
			var someDate=ajaxPath.data[1][i].logTime+':00'
			var rq=ajaxPath.data[1][i].device_count;
			logTime2.push(someDate);
			active.push(rq);
		}
		for(var i = 0;i<ajaxPath.data[2].length;i++){
			var someDate=ajaxPath.data[2][i].logTime+':00'
			var rq=ajaxPath.data[2][i].device_count;
			logTime3.push(someDate);
			payamount.push(rq);
		}
		for(var i = 0;i<ajaxPath.data[3].length;i++){
			var someDate=ajaxPath.data[3][i].logTime+':00'
			var rq=ajaxPath.data[3][i].device_count;
			logTime4.push(someDate);
			paynumb.push(rq);
		}
		for(var i = 0;i<ajaxPath.data[4].length;i++){
			var someDate=ajaxPath.data[4][i].logTime+':00'
			var rq=ajaxPath.data[4][i].device_count;
			logTime5.push(someDate);
			firstnub.push(rq);
		}
		for(var i = 0;i<ajaxPath.data[5].length;i++){
			var someDate=ajaxPath.data[5][i].logTime+':00'
			var rq=ajaxPath.data[5][i].device_count;
			logTime6.push(someDate);
			firstamt.push(rq);
		}
		for(var i = 0;i<ajaxPath.data[6].length;i++){
			var someDate=ajaxPath.data[6][i].logTime+':00'
			var rq=ajaxPath.data[6][i].device_count;
			logTime7.push(someDate);
			cumulative.push(rq);
		}
	}
	Highcharts.setOptions({ global: { useUTC: false } });
	var chart = Highcharts.chart('container', {
		chart: {
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: real_regs,
			style: {
				color: '#fff',
				font: 'bold 20px "Trebuchet MS", Verdana, sans-serif',
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false //禁用右上角打印
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineColor: "#c0c0c0",
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		xAxis: {
			type: 'datetime',
			categories: logTime,
			labels: {
				enable: true,
	            rotation:320,
				style: {
					color: '#fff'
				}
			},
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
			}
		},
		tooltip: {
			formatter: function () {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 个';
      		}
		},
		series: [{
			name: real_regs,
			data: resg,
		}],
	});
	//活跃数据图表
	var chart = Highcharts.chart('container1', {
		colors: ['#90ed7d'],
		chart: {
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: real_actives,
			style: {
				color: '#fff',
				font: 'bold 20px "Trebuchet MS", Verdana, sans-serif',
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false //禁用右上角打印
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineColor: "#c0c0c0",
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		xAxis: {
			type: 'datetime',
			categories: logTime2,
			labels: {
				enable: true,
	            rotation:320,
				style: {
					color: '#fff'
				}
			},
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
			}
		},
		tooltip: {
			formatter: function () {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 人';
      		}
		},
		series: [{
			name: real_actives,
			data: active,
		}],
	});
	//付费金额图表
	var chart = Highcharts.chart('container2', {
		colors: ['#f7a35c'],
		chart: {
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: real_payamt,
			style: {
				color: '#fff',
				font: 'bold 20px "Trebuchet MS", Verdana, sans-serif',
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false //禁用右上角打印
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineColor: "#c0c0c0",
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		xAxis: {
			type: 'datetime',
			categories: logTime3,
			labels: {
				enable: true,
	            rotation:320,
				style: {
					color: '#fff'
				}
			},
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
			}
		},
		tooltip: {
			formatter: function () {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 元 ';
      		}
		},
		series: [{
			name: real_payamt,
			data: payamount,
		}],
	});
	//付费人数图表
	var chart = Highcharts.chart('container3', {
		colors: ['#edc97d'],
		chart: {
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: real_paynums,
			style: {
				color: '#fff',
				font: 'bold 20px "Trebuchet MS", Verdana, sans-serif',
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false //禁用右上角打印
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineColor: "#c0c0c0",
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		xAxis: {
			type: 'datetime',
			categories: logTime4,
			labels: {
				enable: true,
	            rotation:320,
				style: {
					color: '#fff'
				}
			},
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
			}
		},
		tooltip: {
			formatter: function () {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 人 ';
      		}
		},
		series: [{
			name: real_paynums,
			data: paynumb,
		}],
	});
	//首付人数图表
	var chart = Highcharts.chart('container4', {
		colors: ['#8085e9'],
		chart: {
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: real_newpayamt,
			style: {
				color: '#fff',
				font: 'bold 20px "Trebuchet MS", Verdana, sans-serif',
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false //禁用右上角打印
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineColor: "#c0c0c0",
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		xAxis: {
			type: 'datetime',
			categories: logTime5,
			labels: {
				enable: true,
	            rotation:320,
				style: {
					color: '#fff'
				}
			},
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
			}
		},
		tooltip: {
			formatter: function () {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 人 ';
      		}
		},
		series: [{
			name: real_newpayamt,
			data: firstnub,
		}],
	});
	//首付金额图表
	var chart = Highcharts.chart('container5', {
		colors: ['#f15c80'],
		chart: {
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: real_newpaynums,
			style: {
				color: '#fff',
				font: 'bold 20px "Trebuchet MS", Verdana, sans-serif',
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false //禁用右上角打印
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineColor: "#c0c0c0",
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		xAxis: {
			type: 'datetime',
			categories: logTime6,
			labels: {
				enable: true,
	            rotation:320,
				style: {
					color: '#fff'
				}
			},
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
			}
		},
		tooltip: {
			formatter: function () {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 元 ';
      		}
		},
		series: [{
			name: real_newpaynums,
			data: firstamt,
		}],
	});
	//累计充值人数
	var chart = Highcharts.chart('container6', {
		colors: ['#e4d354'],
		chart: {
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: real_sumamt,
			style: {
				color: '#fff',
				font: 'bold 20px "Trebuchet MS", Verdana, sans-serif',
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false //禁用右上角打印
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineColor: "#c0c0c0",
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		xAxis: {
			type: 'datetime',
			categories: logTime6,
			labels: {
				enable: true,
	            rotation:320,
				style: {
					color: '#fff'
				}
			},
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
			}
		},
		tooltip: {
			formatter: function () {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 人 ';
      		}
		},
		series: [{
			name: real_sumamt,
			data: cumulative,
		}],
	});
	//首付当日总额
	var chart = Highcharts.chart('container7', {
		colors: ['#2b908f'],
		chart: {
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: real_sumnums,
			style: {
				color: '#fff',
				font: 'bold 20px "Trebuchet MS", Verdana, sans-serif',
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false //禁用右上角打印
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineColor: "#c0c0c0",
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		xAxis: {
			type: 'datetime',
			categories: logTime7,
			labels: {
				enable: true,
	            rotation:320,
				style: {
					color: '#fff'
				}
			},
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				
			}
		},
		tooltip: {
			formatter: function () {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 元 ';
      		}
		},
		series: [{
			name: real_sumnums,
			data: summoney,
		}],
	});
}
