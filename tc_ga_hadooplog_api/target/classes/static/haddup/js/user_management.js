//layui配置
layui.use(['element', 'layer', 'table'], function () {
  var element = layui.element;
  var layer = layui.layer;
  var table = layui.table;
  element.init();
});
onread()
var id;
var usercode
var username
var password
var flag
var moduleids

function onread() {
  $("#datatable").bootstrapTable('destroy');
  var t = $("#datatable").bootstrapTable({
    url: requestURL + "queryUsers",
    method: 'post',
    dataType: "json",
    cache: false,
    contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
    queryParamsType: "",
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
      id = row.userid
      usercode = row.usercode
      username = row.username
      password = row.password
      moduleids = row.moduleids
      if (flag == 1) {
        diction(1)
      } else {
        mod(1)
      }
    },
    idField: "logId", //指定主键列
    columns: [{
        title: "序号",
        field: 'userid',
        align: 'center',
      },
      {
        title: "账号",
        field: 'usercode',
        align: 'center',
      },
      {
        title: "姓名",
        field: 'username',
        align: 'center',
      },
      {
        title: "操作",
        field: '',
        align: 'center',
        formatter: function (value, row, index) {
          return "<span class='modify' onclick='modde(this)'>修改</span>" + "<span class='Jurisdiction' onclick='diction1(this)'>权限配置</span>" + "<span class='reset_pwd' onclick='reset(this)'>重置密码</span>" + "<span class='delet' onclick='delet(this)'>删除</span>"
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
  $("#add_account").val("")
  $("#add_Initial_pwd").val("")
  $("#add_username").val("")
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
      var add_account = $("#add_account").val(); //登陆账号
      var add_Initial_pwd = $("#add_Initial_pwd").val(); //初始密码
      var add_username = $("#add_username").val(); //用户姓名
      if (add_account == "" || $.trim(add_account) == '' || add_account.length > 16) {
        alert("账号不能为空且不能超过16位")
        return false
      } else if (add_Initial_pwd == "" || $.trim(add_Initial_pwd) == '') {
        alert("密码不能为空")
        return false
      } else if (add_username == "" || $.trim(add_username) == '' || add_username.length > 16) {
        alert("用户姓名不能为空且不能超过16位")
        return false
      } else {
        $.ajax({
          type: "post",
          url: requestURL + "addUser",
          async: false,
          data: {
            usercode: add_account,
            password: add_Initial_pwd,
            username: add_username
          },
          success: function (e) {
            alert(e.message)
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
  $("#modify_account").val(usercode)
  $("#modify_Initial_pwd").val(password)
  $("#modify_username").val(username)
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
      var modify_account = $("#modify_account").val(); //登陆账号
      var modify_Initial_pwd = $("#modify_Initial_pwd").val(); //初始密码
      var modify_username = $("#modify_username").val(); //用户姓名
      if (modify_account == "" || $.trim(modify_account) == '' || modify_account.length > 16) {
        alert("账号不能为空且不能超过16位")
        return false
      } else if (modify_Initial_pwd == "" || $.trim(modify_Initial_pwd) == '') {
        alert("密码不能为空")
        return false
      } else if (modify_username == "" || $.trim(modify_username) == '' || modify_username.length > 16) {
        alert("用户姓名不能为空且不能超过16位")
        return false
      } else {
        $.ajax({
          type: "get",
          url: requestURL + "updateUser",
          async: false,
          data: {
            userid: id,
            usercode: modify_account,
            password: modify_Initial_pwd,
            username: modify_username
          },
          success: function (e) {
            alert(e.message)
            layer.close(index)
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
//重置密码
function reset(obj) {
  flag = 1;
  var id = $(obj).parent().parent().children('td:eq(0)').text()
  $.ajax({
    type: "get",
    url: requestURL + "updateUser",
    async: false,
    data: {
      userid: id,
      password: 123456
    },
    success: function (e) {
      alert(e.message)
    }
  })
}
//删除用户
function delet(obj) {
  flag = 1;
  var id = $(obj).parent().parent().children('td:eq(0)').text();
  layer.confirm('是否删除此数据', function (index) {
    layer.close(index)
    $.ajax({
      type: "get",
      url: requestURL + "deleteUser",
      async: false,
      data: {
        userid: id
      },
      success: function (e) {
        alert(e.message)
        $(this).parent().parent().remove()
        onread()
      }
    })
  });

}

function diction1() {
  flag = 1;
}
//权限配置
function diction(obj) {
  //var id = $(obj).parent().parent().children('td:eq(0)').text()
  $.ajax({
    type: "get",
    url: requestURL + "queryUsersById",
    async: false,
    data: {
      userid: id
    },
    success: function (json) {
      $(".main li input").attr("checked", false)
      var lis = $(".main li input")
      var arr = json.rows.moduleids
      var arrs = arr.split(',')
      for (var i = 0; i < arrs.length; i++) {
        for (var a = 0; a < lis.length; a++) {
          if (lis[a].id == arrs[i]) {
            var c = "#" + lis[a].id
            //										console.log(c)
            $(c).prop("checked", "checked")
          }
        }
      }

    }
  });
  moduleids = moduleids.split(",")
  for (var i = 0; i < moduleids.length; i++) {
    for (var j = 0; j < $(".ins input").length; j++) {
      if (moduleids[i] == $(".ins input")[j].id) {
        $(".ins input")[j].checked = true;
      }
    }
  }
  layer.open({
    type: 1,
    area: ['480px', '640px'],
    title: "修改",
    shadeClose: false,
    shade: 0,
    content: $('#juris'),
    closeBtn: 2,
    btn: '确定',
    yes: function (index, layero) {
      var Jurisdiction = $("#juris input:checked")
      var arr = []
      for (var i = 0; i < Jurisdiction.length; i++) {
        var c = Jurisdiction[i].id
        arr.push(c)
      }
      json = arr.join()
      //				console.log(json)
      $.ajax({
        type: "get",
        url: requestURL + "updateUser",
        async: true,
        data: {
          userid: id,
          moduleids: json
        },
        success: function (e) {
          alert(e.message)
          layer.close(index)
          onread()
        }
      });
    },
    end: function (index) {
      layer.close(index)
      $('#juris').css("display", "none")
    }
  })
}