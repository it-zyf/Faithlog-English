//
// window.setInterval(banben,10)
// function banben(){
//   if (window.location.host == "107.155.50.61:9100") {
//     $(".topTag span").html(" | 泰国版")
//   } else {
//     $(".topTag span").html(" | 英文版")
//   }
// }
//设置默认时间
var old
var newtime
today()

function today() {
  var today = new Date();
  var y = today.getFullYear();
  //	today.setMonth(today.getMonth()-1)
  var m = today.getMonth() + 1;
  var d = today.getDate();
  if (m >= 1 && m < 10) {
    m = "0" + m
  }
  if (d >= 1 && d < 10) {
    d = "0" + d
  }
  old = y + "-" + m + "-" + d;
  var newtoday = new Date();
  var newy = newtoday.getFullYear();
  var newm = newtoday.getMonth() + 1;
  var newd = newtoday.getDate();
  if (newm >= 1 && newm < 10) {
    newm = "0" + newm
  }
  if (newd >= 1 && newd < 10) {
    newd = "0" + newd
  }
  newtime = newy + "-" + newm + "-" + newd;
}
var times = old + "~" + newtime
////layui配置
layui.use(['element', 'laydate', 'table'], function () {
  var element = layui.element;
  var laydate = layui.laydate;
  var table = layui.table;
  element.init();
  //日历配置
  var now = new Date();
  laydate.render({
    elem: '#datatimes',
    //		type:'datetime',//日期可选时分秒
    range: '~', //日期范围选择
    lang: 'en', //国际化
    format: 'yyyy-MM-dd',
    theme: 'riqi', //自定义类名
    value: old + ' ~ ' + newtime,
    max: 'now',
    trigger: 'click',
    done: function (res) {
      times = res
    }
  });
});
//区服下拉多选
change()

function change() {
  $.ajax({
    type: "get",
    url: serverURL + "queryAreas",
    async: true,
    success: function (obj) {
      $('#district_service').multiselect("destroy")
      for (var i = 0; i < obj.rows.length; i++) {
        $("#district_service").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
      };
      $("#district_service").each(function () {
        $(this).find("option").attr("selected", "selected")
      })
      $('#district_service').multiselect({
        buttonWidth: '68%',
        nonSelectedText: '请选择',
        maxHeight: 200,
        numberDisplayed: 2,
        includeSelectAllOption: true,
        selectAllText: '全选/全不选', //全选按钮显示的文本	
        nSelectedText: '项被选中',
        allSelectedText: '已选中所有区服',
        enableFiltering: false, //搜索框
      });
      onchannel()
    }
  });
}
//渠道号下拉赋值
function onchannel() {
  $.ajax({
    type: "get",
    url: channelURL + "queryField",
    async: true,
    data: {
      type: 2
    },
    success: function (obj) {
      $('#reg_channel').multiselect("destroy")
      for (var i = 0; i < obj.rows.length; i++) {
        $("#reg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      };
      $("#reg_channel").each(function () {
        $(this).find("option").attr("selected", "selected")
      })
      $('#reg_channel').multiselect({
        buttonWidth: '68%',
        nonSelectedText: '请选择',
        maxHeight: 200,
        numberDisplayed: 2,
        includeSelectAllOption: true,
        selectAllText: '全选/全不选', //全选按钮显示的文本	
        nSelectedText: '项被选中',
        allSelectedText: '已选中所有充值渠道',
        enableFiltering: false, //搜索框
      });
      // $.ajax({
      //   type: "get",
      //   url: loginURL + "queryField",
      //   async: true,
      //   data: {
      //     type: 3
      //   },
      //   success: function (obj) {
      //     for (var i = 0; i < obj.rows.length; i++) {
      //       $("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      //     };
      //     //					onread()
      //   }
      // })
    }
  })
}

function onread() {
  $("body").mLoading("show")
  var district_service = $("#district_service").val(); //区服
  var sell_accountID = $("#sell_accountID").val(); //出售账号ID
  var sell_roleID = $("#sell_roleID").val(); //出售角色ID
  var sell_roleName = $("#sell_roleName").val(); //出售角色名
  var auction_accountID = $("#auction_accountID").val(); //竞拍账号ID
  var auction_roleID = $("#auction_roleID").val(); //竞拍角色ID
  var auction_roleName = $("#auction_roleName").val(); //竞拍角色名
  var channel = $("#channel").val(); //登录方式
  var reg_channel = $("#reg_channel").val(); //充值渠道
  if (district_service != null) {
    district_service = district_service.join(',')
  };
  if (reg_channel != null) {
    reg_channel = reg_channel.join(',')
  };
  $("#datatable").bootstrapTable('destroy');
  var t = $("#datatable").bootstrapTable({
    url: requestURL+"queryAuction",
    method: 'post',
    dataType: "json",
    cache: false,
    contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
    queryParamsType: "",
    striped: true, //设置为 true 会有隔行变色效果
    undefinedText: "0", //当数据为 undefined 时显示的字符
    pagination: true, //分页
    paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
    showToggle: false, //是否显示 切换试图（table/card）按钮
    showColumns: false, //是否显示 内容列下拉框
    pageNumber: 1, //如果设置了分页，首页页码
    // showPaginationSwitch:true,//是否显示 数据条数选择框
    pageSize: 20, //如果设置了分页，页面数据条数
    pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
    paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
    paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
    search: false, //显示搜索框
    data_local: "zh-US", //表格汉化
    sidePagination: "server", //服务端处理分页
    queryParams: function (params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
      return { //这里的params是table提供的
        pageIndex: params.pageNumber, //从数据库第几条记录开始
        pageSize: params.pageSize, //找多少条
        serverId: district_service,
        seDate: times,
        sellerAccountId: sell_accountID,
        sellerRoleGuid: sell_roleID,
        sellerRoleName: sell_roleName,
        buyerAccountId: auction_accountID,
        buyerRoleGuid: auction_roleID,
        buyerRoleName: auction_roleName,
        loginType: channel,
        channelId: reg_channel,
      };
    },
    idField: "logId", //指定主键列
    columns: [{
        title: "区服号",
        field: 'serverId',
        align: 'center',
      },
      {
        title: "日志时间",
        field: 'logTime',
        align: 'center',
      },
      {
        title: "出售账号ID",
        field: 'sellerAccountId',
        align: 'center',
      },
      {
        title: "出售角色ID",
        field: 'sellerRoleGuid',
        align: 'center',
      },
      {
        title: "出售角色名",
        field: 'sellerRoleName',
        align: 'center',
      },
      {
        title: "出售角色等级",
        field: 'sellerRoleLevel',
        align: 'center',
      },
      {
        title: "竞拍账号ID",
        field: 'buyerAccountId',
        align: 'center',
      },
      {
        title: "竞拍角色ID",
        field: 'buyerRoleGuid',
        align: 'center',
      },
      {
        title: "竞拍角色名",
        field: 'buyerRoleName',
        align: 'center',
      },
      {
        title: "竞拍角色等级",
        field: 'buyerRoleLevel',
        align: 'center',
      },
      {
        title: "货币类型",
        field: 'moneyType',
        align: 'center',
      },
      {
        title: "货币数量",
        field: 'moneyValue',
        align: 'center',
      },
      {
        title: "道具",
        field: 'itemId',
        align: 'center',
      },
      {
        title: "物品数量",
        field: 'itemNum',
        align: 'center',
      },
      {
        title: "拍卖状态",
        field: 'auctionState',
        align: 'center',
      },
    ]
  });
  t.on('load-success.bs.table', function (data) {
    $("body").mLoading("hide")
    $(".pull-right").css("display", "block");
    $("#datatable tbody tr").css("background-color", "#323232")
    $("#datatable tbody tr:even").css("background-color", "#3b3b3b")
    // var tableText = $("#datatable").html();
    // $("#replace_table").html(tableText);
    // $(".replace_area").css("display", "block");
      $('#datatable').bootstrapTable('resetView',{height:'80%'});
  });
}