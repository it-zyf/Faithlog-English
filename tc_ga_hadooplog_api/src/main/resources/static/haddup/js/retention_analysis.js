language()
var old;
var newtime;
var ltv_choice;
var ltv_allaction;
var ltv_selec;
var ltv_allserver;
var ltv_time;
var ltv_addreg;
var ltv_addactive;
var ltv_addregnums;
var ltv_amount;
var ltv_day;
var ltv_twoday; 
var ltv_threeday; 
var ltv_fourday; 
var ltv_fiveday; 
var ltv_sixday; 
var ltv_sevenday; 
var ltv_fifday; 
var ltv_thirday; 
var ltv_fourfiveday; 
var ltv_sixtyday; 
var ltv_nineday;
function language(){
	var cook = $.cookie("value");
	if(cook == null){
		ltv_choice = "请选择";
		ltv_allaction = "全选/全不选";
		ltv_selec = "项被选中";
		ltv_allserver = "已选中所有选项";
		ltv_time = "日期";
		ltv_addreg = "激活数";
		ltv_addactive = "新增活跃账号数";
		ltv_addregnums = "新付费金额";
		ltv_amount = "当日充值总额";
		ltv_day = "首日留存";
		ltv_twoday = "2日留存";
		ltv_threeday = "3日留存";
		ltv_fourday = "4日留存";
		ltv_fiveday = "5日留存";
		ltv_sixday = "6日留存";
		ltv_sevenday = "7日留存";
		ltv_fifday = "15日留存";
		ltv_thirday = "30日留存";
		ltv_fourfiveday = "45日留存";
		ltv_sixtyday = "60日留存";
		ltv_nineday = "90日留存";
	}else if(cook == "chinese"){
		ltv_choice = "请选择";
		ltv_allaction = "全选/全不选";
		ltv_selec = "项被选中";
		ltv_allserver = "已选中所有选项";
		ltv_time = "日期";
		ltv_addreg = "激活数";
		ltv_addactive = "新增活跃账号数";
		ltv_addregnums = "新付费金额";
		ltv_amount = "当日充值总额";
		ltv_day = "首日留存";
		ltv_twoday = "2日留存";
		ltv_threeday = "3日留存";
		ltv_fourday = "4日留存";
		ltv_fiveday = "5日留存";
		ltv_sixday = "6日留存";
		ltv_sevenday = "7日留存";
		ltv_fifday = "15日留存";
		ltv_thirday = "30日留存";
		ltv_fourfiveday = "45日留存";
		ltv_sixtyday = "60日留存";
		ltv_nineday = "90日留存";
	}else if(cook == "Korean"){
		ltv_choice = "请选择";
		ltv_allaction = "全选/全不选";
		ltv_selec = "项被选中";
		ltv_allserver = "已选中所有选项";
		ltv_time = "日期";
		ltv_addreg = "激活数";
		ltv_addactive = "新增活跃账号数";
		ltv_addregnums = "新付费金额";
		ltv_amount = "当日充值总额";
		ltv_day = "首日留存";
		ltv_twoday = "2日留存";
		ltv_threeday = "3日留存";
		ltv_fourday = "4日留存";
		ltv_fiveday = "5日留存";
		ltv_sixday = "6日留存";
		ltv_sevenday = "7日留存";
		ltv_fifday = "15日留存";
		ltv_thirday = "30日留存";
		ltv_fourfiveday = "45日留存";
		ltv_sixtyday = "60日留存";
		ltv_nineday = "90日留存";
	}
}
//设置默认时间
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
layui.use(['element', 'laydate', 'table', 'form'], function() {
	var element = layui.element;
	var laydate = layui.laydate;
	var table = layui.table;
	var form = layui.form;
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
				nonSelectedText: ltv_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: ltv_allaction, //全选按钮显示的文本	
				nSelectedText: ltv_selec,
				allSelectedText: ltv_allserver,
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
			$.ajax({
				type: "get",
				url: "http://localhost:8080/FaithLogNew/queryField.action",
				async: true,
				data: {type: 3},
				success: function(obj) {
					for(var i = 0; i < obj.rows.length; i++) {
						$("#reg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
					};
					onread()
				}
			})
		}
	})
}

//ltv表格分页
function onread(obj) {
//	$("body").mLoading("show")
	var district_service = $("#district_service").val();//区服
//	var reg_channel = $("#reg_channel");//渠道号
	$("#datatable").bootstrapTable('destroy');
	var id = $(obj).attr("id");
	var state = 0;
	if(id == "Generate"){
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
		    ,height: 648
		    ,method: 'post'
		    ,url: '../queryRetain.action' //数据接口
		    ,cellMinWidth: 100
		    ,limit:20
		    ,limits:[5,10,20,40]
		    ,where: {
		    	serverId: district_service,
				seDate: times,
				state: state
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
	            if($(".ltv .layui-table-body")[0].textContent == "无数据"){
	            	$(".ltv .layui-table-header").css("overflow-x","auto")
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
		    	
//		    ]]
//		  });
//	})
//	var t = $("#datatable").bootstrapTable({
//		url: '../queryRetain.action',
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
//				serverId: district_service,
////				channelId:reg_channel,
//				seDate: times,
//				state: state
//			};
//		},
//		idField: "logId", //指定主键列
//		columns: [
		    	{
				title: ltv_time, //区服号
				field: 'logTime', //json数据中rows数组中的属性名
				width: 180, //水平居中
				templet: function(row) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
					var html = ('<span style="width:90px;display:inline-block;">' + row.logTime.substr(0, 10) + '</span>');
					return html;
				}
			},
			{
				title: ltv_addreg,
				field: 'newRegister',
				align: 'center',
			},
			{
				title: ltv_addactive,
				field: 'newActive',
				width: 150,
			},
			{
				title: ltv_addregnums,
				field: 'newRecharge',
				align: 'center',
			},
			{
				title: ltv_amount,
				field: 'payAmount',
				width: 120,
			},
			
			{
				title: ltv_day,
				field: 'dayRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_twoday,
				field: 'twoRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_threeday,
				field: 'threeRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_fourday,
				field: 'fourRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_fiveday,
				field: 'fiveRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_sixday,
				field: 'sixRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_sevenday,
				field: 'sevenRetain',
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				title: ltv_fifday,
				field: 'fifteenRetain',
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				field: 'twentyTwoRetain',
				align: 'center',
				templet: function(row) {
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
				field: 'twentyThreeRetain',
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				title: ltv_thirday,
				field: 'thirtyRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_fourfiveday,
				field: 'fortyfiveRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_sixtyday,
				field: 'sixtyRetain',
				align: 'center',
				templet: function(row) {
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
				title: ltv_nineday,
				field: 'ninetyRetain',
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
				align: 'center',
				templet: function(row) {
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
		]]
	})
//	t.on('load-success.bs.table', function(data) {
//		$("body").mLoading("hide")
//		$(".pull-right").css("display", "block");
//		$("#datatable tbody tr").css("background-color", "#323232")
//		$("#datatable tbody tr:even").css("background-color", "#3b3b3b")
////		$(".oneltv").parent().css("background-color", "rgba(43,60,79,0.5)")
//	});
})
}