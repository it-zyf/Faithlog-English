language();
var newtime;
//字段提取
var player_yesterday;
var player_today;
var player_serverid;
var max_player_count;
var min_player_count;
var playerCount;
var trend_choice;
var trend_allaction;
var trend_selec;
var trend_allserver;
function language(){
	var cook = $.cookie("value");
	if(cook == null){
		player_yesterday = "昨日";
		player_today = "今日";
		player_serverid = "区服号";
		max_player_count = "最高玩家数";
		min_player_count = "最低玩家数";
		playerCount = "当前在线玩家数";
		trend_choice = "请选择";
		trend_allaction = "全选/全不选";
		trend_selec = "项被选中";
		trend_allserver = "已选中所有选项"
	}else if(cook == "chinese"){
		player_yesterday = "昨天";
		player_today = "今天";
		player_serverid = "区服号";
		max_player_count = "最高玩家数";
		min_player_count = "最低玩家数";
		playerCount = "当前在线玩家数";
		trend_choice = "请选择";
		trend_allaction = "全选/全不选";
		trend_selec = "项被选中";
		trend_allserver = "已选中所有选项"
	}else if(cook == "Korean"){
		player_yesterday = "昨天";
		player_today = "今天";
		player_serverid = "区服号";
		max_player_count = "最高玩家数";
		min_player_count = "最低玩家数";
		playerCount = "当前在线玩家数";
		trend_choice = "请选择";
		trend_allaction = "全选/全不选";
		trend_selec = "项被选中";
		trend_allserver = "已选中所有选项"
	}
}

today()
//日期赋值函数
function today() {
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
	newtime = newy + "-" + newm + "-" + newd ;
}
var times = newtime
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
			$("#district_service").each(function() {
				$(this).find("option").attr("selected", "selected")
			})
//			区服号
			$('#district_service').multiselect({
				buttonWidth: '66%',
				nonSelectedText: trend_choice,
				maxHeight: 200,
				numberDisplayed: 2,
				includeSelectAllOption: true,
				selectAllText: trend_allaction, //全选按钮显示的文本	
				nSelectedText: trend_selec,
				allSelectedText: trend_allserver,
				enableFiltering: false, //搜索框
			});
			querys()
		}
	});
}
function querys(){
	$("#hourtable tbody").empty();
	$("#container").empty();
	$("body").mLoading("show")
	query()
	onread()
}
var ajaxPath;
var payamount;
function query() {
	var district = $("#district_service").val();//区服
	if(district!=null){
		district = district.join(',')
	}
	var urls="../real_hour_online_people.action";
	$.ajax({
		type: "post",
		url: urls,
		async: true,
		data:{
			serverId:district,
			seDate:times,
//			pageIndex: 1,
//			pageSize: 20
		},
		success: function(obj) {
			if(obj.data[0].length !== 0){
				
				console.log(obj.data)
				console.log(obj.data[0])
				console.log(obj.data[0][1].logTime)
				for(var i=0;i<obj.data[0].length;i++){
					$("#hourtable").append('<tr><td>'+obj.data[0][i].logTime+'点</td><td>'+obj.data[0][i].playerCount+'</td></tr>')
                        //实现隔行变色
				}
				var url = JSON.stringify(obj);
				ajaxPath = JSON.parse(url);
				payamount = obj.payAmount
				charts()
			}
		}
	});
}

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
		lang: 'en', //国际化
		format: 'yyyy-MM-dd',
		theme: 'riqi', //自定义类名
		value:  newtime,
		max: 'now',
		//		showBottom: false//是否显示底部栏
		done:function(res){
			times = res
		}
	})
});

//图表与表格切换按钮
function one(){
	$("#a-one img").attr('src','../img/a.png')
	$("#a-two img").attr('src','../img/bb.png')
	$(".table-box").addClass("hide")
	$("#container").removeClass("hide")
}
function two(){
	$("#a-one img").attr('src','../img/aa.png')
	$("#a-two img").attr('src','../img/b.png')
	$("#container").addClass("hide")
	$(".table-box").removeClass("hide")
}
function onread(){
	var district = $("#district_service").val();//区服
	if(district!=null){
		district = district.join(',')
	}
	var urls="../real_time_online_people.action";
	$("#datatable").bootstrapTable('destroy');
    var t = $("#datatable").bootstrapTable({
        url: urls,
        method: 'post',
        dataType: "json",
        cache: false,
        contentType: "application/x-www-form-urlencoded",//post请求的话就加上这个句话
        queryParamsType:"",
        striped: true,//设置为 true 会有隔行变色效果
        undefinedText: "0",//当数据为 undefined 时显示的字符
        pagination: true, //分页
        paginationLoop:false,//设置为 true 启用分页条无限循环的功能。
        showToggle: false,//是否显示 切换试图（table/card）按钮
        showColumns: false,//是否显示 内容列下拉框
        pageNumber: 1,//如果设置了分页，首页页码
        // showPaginationSwitch:true,//是否显示 数据条数选择框
        pageSize: 20,//如果设置了分页，页面数据条数
//        pageList: [5, 10, 20, 40],	//如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        pageList:[20,40],
        paginationPreText: '‹',//指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›',//指定分页条中下一页按钮的图标或文字,这里是>
        search: false, //显示搜索框
        data_local: "zh-US",//表格汉化
        sidePagination: "server", //服务端处理分页
        queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的
            return {//这里的params是table提供的
            	pageIndex: params.pageNumber,//从数据库第几条记录开始
            	pageSize: params.pageSize,//找多少条
		        serverId:district,
				seDate:times
            };
        },
        responseHandler: function (res) {
			return {
				rows:res.rows,
				total:res.total
			}
        },
        idField: "logId",//指定主键列
        columns: [
            {
					title: player_serverid, //区服号
					field: 'serverId', //json数据中rows数组中的属性名
					align: 'center', //水平居中
				},
				{
					title: max_player_count,
					field: 'max_player_count',
					align: 'center'
				},
				{
					title: min_player_count,
					field: 'min_player_count',
					align: 'center'
				},
				{
					title: playerCount,
					field: 'playerCount',
					align: 'center'
				},
        ]
    });
    t.on('load-success.bs.table', function (data) {//table加载成功后的监听函数
        $(".pull-right").css("display", "block");
		$("#datatable tbody tr").css("background-color", "#323232")
		$("#datatable tbody tr:even").css("background-color", "#3b3b3b")
		$("body").mLoading("hide")
    });
}

//图表渲染
function charts() {
	var someDate
	var logTime = [];//时间
	var dataToday = [];//今日
	var active = [];//昨日
	getForm()
	function getForm(){
		console.log(ajaxPath)
		if(ajaxPath.data.length !==0){
			for(var i=0;i<ajaxPath.data[0].length;i++){
				someDate=ajaxPath.data[0][i].logTime
				var rq=ajaxPath.data[0][i].playerCount;
//				logTime.push(new Date(someDate).getTime());
				logTime.push(someDate)
				dataToday.push(rq);
			}
			for(var i=0;i<ajaxPath.data[1].length;i++){
				someDate=ajaxPath.data[1][i].logTime
				var rq=ajaxPath.data[1][i].playerCount;
//				logTime.push(new Date(someDate).getTime());
				active.push(rq);
			}
		}
	};
	console.log(logTime)
	console.log(dataToday)
	Highcharts.setOptions({ global: { useUTC: false } });
	var chart = Highcharts.chart('container', {
		colors: ['#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9', '#35b9bb'],
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
			type: 'datetime',
			categories: logTime,
			labels: {
				enable: true,
				rotation: 320,
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
				events: {
					legendItemClick: function(event) {
//						
					}
				}
			}
		},
		tooltip: {
//			formatter: function () {
////				return Highcharts.dateFormat('%Y-%m-%d', this.x) + '<br/><b>' + this.series.name + '</b>' +'：'+
////                this.point.y  ; 
//				console.log(this.point.x)
//				return this.series.name + this.point.x +'点' + '</b>' +'：'+ this.point.y +'人' ; 
//				}
//      		}
			trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
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
			name: player_today,
			data: dataToday,
		}, {
			name: player_yesterday,
			data: active,
			visible: false//默认图表不显示
		}
		],
	});
}