window.addEventListener("load", function() {

	//点击编辑，按钮
	$(".edit_yu").click(function() {
		location.href = "editData.html"
	})
	//返回上一级	
	$(".backing").click(function() {
		location.href = "firstPage.html"
	})

	//退出登录
	$(".lhq-button").click(function() {
		location.href = "../login.html"
		sessionStorage.setItem("password", '');
		sessionStorage.setItem("username", '');
		sessionStorage.setItem("level", '');
		sessionStorage.setItem("uid", '');
		sessionStorage.setItem("img", '');
	})

	//获取个人信息
	var lhqarr = [];
	var lhqarr2 = [];
	var lhqarr3 = [];
	var lhqarr4 = [];
	var lhqarr5 = [];
	$.ajax({
		type: "get",
		url: "http://192.168.43.4:3000/user/change",
		async: true,
		data: {
			uid: sessionStorage.uid
		},
		success: function(data) {
			console.log(data)
			sessionStorage.img = data.data[0].img;
			$('.lhq-touxiang').attr('src', "http://192.168.43.4:3000/" + data.data[0].img);
			$('.lhq-nc').text(data.data[0].username);

			var lhqsss = data.data[0].releases;
			console.log(lhqsss)
			if(lhqsss == null) {
					$('.yu_fang').attr('href', 'javascript:;')
				} else {
					lhqarr = lhqsss.split('-');
					sessionStorage.arrfb = lhqarr2;
				}

			for(var i = 0; i < lhqarr.length; i++) {
				if(lhqarr[i] != 'null') {
					lhqarr2.push(lhqarr[i])
				}
			}

			$('.lhqff').text(lhqarr2.length)

			var lhqqq = data.data[0].collect;
			console.log(lhqqq)

				if(lhqqq == null) {
					$('.yu_shou').attr('href', 'javascript:;')
				} else {
					lhqarr3 = lhqqq.split('-')
					sessionStorage.arrsc = lhqarr5;
				}


			Array.prototype.unique = function() {
				this.sort();
				var res = [this[0]];
				for(var i = 1; i < this.length; i++) {
					if(this[i] !== res[res.length - 1]) {
						res.push(this[i]);
					}
				}
				return res;
			}
			lhqarr4.push(lhqarr3.unique())
			console.log(lhqarr4)
			for(var i = 0; i < lhqarr4[0].length; i++) {
				if(lhqarr4[0][i] != null && lhqarr4[0][i] != '') {
					lhqarr5.push(lhqarr4[0][i])
				}
			}
			$('.lhqpig').text(lhqarr5.length);

		}
	});

	var lhqsb = sessionStorage.level;
	console.log(lhqsb)

	if(lhqsb == 0) {
		$('.lhqdsh').css('display', 'none')
	}
	
		$.ajax({
			type: "get",
			url: 'http://192.168.43.4:3000/newlist/audit',
			async: true,
	        success: function(data){
	         console.log(data)
       		$('.lhqdai').text(data.data.length)
	     	}
		})
	

})