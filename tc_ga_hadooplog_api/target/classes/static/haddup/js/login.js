//跳转
function logins() {
	var account = $("#account").val();
	var pasd = $("#password").val();
	$.ajax({
		type: "get",
		url: "../login.action",
		async: true,
		data: {
			username: account,
			password: pasd
		},
		success: function(json) {
			if(json.state == true) {
				var arr = json.data.moduleids
				$.cookie("username", account, {
					expires: 10
				})
				var array = arr.split(',')//class标志号
				var i = array.slice(0, 1)//第一个class号
				var arrayObj=JSON.stringify(array)
				$.cookie("navIndex", arrayObj, {//存展示页面的class号
					expires: 10
				})
				$.cookie("firstIndex", i, {//第一个跳转的class号
					expires: 10
				})
				
				var htm
				for(var x = 0; x < json.data.cm.length; x++) {
					var a = json.data.cm[x].moduleid;//class号
					if(a == i) {
						htm = json.data.cm[x].modulename//html名
						var n = "."+i
						$(n).css("display","block")
						console.log(n)
					}
				}
				//console.log(htm)
				window.location.href = htm + ".html"
				//window.location.href = "realAll.html"
			} else {
				alert(json.message)
			}
		}
	});
}
layui.use('form', function() {
	var form = layui.form;

});
var tnum = 'cn';
$(document).ready(function() {
	//下拉菜单选择
	$(document).click(function(e) {
		$('.translate_wrapper, .more_lang').removeClass('active'); //点击空白处收起下拉框
	});

	$('.translate_wrapper .current_lang').click(function(e) {
		e.stopPropagation();
		$(this).parent().toggleClass('active');
		setTimeout(function() {
			$('.more_lang').toggleClass('active');
		}, 5);
	});
	/*TRANSLATE*/

	$('.more_lang .lang').click(function() {
		$(this).addClass('selected').siblings().removeClass('selected'); //点击给自身添加class，其他兄弟元素清除class
		$('.more_lang').removeClass('active'); //点击选中语言后下拉框收起
		var img = $(this).find('img').attr('src');
		var lang = $(this).attr('data-value');
		var tnum = lang; //获取到当前选中语言的data-value
		$.cookie("value", lang, {
			expires: 10,
			path: '/'
		})

		$('.current_lang .lang-txt').text(lang);
		$('.current_lang img').attr('src', img);

	});
});