//新增系统用户
$("#add").click(function(){
	var account=$("#uname-ad").val();
	var upwd=$("#upwd-ad").val();
	var address=$("#address-ad").val();
	
	if(account==""||account.length>16){
		alert("账号不能为空且不能超过16位")
		return false
	}else if(upwd==""){
		alert("密码不能为空")
		return false
	}else if(address==""||address.length>16){
		alert("用户姓名不能为空且不能超过16位")
		return false
	}else{
		$.ajax({
			type:"post",
			url:"../addUser.action",
			async:false,
			data:{usercode:account,password:upwd,username:address},
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
		type:"post",
		url:"../queryUsers.action",
		success:function(a){
			for(var i=0;i<a.rows.length;i++){
				$("#consumer-table").append("<tbody>"+
						  		"<tr><td>"+a.rows[i].userid+
				                "</td><td>"+a.rows[i].usercode+
				                "</td><td>"+a.rows[i].username+
				                "</td><td style='display:none'>"+a.rows[i].password+
				                "</td><td class='td-three'>"+
				                "</td></tr>"+
				                "</tbody>"
				               )		
			};
			$(".td-three").append( "<span class='amend' data-toggle='modal' data-target='#myModal'>修改</span>&nbsp;&nbsp;"+"<span class='authority' data-toggle='modal' data-target='#myModal2'>权限配置</span>&nbsp;&nbsp;"+"<span class='reset'>重置密码</span>&nbsp;&nbsp;"+"<span class='del'>删除</span>")
			var ID
			//删除
			$(".del").click(function(){
			    ID=$(this).parent().parent('tr').children('td:eq(0)').text()
				$.ajax({
					type:"get",
					url:"../deleteUser.action",
					async:false,
					data:{userid:ID},
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
				var account=$("#uname").val();
				var upwd=$("#upwd").val();
				var address=$("#address").val();
				if(account==""||account.length>16){
					alert("账号不能为空且不能超过16位")
					return false
				}else if(upwd==""){
					alert("密码不能为空")
					return false
				}else if(address==""||address.length>16){
					alert("用户姓名不能为空且不能超过16位")
					return false
				}else{
					$.ajax({
						type:"get",
						url:"../updateUser.action",
						async:false,
						data:{userid:UID,usercode:account,password:upwd,username:address},
						success:function(){
							alert("保存成功")
							location.reload();
						}
					})
				}
			});
//			$("#qx").click(function(){
//				if(this.checked){
//					$("[name=qx]").prop("checked",true)
//				}else{
//					$("[name=qx]").prop("checked",false)
//				}	
//			});
		//权限配置	
//			$(".authority").click(function(){
//				
//			})
//			$("#save").click(function(){
//				
//			})
	
			//重置密码
			$(".reset").click(function(){
				var psw=$(this).parent().parent('tr').children('td:eq(3)').text()
				console.log(psw)
				$.ajax({
					type:"get",
					url:"../updateUser.action",
					async:false,
					data:{userid:ID,password:123456},
					success:function(){
						alert("重置成功")
//						$(this).parent().parent('tr').children('td:eq(3)').val("123456")
					}
				})
			});
		}
	});
	

}