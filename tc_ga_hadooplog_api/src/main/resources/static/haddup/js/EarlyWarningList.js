var vm2 = new Vue({
  el: '#setValue',
  data: {
    dialogFormVisible: false,
    form: {
      red: '60',
      yellow: '120',
    },
    formLabelWidth: '120px',
  }
})
change()

function load() {
  $(".right").mLoading("show");
}

function onblu() {

  $("#real-datatableAll").bootstrapTable('destroy');
  $('#real-datatableAll').css('display', 'none')
  $('#loadtable').css('display', 'block')
  var timeMM = document.getElementsByClassName('el-range-input')
  var texts = timeMM[0].value
  var texte = timeMM[1].value
  retentionTable(texts, texte)
}
$(".List div").click(function () {
  $("#real-datatableAll").bootstrapTable('destroy');
  $('#real-datatableAll').css('display', 'none')
  $('#loadtable').css('display', 'block')
  var dividx = $(".List div").index(this)
  $(this).addClass("click-item").siblings().removeClass("click-item")
  homedata()
})

function change() {
  $.ajax({
    type: "get",
    url: channelURL + "analysis/queryVipLevel",
    async: false,
    data: {
      type: 2
    },
    success: function (obj) {
      for (var i = 0; i < obj.data.length; i++) {
        $("#VIP").append("<option value='" + obj.data[i].vipLevel + "'>" + "V" + obj.data[i].vipLevel + "</option>");
      };
      $("#VIP").each(function () {
        $(this).find("option").attr("selected", "selected")
      })
      $('#VIP').multiselect("destroy").multiselect({
        buttonWidth: '75%',
        nonSelectedText: '请选择',
        maxHeight: 200,
        numberDisplayed: 1,
        includeSelectAllOption: true,
        selectAllText: '全选/全不选', //全选按钮显示的文本
        nSelectedText: '项被选中',
        allSelectedText: '已选中所有VIP等级',
      });
    }
  })
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
  $.ajax({
    type: "get",
    url: serverURL + "queryAreas",
    async: false,
    success: function (obj) {
      for (var i = 0; i < obj.rows.length; i++) {
        $("#district").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
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

function homedata() {

  $('#real-datatableAll').css('display', 'none')
  //$('#loadtable').css('display', 'block')
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
var roleId;
var channelId1
var serverId1
var mode;

var count = 0;
function retentionTable(startTime, endTime) {
  var districtId = $("#district").val(); //区服
  var channelId = $("#channel").val(); //渠道号
  var VIPtype = $("#VIP").val(); //VIP
  if (vm2 == undefined) {
    var redWarningValue = 60
    var yellowWarningValue = 120
  } else {
    var redWarningValue = vm2.form.red
    var yellowWarningValue = vm2.form.yellow
  }

  if (districtId != null) {
    districtId = districtId.join(",");
  }
  if (channelId != null) {
    channelId = channelId.join(",");
  }
  if (VIPtype != null) {
    VIPtype = VIPtype.join(",");
  }

  var value = $(".List .click-item").attr("id")
  if (value == undefined) {
    value = ""
  }
  // var data
  // $.ajax({
  //   type: "post",
  //   url: requestURL + 'severEarlyWarning',
  //   async: true,
  //   data:{
  //     pageIndex: 1, //从数据库第几条记录开始
  //     pageSize: 30, //找多少条
  //     serverId: districtId,
  //     startTime: startTime,
  //     endTime: endTime,
  //     channelId: channelId,
  //     roleType: value,
  //     redWarningValue: redWarningValue,
  //     yellowWarningValue: yellowWarningValue
  //   },
  //   success: function (obj) {
  //     data = obj.rows
  //   }
  // });
  $('#loadtable').css('display', 'none')
  $('#real-datatableAll').css('display', 'table')

  var t = $("#real-datatableAll").bootstrapTable({
    url: requestURL + 'severEarlyWarning',
    method: 'post',
    dataType: "json",
    contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
    //data:data,
    queryParamsType: "",
    striped: true, //设置为 true 会有隔行变色效果
    undefinedText: "0", //当数据为 undefined 时显示的字符
    pagination: true, //分页
    paginationLoop: false,
    sortable: true, //是否启用排序
    sortOrder: "desc", //排序方式,排序升序asc或者降序desc
    // paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
    showToggle: false, //是否显示 切换试图（table/card）按钮
    // showColumns: "true", //是否显示 内容列下拉框
    pageNumber: 1, //如果设置了分页，首页页码
    // showPaginationSwitch:true,//是否显示 数据条数选择框
    pageSize: 16, //如果设置了分页，页面数据条数
    pageList: [10, 30, 50, 'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
    paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
    paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
    // singleSelect: false,//设置True 将禁止多选
    search: false, //显示搜索框
    data_local: "zh-US", //表格汉化
    sidePagination: "server", //client客户端分页，server服务端分页（*）
    queryParams: function (params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
      console.log(params)
      if(params.sortName == "warningLevel" && count%2 == 0){
        count ++;
        params.sortOrder = "asc"
      }else if(params.sortName == "warningLevel" && count%2 == 1){
        count ++;
        params.sortOrder = "desc"
      }
      console.log(params)
      return { //这里的params是table提供的
        pageIndex: params.pageNumber, //从数据库第几条记录开始
        pageSize: params.pageSize, //找多少条
        serverId: districtId,
        startTime: startTime,
        endTime: endTime,
        channelId: channelId,
        roleType: value,
        redWarningValue: redWarningValue,
        yellowWarningValue: yellowWarningValue,
        sortName: params.sortName,
        sortOrder: params.sortOrder,
        type: VIPtype
      };
    },
    onClickRow: function (row, $element) {
      console.log(row)
      channelId1 = row.channelId
      serverId1 = row.serverId
      roleId = row.roleId

      if (mode == 1) {
        gethref()
      }
    },
    //idField: "id", //指定主键列
    columns: [{
      title: '排名',
      field: 'rank',
      align: 'center',
    },
      {
        title: '账号ID',
        field: 'accountId',
        align: 'center',
        width: 200
      },
      {
        title: '角色ID',
        field: 'roleId',
        align: 'center',
        width: 200,
      }, {
        title: '角色名',
        field: 'roleName',
        align: 'center',
      }, {
        title: '职业',
        field: 'roleType',
        align: 'center',
        formatter: function (value, row, index) {
          if (roleName[row.roleType]) {
            return roleName[row.roleType]
          } else {
            return row.roleType
          }
        }
      }, {
        title: '昨日在线时长',
        field: 'onlineTimeYesterDay',
        align: 'center',
      }, {
        title: '等级',
        field: 'roleLevel',
        align: 'center',
        sortable: true,


      }, {
        title: '玩家战力',
        field: 'rolePower',
        align: 'center',
        sortable: true
      }, {
        title: 'VIP等级',
        field: 'vipLevel',
        align: 'center',
        sortable: true
      }, {
        title: '预警等级',
        field: 'warningLevel',
        align: 'center',
        sortable: true,
        formatter: function (value, row, index) {
          if (row.warningLevel == 1) {
            return "一级"
          } else if (row.warningLevel == 2) {
            return "二级"
          } else if (row.warningLevel == 3) {
            return "三级"
          } else {
            return row.warningLevel
          }
        },

      }, {
        title: '预警分析',
        field: '',
        align: 'center',
        formatter: function (value, row, index) {
          return `<a href="javascript:;" type="button" class="btn" style="background-color:rgb(128,255,255);" onclick="getValue()">每日在线时长分析</a>`
        }
      },
    ]
  });
  t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
    $("#page-wrapper").mLoading("hide");


  });
  var t = $("#replaceTable").bootstrapTable({
    url: requestURL + 'severEarlyWarning',
    method: 'post',
    dataType: "json",
    contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
    //data:data,
    queryParamsType: "",
    striped: true, //设置为 true 会有隔行变色效果
    undefinedText: "0", //当数据为 undefined 时显示的字符
    pagination: true, //分页
    paginationLoop: false,
    showLoading:false,//去掉loading
    sortable: true, //是否启用排序
    sortOrder: "desc", //排序方式,排序升序asc或者降序desc
    // paginationLoop:true,//设置为 true 启用分页条无限循环的功能。
    showToggle: false, //是否显示 切换试图（table/card）按钮
    // showColumns: "true", //是否显示 内容列下拉框
    pageNumber: 1, //如果设置了分页，首页页码
    // showPaginationSwitch:true,//是否显示 数据条数选择框
    pageSize: 16, //如果设置了分页，页面数据条数
    pageList: [10, 30, 50, 'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
    paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
    paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
    // singleSelect: false,//设置True 将禁止多选
    search: false, //显示搜索框
    data_local: "zh-US", //表格汉化
    sidePagination: "server", //client客户端分页，server服务端分页（*）
    queryParams: function (params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
      console.log(params)
      return { //这里的params是table提供的
        pageIndex: params.pageNumber, //从数据库第几条记录开始
        pageSize: params.pageSize, //找多少条
        serverId: districtId,
        startTime: startTime,
        endTime: endTime,
        channelId: channelId,
        roleType: value,
        redWarningValue: redWarningValue,
        yellowWarningValue: yellowWarningValue,
        sortName: params.sortName,
        sortOrder: params.sortOrder,
        type: VIPtype
      };
    },
    //idField: "id", //指定主键列
    columns: [{
      title: '排名',
      field: 'rank',
      align: 'center',
    },
      {
        title: '账号ID',
        field: 'accountId',
        align: 'center',
        width: 300
      },
      {
        title: '角色ID',
        field: 'roleId',
        align: 'center',
        width: 300,
        formatter :function (value,row,index) {
          return '`' + row.roleId
        }

      }, {
        title: '角色名',
        field: 'roleName',
        align: 'center',
        align: 'center',
      }, {
        title: '职业',
        field: 'roleType',
        align: 'center',
        formatter: function (value, row, index) {
          if (roleName[row.roleType]) {
            return roleName[row.roleType]
          } else {
            return row.roleType
          }
        }
      }, {
        title: '昨日在线时长',
        field: 'onlineTimeYesterDay',
        align: 'center',
      }, {
        title: '等级',
        field: 'roleLevel',
        align: 'center',
        sortable: true,


      }, {
        title: '玩家战力',
        field: 'rolePower',
        align: 'center',
        sortable: true
      }, {
        title: 'VIP等级',
        field: 'vipLevel',
        align: 'center',
        sortable: true
      }, {
        title: '预警等级',
        field: 'warningLevel',
        align: 'center',
        sortable: true,
        sortOrder:'desc',
        formatter: function (value, row, index) {
          if (row.warningLevel == 1) {
            return "一级"
          } else if (row.warningLevel == 2) {
            return "二级"
          } else if (row.warningLevel == 3) {
            return "三级"
          } else {
            return row.warningLevel
          }
        }
      }, {
        title: '预警分析',
        field: '',
        align: 'center',
        formatter: function (value, row, index) {
          return `<a href="javascript:;" type="button" class="btn" style="background-color:rgb(128,255,255);" onclick="getValue()">每日在线时长分析</a>`
        }
      },
    ]

  });
  $(replaceTable).bootstrapTable('hideLoading')
  t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
    $("#replaceTable").parents(".bootstrap-table")[0].style.display = "none"
  });
  var tab = document.getElementById('real-datatableAll')
  var trs = tab.getElementsByTagName('thead')
  var the = $("#real-datatableAll thead th")
  // console.log(the)
  for (var i = 6; i < the.length; i++) {
    console.log(the[i])
    for (var j = 0; j < the.length; j++) {
      the[6].style.background = '#80FFFF';
    }
  }
}


var tab = document.getElementById('real-datatableAll')
var trs = tab.getElementsByTagName('thead')
var the = $("#real-datatableAll thead th")
// console.log(the)
for (var i = 6; i < the.length; i++) {
  console.log(the[i])

  the[i].onclick = yanse

}

function yanse() {
  $("tbody").mLoading("show");
  var tab = document.getElementById('real-datatableAll')
  var trs = tab.getElementsByTagName('thead')
  var the = $("#real-datatableAll thead th")

  for (var i = 0; i < the.length; i++) {

    if (the[i] == this) {
      the[i].style.background = '#80FFFF';
    }
    else {
      the[i].style.background = "#1B1B1B";
    }
  }
};




$("#red").css("background-color","gray");







function getValue() {
  mode = 1
}
function gethref() {
  var timeMM = document.getElementsByClassName('el-range-input')
  var texts = timeMM[0].value
  var texte = timeMM[1].value


  window.location.href = "dailyOnlineDuration.html?roleId=" + roleId + "&xstart=" + texts + "&xend=" + texte + "&channelId=" + channelId1 + "&serverId=" + serverId1




}
var roleName = [
  "",
  "战士",
  "法师",
  "守护者",
  "刺客",
]
