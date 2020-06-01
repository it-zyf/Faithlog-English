// window.setInterval(banben,10)
// function banben(){
//   if (window.location.host == "107.155.50.61:9100") {
//     $(".topTag span").html(" | 泰国版")
//   } else {
//     $(".topTag span").html(" | 英文版")
//   }
// }
language()
var old;
var newtime;
var log_choice;
var log_allaction;
var log_selec;
var log_allserver;
var log_servers;
var log_logtimes;
var log_accounts;
var log_decvices;
var log_roleids;
var log_rolenames;
var log_roleleves;
var log_powers;
var log_ip;
var log_idfa;
var log_imei;
var log_types;
var log_creats;
var log_onlines;
var login;
var logout;
var logunde;
var  log_allserver1

function language() {
  var cook = $.cookie("value");
  if (cook == "Korean") {
    log_choice = "请选择";
    log_allaction = "全选/全不选";
    log_selec = "项被选中";
    log_allserver = "已选中所有选项";
    log_allserver1='已选中所有充值渠道'
    log_servers = "区服号";
    log_logtimes = "日志时间";
    log_accounts = "账号ID";
    log_decvices = "设备号";
    log_roleids = "角色ID";
    log_rolenames = "角色名";
    log_roleleves = "角色等级";
    log_powers = "角色战力";
    log_ip = "IP地址";
    log_idfa = "TDFA";
    log_imei = "IMEI";
    log_types = "登录类型";
    log_creats = "创建时间";
    log_onlines = "在线时长";
    login = "登录";
    logout = "登出";
    logunde = "状态不准确";
  } else {
    log_choice = "请选择";
    log_allaction = "全选/全不选";
    log_selec = "项被选中";
    log_allserver = "已选中所有选项";
    log_allserver1='已选中所有充值渠道'
    log_servers = "区服号";
    log_logtimes = "日志时间";
    log_accounts = "账号ID";
    log_decvices = "设备号";
    log_roleids = "角色ID";
    log_rolenames = "角色名";
    log_roleleves = "角色等级";
    log_powers = "角色战力";
    log_ip = "IP地址";
    log_idfa = "TDFA";
    log_imei = "IMEI";
    log_types = "登录类型";
    log_creats = "创建时间";
    log_onlines = "在线时长";
    login = "登录";
    logout = "登出";
    logunde = "状态不准确";
  }
}
today()
//设置默认时间
function today() {
  var today = new Date();
  var y = today.getFullYear();
  //	today.setMonth(today.getMonth() - 1);
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
var times = old + "~" + newtime;
////layui配置
// layui.use(['element', 'laydate', 'table'], function() {
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

// });

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
        buttonWidth: '73%',
        nonSelectedText: log_choice,
        maxHeight: 200,
        numberDisplayed: 2,
        includeSelectAllOption: true,
        selectAllText: log_allaction, //全选按钮显示的文本
        nSelectedText: log_selec,
        allSelectedText: log_allserver,
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
      // type: 2
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
        buttonWidth: '73%',
        nonSelectedText: log_choice,
        maxHeight: 200,
        numberDisplayed: 2,
        includeSelectAllOption: true,
        selectAllText: log_allaction, //全选按钮显示的文本
        nSelectedText: log_selec,
        allSelectedText: log_allserver1,
        enableFiltering: false, //搜索框
        
      });

      // 			$.ajax({
      // 				type: "get",
      // 				// url: loginURL+"queryField.action",
      // 				async: true,
      // 				data: {
      // 					type: 3
      // 				},
      // 				success: function(obj) {
      // 					for(var i = 0; i < obj.rows.length; i++) {
      // 						$("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      // 					};
      // //					onread()
      // 				}
      // 			})
    }
  })
}

function onread() {
  $("body").mLoading("show");
  var district_service = $("#district_service").val(); //区服
  var account = $("#accountID").val(); //账号ID
  var start = $("#startLevel").val(); //开始等级范围
  var end = $("#endLevel").val(); //结束等级范围
  var roleid = $("#roleID").val(); //角色ID
  var rolename = $("#roleName").val(); //角色名
  var channel = $("#channel").val(); //登录方式
  var reg_channel = $("#reg_channel").val(); //充值渠道
  if (reg_channel != null) {
    reg_channel = reg_channel.join(",");
  }
  if (district_service != null) {
    district_service = district_service.join(',')
  };
  
  // table.render({
  //   elem: '',
  //   height: 648,
  //   method: 'post',
  //   url: requestURL + "queryLoginout" //数据接口
  //     ,
  //   cellMinWidth: 120,
  //   text: {
  //     none: 'No matching records found'
  //   },
  //   page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
  //     layout: ['limit', 'prev', 'page', 'next'] //自定义分页布局
  //   },
  //   limit: 20,
  //   limits: [5, 10, 20, 40],
  //   where: {
  //     serverId: district_service,
  //     accountId: account,
  //     seDate: times,
  //     startroleLevel: start,
  //     endroleLevel: end,
  //     roleId: roleid,
  //     roleName: rolename,
  //     loginType: channel,
  //     channelId: reg_channel,
  //   },
  //   response: {
  //     statusName: 'state',
  //     msgName: 'message',
  //     statusCode: true,
  //     countName: 'total',
  //     dataName: 'rows'
  //   },
  //   request: {
  //     pageName: 'pageIndex',
  //     limitName: 'pageSize'
  //   },
  //   done: function (res, curr, count) {
  //     $("table").css("width", "100%");
  //     $("table tbody tr:even").css("background-color", "rgb(59,59,59)")
  //     $("body").mLoading("hide");
  //     if ($(".Recharge .layui-table-body")[0].textContent == "No matching records found") {
  //       $(".Recharge .layui-table-header").css("overflow-x", "auto")
  //     }
  //     var pagetabel = $(".layui-table-page").width()
  //     var pagewidth = $(".layui-laypage-default").width()
  //     var pagelimitmargin = pagetabel - pagewidth - 20 + "px" + " !important"
  //     pagelimitmargin = "margin-right:" + pagelimitmargin
  //     $(".layui-laypage-limits").css("cssText", pagelimitmargin);
  //   },
  //   unresize: true,
  //   even: true //开启隔行背景
  //     ,
  //   title: '',
  //   page: true //开启分页
  //     ,
  //   cols: [
  //     [ //表头
  //       {
  //         title: log_servers,
  //         field: 'serverId',
  //       },
  //       {
  //         title: log_logtimes,
  //         field: 'logTime',
  //         width: 180
  //       },
  //       {
  //         title: log_accounts,
  //         field: 'accountId',
  //         width: 250
  //       },
  //       {
  //         title: log_decvices,
  //         field: 'deviceId',
  //         width: 180
  //       },
  //       {
  //         title: log_roleids,
  //         field: 'roleId',
  //         width: 180
  //       },
  //       {
  //         title: log_rolenames,
  //         field: 'roleName',
  //         width: 240
  //       },
  //       {
  //         title: log_roleleves,
  //         field: 'roleLevel',
  //         width: 130
  //       },
  //       {
  //         title: log_powers,
  //         field: 'rolePower',
  //         width: 170
  //       },
  //     ]
  //   ]
  // });
  $("#datatable").bootstrapTable('destroy');
  var t = $("#datatable").bootstrapTable({
    url: requestURL + "queryLoginout",
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
        accountId: account,
        seDate: times,
        startroleLevel: start,
        endroleLevel: end,
        roleId: roleid,
        roleName: rolename,
        loginType: channel,

       channelId:reg_channel,
      };
    },
    idField: "logId", //指定主键列
    columns: [{
        title: log_servers,
        field: 'serverId',
        align: 'center',
      },
      {
        title: log_logtimes,
        field: 'logTime',
        align: 'center',
      },
      {
        title: log_accounts,
        field: 'accountId',
        align: 'center',
      },
      {
        title: log_decvices,
        field: 'deviceId',
        align: 'center',
      },
      {
        title: log_roleids,
        field: 'roleId',
        align: 'center',
      },
      {
        title: log_rolenames,
        field: 'roleName',
        align: 'center',
      },
      {
        title: log_roleleves,
        field: 'roleLevel',
        align: 'center',
      },
      {
        title: log_powers,
        field: 'rolePower',
        align: 'center',
      },
      // {
      //   title: reg_channel,
      //   field: 'channelId',
      //   align: 'center',
      // },
      // {
      //   title: log_ip,
      //   field: 'ip',
      //   align: 'center',
      // },
      // {
      //   title: log_idfa,
      //   field: 'idfa',
      //   align: 'center'
      // },
      // {
      //   title: log_imei,
      //   field: 'imei',
      //   align: 'center'
      // },
      // {
      //   title: log_types,
      //   field: 'opType',
      //   align: 'center',
      //   formatter: function (value, row, index) { //自定义显示，这三个参数分别是：value该行的属性，row该行记录，index该行下标
      //     return row.opType == 0 ? login : row.opType == 1 ? logout : logunde;
      //   }
      // },
      // {
      //   title: log_creats,
      //   field: 'createTime',
      //   align: 'center',
      // },
      // {
      //   title: log_onlines,
      //   field: 'onlineTime',
      //   align: 'center',
      // },
      // //			新增包渠道
      // {
      //   title: "包渠道",
      //   field: 'gamechannel',
      //   align: 'center',
      // },
    ]
  });
  t.on('load-success.bs.table', function (data) {
    $("body").mLoading("hide");
    $(".pull-right").css("display", "block");
    $("#datatable tbody tr").css("background-color", "#323232")
    $("#datatable tbody tr:even").css("background-color", "#3b3b3b")
    $('#datatable').bootstrapTable('resetView', {
      height: '80%'
    });
  });
}