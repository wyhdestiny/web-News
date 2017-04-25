window.addEventListener('load',function(){
	
	
//返回上一级
	$(".zhj_head_left").click(function(){
		location.href="lists.html";
	})	
	
	$('.btn')[0].addEventListener('touchstart',function(){
		var Sval = $(".textv").val();
		
		$.ajax({
			type:"get",
			url:"http://192.168.43.4:3000/newlist/search",
			async:true,
			data:{
				keyword:Sval
			},
			success:function(data){
				$('.zhj_contents').children().remove()
				console.log(data.data.length);
				var html=''
				if(data.data.length>0){
//					alert(1)
					for(var i=0;i<data.data.length;i++){
						html+='<div class="zhj_biaoti"><h3>'+data.data[i].title+'</h3><div class="zhj_text">'+data.data[i].content+'</div><div class="zhj_btn"><div class="zhj_fbr"><span>发布人：</span><span>阿曾</span></div><div class="zhj_xie">/</div><div class="upName"><span>发布时间：</span><span>'+data.data[i].time+'</span></div></div></div>'										
					}
					$('.zhj_contents').append(html);
					$(".zhj_biaoti").css('display','block');
					$(".zhj_null").css('display','none');
					
					
//					html='';
			 	}else{
			 		$(".zhj_biaoti").css('display','none');
					$(".zhj_null").css('display','block')
				}
			}
		})
		
		
		
		
		
	},false)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
},false);