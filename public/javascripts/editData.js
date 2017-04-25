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
			uid:34
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
						uid:34,
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
	
	
	 var shoujiRex=/^1[34578]\d{9}$/;
	$(".lhq-dh")[0].addEventListener('input',function(){
		if(!shoujiRex.test($('.lhq-dh').val())){
			$('.lhq-q1').css('display','block')
			$('.lhq-q2').css('display','none')
		}else{
			$('.lhq-q2').css('display','block')
			$('.lhq-q1').css('display','none')
		}
	})
	
	
	 var youxiangRex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	$(".lhq-yx")[0].addEventListener('input',function(){
		if(!youxiangRex.test($('.lhq-yx').val())){
			$('.lhq-q3').css('display','block')
			$('.lhq-q4').css('display','none')
		}else{
			$('.lhq-q4').css('display','block')
			$('.lhq-q3').css('display','none')
		}
	})
	
	
	  var qqRex=/^\d{5,10}$/;
	$(".lhq-qq")[0].addEventListener('input',function(){
		if(!qqRex.test($('.lhq-qq').val())){
			$('.lhq-q5').css('display','block')
			$('.lhq-q6').css('display','none')
		}else{
			$('.lhq-q6').css('display','block')
			$('.lhq-q5').css('display','none')
		}
	})
	

		$('.lhq-bjfile').change(function() {
				file = this.files[0];
				console.log(file)
		})
		
		$('.lhq-button').on('click',function(){
			
			var formdata  = new FormData();
			formdata.append('uploadedFile',file);
			
			var nc = $('.lhq-nc').val();
			var xm = $('.lhq-xm').val();
			var dh = $('.lhq-dh').val();
			var yx = $('.lhq-yx').val();
			var qq = $('.lhq-qq').val();
		    if(nc!=''||xm!=''||dh!=''||yx!=''||qq!=''){
		    	$.ajax({
					type: 'post',
					url: 'http://192.168.43.4:3000/user/images',
					async: true,
					data: formdata,
					contentType: false,
					processData: false,
					success: function(e) {
						var img = '../images/portraits/'+e.fName;
						console.log(img)
						$.ajax({
							type: "post",
							url: 'http://192.168.43.4:3000/user/change',
							async: true,
							data: {
								uid:34,
								username:nc,
								name:xm,
								tel:dh,
								email:yx,
								qq:qq,
								images:img
							},
							success: function(data) {
								console.log(data)
							}
						})
					}
				})
		    }else{
		    	console.log(111111)
		    }
	

	})
	
})