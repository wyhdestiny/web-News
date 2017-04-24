$(document).ready(function(){

	
	$("#tijiao").click(function(){





		var Use_val=$("#Use_val").val();
	    var Pass_val=$("#Pass_val").val();
	    var rePass_val=$("#rePass_val").val();
	    var Tel_val=$("#Tel_val").val();
	    var Eml_val=$("#Eml_val").val();
	    var Name_val=$("#Name_val").val();
	    var Qq_val=$("#Qq_val").val();
	    var mimaRex = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/; //密码验证
	    var shoujiRex=/^1[34578]\d{9}$/;  //手机号验证
	    var youxiangRex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//邮箱验证
	    var qqRex=/^\d{5,10}$/;    //qq验证
	    if(Use_val==''){
	    	alert('请输入您的用户名！');
	    }else if(Pass_val==""){
	    	alert("请输入您的密码！");
	    }else if(Pass_val.length<6){
    		alert("密码不能小于6位！");
	    }else if(Pass_val.length>12){
    		alert("密码不能大于12位！");
	    }else if(Pass_val!=Pass_val.match(mimaRex)){
    		alert("密码由6~12位字母和数字组成！");
	    }else if(rePass_val==""){
	    	alert("请输入确认密码！");
	    }else if(rePass_val!=Pass_val){
	    	alert("两次密码不相同！");
	    }else if(Tel_val==""){
	    	alert("请输入您的手机号！")
	    }else if(Tel_val!=Tel_val.match(shoujiRex)){
	    	alert("手机号格式不对！")
	    }else if(Eml_val==""){
	    	alert("请输入您的邮箱！")
	    }else if(!(Eml_val.match(youxiangRex))){
	    	alert("邮箱格式不对！")
	    }else if(Name_val==""){
	    	alert("请输入您的姓名！")
	    }else if(Qq_val==""){
	    	alert("请输入您的QQ！")
	    }else if(Qq_val!=Qq_val.match(qqRex)){
	    	alert("qq格式不对！")
	    }else{
	    	$.ajax({
				type:"post",
				url:"http://192.168.43.4:3000/user/register",
				async:true,
				data:{
					username:Use_val,
					password:MD5(Pass_val),
					name:Name_val,
					tel:Tel_val,
					qq:Qq_val,
					email:Eml_val,
					level:0
				},
				success:function(e){
					console.log(e);
					if(e.success==1){
						console.log("注册成功！");
						location.href="../login.html";
					}else if(e.success==2){
						alert("用户名已注册！");
					}
					sessionStorage.setItem("password", MD5(Pass_val));
				}
			});
	    }
	})
	
	
	function hidd(){
		$('.shdon').css('display','block');
		$('.shdon').css('opacity','1');
		$('.shower').css('opacity','1');
		$('.shower').css('display','block');
		$('.shower').css('transition','all 0.6s');
		$('.shower').css('transform','translateY(100%)');
		$('.shower').css('background','rgba(255,255,255,1)');
		$('.shower').css('color','black');
		$('.shower i').css('color','black');
		$('.shower').css('opacity','0.8');
		
		$(".shower i").click(function(){
			$('.shdon').css('opacity','1');
			$('.shdon').css('display','none');
			$('.shower').css('opacity','1');
			$('.shower').css('transition','all 0.6s');
			$('.shower').css('transform','translateY(200%)');
			$('.shower').css('background','rgba(0,0,0,0.8)');
			$('.shower').css('color','white');
			$('.shower i').css('color','white');
			$('.shower').css('opacity','0');
			$('.shower').css('top','0');
		})	
		$(".zhj_button").click(function(){
			$('.shower').css('opacity','1');
			$('.shdon').css('display','none');
			$('.shower').css('transition','all 0.6s');
			$('.shower').css('transform','translateY(200%)');
			$('.shower').css('background','rgba(0,0,0,0.8)');
			$('.shower').css('color','white');
			$('.shower i').css('color','white');
			$('.shower').css('opacity','0');
			$('.shower').css('top','0');
		})
		
		
	}
	
/*	function tishi(){
//		$('.yu_tishi').css('top','0');
		setTimeout(function () {
			 $('.yu_tishi').delay(6000).hide();
//			$('.yu_tishi').css('top','0');
		}, 6000);
	}*/
//返回上一级

	$('.yh_fh').click(function(){
		location.href="../login.html";
	})
})
