window.addEventListener('load',function(){    
     var oDiv = $(".zhj_content").children('div').length
     console.log(oDiv)  
//点击头像，跳转页面
	$(".zhj_head_left").click(function(){
		location.href="personMsg.html";
	})
	
	
	
	
	
	
	
	
	
	
	
//点击发布，跳转页面
	$("#onload").click(function(){
		location.href="publishCont.html";
	})
//点击列表
	$(".zhj_lineOne").click(function(){
		location.href="lists.html?1";
	})
	$(".zhj_lineTwo").click(function(){
		location.href="lists.html?2";
	})
	$(".zhj_lineThree").click(function(){
		location.href="lists.html?3";
	})
	$(".zhj_lineFour").click(function(){
		location.href="lists.html?4";
	})
	$(".zhj_lineFive").click(function(){
		location.href="lists.html?5";
	})
	$(".zhj_lineSix").click(function(){
		location.href="lists.html?6";
	})
	$(".zhj_lineSeven").click(function(){
		location.href="lists.html?7";
	})


},false)
