//
// //累计新增图表与表格切换按钮
// $("#real-histogram").click(function () {
// 	$(".real-table").addClass("real-yin")
// 	$("#div-one").removeClass("real-yin")
// })
//
// $("#real-sheet").click(function () {
// 	$("#div-one").addClass("real-yin")
// 	$(".real-table").removeClass("real-yin")
// })
// $("#real-histogramJ").click(function () {
//     $(".real-table-J").addClass("real-yinJ")
//     $("#div-J").removeClass("real-yinJ")
// })
// $("#real-sheetJ").click(function () {
//     $("#div-J").addClass("real-yinJ")
//     $(".real-table-J").removeClass("real-yinJ")
// })
// //活跃玩家
// $("#real-histogramA").click(function () {
// 	$(".real-table-A").addClass("real-yinA")
// 	$("#div-A").removeClass("real-yinA")
// })
// $("#real-sheetA").click(function () {
// 	$("#div-A").addClass("real-yinA")
// 	$(".real-table-A").removeClass("real-yinA")
// })
//
//
// //活跃
// $("#real-histogram2").click(function () {
// 	$(".real-table-one").addClass("real-yin2")
// 	$("#div-two").removeClass("real-yin2")
// })
// $("#real-sheet2").click(function () {
// 	$("#div-two").addClass("real-yin2")
// 	$(".real-table-one").removeClass("real-yin2")
// })
// //付费人数
// $("#real-histogram3").click(function () {
// 	$(".real-table-two").addClass("real-yin3")
// 	$("#div-three").removeClass("real-yin3")
// })
// $("#real-sheet3").click(function () {
// 	$("#div-three").addClass("real-yin3")
// 	$(".real-table-two").removeClass("real-yin3")
// })
// //付费金额
// $("#real-histogram4").click(function () {
// 	$(".real-table-four").addClass("real-yin4")
// 	$("#div-four").removeClass("real-yin4")
// })
// $("#real-sheet4").click(function () {
// 	$("#div-four").addClass("real-yin4")
// 	$(".real-table-four").removeClass("real-yin4")
// })
//3个p标签点击事件
$("#real-p1").click(function () {
    $("#real-p1").css("background-color", "#272727").siblings().css("background-color", "#363636");
    $("#real-inner>.main").addClass("reveal").siblings().removeClass("reveal")
    $(".amount_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".pay_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".firstin_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".activity_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".register_num").parent().css("background-color", "rgba(43,60,79,0.5)")
});
$("#real-p6").click(function () {
    $("#real-pA").css("background-color", "#272727").siblings().css("background-color", "#363636");
    $("#real-inner>.mainA").addClass("reveal").siblings().removeClass("reveal")
    $(".amount_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".pay_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".register_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".firstin_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".activity_num").parent().css("background-color", "rgba(43,60,79,0.5)")
});
$("#real-pJ").click(function () {
    $("#real-pJ").css("background-color", "#272727").siblings().css("background-color", "#363636");
    $("#real-inner>.mainJ").addClass("reveal").siblings().removeClass("reveal")
    $(".amount_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".pay_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".activity_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".register_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".firstin_num").parent().css("background-color", "rgba(43,60,79,0.5)")
});
$("#real-p2").click(function () {
    $("#real-p2").css("background-color", "#272727").siblings().css("background-color", "#363636");
    $("#real-inner>.mainN").addClass("reveal").siblings().removeClass("reveal")
    $(".register_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".firstin_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".activity_num").parent().css("background-color", "rgba(43,60,79,0)")
    $(".amount_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".pay_num").parent().css("background-color","rgba(43,60,79,0.5)")
});
$("#real-p4").click(function () {
    $("#real-p4").css("background-color", "#272727").siblings().css("background-color", "#363636");
    $("#real-inner>.mainM").addClass("reveal").siblings().removeClass("reveal")
    $(".register_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".firstin_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".activity_num").parent().css("background-color", "rgba(43,60,79,0)")
    $(".pay_num").parent().css("background-color","rgba(43,60,79,0)")
    $(".amount_num").parent().css("background-color","rgba(43,60,79,0.5)")
});
change()
function change() {
    $('#district').css('display','block')
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
                buttonWidth: '80%',
                nonSelectedText: '请选择',
                maxHeight: 200,
                numberDisplayed: 1,
                includeSelectAllOption: true,
                selectAllText: '全选/全不选', //全选按钮显示的文本
                nSelectedText: '项被选中',
                allSelectedText: '已选中所有区服',
            });
            homedata(text1,textTime)
        }
    });
}
function onblu() {
    $("#real-datatable").bootstrapTable('destroy');
    $("#real-datatableJ").bootstrapTable('destroy');
    $("#real-datatableA").bootstrapTable('destroy');
    $("#real-datatableAll").bootstrapTable('destroy');
    $("#real-datatableN").bootstrapTable('destroy');
    $("#real-datatableshake").bootstrapTable('destroy');
    $("#real-data-tableM").bootstrapTable('destroy');
    $("#real-tbody").empty();
    $("#real-tbodyJ").empty();
    $("#real-tbodyA").empty();
    $("#real-tbodyAll").empty();
    $("#real-tbodyN").empty();
    $("#real-tbodyshake").empty();
    $("#leiji").empty();
    $("#activation").empty();
    $("#guanwang").empty();
    $("#huo").empty();
    $("#money").empty();
    $("#ren").empty();
    $("#jin").empty();
    $("#peopleNum").empty();
    $("#averageNum").empty();
    $("#real-datatableAll").bootstrapTable('destroy');
    var timeMM= document.getElementsByClassName('el-range-input')
    var  texts=timeMM[0].value//开始时间
    var  texte=timeMM[1].value//结束时间
    homedata(texts,texte);
};
function homedata(text1,textTime) {
    $('#div-one').css('display','none')
    $('#div-J').css('display','none')
    $('#div-A').css('display','none')
    $('#div-N').css('display','none')
    $('#div-M').css('display','none')
    $('#real-datatableAll').css('display','none')
    $('#loadregister').css('display','block')
    $('#loadfirst').css('display','block')
    $('#loadactive').css('display','block')
    $('#loadpay').css('display','block')
    $('#loadamount').css('display','block')
    $('#loadtable').css('display','block')
    var text5 = $("#district").val(); //区服
    var tabledata
    if (text5 != null) {
        text5 = text5.join(",");
    }
    $.ajax({
        type: "post",
        url: "../queryFirstLoginByChannel.action",
        async: true,
        data: {
            serverId: text5,
            startTime: text1,
            endTime:textTime
        },
        success: function (ob) {
            console.log(111111,ob)
            var c = Number(ob.rows)
            onreal(ob);
            OfficaNum(ob);
            Activation(ob);
            AddUser(ob);
            WoCao(ob)
            ZhengEx(ob)
        }
    });
    $.ajax({
        type: "post",
        url: "../queryFirstLoginByChannel.action",
        async: true,
        data: {
            serverId: text5,
            startTime: text1,
            endTime:textTime
        },
        success: function (ob) {
            tabledata=(ob.rows[1].reverse())
            tableAll(tabledata)
            $(document.body).mLoading("hide")
        }
    });
}
function tableAll(tabledata){
    console.log(tabledata)
        $('#loadpay').css('display','none')
        $('#loadamount').css('display','none')
        $('#loadtable').css('display','none')
        $('#div-N').css('display','block')
        $('#div-M').css('display','block')
        $('#real-datatableAll').css('display','block')
        $("#real-datatableAll").bootstrapTable('destroy');
        var t = $("#real-datatableAll").bootstrapTable({
            // url: '../queryHomeDateTable.action',
            // method: 'post',
            // dataType: "json",
            // contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
            queryParamsType: "",
            striped: true, //设置为 true 会有隔行变色效果
            undefinedText: "空", //当数据为 undefined 时显示的字符
            pagination: true, //分页
            paginationLoop: false,
            // paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
            showToggle: false, //是否显示 切换试图（table/card）按钮
            // showColumns: "true", //是否显示 内容列下拉框
            pageNumber: 1, //如果设置了分页，首页页码
            // showPaginationSwitch:true,//是否显示 数据条数选择框
            pageSize: 30, //如果设置了分页，页面数据条数
            pageList: [10, 30, 50, 100,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
            paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
            paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
            // singleSelect: false,//设置True 将禁止多选
            search: false, //显示搜索框
            data_local: "zh-US", //表格汉化
            sidePagination: "client", //服务端处理分页
            // queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
            //     return { //这里的params是table提供的
            //         // pageIndex: params.pageNumber, //从数据库第几条记录开始
            //         // pageSize: params.pageSize, //找多少条
            //         serverId: text5,
            // 		startTime: text1,
            // 		endTime:textTime
            //     };
            // },
            data:tabledata,
            idField: "logId", //指定主键列
            columns: [
                {
                    title: '时间',
                    field: 'Nut',
                    align: 'center',
                    width:300,
                    formatter: function(value, data, index) {
                        // console.log('时间',data)
                        let Nut=data.logTime.slice(0,11)
                        // console.log(value, data, index)
                        return "<span class='firstin'>" +Nut  + "</span>"
                    }
                },
                {
                    title: '渠道总数',
                    field: 'Num',
                    align: 'center',
                    width:300,
                    formatter: function(value, rows, index) {
                        // console.log("rows",rows)
                        if(rows == ''){
                            return "<span class='register_num'>" + 0 + "</span>"
                        }else{
                            let Num=Number(rows.channelOne)+Number(rows.channelTwo)+Number( rows.channelThree)+Number( rows.channelFour)
                            return "<span class='register_num'>" + Num + "</span>"
                        }

                    }
                },
                {
                    title: 'TapTap渠道包',
                    field: 'channelOne',
                    align: 'center',
                    width:300,
                    formatter: function(value, data, index) {
                        // console.log('value', data, 'index')
                        return "<span class='firstin_num'>" + data.channelOne + "</span>"
                    }
                },
                {
                    title: '好游快报渠道包',
                    field: 'channelTwo',
                    align: 'center',
                    width:300,
                    formatter: function(value, rows, index) {
                        return "<span class='activity_num'>" + rows.channelTwo + "</span>"
                    }
                },
                {
                    title: '4399渠道包',
                    field: 'channelThree',
                    align: 'center',
                    width:300,
                    formatter: function(value, rows, index) {
                        return "<span class='pay_num'>" + rows.channelThree + "</span>"
                    }
                },
                {
                    title: '黑鲨渠道包',
                    field: 'channelFour',
                    align: 'center',
                    width:300,
                    formatter: function(value, rows, index) {
                        return "<span class='amount_num'>" + rows.channelFour + "</span>"
                    }
                }

            ]
        });

    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
        $(".register_num").parent().css("background-color", "rgba(43,60,79,0.5)")
    });
}
window.setInterval(function () {
    var text5 = $("#district").val(); //区服
    var text1 = vm.ruleForm.dateValue[0]
    var textTime = vm.ruleForm.dateValue[1]
    if (text5 != null) {
        text5 = text5.join(",");
    }
    $.ajax({
        type: "post",
        url: "../queryFirstLoginByChannel.action",
        async: false,
        data: {
            serverId: text5,
            startTime: text1,
            endTime: textTime
        },
        success: function (ob) {
            var c = Number(ob.rows)
            console.log(ob)
            if (ob.totalAddUser == "NaN" || ob.totalAddUser == null) {//总渠道
                ob.totalAddUser = 0;
            }
            if (ob.rows[0].channelOne == "NaN" || ob.rows[0].channelOne == null) {//TapTap
                ob.rows[0].channelOne = 0;
            }
            if (ob.rows[0].channelTwo == "NaN" || ob.rows[0].channelTwo == null) {//好游渠道
                ob.rows[0].channelTwo = 0;
            }
            if (c == "NaN" || c == null) {
                c = 0;
            }
            if (ob.rows[0].channelThree == "NaN" || ob.rows[0].channelThree == null) {//4399
                ob.rows[0].channelThree = 0;
            }
            if (ob.rows[0].channelFour == "NaN" || ob.rows[0].channelFour == null) {//黑鲨
                ob.rows[0].channelFour = 0;
            }
            ob.rows[0].totalAddUser=ob.rows[0].channelOne+ob.rows[0].channelTwo+ob.rows[0].channelThree+ob.rows[0].channelFour//总渠道
            // if (ob.firstLoginNum == "NaN" || ob.firstLoginNum == null) {//首激
            //     ob.firstLoginNum = 0;
            // }
            c = c * 100;
            c = c.toFixed(2);
            ob.rows[0].payAmount = ob.rows[0].payAmount * 100;
            ob.rows[0].payAmount = ob.rows[0].payAmount.toFixed(2);
            $("#leiji").text('+'+ob.rows[0].totalAddUser);//总渠道
            $('#activation').text('+'+ob.rows[0].channelOne)//taptap渠道包
            $("#averageNum").text('+'+ob.rows[0].channelTwo);//好游快爆渠道包
            $("#huo").text('+'+ob.rows[0].channelThree);//4399渠道包
            $("#money").text('+'+ob.rows[0].channelFour);//黑鲨渠道包

        }
    });
}, 100000)
function onreal(ob) {
    console.log(ob)
    if(ob.rows[0]==null){
        alert('暂无数据')
        $("#leiji").text('+'+0);//总渠道
        $('#activation').text('+'+0)//taptap渠道包
        $("#averageNum").text('+'+0);//好游快爆渠道包
        $("#huo").text('+'+0);//4399渠道包
        $("#money").text('+'+0);//黑鲨渠道包
    }else{
        var c = Number(ob.rows)

        if (ob.totalAddUser == "NaN" || ob.totalAddUser == null) {//总渠道
            ob.totalAddUser = 0;
        }
        if (ob.rows[0].channelOne == "NaN" || ob.rows[0].channelOne == null) {//TapTap
            ob.rows[0].channelOne = 0;
        }
        if (ob.rows[0].channelTwo == "NaN" || ob.rows[0].channelTwo == null) {//好游渠道
            ob.rows[0].channelTwo = 0;
        }
        if (c == "NaN" || c == null) {
            c = 0;
        }
        if (ob.rows[0].channelThree == "NaN" || ob.rows[0].channelThree == null) {//4399
            ob.rows[0].channelThree = 0;
        }
        if (ob.rows[0].channelFour == "NaN" || ob.rows[0].channelFour == null) {//黑鲨
            ob.rows[0].channelFour = 0;
        }
        ob.rows[0].totalAddUser=ob.rows[0].channelOne+ob.rows[0].channelTwo+ob.rows[0].channelThree+ob.rows[0].channelFour//总渠道
        // if (ob.firstLoginNum == "NaN" || ob.firstLoginNum == null) {//首激
        //     ob.firstLoginNum = 0;
        // }
        c = c * 100;
        c = c.toFixed(2);
        ob.rows[0].payAmount = ob.rows[0].payAmount * 100;
        ob.rows[0].payAmount = ob.rows[0].payAmount.toFixed(2);
        $("#leiji").text('+'+ob.rows[0].totalAddUser);//总渠道
        $('#activation').text('+'+ob.rows[0].channelOne)//taptap渠道包
        $("#averageNum").text('+'+ob.rows[0].channelTwo);//好游快爆渠道包
        $("#huo").text('+'+ob.rows[0].channelThree);//4399渠道包
        $("#money").text('+'+ob.rows[0].channelFour);//黑鲨渠道包


        // $("#ren").text(c + "%");

        //总渠道导出
        for (var i = 0; i < ob.rows[1].length; i++) {
            let Numm=ob.rows[1][i].channelOne+ob.rows[1][i].channelTwo+ob.rows[1][i].channelThree+ob.rows[1][i].channelFour
            $("#real-tbody").append(
                "<tr><td>" + ob.rows[1][i].logTime.substring(0, ob.rows[1][i].logTime.indexOf(' ')) +
                "</td><td>" +Numm+
                "</td></tr>"
            )
            // console.log( Numm)
        };

        $("#real-datatable").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
        //tap渠道部
        for (var i = 0; i < ob.rows[1].length; i++) {
            $("#real-tbodyA").append(
                "<tr><td>"
                + ob.rows[1][i].logTime.substring(0, ob.rows[1][i].logTime.indexOf(' '))+"</td><td>"
                + ob.rows[1][i].channelTwo +
                "</td></tr>"
            )
        };
        $("#real-datatableA").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
        for (var i = 0; i < ob.rows[1].length; i++) {
            $("#real-tbodyJ").append(
                "<tr><td>" + ob.rows[1][i].logTime.substring(0, ob.rows[1][i].logTime.indexOf(' ')) +
                "</td><td>" + ob.rows[1][i].channelOne +
                "</td></tr>"
            )
        };
        $("#real-datatableJ").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })


        for (var i = 0; i < ob.rows[1].length; i++) {
            $("#real-tbodyN").append(
                "<tr><td>" + ob.rows[1][i].logTime.substring(0, ob.rows[1][i].logTime.indexOf(' ')) +
                "</td><td>" + ob.rows[1][i].channelThree +
                "</td></tr>"
            )
        };
        $("#real-datatableN").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })

        for (var i = 0; i < ob.rows[1].length; i++) {
            $("#real-tbodyshake").append(
                "<tr><td>" + ob.rows[1][i].logTime.substring(0, ob.rows[1][i].logTime.indexOf(' ')) +
                "</td><td>" + ob.rows[1][i].channelFour +
                "</td></tr>"
            )
        };
        $("#real-datatableshake").bootstrapTable({
            method: 'post',
            cache: false,
            height: 560,
            striped: true,
            pagination: false,
            pageSize: 20,
            pageNumber: 1,
            pageList: [10, 20, 50, 100, 200, 500],
            sidePagination: 'server',
            search: false,
            showColumns: false,
            showRefresh: false,
            showExport: false,
            exportTypes: ['csv', 'txt', 'xml'],
            search: false,
            clickToSelect: false,
        })
    }


}
var circleA='<span style="height: 10px;width:10px;border-radius: 50%;background: #10CFBD"></span>'
//总渠道
function AddUser(data) {
    $('#loadregister').css('display','none')
    $('#div-one').css('display','block')
    var chart = null;
    var arr = [];
    var arr4 = [];
    console.log(data.rows[1].length,111)
    // if(data.rows[1].length==0){
    //     console.log('meiyoushuu')
    // }
    for (var i = 0; i < data.rows[1].length; i++) {
        // console.log(data)
        var date=data.rows[1][i].logTime.slice(0,11)
        var rq = data.rows[1][i].channelOne+data.rows[1][i].channelTwo+data.rows[1][i].channelThree+data.rows[1][i].channelFour
        arr.push(rq)
        arr4.push(date)

    }
    console.log(arr,arr4)
    chart = Highcharts.chart('div-one', {
        chart: {
            marginLeft:60,
            type: 'spline',
            height:'330px',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text:'渠<br />道<br />总<br />数<br />',
            align: 'left',
            verticalAlign: 'middle',
            x:-10,
            y: -60,
            useHTML:true,
            style: {
                color: '#999999',
                fontWeight:'400',
                fontSize:'12',
            }
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineWidth: .5,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            type: 'datetime',
            categories: arr4,
            labels: {
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
            // useHTML: true,
            style: {                      // 文字内容相关样式
                color: "#10CFBD",
                opacity:'1',
                fontSize: "12px",
            },
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
            // formatter: function () {
            // 	return this.x+'<br />'+'注册玩家:' +this.point.y
            // }
        },
        yAxis: {
            title: {
                text: ''
            },
            lineWidth:1,
            lineColor:'#707070',
            gridLineColor:'#707070',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            }
        },
        legend: {
            enabled:false,
        },
        plotOptions: {
            series: {
                // fillColor: {
                //     linearGradient: [0, 0, 0, 150],
                //     stops: [
                //         [0, Highcharts.getOptions().colors[0]],
                //         [.5, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                //     ]
                // },
                lineWidth: 2,
                color:"#10CFBD",
            }
        },
        series: [{
            id: 'exSeries',
            name: '渠道总数',
            data: arr,
            marker: { lineColor: '#10CFBD' },
        }],
    });
}
//TapTap渠道包
function Activation(data) {
    // console.log(data)
    $('#loadfirst').css('display','none')
    $('#div-J').css('display','block')
    var chart = null;
    var arr = [];
    var arr4 = [];
    for (var i = 0; i < data.rows[1].length; i++) {
        // console.log(data)
        var date=data.rows[1][i].logTime.slice(0,11)
        var rq = data.rows[1][i].channelOne
        arr.push(rq)
        arr4.push(date)

    }
    console.log(arr,arr4)
    chart = Highcharts.chart('div-J', {
        chart: {
            marginLeft:60,
            type: 'spline',
            height:'330px',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text:'Tap<br />Tap<br />渠<br />道<br />包<br/>',
            align: 'left',
            verticalAlign: 'middle',
            x:-10,
            y: -60,
            useHTML:true,
            style: {
                color: '#999999',
                fontWeight:'400',
                fontSize:'12',
            }
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineWidth: .5,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            type: 'datetime',
            categories: arr4,
            labels: {
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
            // useHTML: true,
            style: {                      // 文字内容相关样式
                color: "#F55753",
                opacity:'1',
                fontSize: "12px",
            },
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
            // formatter: function () {
            //     return this.x+'<br />'+'首次激活:' +this.point.y
            // }
        },
        yAxis: {
            title: {
                text: ''
            },
            lineWidth:1,
            lineColor:'#707070',
            gridLineColor:'#707070',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            }
        },
        legend: {
            enabled:false,
        },
        plotOptions: {
            series: {
                // fillColor: {
                //     linearGradient: [0, 0, 0, 150],
                //     stops: [
                //         [0, Highcharts.getOptions().colors[3]],
                //         [1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
                //     ]
                // },
                lineWidth: 2,
                color:"#F55753"
            }
        },
        series: [{
            id: 'exSeries',
            name: 'TapTap渠道包',
            data: arr,
            marker: { lineColor: '#F55753' },
        }],
    });
}
//好游快报渠道包
function OfficaNum(data) {
    $('#loadactive').css('display', 'none')
    $('#div-A').css('display', 'block')
    var chart = null;
    var arr = [];
    var arr4 = [];
    for (var i = 0; i < data.rows[1].length; i++) {
        // console.log(data)
        var date=data.rows[1][i].logTime.slice(0,11)
        var rq = data.rows[1][i].channelTwo
        arr.push(rq)
        arr4.push(date)
    }
    // var partFourLeft = echarts.init(document.getElementById('div-A'));
    chart = Highcharts.chart('div-A', {
        chart: {
            marginLeft:60,
            type: 'spline',
            height:'325px',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text:'好<br />游<br />快<br />报<br />渠<br />道<br />数<br />',
            align: 'left',
            verticalAlign: 'middle',
            x:10,
            y: -60,
            useHTML:true,
            style: {
                color: '#999999',
                fontWeight:'400',
                fontSize:'12',
            }
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineWidth: .5,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            type: 'datetime',
            categories: arr4,
            labels: {
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
            // useHTML: true,
            style: {                      // 文字内容相关样式
                color: "#A873EC",
                opacity:'1',
                fontSize: "12px",
            },
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
            // formatter: function () {
            // 	return this.x+'<br />'+'注册玩家:' +this.point.y
            // }
        },
        yAxis: {
            title: {
                text: ''
            },
            lineWidth:1,
            lineColor:'#707070',
            gridLineColor:'#707070',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            }
        },
        legend: {
            enabled:false,
        },

        plotOptions: {
            series: {
                // fillColor: {
                //     linearGradient: [0, 0, 0, 150],
                //     stops: [
                //         [0, Highcharts.getOptions().colors[0]],
                //         [.5, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                //     ]
                // },
                lineWidth: 2,
                color:"#A873EC",
            }
        },
        series: [{
            id: 'exSeries',
            name: '好游快报渠道包',
            data: arr,
            marker: { lineColor: '#A873EC' },
        }],
    });
}
//4399渠道包
function WoCao(data) {
    // console.log(data)
    $('#loadfirst').css('display','none')
    $('#div-N').css('display','block')
    var chart = null;
    var arr = [];
    var arr4 = [];
    for (var i = 0; i < data.rows[1].length; i++) {
        // console.log(data)
        var date=data.rows[1][i].logTime.slice(0,11)
        var rq = data.rows[1][i].channelThree
        arr.push(rq)
        arr4.push(date)

    }
    console.log(arr,arr4)
    chart = Highcharts.chart('div-N', {
        chart: {
            marginLeft:60,
            type: 'spline',
            height:'330px',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text:'4<br />3<br />9<br />9<br />渠<br />道<br />包<br/>',
            align: 'left',
            verticalAlign: 'middle',
            x:10,
            y: -60,
            useHTML:true,
            style: {
                color: '#999999',
                fontWeight:'400',
                fontSize:'12',
            }
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineWidth: .5,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            type: 'datetime',
            categories: arr4,
            labels: {
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
            // useHTML: true,
            style: {                      // 文字内容相关样式
                color: "#CF10A2",
                opacity:'1',
                fontSize: "12px",
            },
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
            // formatter: function () {
            //     return this.x+'<br />'+'首次激活:' +this.point.y
            // }
        },
        yAxis: {
            title: {
                text: ''
            },
            lineWidth:1,
            lineColor:'#707070',
            gridLineColor:'#707070',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            }
        },
        legend: {
            enabled:false,
        },
        plotOptions: {
            series: {
                // fillColor: {
                //     linearGradient: [0, 0, 0, 150],
                //     stops: [
                //         [0, Highcharts.getOptions().colors[3]],
                //         [1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
                //     ]
                // },
                lineWidth: 2,
                color:"#CF10A2"
            }
        },
        series: [{
            id: 'exSeries',
            name: '4599渠道包',
            data: arr,
            marker: { lineColor: '#CF10A2' },
        }],
    });
}
//黑鲨渠道包
function ZhengEx(data) {
    // console.log(data)
    $('#loadfirst').css('display','none')
    $('#div-M').css('display','block')
    var chart = null;
    var arr = [];
    var arr4 = [];
    for (var i = 0; i < data.rows[1].length; i++) {
        // console.log(data)
        var date=data.rows[1][i].logTime.slice(0,11)
        var rq = data.rows[1][i].channelFour
        arr.push(rq)
        arr4.push(date)

    }
    console.log(arr,arr4)
    chart = Highcharts.chart('div-M', {
        chart: {
            marginLeft:60,
            type: 'spline',
            height:'330px',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text:'黑<br />鲨<br />渠<br />道<br />包<br/>',
            align: 'left',
            verticalAlign: 'middle',
            x:10,
            y: -60,
            useHTML:true,
            style: {
                color: '#999999',
                fontWeight:'400',
                fontSize:'12',
            }
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineWidth: .5,
            gridLineColor:'#363636',
            gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
            type: 'datetime',
            categories: arr4,
            labels: {
                style: {
                    color: '#999999'
                }
            }
        },
        tooltip: {
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
            // useHTML: true,
            style: {                      // 文字内容相关样式
                color: "#42E24F",
                opacity:'1',
                fontSize: "12px",
            },
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
            // formatter: function () {
            //     return this.x+'<br />'+'首次激活:' +this.point.y
            // }
        },
        yAxis: {
            title: {
                text: ''
            },
            lineWidth:1,
            lineColor:'#707070',
            gridLineColor:'#707070',
            labels: {
                format: '{value}',
                style: {
                    color: '#999999',

                }
            }
        },
        legend: {
            enabled:false,
        },
        plotOptions: {
            series: {
                // fillColor: {
                //     linearGradient: [0, 0, 0, 150],
                //     stops: [
                //         [0, Highcharts.getOptions().colors[3]],
                //         [1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
                //     ]
                // },
                lineWidth: 2,
                color:"#42E24F"
            }
        },
        series: [{
            id: 'exSeries',
            name: '黑鲨渠道包',
            data: arr,
            marker: { lineColor: '#42E24F' },
        }],
    });
}

//好游快报渠道包
// //活跃玩家
// function OfficaNum(data) {
//     $('#loadactive').css('display', 'none')
//     $('#div-A').css('display', 'block')
//     var chart = null;
//     var arr = [];
//     var arr4 = [];
//     for (var i = 0; i < data.rows[1].length; i++) {
//         // console.log(data)
//         var date=data.rows[1][i].logTime
//         var rq = data.rows[1][i].channelOne
//         arr.push(data)
//         arr4.push(rq)
//
//     }
//     var partFourLeft = echarts.init(document.getElementById('div-A'));
//     option = {
//         title: {
//             text: '好\n游\n快\n报\n渠\n道\n包\n ',
//             x: 'left',
//             left: '0',
//             y: 'center',
//             textStyle: {
//                 color: '#999999',
//                 fontSize: 12,
//                 fontWeight: 'normal',
//             },
//         },
//         tooltip: {
//             trigger: 'axis',
//             borderColor: '#363F48',
//             backgroundColor: '#363F48',
//             textStyle: {
//                 fontSize: 12,
//                 // color: '#ffffff',
//                 // decoration: 'none',
//                 // fontSize:'12px',
//             },
//             axisPointer: { // 坐标轴指示器，坐标轴触发有效
//                 type: 'line', // 默认为直线，可选为：'line' | 'shadow'
//                 lineStyle: {
//                     color: '#707070'
//                 },
//                 itemStyle: {
//                     normal: {
//                         borderColor: '#ffffff',
//                     }
//                 },
//             }
//         },
//         legend: {
//             show: false,
//         },
//         toolbox: {
//             show: false,
//         },
//         grid: {
//             left: '5%',
//             right: '0',
//             top: '3.2%',
//             // bottom:'16%',
//             containLabel: false
//
//         },
//         xAxis: [
//             {
//                 type: 'category',
//                 boundaryGap: true,
//                 data: arr,
//                 axisLabel: {
//                     textStyle: {
//                         color: "#999999"
//                     },
//                     formatter: "{value}"
//                 },
//                 splitLine: {
//                     lineStyle: {
//                         color: "#202020"
//                     }
//                 },
//                 axisLine: {//刻度线
//                     lineStyle: {
//                         color: "#5a5a5a"
//                     },
//                     show: true
//                 }
//             }
//         ],
//         yAxis: [
//             {
//                 type: 'value',
//                 splitNumber: 4,
//                 axisTick: {
//                     alignWithLabel: true
//                 },
//                 nameTextStyle: {
//                     color: "#ffffff"
//                 },
//                 splitLine: {
//                     lineStyle: {
//                         color: "#5a5a5a",
//                         width: 2,
//                     }
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: "#5a5a5a"
//                     }
//                 },
//                 axisLabel: {
//                     textStyle: {
//                         color: "#999999"
//                     },
//                 },
//             }
//         ],
//         series: [
//             {
//                 name: '好游快报渠道包',
//                 type: 'line',
//                 stack: '总量',
//                 areaStyle: {
//                     normal: {
//                         color: "rgba(131,80,196,0.5)",
//                         lineStyle: {
//                             color: "#8350C4"
//                         }
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: "#A873EC",
//                         // borderColor:'#ffffff',
//                         lineStyle: {
//                             color: "#A873EC"
//                         }
//                     }
//                 },
//                 symbol: 'circle',
//                 // data: oldPeople
//             },
//             //     {
//             //         name:'新账号',
//             //         type:'line',
//             //         stack: '总量',
//             //         areaStyle: {normal: {
//             //                 color: "rgba(131,80,196,0.5)",
//             //                 lineStyle: {
//             //                     color: "#8350C4"
//             //                 }
//             //             }},
//             //         itemStyle: {normal: {
//             //                 color: "#A873EC",
//             //                 // borderColor:'#ffffff',
//             //                 lineStyle: {
//             //                     color: "#A873EC"
//             //                 }
//             //             }},
//             //         symbol: 'circle',
//             //         data:newPeople
//             //     },
//             //
//         ]
//     };
//     partFourLeft.setOption(option);
// }
    // chartA = Highcharts.chart('div-A', {
    // 	chart: {
    // 		type: 'area',
    //         height:'330px',
    // 		marginLeft:60,
    // 		backgroundColor: {
    // 			stops: [
    // 				[0, 'rgb(54, 54, 54)']
    // 			]
    // 		},
    // 	},
    //     title: {
    //         text:'活<br />跃<br />账<br />号<br />',
    //         align: 'left',
    //         verticalAlign: 'middle',
    //         x:-10,
    //         y: -60,
    //         useHTML:true,
    //         style: {
    //             color: '#999999',
    //             fontWeight:'400',
    //             fontSize:'12',
    //         }
    //     },
    // 	credits: {
    // 		enabled: false // 禁用版权信息
    // 	},
    //     exporting: {
    //         enabled: false
    //     },
    //     xAxis: {
    //         lineWidth:1,
    //         lineColor:'#707070',
    //         tickColor:'#707070',
    //         gridLineWidth: .5,
    //         gridLineColor:'#363636',
    //         gridLineDashStyle:"Dash",
    //         tickmarkPlacement:'on',
    //         type: 'datetime',
    //         categories: arrArr,
    //         labels: {
    //             style: {
    //                 color: '#999999'
    //             }
    //         }
    //     },
    // 	tooltip: {
    //         shared: true,
    //         crosshairs:{
    //             width: 1,
    //             color: '#707070',
    //             dashStyle: 'Dash'
    // 		},
    //         backgroundColor: '#363F48',   // 背景颜色
    //         borderColor: '#363F48',         // 边框颜色
    //         borderRadius: 2,             // 边框圆角
    //         opacity:'1',
    //         // useHTML: true,
    //         style: {                      // 文字内容相关样式
    //             color: "#ffffff",
    //             opacity:'1',
    //             fontSize: "12px",
    //         },
    //         // useHTML: true,
    //         // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
    // 	},
    //     yAxis: {
    //         title: {
    //             text: ''
    //         },
    //         lineWidth:1,
    //         lineColor:'#707070',
    //         gridLineColor:'#707070',
    //         labels: {
    //             format: '{value}',
    //             style: {
    //                 color: '#999999',
    //
    //             }
    //         }
    //     },
    // 	legend: {
    // 		enabled:false,
    // 	},
    //     plotOptions: {
    //         // series: [{
    //         //     fillColor: {
    //         //         linearGradient: [0, 0, 0, 150],
    //         //         stops: [
    //         //             [0, Highcharts.getOptions().colors[3]],
    //         //             [1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
    //         //         ]
    //         //     },
    //         //     lineWidth: 2,
    //         //     // color:"#A873EC"
    //         // },{
    //         //     fillColor: {
    //         //         linearGradient: [0, 0, 0, 0],
    //         //         stops: [
    //         //             [0, Highcharts.getOptions().colors[3]],
    //         //             [1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
    //         //         ]
    //         //     },
    //         //     lineWidth: 2,
    //         //     // color:"#A873EC"
    //         // },]
    //     },
    // 	series: [{
    //         name:'老账号',
    //         data:oldPeople,
    //         color:'#707070',
    //         lineColor: '#707070',
    //         lineWidth: 3,
    //         marker: {
    //             lineWidth: 1,
    //             lineColor: '#707070'
    //         }
    // },{
    //         name:'新账号',
    //         data:newPeople,
    //         color:'#A873EC',
    //         lineColor: '#A873EC',
    //         lineWidth: 2,
    //         marker: {
    //             lineWidth: 1,
    //             lineColor: '#A873EC'
    //         }
    //     },
    // 	],
    // });
// }
//付费人数

////付费金额
//function PayMoney(data) {
//	var chart3 = null;
//	var arr3 = [];
//	var arr7 = []
//	for (var i = 0; i < data.data[4].length; i++) {
//		var someDate = data.data[4][i].serverId
//		var rq = data.data[4][i].device_count
//		arr3.push(rq)
//		arr7.push(someDate)
//		//	console.log(arr)
//	}
//	chart3 = Highcharts.chart('div-four', {
//		chart: {
//			type: 'column',
//			backgroundColor: {
//				stops: [
//					[0, 'rgb(54, 54, 54)']
//				]
//			},
//		},
//		title: {
//			text: ''
//		},
//		credits: {
//			enabled: false // 禁用版权信息
//		},
//		exporting: {
//			enabled: false
//		},
//		xAxis: {
//			type: 'datetime',
//			categories: arr7,
//			labels: {
//				enable: true,
//				rotation: 320,
//				style: {
//					color: '#fff'
//				}
//			}
//		},
//		tooltip: {
//			formatter: function () {
//				return '<b>' + this.series.name + '</b><br/>' +
//					this.point.y;
//			}
//		},
//		yAxis: {
//			title: {
//				text: '三日留存'
//			},
//			labels: {
//				format: '{value}',
//				style: {
//					color: '#fff'
//				}
//			}
//		},
//		legend: {
//			itemStyle: {
//				color: '#c0c0c0',
//			},
//			itemHoverStyle: {
//				color: '#fff'
//			}
//		},
//		plotOptions: {
//
//		},
//		series: [{
//			name: '三日留存',
//			data: arr3,
//		}],
//	});
// //}
// $(function () {
// 	$("#real-p3").click(function () {
// 		$('#teambtn').show()
// 		$('#teambtn2').hide()
// 	})
// //	$("#real-pA").click(function () {
// //		$('#teambtn').hide()
// //		$('#teambtn2').hide()
// //	})
// 	$("#real-p4").click(function () {
// 		$('#teambtn').hide()
// 		$('#teambtn2').show()
// 	})


// 	$("#real-p1").click(function () {
// 		$('#teambtn').hide()
// 		$('#teambtn2').hide()
// 	})
// 	$("#real-p6").click(function () {
// 		$('#teambtn').hide()
// 		$('#teambtn2').hide()
// 	})
// 	$("#real-p2").click(function () {
// 		$('#teambtn').hide()
// 		$('#teambtn2').hide()
// 	})
//
// 	$('.fenxipass').click(function(){
// 		$(".fenxi").hide()
// 	})
// 	$('#teambtn').click(function(){
// 		if($("#real-p3").hasClass('lll')==true){
// 			$(".fenxi1").show()
// 			$(".fenxi2").hide()
// 		}
// 	})
// 	$("#teambtn2").click(function(){
// 		if($("#real-p4").hasClass('llll')==true){
// 			$(".fenxi2").show()
// 			$(".fenxi1").hide()
// 		}
//
// 	})
//
// })

// function shuju(){
//     var newlogTime = $("#in1").val()
//     $("#exampleop").bootstrapTable('destroy');
//     var t =$('#exampleop').bootstrapTable({
//         url: '../getGameAccountRetain.action',
//         method: 'post',
//         dataType: "json",
//         contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
//         queryParamsType: "",
//         striped: true, //设置为 true 会有隔行变色效果
//         undefinedText: "0", //当数据为 undefined 时显示的字符
//         pagination: false, //分页
//         paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
//
//         pageNumber: 1, //如果设置了分页，首页页码
//         // showPaginationSwitch:true,//是否显示 数据条数选择框
//         pageSize: 20, //如果设置了分页，页面数据条数
//         pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
//         paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
//         paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
//         // singleSelect: false,//设置True 将禁止多选
//         search: false, //显示搜索框
//         data_local: "zh-US", //表格汉化
//         sidePagination: "server", //服务端处理分页
//         queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
//             return { //这里的params是table提供的
//                 pageIndex: params.pageNumber, //从数据库第几条记录开始
//                 pageSize: params.pageSize, //找多少条
//                 startTime:newlogTime
//             };
//         },
//         columns:[{
//             title: '时间起止',
//             field: 'startTime',
//             align: 'center',
//             formatter:function(value, row, value){
//                 return row.startTime
//             }
//         },
//             {
//                 title: '登录的有效账号对局数',
//                 field: 'gameNumStrinig',
//                 align: 'center'
//             },
//             {
//                 title: '账号数量',
//                 field: 'accountNum',
//                 align: 'center'
//             },
//             {
//                 title: '留存率',
//                 field: 'dayRetainRate',
//                 align: 'center',
//
//             }]
//
//     })
//     t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
//         $("body").mLoading("hide");
//         $(".pull-right").css("display", "block");
//
//     });
//     $("#exampleop2").bootstrapTable('destroy');
//     var t = $('#exampleop2').bootstrapTable({
//         url: '../getGameAccountRetain.action',
//         method: 'post',
//         dataType: "json",
//         contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
//         queryParamsType: "",
//         striped: true, //设置为 true 会有隔行变色效果
//         undefinedText: "0", //当数据为 undefined 时显示的字符
//         pagination: false, //分页
//         paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
//
//         pageNumber: 1, //如果设置了分页，首页页码
//         // showPaginationSwitch:true,//是否显示 数据条数选择框
//         pageSize: 20, //如果设置了分页，页面数据条数
//         pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
//         paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
//         paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
//         // singleSelect: false,//设置True 将禁止多选
//         search: false, //显示搜索框
//         data_local: "zh-US", //表格汉化
//         sidePagination: "server", //服务端处理分页
//         queryParams: function(params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
//             return { //这里的params是table提供的
//                 pageIndex: params.pageNumber, //从数据库第几条记录开始
//                 pageSize: params.pageSize, //找多少条
//                 startTime:newlogTime
//             };
//         },
//         columns:[{
//             title: '时间起止',
//             field: 'startTime',
//             align: 'center',
//             formatter:function(value, row, value){
//                 return row.startTime
//             }
//         },
//             {
//                 title: '登录的有效账号对局数',
//                 field: 'gameNumStrinig',
//                 align: 'center'
//             },
//             {
//                 title: '账号数量',
//                 field: 'accountNum',
//                 align: 'center'
//             },
//             {
//                 title: '留存率',
//                 field: 'threeDayRetainRate',
//                 align: 'center'
//             }],
//
//     })
//     t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
//         $("body").mLoading("hide");
//         $(".pull-right").css("display", "block");
//     });
//
// }
