//设置默认时间
var old
var newtime
today()
function today(){
	var today = new Date();
	var y = today.getFullYear();
	today.setMonth(today.getMonth()-1)
	var m = today.getMonth()+1;
	var d = today.getDate();
	if(m>=1&&m<10){
    	m="0"+m
    }
    if(d>=1&&d<10){
    	d="0"+d
    }
    old = y+"年"+m+"月"+d+"日";
    var newtoday = new Date();
    var newy = newtoday.getFullYear();
    var newm = newtoday.getMonth()+1;
    var newd = newtoday.getDate();
    if(newm>=1&&newm<10){
    	newm="0"+newm
    }
    if(newd>=1&&newd<10){
    	newd="0"+newd
    }
    newtime = newy+"年"+newm+"月"+newd+"日";
}

////layui配置
layui.use(['element','laydate','table'], function(){
	var element = layui.element;
	var laydate = layui.laydate;
	var table = layui.table;
	element.init();
	//日历配置
	var now = new Date();
	laydate.render({
		elem:'#datatimes',
//		type:'datetime',//日期可选时分秒
		range:'~',//日期范围选择
		lang:'en',//国际化
		format:'yyyy年MM月dd日',
		theme: 'riqi',//自定义类名
		value:old+' ~ '+newtime,
		max: 'now',
		trigger: 'click'
//		showBottom: false//是否显示底部栏
	});
});
onread()
function onread(){
	var check = $(".group input[type='checkbox']:checked")
	var arr = []
	for(var i = 0;i<check.length;i++){
		arr.push(check[i].id)
	}
	var jsoncheck = arr.join(',');//区服字符串
	var datatime = $("#datatimes").val();//日期
	var guildname = $("#guildname").val();//公会名称
	var presidentID = $("#presidentID").val();//会长角色ID
	var presidentName = $("#presidentName").val();//会长角色名
	$("#datatable").bootstrapTable('destroy');
    var t = $("#datatable").bootstrapTable({
        url: '../queryLegionInfo.action',
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
        pageList: [5, 10, 20, 40],	//如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '上一页',//指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '下一页',//指定分页条中下一页按钮的图标或文字,这里是>
        search: false, //显示搜索框
        data_local: "zh-US",//表格汉化
        sidePagination: "server", //服务端处理分页
        queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的
            return {//这里的params是table提供的
            	pageIndex: params.pageNumber,//从数据库第几条记录开始
            	pageSize: params.pageSize,//找多少条
//          	serverId:jsoncheck,
//				legionName:guildname,
//				startTime:datatime,
//				roleGuid:presidentID,
//				roleName:presidentName
            };
        },
        idField: "logId",//指定主键列
        columns: [
            {
                title: "区服号",
                field: 'serverId',
                align: 'center',
            },
            {
                title: "会长角色ID",
                field: 'roleGuid',
                align: 'center',
            },
            {
                title: "会长角色名",
                field: 'roleName',
                align: 'center',
            },
            {
                title: "公会ID",
                field: 'legionGuid',
                align: 'center',
            },
            {
                title: "公会名称",
                field: 'legionName',
                align: 'center',
            },
            {
                title: "公会等级",
                field: 'elegioninfoConstructionLevelMain',
                align: 'center',
            },
            {
                title: "公会成员数",
                field: 'legionCount',
                align: 'center',
            },
        ]
    });
    t.on('load-success.bs.table', function (data) {
        $(".pull-right").css("display", "block");
        $("#datatable tbody tr").css("background-color","#323232")
        $("#datatable tbody tr:even").css("background-color","#3b3b3b")
    });
}

