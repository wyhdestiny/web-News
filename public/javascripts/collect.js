window.addEventListener('load',function(){
	var js = window.location.href.split('?')[1];
	if(js=='fb'){
		$('.lhq-touxx').text('我的发布');
	}else if(js=='sc'){
		$('.lhq-touxx').text('我的收藏');
	}
})