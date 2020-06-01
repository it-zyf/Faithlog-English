change()

// function load() {
//     $(".right").mLoading("show");
// }

function onblu() {
    var timeMM = document.getElementsByClassName('el-range-input')
    var texts = timeMM[0].value
    var texte = timeMM[1].value
    var serverSub = $("#district").val(); //区服
    var npm = $('#in1').val(); //等级范围开始
    var npm2 = $('#in2').val(); //等级范围结束
    var text6 = $("#account").val(); //账号id
    var text7 = $("#role").val(); //角色id
    var text8 = $("#part").val(); //角色名
    var text9 = $("#channel").val();//渠道号
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    if (text9 != null) {
        text9 = text9.join(",");
    }
    if (Math.floor(npm) > Math.floor(npm2)) {
        alert("请您输入正确的等级范围")
        return false;
    }
    retentionTable(serverSub, texts, texte, npm, npm2, text6, text7, text8, text9)
}

function change() {
    // $("#page-wrapper").mLoading("show");
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
                buttonWidth: '74%',
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
                buttonWidth: '70%',
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
                buttonWidth: '70%',
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
    var npm = $('#in1').val(); //等级范围开始
    var npm2 = $('#in2').val(); //等级范围结束
    var text6 = $("#account").val(); //账号id
    var text7 = $("#role").val(); //角色id
    var text8 = $("#part").val(); //角色名
    var text9 = $("#channel").val();//渠道号
    var time
    var text1
    var textTime
    var date = new Date();
    var now=new Date()
    var oneweekdate = new Date(date-30*24*3600*1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth()+1;
    var d = oneweekdate.getDate();
    if(d<10){
        d='0'+d
    }
    var formatwdate = y+'-'+m+'-'+d;
    var yn = now.getFullYear();
    var mn = now.getMonth()+1;
    var dn = now.getDate();
    if(dn<10){
        dn='0'+dn
    }
    var formatwdateNow = yn+'-'+mn+'-'+dn;
    text1=formatwdate
    textTime=formatwdateNow//晚
    if (text5 != null) {
        text5 = text5.join(",");
    }
    if (text9 != null) {
        text9 = text9.join(",");
    }
    if (Math.floor(npm) > Math.floor(npm2)) {
        alert("请您输入正确的等级范围")
        return false;
    }
    $.ajax({
        type: "post",
        url: "../queryNoviceGuidance.action",
        async: true,
        data: {
            serverId: text5,
            startTime: text1,
            endTime: textTime,
            startroleLevel: npm,
            endroleLevel: npm2,
            accountId: text6,
            heroId: text7,
            roleName: text8,
            channelId: text9

        },
        success: function (ob) {
            // AddUser(ob);
            retentionTable(text5, text1, textTime, npm, npm2, text6, text7, text8, text9,)
            // $("#page-wrapper").mLoading("hide");
        }
    });
}

function retentionTable(text5, text1, textTime, npm, npm2, text6, text7, text8, text9,) {
    $("#pull-right").css("display", "block");
    $("#real-datatableAll").bootstrapTable('destroy');
    var t = $("#real-datatableAll").bootstrapTable({
        url: '../queryNoviceGuidance.action',
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
                startroleLevel: npm,
                endroleLevel: npm2,
                startTime: text1,
                endTime: textTime,
                accountId: text6,
                heroId: text7,
                roleName: text8,
                channelId: text9
            };
        },
        idField: "logId", //指定主键列
        columns: [{
            title: '区服号', //区服号
            field: 'serverId', //json数据中rows数组中的属性名
            align: 'center',//水平居中
            width: '80'

        },
            {
                title: '日志时间',
                field: 'logTime',
                align: 'center',
                width: '150'

            },
            {
                title: '账号ID',
                field: 'accountId',
                align: 'center',
                width: '100'

            },
            {
                title: '设备号',
                field: 'deviceId',
                align: 'center',
                width: '250'

            },
            {
                title: '英雄ID',
                field: 'heroId',
                align: 'center',
                width: '100'
            },
            {
                title: '角色名',
                field: 'roleName',
                align: 'center',
                width: '100'
            },
            {
                title: '角色等级',
                field: 'roleLevel',
                align: 'center',
                width: '80'
            },
            {
                title: '客户端版本',
                field: 'clientVersion',
                align: 'center',
                width: '150'
            },
            {
                title: '房间ID',
                field: 'roomId',
                align: 'center',
                width: '150'
            },
            {
                title: '房间状态',
                field: 'roomState',
                align: 'center',
                width: '80',
                formatter: function (value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    if (row.roomState == 0) {
                        row.roomState = "待机区";
                    } else if (row.roomState == 1) {
                        row.roomState = "游戏区";
                    }
                    return row.roomState;
                }

            },
            {
                title: '游戏时间',
                field: 'gameTime',
                align: 'center',
                width: '80',
            },
            {
                title: '所在坐标',
                field: 'axis',
                align: 'center',
                width: '100',

            },
            {
                title: '新手引导步骤ID',
                field: 'stepId',
                align: 'center',
                width: '150',

            },

        ]
    });
    t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
        $("#pull-right").css("display", "none");
    });
}
