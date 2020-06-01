change()

// function load() {
//     $(".right").mLoading("show");
// }

function onblu() {
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间

    var serverSub = $("#district").val(); //区服
    var model = $("#model").val();
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    retentionTable(serverSub, model, textday_to)
}

function change() {
    // $(document.body).mLoading("show");
    $.ajax({
        type: "get",
        url: "http://150.109.167.142:9110/frontEnd/queryAreas",
        async: false,
        success: function (obj) {
            for (var i = 0; i < obj.rows.length; i++) {
                $("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
            }
            $("#district").each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#district').multiselect("destroy").multiselect({
                buttonWidth: '70%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 1,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有区服',
            });
            $("#channel").each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#channel').multiselect("destroy").multiselect({
                buttonWidth: '53%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 2,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有渠道'
            });
            $('#Scope').each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#Scope').multiselect("destroy").multiselect({
                buttonWidth: '63%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 2,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有范围'
            });
            // onready()

            homedata()
        }
    });
}

function homedata() {
    var text5 = $("#district").val(); //区服
    var model = $("#model").val();
    var time
    var textday_to
    var textday_to
    // var aa=vm.ruleForm.dateValue
    var date = new Date();
    var now = new Date(date)
    var lastday = new Date(date - 24 * 3600 * 1000);
    var oneweekdate = new Date(date - 8 * 24 * 3600 * 1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth() + 1;
    var d = oneweekdate.getDate();
    var formatwdate = y + '-' + m + '-' + d;//8天前
    var yn = lastday.getFullYear();
    var mn = lastday.getMonth() + 1;
    var dn = lastday.getDate();
    var formatwdateNow = yn + '-' + mn + '-' + dn;//昨天
    text1 = formatwdate
    textTime = formatwdateNow//晚
    daytext=date//今日
    if (text5 != null) {
        text5 = text5.join(",");
    }
    $.ajax({
        type: "post",
        url: "../getGameNum.action",
        async: true,
        data: {
            serverId: text5,
            startTime: textday_to,
            endTime: textday_to,
            model: model,
        },
        success: function (ob) {
            // AddUser(ob);
            retentionTable(text5, textday_to, model,daytext)
            $(document.body).mLoading("hide");
        }
    });
}

function retentionTable(text5, model, textday_to) {
    $("#youxiaozhnaghao").css("display", "block");
    let Num = 0
    $("#real-datatableAll").bootstrapTable('destroy');
    var t = $("#real-datatableAll").bootstrapTable({
        url: '../getGameNum.action',
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
                startTime: textday_to,
                endTime: textday_to,
                model: model
            };
        },
        responseHandler: function (res) {
            // console.log(res)
            for (let i = 0; i < res.rows.length; i++) {
                // console.log( res.rows[i].accountNum)
                Num += res.rows[i].accountNum
            }
            // console.log(Num)
            $("#sum").html(Num)
            return res

        },
        idField: "logId", //指定主键列
        columns: [{
            title: '起止时间',
            field: '', //json数据中rows数组中的属性名
            align: 'center',
            formatter: function (value, row, value) {
                return row.startTime + "~" + row.endTime
            }
        },
            {
                title: '登录的有效账号对局数',
                field: 'gameNumStrinig',
                align: 'center'
            },
            {
                title: '账号数量',
                field: 'accountNum',
                align: 'center'
            },
        ]
    });
    $("#youxiaozhnaghao").css("display", "none");
    t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
        $("#youxiaozhnaghao").css("display", "none");
    });
}


//首次登录对局分析
function onready2() {
    var timeday = document.getElementsByClassName('el-input__inner')
    var textday_to = timeday[0].value//开始时间
    var serverSub = $("#district").val(); //区服
    var model = $("#model").val();
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    retentionTableAs(serverSub, model, textday_to)
}

function change() {
    // $(document.body).mLoading("show")
    // ;
    $.ajax({
        type: "get",
        url: "http://150.109.167.142:9110/frontEnd/queryAreas",
        async: false,
        success: function (obj) {
            for (var i = 0; i < obj.rows.length; i++) {
                $("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
            }
            $("#district").each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#district').multiselect("destroy").multiselect({
                buttonWidth: '70%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 1,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有区服',
            });
            $("#channel").each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#channel').multiselect("destroy").multiselect({
                buttonWidth: '53%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 2,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有渠道'
            });
            $('#Scope').each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#Scope').multiselect("destroy").multiselect({
                buttonWidth: '63%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 2,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有范围'
            });
            // onready()

            homedata()
        }
    });
}

function retentionTableAs(text5, model, textday_to) {
    $("#youxiaozhnaghao").css("display", "block");
    let Num = 0
    console.log(text5, text1, textTime, model)
    $("#real-datatableAll").bootstrapTable('destroy');
    var t = $("#real-datatableAll").bootstrapTable({
        url: "../getGameAccountRetain.action",//人数查询接口
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
                startTime: textday_to,
                endTime: textday_to,
                model: model
            };
        },
        responseHandler: function (res) {
            for (let i = 0; i < res.rows.length; i++) {
                console.log(res.rows[i].accountNum)
                Num += res.rows[i].accountNum
            }
            $("#sum").html(Num)
            return res
        },
        idField: "logId", //指定主键列
        columns: [{
            title: '起止时间',
            field: '', //json数据中rows数组中的属性名
            align: 'center',
            formatter: function (value, row, value) {
                return row.startTime

            }
        },
            {
                title: '登录的有效账号对局数',
                field: 'gameNumStrinig',
                align: 'center'
            },
            {
                title: '账号数量',
                field: 'accountNum',
                align: 'center'
            },
            {
                title: '留存率',
                field: 'dayRetainRate',
                align: 'center',

            }
        ]
    });
    t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
        $("#youxiaozhnaghao").css("display", "none");
    });
}