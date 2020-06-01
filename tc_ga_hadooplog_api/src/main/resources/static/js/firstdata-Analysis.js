change()

// function load() {
//     $(".right").mLoading("show");
// }

function onblu() {
    var timeMM = document.getElementsByClassName('el-range-input')
    var texts = timeMM[0].value
    var texte = timeMM[1].value

    retentionTable(texts, texte,)
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
    var time
    var text1
    var textTime
    // var aa=vm.ruleForm.dateValue
    var date = new Date();
    var now=new Date(date-24*3600*1000)
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
    $.ajax({
        type: "post",
        url: "../queryFirstLoginAnalysis.action",
        async: true,
        data: {
            startTime: text1,
            endTime: textTime,
        },
        success: function (ob) {
            // AddUser(ob);
            retentionTable(text1, textTime,)
            // $(document.body).mLoading("hide");
        }
    });
}

function retentionTable(text1, textTime,) {
    $("#pull-right").css("display", "block");
    $("#real-datatableAll").bootstrapTable('destroy');
    var t = $("#real-datatableAll").bootstrapTable({
        url: '../queryFirstLoginAnalysis.action',
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
                startTime: text1,
                endTime: textTime,
            };
        },
        idField: "logId", //指定主键列
        columns: [
            {
                title: '日期',
                field: 'logTime',
                width: '100',
                align: 'center',
                formatter: function (value, row, index) {//自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
                    var html = ('<span>' + row.logTime.substr(0, 10) + '</span>');
                    return html;
                }
            },
            {
                title: '新登用户',
                field: 'newUser',
                align: 'center',
                width: '100'
            },
            {
                title: '新登进入对局用户',
                field: 'enterTheGameUser',
                align: 'center',
                width: '180'

            },
            {
                title: '新登未进入对局用户',
                field: 'noGameUserEntered',
                align: 'center',
                width: '180'
            },
            {
                title: '障碍率',
                align: 'center',
                width: '100',

                formatter: function (value, row, index) {
                    console.log(typeof row.noGameUserEntered)
                    console.log(typeof row.newUser)
                    console.log(String(Number(row.noGameUserEntered) / Number(row.newUser))=='NaN')
                    var xiaoshu = String(Number(row.noGameUserEntered) / Number(row.newUser))=='NaN'?0:(Number(row.noGameUserEntered) / Number(row.newUser)) * 100;
                    // xiaoshu=='NaN'?0:xiaoshu
                    console.log(xiaoshu)
                    xiaoshu = xiaoshu.toFixed(2);
                    return xiaoshu + '%';
                }
            },
            {
                title: '新登有结算用户',
                field: 'settlementUser',
                align: 'center',
                width: '180'
            },
            {
                title: '登入游戏无结算记录用户',
                field: 'noSettlementUser',
                align: 'center',
                width: '180'
            },
            {
                title: '障碍率',
                align: 'center',
                width: '150',
                formatter: function (value, row, index) {
                     var xiaoshu2 = String((Number(row.enterTheGameUser) - Number(row.settlementUser)) / Number(row.newUser))==="NaN"?0:(Number(row.enterTheGameUser) - Number(row.settlementUser)) / Number(row.newUser);
                     console.log(Number(row.enterTheGameUser) - Number(row.settlementUser),Number(row.newUser))
                    xiaoshu2 = (xiaoshu2 * 100).toFixed(2);
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
                align: 'center',
                width: '180'
            },
            {
                title: '1局用户中有2局行为者',
                field: 'twoPlayersInOneGame',
                align: 'center',
                width: '180'
            },
            {
                title: '排异后1局用户',
                field: 'rejectAfterTheGameUser',
                align: 'center',
                width: '180'
            },
            {
                title: '新登1局用户中离线结算',
                field: 'oneGameOffLineSettlement',
                align: 'center',
                width: '180'
            },
            {
                title: '障碍率',
                align: 'center',
                width: '150',
                formatter: function (value, row, index) {
                    var xiaoshu3 = String(Number(row.oneGameOffLineSettlement) / Number(row.newUser))==="NaN"?0:Number(row.oneGameOffLineSettlement) / Number(row.newUser) * 100;
                    xiaoshu3 = xiaoshu3.toFixed(2);
                    return xiaoshu3 + '%';
                }
            },
            {
                title: '新登1局用户中正常结算',
                field: 'oneGameOnLineSettlement',
                align: 'center',
                width: '180'
            },
            {
                title: '1局用户中吃鸡数',
                field: 'onLineRankingFirst',
                align: 'center',
                width: '180'
            },
            {
                title: '1局离线结算用户中吃鸡数',
                field: 'offLineRankingFirst',
                align: 'center',
                width: '180'
            }
        ]
    });
    t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
        $("#pull-right").css("display", "none");
    });
}
