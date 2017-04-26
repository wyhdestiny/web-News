window.addEventListener("load",function(){
	
	
//审核通过
	$("#yesPass").click(function(){
//		alert("0000")
		tankuang();
		$(".txt_yu").html("恭喜，审核已通过！")
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
	})
//审核不通过
	$("#noPass").click(function(){
//		alert("0000")
		tankuang();
		$(".txt_yu").html("确定审核不通过？")
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
	})

	quxiao()
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
	
	
//返回上一级
	$(".yh_defh").click(function(){
		location.href="auditList.html";
	})
})