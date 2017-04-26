window.addEventListener("load",function(){
		
//点击编辑，按钮
	$(".edit_yu").click(function(){
		location.href="editData.html"
	})
//返回上一级	
	$(".backing").click(function(){
		location.href="firstPage.html"
	})

//退出登录
	$(".lhq-button").click(function(){
		location.href="../login.html"
	})


//获取个人信息
var lhqarr=[];
var lhqarr2 = [];
	$.ajax({
		type:"get",
		url:"http://192.168.43.4:3000/user/change",
		async:true,
		data:{
			uid:sessionStorage.uid
		},
		success:function(data){
			sessionStorage.img=data.data[0].img;
			console.log(sessionStorage.img)
			$('.lhq-touxiang').attr('src',data.data[0].img);
			$('.lhq-nc').text(data.data[0].username);
			
			var lhqsss = data.data[0].releases;
			lhqarr=lhqsss.split('-');
			for(var i = 0; i<lhqarr.length;i++){
				if(lhqarr[i]!='null'){
					lhqarr2.push(lhqarr[i])
				}
			}
			$('.lhqff').text(lhqarr2.length)
		}
	});
	
	

	var lhqsb = sessionStorage.level;
	console.log(lhqsb)
	
	if(lhqsb==0){
		$('.lhqdsh').css('display','none')
	}
	
	
})