language()
//设置默认时间
var old;
var newtime;
var daily_choice;
var daily_allaction;
var daily_selec;
var daily_allserver;
var daily_times;
var daily_regs;
var daily_newregs;
var daily_actives;
var daily_newactives;
var daily_newrechar;
var daily_payout;
var daily_paynum;
var daily_firstnum;
var daily_firstout;
//var daily_cumrec;
var daily_firstsumout;
var daily_rates;
var daily_arpus;
var daily_arppus;
var daily_dayretain;
var daily_thretain;
var daily_weektain;
var daily_fifttain;
var daily_thirtain;
var daily_fourtain;
var daily_sixtain;
var daily_ninetain;
var daily_newpaynum;
var daily_newrate;
var daily_rollnum;
var daily_rollpaynum;
var daily_rollpay;
function language(){
	var cook = $.cookie("value");
	if(cook == null){
		daily_choice = "请选择";
		daily_allaction = "全选/全不选";
		daily_selec = "项被选中";
		daily_allserver = "已选中所有选项";
		daily_times = "日期";
		daily_regs = "注册账号数";
		daily_newregs = "激活数";
		daily_actives = "活跃账号数";
		daily_newactives = "新增活跃账号数";
		daily_newrechar = "新付费金额";
		daily_payout = "总付费金额";
		daily_paynum = "总付费账号";
		daily_firstnum = "首付账号数";
		daily_firstout = "首付金额";
		daily_newpaynum = "新付费账号";//新增
		daily_newrate = "新付费率(%)";//新增
		daily_rollnum = "滚服账号数";//新增
		daily_rollpaynum = "滚服付费账号数";//新增
		daily_rollpay = "滚服付费额";//新增
//		daily_cumrec = "累计充值人数";
		daily_firstsumout = "首付当日总额";
		daily_rates = "总付费率(%)";
		daily_arpus = "ARPU";
		daily_arppus = "ARPPU";
		daily_dayretain = "日留存(%)";
		daily_thretain = "3日留存(%)";
		daily_weektain = "7日留存(%)";
		daily_fifttain = "15日留存(%)";
		daily_thirtain = "30日留存(%)";
		daily_fourtain = "45日留存(%)";
		daily_sixtain = "60日留存(%)";
		daily_ninetain = "90日留存(%)";
	}else if(cook == "chinese"){
		daily_choice = "请选择";
		daily_allaction = "全选/全不选";
		daily_selec = "项被选中";
		daily_allserver = "已选中所有选项";
		daily_choice = "请选择";
		daily_allaction = "全选/全不选";
		daily_selec = "项被选中";
		daily_allserver = "已选中所有选项";
		daily_times = "日期";
		daily_regs = "注册账号数";
		daily_newregs = "激活数";
		daily_actives = "活跃账号数";
		daily_newactives = "新增活跃账号数";
		daily_newrechar = "新付费金额";
		daily_payout = "总付费金额";
		daily_paynum = "总付费账号";
		daily_firstnum = "首付账号数";
		daily_firstout = "首付金额";
		daily_newpaynum = "新付费账号";//新增
		daily_newrate = "新付费率(%)";//新增
		daily_rollnum = "滚服账号数";//新增
		daily_rollpaynum = "滚服付费账号数";//新增
		daily_rollpay = "滚服付费额";//新增
//		daily_cumrec = "累计充值人数";
		daily_firstsumout = "首付当日总额";
		daily_rates = "总付费率(%)";
		daily_arpus = "ARPU";
		daily_arppus = "ARPPU";
		daily_dayretain = "日留存(%)";
		daily_thretain = "3日留存(%)";
		daily_weektain = "7日留存(%)";
		daily_fifttain = "15日留存(%)";
		daily_thirtain = "30日留存(%)";
		daily_fourtain = "45日留存(%)";
		daily_sixtain = "60日留存(%)";
		daily_ninetain = "90日留存(%)";
	}else if(cook == "Korean"){
		daily_choice = "请选择";
		daily_allaction = "全选/全不选";
		daily_selec = "项被选中";
		daily_allserver = "已选中所有选项";
		daily_choice = "请选择";
		daily_allaction = "全选/全不选";
		daily_selec = "项被选中";
		daily_allserver = "已选中所有选项";
		daily_times = "日期";
		daily_regs = "注册账号数";
		daily_newregs = "激活数";
		daily_actives = "活跃账号数";
		daily_newactives = "新增活跃账号数";
		daily_newrechar = "新付费金额";
		daily_payout = "总付费金额";
		daily_paynum = "总付费账号";
		daily_firstnum = "首付账号数";
		daily_firstout = "首付金额";
		daily_newpaynum = "新付费账号";//新增
		daily_newrate = "新付费率(%)";//新增
		daily_rollnum = "滚服账号数";//新增
		daily_rollpaynum = "滚服付费账号数";//新增
		daily_rollpay = "滚服付费额";//新增
//		daily_cumrec = "累计充值人数";
		daily_firstsumout = "首付当日总额";
		daily_rates = "总付费率(%)";
		daily_arpus = "ARPU";
		daily_arppus = "ARPPU";
		daily_dayretain = "日留存(%)";
		daily_thretain = "3日留存(%)";
		daily_weektain = "7日留存(%)";
		daily_fifttain = "15日留存(%)";
		daily_thirtain = "30日留存(%)";
		daily_fourtain = "45日留存(%)";
		daily_sixtain = "60日留存(%)";
		daily_ninetain = "90日留存(%)";
	}
}
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
var times = old+"~"+newtime
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
			times = res
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
				buttonWidth: '73%',
				nonSelectedText: daily_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: daily_allaction, //全选按钮显示的文本	
				nSelectedText: daily_selec,
				allSelectedText: daily_allserver,
				enableFiltering: false, //搜索框
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
		data: {type: 2},
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
var ajaxPath
//表格分页
function onread(e) {
	$("body").mLoading("show");
	var district = $("#district_service").val();//区服
//	var channel = $("#channel").val();//登录方式
	var reg_channel = $("#reg_channel").val();//渠道号
	var x = $(e).attr("id");
	var state = 0;
	if(x == "generated"){
		state = 1
	}else{
		state = 0
	}
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
		    elem: '#datatable'
		    ,method: 'post'
		    ,url: '../queryDaily.action' //数据接口
		    ,cellMinWidth: 120
		    ,height: 648
		    ,text: {none: 'No matching records found'}
		    ,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
		        layout: ['limit','prev',  'page','next' ] //自定义分页布局
		    }
		    ,limit:20
		    ,limits:[5,10,20,40]
		    ,where: {
		    	serverId:district,
				channelId:reg_channel, //渠道号
				seDate:times,
				state:state
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
	            $("table").css("width", "100%"); 
	            $("body").mLoading("hide");
	            if($(".chart .layui-table-body")[0].textContent == "No matching records found"){
	            	$(".chart .layui-table-header").css("overflow-x","auto")
	            }
	            var pagetabel = $(".layui-table-page").width()
	            var pagewidth = $(".layui-laypage-default").width()
	            var pagelimitmargin = pagetabel - pagewidth -20 +"px" +" !important"
	            pagelimitmargin ="margin-right:" + pagelimitmargin
	            $(".layui-laypage-limits").css("cssText", pagelimitmargin);
	         }
	        ,unresize:true
	        ,even: true //开启隔行背景
		    ,title: ''
		    ,page: true //开启分页
		    ,cols: [[ //表头
		    	{
					title: daily_times, //区服号
					field: 'logTime', //json数据中rows数组中的属性名
					
					templet: function(row) {
						var html = ('<span style="width:90px;display:inline-block;">' + row.logTime.substr(0, 10) + '</span>');
						return html;
					}
				},
				{
					title: daily_regs,
					field: 'dailyRegister',
					width: 110,
				},
				{
					title: daily_newregs,
					field: 'newRegister',
					align: 'center',
				},
				{
					title: daily_actives,
					field: 'activeNumber',
					width: 120,
					templet: function(row) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
						return "<span class='register'>" + row.activeNumber + "</span>"
					}
				},
				{
					title: daily_newactives,
					field: 'newActive',
					width: 135,
				},
				{
					title: daily_newrechar,
					field: 'newRecharge',
					width: 120,
				},
				{
					title: daily_payout,
					field: 'payAmount',
					width: 180,
				},
				{
					title: daily_paynum,
					field: 'payNumber',
					width: 120,
					templet: function(row) {
						return "<span class='active_data'>" + row.payNumber + "</span>"
					}
				},
				{
					title: daily_firstnum,
					field: 'fristNumber',
					width: 120,
				},
				{
					title: daily_firstout,
					field: 'fristAmount',
					width: 120,
				},
				{
					title: daily_newpaynum,
					field: 'newPayNumber',
					width: 110,
				},
				{
					title: daily_newrate, //新付费率
					field: 'newRate',
					width: 110,
				},
				{
					title: daily_rollnum,
					field: 'rollOverNember', //滚服账号数
					width: 120,
				},
				{
					title: daily_rollpaynum,
					field: 'rollOverPayNember',
					width: 130,
				},
				{
					title: daily_rollpay,
					field: 'rollOverAmount',
					width: 130,
				},
				{
					title: daily_firstsumout,
					field: 'fristSumAmount',
					width: 120,
				},
				{
					title: daily_rates,
					field: 'rate',
					width: 120,
				},
				{
					title: daily_arpus,
					field: 'arpu',
					width: 120,
					templet: function(row) {
						return "<span class='Payment_number'>" + row.arpu + "</span>"
					}
				},
				{
					title: daily_arppus,
					field: 'arppu',
					width: 120,
				},
		    ]]
		  });
	})
	$("#aaa").bootstrapTable('destroy');
	var t = $("#aaa").bootstrapTable({
		url: '../queryDaily.action',
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
				serverId:district,
//				loginType:channel, //登录方式
				channelId:reg_channel, //渠道号
				seDate:times,
				state:state
			};
		},
		responseHandler: function (res) {
            ajaxPath = res
            return {
            	"total": res.total,
            	"rows": res.rows
            }
        },
		idField: "logId", //指定主键列
		columns: [{
				title: daily_times, //区服号
				field: 'logTime', //json数据中rows数组中的属性名
				align: 'center', //水平居中
				formatter: function(value, row, index) {
					var html = ('<span style="width:90px;display:inline-block;">' + row.logTime.substr(0, 10) + '</span>');
					return html;
				}
			},
			{
				title: daily_regs,
				field: 'dailyRegister',
				align: 'center',
			},
			{
				title: daily_newregs,
				field: 'newRegister',
				align: 'center',
			},
			{
				title: daily_actives,
				field: 'activeNumber',
				align: 'center',
				formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
					return "<span class='register'>" + row.activeNumber + "</span>"
				}
			},
			{
				title: daily_newactives,
				field: 'newActive',
				align: 'center',
			},
			{
				title: daily_newrechar,
				field: 'newRecharge',
				align: 'center',
			},
			{
				title: daily_payout,
				field: 'payAmount',
				align: 'center',
			},
			{
				title: daily_paynum,
				field: 'payNumber',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='active_data'>" + row.payNumber + "</span>"
				}
			},
			{
				title: daily_firstnum,
				field: 'fristNumber',
				align: 'center',
			},
			{
				title: daily_firstout,
				field: 'fristAmount',
				align: 'center',
			},
			//新增字段
			{
				title: daily_newpaynum,
				field: 'newPayNumber',
				align: 'center',
			},
			{
				title: daily_newrate, //新付费率
				field: 'newRate',
				align: 'center',
			},
			{
				title: daily_rollnum,
				field: 'rollOverNember', //滚服账号数
				align: 'center',
			},
			{
				title: daily_rollpaynum,
				field: 'rollOverPayNember',
				align: 'center',
			},
			{
				title: daily_rollpay,
				field: 'rollOverAmount',
				align: 'center',
			},
//			{
//				title: daily_cumrec,
//				field: 'cumRecNum',
//				align: 'center',
//				formatter: function(value, row, index) {
//					return "<span class='Payment_amount'>" + row.cumRecNum + "</span>"
//				}
//			},
			{
				title: daily_firstsumout,
				field: 'fristSumAmount',
				align: 'center',
			},
			{
				title: daily_rates,
				field: 'rate',
				align: 'center',
			},
			{
				title: daily_arpus,
				field: 'arpu',
				align: 'center',
				formatter: function(value, row, index) {
					return "<span class='Payment_number'>" + row.arpu + "</span>"
				}
			},
			{
				title: daily_arppus,
				field: 'arppu',
				align: 'center',
			},
			
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide");
		$(".pull-right").css("display", "block");
		$("#datatable tbody tr").css("background-color", "#323232")
		$("#datatable tbody tr:even").css("background-color", "#3b3b3b")
//		$(".register").parent().css("background-color", "rgba(43,60,79,0.5)")
	});
}
//图表渲染
var chart = Highcharts.chart('container', {
	colors: ['#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9', '#35b9bb', '#edc97d', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#cae891'],
	chart: {
		backgroundColor: {
			stops: [
				[0, 'rgb(54, 54, 54)']
			]
		},
	},
	title: {},
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
		labels: {
			style: {
				color: '#fff'
			}
		}
	},
	credits: {
		enabled: false // 禁用版权信息
	},
	exporting: {
		enabled: false //禁用右上角打印
	},
	plotOptions: {
		series: {
			label: {
				connectorAllowed: false
			},
			pointStart: 2010,
			events: {
				legendItemClick: function(event) {
					if(event.target.index == "0") {
						if(event.target.visible == false) {
							$(".register").parent().css("background-color", "rgba(43,60,79,0.5)")
						} else {
							$(".register").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "1") {
						if(event.target.visible == false) {
							$(".active_data").parent().css("background-color", "rgba(68,80,66,0.5)")
						} else {
							$(".active_data").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "2") {
						if(event.target.visible == false) {
							$(".Payment_amount").parent().css("background-color", "rgba(86,74,64,0.5)")
						} else {
							$(".Payment_amount").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "3") {
						if(event.target.visible == false) {
							$(".Payment_number").parent().css("background-color", "rgba(68,70,84,0.5)")
						} else {
							$(".Payment_number").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "4") {
						if(event.target.visible == false) {
							$(".down_number").parent().css("background-color", "rgba(58,78,78,0.5)")
						} else {
							$(".down_number").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "5") {
						if(event.target.visible == false) {
							$(".down_amount").parent().css("background-color", "rgba(237,201,125,0.5)")
						} else {
							$(".down_amount").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "6") {
						if(event.target.visible == false) {
							$(".Cumulative_number").parent().css("background-color", "rgba(241,92,128,0.5)")
						} else {
							$(".Cumulative_number").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "7") {
						if(event.target.visible == false) {
							$(".down_data").parent().css("background-color", "rgba(228,211,84,0.5)")
						} else {
							$(".down_data").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "8") {
						if(event.target.visible == false) {
							$(".Rate").parent().css("background-color", "rgba(43,144,143,0.5)")
						} else {
							$(".Rate").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "9") {
						if(event.target.visible == false) {
							$(".arpu").parent().css("background-color", "rgba(244,91,91,0.5)")
						} else {
							$(".arpu").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "10") {
						if(event.target.visible == false) {
							$(".arppu").parent().css("background-color", "rgba(145,232,225,0.5)")
						} else {
							$(".arppu").parent().css("background", "transparent")
						}
					}
					if(event.target.index == "11") {
						if(event.target.visible == false) {
							$(".retention").parent().css("background-color", "rgba(202,232,145,0.5)")
						} else {
							$(".retention").parent().css("background", "transparent")
						}
					}
				}
			}
		}
	},
	legend: {
		itemStyle: {
			color: '#c0c0c0',
		},
		itemHoverStyle: {
			color: '#fff'
		}
	},
	series: [{
		name: daily_regs,
		data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
	}, {
		name: daily_actives,
		data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
		visible: false
	}, {
		name: daily_payout,
		data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
		visible: false
	}, {
		name: daily_paynum,
		data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
		visible: false
	}, {
		name: daily_firstnum,
		data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
		visible: false
	}, {
		name: daily_firstout,
		data: [21212, 42342, 13213, 75675, 56765, 98789, 32432, 23222],
		visible: false
	}, {
//		name: daily_cumrec,
//		data: [31233, 33433, 44444, 55555, 66666, 66666, 38121, 40434],
//		visible: false
	}, {
		name: daily_firstsumout,
		data: [11111, 22222, 33333, 77777, 999999, 24377, 32147, 39387],
		visible: false
	}, {
		name: daily_rates,
		data: [15455, 52465, 56511, 32131, 15112, 22452, 34400, 34227],
		visible: false
	}, {
		name: daily_arpus,
		data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
		visible: false
	}, {
		name: daily_arppus,
		data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
		visible: false
	}, {
		name: daily_dayretain,
		data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
		visible: false
	}],
});