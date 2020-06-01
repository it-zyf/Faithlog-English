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
$(function () {
    // onready1();
})
$("#btn1").click(function(){
    $("#table1 tbody").empty();
    onready1();
});
function onready1(){
    $("body").mLoading("show");
    var text1= $('#in3').val();//起始时间
    $.ajax({
        type:"post",
        // url:"../getAvgPlayerNum.action",
        async:true,
        data:{
            startTime:text1
        },
        success:function(json){
            if(json.state == true){

            }
        }
    })
    $("#table1").bootstrapTable('destroy');
    var t = $("#table1").bootstrapTable({
        url: '../.action',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
        queryParamsType: "",
        striped: true, //设置为 true 会有隔行变色效果
        undefinedText: "0", //当数据为 undefined 时显示的字符
        pagination: true, //分页
        paginationLoop: false,
        // paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
        showToggle: false, //是否显示 切换试图（table/card）按钮
        showColumns: "true", //是否显示 内容列下拉框
        pageNumber: 1, //如果设置了分页，首页页码
        // showPaginationSwitch:true,//是否显示 数据条数选择框
        pageSize: 20, //如果设置了分页，页面数据条数
        pageList: [5, 10, 20, 40,], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function (params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId: text5,
                startTime: text1,
                endTime: textTime,
                state: state
            };
        },
        idField: "logId", //指定主键列
        columns: [
            {
                title: '序号',
                field: '',
                align: 'center',
            },
            {
                title: '事件ID',
                field: '',
                align: 'center',
            },
            {
                title: '记录内容',
                field: '',
                align: 'center',
            }
        ]
    });
    t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
        $("#pull-right").css("display", "none");
    });
}