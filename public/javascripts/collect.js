window.addEventListener('load',function(){
	var js = window.location.href.split('?')[1];
	if(js=='fb'){
		$('.lhq-touxx').text('我的发布');
		var arr=sessionStorage.arrfb.split(",");
		console.log(arr)
	}else if(js=='sc'){
		$('.lhq-touxx').text('我的收藏');
		var arr=sessionStorage.arrsc.split(",");
		console.log(arr)
	}
	
	
	
	var i=0;
	$(".lhq-list").children().remove()
	eadt();
	function eadt(){
		if(i<arr.length){
			$.ajax({
			type:"post",
			url:"http://192.168.43.4:3000/newlist/clicks",
			async:true,
			data:{
				newid:arr[i]
			},
			success:function(data){
				
				console.log(data)
				var html="";
				html+='<a href="auditCont.html'+data.data[0].newid+'"><p><i>'+data.data[0].title+'</i></p><p><i>'+data.data[0].content+'</i></p><p><span>类型：</span><i>css</i><span>发布时间</span><span>'+data.data[0].time+'</span></p>';
				$(".lhq-list").append(html)
				i++;
				eadt()
			}
		})
		}
		
	}
	
	
})