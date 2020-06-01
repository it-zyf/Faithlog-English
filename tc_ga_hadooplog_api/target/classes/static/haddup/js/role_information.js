
////layui配置
layui.use(['element','table'], function(){
	var element = layui.element;
	var table = layui.table;
	element.init();
});
onread()
function onread(){
	var check = $(".group input[type='checkbox']:checked")
	var arr = []
	for(var i = 0;i<check.length;i++){
		arr.push(check[i].id)
	}
	var jsoncheck = arr.join(',');//区服字符串
	var account = $("#accountID").val();//账号ID
	var datatime = $("#datatimes").val();//日期
	var roleid = $("#roleID").val();//角色ID
	var rolename = $("#roleName").val();//角色名
	$("#datatable").bootstrapTable('destroy');
    var t = $("#datatable").bootstrapTable({
        url: '../queryRoleGetMail.action',
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
        paginationPreText: '‹',//指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›',//指定分页条中下一页按钮的图标或文字,这里是>
        search: false, //显示搜索框
        data_local: "zh-US",//表格汉化
        sidePagination: "server", //服务端处理分页
        queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的
            return {//这里的params是table提供的
            	pageIndex: params.pageNumber,//从数据库第几条记录开始
            	pageSize: params.pageSize,//找多少条
//          	serverId:jsoncheck,
//				accountId:account,
//				startTime:datatime,
//				roleId:roleid,
//				roleName:rolename
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
                title: "账号ID",
                field: 'accountId',
                align: 'center',
            },
            {
                title: "角色ID",
                field: 'roleId',
                align: 'center',
            },
            {
                title: "角色名",
                field: 'roleName',
                align: 'center',
            },
            {
                title: "角色等级",
                field: 'roleLevel',
                align: 'center',
            },
            {
                title: "钻石数",
                field: 'itemId',
                align: 'center',
            },
            {
                title: "角色战力",
                field: 'itemNum',
                align: 'center',
            },
            {
                title: "装备",
                field: 'mailGuid',
                align: 'center',
            },
            {
                title: "背包道具",
                field: 'mailGuid',
                align: 'center',
            },
            {
                title: "仓库道具",
                field: 'mailGuid',
                align: 'center',
            },
            {
                title: "邮件",
                field: 'mailGuid',
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

