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
		real_regs = "注册账号";
		real_actives = "活跃人数";
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
		real_regs = "注册账号";
		real_actives = "活跃人数";
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
		real_regs = "注册账号";
		real_actives = "活跃人数";
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
			homedata()
		}
	})
}

//新增帐号图表与表格切换按钮
$("#a-one").click(function(){
	$("#a-one img").attr('src','../img/a.png')
	$("#a-two img").attr('src','../img/bb.png')
	$(".real-table").addClass("real-yin")
	$("#div-one").removeClass("real-yin")
})
$("#a-two").click(function(){
	$("#a-one img").attr('src','../img/aa.png')
	$("#a-two img").attr('src','../img/b.png')
	$("#div-one").addClass("real-yin")
	$(".real-table").removeClass("real-yin")
})

//活跃
$("#a-ones").click(function(){
	$("#a-ones img").attr('src','../img/a.png')
	$("#a-twos img").attr('src','../img/bb.png')
	$(".real-table-one").addClass("real-yin2")
	$("#div-two").removeClass("real-yin2")
})
$("#a-twos").click(function(){
	$("#a-ones img").attr('src','../img/aa.png')
	$("#a-twos img").attr('src','../img/b.png')
	$("#div-two").addClass("real-yin2")
	$(".real-table-one").removeClass("real-yin2")
})

//付费人数
$("#a-oness").click(function(){
	$("#a-oness img").attr('src','../img/a.png')
	$("#a-twoss img").attr('src','../img/bb.png')
	$(".real-table-two").addClass("real-yin3")
	$("#div-three").removeClass("real-yin3")
})
$("#a-twoss").click(function(){
	$("#a-oness img").attr('src','../img/aa.png')
	$("#a-twoss img").attr('src','../img/b.png')
	$("#div-three").addClass("real-yin3")
	$(".real-table-two").removeClass("real-yin3")
})

//付费金额
$("#a-onesss").click(function(){
	$("#a-onesss img").attr('src','../img/a.png')
	$("#a-twosss img").attr('src','../img/bb.png')
	$(".real-table-four").addClass("real-yin4")
	$("#div-four").removeClass("real-yin4")
})
$("#a-twosss").click(function(){
	$("#a-onesss img").attr('src','../img/aa.png')
	$("#a-twosss img").attr('src','../img/b.png')
	$("#div-four").addClass("real-yin4")
	$(".real-table-four").removeClass("real-yin4")
})

//四个p标签点击事件
$("#real-p1").click(function() {
	$("#real-p1").css({
		'border-top':'2px solid #2196f3',
		'border-bottom':'none'
		}).siblings().css({
			'border-top':'1px solid #eee',
			'border-bottom':'1px solid #eee'
			});
	$("#real-inner>.main").addClass("reveal").siblings().removeClass("reveal")
});
$("#real-p2").click(function() {
	$("#real-p2").css({
		'border-top':'2px solid #2196f3',
		'border-bottom':'none'
		}).siblings().css({
			'border-top':'1px solid #eee',
			'border-bottom':'1px solid #eee'
			});
	$("#real-inner>.main2").addClass("reveal").siblings().removeClass("reveal")
});
$("#real-p3").click(function() {
	$("#real-p3").css({
		'border-top':'2px solid #2196f3',
		'border-bottom':'none'
		}).siblings().css({
			'border-top':'1px solid #eee',
			'border-bottom':'1px solid #eee'
			});
	$("#real-inner>.main3").addClass("reveal").siblings().removeClass("reveal")
});
$("#real-p4").click(function() {
	$("#real-p4").css({
		'border-top':'2px solid #2196f3',
		'border-bottom':'none'
		}).siblings().css({
			'border-top':'1px solid #eee',
			'border-bottom':'1px solid #eee'
			});
	$("#real-inner>.main4").addClass("reveal").siblings().removeClass("reveal")
})

$("#query").click(function() {
	$("#real-datatable").bootstrapTable('destroy');
	$("#real-datatable2").bootstrapTable('destroy');
	$("#real-datatable3").bootstrapTable('destroy');
	$("#real-datatable4").bootstrapTable('destroy')
	$("#real-tbody").empty();
	$("#real-tbody2").empty();
	$("#real-tbody3").empty();
	$("#real-tbody4").empty();
	$("#real-p1").empty();
	$("#real-p2").empty();
	$("#real-p3").empty();
	$("#real-p4").empty();
	homedata();
	$("body").mLoading("show");
});

function homedata() {
	$("body").mLoading("show");
	var district_service = $("#district_service").val();//区服
	var channel = $("#channel").val();//登录方式
	var reg_channel = $("#reg_channel").val();//充值渠道
	if(district_service !=null){
		district_service = district_service.join(',')
	}
	$.ajax({
		type: "post",
		url: "../queryRealTime.action",
		async: true,
		data:{
			serverId:district_service,
			seDate:old,
			loginType:channel,
			channelId:reg_channel
		},
		success: function(ob) {
			AddUser(ob);
			active(ob);
			PayNum(ob);
			PayMoney(ob);
			onreal(ob);			
			$("body").mLoading("hide");
		}
	});
}

function onreal(ob) {
 	if(ob.addUser=="NaN" || ob.addUser==null)
		{
 		ob.addUser=0;
		}
	if(ob.avgActive=="NaN" || ob.avgActive==null)
	{
		ob.avgActive=0;
	}	
 	if(ob.payNumber=="NaN" || ob.payNumber==null)
	{
 		ob.payNumber=0;
	}
 	if(ob.payAmount=="NaN" || ob.payAmount==null)
 	{
 		ob.payAmount=0;
 	}	
 	var a=new Number(ob.addUser);
	var b=a.toLocaleString()
	$("#real-p1").prepend("<span style='font-size: 16px;display:block;margin-bottom:15px'>"+real_regs+"</span>"+b);
	var c=new Number(ob.avgActive);
	var d=c.toLocaleString()
	$("#real-p2").prepend("<span style='font-size: 16px;display:block;margin-bottom:15px'>"+real_actives+"</span>"+d);
	var e=new Number(ob.payNumber);
	var f=e.toLocaleString()
	$("#real-p3").prepend("<span style='font-size: 16px;display:block;margin-bottom:15px'>"+real_paynums+"</span>"+f);
	var x=new Number(ob.payAmount);
	var i=x.toLocaleString()
	$("#real-p4").prepend("<span style='font-size: 16px;display:block;margin-bottom:15px'>"+real_payamt+"</span>"+i);
//	$("#real-p5").prepend("<span style='font-size: 16px;display:block;margin-bottom:15px'>"+shizaixian+"</span>"+"<span class='p5'>"+"</span>");
	//新增账号表格
	for(var i = 0; i < ob.data[0].length; i++) {
		$("#real-tbody").append(
			"<tr><td>" + ob.data[0][i].logTime+":00" +
			"</td><td>" + ob.data[0][i].device_count +
			"</td></tr>"
		)
	};
	//活跃人数
	for(var i = 0; i < ob.data[1].length; i++) {
		$("#real-tbody2").append(
			"<tr><td>" + ob.data[1][i].logTime+":00" +
			"</td><td>" + ob.data[1][i].device_count +
			"</td></tr>"
		)
	};
	//付费人数
	for(var i = 0; i < ob.data[2].length; i++) {
		$("#real-tbody3").append(
			"<tr><td>" + ob.data[2][i].logTime+":00" +
			"</td><td>" + ob.data[2][i].device_count +
			"</td></tr>"
		)
	};
	//付费金额
	for(var i = 0; i < ob.data[3].length; i++) {
		$("#real-tbody4").append(
			"<tr><td>" + ob.data[3][i].logTime+":00" +
			"</td><td>" + ob.data[3][i].device_count +
			"</td></tr>"
		)
	};
}
Highcharts.setOptions({
	global: {
		useUTC: false
	}
});
//新增账号图表
function AddUser(data) {
	var chart = null;
	var arr = [];
	var arr4 = []
	for(var i = 0; i < data.data[0].length; i++) {
		var someDate = data.data[0][i].logTime+':00'
		var rq = data.data[0][i].device_count
		arr.push(rq)
		arr4.push(someDate)
		//	console.log(arr)
	}
	chart = Highcharts.chart('div-one', {
		chart: {
			type: 'spline',
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: ''
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false
		},
		xAxis: {
			type: 'datetime',
			categories: arr4,
			labels: {
				enable: true,
				rotation: 320,
				style: {
					color: '#fff'
				}
			}
		},
		tooltip: {
			formatter: function() {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 个';
			}
		},
		yAxis: {
			title: {
				text: '新增账号数'
			},
			labels: {
				format: '{value}',
				style: {
					color: '#fff'
				}
			}
		},
		plotOptions: {
			series: {
				lineWidth: 1,
			}
		},
		series: [{
			name: '新增账号数',
			data: arr,
		}],
	});
}
//活跃人数
function active(data) {
	var chart1 = null;
	var arr1 = [];
	var arr5 = []
	for(var i = 0; i < data.data[1].length; i++) {
		var someDate = data.data[1][i].logTime+':00'
		var rq = data.data[1][i].device_count
		arr1.push(rq)
		arr5.push(someDate)
		//	console.log(arr)
	}
	chart1 = Highcharts.chart('div-two', {
		chart: {
			type: 'spline',
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: ''
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false
		},
		xAxis: {
			type: 'datetime',
			categories: arr5,
			labels: {
				enable: true,
				rotation: 320,
				style: {
					color: '#fff'
				}
			}
		},
		tooltip: {
			formatter: function() {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 人';
			}
		},
		yAxis: {
			title: {
				text: '活跃人数'
			},
			labels: {
				format: '{value}',
				style: {
					color: '#fff'
				}
			}
		},
		plotOptions: {
			series: {
				lineWidth: 1
			}
		},
		series: [{
			name: '活跃人数',
			data: arr1,
		}],
	});

}
//付费人数
function PayNum(data) {
	var chart2 = null;
	var arr2 = [];
	var arr6 = []
	for(var i = 0; i < data.data[2].length; i++) {
		var someDate = data.data[2][i].logTime+':00'
		var rq = data.data[2][i].device_count
		arr2.push(rq)
		arr6.push(someDate)
		//	console.log(arr)
	}
	chart2 = Highcharts.chart('div-three', {
		chart: {
			type: 'spline',
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: ''
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false
		},
		xAxis: {
			type: 'datetime',
			categories: arr6,
			labels: {
				enable: true,
				rotation: 320,
				style: {
					color: '#fff'
				}
			}
		},
		tooltip: {
			formatter: function() {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + ' 人';
			}
		},
		yAxis: {
			title: {
				text: '付费人数'
			},
			labels: {
				format: '{value}',
				style: {
					color: '#fff'
				}
			}
		},

		plotOptions: {
			series: {
				lineWidth: 1
			}
		},
		series: [{
			name: '付费人数',
			data: arr2,
		}],
	});

}
//付费金额
function PayMoney(data) {
	var chart3 = null;
	var arr3 = [];
	var arr7 = []
	for(var i = 0; i < data.data[3].length; i++) {
		var someDate = data.data[3][i].logTime+':00'
		var rq = data.data[3][i].device_count
		arr3.push(rq)
		arr7.push(someDate)
		//	console.log(arr)
	}
	chart3 = Highcharts.chart('div-four', {
		chart: {
			type: 'spline',
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		title: {
			text: ''
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		exporting: {
			enabled: false
		},
		xAxis: {
			type: 'datetime',
			categories: arr7,
			labels: {
				enable: true,
				rotation: 320,
				style: {
					color: '#fff'
				}
			}
		},
		tooltip: {
			formatter: function() {
				return '%H:%M:%S', this.x + '<br/><b>' + this.series.name + '</b>' +'：'+
					this.point.y + '元';
			}
		},
		yAxis: {
			title: {
				text: '付费金额'
			},
			labels: {
				format: '{value}',
				style: {
					color: '#fff'
				}
			}
		},

		plotOptions: {

		},
		series: [{
			name: '付费金额',
			data: arr3,
		}],
	});
}

