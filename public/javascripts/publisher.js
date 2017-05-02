window.addEventListener('load',function(){
	
	
//返回上一级
	$(".backing").click(function(){
		location.href="lists.html?"+sessionStorage.categoryId;
	})	
	
    var punlishId = location.href.split("id")[1];
	console.log(punlishId)
	$.ajax({
			type: "get",
			url: 'http://192.168.43.4:3000/user/change',
			async: true,
			data:{
				uid:punlishId
			},
	        success: function(data) {	         
	          if(data){
	          	console.log(data)
	          	 console.log(data.data[0].username);
	          	 $(".publishImg")[0].src = 'http://192.168.43.4:3000/'+data.data[0].img+''
//	          	 $(".publishImg").attr('src','http://192.168.43.4:3000/'+data.data[0].img+'')
	          	 $(".publishName").text(data.data[0].username);	          	 
	          	 $(".publishEmail").text(data.data[0].email);
	          	 $(".publishQq").text(data.data[0].qq)
	          }else{
	          	 console.log('1');
	          }
	    }
	})
	
	
	
},false);