

change()
function load() {
	$(".right").mLoading("show");
}
function onblu(){
    $("#real-datatableAll").bootstrapTable('destroy');
    $('#div-one').css('display','none')
    $('#loadchart').css('display','block')
    $('#real-datatableAll').css('display','none')
    $('#loadtable').css('display','block')
    var timeMM= document.getElementsByClassName('el-range-input')
    var  texts=timeMM[0].value
    var  texte=timeMM[1].value
    var serverSub= $("#district").val(); //区服
    if (serverSub != null) {
        serverSub = serverSub.join(",");
    }
    $.ajax({
        type: "post",
        url: "../queryHomeDate.action",
        async: true,
        data: {
            serverId: serverSub,
            startTime: texts,
            endTime:texte
        },
        success: function (ob) {
            AddUser(ob);
            tableRetain(ob)
            retentionTable(serverSub,texts,texte)
        }
    });
}
function change() {
    $('#districtNext').css('display','block')
	$.ajax({
		type: "get",
		url: "http://150.109.167.142:9110/frontEnd/queryAreas",
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
    $('#div-one').css('display','none')
    $('#loadchart').css('display','block')
    $('#real-datatableAll').css('display','none')
    $('#loadtable').css('display','block')
	var text5 = $("#district").val(); //区服
	var time
	var text1
	var textTime
	// var aa=vm.ruleForm.dateValue
    var date = new Date();
    var now=new Date(date-24*3600*1000)
    var oneweekdate = new Date(date-30*24*3600*1000);
    var y = oneweekdate.getFullYear();
    var m = oneweekdate.getMonth()+1;
    var d = oneweekdate.getDate();
    if(m<10){
        m='0'+m
    }
    if(d<10){
        d='0'+d
    }
    var formatwdate = y+'-'+m+'-'+d;
    var yn = now.getFullYear();
    var mn = now.getMonth()+1;
    var dn = now.getDate();
    if(mn<10){
        mn='0'+mn
    }
    if(dn<10){
        dn='0'+dn
    }
    var formatwdateNow = yn+'-'+mn+'-'+dn;
    text1=formatwdate
    textTime=formatwdateNow//晚
	// if(aa==undefined||aa==''||aa==null){
    //     text1=formatwdate
    //     textTime=formatwdateNow//晚
	// }else{
    //     time= vm.ruleForm.dateValue
    //     text1=time[0]
    //     textTime=time[1]
	// }
	if (text5 != null) {
		text5 = text5.join(",");
	}
	$.ajax({
		type: "post",
		url: "../queryHomeDate.action",
		async: true,
		data: {
			serverId: text5,
			startTime: text1,
			endTime:textTime
		},
		success: function (ob) {
            AddUser(ob);
            tableRetain(ob)
            retentionTable(text5,text1,textTime)
		}
	});
}
function retentionTable(text5,text1,textTime) {
    $('#loadtable').css('display','none')
    $('#real-datatableAll').css('display','block')
    var t = $("#real-datatableAll").bootstrapTable({
        // url: '../queryHomeDateTable.action',////改接口
        // method: 'post',
        // dataType: "json",
        // height:352,
        // contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
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
        pageList: [10, 30, 50,'All'], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
        paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
        paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
        // singleSelect: false,//设置True 将禁止多选
        search: false, //显示搜索框
        data_local: "zh-US", //表格汉化
        sidePagination: "client", //客户端处理分页
        data:[{'logTime':'2019-11-26','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-25','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-24','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-23','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-22','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-21','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',},
            {'logTime':'2019-11-20','firstLoginNum':'0','activeNum':'0','registerNum':'0','payNum':'0','amount1':'0','amount2':'0','amount3':'0','amount4':'0','amount5':'0','amount6':'0','amount7':'0',}],
        // queryParams: function() { //自定义参数，这里的参数是传给后台的，我这是是分页用的
        //     return { //这里的params是table提供的
        //         serverId: text5,
        //         startTime: text1,
        //         endTime:textTime
        //     };
        // },
        idField: "logTime", //指定主键列
        columns: [
            {
                title: '日期',
                field: 'logTime',
                align: 'center',
                width: 210
            },
            {
                title: '新增活跃人数',
                field: 'firstLoginNum',
                align: 'center',
                width: 210
            },
            {
                title: '新增充值金额',
                field: 'activeNum',
                align: 'center',
                width:200
            },
            {
                title: '新增注册',
                field: 'registerNum',
                align: 'center',
                width: 150
            },

            {
                title: '付费金额',
                field: 'payNum',
                align: 'center',
                width: 150
            },
            {
                title: '首日LTV',
                field: 'amount1',
                align: 'center',
                width: 150
            },
            {
                title: '2日LTV',
                field: 'amount2',
                align: 'center',
                width:150
            },
            {
                title: '3日LTV',
                field: 'amount3',
                align: 'center',
                width: 150
            },
            {
                title: '4日LTV',
                field: 'amount4',
                align: 'center',
                width: 150
            },
            {
                title: '5日LTV',
                field: 'amount5',
                align: 'center',
                width: 150
            },
            {
                title: '6日LTV',
                field: 'amount6',
                align: 'center',
                width: 150
            },{
                title: '7日LTV',
                field: 'amount7',
                align: 'center',
                width: 150
            },
            // {
            //     title: '8日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '9日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '10日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '11日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '12日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '13日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '14日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '15日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '16日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '17日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '18日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '19日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '20日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '21日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '22日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '23日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '24日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '25日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },
            // {
            //     title: '26日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '27日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '28日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '29日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '30日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '45日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '60日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '90日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 80
            // },{
            //     title: '120日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 100
            // },{
            //     title: '150日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 100
            // },{
            //     title: '180日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 100
            // },{
            //     title: '360日留存',
            //     field: 'payAmount',
            //     align: 'center',
            //     width: 100
            // }
        ]
    });
    t.on('load-success.bs.table', function(data) { //table加载成功后的监听函数
        $("#page-wrapper").mLoading("hide");
    });
}
//ltv图形
function AddUser(data) {
    $('#loadchart').css('display','none')
    $('#div-one').css('display','block')
	var chart=null
	var arr5 = [];
	var arr6 = [];
    var arr15 = [];
    var arr10 = [];
	for (var i = 0; i < data.data[2].length; i++) {
        var someDate = data.data[2][i].logTime.substring(0, data.data[2][i].logTime.indexOf(' '))
        var tm = Math.floor(data.data[2][i].dayRetain * 100) / 100;
        var rq = Math.floor(data.data[2][i].threeRetain * 100) / 100;
        var we = Math.floor(data.data[2][i].weekRetain * 100) / 100;
        arr5.push(tm)
        arr6.push(rq)
        arr15.push(we)
        arr10.push(someDate)
	}
   chart = Highcharts.chart('div-one', {
		chart: {
            height:280,
			type: 'spline',
			backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
       title: {
           text:' ',
           // align: 'left',
           // verticalAlign: 'middle',
           // x:-10,
           // y: -60,
           // useHTML:true,
           // style: {
           //     color: '#999999',
           //     fontWeight:'400',
           //     fontSize:'12',
           // }
       },
		credits: {
			enabled: false // 禁用版权信息
		},
        exporting: {
            enabled:false,//默认为可用，当设置为false时，图表的打印及导出功能失效
            filename:'注册数据',//导出的文件名
        },
		xAxis: {
			 plotLines:[{
			        color:'white',            //线的颜色
			        dashStyle:'longdashdot',//标示线的样式，默认是solid（实线），这里定义为长虚线
			        value:this,                //定义在哪个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
			        width:1                 //标示线的宽度，2px
			    }],
            lineWidth:1,
            lineColor:'#333333',
            tickColor:'#333333',
			gridLineWidth: .5,
            gridLineColor:'#202020',
			gridLineDashStyle:"Dash",
            tickmarkPlacement:'on',
			type: 'datetime',
			categories: ['2019-11-20','2019-11-21','2019-11-22','2019-11-23','2019-11-24','2019-11-25','2019-11-26'],
			labels: {
				enable: true,
				style: {
					color: '#999999'
				}
			}
		},
		tooltip: {
            shared: true,
            crosshairs:{
                width: 1,
                color: '#707070',
                dashStyle: 'Dash'
            },
            backgroundColor: '#363F48',   // 背景颜色
            borderColor: '#363F48',         // 边框颜色
            borderRadius: 2,             // 边框圆角
            opacity:'1',
            // useHTML: true,
            style: {                      // 文字内容相关样式
                color: "#ffffff",
                opacity:'1',
                fontSize: "12px",
            },
            // useHTML: true,
            // headerFormat: '<span style="font-size:12px">{point.key}</span><br />',
        },
		yAxis: {
            title: {
                text: ''
            },
            lineWidth:1,
            lineColor:'#333333',
            gridLineColor:'#333333',
			labels: {
				format: '{value}',
				style: {
					color: '#999999',
				}
			}
		},
       legend: {
           // align: 'right', //水平方向位置
           // verticalAlign: 'top', //垂直方向位置
           // right:30,
           // y: -30, //距离Y轴的距离
           itemStyle: {
               color: '#999999',
           },
           itemHoverStyle: {
               color: '#999999'
           }
       },
		plotOptions: {
			series: {
				lineWidth: 2,
				color:"#ffb665"
			}
		},
		series: [{
			id: 'exSeries',
			name: '次日LTV',
			data: [0,0,0,0,0,0,0],
            lineWidth: 2,
            color:"#10CFBD",
		},{
            name: '3日LTV',
            data:[0,0,0,0,0,0,0],
            lineWidth: 2,
            color:"#CF10A2",
        },{
                name: '7日LTV',
                data: [0,0,0,0,0,0,0],
                lineWidth: 2,
                color:"#999999",
            }],
	});
}
//ltv导出表格
function tableRetain(data) {
    $('#loadtable').css('display','none')
    $('#real-datatableAll').css('display','block')
    $("#real-datatableT").bootstrapTable('destroy')
    $("#real-tbodyT").empty();
    var timeday=['2019-11-26','2019-11-25','2019-11-24','2019-11-23','2019-11-22','2019-11-21','2019-11-20']
    var nextday=[0,0,0,0,0,0,0]
    var threeday=[0,0,0,0,0,0,0]
    var weekday=[0,0,0,0,0,0,0]
    for (var i = 0; i < 7; i++) {
        $("#real-tbodyT").append(
            "<tr><td>" +  timeday[i]+
            "</td><td>" +nextday[i] +
            "</td><td>" + threeday[i] +
            "</td><td>"+weekday[i]+"</td></tr>"
        )
    }
}
