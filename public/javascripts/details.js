window.addEventListener("load",function(){
	
	
	
	
	
	
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