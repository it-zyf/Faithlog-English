change()

function load() {
  $(".right").mLoading("show");
}

function onblu() {
  $("#real-datatableAll").bootstrapTable('destroy');
  $('#div-one').css('display', 'none')
  $('#loadchart').css('display', 'block')
  $('#real-datatableAll').css('display', 'none')
  $('#loadtable').css('display', 'block')
  var timeMM = document.getElementsByClassName('el-range-input')
  var texts = timeMM[0].value
  var texte = timeMM[1].value
  var serverSub = $("#district").val(); //区服
  var channelVal = $("#channel").val(); // 渠道号
  if (serverSub != null) {
    serverSub = serverSub.join(",");
  } else {
    serverSub = serviceAll;
  }
  if (channelVal != null) {
    channelVal = channelVal.join(",");
  } else {
    channelVal = channelAll;
  }
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryLTVAnalysis",
    async: true,
    data: {
      serverId: serverSub,
      startTime: texts,
      endTime: texte,
      channelId: channelVal,
    },
    success: function (ob) {
      AddUser(ob);
      tableRetain(ob)
      retentionTable(ob)
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
  $('#districtNext').css('display', 'block')
  //渠道号查询
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryChannels",
    async: false,
    data: {},
    success: function (obj) {
      for (var i = 0; i < obj.data.length; i++) {
        channelNull.push(obj.data[i].flag)
        $("#channel").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
      }
      channelAll = channelNull.join(",")
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
        $("#district").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
      }
      serviceAll = serviceNull.join(",")
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

function homedata() {
  $('#div-one').css('display', 'none')
  $('#loadchart').css('display', 'block')
  $('#real-datatableAll').css('display', 'none')
  $('#loadtable').css('display', 'block')
  var text5 = $("#district").val(); //区服
  var channelVal = $("#channel").val(); //渠道号
  var time
  var text1
  var textTime
  // var aa=vm.ruleForm.dateValue
  var date = new Date();
  var now = new Date(date - 24 * 3600 * 1000)
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
  var formatwdate = y + '-' + m + '-' + d;
  var yn = now.getFullYear();
  var mn = now.getMonth() + 1;
  var dn = now.getDate();
  if (mn < 10) {
    mn = '0' + mn
  }
  if (dn < 10) {
    dn = '0' + dn
  }
  var formatwdateNow = yn + '-' + mn + '-' + dn;
  text1 = formatwdate
  textTime = formatwdateNow //晚
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
    url: allAnalysisRequestURL + "frontEnd/queryLTVAnalysis",
    async: true,
    data: {
      serverId: text5,
      startTime: text1,
      endTime: textTime,
      channelId: channelVal,
    },
    success: function (ob) {
      AddUser(ob);
      tableRetain(ob)
      retentionTable(ob)
    }
  });
}

function retentionTable(data) {
  $('#loadtable').css('display', 'none')
  $('#real-datatableAll').css('display', 'block')
  var res = []
  for (var i = 0; i < data.data.length; i++) {
    var obj = {}
    obj.logTime = data.data[i].timedate
    obj.firstLoginNum = data.data[i].firstLogin
    obj.activeNum = data.data[i].firstPayAmount
    obj.registerNum = data.data[i].registerNumber
    obj.payNum = data.data[i].payAmount
    obj.amount1 = data.data[i].oneLtv
    obj.amount2 = data.data[i].twoLtv
    obj.amount3 = data.data[i].threeLtv
    obj.amount4 = data.data[i].fourLtv
    obj.amount5 = data.data[i].fiveLtv
    obj.amount6 = data.data[i].sixLtv
    obj.amount7 = data.data[i].sevenLtv

    obj.amount8 = data.data[i].eightLtv
    obj.amount9 = data.data[i].nineLtv
    obj.amount10 = data.data[i].tenLtv
    obj.amount11 = data.data[i].elevenLtv
    obj.amount12 = data.data[i].twelveLtv
    obj.amount13 = data.data[i].thirteenLtv
    obj.amount14 = data.data[i].fourteenLtv

    obj.amount15 = data.data[i].fifteenLtv
    obj.amount16 = data.data[i].sixteenLtv
    obj.amount17 = data.data[i].seventeenLtv
    obj.amount18 = data.data[i].eighteenLtv
    obj.amount19 = data.data[i].nineteenLtv
    obj.amount20 = data.data[i].twentyLtv
    obj.amount21 = data.data[i].twentyoneLtv

    obj.amount22 = data.data[i].twentytwoLtv
    obj.amount23 = data.data[i].twentythreeLtv
    obj.amount24 = data.data[i].twentyfourLtv
    obj.amount25 = data.data[i].twentyfiveLtv
    obj.amount26 = data.data[i].twentysixLtv
    obj.amount27 = data.data[i].twentysevenLtv
    obj.amount28 = data.data[i].twentyeightLtv

    obj.amount29 = data.data[i].twentynineLtv
    obj.amount30 = data.data[i].thirtyLtv
    obj.amount60 = data.data[i].sixtyLtv
    obj.amount90 = data.data[i].ninetyLtv
    obj.amount120 = data.data[i].hundredtwentyLtv
    obj.amount150 = data.data[i].hundredfiftyLtv
    obj.amount180 = data.data[i].hundredeightyLtv
    obj.amount360 = data.data[i].threehundredsixtyLtv
    res.push(obj)
  }
  var t = $("#real-datatableAll").bootstrapTable({
    queryParamsType: "",
    striped: true, //设置为 true 会有隔行变色效果
    undefinedText: "0", //当数据为 undefined 时显示的字符
    pagination: true, //分页
    paginationLoop: false,
    // paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
    showToggle: false, //是否显示 切换试图（table/card）按钮
    // showColumns: "true", //是否显示 内容列下拉框
    pageNumber: 1, //如果设置了分页，首页页码
    // showPaginationSwitch:true,//是否显示 数据条数选择框
    pageSize: 30, //如果设置了分页，页面数据条数
    pageList: [10, 30, 50, 'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
    paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
    paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
    // singleSelect: false,//设置True 将禁止多选
    search: false, //显示搜索框
    data_local: "zh-US", //表格汉化
    sidePagination: "client", //客户端处理分页
    data: res,
    idField: "logTime", //指定主键列
    columns: [{
        title: '日期',
        align: 'center',
        formatter: function (value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
          return '<p style="width: 100px;" class="firstTab">' + row.logTime + '</p>';
        }
      },
      {
        title: '新增活跃人数',
        field: 'firstLoginNum',
        align: 'center',
        width: 180
      },
      {
        title: '新增充值金额',
        field: 'activeNum',
        align: 'center',
        width: 170
      },
      {
        title: '新增注册',
        field: 'registerNum',
        align: 'center',
        width: 120
      },

      {
        title: '付费金额',
        field: 'payNum',
        align: 'center',
        width: 120
      },
      {
        title: '首日LTV',
        field: 'amount1',
        align: 'center',
        width: 120
      },
      {
        title: '2日LTV',
        field: 'amount2',
        align: 'center',
        width: 120
      },
      {
        title: '3日LTV',
        field: 'amount3',
        align: 'center',
        width: 100
      },
      {
        title: '4日LTV',
        field: 'amount4',
        align: 'center',
        width: 100
      },
      {
        title: '5日LTV',
        field: 'amount5',
        align: 'center',
        width: 100
      },
      {
        title: '6日LTV',
        field: 'amount6',
        align: 'center',
        width: 100
      }, {
        title: '7日LTV',
        field: 'amount7',
        align: 'center',
        width: 100
      },
      {
        title: '8日LTV',
        field: 'amount8',
        align: 'center',
        width: 80
      }, {
        title: '9日LTV',
        field: 'amount9',
        align: 'center',
        width: 80
      }, {
        title: '10日LTV',
        field: 'amount10',
        align: 'center',
        width: 80
      }, {
        title: '11日LTV',
        field: 'amount11',
        align: 'center',
        width: 80
      },
      {
        title: '12日LTV',
        field: 'amount12',
        align: 'center',
        width: 80
      },
      {
        title: '13日LTV',
        field: 'amount13',
        align: 'center',
        width: 80
      },
      {
        title: '14日LTV',
        field: 'amount14',
        align: 'center',
        width: 80
      },
      {
        title: '15日LTV',
        field: 'amount15',
        align: 'center',
        width: 80
      },
      {
        title: '16日LTV',
        field: 'amount16',
        align: 'center',
        width: 80
      }, {
        title: '17日LTV',
        field: 'amount17',
        align: 'center',
        width: 80
      }, {
        title: '18日LTV',
        field: 'amount18',
        align: 'center',
        width: 80
      }, {
        title: '19日LTV',
        field: 'amount19',
        align: 'center',
        width: 80
      }, {
        title: '20日LTV',
        field: 'amount20',
        align: 'center',
        width: 80
      }, {
        title: '21日LTV',
        field: 'amount21',
        align: 'center',
        width: 80
      },
      {
        title: '22日LTV',
        field: 'amount22',
        align: 'center',
        width: 80
      },
      {
        title: '23日LTV',
        field: 'amount23',
        align: 'center',
        width: 80
      },
      {
        title: '24日LTV',
        field: 'amount24',
        align: 'center',
        width: 80
      },
      {
        title: '25日LTV',
        field: 'amount25',
        align: 'center',
        width: 80
      },
      {
        title: '26日LTV',
        field: 'amount26',
        align: 'center',
        width: 80
      }, {
        title: '27日LTV',
        field: 'amount27',
        align: 'center',
        width: 80
      }, {
        title: '28日LTV',
        field: 'amount28',
        align: 'center',
        width: 80
      }, {
        title: '29日LTV',
        field: 'amount29',
        align: 'center',
        width: 80
      }, {
        title: '30日LTV',
        field: 'amount30',
        align: 'center',
        width: 80
      }, {
        title: '60日LTV',
        field: 'amount60',
        align: 'center',
        width: 80
      }, {
        title: '90日LTV',
        field: 'amount90',
        align: 'center',
        width: 80
      }, {
        title: '120日LTV',
        field: 'amount120',
        align: 'center',
        width: 100
      }, {
        title: '150日LTV',
        field: 'amount150',
        align: 'center',
        width: 100
      }, {
        title: '180日LTV',
        field: 'amount180',
        align: 'center',
        width: 100
      }, {
        title: '360日LTV',
        field: 'amount360',
        align: 'center',
        width: 100
      }
    ]
  });
  t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
    $("#page-wrapper").mLoading("hide");
  });
}
//ltv图形
function AddUser(data) {
  $('#loadchart').css('display', 'none')
  $('#div-one').css('display', 'block')
  var chart = null
  var arr5 = [];
  var arr6 = [];
  var arr15 = [];
  var arr10 = [];
  for (var i = data.data.length - 1; i > 0; i--) {
    var someDate = data.data[i].timedate
    var tm = data.data[i].twoLtv
    var rq = data.data[i].threeLtv
    var we = data.data[i].sevenLtv
    arr5.push(tm)
    arr6.push(rq)
    arr15.push(we)
    arr10.push(someDate)
  }
  chart = Highcharts.chart('div-one', {
    chart: {
      height: 280,
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
      plotLines: [{
        color: 'white', //线的颜色
        dashStyle: 'longdashdot', //标示线的样式，默认是solid（实线），这里定义为长虚线
        value: this, //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
        width: 1 //标示线的宽度，2px
      }],
      lineWidth: 1,
      lineColor: '#333333',
      tickColor: '#333333',
      gridLineWidth: .5,
      gridLineColor: '#202020',
      gridLineDashStyle: "Dash",
      tickmarkPlacement: 'on',
      type: 'datetime',
      categories: arr10,
      labels: {
        enable: true,
        style: {
          color: '#999999'
        }
      }
    },
    tooltip: {
      shared: true,
      crosshairs: {
        width: 1,
        color: '#707070',
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
      // headerFormat: '<span style="font-size:12px">{point.key}</span><br />',
    },
    yAxis: {
      title: {
        text: ''
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
      // align: 'right', //水平方向位置
      // verticalAlign: 'top', //垂直方向位置
      // right:30,
      // y: -30, //距离Y轴的距离
      itemStyle: {
        color: '#999999',
      },
      itemHoverStyle: {
        color: '#999999'
      }
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        color: "#ffb665"
      }
    },
    series: [{
      id: 'exSeries',
      name: '次日LTV',
      data: arr5,
      lineWidth: 2,
      color: "#10CFBD",
    }, {
      name: '3日LTV',
      data: arr6,
      lineWidth: 2,
      color: "#CF10A2",
    }, {
      name: '7日LTV',
      data: arr15,
      lineWidth: 2,
      color: "#999999",
    }],
  });
}
//ltv导出表格
function tableRetain(data) {
  $('#loadtable').css('display', 'none')
  $('#real-datatableAll').css('display', 'block')
  $("#real-datatableT").bootstrapTable('destroy')
  $("#real-tbodyT").empty();
  var res = data.data
  for (var i = 0; i < res.length; i++) {
    $("#real-tbodyT").append(
      "<tr><td>" + res[i].timedate +
      "</td><td>" + res[i].twoLtv +
      "</td><td>" + res[i].threeLtv +
      "</td><td>" + res[i].sevenLtv + "</td></tr>"
    )
  }
}