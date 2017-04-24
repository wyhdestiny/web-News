window.addEventListener('load', function() {

	$('.lhq-bjimg').on('click', function() {
		$(".lhq-bjfile").click();
	})
	//返回上一级	
	$(".backing_t").click(function() {
		location.href = "personMsg.html"
	})

	$.ajax({
		type: "get",
		url: "http://192.168.43.4:3000/user/change",
		async: true,
		data: {
			uid: 1
		},
		success: function(data) {
			console.log(data.data)
			$('.lhq-bjimg').attr('src', data.data[0].img);
			$('.lhq-n').val(data.data[0].username)
			$('.lhq-xm').val(data.data[0].name)
			$('.lhq-dh').val(data.data[0].tel)
			$('.lhq-yx').val(data.data[0].email)
			$('.lhq-qq').val(data.data[0].qq)
		}
	});

	$('.lhq-djxg').on('click', function() {
		$('.lhq-zhe').css('display', 'block');
	})

	$('.lhq-qxlb').on('click', function() {
		$('.lhq-zhe').css('display', 'none')
	})
	$('.lhq-qrlb').on('click', function() {
		var password1 = $('.lhq-zz').val();
		var password2 = $('.lhq-cc').val();
		if(password1 == '' || password2 == '') {
			alert('请输入完整密码！')
		} else {
			if(password1 != password2) {
				alert('俩次密码不相同！')
			} else {
				alert('密码相同！')
				$.ajax({
					type: "post",
					url: "http://192.168.43.4:3000/user/password",
					async: true,
					data: {
						uid:1,
						password:MD5(password1)
					},
					success: function(data) {
						if(data.success==1){
							location.href='../login.html'
						}
					}
				});
			}
		}
	})
})