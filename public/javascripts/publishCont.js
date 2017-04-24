window.addEventListener('load',function(){
	$('.lhq-lx').on('click',function(){
		$('.lhq-zhezhao').css('display','block')
		$('.lhq-zhezhao-box').addClass('active')
	})
	
	var lhqnum = '';
	$('.lhq-zhezhao-box').delegate('p','click',function(){
		lhqnum = $(this).text();
		$(this).css('color','#000000').siblings().css('color','#ffffff');
		$(this).css('font-size','0.9rem').siblings().css('font-size','0.7rem');
	})
	$('.lhqxuan').on('click',function(){
		$('.lhq-zhezhao').css('display','none')
		$('.lhq-zhezhao-box').removeClass('active')
		$('.lhq-Dj').text(lhqnum)
	})
	
	
//返回上一级
	$(".backing_th").click(function(){
		location.href="firstPage.html";
	})
	
	
//发布成功
	$(".lhq-fb").click(function(){
		location.href="firstPage.html";
	})
})