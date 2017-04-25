window.addEventListener("load",function(){
	
	$.ajax({
		type:"post",
		url:"http://192.168.43.4:3000/newlist/clicks",
		async:true,
		data:{
			newid:
		}
	});
	
	
	
	
//返回上一级
	$(".yh_defh").click(function(){
		location.href="lists.html";
	})
	
//点击收藏
	var off=true;
	$("#collect").click(function(){
		if(off){
			$(this).attr("class","glyphicon glyphicon-star chang");
			off=false;
		}else{
			$(this).attr("class","glyphicon glyphicon-star-empty yu_collect fl");
			off=true;
		}
		
//		alert(3)
	})
	
	
	
	
	
	
	
	
})