$(document).ready(function(){
	
	$("#loading").click(function(){
		var userVal=$("#wyh_uname").val();
	    var pwdVal=$("#wyh_pwd").val();
	    var codeVal=$("#wyh_code").val();
		var wyh_code=$("#wyh_code").val().toUpperCase(); 
		
		if(userVal==0){
	    	alert('请输入您的用户名！');
	    }else if(pwdVal==0){
	    	alert("请输入您的密码！");
	    }else{
	    	if(wyh_code == 0) {
				alert('请输入验证码');
			} else if(wyh_code != code) {
				alert('验证码不正确，请重新输入');
				wyh_code = ' ';
				createCode();
			}else{
//				console.log("全都正确！")
				$.ajax({
					type:"post",
					url:"http://192.168.43.4:3000/user/login", //ness是在app.js中app.use('/ness',neww); 
					data:{
						username:userVal,
						password: pwdVal,
					},
					async:true,
					success:function(e){
						console.log(e);
						console.log(e.result[0].uid);
						if(e.success==1){
							alert("登录成功！");
							sessionStorage.uid=e.result[0].uid;
							location.href="html/firstPage.html";
						}else if(e.success==2){
							alert("用户名不存在！"); 
						}else if(e.success==3){
							alert("用户名和密码不匹配！"); 
						}else{
							alert("登陆失败！");
						}
//						sessionStorage.setItem("password", MD5(pwdVal));
					}
				});
			}
	    }
		
		
		
		
		
	})
	$("#wyh_zhuce").click(function(){
		alert(1)
		location.href="html/register.html";
	})

	createCode();
	function createCode() {
			code = '';
			var codeLength = 4;
			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
			for(var i = 0; i < codeLength; i++) {
				var index = Math.floor(Math.random() * 36);
				code += random[index];
			}
//			console.log($('.yu_codeImg').text())
			
			$('.yu_codeImg').text(code)
		}
		
	$("#yu_codeTxt").click(function(){
//		console.log(1)
		createCode()
	})
	
	
	/*$(".wyh_dengL").click(function(){
		var wyh_code=$("#wyh_code").val().toUpperCase(); 
		if(wyh_code == 0) {
			alert('请输入验证码');
		} else if(wyh_code != code) {
			alert('验证码不正确，请重新输入');
			wyh_code = ' ';
			createCode();
		} else {
			console.log(666);
			
		}
	})*/
	
	
		
		
	
})
	