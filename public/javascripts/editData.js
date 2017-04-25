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
			uid: 34
		},
		success: function(data) {
			console.log(data.data)
			$('.lhq-bjimg').attr('src', data.data[0].img);
			$('.lhq-nc').val(data.data[0].username)
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
		$('.lhq-zhe').css('display', 'none');
		$('.lhq-zz').val('')
		$('.lhq-cc').val('')
		$('.lhq-mats').text('')
	})
	
	
	
		var sb_xm = true;
	//姓名验证
	var userName = /[\u4e00-\u9fa5]/;
	$(".lhq-xm")[0].addEventListener('input', function() {
		if(!userName.test($('.lhq-xm').val())) {
			$('.lhq-qrxm').css('display', 'block')
			$('.lhq-qrxm').text('输入中文姓名')
			$('.lhq-qrxm').css('color', '#FC3030');
			sb_xm = false;
		} else {
			$('.lhq-qrxm').css('display', 'block')
			$('.lhq-qrxm').text('通过！')
			$('.lhq-qrxm').css('color', 'forestgreen');
			$('.lhq-qrxm').css('text-align', 'right');
			sb_xm = true;
		}
	})
	
	
	//密码验证
	var off = true;
	var mimaRex = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/; 
	$(".lhq-zz")[0].addEventListener('input', function() {
		if(!mimaRex.test($('.lhq-zz').val())) {
			$('.lhq-mats').text('密码由6-12位字母和数字组成')
			$('.lhq-mats').css('color', '#FC3030')
			off = false;
			console.log(off)
		} else {
			$('.lhq-mats').text('密码通过')
			$('.lhq-mats').css('color', 'forestgreen')
			off = true;
			console.log(off)
		}
	})

	$('.lhq-qrlb').on('click', function() {
			var password1 = $('.lhq-zz').val();
			var password2 = $('.lhq-cc').val();
			if(password1 == '' || password2 == '') {
				alert('请输入完整密码！')
			} else {
				if(password1 != password2) {
					alert('俩次密码不相同！')
				} else if(off == false){
					alert('您没有通过密码验证！')
				}else{
					alert('密码相同！')
					$.ajax({
						type: "post",
						url: "http://192.168.43.4:3000/user/password",
						async: true,
						data: {
							uid: 34,
							password: MD5(password1)
						},
						success: function(data) {
							console.log(data)
							if(data.success == 1) {
								location.href = '../login.html'
							}else if(data.success == 3){
								alert('密码未进行任何修改！')
							}
						}
					});
				}
					
				
			}
	})


	//手机号验证
	var sb_sjh = true;
	var shoujiRex = /^1[34578]\d{9}$/;
	$(".lhq-dh")[0].addEventListener('input', function() {
		if(!shoujiRex.test($('.lhq-dh').val())) {
			$('.lhq-q1').css('display', 'block')
			$('.lhq-q2').css('display', 'none');
			sb_sjh = false;
			
		} else {
			$('.lhq-q2').css('display', 'block')
			$('.lhq-q1').css('display', 'none');
			sb_sjh = true;
		}
	})

	//邮箱验证
	var sb_yx = true;
	var youxiangRex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	$(".lhq-yx")[0].addEventListener('input', function() {
		if(!youxiangRex.test($('.lhq-yx').val())) {
			$('.lhq-q3').css('display', 'block')
			$('.lhq-q4').css('display', 'none');
			sb_yx = false;
		} else {
			$('.lhq-q4').css('display', 'block')
			$('.lhq-q3').css('display', 'none')
			sb_yx = true;
		}
	})
	
	
	//qq验证
	var sb_qq = true;
	var qqRex = /^\d{5,10}$/;
	$(".lhq-qq")[0].addEventListener('input', function() {
		if(!qqRex.test($('.lhq-qq').val())) {
			$('.lhq-q5').css('display', 'block');
			$('.lhq-q6').css('display', 'none');
			sb_qq = false;
		} else {
			$('.lhq-q6').css('display', 'block');
			$('.lhq-q5').css('display', 'none');
			sb_qq = true;
		}
	})
	
	
	//上传图片
	var img = sessionStorage.img;
	console.log(img)
	var file;
	$('.lhq-bjfile').change(function() {
		file = this.files[0];
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = function(event) {
			var result = event.target.result; //返回的dataURL  
			$('.lhq-bjimg').attr('src', result);
		}
		var formdata = new FormData();
		formdata.append('uploadedFile', file);
		$.ajax({
			type: 'post',
			url: 'http://192.168.43.4:3000/user/images',
			async: true,
			data: formdata,
			contentType: false,
			processData: false,
			success: function(e) {
				sessionStorage.img = '../images/portraits/' + e.fName;
				console.log(sessionStorage.img)
				img = sessionStorage.img;
				console.log(img)
			}
		})

	})



	//上传修改资料
	$('.lhq-button').on('click', function() {
		var nc = $('.lhq-nc').val();
		var xm = $('.lhq-xm').val();
		var dh = $('.lhq-dh').val();
		var yx = $('.lhq-yx').val();
		var qq = $('.lhq-qq').val();
		if(nc != '' && xm != '' && dh != '' && yx != '' && qq != '') {
			if(sb_xm==false){
				alert('您没有通过姓名验证！')
			}else if(sb_sjh == false){
				alert('您没有通过手机号验证！')
			}else if(sb_yx == false){
				alert('您没有通过邮箱验证！')
			}else if(sb_qq == false){
				alert('您没有通过qq验证！')
			}else{
				$.ajax({
				type: "post",
				url: 'http://192.168.43.4:3000/user/change',
				async: true,
				data: {
					uid: 34,
					username: nc,
					name: xm,
					tel: dh,
					email: yx,
					qq: qq,
					images: img
				},
				success: function(data) {
					if(data.success == 1) {
						alert("修改成功！")
					} else if(data.err) {
						alert("修改失败！")
					} else if(data.success == 3) {
						alert('未进行任何修改！')
					}

					}
				})
			}
			

		} else {
			alert('请输入完整内容！')
		}

	})

})