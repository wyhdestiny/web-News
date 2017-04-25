window.addEventListener("load",function(){
	
	
//审核通过
	$("#yesPass").click(function(){
//		alert("0000")
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
	})
	
	
	
//返回上一级
	$(".yh_defh").click(function(){
		location.href="auditList.html";
	})
})