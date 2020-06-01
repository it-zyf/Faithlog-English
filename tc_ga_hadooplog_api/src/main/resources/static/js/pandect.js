function todays() { //构建方法
    var today = new Date(); //new 出当前时间
    today.setDate(today.getDate() - 14)
    var h = today.getFullYear(); //获取年
    var m = today.getMonth() + 1; //获取月
    var d = today.getDate(); //获取日
    if(m >= 1 && m < 10) {
        m = "0" + m
    }
    if(d >= 1 && d < 10) {
        d = "0" + d
    }
    return h + "-" + m + "-" + d; //返回 年-月-日 时:分:秒
};
document.getElementById("in1").value = todays();

function today() { //构建方法
    var today = new Date(); //new 出当前时间
    var h = today.getFullYear(); //获取年
    var m = today.getMonth() + 1; //获取月
    var d = today.getDate(); //获取日
    if(m < 10) {
        m = "0" + m
    }
    if(d < 10) {
        d = "0" + d
    }
    return h + "-" + m + "-" + d; //返回 年-月-日
};
document.getElementById("in2").value = today();
//查询按钮

change()
$("body").mLoading("show");

function change() {
    $.ajax({
        type: "get",
        url: "http://150.109.167.142:9110/frontEnd/queryAreas",
        async: true,
        success: function(obj) {
            for (var i = 0; i < obj.data.length; i++) {
                $("#district").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
            };
            $("#district").each(function() {
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
                allSelectedText: '已选中所有区服'
            });
            homedata()
        }
    });
}

$("#cha").click(function() {
    $("#datatable").bootstrapTable('destroy');
    $("#datatable-one").bootstrapTable('destroy');
    $("#datatable-two").bootstrapTable('destroy');
    $("#datatable-four").bootstrapTable('destroy')
    $("#tbody").empty();
    $("#tbody-one").empty();
    $("#tbody-two").empty();
    $("#tbody-four").empty();
    $("#pandect-p1").empty();
    $("#pandect-p2").empty();
    $("#pandect-p3").empty();
    $("#pandect-p4").empty();
    homedata()
    $("body").mLoading("show");
});
//添加表格数据
function onready(obj) {
    $("#pandect-p1").prepend(obj.addUser + "<br>" + "<span style='font-size: 16px;'>注册人数</span>");
    // $("#pandect-p2").prepend(obj.officaNum + "<br>" + "<span style='font-size: 16px;'>官网累计新增账号</span>");

    $("#pandect-p2").prepend(obj.payAmount + "<br>" + "<span style='font-size: 16px;'>付费人数</span>");
    $("#pandect-p3").prepend(Math.floor(obj.avgActive * 100) / 100 + "<br>" + "<span style='font-size: 16px;'>游戏平均活跃人数</span>");
//	$("#pandect-p4").prepend(Math.floor(obj.officaAvgActive * 100) / 100 + "<br>" + "<span style='font-size: 16px;'>官网平均活跃人数</span>");
//	$("#pandect-p3").prepend(obj.payNumber + "<br>" + "<span style='font-size: 16px;'>付费人数</span>");
    $("#pandect-p4").prepend(obj.payAmount + "<br>" + "<span style='font-size: 16px;'>付费金额</span>");
    //新增账号数
    for(var i = 0; i < obj.data[0].length; i++) {
        $("#tbody").append(
            "<tr><td>" + obj.data[0][i].logTime.substring(0, obj.data[0][i].logTime.indexOf(' ')) +
            "</td><td>" + obj.data[0][i].device_count +
            "</td></tr>"
        )
    };
    $("#tbody tr").css("background", "white");
    $("#tbody tr:even").css("background", "#edf5f6");

    //	$("#datatable").bootstrapTable({
    // 		 	method: 'get',
    //          cache: false,
    //        	height:350,
    //          striped: true,
    //          pagination: false,
    //          pageSize: 10,
    //          pageNumber:1,
    //          pageList: [10, 20, 50, 100, 200, 500],
    //          sidePagination:'server',
    //          search: false,
    //          showColumns: false,
    //          showRefresh: false,
    //          showExport: false,
    //          exportTypes: ['csv','txt','xml'],
    //          search: false,
    //          clickToSelect: false,
    // 		})

    //净活跃
    for(var i = 0; i < obj.data[1].length; i++) {
        $("#tbody-one").append(
            "<tr><td>" + obj.data[1][i].logTime.substring(0, obj.data[1][i].logTime.indexOf(' ')) +
            "</td><td>" + obj.data[1][i].old_players +
            "</td><td>" + obj.data[1][i].new_players +
            "</td></tr>"
        )
    };
    $("#tbody-one tr").css("background", "white");
    $("#tbody-one tr:even").css("background", "#edf5f6");
    	$("#datatable-one").bootstrapTable({
    	 	method: 'get',
         cache: false,
       	height:350,
         striped: true,
         pagination: false,
         pageSize: 20,
         pageNumber:1,
         pageList: [10, 20, 50, 100, 200, 500],
         sidePagination:'server',
         search: false,
         showColumns: false,
         showRefresh: false,
         showExport: false,
         exportTypes: ['csv','txt','xml'],
         search: false,
         clickToSelect: false,

    	})
    //付费用户追踪
    for(var i = 0; i < obj.data[3].length; i++) {
        $("#tbody-two").append(
            "<tr><td>" + obj.data[3][i].logTime.substring(0, obj.data[3][i].logTime.indexOf(' ')) +
            "</td><td>" + obj.data[3][i].payAmount +
            "</td><td>" + obj.data[3][i].payNumber +
            "</td></tr>"
        )
    };
    $("#tbody-two tr").css("background", "white");
    $("#tbody-two tr:even").css("background", "#edf5f6");
    //	$("#datatable-two").bootstrapTable({
    //	 	method: 'get',
    //      cache: false,
    //    	height:350,
    //      striped: true,
    //      pagination: false,
    //      pageSize: 20,
    //      pageNumber:1,
    //      pageList: [10, 20, 50, 100, 200, 500],
    //      sidePagination:'server',
    //      search: false,
    //      showColumns: false,
    //      showRefresh: false,
    //      showExport: false,
    //      exportTypes: ['csv','txt','xml'],
    //      search: false,
    //      clickToSelect: false,
    // 	})
    //留存
    // for(var i = 0; i < obj.data[2].length; i++) {
    //     $("#tbody-four").append(
    //         "<tr><td>" + obj.data[2][i].logTime.substring(0, obj.data[2][i].logTime.indexOf(' ')) +
    //         "</td><td>" + Math.floor(obj.data[2][i].dayRetain * 100) / 100 +
    //         "</td><td>" + Math.floor(obj.data[2][i].threeRetain * 100) / 100 +
    //         "</td><td>" + Math.floor(obj.data[2][i].weekRetain * 100) / 100 +
    //         "</td></tr>"
    //     )
    // };
    // $("#tbody-four tr").css("background", "white");
    // $("#tbody-four tr:even").css("background", "#edf5f6");
    //	$("#datatable-four").bootstrapTable({
    //	 	method: 'get',
    //      cache: false,
    //    	height:350,
    //      striped: true,
    //      pagination: false,
    //      pageSize: 20,
    //      pageNumber:1,
    //      pageList: [10, 20, 50, 100, 200, 500],
    //      sidePagination:'server',
    //      search: false,
    //      showColumns: false,
    //      showRefresh: false,
    //      showExport: false,
    //      exportTypes: ['csv','txt','xml'],
    //      search: false,
    //      clickToSelect: false,
    // 	})
}

function homedata() {
    var text1 = $("#in1").val();
    var text2 = $("#in2").val();
    var text3 = $("#district").val();
    if(text3 != null) {
        text3 = text3.join(",");
    }
    $.ajax({
        type: "get",
        url: "../queryHomeDate.action",
        async: true,
        data: {
            serverId: text3,
            startTime: text1,
            endTime: text2
        },
        success: function(data) {
            onready(data);
            get(data);
            onget(data);
            amount(data);
            numpay(data);
            // keep(data);
            $("body").mLoading("hide")
        }
    });
}
//新增人数图表

function get(data) {
    var arr = [];
    var Arr = []
    getForm()

    function getForm() {
        for(var i = 0; i < data.data[0].length; i++) {
            var someDate = data.data[0][i].logTime.substring(0, data.data[0][i].logTime.indexOf(' '))
            someDate = someDate.replace(/-/g, "/");
            var rq = data.data[0][i].device_count
            arr.push(rq)
            Arr.push(new Date(someDate).getTime())
        }
    };
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    var chart = Highcharts.chart('container', {
        chart: {
            type: 'column',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false //禁用右上角打印
        },
        xAxis: {
            type: 'datetime',
            categories: Arr,
            labels: {
                format: '{value:%Y-%m-%d}',
                enable: true,
                rotation: 320,
                style: {
                    color: '#fff'
                }
            },
            dateTimeLabelFormats: {
                week: '%Y-%m-%d'
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' 个';
            }
        },
        yAxis: {
            title: {
                text: '新增账号数'
            },
            gridLineColor: "#c0c0c0",
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },
        legend: {
            itemStyle: {
                color: '#c0c0c0',
            },
            itemHoverStyle: {
                color: '#fff'
            }
        },
        plotOptions: {

        },
        series: [{
            name: '新增账号数',
            data: arr,
        }],
    });
}
//净活跃图表

function onget(data) {
    var arr1 = [];
    var arr2 = [];
    var arr3 = []
    active()

    function active() {
        for(var i = 0; i < data.data[1].length; i++) {
            var someDate = data.data[1][i].logTime.substring(0, data.data[1][i].logTime.indexOf(' '))
            someDate = someDate.replace(/-/g, "/");
            var rq = data.data[1][i].old_players
            var tm = data.data[1][i].new_players
            arr1.push(new Date(someDate).getTime())
            arr2.push(rq)
            arr3.push(tm)
        }
    };
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    //	window.setInterval(active,1000);
    var chart_one = Highcharts.chart('container-one', {
        chart: {
            type: 'column',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            categories: arr1,
            labels: {
                format: '{value:%Y-%m-%d}',
                enable: false,
                rotation: 320,
                style: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' 个';
            }
        },
        yAxis: {
            reversedStacks: false,
            title: {
                text: '净活跃'
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#fff'
                }
            }
        },
        legend: {
            itemStyle: {
                color: '#c0c0c0',
            },
            itemHoverStyle: {
                color: '#fff'
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
            }
        },

        series: [{
            name: '新增活跃',
            data: arr3
        }, {
            name: '留存活跃',
            data: arr2,
        }],
    });
}
//付费金额

function amount(data) {
    var arr7 = [];
    var arr8 = []
    pay()

    function pay() {
        for(var i = 0; i < data.data[3].length; i++) {
            var someDate = data.data[3][i].logTime.substring(0, data.data[3][i].logTime.indexOf(' '))
            someDate = someDate.replace(/-/g, "/");
            var rq = data.data[3][i].payAmount;
            arr7.push(rq);
            arr8.push(new Date(someDate).getTime())
        }
    };
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    //	window.setInterval(pay,1000);
    var chart_two = Highcharts.chart('container-two', {
        chart: {
            type: 'column',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            categories: arr8,
            labels: {
                format: '{value:%Y-%m-%d}',
                enable: true,
                rotation: 320,
                style: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' 元';
            }
        },
        yAxis: {
            title: {
                text: '付费额'
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#fff'
                }
            }
        },
        legend: {
            itemStyle: {
                color: '#c0c0c0',
            },
            itemHoverStyle: {
                color: '#fff'
            }
        },
        plotOptions: {},
        series: [{
            name: '付费额',
            data: arr7,
        }],
    });
}
//付费人数

function numpay(data) {
    var arr4 = [];
    var arr9 = []
    payer()

    function payer() {
        for(var i = 0; i < data.data[3].length; i++) {
            var someDate = data.data[3][i].logTime.substring(0, data.data[3][i].logTime.indexOf(' '))
            someDate = someDate.replace(/-/g, "/");
            var rq = data.data[3][i].payNumber;
            arr4.push(rq);
            arr9.push(new Date(someDate).getTime())
        }
    };
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    //	window.setInterval(payer,1000);
    var chart_three = Highcharts.chart('container-three', {
        chart: {
            type: 'column',
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            categories: arr9,
            labels: {
                format: '{value:%Y-%m-%d}',
                enable: true,
                rotation: 320,
                style: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' 人';
            }
        },
        yAxis: {
            title: {
                text: '付费人数',
                style: {
                    color: '#fff'
                }
            }
        },
        legend: {
            itemStyle: {
                color: '#c0c0c0',
            },
            itemHoverStyle: {
                color: '#fff'
            }
        },
        plotOptions: {

        },
        series: [{
            name: '付费人数',
            data: arr4,
        }],
    });

};
//留存
// keep()
//
// function keep(data) {
//     var arr5 = [];
//     var arr6 = [];
//     var arr10 = [];
//     var arr15 = []
//     preserve()
//
//     function preserve() {
//         for(var i = 0; i < data.data[2].length; i++) {
//             var someDate = data.data[2][i].logTime.substring(0, data.data[2][i].logTime.indexOf(' '))
//             someDate = someDate.replace(/-/g, "/");
//             var tm = Math.floor(data.data[2][i].dayRetain * 100) / 100;
//             var rq = Math.floor(data.data[2][i].threeRetain * 100) / 100;
//             var we = Math.floor(data.data[2][i].weekRetain * 100) / 100;
//             arr5.push(tm)
//             arr6.push(rq)
//             arr15.push(we)
//             arr10.push(new Date(someDate).getTime())
//
//         }
//     }
//     Highcharts.setOptions({
//         global: {
//             useUTC: false
//         }
//     });
//     //	window.setInterval(preserve,1000);
//     var chart_four = Highcharts.chart('container-four', {
//         chart: {
//             type: 'spline',
//             backgroundColor: {
//                 stops: [
//                     [0, 'rgb(54, 54, 54)']
//                 ]
//             },
//         },
//         title: {
//             text: ''
//         },
//         credits: {
//             enabled: false // 禁用版权信息
//         },
//         exporting: {
//             enabled: false
//         },
//         xAxis: {
//             type: 'datetime',
//             categories: arr10,
//             labels: {
//                 format: '{value:%Y-%m-%d}',
//                 enable: true,
//                 rotation: 320,
//                 style: {
//                     color: '#fff'
//                 }
//             }
//         },
//         tooltip: {
//             formatter: function() {
//                 return '<b>' + this.series.name + '</b><br/>' +
//                     this.point.y + ' %';
//             }
//         },
//         yAxis: {
//             title: {
//                 text: '留存趋势',
//                 labels:{
//                     style: {
//                         color: '#fff'
//                     }
//                 }
//             }
//         },
//         legend: {
//             itemStyle: {
//                 color: '#c0c0c0',
//             },
//             itemHoverStyle: {
//                 color: '#fff'
//             }
//         },
//         plotOptions: {
//
//         },
//         series: [{
//             name: '日留存',
//             data: arr5,
//         }, {
//             name: '三日留存',
//             data: arr6
//         }, {
//             name: '周留存',
//             data: arr15
//         }],
//     });
// }