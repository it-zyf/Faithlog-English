window.setInterval(banben,10)
function banben(){
  if (window.location.host == "107.155.50.61:9100") {
    $(".topTag span").html(" | 泰国版")
  } else {
    $(".topTag span").html(" | 英文版")
  }
}

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
  var seDate = texts + "~" + texte
  retentionTable(seDate)
}

function change() {
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
  $('#div-one').css('display', 'none')
  $('#loadchart').css('display', 'block')
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
  var seDate = text1 + '~' + textTime
  retentionTable(seDate)
}

function retentionTable(seDate) {
  var districtId = $("#district").val(); //区服
  var channelId = $("#channel").val(); //渠道号
  if (districtId != null) {
    districtId = districtId.join(",");
  }
  if (channelId != null) {
    channelId = channelId.join(",");
  }
  $('#loadtable').css('display', 'none')
  $('#real-datatableAll').css('display', 'block')
  var t = $("#real-datatableAll").bootstrapTable({
    url: requestURL + 'querylossOfTask',
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
    sidePagination: "server", //客户端处理分页
    queryParams: function (params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
      return { //这里的params是table提供的
        pageIndex: params.pageNumber, //从数据库第几条记录开始
        pageSize: params.pageSize, //找多少条
        serverId: districtId,
        seDate: seDate,
        channelId: channelId
      };
    },
    idField: "logTime", //指定主键列
    columns: [{
        title: '任务ID',
        field: 'taskId',
        align: 'center',
      }, {
        title: '流失人数',
        field: 'num',
        align: 'center',
      }

    ]
  });
  t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
    $("#page-wrapper").mLoading("hide");
  });
}