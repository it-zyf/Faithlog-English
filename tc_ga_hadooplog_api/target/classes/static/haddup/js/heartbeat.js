
reg()
function reg(){
	$.ajax({
		type:"get",
		url:"../queryHeartbeat.action",
		async:true,
		success:function(json){
			onreal(json)
		}
	}); 
}
function onreal(json){
	var arr=[];//数据
	var Arr=[];//时间
	for(var i=0;i<json.rows.length;i++){
		var a=json.rows[i].playerCount
		var b=json.rows[i].logTime
		arr.unshift(a)
		Arr.unshift(b)
	}
	
	Highcharts.setOptions({global: {useUTC: false}});
	var max=6;
	var chart = Highcharts.chart('container', {
		chart: {
			type: 'spline',
			events: {
                load: st  
            },
            backgroundColor: {
				stops: [
					[0, 'rgb(54, 54, 54)']
				]
			},
		},
		
		title: {
			text: '在线用户心跳图',
			style: {
				color:'#c0c0c0'
			}
		},
		credits:{
            enabled:false // 禁用版权信息
        },
        exporting: {
            enabled:false//禁用右上角打印
		},
		xAxis: {
			type: 'datetime',
			categories: Arr,
			labels:{
				enable: true,
				rotation:320,
				style: {
					color: '#fff'
				}
			},	
			dateTimeLabelFormats: {
				week: '%Y-%m-%d'
			}
		},
		yAxis: {
			title: {
				text: ""
			},
			labels: {
				style: {
					color: '#fff'
				}
			}
		},
		tooltip: {
			formatter: function () {
				return '<b>'+this.x+ '</b><br>'+ this.series.name + '<br/>'+ Highcharts.numberFormat(this.y, 2);
			}
		},
		legend: {
			itemStyle: {
				color: '#c0c0c0',
			},
			itemHoverStyle: {
				color: '#fff'
			}
		},
		series:  [ {
		     name : '在线用户数',
		     data : arr
	    } ]
	});
	
	function st() {
	   	setInterval(getData, 10000);
	}
	//动态更新图表数据
	function getData() {
	   
	   var categories
	   $.ajax({
	      	type: "post",
	      	url: "../queryHeartbeat.action",    
	      	dataType: "json",
	      	async: false,
	      	success : function(data){
		     	var d = [];
		       	for(var i=0;i<data.rows.length;i++){
		       		d.unshift(parseInt(data.rows[i].playerCount))
		       		categories = data.rows[i].logTime;
		       	}
		      	chart.series[0].addPoint(d);
		      	Arr.push(categories)
	      	}
	    });
	}
}