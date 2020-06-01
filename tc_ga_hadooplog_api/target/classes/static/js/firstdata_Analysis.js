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

onready();
$("#cha").click(function(){
    onready()

});

function onready(){
    $("body").mLoading("show");
    var text1= $('#in1').val();//起始时间
    var text2= $('#in2').val();//结束时间
    $("#daily-datatable").bootstrapTable('destroy');
    var t = $("#daily-datatable").bootstrapTable({
        url: '../queryFirstLoginAnalysis.action',
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
                endTime:text2
            };
        },
        idField: "logId",//指定主键列
        columns: [
            {
                title: '日期',
                field: 'logTime',
                width:90,
                align: 'center',
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    var html =('<span>'+row.logTime.substr(0,10)+'</span>');
                    return html;
                }
            },
            {
                title: '新登用户',
                field: 'newUser',
                align: 'center'
            },
            {
                title: '新登进入对局用户',
                field: 'enterTheGameUser',
                align: 'center',

            },
            {
                title: '新登未进入对局用户',
                field: 'noGameUserEntered',
                align: 'center'
            },
            {
                title: '障碍率',
                align: 'center',
                formatter: function (value, row, index) {
                    var xiaoshu = (row.noGameUserEntered / row.newUser) * 100;
                    xiaoshu = xiaoshu.toFixed(2);
                    return xiaoshu + '%';
                }
            },
            {
                title: '新登有结算用户',
                field: 'settlementUser',
                align: 'center'
            },
            {
                title: '登入游戏无结算记录用户',
                field: 'noSettlementUser',
                align: 'center'
            },
            {
                title: '障碍率',
                align: 'center',
                formatter: function (value, row, index) {
                    var xiaoshu2 =(row.enterTheGameUser - row.settlementUser) / row.newUser;
                    xiaoshu2 = (xiaoshu2*100).toFixed(2);
                    return xiaoshu2 + '%';
                }
            },
            // {
            //     title: '新登有结算用户中首局英雄分布',
            //     field: 'oneGameSettlementUser',
            //     align: 'center'
            // },
            // {
            //     title: '新登有结算用户中1局英雄分布',
            //     field: 'twoPlayersInoneGame',
            //     align: 'center'
            // },
            {
                title: '新登用户中1局结算用户',
                field: 'oneGameSettlementUser',
                align: 'center'
            },
            {
                title: '1局用户中有2局行为者',
                field: 'twoPlayersInOneGame',
                align: 'center'
            },
            {
                title: '排异后1局用户',
                field: 'rejectAfterTheGameUser',
                align: 'center'
            },
            {
                title: '新登1局用户中离线结算',
                field: 'oneGameOffLineSettlement',
                align: 'center'
            },
            {
                title: '障碍率',
                align: 'center',
                formatter: function (value, row, index) {
                    var xiaoshu3 = (row.oneGameOffLineSettlement / row.newUser) * 100;
                    xiaoshu3 = xiaoshu3.toFixed(2);
                    return xiaoshu3 + '%';
                }
            },
            {
                title: '新登1局用户中正常结算',
                field: 'oneGameOnLineSettlement',
                align: 'center'
            },
            {
                title: '1局用户中吃鸡数',
                field: 'onLineRankingFirst',
                align: 'center'
            },
            {
                title: '1局离线结算用户中吃鸡数',
                field: 'offLineRankingFirst',
                align: 'center',
            }
        ]
    });
    t.on('load-success.bs.table', function (data) {
        console.log("load success");
        $(".pull-right").css("display", "block");
        $("body").mLoading("hide");
    });
}
