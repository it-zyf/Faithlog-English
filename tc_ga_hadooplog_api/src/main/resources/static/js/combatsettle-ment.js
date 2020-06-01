change()

// function load() {
//     $(".right").mLoading("show");
// }

function onblu() {
    var timeMM = document.getElementsByClassName('el-range-input')
    var texts = timeMM[0].value
    var texte = timeMM[1].value
    var serverSub = $("#district").val(); //区服
    var text6 = $("#account").val() //账号id
    var text9 = $("#inhome").val() //房间id
    var text7 = $("#role").val() //英雄ID：
    var text8 = $("#part").val() //角色名
    var text4 = $('#in1').val(); //设备号
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    retentionTable(serverSub, texts, texte, text6, text9, text7, text8, text4)
}

function change() {
    // $(document.body).mLoading("show");
    $.ajax({
        type: "get",
        url: "http://150.109.167.142:9110/frontEnd/queryAreas",
        async: false,
        success: function (obj) {
            for (var i = 0; i < obj.data.length; i++) {
                $("#district").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
            }
            $("#district").each(function () {
                $(this).find("option").attr("selected", "selected")
            })
            $('#district').multiselect("destroy").multiselect({
                buttonWidth: '75%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 1,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有区服',
            });

            homedata()
        }
    });
}

function homedata() {
    var text5 = $("#district").val(); //区服
    var text6 = $("#account").val() //账号id
    var text9 = $("#inhome").val() //房间id
    var text7 = $("#role").val() //英雄ID：
    var text8 = $("#part").val() //角色名
    var text4 = $('#in1').val(); //设备号
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
    $.ajax({
        type: "post",
        url: "../queryCombatSettlement.action",
        async: true,
        data: {
            serverId: text5,
            startTime: text1,
            endTime: textTime,
            accountId: text6,
            roomId: text9,
            heroId: text7,
            roleName: text8,
            deviceId: text4,

        },
        success: function (ob) {
            // AddUser(ob);
            retentionTable(text5, text1, textTime, text6, text9, text7, text8, text4)
            // $(document.body).mLoading("hide");
        }
    });
}

function retentionTable(text5, text1, textTime, text6, text9, text7, text8, text4) {
    $("#pull-right").css("display", "block");
    $("#real-datatableAll").bootstrapTable('destroy');
    var t = $("#real-datatableAll").bootstrapTable({
        url: '../queryCombatSettlement.action',
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
                accountId: text6,
                roomId: text9,
                heroId: text7,
                roleName: text8,
                deviceId: text4
            };
        },
        idField: "logId", //指定主键列
        columns: [{
            title: '区服号', //区服号
            field: 'serverId', //json数据中rows数组中的属性名
            align: 'center', //水平居中
            width: '80',
        },
            {
                title: '日志时间',
                field: 'logTime',
                align: 'center',
                width: '150',
            },
            {
                title: '账号ID',
                field: 'accountId',
                align: 'center',
                width: '150',
            },
            {
                title: '设备号',
                field: 'deviceId',
                align: 'center',
                width: '250',
            },
            {
                title: '英雄ID',
                field: 'heroId',
                align: 'center',
                width: '150',
            },
            {
                title: '角色名',
                field: 'roleName',
                align: 'center',
                width: '150',
            },
            {
                title: '角色等级',
                field: 'roleLevel',
                align: 'center',
                width: '150',
            },
            {
                title: '是否新用户',
                field: 'newUser',
                align: 'center',
                width: '100',
                formatter: function (value, rows, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    if (rows.newUser == 0) {
                        rows.newUser = "否";
                    } else if (rows.newUser == 1) {
                        rows.newUser = "是";
                    }
                    return rows.newUser;
                }
            },
            {
                title: '结算方式',
                field: 'isOnline',
                align: 'center',
                width: '150',
                formatter: function (value, rows, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    if (rows.isOnline == 0) {
                        rows.isOnline = "离线结算";
                    } else if (rows.isOnline == 1) {
                        rows.isOnline = "在线结算";
                    }
                    return rows.isOnline;
                }
            },
            {
                title: '客户端版本',
                field: 'clientVersion',
                align: 'center',
                width: '150',
            },
            {
                title: '房间ID',
                field: 'roomId',
                align: 'center',
                width: '150',
            },
            {
                title: '房间状态',
                field: 'roomState',
                align: 'center',
                width: '100',
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
                title: '玩家数',
                field: 'playerCount',
                align: 'center',
                width: '100',

            },
            {
                title: '机器人数',
                field: 'robotCount',
                align: 'center',
                width: '100',

            },
            {
                title: '游戏时间',
                field: 'gameTime',
                align: 'center',
                width: '150',

            },
            {
                title: '排名',
                field: 'rank',
                align: 'center',
                width: '150',

            },
            {
                title: '击杀玩家数',
                field: 'killPlayers',
                align: 'center',
                width: '150',

            },
            {
                title: '总赏金',
                field: 'money',
                align: 'center',
                width: '150',

            },
            {
                title: '排名赏金',
                field: 'rankMoney',
                align: 'center',
                width: '150',

            },
            {
                title: '猎头赏金',
                field: 'killMoney',
                align: 'center',
                width: '150',

            },
            {
                title: '狩猎传奇赏金',
                field: 'bossMoney',
                align: 'center',
                width: '150',

            },
            {
                title: '获得经验值',
                field: 'exp',
                align: 'center',
                width: '150',

            },
            {
                title: '战斗场次',
                field: 'combatCount',
                align: 'center',
                width: '150',

            },
            {
                title: '模式分类',
                field: 'model',
                align: 'center',
                width: '150',
                formatter: function (value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    var model
                    if (row.model == 0) {
                        model = "休闲模式";
                    } else if (row.model == 1) {
                        model = "天梯模式";
                    }
                    return model;
                }
            },
            //新增字段
            {
                title: '使用魔药次数',
                field: 'useDrugCount',
                align: 'center',
                width: '150',

            },
            {
                title: '升级技能次数',
                field: 'learnSkillCount',
                align: 'center',
                width: '150',

            },
            {
                title: '获得宝石次数',
                field: 'gainInscriptionCount',
                align: 'center',
                width: '150',

            },
            {
                title: '被食人花攻击次数',
                field: 'attackByCorpseFlowerCount',
                align: 'center',
                width: '150',

            },
            {
                title: '被爆爆草攻击次数',
                field: 'attackByBombGrassCount',
                align: 'center',
                width: '150',

            },
            {
                title: '骑乘坐骑次数',
                field: 'rideHorseCount',
                align: 'center',
                width: '150',

            },
            {
                title: '骑乘魔能机甲次数',
                field: 'controlMagicMachineCount',
                align: 'center',
                width: '150',

            },
            {
                title: '上灭龙炮次数',
                field: 'upCannonCount',
                align: 'center',
                width: '150',

            },
            {
                title: '下灭龙炮次数',
                field: 'downCannonCount',
                align: 'center',
                width: '150',

            },
            {
                title: '骑乘船只次数',
                field: 'upShipCount',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家造成伤害总值',
                field: 'makeDamage',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家承受伤害总值',
                field: 'sufferDamage',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家承受毒圈伤害总值',
                field: 'sufferDamageByDeadRace',
                align: 'center',
                width: '160',

            },
            {
                title: '玩家移动距离总值',
                field: 'totalMovingDistance',
                align: 'center',
                width: '150',

            },
            {
                title: '击杀活人数量',
                field: 'killPlayerNum',
                align: 'center',
                width: '150',

            },
            {
                title: '击杀机器人数量',
                field: 'killRobotNum',
                align: 'center',
                width: '150',

            },
            {
                title: '异常用户甄别',
                field: 'abnormalPlayer',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家杀死仆从、仆英、精英次数',
                field: 'killServant',
                align: 'center',
                width: '230',

            },
            {
                title: '玩家杀死树妖次数',
                field: 'killTreeMonster',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家杀死荒神次数',
                field: 'killNihilitygod',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家杀死蜘蛛女王次数',
                field: 'killSpiderQueen',
                align: 'center',
                width: '160',

            },
            {
                title: '玩家杀死鱼人领主次数',
                field: 'killFishmanBoss',
                align: 'center',
                width: '160',

            },
            {
                title: '玩家杀死红龙次数',
                field: 'killRedDragon',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家上树次数',
                field: 'climbTree',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家使用树上Gank成功次数',
                field: 'useTreeGank',
                align: 'center',
                width: '230',

            },
            {
                title: '玩家使用轻功次数',
                field: 'useQinggong',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家使用轻功打地次数',
                field: 'useQinggongGank',
                align: 'center',
                width: '160',

            },
            {
                title: '玩家使用自带沙盒次数',
                field: 'useSelfSandbox',
                align: 'center',
                width: '160',

            },
            {
                title: '玩家使用公共沙盒次数',
                field: 'useCommonSandbox',
                align: 'center',
                width: '160',

            },
            {
                title: '玩家使用常规技能次数',
                field: 'useRoutineSkill',
                align: 'center',
                width: '160',

            },
            {
                title: '玩家使用神器次数',
                field: 'useArtifact',
                align: 'center',
                width: '150',

            },
            {
                title: '玩家杀死NPC数量总计',
                field: 'killNpc',
                align: 'center',
                width: '160',

            },
            {
                title: 'Gank技能造成伤害次数',
                field: 'gankMakeDamageTimes',
                align: 'center',
                width: '200',

            },
            {
                title: 'Gank技能对英雄造成伤害次数',
                field: 'gankMakeDamageToPlayerTimes',
                align: 'center',
                width: '230',

            },
            {
                title: '开启宝箱次数',
                field: 'openTreasureBoxTimes',
                align: 'center',
                width: '180',

            },
            {
                title: '开启传奇宝箱次数',
                field: 'openLegendTreasureBoxTimes',
                align: 'center',
                width: '180',

            },
            {
                title: '拾取魔环Buff次数',
                field: 'pickMagicRingTimes',
                align: 'center',
                width: '180',

            },
            {
                title: '使用左侧快捷操作按钮上树次数',
                field: 'upTreeByPromtButtonTimes',
                align: 'center',
                width: '230',

            },
            {
                title: '使用左侧快捷操作按钮开宝箱次数',
                field: 'openTreasureBoxByPromtButtonTimes',
                align: 'center',
                width: '230',

            },
            {
                title: '使用左侧快捷操作按钮骑乘次数',
                field: 'rideUpByPromtButtonTimes',
                align: 'center',
                width: '230',

            },
        ]
    });
    t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
        $("#pull-right").css("display", "none");
    });
}

//警告日志
//
// function onready2() {
//     var timeMM = document.getElementsByClassName('el-range-input')
//     var texts = timeMM[0].value
//     var texte = timeMM[1].value
//     var serverSub = $("#district").val(); //区服
//     var text6 = $("#account").val() //账号id
//     var text9 = $("#inhome").val() //房间id
//     var text7 = $("#role").val() //英雄ID：
//     var text8 = $("#part").val() //角色名
//     var text4 = $('#in1').val(); //设备号
//     if (serverSub != null) {
//         serverSub = serverSub.join(",");
//     }
//     retentionTableAs(serverSub, texts, texte, text6, text9, text7, text8, text4)
// }
//
// function change() {
//     $("#page-wrapper").mLoading("show");
//     $.ajax({
//         type: "get",
//         url: "http://150.109.167.142:9110/frontEnd/queryAreas",
//         async: false,
//         success: function (obj) {
//             for (var i = 0; i < obj.rows.length; i++) {
//                 $("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
//             }
//             $("#district").each(function () {
//                 $(this).find("option").attr("selected", "selected")
//             })
//             $('#district').multiselect("destroy").multiselect({
//                 buttonWidth: '80%',
//                 nonSelectedText: '请选择',
//                 maxHeight: 200,
//                 numberDisplayed: 1,
//                 includeSelectAllOption: true,
//                 selectAllText: '全选/全不选', //全选按钮显示的文本
//                 nSelectedText: '项被选中',
//                 allSelectedText: '已选中所有区服',
//             });
//
//             homedata()
//         }
//     });
// }
//
//
// function retentionTableAs(text5, text1, textTime, text6, text9, text7, text8, text4) {
//     $("#real-datatableAll").bootstrapTable('destroy');
//     var t = $("#real-datatableAll").bootstrapTable({
//         url: '../queryCombatSettlement.action',
//         method: 'post',
//         dataType: "json",
//         contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
//         queryParamsType: "",
//         striped: true, //设置为 true 会有隔行变色效果
//         undefinedText: "0", //当数据为 undefined 时显示的字符
//         pagination: true, //分页
//         paginationLoop: false,
//         // paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
//         showToggle: false, //是否显示 切换试图（table/card）按钮
//         showColumns: "true", //是否显示 内容列下拉框
//         pageNumber: 1, //如果设置了分页，首页页码
//         // showPaginationSwitch:true,//是否显示 数据条数选择框
//         pageSize: 20, //如果设置了分页，页面数据条数
//         pageList: [5, 10, 20, 40,], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
//         paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
//         paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
//         // singleSelect: false,//设置True 将禁止多选
//         search: false, //显示搜索框
//         data_local: "zh-US", //表格汉化
//         sidePagination: "server", //客户端处理分页
//         queryParams: function (params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
//             return { //这里的params是table提供的
//                 pageIndex: params.pageNumber,//从数据库第几条记录开始
//                 pageSize: params.pageSize,//找多少条
//                 serverId: text5,
//                 startTime: text1,
//                 endTime: textTime,
//                 accountId: text6,
//                 roomId: text9,
//                 heroId: text7,
//                 roleName: text8,
//                 deviceId: text4,
//                 stepNum: 3019
//             };
//         },
//         idField: "logId", //指定主键列
//         columns: [{
//             title: '区服号', //区服号
//             field: 'serverId', //json数据中rows数组中的属性名
//             align: 'center', //水平居中
//             width: '80',
//         },
//             {
//                 title: '日志时间',
//                 field: 'logTime',
//                 align: 'center',
//                 width: '150',
//             },
//             {
//                 title: '账号ID',
//                 field: 'accountId',
//                 align: 'center',
//                 width: '150',
//             },
//             {
//                 title: '设备号',
//                 field: 'deviceId',
//                 align: 'center',
//                 width: '150',
//             },
//             {
//                 title: '英雄ID',
//                 field: 'heroId',
//                 align: 'center',
//                 width: '150',
//             },
//             {
//                 title: '角色名',
//                 field: 'roleName',
//                 align: 'center',
//                 width: '150',
//             },
//             {
//                 title: '是否新用户',
//                 field: 'newUser',
//                 align: 'center',
//                 width: '100',
//                 formatter: function (value, rows, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
//                     if (rows.newUser == 0) {
//                         rows.newUser = "否";
//                     } else if (rows.newUser == 1) {
//                         rows.newUser = "是";
//                     }
//                     return rows.newUser;
//                 }
//             },
//             {
//                 title: '结算方式',
//                 field: 'isOnline',
//                 align: 'center',
//                 width: '150',
//                 formatter: function (value, rows, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
//                     if (rows.isOnline == 0) {
//                         rows.isOnline = "离线结算";
//                     } else if (rows.isOnline == 1) {
//                         rows.isOnline = "在线结算";
//                     }
//                     return rows.isOnline;
//                 }
//             },
//             {
//                 title: '客户端版本',
//                 field: 'clientVersion',
//                 align: 'center',
//                 width: '150',
//             },
//             {
//                 title: '房间ID',
//                 field: 'roomId',
//                 align: 'center',
//                 width: '150',
//             },
//             {
//                 title: '房间状态',
//                 field: 'roomState',
//                 align: 'center',
//                 width: '100',
//                 formatter: function (value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
//                     if (row.roomState == 0) {
//                         row.roomState = "待机区";
//                     } else if (row.roomState == 1) {
//                         row.roomState = "游戏区";
//                     }
//                     return row.roomState;
//                 }
//
//             },
//             {
//                 title: '玩家数',
//                 field: 'playerCount',
//                 align: 'center',
//                 width: '100',
//
//             },
//             {
//                 title: '机器人数',
//                 field: 'robotCount',
//                 align: 'center',
//                 width: '100',
//
//             },
//             {
//                 title: '游戏时间',
//                 field: 'gameTime',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '排名',
//                 field: 'rank',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '击杀玩家数',
//                 field: 'killPlayers',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '总赏金',
//                 field: 'money',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '排名赏金',
//                 field: 'rankMoney',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '猎头赏金',
//                 field: 'killMoney',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '狩猎传奇赏金',
//                 field: 'bossMoney',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '获得经验值',
//                 field: 'exp',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '战斗场次',
//                 field: 'combatCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '模式分类',
//                 field: 'model',
//                 align: 'center',
//                 width: '150',
//                 formatter: function (value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
//                     var model
//                     if (row.model == 0) {
//                         model = "休闲模式";
//                     } else if (row.model == 1) {
//                         model = "天梯模式";
//                     }
//                     return model;
//                 }
//             },
//             //新增字段
//             {
//                 title: '使用魔药次数',
//                 field: 'useDrugCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '升级技能次数',
//                 field: 'learnSkillCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '获得宝石次数',
//                 field: 'gainInscriptionCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '被食人花攻击次数',
//                 field: 'attackByCorpseFlowerCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '被爆爆草攻击次数',
//                 field: 'attackByBombGrassCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '骑乘坐骑次数',
//                 field: 'rideHorseCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '骑乘魔能机甲次数',
//                 field: 'controlMagicMachineCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '上灭龙炮次数',
//                 field: 'upCannonCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '下灭龙炮次数',
//                 field: 'downCannonCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '骑乘船只次数',
//                 field: 'upShipCount',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家造成伤害总值',
//                 field: 'makeDamage',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家承受伤害总值',
//                 field: 'sufferDamage',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家承受毒圈伤害总值',
//                 field: 'sufferDamageByDeadRace',
//                 align: 'center',
//                 width: '160',
//
//             },
//             {
//                 title: '玩家移动距离总值',
//                 field: 'totalMovingDistance',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '击杀活人数量',
//                 field: 'killPlayerNum',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '击杀机器人数量',
//                 field: 'killRobotNum',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '异常用户甄别',
//                 field: 'abnormalPlayer',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家杀死仆从、仆英、精英次数',
//                 field: 'killServant',
//                 align: 'center',
//                 width: '200',
//
//             },
//             {
//                 title: '玩家杀死树妖次数',
//                 field: 'killTreeMonster',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家杀死荒神次数',
//                 field: 'killNihilitygod',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家杀死蜘蛛女王次数',
//                 field: 'killSpiderQueen',
//                 align: 'center',
//                 width: '160',
//
//             },
//             {
//                 title: '玩家杀死鱼人领主次数',
//                 field: 'killFishmanBoss',
//                 align: 'center',
//                 width: '160',
//
//             },
//             {
//                 title: '玩家杀死红龙次数',
//                 field: 'killRedDragon',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家上树次数',
//                 field: 'climbTree',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家使用树上Gank成功次数',
//                 field: 'useTreeGank',
//                 align: 'center',
//                 width: '190',
//
//             },
//             {
//                 title: '玩家使用轻功次数',
//                 field: 'useQinggong',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家使用轻功打地次数',
//                 field: 'useQinggongGank',
//                 align: 'center',
//                 width: '160',
//
//             },
//             {
//                 title: '玩家使用自带沙盒次数',
//                 field: 'useSelfSandbox',
//                 align: 'center',
//                 width: '160',
//
//             },
//             {
//                 title: '玩家使用公共沙盒次数',
//                 field: 'useCommonSandbox',
//                 align: 'center',
//                 width: '160',
//
//             },
//             {
//                 title: '玩家使用常规技能次数',
//                 field: 'useRoutineSkill',
//                 align: 'center',
//                 width: '160',
//
//             },
//             {
//                 title: '玩家使用神器次数',
//                 field: 'useArtifact',
//                 align: 'center',
//                 width: '150',
//
//             },
//             {
//                 title: '玩家杀死NPC数量总计',
//                 field: 'killNpc',
//                 align: 'center',
//                 width: '160',
//
//             },
//         ]
//     });
//     t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
//         $(".page-wrapper").mLoading("hide");
//     });
// }
