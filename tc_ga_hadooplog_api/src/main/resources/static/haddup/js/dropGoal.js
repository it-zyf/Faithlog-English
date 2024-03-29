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
        nonSelectedText: '请选择',
        maxHeight: 200,
        numberDisplayed: 2,
        includeSelectAllOption: true,
        selectAllText: '全选/全不选', //全选按钮显示的文本
        nSelectedText: '项被选中',
        allSelectedText: '已选中所有区服',
        enableFiltering: false, //搜索框
      });
      //onchannel()
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
      for (var i = 0; i < obj.rows.length; i++) {
        $("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      };
      // 			$.ajax({
      // 				type: "get",
      // 				url: "http://localhost:8080/FaithLogNew/queryField",
      // 				async: true,
      // 				data: {type: 3},
      // 				success: function(obj) {
      // 					for(var i = 0; i < obj.rows.length; i++) {
      // 						$("#reg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      // 					};
      // //					onread()
      // 				}
      // 			})
    }
  })
}

function onread() {
  $("body").mLoading("show")
  var district_service = $("#district_service").val(); //区服
  var account = $("#accountID").val(); //账号ID
  var datatime = $("#datatimes").val(); //日期
  var roleid = $("#roleID").val(); //角色ID
  var rolename = $("#roleName").val(); //角色名

  var channel = $("#channel").val(); //登录方式

  if (district_service != null) {
    district_service = district_service.join(',')
  };
  table.render({
    elem: '',
    height: 648,
    method: 'post',
    url: '',
    cellMinWidth: 120,
    text: {
      none: 'No matching records found'
    },
    page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
      layout: ['limit', 'prev', 'page', 'next'] //自定义分页布局
    },
    limit: 20,
    limits: [5, 10, 20, 40],
    where: {
      serverId: district_service,
      accountId: account,
      seDate: times,
      roleId: roleid,
      roleName: rolename,
    },
    response: {
      statusName: 'state',
      msgName: 'message',
      statusCode: true,
      countName: 'total',
      dataName: 'rows'
    },
    request: {
      pageName: 'pageIndex',
      limitName: 'pageSize'
    },
    done: function (res, curr, count) {
      $("table").css("width", "100%");
      $("body").mLoading("hide");
      $("table tbody tr:even").css("background-color", "rgb(59,59,59)")
      if ($(".Recharge .layui-table-body")[0].textContent == "No matching records found") {
        $(".Recharge .layui-table-header").css("overflow-x", "auto")
      }
    },
    unresize: true,
    even: true //开启隔行背景
      ,
    title: '',
    page: true //开启分页
      ,
    cols: [
      [{
          title: "区服号",
          field: 'serverId',
          templet: function (row) {
            if (row.serverId == null) {
              return "0"
            } else {
              return row.serverId
            }
          }
        },
        {
          title: "日志时间",
          field: 'logTime',
          width: 180,
          templet: function (row) {
            if (row.logTime == null) {
              return "0"
            } else {
              return row.logTime
            }
          }
        },
        {
          title: "账号ID",
          field: 'accountId',
          templet: function (row) {
            if (row.accountId == null) {
              return "0"
            } else {
              return row.accountId
            }
          }
        },
        {
          title: "设备号",
          field: 'deviceId',
          width: 200,
          templet: function (row) {
            if (row.deviceId == null) {
              return "0"
            } else {
              return row.deviceId
            }
          }
        },
        {
          title: "角色ID",
          field: 'roleId',
          width: 200,
          templet: function (row) {
            if (row.roleId == null) {
              return "0"
            } else {
              return row.roleId
            }
          }
        },
        {
          title: "角色名",
          field: 'roleName',
          templet: function (row) {
            if (row.roleName == null) {
              return "0"
            } else {
              return row.roleName
            }
          }
        },
        {
          title: "角色等级",
          field: 'roleLevel',
          templet: function (row) {
            if (row.roleLevel == null) {
              return "0"
            } else {
              return row.roleLevel
            }
          }
        },
        {
          title: "角色战力",
          field: 'rolePower',
          templet: function (row) {
            if (row.rolePower == null) {
              return "0"
            } else {
              return row.rolePower
            }
          }
        },
        {
          title: "角色VIP",
          field: 'roleVip',
          templet: function (row) {
            if (row.roleVip == null) {
              return "0"
            } else {
              return row.roleVip
            }
          }
        },
        {
          title: "BossID",
          field: 'bossId',
          templet: function (row) {
            if (row.bossId == null) {
              return "0"
            } else {
              return row.bossId
            }
          }
        },

        {
          title: "掉落物品1",
          field: 'dropItemId1',
          width: 120,
          templet: function (row) {
            if (row.dropItemId1 == null) {
              return "0"
            } else {
              return row.dropItemId1
            }
          }
        },
        {
          title: "物品掉落1数量",
          field: 'dropItemNum1',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum1 == null) {
              return "0"
            } else {
              return row.dropItemNum1
            }
          }
        },
        {
          title: "掉落物品2",
          field: 'dropItemId2',
          width: 120,
          templet: function (row) {
            if (row.dropItemId2 == null) {
              return "0"
            } else {
              return row.dropItemId2
            }
          }
        },
        {
          title: "掉落物品2数量",
          field: 'dropItemNum2',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum2 == null) {
              return "0"
            } else {
              return row.dropItemNum2
            }
          }
        },
        {
          title: "掉落物品3",
          field: 'dropItemId3',
          width: 120,
          templet: function (row) {
            if (row.dropItemId3 == null) {
              return "0"
            } else {
              return row.dropItemId3
            }
          }
        },
        {
          title: "掉落物品3数量",
          field: 'dropItemNum3',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum3 == null) {
              return "0"
            } else {
              return row.dropItemNum3
            }
          }
        },
        {
          title: "掉落物品4",
          field: 'dropItemId4',
          width: 120,
          templet: function (row) {
            if (row.dropItemId4 == null) {
              return "0"
            } else {
              return row.dropItemId4
            }
          }
        },
        {
          title: "掉落物品5",
          field: 'dropItemId5',
          width: 120,
          templet: function (row) {
            if (row.dropItemId5 == null) {
              return "0"
            } else {
              return row.dropItemId5
            }
          }
        },
        {
          title: "掉落物品5数量",
          field: 'dropItemNum5',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum5 == null) {
              return "0"
            } else {
              return row.dropItemNum5
            }
          }
        },
        {
          title: "掉落物品6",
          field: 'dropItemId6',
          width: 120,
          templet: function (row) {
            if (row.dropItemId6 == null) {
              return "0"
            } else {
              return row.dropItemId6
            }
          }
        },
        {
          title: "掉落物品6数量",
          field: 'dropItemNum6',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum6 == null) {
              return "0"
            } else {
              return row.dropItemNum6
            }
          }
        },
        {
          title: "掉落物品7",
          field: 'dropItemId7',
          width: 120,
          templet: function (row) {
            if (row.dropItemId7 == null) {
              return "0"
            } else {
              return row.dropItemId7
            }
          }
        },
        {
          title: "掉落物品7数量",
          field: 'dropItemNum7',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum7 == null) {
              return "0"
            } else {
              return row.dropItemNum7
            }
          }
        },
        {
          title: "掉落物品8",
          field: 'dropItemId8',
          width: 120,
          templet: function (row) {
            if (row.dropItemId8 == null) {
              return "0"
            } else {
              return row.dropItemId8
            }
          }
        },
        {
          title: "掉落物品8数量",
          field: 'dropItemNum8',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum8 == null) {
              return "0"
            } else {
              return row.dropItemNum8
            }
          }
        },
        {
          title: "掉落物品9",
          field: 'dropItemId9',
          width: 120,
          templet: function (row) {
            if (row.dropItemId9 == null) {
              return "0"
            } else {
              return row.dropItemId9
            }
          }
        },
        {
          title: "掉落物品9数量",
          field: 'dropItemNum9',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum9 == null) {
              return "0"
            } else {
              return row.dropItemNum9
            }
          }
        },
        {
          title: "掉落物品10",
          field: 'dropItemId10',
          width: 120,
          templet: function (row) {
            if (row.dropItemId10 == null) {
              return "0"
            } else {
              return row.dropItemId10
            }
          }
        },
        {
          title: "掉落物品11数量",
          field: 'dropItemNum11',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum11 == null) {
              return "0"
            } else {
              return row.dropItemNum11
            }
          }
        },
        {
          title: "掉落物品12",
          field: 'dropItemId12',
          width: 120,
          templet: function (row) {
            if (row.dropItemId12 == null) {
              return "0"
            } else {
              return row.dropItemId12
            }
          }
        },
        {
          title: "掉落物品13数量",
          field: 'dropItemNum13',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum13 == null) {
              return "0"
            } else {
              return row.dropItemNum13
            }
          }
        },
        {
          title: "掉落物品14",
          field: 'dropItemId14',
          width: 120,
          templet: function (row) {
            if (row.dropItemId14 == null) {
              return "0"
            } else {
              return row.dropItemId14
            }
          }
        },
        {
          title: "掉落物品15数量",
          field: 'dropItemNum15',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum15 == null) {
              return "0"
            } else {
              return row.dropItemNum15
            }
          }
        },
        {
          title: "掉落物品16",
          field: 'dropItemId16',
          width: 120,
          templet: function (row) {
            if (row.dropItemId16 == null) {
              return "0"
            } else {
              return row.dropItemId16
            }
          }
        },
        {
          title: "掉落物品17数量",
          field: 'dropItemNum17',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum17 == null) {
              return "0"
            } else {
              return row.dropItemNum17
            }
          }
        },
        {
          title: "掉落物品18",
          field: 'dropItemId18',
          width: 120,
          templet: function (row) {
            if (row.dropItemId18 == null) {
              return "0"
            } else {
              return row.dropItemId18
            }
          }
        },
        {
          title: "掉落物品19",
          field: 'dropItemId19',
          width: 120,
          templet: function (row) {
            if (row.dropItemId19 == null) {
              return "0"
            } else {
              return row.dropItemId19
            }
          }
        },
        {
          title: "掉落物品19数量",
          field: 'dropItemNum19',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum19 == null) {
              return "0"
            } else {
              return row.dropItemNum19
            }
          }
        },
        {
          title: "掉落物品20",
          field: 'dropItemId20',
          width: 120,
          templet: function (row) {
            if (row.dropItemId20 == null) {
              return "0"
            } else {
              return row.dropItemId20
            }
          }
        },
        {
          title: "掉落物品20数量",
          field: 'dropItemNum20',
          width: 130,
          templet: function (row) {
            if (row.dropItemNum20 == null) {
              return "0"
            } else {
              return row.dropItemNum20
            }
          }
        },
        // {
        //   title: "IP",
        //   field: 'ip',
        //   align: 'center',
        //   templet: function (row) {
        //     if (row.ip == null) {
        //       return "0"
        //     } else {
        //       return row.ip
        //     }
        //   }
        // },
      ]
    ]
  });
  // })
  $("#datatable").bootstrapTable('destroy');
  var t = $("#datatable").bootstrapTable({
    url: requestURL + "query_killDropLog",
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

        roleId: roleid,
        roleName: rolename,
        //				loginType:channel,

      };
    },
    idField: "logId", //指定主键列
    columns: [{
        title: "区服号",
        field: 'serverId',
        align: 'center',
        width: 80,
      },
      {
        title: "日志时间",
        field: 'logTime',
        align: 'center',
        width: 180,
      },
      {
        title: "账号ID",
        field: 'accountId',
        align: 'center',
        width: 150,
      },
      {
        title: "设备号",
        field: 'deviceId',
        align: 'center',
        width: 200,
      },
      {
        title: "角色ID",
        field: 'roleId',
        align: 'center',
        width: 200,
      },
      {
        title: "角色名",
        field: 'roleName',
        align: 'center',
        width: 120,
      },
      {
        title: "角色等级",
        field: 'roleLevel',
        align: 'center',
        width: 100,
      },
      {
        title: "角色战力",
        field: 'rolePower',
        align: 'center',
        width: 100,
      },
      {
        title: "角色VIP",
        field: 'roleVip',
        align: 'center',
        width: 100,
      },
      {
        title: "BossID",
        field: 'bossId',
        align: 'center',
        width: 100,
      },
      {
        title: "掉落物品1",
        field: 'dropItemId1',
        align: 'center',
        width: 120,
      },
      {
        title: "物品掉落1数量",
        field: 'dropItemNum1',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品2",
        field: 'dropItemId2',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品2数量",
        field: 'dropItemNum2',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品3",
        field: 'dropItemId3',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品3数量",
        field: 'dropItemNum3',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品4",
        field: 'dropItemId4',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品5",
        field: 'dropItemId5',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品5数量",
        field: 'dropItemNum5',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品6",
        field: 'dropItemId6',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品6数量",
        field: 'dropItemNum6',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品7",
        field: 'dropItemId7',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品7数量",
        field: 'dropItemNum7',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品8",
        field: 'dropItemId8',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品8数量",
        field: 'dropItemNum8',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品9",
        field: 'dropItemId9',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品9数量",
        field: 'dropItemNum9',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品10",
        field: 'dropItemId10',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品11数量",
        field: 'dropItemNum11',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品12",
        field: 'dropItemId12',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品13数量",
        field: 'dropItemNum13',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品14",
        field: 'dropItemId14',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品15数量",
        field: 'dropItemNum15',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品16",
        field: 'dropItemId16',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品17数量",
        field: 'dropItemNum17',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品18",
        field: 'dropItemId18',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品19",
        field: 'dropItemId19',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品19数量",
        field: 'dropItemNum19',
        align: 'center',
        width: 130,
      },
      {
        title: "掉落物品20",
        field: 'dropItemId20',
        align: 'center',
        width: 120,
      },
      {
        title: "掉落物品20数量",
        field: 'dropItemNum20',
        align: 'center',
        width: 130,
      },
    ]
  });
  t.on('load-success.bs.table', function (data) {
    $("body").mLoading("hide")
    $(".pull-right").css("display", "block");
    $("#datatable tbody tr").css("background-color", "#323232")
    $("#datatable tbody tr:even").css("background-color", "#3b3b3b")
  });
}

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