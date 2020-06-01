/**
 * 
 */
language()
var old;
var newtime;
var combat_choice;
var combat_allaction;
var combat_selec;
var combat_allserver;
var combat_server;
var combat_account;
var combat_roleid;
var combat_rolename;
var combat_maxmountpower;
var combat_mountuppower;
var combat_mountpower;
var combat_maxwingpower;
var combat_winguppower;
var combat_maxequipmentpower;
var combat_equipmentuppower;
var combat_maxspiritpower;
var combat_spirituppower;
var combat_maxallpower;
var combat_alluppower;
var combat_ranking;
var combat_logTime;
function language(){
	var cook = $.cookie("value");
	if(cook == null){
		combat_choice = "请选择";
		combat_allaction = "全选/全不选";
		combat_selec = "项被选中";
		combat_allserver = "已选中所有选项";
		combat_server = "区服";
		combat_account = "账号ID";
		combat_roleid = "角色ID";
		combat_rolename = "角色名";
		combat_maxmountpower = "坐骑历史最高战力";
		combat_mountuppower = "坐骑本次提升战力";
		combat_mountPower = "活动系统战力";
		combat_maxwingpower = "翅膀历史最高战力";
		combat_winguppower = "翅膀本次提升战力";
		combat_maxequipmentpower = "装备历史最高战力";
		combat_equipmentuppower = "装备本次提升战力";
		combat_maxspiritpower = "精灵历史最高战力";
		combat_spirituppower = "精灵本次提升战力";
		combat_maxallpower = "历史最高战力";
		combat_alluppower = "本次提升总战力";
		combat_ranking = "排名";
		combat_logTime = "时间";
	}else if(cook == "chinese"){
		combat_choice = "请选择";
		combat_allaction = "全选/全不选";
		combat_selec = "项被选中";
		combat_allserver = "已选中所有选项";
		combat_server = "区服";
		combat_account = "账号ID";
		combat_roleid = "角色ID";
		combat_rolename = "角色名";
		combat_maxmountpower = "坐骑历史最高战力";
		combat_mountuppower = "坐骑本次提升战力";
		combat_mountPower = "活动系统战力";
		combat_maxwingpower = "翅膀历史最高战力";
		combat_winguppower = "翅膀本次提升战力";
		combat_maxequipmentpower = "装备历史最高战力";
		combat_equipmentuppower = "装备本次提升战力";
		combat_maxspiritpower = "精灵历史最高战力";
		combat_spirituppower = "精灵本次提升战力";
		combat_maxallpower = "历史最高战力";
		combat_alluppower = "本次提升总战力";
		combat_ranking = "排名";
		combat_logTime = "时间";
	}else if(cook == "Korean"){
		combat_choice = "请选择";
		combat_allaction = "全选/全不选";
		combat_selec = "项被选中";
		combat_allserver = "已选中所有选项";
		combat_server = "区服";
		combat_account = "账号ID";
		combat_roleid = "角色ID";
		combat_rolename = "角色名";
		combat_maxmountpower = "坐骑历史最高战力";
		combat_mountuppower = "坐骑本次提升战力";
		combat_mountPower = "活动系统战力";
		combat_maxwingpower = "翅膀历史最高战力";
		combat_winguppower = "翅膀本次提升战力";
		combat_maxequipmentpower = "装备历史最高战力";
		combat_equipmentuppower = "装备本次提升战力";
		combat_maxspiritpower = "精灵历史最高战力";
		combat_spirituppower = "精灵本次提升战力";
		combat_maxallpower = "历史最高战力";
		combat_alluppower = "本次提升总战力";
		combat_ranking = "排名";
		combat_logTime = "时间";
	}
}
//设置默认时间-起止时间间隔默认一周
today()
function today() {
	var today = new Date();
	today.setDate(today.getDate()-1);
	var y = today.getFullYear();
//	today.setMonth(today.getMonth() - 1)
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
	newtoday.setDate(newtoday.getDate()-1);
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
var times = old + "~" + newtime
var times2 = old + "~" + newtime
var times3 = old + "~" + newtime
var times4 = old + "~" + newtime
var times5 = old + "~" + newtime
//转换日期格式
function changeDateFormat(cellval) {
    var dateVal = cellval + "";
    if (cellval != null) {
        var date = new Date(parseInt(dateVal.replace("/Date(", "").replace(")/", ""), 10));
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        
        return date.getFullYear() + "-" + month + "-" + currentDate + " " + hours + ":" + minutes + ":" + seconds;
    }
}
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
		trigger: 'click',
		done:function(res){
			times = res
		}
	});
	laydate.render({
		elem: '#Wing_times',
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		trigger: 'click',
		done:function(res){
			times2 = res
		}
	})
	laydate.render({
		elem: '#equipment_times',
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		trigger: 'click',
		done:function(res){
			times3 = res
		}
	})
	laydate.render({
		elem: '#spirit_times',
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		trigger: 'click',
		done:function(res){
			times4 = res
		}
	})
	laydate.render({
		elem: '#all_times',
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		trigger: 'click',
		done:function(res){
			times5 = res
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
			$('#Wing_district').multiselect("destroy")
			$('#equipment_district').multiselect("destroy")
			$('#spirit_district').multiselect("destroy")
			$('#all_district').multiselect("destroy")
			for(var i = 0; i < obj.rows.length; i++) {
				$("#district_service").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#Wing_district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#equipment_district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#spirit_district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#all_district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
			};
			$("#district_service").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$("#Wing_district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$("#equipment_district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$("#spirit_district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$("#all_district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$('#district_service').multiselect({
				buttonWidth: '66%',
				nonSelectedText: combat_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: combat_allaction, //全选按钮显示的文本	
				nSelectedText: combat_selec,
				allSelectedText: combat_allserver,
				enableFiltering: false, //搜索框
			});
			$('#Wing_district').multiselect({
				buttonWidth: '66%',
				nonSelectedText: combat_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: combat_allaction, //全选按钮显示的文本	
				nSelectedText: combat_selec,
				allSelectedText: combat_allserver,
			});
			$('#equipment_district').multiselect({
				buttonWidth: '66%',
				nonSelectedText: combat_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: combat_allaction, //全选按钮显示的文本	
				nSelectedText: combat_selec,
				allSelectedText: combat_allserver,
			});
			$('#spirit_district').multiselect({
				buttonWidth: '66%',
				nonSelectedText: combat_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: combat_allaction, //全选按钮显示的文本	
				nSelectedText: combat_selec,
				allSelectedText: combat_allserver,
			});
			$('#all_district').multiselect({
				buttonWidth: '66%',
				nonSelectedText: combat_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: combat_allaction, //全选按钮显示的文本	
				nSelectedText: combat_selec,
				allSelectedText: combat_allserver,
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
			type: 3
		},
		success: function(obj) {
//			console.log(obj)
			for(var i = 0; i < obj.rows.length; i++) {
				$("#reg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#Wingreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#equipreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#spiritreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#allreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
			};
			onread()
			onread2()
			onread3()
			onread4()
			onread5()
		}
	})
}
//坐骑表格分页
function onread() {
	$("body").mLoading("show");
	var district_service = $("#district_service").val();//区服
	var datatimes = $("#datatimes").val();
	var reg_channel = $("#reg_channel").val();//渠道号
	if(district_service!=null){
		district_service = district_service.join(","); 		
	}
	$("#datatable").bootstrapTable('destroy');
	var t = $("#datatable").bootstrapTable({
		url: '../querymount.action',
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
				serverId: district_service,
				seDate: times,
				channelId:reg_channel
			};
		},
		responseHandler: function (res){
			return res
		},
		idField: "logId", //指定主键列
		columns: [{
				title: combat_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: combat_account,
				field: 'accountId',
				align: 'center',
			},
			{
				title: combat_roleid,
				field: 'roleId',
				align: 'center',
			},
			{
				title: combat_rolename,
				field: 'roleName',
				align: 'center',
			},
			{
				title: combat_maxmountpower,  //坐骑历史最高战力
				field: 'maxPower',
				align: 'center',
			},
			{
				title: combat_mountuppower,  //坐骑本次提升战力
				field: 'upPower',
				align: 'center',
			},
			{
				title: combat_ranking,
				field: 'ranking',
				align: 'center',
			},
			{
				title: combat_logTime,
				field: 'logTime',
				align: 'center',
//				formatter: function(value,row,index){
//					return changeDateFormat(value)
//				}
			},
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#datatable tbody tr").css("background-color", "#323232")
		$("#datatable tbody tr:even").css("background-color", "#3b3b3b")
	});
}
//翅膀表格分页
function onread2() {
    $("body").mLoading("show");
	var district_service = $("#Wing_district").val();//区服
	var datatimes = $("#datatimes").val();//时间
	var reg_channel = $("#Wingreg_channel").val();//渠道号
	if(district_service!=null){
		district_service = district_service.join(","); 		
	}
	$("#Wing_table").bootstrapTable('destroy');
	var t = $("#Wing_table").bootstrapTable({
		url: '../querywing.action',
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
				serverId: district_service,
				seDate: times2,
				channelId:reg_channel
			};
		},
		responseHandler: function (res){
			return res
		},
		idField: "logId", //指定主键列
		columns: [{
				title: combat_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: combat_account,
				field: 'accountId',
				align: 'center',
			},
			{
				title: combat_roleid,
				field: 'roleId',
				align: 'center',
			},
			{
				title: combat_rolename,
				field: 'roleName',
				align: 'center',
			},
			{
				title: combat_maxwingpower,  //翅膀历史最高战力
				field: 'maxPower',
				align: 'center',
			},
			{
				title: combat_winguppower,  //翅膀本次提升战力
				field: 'upPower',
				align: 'center',
			},
			{
				title: combat_ranking,
				field: 'ranking',
				align: 'center',
			},
			{
				title: combat_logTime,
				field: 'logTime',
				align: 'center',
//				formatter: function(value,row,index){
//					return changeDateFormat(value)
//				}
			},
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#Wing_table tbody tr").css("background-color", "#323232")
		$("#Wing_table tbody tr:even").css("background-color", "#3b3b3b")
	});
}
//装备表格分页
function onread3() {
	$("body").mLoading("show");
	var district_service = $("#equipment_district").val();//区服
	var times = $("#datatimes").val();
	var reg_channel = $("#equipreg_channel").val();//渠道号
	if(district_service!=null){
		district_service = district_service.join(","); 		
	}
	$("#equipment_table").bootstrapTable('destroy');
	var t = $("#equipment_table").bootstrapTable({
		url: '../queryequipment.action',
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
				serverId: district_service,
				seDate: times3,
				channelId:reg_channel
			};
		},
		responseHandler: function (res){
			return res
		},
		idField: "logId", //指定主键列
		columns: [{
				title: combat_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: combat_account,
				field: 'accountId',
				align: 'center',
			},
			{
				title: combat_roleid,
				field: 'roleId',
				align: 'center',
			},
			{
				title: combat_rolename,
				field: 'roleName',
				align: 'center',
			},
			{
				title: combat_maxequipmentpower,  //装备历史最高战力
				field: 'maxPower',
				align: 'center',
			},
			{
				title: combat_equipmentuppower,  //装备本次提升战力
				field: 'upPower',
				align: 'center',
			},
			{
				title: combat_ranking,
				field: 'ranking',
				align: 'center',
			},
			{
				title: combat_logTime,
				field: 'logTime',
				align: 'center',
//				formatter: function(value,row,index){
//					return changeDateFormat(value)
//				}
			},
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#equipment_table tbody tr").css("background-color", "#323232")
		$("#equipment_table tbody tr:even").css("background-color", "#3b3b3b")
	});
}
//精灵表格分页
function onread4() {
	$("body").mLoading("show");
	var district_service = $("#spirit_district").val();//区服
	var times = $("#datatimes").val();
	var reg_channel = $("#spiritreg_channel").val();//渠道号
	if(district_service!=null){
		district_service = district_service.join(","); 		
	}
	$("#spirit_table").bootstrapTable('destroy');
	var t = $("#spirit_table").bootstrapTable({
		url: '../queryespirit.action',
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
				serverId: district_service,
				seDate: times4,
				channelId:reg_channel
			};
		},
		responseHandler: function (res){
			return res
		},
		idField: "logId", //指定主键列
		columns: [{
				title: combat_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: combat_account,
				field: 'accountId',
				align: 'center',
			},
			{
				title: combat_roleid,
				field: 'roleId',
				align: 'center',
			},
			{
				title: combat_rolename,
				field: 'roleName',
				align: 'center',
			},
			{
				title: combat_maxspiritpower,  //精灵历史最高战力
				field: 'maxPower',
				align: 'center',
			},
			{
				title: combat_spirituppower,  //精灵本次提升战力
				field: 'upPower',
				align: 'center',
			},
			{
				title: combat_ranking,
				field: 'ranking',
				align: 'center',
			},
			{
				title: combat_logTime,
				field: 'logTime',
				align: 'center',
//				formatter: function(value,row,index){
//					return changeDateFormat(value)
//				}
			},
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#spirit_table tbody tr").css("background-color", "#323232")
		$("#spirit_table tbody tr:even").css("background-color", "#3b3b3b")
	});
}
//all表格分页
function onread5() {
	$("body").mLoading("show");
	var district_service = $("#all_district").val();//区服
	var times = $("#datatimes").val();
	var reg_channel = $("#allreg_channel").val();//渠道号
	if(district_service!=null){
		district_service = district_service.join(","); 		
	}
	$("#all_table").bootstrapTable('destroy');
	var t = $("#all_table").bootstrapTable({
		url: '../queryTotalCombatPower.action',
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
				serverId: district_service,
				seDate: times5,
				channelId:reg_channel
			};
		},
		responseHandler: function (res){
			return res
		},
		idField: "logId", //指定主键列
		columns: [{
				title: combat_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: combat_account,
				field: 'accountId',
				align: 'center',
			},
			{
				title: combat_roleid,
				field: 'roleId',
				align: 'center',
			},
			{
				title: combat_rolename,
				field: 'roleName',
				align: 'center',
			},
			{
				title: combat_maxallpower,  //历史最高战力
				field: 'maxPower',
				align: 'center',
			},
//			{
//				title: combat_alluppower,  //本次提升战力
//				field: 'upPower',
//				align: 'center',
//			},
			{
				title: combat_ranking,
				field: 'ranking',
				align: 'center',
			},
			{
				title: combat_logTime,
				field: 'logTime',
				align: 'center',
//				formatter: function(value,row,index){
//					return changeDateFormat(value)
//				}
			},
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#all_table tbody tr").css("background-color", "#323232")
		$("#all_table tbody tr:even").css("background-color", "#3b3b3b")
	});
}

var obj = [
	"转生",
	"复活",
	"解锁背包格子",
	"军团捐献",
	"资源找回",
	"成长基金",
	"红包",
	"膜拜",
	"学习技能",
	"通过邮件发钱",
	"主界面的转换",
	"背包里的转换",
	"图鉴守护神升星",
	"图鉴守护神升级",
	"信仰点亮",
	"信仰升级",
	"创建军团",
	"舞会领奖",
	"举办舞会",
	"军团buff",
	"军团清除世界招募cd",
	"补领福利",
	"副本完成奖励",
	"精灵升级",
	"精灵单个猎取",
	"精灵十连猎取",
	"冥想",
	"竞技场付费挑战",
	"完成任务",
	"任务刷星",
	"传送",
	"元素之心单个获取",
	"元素之心精炼",
	"元素之心升级",
	"副本扫荡",
	"买物品",
	"物品追加",
	"物品进阶",
	"神装再造",
	"合成",
	"物品升级",
	"翅膀升级自动买",
	"翅膀升级",
	"翅膀升星自动买",
	"翅膀升星",
	"注魂",
	"注灵",
	"翎羽升级自动买",
	"翎羽升级",
	"翎羽升星自动买",
	"翎羽升星",
	"物品洗练",
	"坐骑升级自动买",
	"坐骑升级",
	"坐骑解锁",
	"坐骑幻化",
	"祈福单次",
	"祈福十连",
	"称号升级",
	"gm指令",
	"翅膀幻化",
	"符文保值回收",
	"花费金币聊天",
	"物品续费",
	"物品礼包购买",
	"购买buff药",
	"宝石升级",
	"拍卖购买",
	"拍卖竞标",
	"物品回收",
	"军团加火",
	"军团提升技能",
	"火种购买标志位",
	"火种升级",
	"火种位置升级",
	"副本增加buff",
	"精灵开格子",
	"精灵幻化",
	"开启天赋",
	"离婚",
	"宝藏抽奖",
	"神装合成",
	"竞技场扫荡",
	"云购购买",
	"解锁仓库格子",
	"信仰符文升级",
	"信仰符文保值分解",
	"军团仓库积分",
	"购买VIP特权物品",
	"图鉴升级",
	"限时小额充值",
	"购买跨服天梯次数",
	"神翎之心升级",
	"技能书保值回收",
]
var only = [
	"전환",
	"부활",
	"가방 활성 칸",
	"길드 기부",
	"자원 회수",
	"성장 기금",
	"레드 패킷",
	"응원",
	"배운 스킬",
	"우편을 통해 금액 발송",
	"메인 화면의 전환",
	"가방 내부의 전환",
	"도감 수호신 별승급",
	"도감 수호신 승급",
	"페이스 빛",
	"페이스 승급",
	"길드 생성",
	"무도회 보상",
	"무도회 개최",
	"길드buff",
	"길드 세계 모집 제거cd",
	"보상 혜택",
	"던전 클리어 보상",
	"정령 승급",
	"정령 1개 얻기",
	"정령 10개 얻기",
	"명상",
	"경기장 지불 도전",
	"임무 완료",
	"임무 초기화",
	"전송",
	"원소의 심장 1개 획득",
	"원소의 심장 정련",
	"원소의 심장 승급",
	"던전 소탕",
	"물품 사기",
	"물품 추가",
	"물품 단계승급",
	"신의장비 제조",
	"합성",
	"물품 승급",
	"날개 승급 자동구매",
	"날개 승급",
	"날개 별승급 자동구매",
	"날개 별승급",
	"주혼",
	"주령",
	"날개 승급 자동구매",
	"날개 승급",
	"날개 별승급 자동구매",
	"날개 별승급",
	"물품 제련",
	"탈것 승급 자동구매",
	"탈것 승급",
	"탈것 활성",
	"탈것 환화",
	"축복 1회",
	"축복 10회",
	"타이틀 승급",
	"gm명령",
	"날개 환화",
	"룬 회수 보호",
	"골드 이용 대화",
	"물품 추가 요금",
	"물품 쿠폰 구매",
	"buff포션 구매",
	"보석 승급",
	"경매 구매",
	"경매 입찰",
	"물품 회수",
	"길드 불 추가",
	"길드 스킬 승급",
	"불씨 구매표시 자리",
	"불씨승급",
	"불씨 위치 승급",
	"던전 buff증가",
	"정령 칸 열기",
	"정령 환화",
	"특성 오픈",
	"이혼",
	"보물 뽑기",
	"신의장비 합성",
	"경기장 소탕",
	"운송 구매",
	"창고 칸 활성",
	"페이스 룬 승급",
	"페이스 룬 분해",
	"길드 창고 포인트",
	"VIP특권 물품 구매",
	"도감 승급",
	"限时小额充值",
	"购买跨服天梯次数",
	"神翎之心升级",
	"技能书保值回收",
]