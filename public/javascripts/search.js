window.addEventListener('load',function(){
	
	
//返回上一级

    
	$(".zhj_head_left").click(function(){
		location.href="lists.html?"+sessionStorage.categoryId;
	})	
		
	
		
	
	$('.btn')[0].addEventListener('touchstart',function(){
		if($(".textv").val()==''){
			$(".zhj_contents").css("display","none");
			$(".zhj_null").css("display","block");
			
			  return;
		}else{
			$(".zhj_null").css("display","none");
			$(".zhj_contents").css("display","block");
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
                    console.log(data);
                    console.log("有数据可显示哦！数据一共"+data.data.length+"条");
					for(var i=0;i<data.data.length;i++){
						html+='<div class="zhj_biaoti"><a href="details.html?id'+data.data[i].newid+'"><h3>'+data.data[i].title+'</h3><div class="zhj_text">'+data.data[i].content+'</div><div class="zhj_btn"><div class="zhj_fbr"><span>发布人：</span><span>阿曾</span></div><div class="zhj_xie">/</div><div class="upName"><span>发布时间：</span><span>'+data.data[i].time+'</span></div></div></a></div>'										
					}
					$('.zhj_contents').append(html);
					$(".zhj_biaoti").css('display','block');
					$(".zhj_null").css('display','none');
			 }else{			 		
			 		$(".zhj_biaoti").css('display','none');
					$(".zhj_null").css('display','block');	
					console.log("没有数据可显示！");
				}
			}
		})
		}
		
		
		
		
		
		
	},false)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
},false);