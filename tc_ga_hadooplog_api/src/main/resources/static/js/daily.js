function todays(){//构建方法
        var today=new Date();//new 出当前时间
        today.setDate(today.getDate()-14)
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
document.getElementById("in1").value=todays();
function today(){//构建方法
        var today=new Date();//new 出当前时间
        today.setDate(today.getDate()-1)
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
document.getElementById("in2").value=today();


change()
$("body").mLoading("show");
function change(){
	$.ajax({
		type:"get",
		url:"http://150.109.167.142:9110/frontEnd/queryAreas",
		async:true,
		success:function(obj){
            for (var i = 0; i < obj.data.length; i++) {
                $("#district").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
			};

			var multiSelectOption={
					buttonWidth:'70%',
					nonSelectedText :'请选择',
					maxHeight :200,
					numberDisplayed:10, 
					includeSelectAllOption:false, 
//					selectAllText :'全选/全不选',//全选按钮显示的文本	
					nSelectedText:'项被选中',					
			}
			$('#district').multiselect("destroy").multiselect(multiSelectOption);
			onready();
		}
	});
}

$("#cha").click(function(){	
	onready()
	$("body").mLoading("show");  
});

function onready(){
	var text1= $('#in1').val();//起始时间
	var text2= $('#in2').val();//结束时间
	var text5=$("#district").val()//区服
//	if(text5!=null){
//		text5 = text5.join(","); 		
//	}
//	console.log(text5)
	if(text1>text2){
		alert("起始日期不得早于截止日期")
	}
	$("#daily-datatable").bootstrapTable('destroy');
    var t = $("#daily-datatable").bootstrapTable({
        url: '../queryDaily.action',
        method: 'post',
        dataType: "json",
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
        pageList: [5, 10, 20, 50],	//如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
//      paginationPreText: '‹',//指定分页条中上一页按钮的图标或文字,这里是<
//      paginationNextText: '›',//指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US",//表格汉化
        sidePagination: "server", //服务端处理分页
        queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的
            return {//这里的params是table提供的
            	pageIndex: params.pageNumber,//从数据库第几条记录开始
            	pageSize: params.pageSize,//找多少条
		        serverId:text5,
		        startTime:text1,
		        endTime:text2
            };
        },
        idField: "logId",//指定主键列
        columns: [
            {
                title: '日期',//区服号
                field: 'logTime',//json数据中rows数组中的属性名
                width:90,
                align: 'center',//水平居中
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                	var html =('<span>'+row.logTime.substr(0,10)+'</span>');
					return html;
                }
            },
            {
                title: '首登人数',
                field: 'newPlayers',
                align: 'center',

            },
            {
                title: '注册',
                field: 'dailyRegister',
                align: 'center'
            },
            {
                title: '活跃数据',
                field: 'activeNumber',
                align: 'center'
            },
            {
                title: '付费金额',
                field: 'payAmount',
                align: 'center'
            },
            {
                title: '付费人数',
                field: 'payNumber',
                align: 'center'
            },
            {
                title: '首付人数',
                field: 'fristNumber',
                align: 'center'
            },
            {
                title: '首付金额',
                field: 'fristAmount',
                align: 'center'
            },
            {
                title: '累计充值人数',
                field: 'sumpersonnel',
                align: 'center'
            },
            {
                title: '首付当日总额',
                field: 'fristSumAmount',
                align: 'center'
            },
            {
                title: '付费率(%)',
                field: 'rate',
                align: 'center'
            },
 			{
                title: 'ARPU',
                field: 'arpu',
                align: 'center'
            },
            {
                title: 'ARPPU',
                field: 'arppu',
                align: 'center'
            },
            {
                title: '日留存(%)',
                field: 'dayRetain',
                align: 'center',
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                	//row.dayRetain = Math.floor(row.dayRetain/25 * 100) / 100
                	var nub=0;
                	if(row.dayRetainCount==0)
                		{
                		nub = "0"
                		return nub;
                		}
                	nub = (row.dayRetain/row.dayRetainCount).toFixed(2);
                    return Math.floor(nub * 100);
                }
            },
            {
                title: '三日留存(%)',
                field: 'threeRetain',
                align: 'center',
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                	//row.dayRetain = Math.floor(row.dayRetain/25 * 100) / 100
                	var nub=0;
                	if(row.threeRetainCount==0)
                		{
                		nub = "0"
                		return nub;
                		}
                	nub = (row.threeRetain/row.threeRetainCount).toFixed(2);
                    return Math.floor(nub * 100);
                }
            },
            {
                title: '周留存(%)',
                field: 'weekRetain',
                align: 'center',
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                	//row.dayRetain = Math.floor(row.dayRetain/25 * 100) / 100
                	var nub=0;
                	if(row.weekRetainCount==0)
                		{
                		nub = "0"
                		return nub;
                		}
                	nub = (row.weekRetain/row.weekRetainCount).toFixed(2);
                    return Math.floor(nub * 100);
                }
            },
            {
                title: '最高在线人数',
                field: 'maxOnlineNumber',
                align: 'center'
            },
            {
                title: '游戏次数',
                field: 'gameNumber',
                align: 'center'
            },

            // {
            //     title: '平均游戏次数',
            //     field: 'aveGamenumber',
            //     align: 'center',
            //
            // },
//            {
//                title: '平均游戏时长',
//                field: 'aveGametime',
//                align: 'center',
//                
//            },
//            {
//                title: '累计游戏时长',
//                field: 'sumGametime',
//                align: 'center',
//                
//            },
        ]
    }); 
    t.on('load-success.bs.table', function (data) {//table加载成功后的监听函数
        console.log("load success");
        $(".pull-right").css("display", "block");
        $("body").mLoading("hide"); 
    });
}
