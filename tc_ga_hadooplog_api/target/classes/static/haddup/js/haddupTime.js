function today() { //构建方法
  var today = new Date(); //new 出当前时间
  today.setTime(today.getTime() - 24 * 60 * 60 * 1000)
  var h = today.getFullYear(); //获取年
  var m = today.getMonth() + 1; //获取月
  var d = today.getDate(); //获取日
  if (m < 10) {
    m = "0" + m
  }
  if (d < 10) {
    d = "0" + d
  }
  return h + "-" + m + "-" + d; //返回 年-月-日
};

function todaytoday() { //构建方法
  var today = new Date(); //new 出当前时间
  today.setTime(today.getTime())
  var h = today.getFullYear(); //获取年
  var m = today.getMonth() + 1; //获取月
  var d = today.getDate(); //获取日
  if (m < 10) {
    m = "0" + m
  }
  if (d < 10) {
    d = "0" + d
  }
  return h + "-" + m + "-" + d; //返回 年-月-日
};
var time = today()
var todaytoday = todaytoday()
var dataTodayTop
var dataTodayBottom
var dataDateTop
var dataDateBottom
//在线刷新
function refreshtop(time) {
  var server1 = $("#district").val(); //区服
  var channelVal = $("#channel").val(); //渠道号
  if (server1 != null) {
    server1 = server1.join(",");
  } else {
    server1 = serviceNull.join(",")
  }
  if (channelVal != null) {
    channelVal = channelVal.join(",");
  } else {
    channelVal = channelNull.join(",")
  }
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryRealTimeOnline",
    async: true,
    data: {
      serverId: server1,
      startTime: time,
      endTime: time,
      channelId: channelVal,
    },
    success: function (ob) {
      dataTodayTop = ob
      var max = ob.rows.max
      var avg = ob.rows.avg
      if (max === '' || max === undefined || max === null) {
        max = 0
      }
      if (avg === '' || avg === undefined || avg === null) {
        avg = 0
      }
      document.getElementById('querymost').innerText = max
      document.getElementById('queryavg').innerText = avg
      topTarget(dataDateTop, ob) //在线图形
    }
  });
}
//下部刷新
function refreshanother(time) {
  var server2 = $("#districtNext").val(); //区服
  if (server2 != null) {
    server2 = server2.join(",");
    // var index=server2.indexOf(",")
    // if(index>0){
    //     server2=''
    // }
  }
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryRealTimeStatistics",
    async: true,
    data: {
      serverId: server2,
      startTime: time,
      endTime: time
    },
    success: function (ob) {
      numberToday(ob)
      dataTodayBottom = ob
      AddUser(dataDateBottom, ob); //今日新增
      OfficaNum(dataDateBottom, ob); //今日活跃
      active(dataDateBottom, ob); //今日首次登陆
      PayMoney(dataDateBottom, ob); //今日付费总金额
      PayNum(dataDateBottom, ob); //今日付费人数
      waitNow(dataDateBottom, ob); //当前留存
    }
  });
}

function innite1(time) {
  var query = time.substring(5)
  document.getElementById('daydayO').innerText = query + '日:'
  document.getElementById('daydayT').innerText = query + '日:'
  // document.getElementById('daydayTh').innerText=query+'日:'
  document.getElementById('daydayF').innerText = query + '日:'
  document.getElementById('daydayFi').innerText = query + '日:'
  document.getElementById('daydayS').innerText = query + '日:'
}
var countDownAll //定义一个全局变量,用来转换清除内部定时器
function countDown() {
  var m = 5; //分
  var s = 00; //秒
  var countdown = document.getElementsByClassName("countdown");
  var len = countdown.length

  function getCountdown() {
    var htm = m + 'min'
    for (var i = 0; i < len; i++) {
      countdown[i].innerHTML = htm
    }
    if (m == 0 && s == 0) {
      // $(document.body).mLoading("show")
      // var timeMM= document.getElementsByClassName('el-input__inner')
      // var  texts=timeMM[0].value//上时间
      // var  texte=timeMM[1].value//下时间
      refreshtop(todaytoday)
      refreshanother(todaytoday)
      // $(document.body).mLoading("hide")
      m = 5;
      s = 00;
    } else if (m >= 0) {
      if (s >= 0 && s < 59) {
        s++;
      } else if (s == 59) {
        m--;
        s = 00;
      }
    }
  }
  getCountdown();
  countDownAll = setInterval(function () {
    getCountdown()
  }, 1000);
}
var lastNew
var serviceNull = []; //全局变量--没有选择区服时，传值所有区服
var channelNull = []; //全局变量--没有选择渠道号时，传值所有渠道号
var serverLength;
var channelLength;
$(function () {
  $('.multiple-select').multipleSelect({
    placeholder: '请选择',
  })
  $(".ms-select-all span").addClass("topText")
  $(".ms-choice span").addClass("topSelect")
  $(".topText").text("全选/全不选")
  $(".topSelect").text("已选中所有选项")

})
window.setInterval(function () {
  var lentop;
  var lennext;
  var channellentop;
  var channellennext;
  if ($('#district').val() != null) {
    lentop = $('#district').val().length
  }
  if ($('#districtNext').val() != null) {
    lennext = $('#districtNext').val().length
  }
  if ($('#channel').val() != null) {
    channellentop = $('#channel').val().length
  }
  if ($('#channelNext').val() != null) {
    channellennext = $('#channelNext').val().length
  }
  if (lentop === serverLength) {
    document.getElementsByClassName('topSelect')[0].innerHTML = "已选中所有区服"
  }
  if (channellentop === channelLength) {
    document.getElementsByClassName('topSelect')[1].innerHTML = "已选中所有渠道号"
  }
  if (channellentop === 4) {
    document.getElementsByClassName('topSelect')[1].innerHTML = "4项被选中"
  }
  if (lennext === serverLength) {
    document.getElementsByClassName('topSelect')[2].innerHTML = "已选中所有区服"
  }
  if (channellennext === channelLength) {
    document.getElementsByClassName('topSelect')[3].innerHTML = "已选中所有渠道号"
  }
  if (channellennext === 4) {
    document.getElementsByClassName('topSelect')[3].innerHTML = "4项被选中"
  }
}, 50)
change()

function change() {
  channelNull = [];
  // $('#districtNext').css('display','block')
  // $('#district').css('display','block')
  //渠道号查询
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryChannels",
    async: false,
    data: {},
    success: function (obj) {
      for (var i = 0; i < obj.data.length; i++) {
        channelLength = obj.data.length;
        channelNull.push(obj.data[i].flag)
        $("#channel").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
        $("#channelNext").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
      }
    }
  });
  $("#channel").each(function () {
    $(this).find("option").attr("selected", "selected")
  })
  $("#channelNext").each(function () {
    $(this).find("option").attr("selected", "selected")
  })

  //区服查询
  $.ajax({
    type: "get",
    url: allAnalysisRequestURL + "frontEnd/queryAreas",
    async: false,
    success: function (obj) {
      for (var i = 0; i < obj.data.length; i++) {
        serverLength = obj.data.length;
        serviceNull.push(obj.data[i].flag)
        $("#district").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
        $("#districtNext").append("<option value='" + obj.data[i].flag + "'>" + obj.data[i].name + "</option>");
      }
      $("#district").each(function () {
        $(this).find("option").attr("selected", "selected")
      })
      $("#districtNext").each(function () {
        $(this).find("option").attr("selected", "selected")
      })
      homedata1()
    }
  });
}

function homedata1() {
  $('#contenton').css('background', '#202020')
  $('#contentzoo').css('background', '#202020')
  $('#loadres').css('display', 'block')
  $('#loadAdd').css('display', 'block')
  countDown()
  var thistime = time //昨天
  innite1(thistime)
  var server1 = $("#district").val(); //区服
  if (server1 != null) {
    server1 = server1.join(",");
  } else {
    server1 = serviceNull.join(",");
  }
  var server2 = $("#districtNext").val(); //区服
  if (server2 != null) {
    server2 = server2.join(",");
    // var index=server2.indexOf(",")
    // if(index>0){
    //     server2=''
    // }
  } else {
    server2 = serviceNull.join(",");
  }
  var channelVal = $("#channel").val(); //渠道号
  if (channelVal != null) {
    channelVal = channelVal.join(",");
  } else {
    channelVal = channelNull.join(",");
  }
  var channelValNext = $("#channelNext").val(); //渠道号
  if (channelValNext != null) {
    channelValNext = channelValNext.join(",");
  } else {
    channelValNext = channelNull.join(",");
  }
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryRealTimeOnline",
    async: true,
    data: {
      serverId: server1,
      startTime: thistime,
      endTime: thistime,
      channelId: channelVal,
    },
    success: function (ob) {
      dataDateTop = ob
      //日期查下部图
      $.ajax({
        type: "post",
        url: allAnalysisRequestURL + "frontEnd/queryRealTimeStatistics",
        async: true,
        data: {
          serverId: server2,
          startTime: thistime,
          endTime: thistime,
          channelId: channelValNext,
        },
        success: function (last) {
          dataDateBottom = last
          todaydata(ob, last)
          numberlastday(last)
        }
      });
      sample(ob, thistime) //拿平均值
      timeshowFun(thistime) //tab栏时间
      topTable(ob) //在线表格
    }
  });
}

function todaydata(datalastOnline, datalastAno) {
  var date = new Date()
  date.setTime(date.getTime())
  var h = date.getFullYear(); //获取年
  var m = date.getMonth() + 1; //获取月
  var d = date.getDate(); //获取日
  if (m < 10) {
    m = "0" + m
  }
  if (d < 10) {
    d = "0" + d
  }
  var thistime = h + '-' + m + '-' + d //今天
  //今天在线
  var server1 = $("#district").val(); //区服
  if (server1 != null) {
    server1 = server1.join(",");
  } else {
    server1 = serviceNull.join(",");
  }
  var server2 = $("#districtNext").val(); //区服
  if (server2 != null) {
    server2 = server2.join(",");
    // var index=server2.indexOf(",")
    // if(index>0){
    //     server2=''
    // }
  } else {
    server2 = serviceNull.join(",");
  }
  var channelVal = $("#channel").val(); //渠道号
  if (channelVal != null) {
    channelVal = channelVal.join(",");
  } else {
    channelVal = channelNull.join(",");
  }
  var channelValNext = $("#channelNext").val(); //渠道号
  if (channelValNext != null) {
    channelValNext = channelValNext.join(",");
  } else {
    channelValNext = channelNull.join(",");
  }
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryRealTimeOnline",
    async: true,
    data: {
      serverId: server1,
      startTime: thistime,
      endTime: thistime,
      channelId: channelVal,
    },
    success: function (ob) {
      dataTodayTop = ob
      // dataTodayBottom=ob
      mostAvg(ob) //今天的MAX和AVG
      //numberToday(ob)//今天数量
      $('#loadAdd').css('display', 'none')
      $('#div-T').css('display', 'block')
      $('#contenton').css('background', '#363636')
      topTarget(datalastOnline, ob) //在线图形
      // setPar(datalast,ob);//更新下部分数据
    }
  });
  //今天下部图
  $.ajax({
    type: "post",
    url: allAnalysisRequestURL + "frontEnd/queryRealTimeStatistics",
    async: true,
    data: {
      serverId: server2,
      startTime: thistime,
      endTime: thistime,
      channelId: channelValNext,
    },
    success: function (ob) {
      dataTodayBottom = ob
      setPar(datalastAno, ob); //更新下部分数据
      numberToday(ob)
    }
  });

}
//发送ajax请求 更新下部分数据
function HistoryData(newdata) {
  $('#contenfour').css('background', '#202020')
  $('#contentzoo').css('background', '#202020')
  $('#content_one').css('background', '#202020')
  $('#contentwo').css('background', '#202020')
  $('#contenthree').css('background', '#202020')
  $('#contenfive').css('background', '#202020')
  $('#div-A').css('display', 'none')
  $('#div-one').css('display', 'none')
  $('#div-two').css('display', 'none')
  $('#div-three').css('display', 'none')
  $('#div-four').css('display', 'none')
  $('#div-five').css('display', 'none')
  $('.real-table').css('display', 'none')
  $('.real-table-A').css('display', 'none')
  $('.real-table-one').css('display', 'none')
  $('.real-table-five').css('display', 'none')
  $('#loadres').css('display', 'block')
  $('#loadacti').css('display', 'block')
  $('#loadnext').css('display', 'block')
  $('#loadpay').css('display', 'block')
  $('#loadamount').css('display', 'block')
  $('#loadretain').css('display', 'block')
  var data = new Date()
  var h = data.getFullYear(); //获取年
  var m = data.getMonth() + 1; //获取月
  var d = data.getDate(); //获取日
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  var todayTime = h + '-' + m + '-' + d
  if (todayTime === newdata) {
    dataDateBottom = dataTodayBottom
    timeshowFun(newdata)
    onreal(dataTodayBottom);
    var ob = dataTodayBottom
    numberlastday(ob)
    AddUser(ob, ob); //今日新增
    OfficaNum(ob, ob); //今日活跃
    active(ob, ob); //今日首次登陆
    PayMoney(ob, ob); //今日付费总金额
    PayNum(ob, ob); //今日付费人数
    waitNow(ob, ob); //当前留存
  } else {
    var server2 = $("#districtNext").val(); //区服
    if (server2 != null) {
      server2 = server2.join(",");
      // var index=server2.indexOf(",")
      // if(index>0){
      //     server2=''
      // }
    } else {
      server2 = serviceNull.join(",");
    }
    var channelValNext = $("#channelNext").val(); //渠道号
    if (channelValNext != null) {
      channelValNext = channelValNext.join(",");
    } else {
      channelValNext = channelNull.join(",")
    }
    $.ajax({
      type: "post",
      url: allAnalysisRequestURL + "frontEnd/queryRealTimeStatistics",
      async: true,
      data: {
        serverId: server2,
        startTime: newdata,
        endTime: newdata,
        channelId: channelValNext,
      },
      success: function (ob) {
        dataDateBottom = ob
        timeshowFun(newdata)
        setPar(ob, dataTodayBottom);
        numberlastday(ob)
      }
    });
  }

}
//在线表格和图形
function HistoryDataForTop(newdata) {
  $('#contenton').css('background', '#202020')
  $('#div-T').css('display', 'none')
  $('.real-table-T').css('display', 'none')
  $('#loadAdd').css('display', 'block')
  // $(document.body).mLoading("show")
  var data = new Date()
  var h = data.getFullYear(); //获取年
  var m = data.getMonth() + 1; //获取月
  var d = data.getDate(); //获取日
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  var todayTime = h + '-' + m + '-' + d
  if (todayTime === newdata) {
    dataDateTop = dataTodayTop
    topTarget(dataTodayTop, dataTodayTop)
    var max = data.rows.max
    var avg = data.rows.avg
    if (max === '' || max === undefined || max === null) {
      max = 0
    }
    if (avg === '' || avg === undefined || avg === null) {
      avg = 0
    }
    document.getElementById('changetime').innerText = newdata.substring(5)
    document.getElementById('querymost').innerText = dataTodayTop.max
    document.getElementById('queryavg').innerText = dataTodayTop.avg
    datahtml = timeshow = "<span>" + newdata.substring(5) + "</span><span>日</span>"
    $("#real-datatableT").bootstrapTable('destroy')
    $("#real-tbodyT").empty();
    if (dataDateTop.data != null)
      for (var i = 0; i < dataDateTop.data.length; i++) {
        var date = ob.data[i].timepoint
        var index = date.indexOf(' ')
        var someDate = date.substring(index, index + 6)
        $("#real-tbodyT").append(
          "<tr><td>" + someDate +
          "</td><td>" + dataDateTop.data[i].online +
          "</td></tr>"
        )
      };
  } else {
    var server1 = $("#district").val(); //区服
    if (server1 != null) {
      server1 = server1.join(",");
    } else {
      server1 = serviceNull.join(",")
    }
    var channelVal = $("#channel").val(); //渠道号
    if (channelVal != null) {
      channelVal = channelVal.join(",");
    } else {
      channelVal = channelNull.join(",")
    }
    $.ajax({
      type: "post",
      url: allAnalysisRequestURL + "frontEnd/queryRealTimeOnline",
      async: true,
      data: {
        serverId: server1,
        startTime: newdata,
        endTime: newdata,
        channelId: channelVal,
      },
      success: function (ob) {
        dataDateTop = ob
        $("#real-datatableT").bootstrapTable('destroy')
        sample(ob, newdata)
        topTarget(ob, dataTodayTop)
        topTable(ob)
      }
    });
  }

}
//更新下部分图形
function setPar(datalast, today) {
  onreal(datalast); //下部表格
  AddUser(datalast, today); //今日新增
  OfficaNum(datalast, today); //今日活跃
  active(datalast, today); //今日首次登陆
  PayMoney(datalast, today); //今日付费总金额
  PayNum(datalast, today); //今日付费人数
  waitNow(datalast, today); //当前留存
}
//在线表格
function topTable(ob) {
  $("#real-datatableT").bootstrapTable('destroy')
  $("#real-tbodyT").empty();
  if (ob.data != null)
    for (var i = 0; i < ob.data.length; i++) {
      var date = ob.data[i].timepoint
      var index = date.indexOf(' ')
      var someDate = date.substring(index, index + 6)
      $("#real-tbodyT").append(
        "<tr><td>" + someDate +
        "</td><td>" + ob.data[i].online +
        "</td></tr>"
      )
    };
  $("#real-datatableT").bootstrapTable({
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

function numberToday(ob) {
  var add = ob.row1.totalRegister //今日新增
  var active = ob.row1.totalActive //今日活跃
  var firstIn = ob.row1.totalFirstLogin //今日首次登陆
  var payNumber = ob.row1.totalPay //付费账号
  var payAmount = ob.row1.totalPayAmount //付费金额
  var dayrate
  if (add === "NaN" || add === null || add === '') { //今日新增
    add = 0;
  }
  if (active === "NaN" || active === null) { //今日活跃
    active = 0;
  }
  if (firstIn === "NaN" || firstIn === null) { //今日首次登陆
    firstIn = 0;
  }
  if (payNumber === "NaN" || payNumber === null) { //付费账号
    payNumber = 0;
  }
  if (payAmount === "NaN" || payAmount === null) { //付费金额
    payAmount = 0;
  }
  if (ob.row1.totaldayAccount == "NaN" || ob.row1.totaldayAccount == null) {
    ob.row1.totaldayAccount = 0;
  }
  if (ob.row1.dayRetain == "NaN" || ob.row1.dayRetain == null) {
    ob.row1.dayRetain = 0;
  }
  if (ob.row1.totaldayAccount === 0) {
    dayrate = '0.00'
  } else {
    dayrate = ((ob.row1.dayRetain / ob.row1.totaldayAccount) * 100).toFixed(2)
  }

  $("#leiji").text('+' + add); //新增
  $("#guanwang").text('+' + active); //活跃
  $("#huo").text('+' + firstIn); //首登
  $("#jin").text('+' + payNumber); //付费账号
  $("#ren").text('+' + payAmount); //付费金额
  $("#peopleNum").text(dayrate + '%'); //留存
}

function numberlastday(ob) {
  var add = ob.row1.totalRegister //今日新增
  var active = ob.row1.totalActive //今日活跃
  var firstIn = ob.row1.totalFirstLogin //今日首次登陆
  var payNumber = ob.row1.totalPay //付费账号
  var payAmount = ob.row1.totalPayAmount //付费金额
  var dayrate
  if (add === "NaN" || add === null || add === '') { //今日新增
    add = 0;
  }
  if (active === "NaN" || active === null) { //今日活跃
    active = 0;
  }
  if (firstIn === "NaN" || firstIn === null) { //今日首次登陆
    firstIn = 0;
  }
  if (payNumber === "NaN" || payNumber === null) { //付费账号
    payNumber = 0;
  }
  if (payAmount === "NaN" || payAmount === null) { //付费金额
    payAmount = 0;
  }
  if (ob.row1.totaldayAccount == "NaN" || ob.row1.totaldayAccount == null) {
    ob.row1.totaldayAccount = 0;
  }
  if (ob.row1.dayRetain == "NaN" || ob.row1.dayRetain == null) {
    ob.row1.dayRetain = 0;
  }
  if (ob.row1.totaldayAccount === 0) {
    dayrate = '0.00'
  } else {
    dayrate = ((ob.row1.dayRetain / ob.row1.totaldayAccount) * 100).toFixed(2)
  }
  $("#add").text('+' + add); //新增
  $("#acti").text('+' + active); //活跃
  $("#fir").text('+' + firstIn); //首登
  $("#renern").text('+' + payNumber); //付费账号
  $("#pay").text('+' + payAmount); //付费金额
  $("#stay").text(dayrate + '%'); //留存
}
//按日期查询的表格
function onreal(ob) {
  //新增
  $("#real-datatable").bootstrapTable('destroy')
  $("#real-datatableA").bootstrapTable('destroy')
  $("#real-datatable2").bootstrapTable('destroy')
  $("#real-datatable3").bootstrapTable('destroy')
  $("#real-datatabl4").bootstrapTable('destroy')
  $("#real-datatabl5").bootstrapTable('destroy')
  $("#real-tbody").empty();
  $("#real-tbodyA").empty();
  $("#real-tbody2").empty();
  $("#real-tbody3").empty();
  $("#real-tbody4").empty();
  $("#real-tbody5").empty();
  if (ob.data)
    for (var i = 0; i < ob.data.length; i++) {
      var date = ob.data[i].timepoint
      var index = date.indexOf(' ')
      var someDate = date.substring(index, index + 6)
      var regis = ob.data[i].register //新增
      var acti = ob.data[i].active //活跃
      var firlogin = ob.data[i].firstlogin //激活
      var payNumber = ob.data[i].numofpay //付费账号
      var payAmount = ob.data[i].payamount //付费金额
      $("#real-tbody").append(
        "<tr><td>" + someDate +
        "</td><td>" + regis +
        "</td></tr>"
      )
      $("#real-tbodyA").append(
        "<tr><td>" + someDate +
        "</td><td>" + acti +
        "</td></tr>"
      )
      $("#real-tbody2").append(
        "<tr><td>" + someDate +
        "</td><td>" + firlogin +
        "</td></tr>"
      )
      $("#real-tbody3").append(
        "<tr><td>" + someDate +
        "</td><td>" + payAmount +
        "</td></tr>"
      )
      $("#real-tbody4").append(
        "<tr><td>" + someDate +
        "</td><td>" + payNumber +
        "</td></tr>"
      )
    };
  $("#real-datatable").bootstrapTable({
    method: 'post',
    cache: false,
    height: 500,
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
  $("#real-datatable2").bootstrapTable({
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
  $("#real-datatable3").bootstrapTable({
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
  $("#real-datatable4").bootstrapTable({
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
  //留存
  if (ob.rows)
    for (var i = 0; i < ob.rows.length; i++) {
      var date = ob.rows[i].timePoint
      var index = date.indexOf(' ')
      var someDate = date.substring(index, index + 6)
      var dayRate
      if (ob.rows[i].dayAccount === 0) {
        dayRate = '0.00%'
      } else {
        dayRate = ((ob.rows[i].dayRetain / ob.rows[i].dayAccount).toFixed(2)) + '%'
      }
      $("#real-tbody5").append(
        "<tr><td>" + someDate +
        "</td><td>" + dayRate +
        "</td></tr>"
      )
    };
  $("#real-datatable5").bootstrapTable({
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
Highcharts.setOptions({
  global: {
    useUTC: false
  }
});
//顶部实时
var timeshow
var datahtml
//按日期查的MAX和AVG
function mostAvg(data) {
  var max
  var avg
  max = data.rows.max
  avg = data.rows.avg
  if (max === '' || max === undefined || max === null) {
    max = 0
  }
  if (avg === '' || avg === undefined || avg === null) {
    avg = 0
  }
  document.getElementById('nowmost').innerText = max
  document.getElementById('nowavg').innerText = avg
}
//今天的MAX和AVG
function sample(data, time) {
  var max = data.rows.max
  var avg = data.rows.avg
  if (max === '' || max === undefined || max === null) {
    max = 0
  }
  if (avg === '' || avg === undefined || avg === null) {
    avg = 0
  }
  document.getElementById('changetime').innerText = time.substring(5)
  document.getElementById('querymost').innerText = max
  document.getElementById('queryavg').innerText = avg
  datahtml = timeshow = "<span>" + time.substring(5) + "</span><span>日</span>"
}

function timeshowFun(time) {
  timeshow = "<span>" + time.substring(5) + "</span><span>日</span>"
}
//在线
function topTarget(last, today) {
  console.log(last, today, '11')
  $('#loadAdd').css('display', 'none')
  $('#div-T').css('display', 'block')
  $('#contenton').css('background', '#363636')
  var chart = null;
  var arr = [];
  var arr4 = [];
  var arrNow = [];
  var lineNow = [];
  if (last.data === today.data) {
    for (var i = 0; i < today.data.length; i++) {
      var rqNow = today.data[i].online
      var dateT = today.data[i].timepoint
      var index = dateT.indexOf(' ')
      var someDateNew = dateT.substring(index, index + 6)
      arr.push(rqNow)
      arr4.push(someDateNew)
    }
  } else {
    for (var i = 0; i < last.data.length; i++) {
      var date = last.data[i].timepoint
      var index = date.indexOf(' ')
      var someDate = date.substring(index, index + 6)
      var rq = last.data[i].online
      arr.push(rq)
      arr4.push(someDate)
    }
  }
  if (today.data) {
    for (var i = 0; i < today.data.length; i++) {
      var rqNow = today.data[i].online
      var dateT = today.data[i].timepoint
      var index = dateT.indexOf(' ')
      var someDateNew = dateT.substring(index, index + 6)
      arrNow.push(rqNow)
      lineNow.push(someDateNew)
      //	console.log(arr)
    }
  } else {
    for (var i = 0; i < last.data.length; i++) {
      var date = last.data[i].timepoint
      var index = date.indexOf(' ')
      var someDateA = date.substring(index)
      var someDate = someDateA.substring(0, 6)
      arrNow.push(0)
      lineNow.push(someDate)
    }
  }
  // $.unique(arr4.sort());
  if (arr4.length === 0) {
    arr4 = lineNow
  }
  chart = Highcharts.chart('div-T', {
    chart: {
      height: 275,
      // width:1580,
      marginLeft: 40,
      reflow: true,
      type: 'line',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: '在<br />线<br />帐<br />号<br />',
      align: 'left',
      verticalAlign: 'middle',
      x: -10,
      y: -60,
      useHTML: true,
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
      enabled: false
    },
    xAxis: {
      categories: arr4,
      tickInterval: 12,
      lineWidth: 1,
      lineColor: '#707070',
      tickColor: '#707070',
      gridLineWidth: .5,
      gridLineColor: '#363636',
      gridLineDashStyle: "Dash",
      tickmarkPlacement: 'on',
      labels: {
        style: {
          color: '#999999'
        }
      }
    },
    tooltip: {
      shared: true,
      // useHTML: true,
      // headerFormat: '<span style="font-size:12px;">{point.key}</span><br />',
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
      // formatter: function () {
      // 	return this.x+'<br />'+'注册玩家:' +this.point.y
      // }
    },
    yAxis: {
      title: {
        text: ''
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
    series: [{
      name: '当前',
      data: arrNow,
      lineWidth: 2,
      color: "#D6731B",
      baseSeries: 'exSeries',
      symbolWidth: 35,
      symbol: 'circle',
      tooltip: {
        formatter: function () {
          return '当前' + '&nbsp;&nbsp;' + this.point.y;
        },
      }
    }, {
      id: 'exSeries',
      name: datahtml,
      data: arr,
      lineWidth: 2,
      color: "#999999",
      // tooltip:{
      //     formatter: function() {
      //         return timeshow+this.point.y;
      //     },
      // }
    }, ],
  });

}
//今日新增
function AddUser(datalast, today) {
  $('#loadres').css('display', 'none')
  $('#div-one').css('display', 'block')
  $('#contentzoo').css('background', '#363636')
  var chart = null;
  var arr = [];
  var arr4 = [];
  var arrNow = [];
  var arrFNow = [];
  if (datalast === today) {
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateNow = today.data[i].timepoint.substring(index, index + 6)
      var rqNow = today.data[i].register
      arr.push(rqNow)
      arr4.push(someDateNow)
    }
  } else {
    for (var i = 0; i < datalast.data.length; i++) {
      var index = datalast.data[i].timepoint.indexOf(' ')
      var someDate = datalast.data[i].timepoint.substring(index, index + 6)
      var rq = datalast.data[i].register
      arr.push(rq)
      arr4.push(someDate)
    }
  }
  if (today.data) {
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateNow = today.data[i].timepoint.substring(index, index + 6)
      var rqNow = today.data[i].register
      arrNow.push(rqNow)
      arrFNow.push(someDateNow)
    }
  } else {
    for (var i = 0; i < datalast.data.length; i++) {
      var index = datalast.data[i].timepoint.indexOf(' ')
      var someDate = datalast.data[i].timepoint.substring(index, index + 6)
      arr.push(0)
      arrFNow.push(someDate)
    }
  }
  if (arr4.length === 0) {
    arr4 = arrFNow
  }
  console.log(arr4)
  chart = Highcharts.chart('div-one', {
    chart: {
      height: 275,
      // width:1580,
      reflow: true,
      type: 'line',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: '注<br />册<br />帐<br />号<br />',
      align: 'left',
      verticalAlign: 'middle',
      x: -10,
      y: -60,
      useHTML: true,
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
      enabled: false
    },

    xAxis: {
      categories: arr4,
      gridLineWidth: .5,
      lineWidth: 1,
      lineColor: '#707070',
      tickColor: '#707070',
      tickInterval: 12,
      gridLineColor: '#363636',
      gridLineDashStyle: "Dash",
      tickmarkPlacement: 'on',
      labels: {
        enable: true,
        style: {
          color: '#999'
        }
      }
    },
    tooltip: {
      shared: true,
      // useHTML: true,
      // headerFormat: '<span style="font-size:12px;">{point.key}</span><br/>',
      crosshairs: {
        width: 1,
        color: '#ffffff',
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
    },
    yAxis: {
      title: {
        text: ''
      },
      lineWidth: 1,
      lineColor: '#707070',
      gridLineColor: '#707070',
      labels: {
        format: '{value}',
        style: {
          color: '#999999'
        }
      }
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      // series: {
      //     lineWidth: 2,
      //     color:"#872F9F"
      // },
      // line: {
      //     pointStart:,
      // }
    },
    series: [{
      name: '当前',
      data: arrNow,
      lineWidth: 2,
      color: "#10CFBD",
    }, {
      id: 'exSeries',
      name: timeshow,
      data: arr,
      lineWidth: 2,
      color: "#999999"
    }, ],
  });

}
//活跃总数
function OfficaNum(datalast, today) {
  $('#loadacti').css('display', 'none')
  $('#div-A').css('display', 'block')
  $('#content_one').css('background', '#363636')
  var chartA = null;
  var arrA = [];
  var arrArr = [];
  var arrANow = [];
  var arrArrNow = [];
  if (datalast === today) {
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateANow = today.data[i].timepoint.substring(index, index + 6)
      var rqANow = today.data[i].active
      arrA.push(rqANow)
      arrArr.push(someDateANow)
    }
  } else {
    for (var i = 0; i < datalast.data.length; i++) {
      var index = datalast.data[i].timepoint.indexOf(' ')
      var someDateA = datalast.data[i].timepoint.substring(index, index + 6)
      var rqA = datalast.data[i].active
      arrA.push(rqA)
      arrArr.push(someDateA)
    }
  }
  if (today.data !== null)
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateANow = today.data[i].timepoint.substring(index, index + 6)
      var rqANow = today.data[i].active
      arrANow.push(rqANow)
      arrArrNow.push(someDateANow)
      //	console.log(arr)
    }
  if (arrArr.length === 0) {
    arrArr = arrArrNow
  }
  chartA = Highcharts.chart('div-A', {
    chart: {
      height: 275,
      // width:1580,
      marginLeft: 35,
      reflow: true,
      type: 'line',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: '活<br />跃<br />帐<br />号<br />',
      align: 'left',
      verticalAlign: 'middle',
      x: -10,
      y: -60,
      useHTML: true,
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
      enabled: false
    },
    xAxis: {
      tickmarkPlacement: 'on',
      categories: arrArr,
      gridLineWidth: .5,
      tickInterval: 12,
      lineWidth: 1,
      lineColor: '#707070',
      tickColor: '#707070',
      gridLineColor: '#363636',
      gridLineDashStyle: "Dash",
      labels: {
        style: {
          color: '#999999'
        }
      }
    },
    tooltip: {
      shared: true,
      // useHTML: true,
      // headerFormat: '<span style="font-size:12px;">{point.key}</span><br/>',
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
    },
    yAxis: {
      title: {
        text: ''
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
      // series: {
      //     lineWidth: 2,
      //     color:"#872F9F"
      // }
    },
    series: [{
      name: '当前',
      data: arrANow,
      lineWidth: 2,
      color: "#F55753"
    }, {
      name: timeshow,
      data: arrA,
      lineWidth: 2,
      color: "#999999"
    }, ],
  });
}
//今日首次登陆
function active(datalast, today) {
  $('#loadnext').css('display', 'none')
  $('#div-two').css('display', 'block')
  $('#contentwo').css('background', '#363636')
  var chart1 = null;
  var arr1 = [];
  var arr5 = [];
  var arrFirst = [];
  var arrNow = [];
  if (datalast === today) {
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateNow = today.data[i].timepoint.substring(index, index + 6)
      var rqNow = today.data[i].firstlogin
      arr1.push(rqNow)
      arr5.push(someDateNow)
    }
  } else {
    for (var i = 0; i < datalast.data.length; i++) {
      var index = datalast.data[i].timepoint.indexOf(' ')
      var someDate = datalast.data[i].timepoint.substring(index, index + 6)
      var rq = datalast.data[i].firstlogin
      arr1.push(rq)
      arr5.push(someDate)
    }
  }
  if (today.data !== null)
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateNow = today.data[i].timepoint.substring(index, index + 6)
      var rqNow = today.data[i].firstlogin
      arrFirst.push(rqNow)
      arrNow.push(someDateNow)
    }
  if (arr5.length === 0) {
    arr5 = arrNow
  }
  chart1 = Highcharts.chart('div-two', {
    chart: {
      height: 275,
      // width:1580,
      marginLeft: 45,
      reflow: true,
      type: 'line',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: '激<br />活<br />帐<br />号<br />',
      align: 'left',
      verticalAlign: 'middle',
      x: -10,
      y: -60,
      useHTML: true,
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
      enabled: false
    },
    xAxis: {
      tickmarkPlacement: 'on',
      categories: arr5,
      gridLineWidth: .5,
      tickInterval: 12,
      gridLineColor: '#363636',
      gridLineDashStyle: "Dash",
      lineWidth: 1,
      lineColor: '#707070',
      tickColor: '#707070',
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
      // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
    },
    yAxis: {
      title: {
        text: ''
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
      // series: {
      //     lineWidth: 2,
      //     color:"#872F9F"
      // }
    },
    series: [{
      name: '当前',
      data: arrFirst,
      lineWidth: 2,
      color: "#A873EC"
    }, {
      name: timeshow,
      data: arr1,
      lineWidth: 2,
      color: "#999999"
    }, ],
  });

}
//今日付费总金额
function PayMoney(datalast, today) {
  $('#loadpay').css('display', 'none')
  $('#div-three').css('display', 'block')
  $('#contenthree').css('background', '#363636')
  var chart2 = null;
  var arr1 = [];
  var arr5 = [];
  var arrFirst = [];
  var arrNow = [];
  // if(data.data!=null)
  // for (var i = 0; i < data.data.length; i++) {
  //     var index=data.data[i].timepoint.indexOf(' ')
  // 	var someDate = data.data[i].timepoint.substring(index,index+6)
  // 	var rq = data.data[i].payamount
  // 	arr2.push(rq)
  // 	arr6.push(someDate)
  // 	//	console.log(arr)
  // }
  if (datalast === today) {
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateNow = today.data[i].timepoint.substring(index, index + 6)
      var rqNow = today.data[i].payamount
      arr1.push(rqNow)
      arr5.push(someDateNow)
    }
  } else {
    for (var i = 0; i < datalast.data.length; i++) {
      var index = datalast.data[i].timepoint.indexOf(' ')
      var someDate = datalast.data[i].timepoint.substring(index, index + 6)
      var rq = datalast.data[i].payamount
      arr1.push(rq)
      arr5.push(someDate)
    }
  }
  if (today.data !== null)
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateNow = today.data[i].timepoint.substring(index, index + 6)
      var rqNow = today.data[i].payamount
      arrFirst.push(rqNow)
      arrNow.push(someDateNow)
    }
  if (arr5.length === 0) {
    arr5 = arrNow
  }
  chart2 = Highcharts.chart('div-three', {
    chart: {
      height: 275,
      // width:1580,
      marginLeft: 35,
      reflow: true,
      type: 'line',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: '付<br />费<br />金<br />额<br />',
      align: 'left',
      verticalAlign: 'middle',
      x: -10,
      y: -60,
      useHTML: true,
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
      enabled: false
    },
    xAxis: {
      tickmarkPlacement: 'on',
      categories: arr5,
      gridLineWidth: 0,
      tickInterval: 12,
      gridLineColor: '#363636',
      lineWidth: 1,
      lineColor: '#707070',
      gridLineColor: '#707070',
      gridLineDashStyle: "Dash",
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
    },
    yAxis: {
      title: {
        text: ''
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
      // series: {
      //     lineWidth: 2,
      //     color:"#872F9F"
      // }
    },
    series: [{
      name: '当前',
      data: arrFirst,
      lineWidth: 2,
      color: "#A873EC"
    }, {
      name: timeshow,
      data: arr1,
      lineWidth: 2,
      color: "#999999"
    }, ],
  });

}
//付费人数
function PayNum(datalast, today) {
  $('#loadamount').css('display', 'none')
  $('#div-four').css('display', 'block')
  $('#contenfour').css('background', '#363636')
  var chart3 = null;
  var arr1 = [];
  var arr5 = [];
  var arrFirst = [];
  var arrNow = [];
  // if(data.data!=null)
  // for (var i = 0; i < data.data.length; i++) {
  //     var index=data.data[i].timepoint.indexOf(' ')
  // 	var someDate = data.data[i].timepoint.substring(index,index+6)
  // 	var rq = data.data[i].device_count
  // 	arr3.push(rq)
  // 	arr7.push(someDate)
  // 	//	console.log(arr)
  // }
  if (datalast === today) {
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateNow = today.data[i].timepoint.substring(index, index + 6)
      var rqNow = today.data[i].numofpay
      arr1.push(rqNow)
      arr5.push(someDateNow)
    }
  } else {
    for (var i = 0; i < datalast.data.length; i++) {
      var index = datalast.data[i].timepoint.indexOf(' ')
      var someDate = datalast.data[i].timepoint.substring(index, index + 6)
      var rq = datalast.data[i].numofpay
      arr1.push(rq)
      arr5.push(someDate)
    }
  }
  if (today.data !== null)
    for (var i = 0; i < today.data.length; i++) {
      var index = today.data[i].timepoint.indexOf(' ')
      var someDateNow = today.data[i].timepoint.substring(index, index + 6)
      var rqNow = today.data[i].numofpay
      arrFirst.push(rqNow)
      arrNow.push(someDateNow)
    }
  if (arr5.length === 0) {
    arr5 = arrNow
  }
  chart3 = Highcharts.chart('div-four', {
    chart: {
      height: 275,
      // width:1580,
      marginLeft: 35,
      reflow: true,
      type: 'spline',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: '付<br />费<br />帐<br />号<br />',
      align: 'left',
      verticalAlign: 'middle',
      x: -10,
      y: -60,
      useHTML: true,
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
      enabled: false
    },
    xAxis: {
      // type: 'datetime',
      tickmarkPlacement: 'on',
      categories: arr5,
      tickInterval: 12,
      lineWidth: 1,
      lineColor: '#707070',
      tickColor: '#707070',
      gridLineColor: '#c0c0c0',
      gridLineWidth: 0,
      // gridLineDashStyle:"Dash",
      labels: {
        enable: true,

        style: {
          color: '#fff'
        }
      }
    },
    tooltip: {
      // formatter: function () {
      // 	return this.x+'<br />' + this.series.name +':'+
      //         this.point.y + '个';
      // }
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
    },
    yAxis: {
      title: {
        text: ''
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
      // align: 'center', //水平方向位置
      // verticalAlign: 'top', //垂直方向位置
      // x: 550, //距离x轴的距离
      // y: -10, //距离Y轴的距离
      enabled: false,
    },
    // plotOptions: {
    //     series: {
    //         lineWidth: 2,
    //         color:"#4AA3E5"
    //     }
    // },
    series: [{
      name: '当前',
      data: arrFirst,
      lineWidth: 2,
      color: "#10CFBD"
    }, {
      name: timeshow,
      data: arr1,
      lineWidth: 2,
      color: "#999999"
    }, ],
  });
}
//实时留存
function waitNow(datalast, today) {
  $('#loadretain').css('display', 'none')
  $('#div-five').css('display', 'block')
  $('#contenfive').css('background', '#363636')
  var chart3 = null;
  var arr3 = [];
  var arr7 = [];
  var arrRetain = [];
  var arrTime = []
  if (datalast === today) {
    for (var i = 0; i < today.rows.length; i++) {
      var rqTimeNumber
      var index = today.rows[i].timePoint.indexOf(' ')
      var someDateTime = today.rows[i].timePoint.substring(index, index + 6)
      if (today.rows[i].dayAccount === 0) {
        rqTimeNumber = '0.00'
      } else {
        rqTimeNumber = ((today.rows[i].dayRetain / today.rows[i].dayAccount) * 100).toFixed(2)
      }
      arr3.push(parseFloat(rqTimeNumber))
      arr7.push(someDateTime)
    }
  } else {
    for (var i = 0; i < datalast.rows.length; i++) {
      var rqNumber
      var index = datalast.rows[i].timePoint.indexOf(' ')
      var someDate = datalast.rows[i].timePoint.substring(index, index + 6)
      if (datalast.rows[i].dayAccount === 0) {
        rqNumber = '0.00'
      } else {
        rqNumber = ((datalast.rows[i].dayRetain / datalast.rows[i].dayAccount) * 100).toFixed(2)
      }
      arr3.push(parseFloat(rqNumber))
      arr7.push(someDate)
    }
  }
  if (today.rows !== null)
    for (var i = 0; i < today.rows.length; i++) {
      var rqTimeNumber
      var index = today.rows[i].timePoint.indexOf(' ')
      var someDateTime = today.rows[i].timePoint.substring(index, index + 6)
      if (today.rows[i].dayAccount === 0) {
        rqTimeNumber = '0.00'
      } else {
        rqTimeNumber = ((today.rows[i].dayRetain / today.rows[i].dayAccount) * 100).toFixed(2)
      }
      arrRetain.push(parseFloat(rqTimeNumber))
      arrTime.push(someDateTime)
    }
  if (arr7.length === 0) {
    arr7 = arrTime
  }
  chart3 = Highcharts.chart('div-five', {
    chart: {
      height: 275,
      // width:1580,
      marginLeft: 35,
      reflow: true,
      type: 'line',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: '实<br />时<br />留<br />存<br />',
      align: 'left',
      verticalAlign: 'middle',
      x: -10,
      y: -60,
      useHTML: true,
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
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      tickmarkPlacement: 'on',
      categories: arr7,
      gridLineWidth: .5,
      gridLineColor: '#363636',
      gridLineDashStyle: "Dash",
      lineWidth: 1,
      lineColor: '#707070',
      tickColor: '#707070',
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
      // headerFormat: '<span style="font-size:12px">{point.key}</span><br/>',
      valueSuffix: '%'
    },
    yAxis: {
      title: {
        text: ''
      },
      lineWidth: 1,
      lineColor: '#707070',
      gridLineColor: '#707070',
      labels: {
        format: '{value}',
        style: {
          color: '#999999',

        }
      },
      valueSuffix: '%'
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      // series: {
      //     lineWidth: 2,
      //     color:"#872F9F"
      // }
    },
    series: [{
      name: '当前',
      data: arrRetain,
      lineWidth: 2,
      color: "#D6731B",
      tooltip: {
        //             formatter:function() {
        //     return (this.value*100).toFixed(2)
        // },
        valueSuffix: '%'
      }
    }, {
      name: timeshow,
      data: arr3,
      lineWidth: 2,
      color: "#999999",
      tooltip: {
        // formatter:function() {
        //     return (this.value*100).toFixed(2)
        // },
        valueSuffix: '%'
      }
    }],
  });
}