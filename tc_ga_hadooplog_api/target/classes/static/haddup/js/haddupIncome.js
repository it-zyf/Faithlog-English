change()

function load() {
  $(".right").mLoading("show");
}

function onblu() {
  if (arpuCheck === 0) {
    $('#div-three').css('display', 'none')
  } else {
    $('#div-arppu').css('display', 'none')
  }
  $('#div-one').css('display', 'none')
  $('#div-two').css('display', 'none')
  $('#div-four').css('display', 'none')
  $('#loadget').css('display', 'block')
  $('#loadpay').css('display', 'block')
  $('#loadway').css('display', 'block')
  $('#loadarpu').css('display', 'block')
  var timeMM = document.getElementsByClassName('el-range-input')
  var texts = timeMM[0].value
  var texte = timeMM[1].value
  var serverSub = $("#district").val(); //区服
  if (serverSub != null) {
    serverSub = serverSub.join(",");
  } else {
    serverSub = serviceAll;
  }
  var channelVal = $("#channel").val(); //渠道号
  if (channelVal != null) {
    channelVal = channelVal.join(",");
  } else {
    channelVal = channelAll;
  }
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryPayForAnalysis",
    async: true,
    data: {
      serverId: serverSub,
      startTime: texts,
      endTime: texte,
      channelId: channelVal,
    },
    success: function (ob) {
      $('#loadget').css('display', 'none')
      $('#loadpay').css('display', 'none')
      $('#loadway').css('display', 'none')
      $('#loadarpu').css('display', 'none')
      if (arpuCheck === 0) {
        $('#div-three').css('display', 'block')
      } else {
        $('#div-arppu').css('display', 'block')
      }
      $('#div-one').css('display', 'block')
      $('#div-two').css('display', 'block')

      $('#div-four').css('display', 'block')
      updateNum(ob);
      AddUser(ob);
      payrate(ob)
      arpu(ob)
      arppu(ob)
      delay()
    }
  });
}
var serviceNull = []; //全局变量--没有选择区服时，传值所有区服
var channelNull = []; //全局变量--没有选择渠道号时，传值所有渠道号
var serviceAll;
var channelAll;

function change() {
  serviceNull = [];
  channelNull = [];
  $('#district').css('display', 'block')
  //渠道号查询
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryChannels",
    async: false,
    data: {},
    success: function (obj) {
      for (var i = 0; i < obj.data.length; i++) {
        channelNull.push(obj.data[i].flag)
        channelAll = channelNull.join(",")
        $("#channel").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
      }
      $("#channel").each(function () {
        $(this).find("option").attr("selected", "selected")
      })
      $('#channel').multiselect("destroy").multiselect({
        buttonWidth: '79%',
        nonSelectedText: '请选择',
        maxHeight: 200,
        numberDisplayed: 1,
        includeSelectAllOption: true,
        selectAllText: '全选/全不选', //全选按钮显示的文本
        nSelectedText: '项被选中',
        allSelectedText: '已选中所有渠道号',
      });
    }
  });
  $.ajax({
    type: "get",
    url: allAnalysisRequestURL + "frontEnd/queryAreas",
    async: false,
    success: function (obj) {
      for (var i = 0; i < obj.data.length; i++) {
        serviceNull.push(obj.data[i].flag)
        serviceAll = serviceNull.join(",")
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
      homedata()
    }
  });
}
console.log(serviceAll)
console.log(channelAll)

function homedata() {
  $('#div-one').css('display', 'none')
  $('#div-two').css('display', 'none')
  $('#div-three').css('display', 'none')
  $('#div-four').css('display', 'none')
  $('#loadget').css('display', 'block')
  $('#loadpay').css('display', 'block')
  $('#loadway').css('display', 'block')
  $('#loadarpu').css('display', 'block')
  var text5 = $("#district").val(); //区服
  var channelVal = $("#channel").val(); //渠道号
  var date = new Date();
  var oneweekdate = new Date(date - 30 * 24 * 3600 * 1000);
  var y = oneweekdate.getFullYear();
  var m = oneweekdate.getMonth() + 1;
  var d = oneweekdate.getDate();
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  var formatwdate = y + '-' + m + '-' + d; //一周前
  var yn = date.getFullYear();
  var mn = date.getMonth() + 1;
  var dn = date.getDate();
  if (mn < 10) {
    mn = '0' + mn
  }
  if (dn < 10) {
    dn = '0' + dn
  }
  var formatwdateNow = yn + '-' + mn + '-' + dn; //今天
  if (text5 != null) {
    text5 = text5.join(",");
  } else {
    text5 = serviceAll;
  }
  if (channelVal != null) {
    channelVal = channelVal.join(",");
  } else {
    channelVal = channelAll;
  }
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryPayForAnalysis",
    async: true,
    data: {
      serverId: text5,
      startTime: formatwdate,
      endTime: formatwdateNow,
      channelId: channelVal,
    },
    success: function (ob) {
      $('#loadget').css('display', 'none')
      $('#loadpay').css('display', 'none')
      $('#loadway').css('display', 'none')
      $('#loadarpu').css('display', 'none')
      $('#div-three').css('display', 'block')
      $('#div-one').css('display', 'block')
      $('#div-two').css('display', 'block')

      $('#div-four').css('display', 'block')
      updateNum(ob);
      AddUser(ob);
      payrate(ob)
      arpu(ob)
      arppu(ob)
      delay()
    }
  });
}

function updateNum(ob) {
  var num = ob.rows
  $('#numberin').text('+' + num.payAmount)
  $('#numberpeo').text('+' + num.payNumber)
  $('#numberfirst').text('+' + num.firstPayAmount)
  $('#numberfirpeo').text('+' + num.firstPayNumber)
  $('#numbertimes').text('+' + num.paycount)

}
//收入金额
function AddUser(data) {
  var chart = null
  var arr = [];
  var arr4 = [];
  var linedata = data.data
  for (var i = linedata.length - 1; i >= 0; i--) {
    arr4.push(linedata[i].payAmount)
    arr.push(linedata[i].timedate)
  }
  amountExp(arr4, arr)
  chart = Highcharts.chart('div-one', {
    chart: {
      height: 320,
      reflow: true,
      type: 'spline',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
      marginLeft: 50,
    },
    title: {
      text: '',
      align: 'left',
      verticalAlign: 'middle',
      x: -10,
      y: -60,
      style: {
        color: '#999999',
        fontWeight: '400',
        fontSize: '12',
      }
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    exporting: {
      enabled: false, //默认为可用，当设置为false时，图表的打印及导出功能失效
      filename: '注册数据', //导出的文件名
    },
    xAxis: {
      lineColor: '#707070',
      tickColor: '#707070',
      gridLineWidth: .5,
      gridLineColor: '#363636',
      gridLineDashStyle: "Dash",
      tickmarkPlacement: 'on',
      categories: arr,
      labels: {
        enable: true,
        style: {
          color: '#999999'
        }
      }
    },
    tooltip: {
      crosshairs: {
        width: 1,
        color: '#999999',
        dashStyle: 'Dash'
      },
      // useHTML: true,
      // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
      backgroundColor: '#363F48', // 背景颜色
      borderColor: '#363F48', // 边框颜色
      borderRadius: 2, // 边框圆角
      opacity: '1',
      // useHTML: true,
      style: { // 文字内容相关样式
        color: "#ffffff",
        opacity: '1',
        fontSize: "12px",
      },
    },
    yAxis: {
      title: {
        text: '',
        // margin: 10,
        // rotation:0,
        // text:'收<br />入<br />金<br />额<br />',
        // style: {
        //     color: '#CCC',
        //     fontWeight:'400',
        //     fontSize:'12',
        // }
      },
      lineWidth: 1,
      lineColor: '#707070',
      gridLineColor: '#707070',
      labels: {
        format: '{value}',
        style: {
          color: '#999999',

        }
      }
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        color: "#10CFBD"
      }
    },
    series: [{
      id: 'exSeries',
      name: '收入金额',
      data: arr4,
    }],
  });
}
//收入金额导出
function amountExp(data, time) {
  $("#datatableAmount").bootstrapTable('destroy')
  $("#tbodyAmount").empty();
  for (var i = 0; i < data.length; i++) {
    $("#tbodyAmount").append(
      "<tr><td>" + time[i] +
      "</td><td>" + data[i] +
      "</td></tr>"
    )
  }
}
//付费率
function payrate(data) {
  var chart = null
  var arr = [];
  var arr4 = [];
  var linedata = data.data
  for (var i = linedata.length - 1; i >= 0; i--) {
    arr4.push(linedata[i].rate)
    arr.push(linedata[i].timedate)
  }
  rateExp(arr4, arr)
  chart = Highcharts.chart('div-two', {
    chart: {
      marginLeft: 35,
      height: 270,
      reflow: true,
      type: 'spline',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: ' ',
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    exporting: {
      enabled: false, //默认为可用，当设置为false时，图表的打印及导出功能失效
      filename: '注册数据', //导出的文件名
    },
    xAxis: {
      lineColor: '#333333',
      tickColor: '#333333',
      gridLineWidth: .5,
      gridLineColor: '#202020',
      gridLineDashStyle: "Dash",
      tickmarkPlacement: 'on',
      type: 'datetime',
      categories: arr,
      labels: {
        enable: true,
        style: {
          color: '#999999'
        }
      }
    },
    tooltip: {
      crosshairs: {
        width: 1,
        color: '#999999',
        dashStyle: 'Dash'
      },
      backgroundColor: '#363F48', // 背景颜色
      borderColor: '#363F48', // 边框颜色
      borderRadius: 2, // 边框圆角
      opacity: '1',
      // useHTML: true,
      style: { // 文字内容相关样式
        color: "#ffffff",
        opacity: '1',
        fontSize: "12px",
      },
      // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
    },
    yAxis: {
      title: {
        text: '',
      },
      lineWidth: 1,
      lineColor: '#333333',
      gridLineColor: '#333333',
      labels: {
        format: '{value}',
        style: {
          color: '#999999',

        }
      }
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        color: "#10CFBD"
      }
    },
    series: [{
      id: 'exSeries',
      name: '付费率',
      data: arr4,
    }],
  });
}

//付费率导出
function rateExp(data, time) {
  $("#datatableRate").bootstrapTable('destroy')
  $("#tbodyRate").empty();
  for (var i = 0; i < data.length; i++) {
    $("#tbodyRate").append(
      "<tr><td>" + time[i] +
      "</td><td>" + data[i] +
      "</td></tr>"
    )
  }
}
//ARPU
function arpu(data) {
  var chart = null
  var arr = [];
  var arr4 = [];
  var linedata = data.data
  for (var i = linedata.length - 1; i >= 0; i--) {
    arr4.push(linedata[i].arpu)
    arr.push(linedata[i].timedate)
  }
  arpuExp(arr4, arr)
  chart = Highcharts.chart('div-three', {
    chart: {
      height: 270,
      reflow: true,
      type: 'spline',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: ' ',
      // align: 'left',
      // verticalAlign: 'middle',
      // x:-10,
      // y: -60,
      // style: {
      //     color: '#999999',
      //     fontWeight:'400',
      //     fontSize:'12',
      // }
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    exporting: {
      enabled: false, //默认为可用，当设置为false时，图表的打印及导出功能失效
      filename: 'ARPU', //导出的文件名
    },
    xAxis: {
      lineColor: '#333333',
      tickColor: '#333333',
      gridLineWidth: .5,
      gridLineColor: '#202020',
      gridLineDashStyle: "Dash",
      tickmarkPlacement: 'on',
      type: 'datetime',
      categories: arr,
      labels: {
        enable: true,
        style: {
          color: '#999999'
        }
      }
    },
    tooltip: {
      crosshairs: {
        width: 1,
        color: '#999999',
        dashStyle: 'Dash'
      },
      backgroundColor: '#363F48', // 背景颜色
      borderColor: '#363F48', // 边框颜色
      borderRadius: 2, // 边框圆角
      opacity: '1',
      // useHTML: true,
      style: { // 文字内容相关样式
        color: "#ffffff",
        opacity: '1',
        fontSize: "12px",
      },
      // useHTML: true,
      // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
    },
    yAxis: {
      title: {
        text: '',
      },
      lineWidth: 1,
      lineColor: '#333333',
      gridLineColor: '#333333',
      labels: {
        format: '{value}',
        style: {
          color: '#999999',

        }
      }
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        color: "#10CFBD"
      }
    },
    series: [{
      id: 'exSeries',
      name: 'ARPU',
      data: arr4,
    }],
  });
}
//ARPU导出
function arpuExp(data, time) {
  $("#datatableArpu").bootstrapTable('destroy')
  $("#tbodyArpu").empty();
  for (var i = 0; i < data.length; i++) {
    $("#tbodyArpu").append(
      "<tr><td>" + time[i] +
      "</td><td>" + data[i] +
      "</td></tr>"
    )
  }
}
//ARPPU
function arppu(data) {
  var chart = null
  var arr = [];
  var arr4 = [];
  var linedata = data.data
  for (var i = linedata.length - 1; i >= 0; i--) {
    arr4.push(linedata[i].arppu)
    arr.push(linedata[i].timedate)
  }
  arppuExp(arr4, arr)
  chart = Highcharts.chart('div-arppu', {
    chart: {
      height: 270,
      reflow: true,
      type: 'spline',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: ' ',
      // align: 'left',
      // verticalAlign: 'middle',
      // x:-10,
      // y: -60,
      // style: {
      //     color: '#999999',
      //     fontWeight:'400',
      //     fontSize:'12',
      // }
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    exporting: {
      enabled: false, //默认为可用，当设置为false时，图表的打印及导出功能失效
      filename: 'ARPU', //导出的文件名
    },
    xAxis: {
      lineColor: '#333333',
      tickColor: '#333333',
      gridLineWidth: .5,
      gridLineColor: '#202020',
      gridLineDashStyle: "Dash",
      tickmarkPlacement: 'on',
      type: 'datetime',
      categories: arr,
      labels: {
        enable: true,
        style: {
          color: '#999999'
        }
      }
    },
    tooltip: {
      crosshairs: {
        width: 1,
        color: '#999999',
        dashStyle: 'Dash'
      },
      backgroundColor: '#363F48', // 背景颜色
      borderColor: '#363F48', // 边框颜色
      borderRadius: 2, // 边框圆角
      opacity: '1',
      // useHTML: true,
      style: { // 文字内容相关样式
        color: "#ffffff",
        opacity: '1',
        fontSize: "12px",
      },
      // useHTML: true,
      // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
    },
    yAxis: {
      title: {
        text: '',
      },
      lineWidth: 1,
      lineColor: '#333333',
      gridLineColor: '#333333',
      labels: {
        format: '{value}',
        style: {
          color: '#999999',

        }
      }
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        color: "#10CFBD"
      }
    },
    series: [{
      id: 'exSeries',
      name: 'ARPPU',
      data: arr4,
    }],
  });
}
//ARPPU导出
function arppuExp(data, time) {
  $("#datatableArppu").bootstrapTable('destroy')
  $("#tbodyArppu").empty();
  for (var i = 0; i < data.length; i++) {
    $("#tbodyArppu").append(
      "<tr><td>" + time[i] +
      "</td><td>" + data[i] +
      "</td></tr>"
    )
  }
}
//渠道收入
function delayTime(startTime, endTime) {
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/selectStartRetarder",
    async: true,
    data: {
      startTime: startTime,
      endTime: endTime
    },
    success: function (ob) {
      delay(ob)
    }
  });
}

function delay() {
  $('#loadway').css('display', 'none')
  $('#div-four').css('display', 'block')
  var partThreeLeft = echarts.init(document.getElementById('div-four'));
  // var number=[]
  // var range=[]
  // var rate=[]
  // var acount=0
  // for(var i=0;i<data.data.length;i++){
  //     var num=data.data[i].timeCount
  //     var ran=data.data[i].timeNum
  //     acount+=parseInt(num)
  //     number.push(num)
  //     range.push(ran)
  // }
  // for(var i=0;i<data.data.length;i++){
  //     var ra=(parseInt(data.data[i].timeCount))/acount
  //     var nn=(ra*100).toFixed(2)
  //     rate.push(nn)
  // }
  var option = {
    title: {
      text: ' ',
      // x: 'left',
      // left:'9',
      // y: 'center',
      // textStyle:{
      //     color:'#999999',
      //     fontSize:12,
      //     fontWeight:'normal',
      // },
    },
    // backgroundColor: "#363636",
    color: "#10CFBD",
    tooltip: {
      //     trigger: 'axis',
      //     formatter:function (params) {
      //         console.log(params)
      //     }
    },
    grid: { //图表距离外边框的距离
      x: '1%',
      width: '96%',
      height: '88%',
      y: '6%',
      containLabel: true
    },
    xAxis: [{
      type: "value",
      // type: "value",
      axisLabel: {
        textStyle: {
          color: "#999999"
        },
        formatter: "{value}"
      },
      splitLine: {
        lineStyle: {
          color: "#202020"
        }
      },
      axisLine: { //刻度线
        lineStyle: {
          color: "#333333"
        },
        show: true
      }
    }, ],
    yAxis: [{
        type: "category",
        data: ['小米应用市场', '华为应用市场', 'AppStore', '360助手', '百度助手'],
        axisTick: {
          alignWithLabel: true
        },
        nameTextStyle: {
          color: "#999999"
        },
        axisLine: {
          lineStyle: {
            color: "#333333"
          }
        },
        axisLabel: {
          textStyle: {
            color: "#999999"
          },
          formatter: "{value}"
        },
        interval: 80, //设置刻度间距
      },
      {
        type: "category",
        data: ['0', '0', '0', '0', '0'],
        axisTick: {
          alignWithLabel: true
        },

        nameTextStyle: {
          color: "#999999"
        },
        axisLine: {
          lineStyle: {
            color: "#333333"
          }
        },
        axisLabel: {
          textStyle: {
            color: "#999999"
          },
          formatter: "{value}%"
        }
      }
    ],
    series: [
      //     {//顶部椭圆突出显示点
      //     name: "",
      //     type: "pictorialBar",
      //     symbolSize: [10, 20],
      //     symbolOffset: [3,0],
      //     symbolPosition: "end",
      //     z: 12,
      //     xAxisIndex: 0,
      //     label: {
      //         normal: {
      //             show: true,
      //             position: "right",
      //             formatter: "{c}%"
      //         }
      //     },
      //     data: rate,//以y轴为基准的右侧提示数据,存放百分比---改
      // },
      { //数据柱
        type: "bar",
        itemStyle: {
          normal: {
            opacity: 1,
            // barBorderRadius: 5,
          }
        },
        barWidth: "10", //数据柱样式
        data: ['0', '0', '0', '0', '0'], //数据柱以y轴为基准数---改
        markLine: {
          label: {
            position: "middle",
            formatter: "{b}",
          },

        }
      }
    ]
  }
  partThreeLeft.setOption(option);
}