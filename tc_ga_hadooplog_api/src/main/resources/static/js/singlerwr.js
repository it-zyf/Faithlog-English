function dangerMeg(){
    var timeMM= document.getElementsByClassName('el-range-input')
    var  texts=timeMM[0].value
    var  texte=timeMM[1].value
    var serverSub= $("#district").val(); //区服
    var text6 = $("#account").val() //账号id
    var text9 = $("#inhome").val() //房间id
    var text7 = $("#role").val() //英雄ID：
    var text8 = $("#part").val() //角色名
    var text4 = $('#in1').val(); //设备号
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    retentionTable(serverSub,texts,texte,text6,text9,text7,text8,text4)
}

function retentionTable(text5,text1,textTime,text6,text9,text7,text8,text4) {
    $("#real-datatableAll").bootstrapTable('destroy');
    var t = $("#real-datatableAll").bootstrapTable({
        url: '../querySingleRowPlayer.action',
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
        pageList: [5, 10, 20, 40,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "server", //客户端处理分页
        queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            return { //这里的params是table提供的
                pageIndex: params.pageNumber,//从数据库第几条记录开始
                pageSize: params.pageSize,//找多少条
                serverId: text5,
                startTime: text1,
                endTime:textTime,
                accountId: text6,
                roomId:text9,
                heroId: text7,
                roleName: text8,
                deviceId:text4,
                stepNum:3098

            };
        },
        idField: "logId", //指定主键列
        columns: [{
            title: '区服号', //区服号
            field: 'serverId', //json数据中rows数组中的属性名
            align: 'center' ,//水平居中,
            width:'80',
        },
            {
                title: '日志时间',
                field: 'logTime',
                align: 'center',
                width:'150',
            },
            {
                title: '账号ID',
                field: 'accountId',
                align: 'center',
                width:'100',
            },
            {
                title: '设备号',
                field: 'deviceId',
                align: 'center',
                width:'150',
            },
            {
                title: '英雄ID',
                field: 'heroId',
                align: 'center',
                width:'100',
            },
            {
                title: '角色名',
                field: 'roleName',
                align: 'center',
                width:'100',
            },
            {
                title: '角色等级',
                field: 'roleLevel',
                align: 'center',
                width:'80',
            },
            {
                title: '客户端版本',
                field: 'clientVersion',
                align: 'center',
                width:'100',
            },
            {
                title: 'stepNum',
                field: 'stepNum',
                align: 'center',
                width:'100',
            },
            {
                title: '房间ID',
                field: 'roomId',
                align: 'center',
                width:'150',
            },
            {
                title: '房间状态',
                field: 'roomState',
                align: 'center',
                width:'100',
                formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    if(row.roomState == 0) {
                        row.roomState = "待机区";
                    } else if(row.roomState == 1) {
                        row.roomState = "游戏区";
                    }
                    return row.roomState;
                }

            },
            {
                title: '玩家数',
                field: 'playerCount',
                align: 'center',
                width:'80',

            },
            {
                title: '机器人数',
                field: 'robotCount',
                align: 'center',
                width:'80',

            },
            {
                title: '游戏时间',
                field: 'gameTime',
                align: 'center',
                width:'80',

            },
            {
                title: '中心坐标',
                field: 'axis',
                align: 'center',
                width:'80',

            },
            {
                title: '模式分类',
                field: 'model',
                align: 'center',
                width:'100',
                formatter: function(value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    var model;
                    if(row.model == 0) {
                        model = "休闲模式";
                    } else if(row.model == 1) {
                        model = "天梯模式";
                    }
                    return model;
                }
            },
        ]
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
        $(".page-wrapper").mLoading("hide");
    });
}