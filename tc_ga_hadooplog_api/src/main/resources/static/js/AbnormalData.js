function todays(){//构建方法
    var today=new Date();//new 出当前时间
    today.setDate(today.getDate())
    var h=today.getFullYear();//获取年
    var m=today.getMonth()+1;//获取月
    var d=today.getDate()-1;//获取日
    if(m>=1&&m<10){
        m="0"+m
    }
    if(d>=1&&d<10){
        d="0"+d
    }
    return h+"-"+m+"-"+d ;//返回 年-月-日 时:分:秒
};
document.getElementById("in3").value=todays();

onready();
$("#btn1").click(function(){
    // alert(1111)
    // console.log($('#in3').val())
    onready()
});

function onready(){
    // $("body").mLoading("show");
    var text1= $('#in3').val();//起始时间
    var state = $("#state").val();//状态
    $("#example").bootstrapTable('destroy');
    var t = $("#example").bootstrapTable({
        url: '../queryAbnormalData.action',
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
                startTime:text1,
                endTime:text1,
                state:state
            };
        },
        idField: "logId",//指定主键列
        columns: [
            {
                title: '异常用户',
                field: 'accountId',//json数据中rows数组中的属性名
                align: 'center',//水平居中
                // formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    // if(row.state == 1){
                    //     return "（有首局无首登）"
                    // }
                    // if(row.state == 2){
                    //     return "（BUG）异常用户：有7名新登用户，有结算，但是没有进入首局记录"
                    // }
                    // if(row.state == 3){
                    //     return "登入游戏无结算记录用户"
                    // }
                    // if(row.state == 4){
                    //     return "1局用户中有2局行为者"
                    // }
                    // if(row.state == 5){
                    //     return "新登1局用户中离线结算"
                    // }
                    // if(row.state == 6){
                    //     return "*1局在线用户有行为有结算未吃鸡无死亡行为"
                    // }
                    // if(row.state == 7){
                    //     return "*1局离线线用户有行为有结算未吃鸡无死亡行为"
                    // }
                    // if(row.state == 8){
                    //     return "玩家结算日志中游戏时间为0"
                    // }
                // }
            }
        ]
    });
    t.on('load-success.bs.table', function (data) {
        console.log("load success");
        $(".pull-right").css("display", "block");
        $("body").mLoading("hide");
    });
}