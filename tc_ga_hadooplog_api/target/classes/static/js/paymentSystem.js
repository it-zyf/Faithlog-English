var biling_url="http://192.168.0.51:9005/"; //全局变量 - biling
var account_url="http://192.168.0.51:9000/"; //全局变量 - account
function initTableHeight(){
    //拿到父窗口的centerTabs高度(这是iframe子页面拿到父窗口元素的方法，需要根据自己项目所使用的框架自行修改元素的id)
    var panelH = $("#accSys_table", parent.document).height();
    //拿到顶部工具栏高度
    var toolBarH = $("#accSys_table thead").height();
    //计算表格container该设置的高度
    var height = panelH - toolBarH - 91;
    var container = $("#accSys_table tbody").css({"height": height});
}
payquery();
// $.support.cors = true;
// response.setHeader("Access-Control-Allow-Origin", "*");
function  payquery() {
    var ordersId = $("#ordersId").val();//订单号
    var goodsId = $("#goodsId").val();//商品号
    var userID = $("#userID").val();//用户ID
    var Monetary = $("#Monetary").val();//货币单位
    var channel = $("#channel").val();//充值渠道
    console.log(Monetary)
    console.log(channel)
    // $("body").mLoading("show")
    $("#paySys_table").bootstrapTable('destroy');
    var t = $("#paySys_table").bootstrapTable({
        // url: "http://192.168.0.51:9000/queryPayment", //支付系统查询数据接口
        url: biling_url + "queryPayment", //支付系统查询数据接口
        method: "post",
        dataType: "json",
        // "jsonp": "callback",
        // "jsonpCallback": "success_jsonpCallback",
        cache: false,

        contentType: "application/json", //post请求的话就加上这个句话
        queryParamsType: "",
        // queryParams: content,
        striped: false, //设置为 true 会有隔行变色效果
        undefinedText: "0", //当数据为 undefined 时显示的字符
        pagination: true, //分页
        paginationLoop: false, //设置为 true 启用分页条无限循环的功能
        showToggle: false, //是否显示 切换试图（table/card）按钮
        showColumns: false, //是否显示 内容列下拉框
        pageNumber: 1, //如果设置了分页，首页页码
        showPaginationSwitch:true,//是否显示 数据条数选择框
        pageSize: 20, //如果设置了分页，页面数据条数
        pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        search: false, //显示搜索框
        sidePagination: "server", //服务端处理分页
        data_local: "zh-US", //表格汉化
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageNum: params.pageNumber, //从数据库第几条记录开始
                pageCount: params.pageSize, //找多少条
                userId:userID, //必填
                orderNum:ordersId, //订单号
                productNum:goodsId, //商品号
                moneyUnit:Monetary, //货币单位
                payType:channel //充值渠道
            };
        },
        responseHandler: function (res) {  //请求数据成功后，渲染表格前的方法
            console.log(res)
            if(res.data.length == 0){
                console.log(222)
                $(".warning").css("display","block")
            }
            return {
                "total": res.totalCount,
                "rows": res.data
            }

        },
        idField: "logId", //指定主键列
        columns: [[  //设置表头
            {
                field: 'orderNum',
                title: '订单号',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:2
            },
            {
                field: 'productNum',
                title: '商品号',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:2
            },
            {
                field: 'userId',
                title: '用户ID',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:2
            },
            {
                field: 'buyerLogonId',
                title: '买家账号',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:2
            },
            {
                field: 'moneyUnit',
                title: '货币单位',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:2,
                formatter:function (value,rows,index) {
                    if(rows.moneyUnit == 0){
                        return "人民币"
                    }
                    if(rows.moneyUnit == 1){
                        return "美元"
                    }
                    if(rows.moneyUnit == 2){
                        return "韩币"
                    }
                    if(rows.moneyUnit == 5){
                        return "新台币"
                    }
                }
            },
            {
                field: 'payType',
                title: '充值渠道',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:2,
                formatter:function (value,rows,index) {
                    if(rows.payType == 1){
                        return "支付宝"
                    }
                    if(rows.payType == 2){
                        return "微信"
                    }
                    if(rows.payType == 3){
                        return "苹果"
                    }
                    if(rows.payType == 4){
                        return "谷歌"
                    }
                }
            },
            {
                title: '商品',
                sort: true,
                fixed: 'left',
                colspan: 3,
                rowspan:1
            },
            {
                field: 'orderStatus',
                title: '订单状态',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:2,
                formatter:function (value,rows,index) {
                    if(rows.orderStatus == 0){
                        return "<span style='color:#F30606;'>待付款</span>"
                    }
                    if(rows.orderStatus == 1){
                        return "<span style='color:#06F316;'>支付成功</span>"
                    }
                    if(rows.orderStatus == 2){
                        return "交易结束"
                    }
                    if(rows.orderStatus == 3){
                        return "<span style='color: #06DFF3;'>关闭/全额退款</span>"
                    }
                    if(rows.orderStatus == 4){
                        return "<span style='color: #06DFF3;'>付款成功未发货</span>"
                    }
                }
            },{
                title: '时间',
                sort: true,
                fixed: 'left',

                colspan: 2,
                rowspan:1
            },
        ],[
            //二级表头
            {
                field: 'buyCounts',
                title: '商品个数',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:1
            },
            {
                field: 'orderAmount',
                title: '订单金额',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:1
            },
            {
                field: 'paidAmount',
                title: '实际支付金额',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:1
            },
            {
                field: 'paidTime',
                title: '支付时间',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:1,
                formatter:function (value,rows,index) {
                    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
                    var date = new Date(rows.paidTime);
                    Y = date.getFullYear() + '-';
                    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    D = date.getDate() + ' ';
                    h = date.getHours() + ':';
                    m = date.getMinutes() + ':';
                    s = date.getSeconds();
                    return Y+M+D+h+m+s;
                }
            },
            {
                field: 'gmtRefund',
                title: '退款时间',
                width:80,
                sort: true,
                fixed: 'left',
                colspan: 1,
                rowspan:1,
                formatter:function (value,rows,index) {
                    var date = new Date(rows.gmtRefund);
                    Y = date.getFullYear() + '-';
                    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    D = date.getDate() + ' ';
                    h = date.getHours() + ':';
                    m = date.getMinutes() + ':';
                    s = date.getSeconds();
                    return Y+M+D+h+m+s;
                }
            }
        ]],
        formatNoMatches: function () {
            return "没有相关的匹配结果";
        },
        // formatLoadingMessage: function () {
        //     return "请稍等，正在加载中...";
        // },
        formatShowingRows: function (a, b, c) {
            return "显示第 " + a + "到第 " + b + " 条记录，总共 " + c + " 条记录";
        },
        formatRecordsPerPage: function (a) {
            return "每页显示 " + a + " 条记录";
        },
        onLoadSuccess: function (row) {
              // console.log("加载成功时执行");

        },
        onLoadError: function (row) {
            alert("加载数据失败");
        },
        // onClickRow: function (row, $element) {
        //     isCheck = row["0"];
        //     if (isCheck == false || isCheck == undefined) {
        //         caseConnClear();
        //         curConnInfo = row;
        //         //   console.log("row----", JSON.stringify(row));
        //     } else {
        //         isCheck = true;
        //     }
        // },
    });
    initTableHeight();
    t.on('load-success.bs.table', function(data) {
        $("body").mLoading("hide")
        $(".pull-right").css("display", "block");
        // $("#paySys_table tbody tr").css("background-color", "#797979");
    });
}
acc_query()
function  acc_query() {
    var accuserID = $("#acc_userID").val();//用户ID
    var account_Name = $("#account_Name").val();//用户名
    $("body").mLoading("show")
    $("#accSys_table").bootstrapTable('destroy');
    var t = $("#accSys_table").bootstrapTable({
        url: account_url + 'webQueryAccountInfo', //账户系统查询数据接口
        method: 'post',
        dataType: "json",
        cache: false,
        contentType: "application/json", //post请求的话就加上这个句话
        queryParamsType: "",
        striped: false, //设置为 true 会有隔行变色效果
        undefinedText: "0", //当数据为 undefined 时显示的字符
        pagination: true, //分页
        paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
        showToggle: false, //是否显示 切换试图（table/card）按钮
        showColumns: false, //是否显示 内容列下拉框
        pageNumber: 1, //如果设置了分页，首页页码
        showPaginationSwitch:true,//是否显示 数据条数选择框
        pageSize: 20, //如果设置了分页，页面数据条数
        pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //服务端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageNum: params.pageNumber, //从数据库第几条记录开始
                pageCount: params.pageSize, //找多少条
                // appId:562365, //必填
                appId:123456,
                // uid:accuserID,
                userName:account_Name
            };
        },
        responseHandler: function (res) {
            console.log(res)
            return {
                "total": res.totalCount,
                "rows": res.data
            }
        },
        idField: "logId", //指定主键列
        columns: [  //设置表头
            [
                {
                    field: 'userCode',
                    title: '用户账号',
                    sort: true,
                    fixed: 'left',
                },
                // {
                //     field: 'uid',
                //     title: '用户ID',
                //     sort: true,
                //     fixed: 'left',
                // },
                {
                    field: 'mobile',
                    title: '手机号',
                    sort: true,
                    fixed: 'left',
                },
                // {
                //     field: 'registerSource',
                //     title: '注册来源',
                //     sort: true,
                //     fixed: 'left',
                //     formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                //         if(row.registerSource == 1){
                //             return "手机号"
                //         }
                //         if(row.registerSource == 2){
                //             return "邮箱"
                //         }
                //         if(row.registerSource == 3){
                //             return "用户名"
                //         }
                //         if(row.registerSource == 4){
                //             return "qq"
                //         }
                //         if(row.registerSource == 5){
                //             return "微信"
                //         }
                //         if(row.registerSource == 6){
                //             return "腾讯微博"
                //         }
                //         if(row.registerSource == 7){
                //             return "新浪微博"
                //         }
                //         if(row.registerSource == 8){
                //             return "游客"
                //         }
                //     }
                // },
                // {
                //     // field: 'userRole',
                //     title: '用户角色',
                //     sort: true,
                //     fixed: 'left',
                //     formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                //         // return row.userRole
                //         if(row.userRole == 2){
                //             return "正常用户"
                //         }
                //         if(row.userRole == 3){
                //             return "禁言用户"
                //         }
                //         if(row.userRole == 4){
                //             return "虚拟用户"
                //         }
                //         if(row.userRole == 5){
                //             return "运营"
                //         }
                //     }
                // },
                // {
                //     field: 'clientUserCode',
                //     title: '客户端用户',
                //     // width:80,
                //     sort: true,
                //     fixed: 'left',
                // },
                // {
                //     // field: 'payType',
                //     title: '在线时长',
                //     sort: true,
                //     fixed: 'left',
                //     formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                //         return row.updateTime - row.createTime + "分钟"
                //     }
                // },
                {
                    field: 'createTimeString',
                    title: '创建时间',
                    sort: true,
                    fixed: 'left',
                },
                {
                    field: 'isActive',
                    title: '账号是否激活',
                    sort: true,
                    fixed: 'left',
                    formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                        if(row.isActive == 0){
                            return "未激活"
                        }
                        if(row.isActive == 1){
                            return "已激活"
                        }
                    }
                },
                {
                    title: '封禁账号',
                    sort: true,
                    fixed: 'left',
                    formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                        if(row.ban == undefined){
                            return "<span style='color:#FFFFFF;'>未封禁</span>" +
                                "<span style='display: inline-block;margin-left: 10px;margin-right: 10px;background: #575757;width: 1px;height: 20px;margin-bottom: -5px;'></span>" +
                                "<button style='color:#07F929;border: 0;background: transparent;margin-right: 5px;' id='open'>开启</button>" +
                                "<button style='color:#0BA5F5;border: 0;background: transparent;'id='close'>关闭</button>"
                        }
                        if(row.ban == 0 ){
                            return "<span style='color:#F91313; display: inline-block;width: 42px;'>封禁</span>" +
                                "<span style='display: inline-block;margin-left: 10px;margin-right: 10px;background: #575757;width: 1px;height: 20px;margin-bottom: -5px;'></span>" +
                                "<button style='color:#07F929; border: 0;background: transparent;margin-right: 5px;'id='open'>开启</button>" +
                                "<button style='color:#0BA5F5;border: 0;background: transparent;' id='close'>关闭</button>"
                        }
                        if(row.ban == 1 ){
                            return "<span style='color:#FFFFFF;'>未封禁</span>" +
                                "<span style='display: inline-block;margin-left: 10px;margin-right: 10px;background: #575757;width: 1px;height: 20px;margin-bottom: -5px;'></span>" +
                                "<button style='color:#07F929;border: 0;background: transparent;margin-right: 5px;' id='open'>开启</button>" +
                                "<button style='color:#0BA5F5;border: 0;background: transparent;' id='close'>关闭</button>"
                        }
                    }
                },
            ]],
        formatNoMatches: function () {
            return "没有相关的匹配结果";
        },
        formatLoadingMessage: function () {
            return "请稍等，正在加载中...";
        },
        formatShowingRows: function (a, b, c) {
            return "显示第 " + a + "到第 " + b + " 条记录，总共 " + c + " 条记录";
        },
        formatRecordsPerPage: function (a) {
            return "每页显示 " + a + " 条记录";
        },
        onLoadSuccess: function (row) {
            //   console.log("加载成功时执行");
        },
        onLoadError: function (row) {
            alert("加载数据失败");
        },
    });
    t.on('load-success.bs.table', function(data) {
        $("body").mLoading("hide")
        $(".pull-right").css("display", "block");
        $("#accSys_table tbody tr").css("background-color", "#363636")
        $("#accSys_table tr").css("height", "59px")
        $("#accSys_table th").css("line-height", "36px")
        $("#accSys_table tbody tr").css("margin-top","10px")
        // $("#accSys_table tbody tr:even").css("background-color", "#3b3b3b")
    });
}
layui.use(['element','form','layer'], function () {
    var element = layui.element;
    var form = layui.form;
    var layer = layui.layer;
    //封禁弹框
    $(document).on("click","#open",function(){
        var isfeng = $(this)[0].parentNode.childNodes[0].textContent
        if(isfeng !== "封禁"){
            var openname = $(this)[0].parentNode.parentNode.childNodes[0].textContent;
            layer.open({
                type: 1,
                area: ['489px', '298px'],
                title: '',
                shadeClose: true,
                shade: 0.5,
                content: $('#seal-account'),
                closeBtn: 2, //关闭按钮
                scrollbar: false,
                btn:"确认", //确认按钮
                success: function(layero, index){
                    $("#open_name").text(openname)
                },
                yes: function(index, layero){
                    $("body").mLoading("show")
                    //do something
                    var banlist = {
                        "userName":openname,    //要封禁的用户账号
                        // "appId":"562365"
                        "appId":"123456"
                    }
                    $.ajax({
                        url:account_url + "ban",
                        method:"post",
                        async:true,
                        contentType: "application/json",
                        data:JSON.stringify(banlist),
                        success:function (data) {
                            console.log(data)
                            if(data.result == "SUCCESS"){
                                layer.close(index); //如果设定了yes回调，需进行手工关闭
                                $("body").mLoading("hide")
                                // alert("封禁成功")
                                acc_query()
                            }
                            else{
                                layer.close(index);
                                alert("封禁失败")
                            }
                        }
                    })

                }
            })
        }else{
            layer.open({
                type: 1,
                area: ['489px', '298px'],
                title: '',
                shadeClose: true,
                shade: 0.5,
                content: $('#already'),
                closeBtn: 2, //关闭按钮
                scrollbar: false,
                btn:"确认", //确认按钮
                success: function(layero, index){
                    // $("#open_name").text(openname)
                }
            })
        }
    })
    //解除封禁
    $(document).on("click","#close",function(){
        var openname = $(this)[0].parentNode.parentNode.childNodes[0].textContent;
        var banlist = {
            "userName":openname,
            "appId":"123456"
        }
        $.ajax({
            url:account_url + "unBan",
            method:"post",
            async:true,
            contentType: "application/json",
            data:JSON.stringify(banlist),
            success:function (data) {
                if(data.result == "SUCCESS"){
                    alert("解除封禁成功")
                }
                else{
                    alert("解除封禁失败")
                }
                acc_query()
            }
        })
    })
})