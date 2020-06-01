//新增区服
$("#add").click(function(){
	var serial=$("#uname-ad").val();
	var name=$("#upwd-ad").val();
	var re = /^[0-9]+.?[0-9]*$/;
	var reg = /[@#\$%\^&\*\!]+/g;
	if(serial.length>12){
		alert("区服编号长度最多为12位")
		return false;
	}else if(name.length>12){
		alert("区服名称长度最多为12位")
		return false;
	}else if(serial==""||!re.test(serial)){
		alert("区服编号不能为空且只能为数字")
		return false
	}else if(name==""){
		alert("区服名称不能为空")
		return false
	}else{
		$.ajax({
			type:"get",
			url:"../addAreas.action",
			async:false,
			data:{areaid:serial,areaname:name},
			success:function(){
				alert("添加成功")
				location.reload()
			}
		})
	}
})
adload()
function adload(){
	$.ajax({
		type:"get",
		url:"http://150.109.167.142:9110/frontEnd/queryAreas",
		async:false,
		success:function(a){
			for(var i=0;i<a.data.length;i++){
				$("#consumer-table").append("<tbody>"+
						  		"<tr><td>"+a.data[i].areaid+
				                "</td><td>"+a.data[i].areaname+
				                "</td><td class='td-three'>"+
				                "</td></tr>"+
				                "</tbody>"
				               )		
			};
			$(".td-three").append( "<span class='amend' data-toggle='modal' data-target='#myModal'>修改</span>&nbsp;&nbsp;"+"<span class='del'>删除</span>")
			var Aserial
			//删除
			$("tr .td-three").on("click",".del",function(e){	
				Aserial=$(this).parent().parent('tr').children('td:eq(0)').text()
				$.ajax({
					type:"get",
					url:"../deleteAreas.action",
					async:false,
					data:{confid:Aserial},
					success:function(){
						alert("删除成功")
						$(this).parent().parent().remove()
						location.reload()
					}
				})
			})
			//获取ID
			var UID;
			$(".amend").click(function(){
				UID=$(this).parent().parent('tr').children('td:eq(0)').text()
			})
			//修改
			$("#ad-confitm").click(function(){
				var aser=$("#uname").val();
				var aname=$("#upwd").val();
				var re = /^[0-9]+.?[0-9]*$/;
				var reg = /[@#\$%\^&\*\!]+/g;
				if(aser.length>12){
					alert("区服编号长度最多为12位")
					return false
				}else if(aname.length>12){
					alert("区服名称长度最多为12位")
					return false
				}else if(aser==""||!re.test(aser)){
					alert("区服编号不能为空且只能为数字")
					return false
				}else if(aname==""){
					alert("区服名称不能为空")
					return false
				}else{
					$.ajax({
						type:"get",
						url:"../updateAreas.action",
						async:false,
						data:{confid:UID,areaid:aser,areaname:aname},
						success:function(){
							alert("保存成功")
							location.reload();
						}
					})
				}
					
			});		
		}
	});
	

}