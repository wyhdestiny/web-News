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
//	$(".lhq-fb").click(function(){
//		location.href="firstPage.html";
//	})
//	
	
	//点击发布
	$('.lhq-fb').on('click',function(){
		var lx = $('.lhq-Dj').text();
		var bt = $('.lhq-btt').val();
		var nr = $('.lhq-zww').val();
		if(lx == ''|| bt == ''||nr == ''){
			alert('请输入完整内容！')
		}else{
			$.ajax({
				type: "post",
				url: 'http://192.168.43.4:3000/user/publish',
				async: true,
				data: {
					
				},
				success: function(data) {
					

					}
				})
		}
	})
//	
//	category:分类(1为html；2为css；3为原生js；4为jquery；5为angular；6为node/php；7为其他)
//		title：发布信息的标题
//		content：发布的内容
//		time：发布时间
//		personid：发布人的uid
//	
//	
	
	
	
	
	
	
	
	
})
