window.addEventListener('load',function(){
	$(".lhq-lhq-lhq").click(function(){
		location.href="personMsg.html";
		console.log('1234')
	})
	
	
	var html='';
	var str=location.href.split("?")[1];
		$.ajax({
			type:"post",
			url:"http://192.168.43.4:3000/newlist/clicks",
			async:true,
			data:{
				newid:str
			},
			success:function(e){
				console.log(e);
				html = '<div class="txt_tit">'+e.data[0].title+'</div><div class="yu_autor">文&nbsp;/&nbsp;'+sessionStorage.username+'</div><div class="yu_cont" >'+e.data[0].content+'</div>';
				$('.yu_debody').append(html)
			}
		})
	
	
	
	
	
	
	
	
	
},false)
	
