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
  var account = $("#accountID").val(); //账号ID
  var datatime = $("#datatimes").val(); //日期
  var roleid = $("#roleID").val(); //角色ID
  var rolename = $("#roleName").val(); //角色名
  var itemID = $("#itemID").val(); //物品ID
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
    url: requestURL + "queryArticlesFlowing",
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
        itemId: itemID,
        roleId: roleid,
        roleName: rolename,
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
        title: "账号ID",
        field: 'accountId',
        align: 'center',
      },
      {
        title: "设备号",
        field: 'deviceId',
        align: 'center',
      },
      {
        title: "角色ID",
        field: 'roleId',
        align: 'center',
      },
      {
        title: "角色名",
        field: 'roleName',
        align: 'center',
      },
      {
        title: "角色等级",
        field: 'roleLevel',
        align: 'center',
      },
      {
        title: "角色战力",
        field: 'rolePower',
        align: 'center',
      },
      {
        title: "角色VIP",
        field: 'roleVip',
        align: 'center',
      },
      {
        title: "物品ID",
        field: 'itemId',
        align: 'center',
      },
      {
        title: "变化数量",
        field: 'changeNum',
        align: 'center',
      },
      {
        title: "剩余数量",
        field: 'leftNum',
        align: 'center',
      },
      {
        title: "变化类型",
        field: 'opType',
        align: 'center',
      },
      {
        title: "变化原因",
        field: 'causeId',
        align: 'center',
        formatter: function (value, row, index) {
          //					return obj[row.causeId]
          var a = $.cookie('value');
          //物品增加
          if (row.opType == 1) {
            if (a == null) {
              return obj2[row.causeId]
            }
            if (a == "cn") {
              return obj2[row.causeId]
            }
            if (a == "kr") {
              return only2[row.causeId]
            }
          }
          //物品扣除
          else {
            if (a == null) {
              return obj[row.causeId]
            }
            if (a == "cn") {
              return obj[row.causeId]
            }
            if (a == "kr") {
              return only[row.causeId]
            }
          }
        }
      },
      // {
      //   title: "变化位置",
      //   field: 'location',
      //   align: 'center',
      // },
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
    $('#datatable').bootstrapTable('resetView', {
      height: '80%'
    });
  });
}

//物品扣除
var obj = [
  "只是换个包而不是创建新的",
  "邮件删除",
  "物品进阶消耗",
  "神装再造消耗",
  "物品使用掉了",
  "物品出售",
  "限制物品自动删除",
  "城战",
  "gm指令",
  "拍卖行卖出删除",
  "清空天赋扣除",
  "镶宝石",
  "神装合成消耗",
  "改名消耗",
  "追加",
  "抽奖",
  "副本扫荡",
  "传送",
  "好友送礼品",
  "图鉴提交魂魄",
  "精灵幻化",
  "精灵抽奖",
  "商店购买替换",
  "神装再造",
  "神装合成",
  "合成",
  "物品升级",
  "翅膀升级",
  "翅膀解锁",
  "翅膀外形升级",
  "翅膀幻化升级",
  "翅膀升星",
  "军团捐物",
  "祈福单次",
  "祈福十连",
  "坐骑幻化",
  "坐骑解锁",
  "坐骑幻化升级",
  "坐骑升星",
  "坐骑升级",
  "物品洗练",
  "翎羽升星",
  "注魂",
  "注灵",
  "翅膀幻化",
  "转职",
  "军团仓库捐献",
  "图鉴殿堂升级",
  "图鉴神谕激活",
  "拍卖行上架",
  "转职",
  "复活",
  "求婚",
  "邮件发送物品",
  "发送红包",
  "放包时数量为0",
  "放包时合并后数量为0",
  "放仓库时数量为0",
  "放包时合并后数量为0",
  "使用兽魂",
  "装备精灵",
  "放包失败",
  "指针为空",
  "守护神激活",
  "被动技能解锁",
  "限时兑换",
  "拆分的物品",
  "图鉴升级",
  "删除来自邮件里的本地物品",
  "激活火种技能",
  "精灵升级",
  "精灵技能",
  "被动技能",
  "翅膀翎羽解锁",
  "装备重铸",
  "军团改名消耗",
  "装备附魔",
  "装备技能书",
  "升级女神装备",
  "解锁协战槽位",
  "婚戒升级",
  "符文融合",
  "符文解锁",
  "千里传音",
  "新火种激活",
]
//物品增加
var obj2 = [
  "只是换个包而不是创建新的",
  "物品进阶",
  "神装再造",
  "使用物品",
  "物品拆分",
  "合成",
  "创建精灵石",
  "坐骑幻化",
  "开图鉴",
  "副本结算",
  "领福利",
  "物品码",
  "完成任务",
  "扫荡",
  "买东西",
  "捡掉落包",
  "幸运抽奖",
  "物品回收",
  "vip礼包",
  "功能解锁",
  "完成全部日常",
  "完成全部讨伐",
  "城战",
  "gm指令",
  "翅膀幻化",
  "拆宝石",
  "宝藏抽奖",
  "每日未领取的活跃度福利",
  "每日未领取的军团福利",
  "神装合成",
  "邮件中获取",
  "魂石解锁",
  "物品下架",
  "改名失败",
  "军团仓库获取",
  "全民冲榜",
  "精灵放回背包",
  "从数据库读取",
  "数据增加",
  "背包拆分",
  "仓库拆分",
  "物品开包",
  "竞技场奖励",
  "限时活动",
  "抽奖",
  "24H",
  "7 日",
  "首杀",
  "强化失败补偿",
  "添加物件到背包",
  "分解元素之心",
  "整理信仰符文",
  "获得元素之心",
  "GM命令创建物品",
  "世界boss首杀福利",
  "添加公告信息",
  "通过物品列表添加物品",
  "解锁得到的奖品",
  "附魔拆分",
  "符文融合",
  "个性标签",
  "结婚答题",
  "老友回归",
  "赛季奖励",
]

var only = [
  "새 것을 만드는 것이 아니라 가방을 바꾸는 것이다",
  "메일 삭제",
  "물품 진압 소모",
  "신장 재조 소모",
  "물품 사용 이 떨어졌다",
  "물품 판매",
  "제한 물품 자동 삭제",
  "성전",
  "지령",
  "경매점 매출 삭제",
  "소질 공제",
  "보석을 두르다",
  "신장 합성 소모",
  "개명 소모",
  "추가",
  "추첨하다",
  "사본 소탕",
  "전송",
  "선물",
  "도감 에 혼백 을 제출하다",
  "정령 환화",
  "요정 추첨",
  "상점 구매 교체",
  "신장 재조",
  "신장 합성",
  "합성",
  "물품 업그레이드",
  "날개 업그레이드",
  "날개가 자물쇠를 풀다.",
  "날개 외형 업그레이드",
  "날개 변화 업그레이드",
  "날개.",
  "군단 기증물",
  "기복",
  "십련을 기원하다",
  "타기 환화",
  "앉아서 자물쇠를 풀다.",
  "타기 승진",
  "승성",
  "승진",
  "물품 세련",
  "깃털이 승승하다.",
  "넋을 잃다",
  "주사",
  "날개가 환화하다.",
  "전직하다",
  "군단 창고에 기부하다.",
  "도감 전당 업그레이드",
  "신규 를 도감 하여 활성화 시키다",
  "경매업에 오르다",
  "전직하다",
  "부활",
  "프러포즈",
  "메일 발송 물품",
  "봉투를 발송하다",
  "가방을 넣을 때 수량이 0 이다",
  "가방을 넣을 때 합병한 후 수량은 0 이다",
  "창고 방출 시 수는 0 이다",
  "가방을 넣을 때 합병한 후 수량은 0 이다",
  "수혼을 사용하다",
  "장비 요정",
  "가방 넣기 실패",
  "바늘이 비다",
  "수호신 활성화",
  "수동 기능 잠금",
  "시간을 정하다",
  "분할품",
  "도감 업그레이드",
  "메일에서 온 로컬 물품 삭제",
  "화종 기능 활성화",
  "요정 업그레이드",
  "요정 기능",
  "수동 기능",
  "날개 깃털이 자물쇠를 풀다.",
  "재주물",
  "군단 개명 소모",
  "장비 부마",
  "장비 기능",
  "여신 장비 업그레이드",
  "협전 홈",
  "혼계 업그레이드",
  "부문 융합",
  "문자 해제",
  "천리전음",
  "새로운 화종 활성화",
]