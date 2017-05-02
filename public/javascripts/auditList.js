window.addEventListener('load',function(){
	var html= '';
	$.ajax({
			type: "get",
			url: 'http://192.168.43.4:3000/newlist/audit',
			async: true,
	        success: function(data) {
	         console.log(data.data.length)
	         sessionStorage.auditLenght=data.data.length
//	         console.log(sessionStorage.auditLenght)
//	         if(data.data[i].category == 1){
//	         	
//	         }
	         for(var i=0;i<data.data.length;i++){
	         	 html+='<a href="javascript:;"><p><i>'+data.data[i].title+'</i></p><p><i>'+data.data[i].content+'</i></p><p><span>类型：</span><i>css</i><span>发布时间</span><span>'+data.data[i].time+'</span></p>'
	         }
	        
	         $(".lhq-list").append(html)
	         console.log(data.data[0].category);
	     }
	})
},false);