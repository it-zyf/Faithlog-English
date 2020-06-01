language()
var old;
var newtime;
var pay_choice;
var pay_allaction;
var pay_selec;
var pay_allserver;
var pay_server;
var pay_account;
var pay_roleid;
var pay_totalsum;
var pay_rstime;
var pay_oldtime;
var pay_jewel;
var pay_rscon;
var pay_oldcon;
var pay_viplevel;
var pay_commonlevel;
var pay_number;
var pay_portrate;
var pay_causeid;
var pay_nmberOfCos;
var pay_locamoney;
var pay_sumlocal;
var pay_bindmoney;
function language(){
	var cook = $.cookie("value");
	if(cook == null){
		pay_choice = "请选择";
		pay_allaction = "全选/全不选";
		pay_selec = "项被选中";
		pay_allserver = "已选中所有选项";
		pay_server = "区服号";
		pay_account = "账号ID";
		pay_roleid = "角色ID";
		pay_totalsum = "充值钻石总额";
		pay_rstime = "首次充值时间";
		pay_oldtime = "最后充值时间";
		pay_jewel = "消费钻石总额";
		pay_rscon = "首次消费时间";
		pay_oldcon = "最后消费时间";
		pay_viplevel = "VIP等级";
		pay_commonlevel = "等级";
		pay_number = "人数";
		pay_portrate = "占比";
		pay_causeid = "消耗类型";
		pay_nmberOfCos = "消费次数";
		pay_locamoney = "钻石总数";
		pay_sumlocal = "钻石总数占比";
		pay_bindmoney = "绑定钻石总数";
	}else if(cook == "chinese"){
		pay_choice = "请选择";
		pay_allaction = "全选/全不选";
		pay_selec = "项被选中";
		pay_allserver = "已选中所有选项";
		pay_server = "区服号";
		pay_account = "账号ID";
		pay_roleid = "角色ID";
		pay_totalsum = "充值钻石总额";
		pay_rstime = "首次充值时间";
		pay_oldtime = "最后充值时间";
		pay_jewel = "消费钻石总额";
		pay_rscon = "首次消费时间";
		pay_oldcon = "最后消费时间";
		pay_viplevel = "VIP等级";
		pay_commonlevel = "等级";
		pay_number = "人数";
		pay_portrate = "占比";
		pay_causeid = "消耗类型";
		pay_nmberOfCos = "消费次数";
		pay_locamoney = "钻石总数";
		pay_sumlocal = "钻石总数占比";
		pay_bindmoney = "绑定钻石总数";
	}else if(cook == "Korean"){
		pay_choice = "请选择";
		pay_allaction = "全选/全不选";
		pay_selec = "项被选中";
		pay_allserver = "已选中所有选项";
		pay_server = "区服号";
		pay_account = "账号ID";
		pay_roleid = "角色ID";
		pay_totalsum = "充值钻石总额";
		pay_rstime = "首次充值时间";
		pay_oldtime = "最后充值时间";
		pay_jewel = "消费钻石总额";
		pay_rscon = "首次消费时间";
		pay_oldcon = "最后消费时间";
		pay_viplevel = "VIP等级";
		pay_commonlevel = "等级";
		pay_number = "人数";
		pay_portrate = "占比";
		pay_causeid = "消耗类型";
		pay_nmberOfCos = "消费次数";
		pay_locamoney = "钻石总数";
		pay_sumlocal = "钻石总数占比";
		pay_bindmoney = "绑定钻石总数";
	}
}
//设置默认时间
today()
function today() {
	var today = new Date();
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
		elem: '#contimes',
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
		max: 'now',
		done:function(res){
			times2 = res
		}
	})
	laydate.render({
		elem: '#Diamond_times',
		range: '~', //日期范围选择
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value: old + ' ~ ' + newtime,
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
			$('#consumption_district').multiselect("destroy")
			$('#vip_district').multiselect("destroy")
			$('#grade_district').multiselect("destroy")
			$('#Diamond_district').multiselect("destroy")
			for(var i = 0; i < obj.rows.length; i++) {
				$("#district_service").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#consumption_district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#vip_district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#grade_district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
				$("#Diamond_district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
			};
			$("#district_service").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$("#consumption_district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$("#vip_district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$("#grade_district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$("#Diamond_district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$('#district_service').multiselect({
				buttonWidth: '66%',
				nonSelectedText: pay_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: pay_allaction, //全选按钮显示的文本	
				nSelectedText: pay_selec,
				allSelectedText: pay_allserver,
				enableFiltering: false, //搜索框
			});
			$('#consumption_district').multiselect({
				buttonWidth: '66%',
				nonSelectedText: pay_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: pay_allaction, //全选按钮显示的文本	
				nSelectedText: pay_selec,
				allSelectedText: pay_allserver,
			});
			$('#vip_district').multiselect({
				buttonWidth: '66%',
				nonSelectedText: pay_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: pay_allaction, //全选按钮显示的文本	
				nSelectedText: pay_selec,
				allSelectedText: pay_allserver,
			});
			$('#grade_district').multiselect({
				buttonWidth: '66%',
				nonSelectedText: pay_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: pay_allaction, //全选按钮显示的文本	
				nSelectedText: pay_selec,
				allSelectedText: pay_allserver,
			});
			$('#Diamond_district').multiselect({
				buttonWidth: '66%',
				nonSelectedText: pay_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: pay_allaction, //全选按钮显示的文本	
				nSelectedText: pay_selec,
				allSelectedText: pay_allserver,
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
		data: {
			type: 2
		},
		success: function(obj) {
			for(var i = 0; i < obj.rows.length; i++) {
				$("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#consumption_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#vip_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#grade_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
				$("#Diamond_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
			};
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
						$("#consumptionreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
						$("#vipreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
						$("#gradereg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
						$("#Diamondreg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
					};
					onread()
					consum()
					vipdistribution()
					aaaa()
					diaconsume()
				}
			})
		}
	})
	
}

//充值表格分页
function onread() {
	$("body").mLoading("show");
	var district_service = $("#district_service").val();//区服
	var channel = $("#channel").val();//登录方式
	var reg_channel = $("#reg_channel").val();//充值渠道
	if(district_service!=null){
		district_service = district_service.join(","); 		
	}
	$("#aaa").bootstrapTable('destroy');
	var t = $("#aaa").bootstrapTable({
		url: '../queryRecharge_new.action',
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
				loginType:channel,
				channelId:reg_channel
			};
		},
		responseHandler: function (res){
			return res
		},
		idField: "logId", //指定主键列
		columns: [{
				title: pay_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: pay_account,
				field: 'accountId',
				align: 'center',
			},
			{
				title: pay_roleid,
				field: 'roleId',
				align: 'center',
			},
			{
				title: pay_totalsum,
				field: 'totalRechargeJewel',
				align: 'center',
			},
			{
				title: pay_rstime,
				field: 'rslLogTime',
				align: 'center',
			},
			{
				title: pay_oldtime,
				field: 'logTime',
				align: 'center',
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
//消费表格分页
function consum() {
	$("body").mLoading("show")
	var consumption_district = $("#consumption_district").val();//区服
	var consumption_channel = $("#consumption_channel").val();//登录方式
	var consumptionreg_channel = $("#consumptionreg_channel").val();//充值渠道
	if(consumption_district!=null){
		consumption_district = consumption_district.join(","); 		
	}
	$("#consumption_table").bootstrapTable('destroy');
	var t = $("#consumption_table").bootstrapTable({
		url: '../queryConsumption_new.action',
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
				serverId: consumption_district,
				loginType:consumption_channel,
				channelId:consumptionreg_channel,
				seDate: times2,
			};
		},
		idField: "logId", //指定主键列
		columns: [{
				title: pay_server,
				field: 'serverId',
				align: 'center',
			},
			{
				title: pay_account,
				field: 'accountId',
				align: 'center',
			},
			{
				title: pay_roleid,
				field: 'roleId',
				align: 'center',
			},
			{
				title: pay_jewel,
				field: 'totalConsumeJewel',
				align: 'center',
			},
			{
				title: pay_rscon,
				field: 'rslLogTime',
				align: 'center',
			},
			{
				title: pay_oldcon,
				field: 'logTime',
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
//vip分布分页
function vipdistribution() {
	$("body").mLoading("show")
	var vip_district = $("#vip_district").val();//区服
	var vip_channel = $("#vip_channel").val();//登录方式
	var vipreg_channel = $("#vipreg_channel").val();//充值渠道
	if(vip_district!=null){
		vip_district = vip_district.join(","); 		
	}
	$("#datatable").bootstrapTable('destroy');
	var t = $("#datatable").bootstrapTable({
		url: '../queryVipLevel.action',
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
				serverId: vip_district,
				loginType:vip_channel,
				channelId:vipreg_channel,
			};
		},
		idField: "logId", //指定主键列
		columns: [
			{
				title: pay_viplevel,
				field: 'rolelevel',
				align: 'center',
			},
			{
				title: pay_number,
				field: 'accountIdCount',
				align: 'center',
			},
			{
				title: pay_portrate,
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
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#datatable tbody tr").css("background-color", "#323232")
		$("#datatable tbody tr:even").css("background-color", "#3b3b3b")
		var tableText = $("#datatable").html();
		$("#replace_table").html(tableText);
		$(".replace_area").css("display","block");
	});
}
//等级分布分页
function aaaa() {
	var grade_district = $("#grade_district").val();//区服
	var grade_channel = $("#grade_channel").val();//登录方式
	var gradereg_channel = $("#gradereg_channel").val();//充值渠道
	if(grade_district!=null){
		grade_district = grade_district.join(","); 		
	}
	$("#grade_table").bootstrapTable('destroy');
	var t = $("#grade_table").bootstrapTable({
		url: '../queryLevelDistribution.action',
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
				serverId: grade_district,
				loginType:grade_channel,
				channelId:gradereg_channel,
			};
		},
		idField: "logId", //指定主键列
		columns: [
			{
				title: pay_commonlevel,
				field: 'rolelevel',
				align: 'center',
			},
			{
				title: pay_number,
				field: 'accountIdCount',
				align: 'center',
			},
			{
				title: pay_portrate,
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
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#grade_table tbody tr").css("background-color", "#323232")
		$("#grade_table tbody tr:even").css("background-color", "#3b3b3b")
		var tableText = $("#grade_table").html();
		$("#replace_table2").html(tableText);
		$(".replace_area2").css("display","block");
	});
}
//钻石消耗分类分页
function diaconsume() {
	$("body").mLoading("show")
	var Diamond_district = $("#Diamond_district").val();//区服
	var Diamond_channel = $("#Diamond_channel").val();//登录方式
	var Diamondreg_channel = $("#Diamondreg_channel").val();//充值渠道
	var Diamond_type = $("#Diamond_type").val();//货币类型
	if(Diamond_district!=null){
		Diamond_district = Diamond_district.join(',')
	}
	$("#Diamond_table").bootstrapTable('destroy');
	var t = $("#Diamond_table").bootstrapTable({
		url: '../queryDiamondsConsume.action',
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
				serverId: Diamond_district,
				loginType:Diamond_channel,
				channelId:Diamondreg_channel,
				seDate: times3,
				moneyType:Diamond_type
			};
		},
		idField: "logId", //指定主键列
		columns: [
			{
				title: pay_causeid,
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
				title: pay_nmberOfCos,
				field: 'nmberOfCos',
				align: 'center',
			},
			{
				title: pay_locamoney,
				field: 'locationMoney',
				align: 'center',
			},
			{
				title: pay_sumlocal,
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
		]
	});
	t.on('load-success.bs.table', function(data) {
		$("body").mLoading("hide")
		$(".pull-right").css("display", "block");
		$("#Diamond_table tbody tr").css("background-color", "#323232")
		$("#Diamond_table tbody tr:even").css("background-color", "#3b3b3b")
		var tableText = $("#Diamond_table").html();
		$("#replace_table3").html(tableText);
		$(".replace_area3").css("display","block");
	});
	if(Diamond_type == 3) {
		$("#Diamond_table thead tr th").eq(2).children(":first").html(pay_locamoney)
	} else if(Diamond_type == 4) {
		$("#Diamond_table thead tr th").eq(2).children(":first").html(pay_bindmoney)
	}
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
	"夫妻榜祝福",
	"千里传音",
	"购买命中注定次数",
	"回归系统购买",
	"购买赛季手册等级",
	"跨服天梯赛季手册",
	"限时活动商店购买",
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
	"夫妻榜祝福",
	"千里传音",
	"购买命中注定次数",
	"回归系统购买",
	"购买赛季手册等级",
	"跨服天梯赛季手册",
	"限时活动商店购买",
]