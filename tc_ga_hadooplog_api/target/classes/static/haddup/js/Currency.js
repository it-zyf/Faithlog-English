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
var cur_choice;
var cur_allaction;
var cur_selec;
var cur_allserver;
var cur_servers;
var cur_logtimes;
var cur_account;
var cur_devices;
var cur_roleids;
var cur_rolenames;
var cur_levels;
var cur_powers;
var cur_vipleve;
var cur_moneytype;
var cur_expes;
var cur_games;
var cur_bindgames;
var cur_diams;
var cur_binddiams;
var cur_faiths;
var cur_magics;
var cur_pointss;
var cur_scores;
var cur_lings;
var cur_powders;
var cur_guards;
var cur_achies;
var cur_prests;
var cur_prayers;
var cur_militarys;
var cur_glorys;
var cur_talents;
var cur_battles;
var cur_trea_searchs;
var cur_runes;
var cur_old;
var cur_new;
var cur_optype;
var cur_cause;
var cur_location;
var cur_legion;
var cur_attribute;
var cur_essence;
var cur_coin;
var cur_reddiam;

function language() {
  var cook = $.cookie("value");
  if (cook == "Korean") {
    cur_choice = "请选择";
    cur_allaction = "全选/全不选";
    cur_selec = "项被选中";
    cur_allserver = "已选中所有选项";
    cur_servers = "区服号";
    cur_logtimes = "日志时间";
    cur_account = "账号ID";
    cur_devices = "设备号";
    cur_roleids = "角色ID";
    cur_rolenames = "角色名";
    cur_levels = "角色等级";
    cur_powers = "角色战力";
    cur_vipleve = "VIP等级";
    cur_moneytype = "货币类型";
    cur_expes = "经验值";
    cur_games = "游戏币";
    cur_bindgames = "绑定游戏币";
    cur_diams = "钻石";
    cur_binddiams = "绑定钻石";
    cur_faiths = "信仰点数";
    cur_magics = "魔晶";
    cur_pointss = "再造点数";
    cur_scores = "兑换分数";
    cur_lings = "灵晶";
    cur_powders = "元素粉末";
    cur_guards = "守护点数";
    cur_achies = "成就点数";
    cur_prests = "声望";
    cur_prayers = "祈福点数";
    cur_militarys = "战功";
    cur_glorys = "荣耀点数";
    cur_talents = "天赋点数";
    cur_battles = "助战值";
    cur_trea_searchs = "宝藏寻宝积分";
    cur_runes = "信仰符文分解碎片";
    cur_old = "之前数量";
    cur_new = "现在数量";
    cur_optype = "变化类型";
    cur_cause = "变更方式";
    cur_location = "变更位置";
    cur_legion = "军团仓库积分";
    cur_attribute = "属性天赋点数";
    cur_essence = "世界精粹";
    cur_coin = "跨服币";
    cur_reddiam = "红钻";
  } else {
    cur_choice = "请选择";
    cur_allaction = "全选/全不选";
    cur_selec = "项被选中";
    cur_allserver = "已选中所有选项";
    cur_servers = "区服号";
    cur_logtimes = "日志时间";
    cur_account = "账号ID";
    cur_devices = "设备号";
    cur_roleids = "角色ID";
    cur_rolenames = "角色名";
    cur_levels = "角色等级";
    cur_powers = "角色战力";
    cur_vipleve = "VIP等级";
    cur_moneytype = "货币类型";
    cur_expes = "经验值";
    cur_games = "游戏币";
    cur_bindgames = "绑定游戏币";
    cur_diams = "钻石";
    cur_binddiams = "绑定钻石";
    cur_faiths = "信仰点数";
    cur_magics = "魔晶";
    cur_pointss = "再造点数";
    cur_scores = "兑换分数";
    cur_lings = "灵晶";
    cur_powders = "元素粉末";
    cur_guards = "守护点数";
    cur_achies = "成就点数";
    cur_prests = "声望";
    cur_prayers = "祈福点数";
    cur_militarys = "战功";
    cur_glorys = "荣耀点数";
    cur_talents = "天赋点数";
    cur_battles = "助战值";
    cur_trea_searchs = "宝藏寻宝积分";
    cur_runes = "信仰符文分解碎片";
    cur_old = "之前数量";
    cur_new = "现在数量";
    cur_optype = "变化类型";
    cur_cause = "变更方式";
    cur_location = "变更位置";
    cur_legion = "军团仓库积分";
    cur_attribute = "属性天赋点数";
    cur_essence = "世界精粹";
    cur_coin = "跨服币";
    cur_reddiam = "红钻";
  }
}
//设置默认时间
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
// layui.use(['element', 'laydate', 'table'], function () {
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
        nonSelectedText: cur_choice,
        maxHeight: 200,
        numberDisplayed: 2,
        includeSelectAllOption: true,
        selectAllText: cur_allaction, //全选按钮显示的文本
        nSelectedText: cur_selec,
        allSelectedText: cur_allserver,
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
        buttonWidth: '73%',
        nonSelectedText: cur_choice,
        maxHeight: 200,
        numberDisplayed: 2,
        includeSelectAllOption: true,
        selectAllText: cur_allaction, //全选按钮显示的文本
        nSelectedText: cur_selec,
        allSelectedText: cur_allserver,
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
//getMoneyType()
////货币类型下拉赋值
//function getMoneyType() {
//	$.ajax({
//		type: "get",
//		url: "../queryType",
//		async: true,
//		data: {ty: 1},
//		success: function(obj) {
//			console.log(obj)
//			for(var i = 0; i < obj.rows.length; i++) {
//				$("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
//			};
//		}
//	})
//}
function onread() {
  $("body").mLoading("show")
  var district_service = $("#district_service").val(); //区服
  var account = $("#accountID").val(); //账号ID
  var roleid = $("#roleID").val(); //角色ID
  var rolename = $("#roleName").val(); //角色名
  var currency = $("#currency").val(); //货币类型
  var equipment = $("#Equipment").val(); //设备号
  var channel = $("#channel").val(); //登录方式
  var reg_channel = $("#reg_channel").val(); //充值渠道
  if (district_service != null) {
    district_service = district_service.join(',')
  };
  if (reg_channel != null) {
    reg_channel = reg_channel.join(',')
  };
  // table.render({
  //   elem: '#datatable',
  //   method: 'post',
  //   height: 648,
  //   url: requestURL + "queryMoney_Change" //数据接口
  //     ,
  //   cellMinWidth: 80,
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
  //     moneyType: currency,
  //     deviceId: equipment,
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
  //         title: cur_servers,
  //         field: 'serverId',
  //         align: 'center',
  //       },
  //       {
  //         title: cur_logtimes,
  //         field: 'logTime',
  //         width: 180,
  //       },
  //       {
  //         title: cur_account,
  //         field: 'accountId',
  //         width: 260,
  //       },
  //       {
  //         title: cur_devices,
  //         field: 'deviceId',
  //         width: 320,
  //       },
  //       {
  //         title: cur_roleids,
  //         field: 'roleId',
  //         width: 185,
  //       },
  //       {
  //         title: cur_rolenames,
  //         field: 'roleName',
  //         width: 120,
  //       },
  //       {
  //         title: cur_levels,
  //         field: 'roleLevel',
  //         width: 120,
  //       },
  //       {
  //         title: cur_powers,
  //         field: 'rolePower',
  //         width: 120,
  //       },
  //       {
  //         title: cur_vipleve,
  //         field: 'roleVip',
  //         width: 120,
  //       },
  //       {
  //         title: cur_moneytype,
  //         field: 'moneyType',
  //         width: 120,
  //         templet: function (row) {
  //           if (row.moneyType == 0) {
  //             row.moneyType = cur_expes;
  //           }
  //           if (row.moneyType == 1) {
  //             row.moneyType = cur_games;
  //           }
  //           if (row.moneyType == 2) {
  //             row.moneyType = cur_bindgames;
  //           }
  //           if (row.moneyType == 3) {
  //             row.moneyType = cur_diams;
  //           }
  //           if (row.moneyType == 4) {
  //             row.moneyType = cur_binddiams;
  //           }
  //           if (row.moneyType == 5) {
  //             row.moneyType = cur_faiths;
  //           }
  //           if (row.moneyType == 6) {
  //             row.moneyType = cur_magics;
  //           }
  //           if (row.moneyType == 7) {
  //             row.moneyType = cur_pointss;
  //           }
  //           if (row.moneyType == 8) {
  //             row.moneyType = cur_scores;
  //           }
  //           if (row.moneyType == 9) {
  //             row.moneyType = cur_lings;
  //           }
  //           if (row.moneyType == 10) {
  //             row.moneyType = cur_powders;
  //           }
  //           if (row.moneyType == 11) {
  //             row.moneyType = cur_guards;
  //           }
  //           if (row.moneyType == 12) {
  //             row.moneyType = cur_achies;
  //           }
  //           if (row.moneyType == 13) {
  //             row.moneyType = cur_prests;
  //           }
  //           if (row.moneyType == 14) {
  //             row.moneyType = cur_prayers;
  //           }
  //           if (row.moneyType == 15) {
  //             row.moneyType = cur_militarys;
  //           }
  //           if (row.moneyType == 16) {
  //             row.moneyType = cur_glorys;
  //           }
  //           if (row.moneyType == 17) {
  //             row.moneyType = cur_talents;
  //           }
  //           if (row.moneyType == 18) {
  //             row.moneyType = cur_battles;
  //           }
  //           if (row.moneyType == 19) {
  //             row.moneyType = cur_trea_searchs;
  //           }
  //           if (row.moneyType == 20) {
  //             row.moneyType = cur_runes;
  //           }
  //           if (row.moneyType == 21) {
  //             row.moneyType = cur_legion;
  //           }
  //           if (row.moneyType == 22) {
  //             row.moneyType = cur_attribute;
  //           }
  //           if (row.moneyType == 23) {
  //             row.moneyType = cur_essence;
  //           }
  //           if (row.moneyType == 24) {
  //             row.moneyType = cur_coin;
  //           }
  //           if (row.moneyType == 25) {
  //             row.moneyType = cur_reddiam;
  //           }
  //           return row.moneyType
  //         }
  //       },
  //       {
  //         title: cur_old,
  //         field: 'oldMoney',
  //         width: 120,
  //       },
  //       {
  //         title: cur_new,
  //         field: 'newMoney',
  //         width: 120,
  //       },
  //       {
  //         title: cur_optype,
  //         field: 'opType',
  //         width: 120,
  //       },
  //       {
  //         title: cur_cause,
  //         field: 'causeId',
  //         width: 120,
  //         templet: function (row) {
  //           var a = $.cookie('value');
  //           //货币增加
  //           if (row.opType == 1) {
  //             if (a == null) {
  //               return obj2[row.causeId]
  //             }
  //             if (a == "chinese") {
  //               return obj2[row.causeId]
  //             }
  //             if (a == "Korean") {
  //               return only2[row.causeId]
  //             }
  //           }
  //           //货币扣除
  //           else {
  //             if (a == null) {
  //               return obj[row.causeId]
  //             }
  //             if (a == "chinese") {
  //               return obj[row.causeId]
  //             }
  //             if (a == "Korean") {
  //               return only[row.causeId]
  //             }
  //           }
  //         }
  //       },
  //       {
  //         title: cur_location,
  //         field: 'location',
  //         width: 120,
  //       },
  //     ]
  //   ]
  // });
  $("#datatable").bootstrapTable('destroy');
  var t = $("#datatable").bootstrapTable({
    url: requestURL + "queryMoney_Change",
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
        moneyType: currency,
        deviceId: equipment,
        roleId: roleid,
        roleName: rolename,
        loginType: channel,
        channelId: reg_channel,
      };
    },
    idField: "logId", //指定主键列
    columns: [{
        title: cur_servers,
        field: 'serverId',
        align: 'center',
      },
      {
        title: cur_logtimes,
        field: 'logTime',
        align: 'center',
      },
      {
        title: cur_account,
        field: 'accountId',
        align: 'center',
      },
      {
        title: cur_devices,
        field: 'deviceId',
        align: 'center',
      },
      {
        title: cur_roleids,
        field: 'roleId',
        align: 'center',
      },
      {
        title: cur_rolenames,
        field: 'roleName',
        align: 'center',
      },
      {
        title: cur_levels,
        field: 'roleLevel',
        align: 'center',
      },
      {
        title: cur_powers,
        field: 'rolePower',
        align: 'center',
      },
      {
        title: cur_vipleve,
        field: 'roleVip',
        align: 'center',
      },
      {
        title: cur_moneytype,
        field: 'moneyType',
        align: 'center',
        formatter: function (value, row, index) {
          if (row.moneyType == 0) {
            row.moneyType = cur_expes;
          }
          if (row.moneyType == 1) {
            row.moneyType = cur_games;
          }
          if (row.moneyType == 2) {
            row.moneyType = cur_bindgames;
          }
          if (row.moneyType == 3) {
            row.moneyType = cur_diams;
          }
          if (row.moneyType == 4) {
            row.moneyType = cur_binddiams;
          }
          if (row.moneyType == 5) {
            row.moneyType = cur_faiths;
          }
          if (row.moneyType == 6) {
            row.moneyType = cur_magics;
          }
          if (row.moneyType == 7) {
            row.moneyType = cur_pointss;
          }
          if (row.moneyType == 8) {
            row.moneyType = cur_scores;
          }
          if (row.moneyType == 9) {
            row.moneyType = cur_lings;
          }
          if (row.moneyType == 10) {
            row.moneyType = cur_powders;
          }
          if (row.moneyType == 11) {
            row.moneyType = cur_guards;
          }
          if (row.moneyType == 12) {
            row.moneyType = cur_achies;
          }
          if (row.moneyType == 13) {
            row.moneyType = cur_prests;
          }
          if (row.moneyType == 14) {
            row.moneyType = cur_prayers;
          }
          if (row.moneyType == 15) {
            row.moneyType = cur_militarys;
          }
          if (row.moneyType == 16) {
            row.moneyType = cur_glorys;
          }
          if (row.moneyType == 17) {
            row.moneyType = cur_talents;
          }
          if (row.moneyType == 18) {
            row.moneyType = cur_battles;
          }
          if (row.moneyType == 19) {
            row.moneyType = cur_trea_searchs;
          }
          if (row.moneyType == 20) {
            row.moneyType = cur_runes;
          }
          if (row.moneyType == 21) {
            row.moneyType = cur_legion;
          }
          if (row.moneyType == 22) {
            row.moneyType = cur_attribute;
          }
          if (row.moneyType == 23) {
            row.moneyType = cur_essence;
          }
          if (row.moneyType == 24) {
            row.moneyType = cur_coin;
          }
          if (row.moneyType == 25) {
            row.moneyType = cur_reddiam;
          }
          return row.moneyType
        }
      },
      {
        title: cur_old,
        field: 'oldMoney',
        align: 'center',
      },
      {
        title: cur_new,
        field: 'newMoney',
        align: 'center',
      },
      {
        title: cur_optype,
        field: 'opType',
        align: 'center',
      },
      {
        title: cur_cause,
        field: 'causeId',
        align: 'center',
        formatter: function (value, row, index) {
          var a = $.cookie('value');
          //货币增加
          if (row.opType == 1) {
            if (a == null) {
              return obj2[row.causeId]
            }
            if (a == "chinese") {
              return obj2[row.causeId]
            }
            if (a == "Korean") {
              return only2[row.causeId]
            }
          }
          //货币扣除
          else {
            if (a == null) {
              return obj[row.causeId]
            }
            if (a == "chinese") {
              return obj[row.causeId]
            }
            if (a == "Korean") {
              return only[row.causeId]
            }
          }
        }
      },
      {
        title: cur_location,
        field: 'location',
        align: 'center',
      },

    ]
  });
  t.on('load-success.bs.table', function (data) {
    $("body").mLoading("hide")
    $(".pull-right").css("display", "block");
    $("#datatable tbody tr").css("background-color", "#323232")
    $("#datatable tbody tr:even").css("background-color", "#3b3b3b")
    $('#datatable').bootstrapTable('resetView', {
      height: '80%'
    });
  });
}

//货币扣除
var obj = [
  "转生",
  "复活",
  "解锁背包格子",
  "军团捐献",
  "资源找回",
  "成长基金",
  "红包",
  "膜拜",
  "学习技能",
  "通过邮件发钱",
  "主界面的转换",
  "背包里的转换",
  "图鉴守护神升星",
  "图鉴守护神升级",
  "信仰点亮",
  "信仰升级",
  "创建军团",
  "舞会领奖",
  "举办舞会",
  "军团buff",
  "军团清除世界招募cd",
  "补领福利",
  "副本完成奖励",
  "精灵升级",
  "精灵单个猎取",
  "精灵十连猎取",
  "冥想",
  "竞技场付费挑战",
  "完成任务",
  "任务刷星",
  "传送",
  "元素之心单个获取",
  "元素之心精炼",
  "元素之心升级",
  "副本扫荡",
  "买物品",
  "物品追加",
  "物品进阶",
  "神装再造",
  "合成",
  "物品升级",
  "翅膀升级自动买",
  "翅膀升级",
  "翅膀升星自动买",
  "翅膀升星",
  "注魂",
  "注灵",
  "翎羽升级自动买",
  "翎羽升级",
  "翎羽升星自动买",
  "翎羽升星",
  "物品洗练",
  "坐骑升级自动买",
  "坐骑升级",
  "坐骑解锁",
  "坐骑幻化",
  "祈福单次",
  "祈福十连",
  "称号升级",
  "gm指令",
  "翅膀幻化",
  "符文保值回收",
  "花费金币聊天",
  "物品续费",
  "物品礼包购买",
  "购买buff药",
  "宝石升级",
  "拍卖购买",
  "拍卖竞标",
  "物品回收",
  "军团加火",
  "军团提升技能",
  "火种购买标志位",
  "火种升级",
  "火种位置升级",
  "副本增加buff",
  "精灵开格子",
  "精灵幻化",
  "开启天赋",
  "离婚",
  "宝藏抽奖",
  "神装合成",
  "竞技场扫荡",
  "云购购买",
  "解锁仓库格子",
  "信仰符文升级",
  "信仰符文保值分解",
  "军团仓库积分",
  "购买VIP特权物品",
  "图鉴升级",
  "限时小额充值",
  "购买跨服天梯次数",
  "神翎之心升级",
  "技能书保值回收",
]
//货币增加
var obj2 = [
  "加经验",
  "膜拜",
  "副本结算",
  "军团捐钱",
  "军团捐物",
  "军团Boss",
  "军团篝火加火",
  "资源找回",
  "充值",
  "成长基金",
  "红包",
  "成就",
  "主界面的转换",
  "背包里的转换",
  "领邮件",
  "舞会",
  "图鉴回收",
  "图鉴刷新",
  "精灵回收",
  "精灵猎取加点",
  "冥想",
  "任务结算",
  "地图扫荡",
  "钱卡",
  "卖东西",
  "物品回收",
  "祈福加点",
  "领取福利",
  "竞技场排名奖励",
  "完成全部日常",
  "完成全部讨伐",
  "gm指令",
  "buff增加",
  "元素之心回收",
  "每日未领取的军团福利",
  "天赋回收",
  "等级提升",
  "宝藏抽奖",
  "扫荡竞技场",
  "信仰符文分解碎片",
  "军团仓库积分",
  "增加跨服掠夺币",
  "技能书回收",
  "跨服天梯赛季手册",
  "跨服天梯每日任务",
]
var only = [
  "전환",
  "부활",
  "가방 활성 칸",
  "길드 기부",
  "자원 회수",
  "성장 기금",
  "레드 패킷",
  "응원",
  "배운 스킬",
  "우편을 통해 금액 발송",
  "메인 화면의 전환",
  "가방 내부의 전환",
  "도감 수호신 별승급",
  "도감 수호신 승급",
  "페이스 빛",
  "페이스 승급",
  "길드 생성",
  "무도회 보상",
  "무도회 개최",
  "길드buff",
  "길드 세계 모집 제거cd",
  "보상 혜택",
  "던전 클리어 보상",
  "정령 승급",
  "정령 1개 얻기",
  "정령 10개 얻기",
  "명상",
  "경기장 지불 도전",
  "임무 완료",
  "임무 초기화",
  "전송",
  "원소의 심장 1개 획득",
  "원소의 심장 정련",
  "원소의 심장 승급",
  "던전 소탕",
  "물품 사기",
  "물품 추가",
  "물품 단계승급",
  "신의장비 제조",
  "합성",
  "물품 승급",
  "날개 승급 자동구매",
  "날개 승급",
  "날개 별승급 자동구매",
  "날개 별승급",
  "주혼",
  "주령",
  "날개 승급 자동구매",
  "날개 승급",
  "날개 별승급 자동구매",
  "날개 별승급",
  "물품 제련",
  "탈것 승급 자동구매",
  "탈것 승급",
  "탈것 활성",
  "탈것 환화",
  "축복 1회",
  "축복 10회",
  "타이틀 승급",
  "gm명령",
  "날개 환화",
  "룬 회수 보호",
  "골드 이용 대화",
  "물품 추가 요금",
  "물품 쿠폰 구매",
  "buff포션 구매",
  "보석 승급",
  "경매 구매",
  "경매 입찰",
  "물품 회수",
  "길드 불 추가",
  "길드 스킬 승급",
  "불씨 구매표시 자리",
  "불씨승급",
  "불씨 위치 승급",
  "던전 buff증가",
  "정령 칸 열기",
  "정령 환화",
  "특성 오픈",
  "이혼",
  "보물 뽑기",
  "신의장비 합성",
  "경기장 소탕",
  "운송 구매",
  "창고 칸 활성",
  "페이스 룬 승급",
  "페이스 룬 분해",
  "길드 창고 포인트",
  "VIP특권 물품 구매",
  "도감 승급",
  "限时小额充值",
  "购买跨服天梯次数",
  "神翎之心升级",
  "技能书保值回收",
]