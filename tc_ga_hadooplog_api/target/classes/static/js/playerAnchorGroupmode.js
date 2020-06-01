function todays() { //构建方法
	var today = new Date(); //new 出当前时间
	today.setMonth(today.getMonth() - 1)
	var h = today.getFullYear(); //获取年
	var m = today.getMonth() + 1; //获取月
	var d = today.getDate(); //获取日
	if(m >= 1 && m < 10) {
		m = "0" + m
	}
	if(d >= 1 && d < 10) {
		d = "0" + d
	}
	return h + "-" + m + "-" + d; //返回 年-月-日 时:分:秒      
};
document.getElementById("in3").value = todays();

function today() { //构建方法
	var today = new Date(); //new 出当前时间
	var h = today.getFullYear(); //获取年
	var m = today.getMonth() + 1; //获取月
	var d = today.getDate(); //获取日
	if(m < 10) {
		m = "0" + m
	}
	if(d < 10) {
		d = "0" + d
	}
	return h + "-" + m + "-" + d; //返回 年-月-日 时:分:秒
};
document.getElementById("in4").value = today();


change()

function change() {

	$.ajax({
		type: "get",
		url: "http://150.109.167.142:9110/frontEnd/queryAreas",
		async: true,
		success: function(obj) {
			for(var i = 0; i < obj.rows.length; i++) {
				$("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
			};
			$("#district").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
			$('#district').multiselect("destroy").multiselect({
				buttonWidth: '65%',
				nonSelectedText: '请选择',
				maxHeight: 200,
				numberDisplayed: 1,
				includeSelectAllOption: true,
				selectAllText: '全选/全不选', //全选按钮显示的文本	
				nSelectedText: '项被选中',
				allSelectedText: '已选中所有区服'
			});
			onready()
		}
	});
}

function onready() {
	var text1 = $('#in1').val(); //设备号
	var text2 = $('#task').val(); //任务类型
	var text3 = $('#in3').val(); //开始时间
	var text4 = $('#in4').val(); //结束时间
	var text5 = $("#district").val() //区服
	var text6 = $("#account").val() //账号id
	var text7 = $("#role").val() //英雄ID：
	var text8 = $("#part").val() //角色名
	var text9 = $("#inhome").val() //房间id
	if(text5 != null) {
		text5 = text5.join(",");
	}
	if(text3 > text4) {
		alert("起始日期不得早于截止日期")
		return false;
	}
	$("body").mLoading("show");
	$("#example").bootstrapTable('destroy');
	var t = $("#example").bootstrapTable({
		url: '../queryGroupRowPlayer.action',
		method: 'post',
		dataType: "json",
		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
		queryParamsType: "",
		striped: true, //设置为 true 会有隔行变色效果
		undefinedText: "空", //当数据为 undefined 时显示的字符
		pagination: true, //分页
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
				serverId: text5,
				startTime: text3,
				endTime: text4,
				accountId: text6,
				heroId: text7,
				roleName: text8,
				deviceId: text1,
				roomId:text9,
			};
		},
		idField: "logId", //指定主键列
		columns: [{
				title: '区服号', //区服号
				field: 'serverId', //json数据中rows数组中的属性名
				align: 'center' //水平居中
			},
			{
				title: '日志时间',
				field: 'logTime',
				align: 'center'
			},
			{
				title: '账号ID',
				field: 'accountId',
				align: 'center'
			},
			{
				title: '账号等级',
				field: 'roleLevel',
				align: 'center'
			},
			{
				title: '英雄ID',
				field: 'heroId',
				align: 'center'
			},
			{
				title: '队伍ID',
				field: 'roleName',
				align: 'center'
			},
			{
				title: '角色等级',
				field: 'roleLevel',
				align: 'center'
			},
			{
				title: '客户端版本',
				field: 'clientVersion',
				align: 'center'
			},
			{
				title: 'stepNum',
				field: 'stepNum',
				align: 'center'
			},
			{
				title: '房间ID',
				field: 'roomId',
				align: 'center'
			},
			{
				title: '房间状态',
				field: 'roomState',
				align: 'center',
				formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
					if(row.roomState == 0) {
						row.roomState = "待机区";
					} else if(row.roomState == 1) {
						row.roomState = "游戏区";
					}
					return row.roomState;
				}

			},
			{
				title: '玩家数',
				field: 'playerCount',
				align: 'center',

			},
			{
				title: '机器人数',
				field: 'robotCount',
				align: 'center',

			},
			{
				title: '游戏时间',
				field: 'gameTime',
				align: 'center',

			},
			{
				title: '中心坐标',
				field: 'axis',
				align: 'center',

			},
			{
				title: '当时排名',
				field: 'rank',
				align: 'center',

			},
			{
				title: '当时击杀玩家数',
				field: 'killPlayers',
				align: 'center',

			},
			{
				title: '当时装备头部ID',
				field: 'head',
				align: 'center',

			},
			{
				title: '当时装备身体ID',
				field: 'body',
				align: 'center',

			},
			{
				title: '当时装备武器ID',
				field: 'arms',
				align: 'center',

			},
			{
				title: '当时特殊能力ID',
				field: 'sandSkill',
				align: 'center',

			},
			{
				title: '当时备用特殊能力ID组',
				field: 'sandSkillStock',
				align: 'center',

			},
			{
				title: '当时兴奋剂数量',
				field: 'dope',
				align: 'center',

			},
			{
				title: '当时药品数量',
				field: 'drug',
				align: 'center',

			},
			{
				title: '当时炸弹数量',
				field: 'bomb',
				align: 'center',

			},
			{
				title: '当时铭文ID组',
				field: 'rune',
				align: 'center',

			},
			{
				title: '当时击杀Npc数',
				field: 'killNpcs',
				align: 'center',

			},
			{
				title: '技能等级',
				field: 'skillLevels',
				align: 'center',

			},{
				title: '模式分类',
				field: 'model',
				align: 'center',
				formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
					var model
					if(row.model == 0) {
						model = "休闲模式";
					} else if(row.model == 1) {
						model = "天梯模式";
					}
					return model;
				}
			}
		]
	});

	t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
		$("body").mLoading("hide");
		$(".pull-right").css("display", "block");
	});
}


function onready2() {
	var text1 = $('#in1').val(); //设备号
	var text2 = $('#task').val(); //任务类型
	var text3 = $('#in3').val(); //开始时间
	var text4 = $('#in4').val(); //结束时间
	var text5 = $("#district").val() //区服
	var text6 = $("#account").val() //账号id
	var text7 = $("#role").val() //英雄ID：
	var text8 = $("#part").val() //角色名
	if(text5 != null) {
		text5 = text5.join(",");
	}
	if(text3 > text4) {
		alert("起始日期不得早于截止日期")
		return false;
	}
	$("body").mLoading("show");
	$("#example").bootstrapTable('destroy');
	var t = $("#example").bootstrapTable({
		url: '../queryGroupRowPlayer.action',
		method: 'post',
		dataType: "json",
		contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
		queryParamsType: "",
		striped: true, //设置为 true 会有隔行变色效果
		undefinedText: "空", //当数据为 undefined 时显示的字符
		pagination: true, //分页
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
				serverId: text5,
				startTime: text3,
				endTime: text4,
				accountId: text6,
				heroId: text7,
				roleName: text8,
				deviceId: text1,
				stepNum:4198
			};
		},
		idField: "logId", //指定主键列
		columns: [{
				title: '区服号', //区服号
				field: 'serverId', //json数据中rows数组中的属性名
				align: 'center' //水平居中
			},
			{
				title: '日志时间',
				field: 'logTime',
				align: 'center'
			},
			{
				title: '账号ID',
				field: 'accountId',
				align: 'center'
			},
			{
				title: '账号等级',
				field: 'roleLevel',
				align: 'center'
			},
			{
				title: '英雄ID',
				field: 'heroId',
				align: 'center'
			},
			{
				title: '队伍ID',
				field: 'roleName',
				align: 'center'
			},
			{
				title: '角色等级',
				field: 'roleLevel',
				align: 'center'
			},
			{
				title: '客户端版本',
				field: 'clientVersion',
				align: 'center'
			},
			{
				title: 'stepNum',
				field: 'stepNum',
				align: 'center'
			},
			{
				title: '房间ID',
				field: 'roomId',
				align: 'center'
			},
			{
				title: '房间状态',
				field: 'roomState',
				align: 'center',
				formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
					if(row.roomState == 0) {
						row.roomState = "待机区";
					} else if(row.roomState == 1) {
						row.roomState = "游戏区";
					}
					return row.roomState;
				}

			},
			{
				title: '玩家数',
				field: 'playerCount',
				align: 'center',

			},
			{
				title: '机器人数',
				field: 'robotCount',
				align: 'center',

			},
			{
				title: '游戏时间',
				field: 'gameTime',
				align: 'center',

			},
			{
				title: '中心坐标',
				field: 'axis',
				align: 'center',

			},
			{
				title: '当时排名',
				field: 'rank',
				align: 'center',

			},
			{
				title: '当时击杀玩家数',
				field: 'killPlayers',
				align: 'center',

			},
			{
				title: '当时装备头部ID',
				field: 'head',
				align: 'center',

			},
			{
				title: '当时装备身体ID',
				field: 'body',
				align: 'center',

			},
			{
				title: '当时装备武器ID',
				field: 'arms',
				align: 'center',

			},
			{
				title: '当时特殊能力ID',
				field: 'sandSkill',
				align: 'center',

			},
			{
				title: '当时备用特殊能力ID组',
				field: 'sandSkillStock',
				align: 'center',

			},
			{
				title: '当时兴奋剂数量',
				field: 'dope',
				align: 'center',

			},
			{
				title: '当时药品数量',
				field: 'drug',
				align: 'center',

			},
			{
				title: '当时炸弹数量',
				field: 'bomb',
				align: 'center',

			},
			{
				title: '当时铭文ID组',
				field: 'rune',
				align: 'center',

			},
			{
				title: '当时击杀Npc数',
				field: 'killNpcs',
				align: 'center',

			},
			{
				title: '技能等级',
				field: 'skillLevels',
				align: 'center',

			},
		]
	});

	t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
		$("body").mLoading("hide");
		$(".pull-right").css("display", "block");
	});
}