function todays(){//构建方法
        var today=new Date();//new 出当前时间
        today.setMonth(today.getMonth()-1)
        var h=today.getFullYear();//获取年
        var m=today.getMonth()+1;//获取月
        var d=today.getDate();//获取日
        if(m>=1&&m<10){
        	m="0"+m
        }
        if(d>=1&&d<10){
        	d="0"+d
        }
        return h+"-"+m+"-"+d ;//返回 年-月-日 时:分:秒      
};

document.getElementById("in3").value=todays();
function today(){//构建方法
        var today=new Date();//new 出当前时间
        var h=today.getFullYear();//获取年
        var m=today.getMonth()+1;//获取月
        var d=today.getDate();//获取日
        if(m<10){
        	m="0"+m
        }
        if(d<10){
        	d="0"+d
        }
        return h+"-"+m+"-"+d ;//返回 年-月-日 时:分:秒
};
document.getElementById("in4").value=today();


change()
function change(){
	$.ajax({
		type:"get",
		url:"http://150.109.167.142:9110/frontEnd/queryAreas",
		async:true,
		success:function(obj){
            for (var i = 0; i < obj.data.length; i++) {
                $("#district").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
			};
			$("#district").each(function(){
				$(this).find("option").attr("selected","selected")
			})
			$('#district').multiselect("destroy").multiselect({
						buttonWidth:'66%',
						nonSelectedText :'请选择',
						maxHeight :200,
						numberDisplayed:1, 
						includeSelectAllOption:true, 
						selectAllText :'全选/全不选',//全选按钮显示的文本	
						nSelectedText:'项被选中',
						allSelectedText:'已选中所有区服'
			});
			onready()
		}
	});
}
function onready(){
	var text1= $('#in1').val();//设备号
	var text3=$('#in3').val();//开始时间
	var text4=$('#in4').val();//结束时间
	var text5=$("#district").val()//区服
	var text6=$("#account").val()//账号id
	var text7=$("#role").val()//角色id
	var text8=$("#part").val()//IP地址
	if(text5!=null){
		text5 = text5.join(","); 
	}
	if(text3>text4){
		alert("起始日期不得早于截止日期")
		return false;
	}
	$("body").mLoading("show");
	$("#example").bootstrapTable('destroy');
    var t = $("#example").bootstrapTable({
        url: '../queryRoleLog.action',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",//post请求的话就加上这个句话
        queryParamsType:"",
        striped: true,//设置为 true 会有隔行变色效果
        undefinedText: "空",//当数据为 undefined 时显示的字符
        pagination: true, //分页
        paginationLoop:false,
        showToggle: false,//是否显示 切换试图（table/card）按钮
        showColumns: "true",//是否显示 内容列下拉框
        pageNumber: 1,//如果设置了分页，首页页码
        // showPaginationSwitch:true,//是否显示 数据条数选择框
        pageSize: 20,//如果设置了分页，页面数据条数
        pageList: [5, 10, 20, 40],	//如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹',//指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›',//指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US",//表格汉化
        sidePagination: "server", //服务端处理分页
        queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的
            return {//这里的params是table提供的
            	pageIndex: params.pageNumber,//从数据库第几条记录开始
            	pageSize: params.pageSize,//找多少条
		        serverId:text5,
				accountId:text6,
				startTime:text3,
				endTime:text4,
				deviceId:text1,
				roleId:text7,
				ip:text8
            };
        },
        idField: "logId",//指定主键列
        columns: [
        	{
                title: '区服号',
                field: 'serverId',
                align: 'center'
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
                title: '设备号',
                field: 'deviceId',
                align: 'center'
            },
            {
                title: '客户端版本',
                field: 'clientVersion',
                align: 'center'
            },
            {
                title: '客户端IP',
                field: 'ip',
                align: 'center'
            },
            {
                title: '创建类型',
                field: 'opType',
                align: 'center',
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    return row.opType == 0 ? "快速注册" : row.opType == 1 ? "手动注册": "状态不准确";
                }
            },
            {
                title: '机型',
                field: 'model',
                align: 'center'
            },
 
        ]
    });
 
 
    t.on('load-success.bs.table', function (data) {//table加载成功后的监听函数
		$("body").mLoading("hide");        
		$(".pull-right").css("display", "block");
    });
}
 
