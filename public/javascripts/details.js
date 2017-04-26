window.addEventListener("load",function(){
//获取列表详情
	var html='';
  	var id =  location.href.split('id')[1];
   console.log(id);
	$.ajax({
		type:"post",
		url:"http://192.168.43.4:3000/newlist/clicks",
		async:true,
		data:{
			newid:id
		},
		success:function(e){
			console.log(e.data[0]);
			console.log(e.data[0].clicks);
			html+='<div class="txt_tit">'+e.data[0].title+'</div><div class="yu_autor">文&nbsp;/&nbsp;F.S菲茨杰拉德</div><div class="yu_cont" > '+e.data[0].content+'</div>'
			$(".yu_debody").append(html);
			$(".readed").html(e.data[0].clicks+'人已读');
			$(".yu_time").html(e.data[0].time);
			//点击收藏
			var off=true;
			$("#collect").click(function(){
				if(off){
					$(this).attr("class","glyphicon glyphicon-star chang");
					$.ajax({
						type:"post",
						url:"http://192.168.43.4:3000/newlist/collect",
						async:true,
						data:{
							newid: e.data[0].newid,
							uid:sessionStorage.uid
						},
						success:function(e){
							console.log(e);
							
						}
					})
					off=false;
				}
			})
		}
		
	});
	

	
	
	
//返回上一级
	$(".yh_defh").click(function(){
		location.href="lists.html?"+sessionStorage.uid;
	})
	
	
	

	
	
	
	
	
	
})