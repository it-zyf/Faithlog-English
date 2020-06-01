function today() { //构建方法
	var today = new Date(); //new 出当前时间
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
document.getElementById("in1").value = today();
//新增帐号图表与表格切换按钮
$("#real-histogram").click(function () {
	$(".real-table").addClass("real-yin")
	$("#div-one").removeClass("real-yin")
})
$("#real-sheet").click(function () {
	$("#div-one").addClass("real-yin")
	$(".real-table").removeClass("real-yin")
})


// //官网累计
// $("#real-histogramA").click(function () {
// 	$(".real-table-A").addClass("real-yinA")
// 	$("#div-A").removeClass("real-yinA")
// })
// $("#real-sheetA").click(function () {
// 	$("#div-A").addClass("real-yinA")
// 	$(".real-table-A").removeClass("real-yinA")
// })


//活跃
$("#real-histogram2").click(function () {
	$(".real-table-one").addClass("real-yin2")
	$("#div-two").removeClass("real-yin2")
})
$("#real-sheet2").click(function () {
	$("#div-two").addClass("real-yin2")
	$(".real-table-one").removeClass("real-yin2")
})
//付费人数
$("#real-histogram3").click(function () {
	$(".real-table-two").addClass("real-yin3")
	$("#div-three").removeClass("real-yin3")
})
$("#real-sheet3").click(function () {
	$("#div-three").addClass("real-yin3")
	$(".real-table-two").removeClass("real-yin3")
})
//付费金额
$("#real-histogram4").click(function () {
	$(".real-table-four").addClass("real-yin4")
	$("#div-four").removeClass("real-yin4")
})
$("#real-sheet4").click(function () {
	$("#div-four").addClass("real-yin4")
	$(".real-table-four").removeClass("real-yin4")
})
//四个p标签点击事件
$("#real-p1").click(function () {
	$("#real-p1").css("background-color", "#656565").siblings().css("background-color", "#202020");
	$("#real-inner>.main").addClass("reveal").siblings().removeClass("reveal")
});
$("#real-pA").click(function () {
	$("#real-pA").css("background-color", "#656565").siblings().css("background-color", "#202020");
	$("#real-inner>.mainA").addClass("reveal").siblings().removeClass("reveal")
});
$("#real-p2").click(function () {
	$("#real-p2").css("background-color", "#656565").siblings().css("background-color", "#202020");
	$("#real-inner>.main2").addClass("reveal").siblings().removeClass("reveal")
});
$("#real-p3").click(function () {
	$("#real-p3").css("background-color", "#656565").siblings().css("background-color", "#202020");
	$("#real-inner>.main3").addClass("reveal").siblings().removeClass("reveal")
});
$("#real-p4").click(function () {
	$("#real-p4").css("background-color", "#656565").siblings().css("background-color", "#202020");
	$("#real-inner>.main4").addClass("reveal").siblings().removeClass("reveal")
})

change()
load()
function load() {
	$("body").mLoading("show");
}
function change() {
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

function onblu() {
	$("#real-datatable").bootstrapTable('destroy');
	$("#real-datatableA").bootstrapTable('destroy');
	$("#real-datatable2").bootstrapTable('destroy');
	$("#real-datatable3").bootstrapTable('destroy');
	$("#real-datatable4").bootstrapTable('destroy')
	$("#real-tbody").empty();
	$("#real-tbodyA").empty();
	$("#real-tbody2").empty();
	$("#real-tbody3").empty();
	$("#real-tbody4").empty();
	$("#leiji").empty();
	$("#guanwang").empty();
	$("#huo").empty();
	$("#ren").empty();
	$("#jin").empty();
	$("#peopleNum").empty();
	$("#averageNum").empty();
	homedata();
	load()
};

function homedata() {
	var text5 = $("#district").val(); //区服
	var text1 = $("#in1").val();
	if (text5 != null) {
		text5 = text5.join(",");
	}
	$.ajax({
		type: "post",
		url: "../queryRealTime.action",
		async: true,
		data: {
			serverId: text5,
			startTime: text1
		},
		success: function (ob) {
			var c = Number(ob.payNumber)
			onreal(ob);
			AddUser(ob);
			// OfficaNum(ob);
			active(ob);
			PayNum(ob);
			PayMoney(ob);
			$("body").mLoading("hide");
		}
	});
}
window.setInterval(function () {
	var text5 = $("#district").val(); //区服
	var text1 = $("#in1").val();
	if (text5 != null) {
		text5 = text5.join(",");
	}
	$.ajax({
		type: "post",
		url: "../queryRealTime.action",
		async: false,
		data: {
			serverId: text5,
			startTime: text1
		},
		success: function (ob) {
			var c = Number(ob.payNumber)

			if (ob.addUser == "NaN" || ob.addUser == null) {
				ob.addUser = 0;
			}
			if (ob.officaNum == "NaN" || ob.officaNum == null) {
				ob.officaNum = 0;
			}
			if (c == "NaN" || c == null) {
				c = 0;
			}
			if (ob.avgActive == "NaN" || ob.avgActive == null) {
				ob.avgActive = 0;
			}
			if (ob.payAmount == "NaN" || ob.payAmount == null) {
				ob.payAmount = 0;
			}
			c = c * 100;
			c = c.toFixed(2);
			ob.payAmount = ob.payAmount * 100;
			ob.payAmount = ob.payAmount.toFixed(2);
			$("#leiji").text(ob.addUser);
			$("#guanwang").text(ob.officaNum);
			$("#huo").text(ob.avgActive);
			$("#ren").text(c + "%");
			$("#jin").text(ob.payAmount + "%");
			$("#peopleNum").text(ob.firstLoginNum);
			$("#averageNum").text(ob.activeNum);
		}
	});
}, 100000)

function onreal(ob) {
	var c = Number(ob.payNumber)

	if (ob.addUser == "NaN" || ob.addUser == null) {
		ob.addUser = 0;
	}
	if (ob.officaNum == "NaN" || ob.officaNum == null) {
		ob.officaNum = 0;
	}
	if (c == "NaN" || c == null) {
		c = 0;
	}
	if (ob.avgActive == "NaN" || ob.avgActive == null) {
		ob.avgActive = 0;
	}
	if (ob.payAmount == "NaN" || ob.payAmount == null) {
		ob.payAmount = 0;
	}
	c = c * 100;
	c = c.toFixed(2);
	ob.payAmount = ob.payAmount * 100;
	ob.payAmount = ob.payAmount.toFixed(2);
	$("#leiji").text(ob.addUser);
	$("#guanwang").text(ob.officaNum);
	$("#huo").text(ob.avgActive);
	$("#ren").text(c + "%");
	$("#jin").text(ob.payAmount + "%");
	$("#peopleNum").text(ob.firstLoginNum);
	$("#averageNum").text(ob.activeNum);
	//新增账号表格
	for (var i = 0; i < ob.data[0].length; i++) {
		$("#real-tbody").append(
			"<tr><td>" + ob.data[0][i].serverId + ":00" +
			"</td><td>" + ob.data[0][i].device_count +
			"</td></tr>"
		)
	};
	$("#real-datatable").bootstrapTable({
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
	//官网累计
	for (var i = 0; i < ob.data[2].length; i++) {
		$("#real-tbodyA").append(
			"<tr><td>" + ob.data[2][i].serverId + ":00" +
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
	//活跃人数
	for (var i = 0; i < ob.data[1].length; i++) {
		$("#real-tbody2").append(
			"<tr><td>" + ob.data[1][i].serverId + ":00" +
			"</td><td>" + ob.data[1][i].device_count +
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
	//付费人数
	for (var i = 0; i < ob.data[3].length; i++) {
		$("#real-tbody3").append(
			"<tr><td>" + ob.data[3][i].serverId + ":00" +
			"</td><td>" + ob.data[3][i].device_count +
			"</td></tr>"
		)
	};
	$("#real-datatable3").bootstrapTable({
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
	//付费金额
	for (var i = 0; i < ob.data[4].length; i++) {
		$("#real-tbody4").append(
			"<tr><td>" + ob.data[4][i].serverId + ":00" +
			"</td><td>" + ob.data[4][i].device_count +
			"</td></tr>"
		)
	};
	$("#real-datatable4").bootstrapTable({
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
	for (var i = 0; i < data.data[0].length; i++) {
		var someDate = data.data[0][i].serverId
		var rq = data.data[0][i].device_count
		arr.push(rq)
		arr4.push(someDate)
		//	console.log(arr)
	}
	chart = Highcharts.chart('div-one', {
		chart: {
			type: 'column',
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
			formatter: function () {
				return '<b>' + this.series.name + '</b><br/>' +
					this.point.y + ' 个';
			}
		},
		yAxis: {
			title: {
				text: '实时新增'
			},
			labels: {
				format: '{value}',
				style: {
					color: '#fff'
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
		plotOptions: {
			series: {
				lineWidth: 10
			}
		},
		series: [{
			id: 'exSeries',
			name: '实时新增',
			data: arr,
		}],
	});

}


//官网累计
// function OfficaNum(data) {
// 	var chartA = null;
// 	var arrA = [];
// 	var arrArr = []
// 	for (var i = 0; i < data.data[2].length; i++) {
// 		var someDateA = data.data[2][i].serverId
// 		var rqA = data.data[2][i].device_count
// 		arrA.push(rqA)
// 		arrArr.push(someDateA)
// 		//	console.log(arr)
// 	}
// 	chartA = Highcharts.chart('div-A', {
// 		chart: {
// 			type: 'column',
// 			backgroundColor: {
// 				stops: [
// 					[0, 'rgb(54, 54, 54)']
// 				]
// 			},
// 		},
// 		title: {
// 			text: ''
// 		},
// 		credits: {
// 			enabled: false // 禁用版权信息
// 		},
// 		exporting: {
// 			enabled: false
// 		},
// 		xAxis: {
// 			type: 'datetime',
// 			categories: arrArr,
// 			labels: {
// 				enable: true,
// 				rotation: 320,
// 				style: {
// 					color: '#fff'
// 				}
// 			}
// 		},
// 		tooltip: {
// 			formatter: function () {
// 				return '<b>' + this.series.name + '</b><br/>' +
// 					this.point.y + ' 人';
// 			}
// 		},
// 		yAxis: {
// 			title: {
// 				text: '实时在线'
// 			},
// 			labels: {
// 				format: '{value}',
// 				style: {
// 					color: '#fff'
// 				}
// 			}
// 		},
// 		legend: {
// 			itemStyle: {
// 				color: '#c0c0c0',
// 			},
// 			itemHoverStyle: {
// 				color: '#fff'
// 			}
// 		},
// 		plotOptions: {
// 			series: {
// 				lineWidth: 10
// 			}
// 		},
// 		series: [{
// 			name: '官网累计',
// 			data: arrA,
// 		}],
// 	});
// }

//活跃人数
function active(data) {
	var chart1 = null;
	var arr1 = [];
	var arr5 = []
	for (var i = 0; i < data.data[1].length; i++) {
		var someDate = data.data[1][i].serverId
		var rq = data.data[1][i].device_count
		arr1.push(rq)
		arr5.push(someDate)
		//	console.log(arr)
	}
	chart1 = Highcharts.chart('div-two', {
		chart: {
			type: 'column',
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
			formatter: function () {
				return '<b>' + this.series.name + '</b><br/>' +
					this.point.y + ' 人';
			}
		},
		yAxis: {
			title: {
				text: '实时在线'
			},
			labels: {
				format: '{value}',
				style: {
					color: '#fff'
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
		plotOptions: {
			series: {
				lineWidth: 10
			}
		},
		series: [{
			name: '实时在线',
			data: arr1,
		}],
	});

}
//付费人数
function PayNum(data) {
	var chart2 = null;
	var arr2 = [];
	var arr6 = []
	for (var i = 0; i < data.data[3].length; i++) {
		var someDate = data.data[3][i].serverId
		var rq = data.data[3][i].device_count
		arr2.push(rq)
		arr6.push(someDate)
		//	console.log(arr)
	}
	chart2 = Highcharts.chart('div-three', {
		chart: {
			type: 'column',
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
			formatter: function () {
				return '<b>' + this.series.name + '</b><br/>' +
					this.point.y + ' 人';
			}
		},
		yAxis: {
			title: {
				text: '实时留存'
			},
			labels: {
				format: '{value}',
				style: {
					color: '#fff'
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
		plotOptions: {
			series: {
				lineWidth: 10
			}
		},
		series: [{
			name: '实时留存',
			data: arr2,
		}],
	});

}
//付费金额
function PayMoney(data) {
	var chart3 = null;
	var arr3 = [];
	var arr7 = []
	for (var i = 0; i < data.data[4].length; i++) {
		var someDate = data.data[4][i].serverId
		var rq = data.data[4][i].device_count
		arr3.push(rq)
		arr7.push(someDate)
		//	console.log(arr)
	}
	chart3 = Highcharts.chart('div-four', {
		chart: {
			type: 'column',
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
			formatter: function () {
				return '<b>' + this.series.name + '</b><br/>' +
					this.point.y;
			}
		},
		yAxis: {
			title: {
				text: '三日留存'
			},
			labels: {
				format: '{value}',
				style: {
					color: '#fff'
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
		plotOptions: {

		},
		series: [{
			name: '三日留存',
			data: arr3,
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

function shuju(){
	var newlogTime = $("#in1").val()
	$("#exampleop").bootstrapTable('destroy');
	var t =$('#exampleop').bootstrapTable({
		url: '../getGameAccountRetain.action',
		method: 'post',
		dataType: "json",
		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
		queryParamsType: "",
		striped: true, //设置为 true 会有隔行变色效果
		undefinedText: "0", //当数据为 undefined 时显示的字符
		pagination: false, //分页
		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
		
		pageNumber: 1, //如果设置了分页，首页页码
		// showPaginationSwitch:true,//是否显示 数据条数选择框
		pageSize: 20, //如果设置了分页，页面数据条数
		pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
		paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
		paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
		// singleSelect: false,//设置True 将禁止多选
		search: false, //显示搜索框
		data_local: "zh-US", //表格汉化
		sidePagination: "server", //服务端处理分页
		queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
				return { //这里的params是table提供的
					pageIndex: params.pageNumber, //从数据库第几条记录开始
					pageSize: params.pageSize, //找多少条
					startTime:newlogTime
				};
			},
		columns:[{
			title: '时间起止', 
			field: 'startTime', 
			align: 'center',	
			formatter:function(value, row, value){
				return row.startTime 
			}
		},
		{
			title: '登录的有效账号对局数',
			field: 'gameNumStrinig',
			align: 'center'
		},
		{
			title: '账号数量',
			field: 'accountNum',
			align: 'center'
		},
		{
			title: '留存率',
			field: 'dayRetainRate',
			align: 'center',
			
		}]
		
	  })
	  t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
			 $("body").mLoading("hide");
			 $(".pull-right").css("display", "block");
			 
		 });
	  $("#exampleop2").bootstrapTable('destroy');
	  var t = $('#exampleop2').bootstrapTable({
		url: '../getGameAccountRetain.action',
		method: 'post',
		dataType: "json",
		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
		queryParamsType: "",
		striped: true, //设置为 true 会有隔行变色效果
		undefinedText: "0", //当数据为 undefined 时显示的字符
		pagination: false, //分页
		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
		
		pageNumber: 1, //如果设置了分页，首页页码
		// showPaginationSwitch:true,//是否显示 数据条数选择框
		pageSize: 20, //如果设置了分页，页面数据条数
		pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
		paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
		paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
		// singleSelect: false,//设置True 将禁止多选
		search: false, //显示搜索框
		data_local: "zh-US", //表格汉化
		sidePagination: "server", //服务端处理分页
		queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
			return { //这里的params是table提供的
				pageIndex: params.pageNumber, //从数据库第几条记录开始
				pageSize: params.pageSize, //找多少条
				startTime:newlogTime
			};
		},
		columns:[{
			title: '时间起止', 
			field: 'startTime', 
			align: 'center',	
			formatter:function(value, row, value){
				return row.startTime 
			}
		},
		{
			title: '登录的有效账号对局数',
			field: 'gameNumStrinig',
			align: 'center'
		},
		{
			title: '账号数量',
			field: 'accountNum',
			align: 'center'
		},
		{
			title: '留存率',
			field: 'threeDayRetainRate',
			align: 'center'
		}],
		
	  })
	t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
			 $("body").mLoading("hide");
			 $(".pull-right").css("display", "block");
		 });
		 
}




	 


