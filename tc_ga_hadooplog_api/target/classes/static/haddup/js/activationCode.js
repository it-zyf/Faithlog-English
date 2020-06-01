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
var ltv_fourtyfiveday; 
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
		ltv_amount = "累计付费金额";
		ltv_day = "首日LTV";
		ltv_twoday = "2日LTV";
		ltv_threeday = "3日LTV";
		ltv_fourday = "4日LTV";
		ltv_fiveday = "5日LTV";
		ltv_sixday = "6日LTV";
		ltv_sevenday = "7日LTV";
		ltv_fifday = "15日LTV";
		ltv_thirday = "30日LTV";
		ltv_fourtyfiveday = "45日LTV";
		ltv_sixtyday = "60日LTV";
		ltv_nineday = "90日LTV";
		
	}else if(cook == "chinese"){
		ltv_choice = "请选择";
		ltv_allaction = "全选/全不选";
		ltv_selec = "项被选中";
		ltv_allserver = "已选中所有选项";
		ltv_time = "日期";
		ltv_addreg = "激活数";
		ltv_addactive = "新增活跃账号数";
		ltv_addregnums = "新付费金额";
		ltv_amount = "累计付费金额";
		ltv_day = "首日LTV";
		ltv_twoday = "2日LTV";
		ltv_threeday = "3日LTV";
		ltv_fourday = "4日LTV";
		ltv_fiveday = "5日LTV";
		ltv_sixday = "6日LTV";
		ltv_sevenday = "7日LTV";
		ltv_fifday = "15日LTV";
		ltv_thirday = "30日LTV";
		ltv_fourtyfiveday = "45日LTV";
		ltv_sixtyday = "60日LTV";
		ltv_nineday = "90日LTV";
	}else if(cook == "Korean"){
		ltv_choice = "请选择";
		ltv_allaction = "全选/全不选";
		ltv_selec = "项被选中";
		ltv_allserver = "已选中所有选项";
		ltv_time = "日期";
		ltv_addreg = "激活数";
		ltv_addactive = "新增活跃账号数";
		ltv_addregnums = "新付费金额";
		ltv_amount = "累计付费金额";
		ltv_day = "首日LTV";
		ltv_twoday = "2日LTV";
		ltv_threeday = "3日LTV";
		ltv_fourday = "4日LTV";
		ltv_fiveday = "5日LTV";
		ltv_sixday = "6日LTV";
		ltv_sevenday = "7日LTV";
		ltv_fifday = "15日LTV";
		ltv_thirday = "30日LTV";
		ltv_fourfiveday = "45日LTV";
		ltv_sixtyday = "60日LTV";
		ltv_nineday = "90日LTV";
	}
}
//设置默认时间
var old
var newtime
today()
function today(){
	var today = new Date();
	var y = today.getFullYear();
//	today.setMonth(today.getMonth()-1)
	var m = today.getMonth()+1;
	var d = today.getDate();
	if(m>=1&&m<10){
    	m="0"+m
    }
    if(d>=1&&d<10){
    	d="0"+d
    }
    old = y+"-"+m+"-"+d;
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
    newtime = newy+"-"+newm+"-"+newd;
}
var times = old+"~"+newtime
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
		format:'yyyy-MM-dd',
		theme: 'riqi',//自定义类名
		value:old+' ~ '+newtime,
		max: 'now',
		trigger: 'click',
		done:function(res){
			times = res
		}
	});
});

onread()
//激活码查询
function onread(obj) {
	$("#datatable").empty()
	$("body").mLoading("show")
	var activiCode = $("#activiCode").val();//激活码
	var queryId = $("#queryId").val();//查询id
	var user1 = {codeCdk:activiCode,userId:queryId,seDate: times}
	var jrr
	var data1=[]
	$.ajax({
		type: "post",
		url: requestURL+"queryActivation_Code",
		async: false,
		contentType: 'application/json',
		data: 
			JSON.stringify(user1)
		,
		success: function(json) {
			$("body").mLoading("hide")
			jrr = JSON.parse( json )
				data1= jrr.data
			if(json == ""||data1 == ""){
				$("#datatable").append("<thead><tr><th>激活码</th><th>礼包名称</th><th>礼包内容</th><th>角色ID</th><th>登录账号ID</th><th>使用时间</th></tr></thead>")
				$("#datatable").append("<tbody><tr><td colspan='6'>No matching records found</td></tr></tbody>")
			}else{
				jrr = JSON.parse( json )
				data1= jrr.data
				$("#datatable").append("<thead><tr><th>礼包码</th><th>礼包名称</th><th>礼包内容</th><th>角色ID</th><th>登录账号ID</th><th>使用时间</thd></tr></thead>")
				$("#datatable").append("<tbody></tbody>")
				for(var i=0;i<data1.length;i++){
					$("#datatable").append("<tr><td>"+data1[i].codeCdk+"</td><td>"+data1[i].giftName+"</td><td>"+data1[i].giftContent+"</td><td>"+data1[i].roleid+"</td><td>"+data1[i].userId+"</td><td>"+data1[i].logTime+"</td></tr>")
				}
				fix_table($("#datatable"));
			}
			$("#datatable tbody tr:odd").css("background-color","rgb(50,50,50)")
			$("#datatable tbody tr:even").css("background-color","rgb(59,59,59)")
			
		}
	})
    
//	$("#datatable").fixedHeaderTable({
////	 	footer: true,              //如果有tfoot的时候
//	    // 	cloneHeadToFoot: true,     //复制表头到表脚
//	    	altClass: 'odd',           //是否奇行变色
//	    // 	fixedColumns: 2,           //固定列
//		    //themeClass:'fancyTable',    //有个mytheme.css里的表格样式
//		    autoShow: true
//	});
	
	function fix_table($obj){
        if(!$obj || $obj.length<=0 || ($('html').height() - $(window).height())<0) return false;
        $obj.show();
        //最大高度为不包含滚动条的高度
        var height = $obj.find('tbody').height() - ($('html').height() - $(window).height()) - 3;
        //设置表格内容高度和宽度
        $obj.find('tbody').css({'max-width': '1569px','overflow':'auto','max-height':height});
        //移出复制的表头并重新添加
        $obj.find("#hide_tr").remove();
        //内容宽度自适应
        $obj.find('thead tr th').css('width','auto');
        // 表头复制并插入到内容
        $obj.find('tbody tr:first').before($obj.find('thead tr').clone());
        var _th = $obj.find('thead th');
        //移出内容的行信息并设置跟表头一样的宽度
        $obj.find('tbody tr:first th').each(function(i,j){ $(this).html('').width($(_th[i]).innerWidth());});
        //表格第一行内容不显示仅占位
        $obj.find('tbody tr:first').attr('id','hide_tr').css('display','table-row');
        //显示滚动条
        $obj.find('tbody,thead tr,tfoot tr').css('display','block');
        //表格内容宽
        _th = $obj.find('tbody th');
        //表头th宽跟内容th宽一致
        $obj.find('thead tr:first th').each(function(i,j){ $(this).width($(_th[i]).width());});
        //页脚th宽跟内容th宽一致
        $obj.find('tfoot tr:first th').each(function(i,j){ $(this).width($(_th[i]).width());});
    }
    $(function(){
        var html = '',tr='<tr><td>学生#index#</td><td>#1#</td><td>#2#</td><td>#3#</td></tr>';
        for(var i=1;i<=100;i++){
            html += tr.replace("#index#",i).replace("#1#",10).replace("#2#",20).replace("#3#",30);
        }
        $("#MyTable tbody").html(html);
        fix_table($("#MyTable"));
    });
}


