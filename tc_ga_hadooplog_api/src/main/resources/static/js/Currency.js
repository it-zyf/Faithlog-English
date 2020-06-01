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

onready()
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
			$('#district').multiselect("destroy").multiselect({
						buttonWidth:'205px',
						nonSelectedText :'请选择',
						maxHeight :200,
						numberDisplayed:1, 
						includeSelectAllOption:true, 
						selectAllText :'全选/全不选',//全选按钮显示的文本	
						nSelectedText:'项被选中',
						allSelectedText:'已选中所有区服'
			});
		}
	});
}
function onready(){
	var text1= $('#in1').val();//设备号
	var text2= $('#currency').val();//货币类型
	var text3=$('#in3').val();//开始时间
	var text4=$('#in4').val();//结束时间
	var text5=$("#district").val()//区服
	var text6=$("#account").val()//账号id
	var text7=$("#role").val()//角色id
	var text8=$("#part").val()//ip地址
	if(text3>text4){
		alert("起始日期不得早于截止日期")
	}
	if(text5!=null){
		text5 = text5.join(","); 
		
	}
$("#example").bootstrapTable('destroy');
    var t = $("#example").bootstrapTable({
        url: '../queryMoney_Change.action',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",//post请求的话就加上这个句话
        queryParamsType:"",
        striped: true,//设置为 true 会有隔行变色效果
        undefinedText: "空",//当数据为 undefined 时显示的字符
        pagination: true, //分页
           paginationLoop:false,//设置为 true 启用分页条无限循环的功能。
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
				startTime:text3,
				endTime:text4,
				accountId:text6,
				roleId:text7,
				ip:text8,
				deviceId:text1,
				moneyType:text2
            };
        },
        idField: "logId",//指定主键列
        columns: [
            {
                title: '区服号',//区服号
                field: 'serverId',//json数据中rows数组中的属性名
                align: 'center'//水平居中
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
                title: '角色ID',
                field: 'roleId',
                align: 'center'
            },
            {
                title: '角色名',
                field: 'roleName',
                align: 'center'
            },
            {
                title: '角色等级',
                field: 'roleLevel',
                align: 'center'
            },
            {
                title: '角色战力',
                field: 'rolePower',
                align: 'center'
            },
            {
                title: 'Vip等级',
                field: 'roleVip',
                align: 'center'
            },
            {
                title: '货币类型',
                field: 'moneyType',
                align: 'center',
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                	if(row.moneyType == 0){
                		row.moneyType ="经验值";
                	}
                	if(row.moneyType == 1){
                		row.moneyType ="游戏币";
                	}
                	if(row.moneyType == 2){
                		row.moneyType ="绑定游戏币";
                	}
                	if(row.moneyType == 3){
                		row.moneyType ="钻石";
                	}
                	if(row.moneyType == 4){
                		row.moneyType ="绑定钻石";
                	}
                	if(row.moneyType == 5){
                		row.moneyType ="信仰点数";
                	}
                	if(row.moneyType == 6){
                		row.moneyType ="魔晶";
                	}
                	if(row.moneyType == 7){
                		row.moneyType ="再造点数";
                	}
                	if(row.moneyType == 8){
                		row.moneyType ="兑换分数";
                	}
                	if(row.moneyType == 9){
                		row.moneyType ="灵晶";
                	}
                	if(row.moneyType == 10){
                		row.moneyType ="元素粉末";
                	}
                	if(row.moneyType == 11){
                		row.moneyType ="守护点数";
                	}
                	if(row.moneyType == 12){
                		row.moneyType ="成就点数";
                	}
                	if(row.moneyType == 13){
                		row.moneyType ="声望";
                	}       
                	if(row.moneyType == 14){
                		row.moneyType ="祈福点数";
                	}
                	if(row.moneyType == 15){
                		row.moneyType ="战功";
                	}
                	if(row.moneyType == 16){
                		row.moneyType ="荣耀点数";
                	}
                	if(row.moneyType == 17){
                		row.moneyType ="天赋点数";
                	}
                	if(row.moneyType == 18){
                		row.moneyType ="助战值";
                	}
                	if(row.moneyType == 19){
                		row.moneyType ="宝藏寻宝积分";
                	}
                	if(row.moneyType == 20){
                		row.moneyType ="信仰符文分解碎片";
                	}
                	return row.moneyType
                }  	
            },
            {
                title: '之前数量',
                field: 'oldMoney',
                align: 'center'
            },
            {
                title: '现在数量',
                field: 'newMoney',
                align: 'center'
            },
            {
                title: '变化类型',
                field: 'opType',
                align: 'center'
            },
            {
                title: '变更方式',
                field: 'causeId',
                align: 'center'
            },
            {
                title: '变更位置',
                field: 'location',
                align: 'center'
            },
 
        ]
    });
 
 
    t.on('load-success.bs.table', function (data) {//table加载成功后的监听函数
        console.log("load success");
        $(".pull-right").css("display", "block");
    });
}
