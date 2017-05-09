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
				
			if(data.data[0].category == '1') {
				lll = 'Html'
			} else if(data.data[0].category == '5') {
				lll = 'Angular'
			} else if(data.data[0].category == '4') {
				lll = 'Jquery'
			} else if(data.data[0].category == '2') {
				lll = 'Css'
			} else if(data.data[0].category =='6') {
				lll = 'Node/Php'
			} else if(data.data[0].category =='3' ) {
				lll = 'Js'
			} else if(data.data[0].category == '7') {
				lll = '其它'
			}
			if(data.data[0].audit =='0'){
				llqqq = '未审核'
			}else if(data.data[0].audit =='1'){
				llqqq = '审核通过'
			}else if(data.data[0].audit =='2'){
				llqqq = '未通过'
			}
				var html="";
				html+='<a href="lhq.html?'+data.data[0].newid+'"'+data.data[0].newid+'"><p><i>'+data.data[0].title+'</i></p><p><i>'+data.data[0].content+'</i></p><p><span>类型</span><i>'+lll+'</i><span>时间</span><span>'+data.data[0].time+'</span><span>'+llqqq+'</span></p>';
				$(".lhq-list").append(html)
				i++;
				eadt()
			}
		})
		}	
	}	
})