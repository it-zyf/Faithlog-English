

change()


function load() {
  $(".right").mLoading("show");
}

function onblu() {
  var roleID = $("#roleID").val()
  if (roleID == null || roleID == undefined || roleID == "") {
    alert("请输入角色ID")
    return false;
  }
  $('#loadtable').css('display', 'block')
  var timeMM = document.getElementsByClassName('el-range-input')
  var texts = timeMM[0].value
  var texte = timeMM[1].value
  retentionTable(texts, texte)

}

function change() {



  homedata()
}

function homedata() {
  //获取URL携带的参数
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    setserverall();
    setserverall22();
    return null;
  }
  if ($.getUrlParam("roleId") == null || $.getUrlParam("roleId") == undefined || $.getUrlParam("roleId") == "" ) {
    return true;
  }

  $('#real-datatableAll').css('display', 'none')
  $('#loadtable').css('display', 'block')
  var time
  var text1
  var textTime
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
  retentionTable(text1, textTime)
}

function setserverall() {
  $.ajax({
    type: "get",
    url: serverURL + "queryAreas",
    async: false,
    success: function (obj) {
      for (var i = 0; i < obj.rows.length; i++) {
        $("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
      }
      $("#district").each(function () {

        $(this).find("option").attr("selected", "true")


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
    }
  })
}
function setserverone() {
  $.ajax({
    type: "get",
    url: serverURL + "queryAreas",
    async: false,
    success: function (obj) {
      var ServerID = $.getUrlParam("serverId");
      for (var i = 0; i < obj.rows.length; i++) {
        if(ServerID==obj.rows[i].areaid)
        $("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
      }
      $("#district").each(function () {

        $(this).find("option").attr("selected", "true")


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
    }
  });
}

function setserverall() {
  $.ajax({
    type: "get",
    url: serverURL + "queryAreas",
    async: false,
    success: function (obj) {
      for (var i = 0; i < obj.rows.length; i++) {
        $("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
      }
      $("#district").each(function () {

        $(this).find("option").attr("selected", "true")


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
    }
  })
}

function setserverall22() {
  $.ajax({
    type: "get",
    url: channelURL + "queryField",
    async: false,
    data: {
      type: 2
    },
    success: function (obj) {
      for (var i = 0; i < obj.rows.length; i++) {
        $("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      };
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
  })
}

function setserverone1() {
  $.ajax({
    type: "get",
    url: serverURL + "queryField",
    async: false,
    success: function (obj) {
      var chian = $.getUrlParam("channelId11");
      for (var i = 0; i < obj.rows.length; i++) {
        if(chian==obj.rows[i].id)
          $("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      }
      $("#channel").each(function () {

        $(this).find("option").attr("selected", "true")


      })
      $('#channel').multiselect("destroy").multiselect({
        buttonWidth: '80%',
        nonSelectedText: '请选择',
        maxHeight: 200,
        numberDisplayed: 1,
        includeSelectAllOption: true,
        selectAllText: '全选/全不选', //全选按钮显示的文本
        nSelectedText: '项被选中',
        allSelectedText: '已选中所有区服',
      });
    }
  });
}








function retentionTable(startTime, endTime) {
  $('#titleLoadAdd').css('display', 'block')
  var value = $("#roleID").val()

  //获取URL携带的参数
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }

    return null;
  }



  if ($.getUrlParam("roleId") != null) {

    value = $.getUrlParam("roleId")
    $('#roleID').val($.getUrlParam("roleId"))



  }
  if ($.getUrlParam("serverId") != null) {
    setserverone();
  }
  // if ($.getUrlParam("channelId11") != null) {
  //   setserverone1();
  // }

  if ($.getUrlParam("channelId11") != null) {
    setserverone1();
  }
  // var op = $("#district option:selected")
  // console.log(op)
  // var  artime_val  = op.val();
  // console.log(artime_val)
  // $("#district").each(function () {
  //
  //   $(op).find("option").attr("selected", "false")
  //
  //
  // })











  var districtId = $("#district").val();//区服

  var channelId = $("#channel").val(); //渠道号
  if (districtId != null) {
    districtId = districtId.join(",");
  }
  if (channelId != null) {
    channelId = channelId.join(",");
  }
  var chart = null;
  var arr = [];
  var arr4 = [];
  $.ajax({
    type: "get",
    url: requestURL + "serverDailyOnlineTime",
    async: false,
    data: {

      startTime: startTime,
      endTime: endTime,
      roleId: value,
    },
    success: function (obj) {
      for (var i = obj.rows.length - 1; i >= 0; i--) {
        var date = obj.rows[i].logTime
        var rq = obj.rows[i].onlineTime
        arr.push(rq)
        arr4.push(date)
      }
    }
  });
  $('#titleLoadAdd').css('display', 'none')
  chart = Highcharts.chart('chart_online', {
    chart: {
      marginLeft: 60,
      type: 'spline',
      height: '400px',
      backgroundColor: {
        stops: [
          [0, 'rgb(54, 54, 54)']
        ]
      },
    },
    title: {
      text: '每<br>日<br>在<br>线<br>时<br>长',
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

      reversed:true,
      lineWidth: 1,
      lineColor: '#707070',
      tickColor: '#707070',
      gridLineWidth: .5,
      gridLineColor: '#363636',
      gridLineDashStyle: "Dash",
      tickmarkPlacement: 'on',
      type: 'datetime',
      categories: arr4,
      labels: {
        style: {
          color: '#999999'
        }
      }
    },
    tooltip: {
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
        color: "#10CFBD",
        opacity: '1',
        fontSize: "12px",
      },
    },
    yAxis: {
      plotLines:[{
        color:'red',            //线的颜色，定义为红色
        dashStyle:'solid',//标示线的样式，默认是solid（实线），这里定义为长虚线
        value:60,                //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
        width:2,
        label: {

        }

        //标示线的宽度，2px
      },
        {
          color:'yellow',            //线的颜色，定义为红色
          dashStyle:'solid',//标示线的样式，默认是solid（实线），这里定义为长虚线
          value:120,                //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
          width:2,//标示线的宽度，2px
          label: {

          }
        }],

      title: {
        text: ''
      },
      lineWidth: 1,
      lineColor: '#707070',
      gridLineColor: '#707070',

      tickPositions: [0,60,120,400,800,1200,1500],
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
        color: "#10CFBD",
      }
    },
    series: [
      {
        id: 'exSeries',
        name: '在线时长',
        data: arr,
        marker: {
          lineColor: '#10CFBD'
        },
      }],
  });

 
 

}
