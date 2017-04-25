window.addEventListener("load",function(){

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
	
	
//密码
	$("#Pass_val")[0].addEventListener("input",function(){
		 var Pass_val=$("#Pass_val").val();
//		console.log(Pass_val)
		if(Pass_val==""){
			$(".yu_tishi").html("请输入您的密码！")
	    	$(".yu_tishi").css("display","block");		
	    }else if(Pass_val.length<6){
	    	$(".yu_tishi").html("密码不能小于6位！")
	    	$(".yu_tishi").css("display","block");
	    }else if(Pass_val.length>12){
    		$(".yu_tishi").html("密码不能大于12位！")
	    	$(".yu_tishi").css("display","block");
	    }else if(Pass_val!=Pass_val.match(mimaRex)){
    		$(".yu_tishi").html("密码由6~12位字母和数字组成！")
	    	$(".yu_tishi").css("display","block");
	    }else{
	    	$(".yu_tishi").css("display","none");
	    }
		
	})
	
	
//确认密码
	$("#rePass_val")[0].addEventListener("input",function(){
		var rePass_val=$("#rePass_val").val();
		var Pass_val=$("#Pass_val").val();
		console.log(rePass_val);
		console.log(Pass_val);
		if(rePass_val==""){
	    	$(".yu_tishi").html("请输入确认密码！");
	    	$(".yu_tishi").css("display","block");
	    }else if(rePass_val!=Pass_val){
	    	$(".yu_tishi").html("两次密码不相同！");
	    	$(".yu_tishi").css("display","block");
	    }else{
	    	$(".yu_tishi").css("display","none");
	    }
	})
	
	
	
//用户名
	$("#Use_val")[0].addEventListener("input",function(){
		var Use_val=$("#Use_val").val();
//		console.log(Use_val)
		if(Use_val==''){
	    	$(".yu_tishi").html("请输入您的用户名！")
	    	$(".yu_tishi").css("display","block");
	    }else{
	    	$(".yu_tishi").css("display","none");
	    }
	})
	
//手机号
	$("#Tel_val")[0].addEventListener("input",function(){
		var Tel_val=$("#Tel_val").val();
//		console.log(Tel_val)
		if(Tel_val==""){
	    	$(".yu_tishi").html("请输入您的手机号！")
	    	$(".yu_tishi").css("display","block");
	    }else if(!(Tel_val.match(shoujiRex))){
	    	$(".yu_tishi").html("手机号格式不对！")
	    	$(".yu_tishi").css("display","block");
	    }else{
	    	$(".yu_tishi").css("display","none");
	    }
	})
	
//邮箱
	$("#Eml_val")[0].addEventListener("input",function(){
		var Eml_val=$("#Eml_val").val();
//		console.log(Eml_val)
		if(Eml_val==""){
	    	$(".yu_tishi").html("请输入您的邮箱！")
	    	$(".yu_tishi").css("display","block");
	    }else if(!(Eml_val.match(youxiangRex))){
	    	$(".yu_tishi").html("邮箱格式不对！")
	    	$(".yu_tishi").css("display","block");
	    }else{
	    	$(".yu_tishi").css("display","none");
	    }
	})	
	

//姓名
	$("#Name_val")[0].addEventListener("input",function(){
		var Name_val=$("#Name_val").val();
//		console.log(Name_val)
		if(Name_val==""){
	    	$(".yu_tishi").html("请输入您的姓名！")
	    	$(".yu_tishi").css("display","block");
	    }else{
	    	$(".yu_tishi").css("display","none");
	    }
	})	
	
	
//QQ
	$("#Qq_val")[0].addEventListener("input",function(){
		var Qq_val=$("#Qq_val").val();
//		console.log(Qq_val)
		if(Qq_val==""){
	    	$(".yu_tishi").html("请输入您的QQ！")
	    	$(".yu_tishi").css("display","block");
	    }else if(Qq_val!=Qq_val.match(qqRex)){
	    	$(".yu_tishi").html("qq格式不对！")
	    	$(".yu_tishi").css("display","block");
	    }else{
	    	$(".yu_tishi").css("display","none");
	    }
	})		
	
	
	
	
	
	
	$("#tijiao").click(function(){
		
		var Use_val=$("#Use_val").val();
	    var Pass_val=$("#Pass_val").val();
	    var rePass_val=$("#rePass_val").val();
	    var Tel_val=$("#Tel_val").val();
	    var Eml_val=$("#Eml_val").val();
	    var Name_val=$("#Name_val").val();
	    var Qq_val=$("#Qq_val").val();
	    if(Use_val==''){
	    	$(".yu_tishi").html("请输入您的用户名！")
	    	$(".yu_tishi").css("display","block");
	    }
	    /*else if(Pass_val==""){
	    	$(".yu_tishi").html("请输入您的密码！")
	    	$(".yu_tishi").css("display","block");
	    }else if(rePass_val==""){
	    	$(".yu_tishi").html("请您确认密码！")
	    	$(".yu_tishi").css("display","block");
	    }else if(Tel_val==""){
	    	$(".yu_tishi").html("请输入您的手机号！")
	    	$(".yu_tishi").css("display","block");
	    }else if(Eml_val==""){
	    	$(".yu_tishi").html("请输入您的邮箱！")
	    	$(".yu_tishi").css("display","block");
	    }else if(Name_val==""){
	    	$(".yu_tishi").html("请输入您的姓名！")
	    	$(".yu_tishi").css("display","block");
	    }else if(Qq_val==""){
	    	$(".yu_tishi").html("请输入您的QQ！")
	    	$(".yu_tishi").css("display","block");
	    }*/
	    else{
	    	console.log("都填写成功");
	    	tankuang();
	    	$(".zhj_button").click(function(){
				var Use_val=$("#Use_val").val();
			    var Pass_val=$("#Pass_val").val();
			    var rePass_val=$("#rePass_val").val();
			    var Tel_val=$("#Tel_val").val();
			    var Eml_val=$("#Eml_val").val();
			    var Name_val=$("#Name_val").val();
			    var Qq_val=$("#Qq_val").val();
				$('.shower').css('opacity','1');
				$('.shdon').css('display','none');
				$('.shower').css('transition','all 0.6s');
				$('.shower').css('transform','translateY(200%)');
				$('.shower').css('background','rgba(0,0,0,0.8)');
				$('.shower').css('color','white');
				$('.shower i').css('color','white');
				$('.shower').css('opacity','0');
				$('.shower').css('top','0');
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
							hiddsucc()
							console.log("注册成功");
							
						}else if(e.success==2){
							hiddcunzai()
							console.log("用户名已注册！");
						}
						sessionStorage.setItem("password", MD5(Pass_val));
					}
				});
			})
	    }
	})
	quxiao()
//注册点击取消	
	function quxiao(){
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
	}

	
//弹框出来
	function tankuang(){
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
	}
	
//点击提交出现弹框用户名已存在
	function hiddcunzai(){
		$(".txt_yu").html("该用户名已注册！")
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
//		susu()
	}
//点击提交出现弹框成功
	function hiddsucc(){
		$(".txt_yu").html("恭喜你，注册成功！！")
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
		$(".zhj_button").click(function(){
			$(".txt_yu").html("啥都顺丰到付VC！！")
//			$('.shower').css('opacity','1');
//			$('.shdon').css('display','none');
//			$('.shower').css('transition','all 0.6s');
//			$('.shower').css('transform','translateY(200%)');
//			$('.shower').css('background','rgba(0,0,0,0.8)');
//			$('.shower').css('color','white');
//			$('.shower i').css('color','white');
//			$('.shower').css('opacity','0');
//			$('.shower').css('top','0');
//			location.href="../login.html";
		})	
		
		
		
	}
	


//返回上一级
	$('.yh_fh').click(function(){
		location.href="../login.html";
	})
	
	
/*$(".shower i").click(function(){
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
		})*/	
	
})
