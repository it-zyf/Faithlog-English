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

function change() {
  // $.ajax({
  //   type: "get",
  //   url: serverURL + "analysis/queryStoreType",
  //   async: false,
  //   success: function (obj) {
  //     for (var i = 0; i < obj.data.length; i++) {
  //       $("#market").append("<option value='" + obj.data[i].goodsId + "'>" + obj.data[i].goodsId + "</option>");
  //     }
  //   }
  // })
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
  retentionTable(text1, textTime)
}

function retentionTable(startTime, endTime) {
  var districtId = $("#district").val(); //区服
  var channelId = $("#channel").val(); //渠道号
  var market = $("#market").val(); //商场
  if (districtId != null) {
    districtId = districtId.join(",");
  }
  if (channelId != null) {
    channelId = channelId.join(",");
  }
  $('#loadtable').css('display', 'none')
  $('#real-datatableAll').css('display', 'block')
  var t = $("#real-datatableAll").bootstrapTable({
    url: requestURL + 'analysis/queryMall',
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
        channelId: channelId,
        startTime: startTime,
        endTime: endTime,
        type: market
      };
    },
    responseHandler: function (res) {
      return {
        "total": res.count,
        "rows": res.data
      }
    },
    idField: "logTime", //指定主键列
    columns: [{
      title: '商店名称',
      field: 'goodsId',
      align: 'center',
      formatter: function (value, row, index) {
        var day = row.goodsId
        switch (day) {
          case "34000001":
            return "推荐商店"
            break;
          case "34000002":
            return "常用道具"
            break;
          case "34000003":
            return "成长变强"
            break;
          case "34000004":
            return "紫钻商店-变强道具"
            break;
          case "34000005":
            return "蓝钻商店-VIP商店"
            break;
          case "34000006":
            return "限时商店1"
            break;
          case "34000007":
            return "古币商店1"
            break;
          case "34000008":
            return "古币商店2"
            break;
          case "34000009":
            return "军团橙装碎片"
            break;
          case "34000010":
            return "军团护符"
            break;
          case "34000011":
            return "魔晶兑换2"
            break;
          case "34000012":
            return "魔晶兑换3"
            break;
          case "34000013":
            return "绑金商店"
            break;
          case "34000014":
            return "金币商店-改绑金商店"
            break;
          case "34000015":
            return "祈福积分兑换页签1"
            break;
          case "34000016":
            return "祈福积分兑换页签2"
            break;
          case "34000017":
            return "祈福积分兑换页签3"
            break;
          case "34000018":
            return "军团商店物品兑换分页"
            break;
          case "34000019":
            return "荣耀商店物品兑换分页"
            break;
          case "34000020":
            return "助战商店"
            break;
          case "34000021":
            return "外形商店"
            break;
          case "34000022":
            return "紫钻商店-常用道具"
            break;
          case "34000023":
            return "绑钻商店3"
            break;
          case "34000024":
            return "寻宝1"
            break;
          case "34000025":
            return "寻宝2"
            break;
          case "34000026":
            return "跨服商店"
            break;
          case "34000027":
            return "红钻商店-常用"
            break;
          case "34000028":
            return "天梯商店"
            break;
          case "34000029":
            return "红钻商店-变强道具"
            break;
          case "34000030":
            return "助战商店技能书"
            break;
          default:
            console.log("Something went horribly wrong...");
        }
      }
    }, {
      title: '商品ID',
      field: 'itemId',
      align: 'center',
    }, {
      title: '商品累计售出件数',
      field: 'totalNum',
      align: 'center',
    }, {
      title: '商品售出货币ID',
      field: 'costMoneyType',
      align: 'center',
    }, {
      title: '商品累计售出总额',
      field: 'constMoneyNum',
      align: 'center',
    }]
  });
  t.on('load-success.bs.table', function (data) { //table加载成功后的监听函数
    $("#page-wrapper").mLoading("hide");
  });
}

var GoodName = [
  "",
  "常用道具",
  "成长变强",
  "紫钻商店-变强道具",
  "蓝钻商店-VIP商店",
  "限时商店1",
  "古币商店1",
  "古币商店2",
  "军团橙装碎片",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]