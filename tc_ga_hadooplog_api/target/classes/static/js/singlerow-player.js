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
    if (text5 != null) {
        text5 = text5.join(",");
    }
    $.ajax({
        type: "post",
        url: "../querySingleRowPlayer.action",
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
            align: 'center', //水平居中,
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
                width: '100',
            },
            {
                title: '设备号',
                field: 'deviceId',
                align: 'center',
                width: '270',
            },
            {
                title: '英雄ID',
                field: 'heroId',
                align: 'center',
                width: '100',
            },
            {
                title: '角色名',
                field: 'roleName',
                align: 'center',
                width: '100',
            },
            {
                title: '角色等级',
                field: 'roleLevel',
                align: 'center',
                width: '100',
            },
            {
                title: '客户端版本',
                field: 'clientVersion',
                align: 'center',
                width: '100'

            },
            {
                title: 'stepNum',
                field: 'stepNum',
                align: 'center',
                width: '100',
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
                width: '80',

            },
            {
                title: '机器人数',
                field: 'robotCount',
                align: 'center',
                width: '80',

            },
            {
                title: '游戏时间',
                field: 'gameTime',
                align: 'center',
                width: '80',

            },
            {
                title: '中心坐标',
                field: 'axis',
                align: 'center',
                width: '80',

            },
            {
                title: '当时排名',
                field: 'rank',
                align: 'center',
                width: '80',

            },
            {
                title: '当时击杀玩家数',
                field: 'killPlayers',
                align: 'center',
                width: '100',

            },
            {
                title: '当时装备头部ID',
                field: 'head',
                align: 'center',
                width: '150',

            },
            {
                title: '当时装备身体ID',
                field: 'body',
                align: 'center',
                width: '150',

            },
            {
                title: '当时装备武器ID',
                field: 'arms',
                align: 'center',
                width: '150',

            },
            {
                title: '当时特殊能力ID',
                field: 'sandSkill',
                align: 'center',
                width: '150'

            },
            {
                title: '当时备用特殊能力ID组',
                field: 'sandSkillStock',
                align: 'center',
                width: '170',

            },
            {
                title: '当时兴奋剂数量',
                field: 'dope',
                align: 'center',
                width: '150',

            },
            {
                title: '当时药品数量',
                field: 'drug',
                align: 'center',
                width: '100',

            },
            {
                title: '当时炸弹数量',
                field: 'bomb',
                align: 'center',
                width: '100',

            },
            {
                title: '当时铭文ID组',
                field: 'rune',
                align: 'center',
                width: '100',

            },
            {
                title: '当时击杀Npc数',
                field: 'killNpcs',
                align: 'center',
                width: '120',

            },
            {
                title: '技能等级',
                field: 'skillLevels',
                align: 'center',
                width: '100',

            },
            {
                title: '模式分类',
                field: 'model',
                align: 'center',
                width: '100',
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
        ]
    });
    t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
        $("#pull-right").css("display", "none");
    });
}
//警告日志
function onready2() {
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
    retentionTableAs(serverSub, texts, texte, text6, text9, text7, text8, text4)
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

function retentionTableAs(text5, text1, textTime, text6, text9, text7, text8, text4) {
    $("#pull-right").css("display", "block");
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
                // roomId: text9,
                heroId: text7,
                roleName: text8,
                deviceId: text4,
                stepNum: 3198
            };
        },
        idField: "logId", //指定主键列
        columns: [{
            title: '区服号', //区服号
            field: 'serverId', //json数据中rows数组中的属性名
            align: 'center', //水平居中,
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
                width: '100',
            },
            {
                title: '设备号',
                field: 'deviceId',
                align: 'center',
                width: '150',
            },
            {
                title: '英雄ID',
                field: 'heroId',
                align: 'center',
                width: '100',
            },
            {
                title: '角色名',
                field: 'roleName',
                align: 'center',
                width: '100',
            },
            {
                title: '角色等级',
                field: 'roleLevel',
                align: 'center',
                width: '100',
            },
            {
                title: '客户端版本',
                field: 'clientVersion',
                align: 'center',
                width: '100'

            },
            {
                title: 'stepNum',
                field: 'stepNum',
                align: 'center',
                width: '100',
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
                width: '80',

            },
            {
                title: '机器人数',
                field: 'robotCount',
                align: 'center',
                width: '80',

            },
            {
                title: '游戏时间',
                field: 'gameTime',
                align: 'center',
                width: '80',

            },
            {
                title: '中心坐标',
                field: 'axis',
                align: 'center',
                width: '80',

            },
            {
                title: '当时排名',
                field: 'rank',
                align: 'center',
                width: '80',

            },
            {
                title: '当时击杀玩家数',
                field: 'killPlayers',
                align: 'center',
                width: '100',

            },
            {
                title: '当时装备头部ID',
                field: 'head',
                align: 'center',
                width: '150',

            },
            {
                title: '当时装备身体ID',
                field: 'body',
                align: 'center',
                width: '150',

            },
            {
                title: '当时装备武器ID',
                field: 'arms',
                align: 'center',
                width: '150',

            },
            {
                title: '当时特殊能力ID',
                field: 'sandSkill',
                align: 'center',
                width: '150'

            },
            {
                title: '当时备用特殊能力ID组',
                field: 'sandSkillStock',
                align: 'center',
                width: '170',

            },
            {
                title: '当时兴奋剂数量',
                field: 'dope',
                align: 'center',
                width: '150',

            },
            {
                title: '当时药品数量',
                field: 'drug',
                align: 'center',
                width: '100',

            },
            {
                title: '当时炸弹数量',
                field: 'bomb',
                align: 'center',
                width: '100',

            },
            {
                title: '当时铭文ID组',
                field: 'rune',
                align: 'center',
                width: '100',

            },
            {
                title: '当时击杀Npc数',
                field: 'killNpcs',
                align: 'center',
                width: '120',

            },
            {
                title: '技能等级',
                field: 'skillLevels',
                align: 'center',
                width: '100',

            },
            {
                title: '模式分类',
                field: 'model',
                align: 'center',
                width: '100',
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
        ]
    });
    t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
        $("#pull-right").css("display", "none");
    });
}

//留存图形
// function AddUser(data) {
// 	var chart=null
// 	var arr = [];
// 	var arr4 = [];
// 	for (var i = 0; i < data.data[0].length; i++) {
// 		var date=data.data[0][i].logTime
// 		var index=date.indexOf(' ')
// 		var someDate = date.substring(0,index);
// 		var rq = data.data[0][i].device_count
// 		arr.push(rq)
// 		arr4.push(someDate)
// 	}
//    chart = Highcharts.chart('div-one', {
// 		chart: {
// 			type: 'spline',
// 			backgroundColor: {
// 				stops: [
// 					[0, 'rgb(54, 54, 54)']
// 				]
// 			},
// 		},
// 		title: {
// 			text: ''
// 		},
// 		credits: {
// 			enabled: false // 禁用版权信息
// 		},
//         exporting: {
//             enabled:false,//默认为可用，当设置为false时，图表的打印及导出功能失效
//             filename:'注册数据',//导出的文件名
//         },
// 		xAxis: {
// 			 plotLines:[{
// 			        color:'white',            //线的颜色
// 			        dashStyle:'longdashdot',//标示线的样式，默认是solid（实线），这里定义为长虚线
// 			        value:this,                //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
// 			        width:1                 //标示线的宽度，2px
// 			    }],
// 			gridLineWidth: .5,
//             gridLineColor:'#363636',
// 			gridLineDashStyle:"Dash",
//             tickmarkPlacement:'on',
// 			type: 'datetime',
// 			categories: arr4,
// 			labels: {
// 				enable: true,
//
// 				style: {
// 					color: '#fff'
// 				}
// 			}
// 		},
// 		tooltip: {
//             shared: true,
//             crosshairs:{
//                 width: 1,
//                 color: '#ffffff',
//                 dashStyle: 'Dash'
//             },
// 			 backgroundColor: '#1B1B1B',   // 背景颜色
// 			    borderColor: '#1B1B1B',         // 边框颜色
// 			    borderRadius: 2,             // 边框圆角
//                 opacity:'.6',
//                 // useHTML: true,
// 			    style: {                      // 文字内容相关样式
// 			        color: "#ffffff",
// 					opacity:'.7',
// 			        fontSize: "12px",
// 			        fontFamily: "Courir new",
// 			    },
// 		},
// 		yAxis: {
//             title: {
//                 text: ''
//             },
//             gridLineColor:'#707070',
// 			labels: {
// 				format: '{value}',
// 				style: {
// 					color: 'rgb(218,213,213)',
//
// 				}
// 			}
// 		},
//        legend: {
//            align: 'right', //水平方向位置
//            verticalAlign: 'top', //垂直方向位置
//            // x: 50, //距离x轴的距离
//            y: -30, //距离Y轴的距离
//            itemStyle: {
//                color: '#c0c0c0',
//            },
//            itemHoverStyle: {
//                color: '#fff'
//            }
//        },
// 		plotOptions: {
// 			series: {
// 				lineWidth: 2,
// 				color:"#ffb665"
// 			}
// 		},
// 		series: [{
// 			id: 'exSeries',
// 			name: '次日留存',
// 			data: arr,
//             lineWidth: 2,
//             color:"#737AE8"
// 		},{
//             name: '7日留存',
//             data: arr,
//             lineWidth: 2,
//             color:"#FFB665"
//         },{
//                 name: '30日留存',
//                 data: arr,
//                 lineWidth: 2,
//                 color:"#4A2AFF"
//             }],
// 	});
// }