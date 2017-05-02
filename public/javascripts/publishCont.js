window.addEventListener('load', function() {
	$('.lhq-lx').on('click', function() {
		$('.lhq-zhezhao').css('display', 'block')
		$('.lhq-zhezhao-box').addClass('active')
	})

	var lhqnum = '';
	$('.lhq-zhezhao-box').delegate('p', 'click', function() {
		lhqnum = $(this).text();
		$(this).css('color', '#000000').siblings().css('color', '#000000');
		$(this).css('font-size', '0.9rem').siblings().css('font-size', '0.7rem');
	})
	$('.lhqxuan').on('click', function() {
		$('.lhq-zhezhao').css('display', 'none')
		$('.lhq-zhezhao-box').removeClass('active')
		$('.lhq-Dj').text(lhqnum)
	})

	//返回上一级
	$(".backing_th").click(function() {
		location.href = "firstPage.html";
	})

	//发布成功
	//	$(".lhq-fb").click(function(){
	//		location.href="firstPage.html";
	//	})
	//	

	//点击发布
	$('.lhq-fb').on('click', function() {
		var lx = $('.lhq-Dj').text();
		var bt = $('.lhq-btt').val();
		var nr = $('.lhq-zww').val();
		if(lx == '' || bt == '' || nr == '') {
			alert('请输入完整内容！')
		} else {
			if(lx == 'Html') {
				lx = '1'
			} else if(lx == 'Angular') {
				lx = 5
			} else if(lx == 'Jquery') {
				lx = 4
			} else if(lx == 'Css') {
				lx = 2
			} else if(lx == 'Node/Php') {
				lx = 6
			} else if(lx == 'Js') {
				lx = 3
			} else if(lx == '其它') {
				lx = 7
			}

			function show() {
				var mydate = new Date();
				var str = "" + mydate.getFullYear() + "/";
				str += (mydate.getMonth() + 1) + "/";
				str += mydate.getDate() + "/";
				str +=mydate.getHours() +":";
				str +=mydate.getMinutes()
				return str;
			}
			var lhqtime = show()
			console.log(lhqtime)
						$.ajax({
							type: "post",
							url: 'http://192.168.43.4:3000/user/publish',
							async: true,
							data: {
								category:lx,
								title:bt,
								content:nr,
								time:lhqtime,
								personid:sessionStorage.uid
							},
							success: function(data) {
								console.log(data)
								if(data.success==1){
									alert('发布成功！')
									$('.lhq-Dj').text('');
									$('.lhq-btt').val('');
									$('.lhq-zww').val('');
								}
							}
						})
		}

	})
})