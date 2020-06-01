var id;
//设置默认时间
var old
var areaid;
var areaname;
var flag;
today()

function today() {
  var today = new Date();
  var y = today.getFullYear();
  var m = today.getMonth() + 1;
  var d = today.getDate();
  if (m >= 1 && m < 10) {
    m = "0" + m
  }
  if (d >= 1 && d < 10) {
    d = "0" + d
  }
  old = y + "-" + m + "-" + d;
}
//layui配置
// layui.use(['element','layer','laydate','table'], function(){
var element = layui.element;
var layer = layui.layer;
var laydate = layui.laydate;
var table = layui.table;
element.init();
//开服时间配置
var now = new Date();
laydate.render({
  elem: '#add_username',
  lang: 'en', //国际化
  format: 'yyyy-MM-dd',
  theme: 'riqi', //自定义类名
  //		showBottom: false//是否显示底部栏
  value: old,
  max: 'now',
})
laydate.render({
  elem: '#modify_username',
  lang: 'en', //国际化
  format: 'yyyy-MM-dd',
  theme: 'riqi', //自定义类名
  //		showBottom: false//是否显示底部栏
  value: old,
  max: 'now',
})
// });
onread()

function onread() {
  $("#datatable").bootstrapTable('destroy');
  var t = $("#datatable").bootstrapTable({
    url: serverURL + "queryAreas",
    method: 'post',
    dataType: "json",
    cache: false,
    contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
    queryParamsType: "",
    loading: false,
    striped: true, //设置为 true 会有隔行变色效果
    undefinedText: "0", //当数据为 undefined 时显示的字符
    pagination: false, //分页
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
      };
    },
    onClickRow: function (row, $element) {
      console.log(row)
      id = row.confid
      areaid = row.areaid
      areaname = row.areaname
      if (flag == 1) {

      } else {
        mod(1)
      }
    },
    idField: "logId", //指定主键列
    columns: [{
        title: "区服编号",
        field: 'areaid',
        align: 'center',
      },
      {
        title: "区服名称",
        field: 'areaname',
        align: 'center',
      },
      {
        title: "操作",
        field: '',
        align: 'center',
        formatter: function (value, row, index) {
          return "<span class='modify' onclick='modde(this)'>修改</span>" + "<span class='delet' onclick='delet(this)'>删除</span>"
        }
      },
    ]
  });
  t.on('load-success.bs.table', function (data) {
    $(".pull-right").css("display", "block");
    $("#datatable tbody tr").css("background-color", "#323232")
    $("#datatable tbody tr:even").css("background-color", "#3b3b3b")
  });
}

//新增弹出框
$(".adduser").click(function () {
  $("#add_account").val("");
  $("#add_Initial_pwd").val("");
  layer.open({
    type: 1,
    area: ['500px', '350px'],
    title: "新增",
    shadeClose: false,
    shade: 0,
    content: $('#add'),
    closeBtn: 2,
    btn: '确定',
    yes: function (index, layero) {
      var add_account = $("#add_account").val(); //区服编号
      var add_Initial_pwd = $("#add_Initial_pwd").val(); //区服名称
      // var add_username = $("#add_username").val();//开服时间
      if (add_account == "" || $.trim(add_account) == '') {
        alert("区服编号不能为空")
        return false
      } else if (add_Initial_pwd == "" || $.trim(add_Initial_pwd) == '') {
        alert("区服名称不能为空")
        return false
      }
      // else if(add_username==""){
      // 	alert("开服时间不能为空")
      // 	return false
      // }
      else {
        $.ajax({
          type: "post",
          url: requestURL + "addAreas",
          async: false,
          data: {
            areaid: add_account,
            areaname: add_Initial_pwd,
            // starttime:add_username
          },
          success: function (e) {
            alert(e.message)
            $('#add').css("display", "none")
            layer.close(index)
            onread()
          }
        })
      }
    },
    end: function (index) {
      layer.close(index)
      $('#add').css("display", "none")
    }
  })
})

function modde(obj) {
  flag = 0;
}
//修改弹出框
function mod(obj) {

  //var id = $(obj).parent().parent().children('td:eq(0)').text()
  $("#modify_account").val(areaid)
  $("#modify_Initial_pwd").val(areaname)
  layer.open({
    type: 1,
    area: ['500px', '350px'],
    title: "修改",
    shadeClose: false,
    shade: 0,
    content: $('#modifys'),
    closeBtn: 2,
    btn: '确定',
    yes: function (index, layero) {
      var modify_account = $("#modify_account").val(); //区服编号
      var modify_Initial_pwd = $("#modify_Initial_pwd").val(); //区服名称
      // var modify_username=$("#modify_username").val();//开服时间
      if (modify_account == "" || $.trim(modify_account) == '') {
        alert("区服编号不能为空")
        return false
      } else if (modify_Initial_pwd == "" || $.trim(modify_Initial_pwd) == '') {
        alert("区服名称不能为空")
        return false
      }
      // else if(modify_username==""){
      // 	alert("开服时间不能为空")
      // 	return false
      // }
      else {
        $.ajax({
          type: "get",
          url: requestURL + "updateAreas",
          async: false,
          data: {
            confid: id,
            areaid: modify_account,
            areaname: modify_Initial_pwd,
            // starttime:modify_username
          },
          success: function (e) {
            alert(e.message)
            layer.close(index)
            $('#modifys').css("display", "none")
            onread()
          }
        })
      }
    },
    end: function (index) {
      layer.close(index)
      $('#modifys').css("display", "none")
    }
  })
}
//删除区服
function delet(obj) {
  flag = 1;
  //var id = $(obj).parent().parent().children('td:eq(0)').text();
  layer.confirm('是否删除此数据', function (index) {
    layer.close(index)
    $.ajax({
      type: "get",
      url: requestURL + "deleteAreas",
      async: false,
      data: {
        confid: id
      },
      success: function (e) {
        alert(e.message)
        $(this).parent().parent().remove()
        onread()
      }
    })
  });
}