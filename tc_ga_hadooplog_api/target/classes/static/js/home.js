
change()
// function load() {
//     $(".right").mLoading("show");
// }
function onblu(){
    var timeMM= document.getElementsByClassName('el-range-input')
    var  texts=timeMM[0].value
    var  texte=timeMM[1].value
    var serverSub= $("#district").val(); //区服
    var model= $("#model").val();
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    retentionTable(serverSub,texts,texte,model,)
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
            $("#channel").each(function() {
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
            $('#Scope').each(function() {
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
    var text5= $("#district").val(); //区服
    var model= $("#model").val();
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
        url: "../getRoomAnalysis.action",
        async: true,
        data: {
            serverId: text5,
            startTime: text1,
            endTime:textTime,
            model:model
        },
        success: function (ob) {
            // AddUser(ob);
            retentionTable(text5,text1,textTime,model,)
            // $(document.body).mLoading("hide");
        }
    });
}
function retentionTable(text5,text1,textTime,model,) {
    $("#pull-right").css("display", "block");
    $("#real-datatableAll").bootstrapTable('destroy');
    var t = $("#real-datatableAll").bootstrapTable({
        url: '../getRoomAnalysis.action',
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
        queryParamsType: "",
        striped: true, //设置为 true 会有隔行变色效果
        undefinedText: "0", //当数据为 undefined 时显示的字符
        // pagination: true, //分页
        paginationLoop: false,
        // paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
        showToggle: false, //是否显示 切换试图（table/card）按钮
        showColumns: "true", //是否显示 内容列下拉框
        pageNumber: 1, //如果设置了分页，首页页码
        // showPaginationSwitch:true,//是否显示 数据条数选择框
        //pageSize: 20, //如果设置了分页，页面数据条数
        //pageList: [5, 10, 20, 40,], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
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
                model:model
            };
        },
        idField: "logId", //指定主键列
        columns: [{
            title: '玩家数', //玩家数
            field: 'bbb', //json数据中rows数组中的属性名
            align: 'center',
            formatter:function(value, row, index){
                var step
                if(row.stepNum == 3001  || row.stepNum == 4001 ){
                    step = "起飞时玩家数"
                }else if(row.stepNum == 3002  || row.stepNum == 4002 ){
                    step = "第一圈缩圈开始玩家数"
                }else if(row.stepNum == 3003  || row.stepNum == 4003 ){
                    step = "第一圈缩圈结束玩家数"
                }else if(row.stepNum == 3004  || row.stepNum == 4004 ){
                    step = "第二圈缩圈开始玩家数"
                }else if(row.stepNum == 3005  || row.stepNum == 4005 ){
                    step = "第二圈缩圈结束玩家数"
                }else if(row.stepNum == 3006  || row.stepNum == 4006 ){
                    step = "第三圈缩圈开始玩家数"
                }else if(row.stepNum == 3007  || row.stepNum == 4007 ){
                    step = "第三圈缩圈结束玩家数"
                }else if(row.stepNum == 3008  || row.stepNum == 4008 ){
                    step = "第四圈缩圈开始玩家数"
                }else if(row.stepNum == 3009  || row.stepNum == 4009 ){
                    step = "第四圈缩圈结束玩家数"
                }else if(row.stepNum == 3010  || row.stepNum == 4010 ){
                    step = "第五圈缩圈开始玩家数"
                }else if(row.stepNum == 3011  || row.stepNum == 4011 ){
                    step = "第五圈缩圈结束玩家数"
                }else if(row.stepNum == 3012  || row.stepNum == 4012 ){
                    step = "第六圈缩圈开始玩家数"
                }else if(row.stepNum == 3013  || row.stepNum == 4013 ){
                    step = "第六圈缩圈结束玩家数"
                }
                return step
            }
        },
            {
                title: '周期内对局总计均值',
                field: 'playerAvg',
                align: 'center'
            },
            {
                title: '机器人数',
                field: 'aaa',
                align: 'center',
                formatter:function(value, row, index){
                    var step
                    if(row.stepNum == 3000){
                        return false
                    }else
                    if(row.stepNum == 3001 || row.stepNum == 4001){
                        step = "起飞时机器人数"
                    }else if(row.stepNum == 3002  || row.stepNum == 4002 ){
                        step = "第一圈缩圈开始玩家数"
                    }else if(row.stepNum == 3003  || row.stepNum == 4003 ){
                        step = "第一圈缩圈结束玩家数"
                    }else if(row.stepNum == 3004  || row.stepNum == 4004 ){
                        step = "第二圈缩圈开始玩家数"
                    }else if(row.stepNum == 3005  || row.stepNum == 4005 ){
                        step = "第二圈缩圈结束玩家数"
                    }else if(row.stepNum == 3006  || row.stepNum == 4006 ){
                        step = "第三圈缩圈开始玩家数"
                    }else if(row.stepNum == 3007  || row.stepNum == 4007 ){
                        step = "第三圈缩圈结束玩家数"
                    }else if(row.stepNum == 3008  || row.stepNum == 4008 ){
                        step = "第四圈缩圈开始玩家数"
                    }else if(row.stepNum == 3009  || row.stepNum == 4009 ){
                        step = "第四圈缩圈结束玩家数"
                    }else if(row.stepNum == 3010  || row.stepNum == 4010 ){
                        step = "第五圈缩圈开始玩家数"
                    }else if(row.stepNum == 3011  || row.stepNum == 4011 ){
                        step = "第五圈缩圈结束玩家数"
                    }else if(row.stepNum == 3012  || row.stepNum == 4012 ){
                        step = "第六圈缩圈开始玩家数"
                    }else if(row.stepNum == 3013  || row.stepNum == 4013 ){
                        step = "第六圈缩圈结束玩家数"
                    }
                    return step
                }
            },
            {
                title: '周期内对局总计均值',
                field: 'robotAvg',
                align: 'center'
            },

        ]
    });

    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
        $("#pull-right").css("display", "none");
    });
}
