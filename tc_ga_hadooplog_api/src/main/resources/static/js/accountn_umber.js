function todays() { //构建方法
    var date = new Date();
    var oneweekdate = new Date(date-7*24*3600*1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth()+1;
    var d = oneweekdate.getDate();

	if(m >= 1 && m < 10) {
		m = "0" + m
	}
	if(d >= 1 && d < 10) {
		d = "0" + d
	}
    var formatwdate = y+'-'+m+'-'+d;
	return formatwdate; //返回 年-月-日 时:分:秒
};
document.getElementById("in3").value = todays();

// function today() { //构建方法
// 	var today = new Date(); //new 出当前时间
// 	var h = today.getFullYear(); //获取年
// 	var m = today.getMonth() + 1; //获取月
// 	var d = today.getDate(); //获取日
// 	if(m < 10) {
// 		m = "0" + m
// 	}
// 	if(d < 10) {
// 		d = "0" + d
// 	}
// 	return h + "-" + m + "-" + d; //返回 年-月-日 时:分:秒
// };
// document.getElementById("in4").value = today();

onready()

function onready() {
	var text3 = $('#in3').val(); //开始时间
	// var text4 = $('#in4').val(); //结束时间
	var model = $("#model").val();
	// if(text3 > text4) {
	// 	alert("起始日期不得早于截止日期")
	// 	return false;
	// }
	$("body").mLoading("show");
	$("#example").bootstrapTable('destroy');
	var t = $("#example").bootstrapTable({
		url: '../getGameNum.action',
		method: 'post',
		dataType: "json",
		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
		queryParamsType: "",
		striped: true, //设置为 true 会有隔行变色效果
		undefinedText: "0", //当数据为 undefined 时显示的字符
		pagination: false, //分页
		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
		showToggle: false, //是否显示 切换试图（table/card）按钮
		showColumns: "true", //是否显示 内容列下拉框
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
				startTime: text3,
				endTime: text3,
				model:model
			};
		},
		idField: "logId", //指定主键列
		columns: [{
			title: '起止时间',
			field: '', //json数据中rows数组中的属性名
			align: 'center',
			formatter:function(value, row, value){
				return row.startTime +"~"+ row.endTime
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
		]
	});

	t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
		$("body").mLoading("hide");
		$(".pull-right").css("display", "block");
	});
}
function queryPeopel() {
	var model = $("#model").val();
	var text3 = $('#in3').val(); //开始时间
	// var text4 = $('#in4').val(); //结束时间
	// if(text3 > text4) {
	// 	alert("起始日期不得早于截止日期")
	// 	return false;
	// }
	$("body").mLoading("show");
	$("#example").bootstrapTable('destroy');
	var t = $("#example").bootstrapTable({
		url: '../getRealGameNum.action',//人数查询接口
		method: 'post',
		dataType: "json",
		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
		queryParamsType: "",
		striped: true, //设置为 true 会有隔行变色效果
		undefinedText: "0", //当数据为 undefined 时显示的字符
		pagination: false, //分页
		paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
		showToggle: false, //是否显示 切换试图（table/card）按钮
		showColumns: "true", //是否显示 内容列下拉框
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
				model:model,//0所有1单排休闲2单排天梯3组排休闲4组排天梯
				startTime:text3,
				endTime:text3,
			};
		},
		idField: "logId", //指定主键列
		columns: [{
				title: '起止时间', 
				field: '', //json数据中rows数组中的属性名
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
		]
	});
	t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
		$("body").mLoading("hide");
		$(".pull-right").css("display", "block");
	});
}