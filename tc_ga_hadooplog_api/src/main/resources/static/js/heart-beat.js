reg()

function reg() {
    var model = $("#model").val();
    if (model == 0) {
        $("#container").css("display", "block")
    } else {
        $("#container").css("display", "none")
    }
    $.ajax({
        type: "get",
        url: "../queryHeartbeat.action",
        async: true,
        data: {
            model: model
        },
        success: function (json) {
            onreal(json)
            Ingame(json)
            // room(json)
        }
    });
}

//在线用户心跳图
function onreal(json) {
    var arr = [];//数据
    var Arr = [];//时间
    for (var i = 0; i < json.rows.length; i++) {
        var a = json.rows[i].onlinePlayerCount
        var b = json.rows[i].logTime
        arr.unshift(a)
        Arr.unshift(b)
    }
    console.log(arr, Arr)
    Highcharts.setOptions({global: {useUTC: false}});
    var max = 6;
    var chart = Highcharts.chart('container', {
        chart: {
            marginLeft:60,
            type: 'spline',
            height:'350px',
            type: 'spline',
            // height:'330px',
            events: {
                load: st
            },
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        title: {
            text:'',
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
        // title: {
        //     // text: '在线用户心跳图'
        // },
        credits: {
            enabled: false // 禁用版权信息
        },
        exporting: {
            enabled: false//禁用右上角打印
        },
        xAxis: {
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineColor:'#363636',
            type: 'datetime',
            categories: Arr,
            tickmarkPlacement:'on',
            labels: {
                enable: true,
                style: {
                    color:'rgba(112,112,112,1)'
                }
            },
            tickLength: 2,
            dateTimeLabelFormats: {
                week: '%Y-%m-%d'
            },

        },
        yAxis: {
            title: {
                text: "在线用户数"
            },
            labels: {
                style: {
                    color: 'rgba(112,112,112,1)'
                }
            }
        },
        legend: {
            // enabled:false,
            itemStyle: {
                color: '#c0c0c0',
            },
            itemHoverStyle: {
                color: 'rgba(112,112,112,1)'
            }
        },
        plotOptions: {
            series: {
                lineWidth: 2,
                color:"#10CFBD",
                showInLegend:false,
            }
        },
        // tooltip: {
        //     formatter: function () {
        //         return '<b>'+this.x+ '</b><br>'+ this.series.name + '<br/>'+ Highcharts.numberFormat(this.y, 2);
        //     }
        // },

        series: [{
            id: 'exSeries',
            name: '在线用户数',
            data: arr,
            marker: { lineColor: '#10CFBD' },
        }]
    });

    function st() {
        setInterval(getData, 1000);
    }

    //动态更新图表数据
    function getData() {

        var categories = [];
        var model = $("#model").val();
        $.ajax({
            type: "post",
            url: "../queryHeartbeat.action",
            dataType: "json",
            async: false,
            data: {
                model: model
            },
            success: function (data) {
                var d = [];
                for (var i = 0; i < data.rows.length; i++) {
                    d.unshift(data.rows[i].onlinePlayerCount)
                    categories.unshift(data.rows[i].logTime);
                }
                chart.series[0].setData(d);
                chart.xAxis[0].setCategories(categories);
            }
        });
    }
}

//游戏中用户心跳
function Ingame(json) {
    var arr = [];//数据
    var Arr = [];//时间
    for (var i = 0; i < json.rows.length; i++) {
        var a = json.rows[i].gameNum
        var b = json.rows[i].logTime
        arr.unshift(a)
        Arr.unshift(b)
    }

    Highcharts.setOptions({global: {useUTC: false}});
    var max = 6;
    var chart = Highcharts.chart('container2', {
        chart: {
            marginLeft:60,
            type: 'spline',
            height:'350px',
            type: 'spline',
            events: {
                load: st
            },
            backgroundColor: {
                stops: [
                    [0, 'rgb(54, 54, 54)']
                ]
            },
        },
        // title: {
        //     text: '游戏中用户心跳图'
        // },
        title: {
            text:'',
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
            enabled: false//禁用右上角打印
        },
        xAxis: {
            lineWidth:1,
            lineColor:'#707070',
            tickColor:'#707070',
            gridLineColor:'#363636',
            type: 'datetime',
            categories: Arr,
            labels: {
                enable: true,
                style: {
                    color: 'rgba(112,112,112,1)'
                }
            },
            tickLength: 2,
            dateTimeLabelFormats: {
                week: '%Y-%m-%d'
            }
        },
        yAxis: {
            title: {
                text: "游戏中用户数"
            },
            // tickPositions:[0,20,40,60,80],
            labels: {
                style: {
                    color: 'rgba(112,112,112,1)'
                }
            }
        },
        // tooltip: {
        //     formatter: function () {
        //         return '<b>'+this.x+ '</b><br>'+ this.series.name + '<br/>'+ Highcharts.numberFormat(this.y, 2);
        //     }
        // },
        legend:{
            enabled:false,
        },
        legend: {
            // enabled:false,
            itemStyle: {
                color: '#c0c0c0',
            },
            itemHoverStyle: {
                color: '#fff'
            }
        },
    //     stroke-width:{
    //
    // }
        plotOptions: {
            series: {
                lineWidth: 2,
                color:"#10CFBD",
                showInLegend:false,
            }
        },
        series: [{
            id: 'exSeries',
            name: '游戏中用户数',
            data: arr,
            marker: { lineColor: '#10CFBD' },
        }]
    });

    function st() {
        setInterval(getData, 1000);
    }

    //动态更新图表数据
    function getData() {
        var model = $("#model").val();
        var categories = [];
        $.ajax({
            type: "post",
            url: "../queryHeartbeat.action",
            dataType: "json",
            async: false,
            data: {
                model: model
            },
            success: function (data) {
                var d = [];
                for (var i = 0; i < data.rows.length; i++) {
                    d.unshift(data.rows[i].gameNum)
                    categories.unshift(data.rows[i].logTime);
                }
                chart.series[0].setData(d);
                chart.xAxis[0].setCategories(categories);
            }
        });
    }
}

//单排房间
// function room(json){
//     var arr=[];//数据
//     var Arr=[];//时间
//     for(var i=0;i<json.rows.length;i++){
//         var a=json.rows[i].soloRoomCount
//         var b=json.rows[i].logTime
//         arr.unshift(a)
//         Arr.unshift(b)
//     }
//
//     Highcharts.setOptions({global: {useUTC: false}});
//     var max=6;
//     var chart = Highcharts.chart('container3', {
//         chart: {
//             type: 'spline',
//             events: {
//                 load: st
//             },
//             backgroundColor: {
//                 stops: [
//                     [0, 'rgb(54, 54, 54)']
//                 ]
//             },
//         },
//         title: {
//             text: '单排房间心跳图'
//         },
//         credits:{
//             enabled:false // 禁用版权信息
//         },
//         exporting: {
//             enabled:false//禁用右上角打印
//         },
//         xAxis: {
//             type: 'datetime',
//             categories: Arr,
//             labels:{
//                 enable: true,
//                 style: {
//                     color: '#fff'
//                 }
//             },
//             dateTimeLabelFormats: {
//                 week: '%Y-%m-%d'
//             }
//         },
//         yAxis: {
//             title: {
//                 text: "单排房间数"
//             },
//             labels: {
//                 style: {
//                     color: '#fff'
//                 }
//             }
//         },
//         tooltip: {
//             formatter: function () {
//                 return '<b>'+this.x+ '</b><br>'+ this.series.name + '<br/>'+ Highcharts.numberFormat(this.y, 2);
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
//         series:  [ {
//             name : '单排房间数',
//             data : arr
//         } ]
//     });
//
//     function st() {
//         setInterval(getData, 1000);
//     }
//     //动态更新图表数据
//     function getData() {
//
//         var categories = [];
//         $.ajax({
//             type: "post",
//             url: "../queryHeartbeat.action",
//             dataType: "json",
//             async: false,
//             success : function(data){
//                 var d = [];
//                 for(var i=0;i<data.rows.length;i++){
//                     d.unshift(data.rows[i].soloRoomCount)
//                     categories.unshift(data.rows[i].logTime);
//                 }
//                 chart.series[0].setData(d);
//                 chart.xAxis[0].setCategories(categories);
//             }
//         });
//     }
// }