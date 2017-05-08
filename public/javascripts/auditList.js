window.addEventListener('load',function(){
	var html= '';
	var lhqarr;
	$.ajax({
			type: "get",
			url: 'http://192.168.43.4:3000/newlist/audit',
			async: true,
	        success: function(data){
	         console.log(data.data)
			lhqarr = data.data;
	         for(var i=0;i<data.data.length;i++){
	         	if(data.data[i].category == '1') {
				lll = 'Html'
			} else if(data.data[i].category == '5') {
				lll = 'Angular'
			} else if(data.data[i].category == '4') {
				lll = 'Jquery'
			} else if(data.data[i].category == '2') {
				lll = 'Css'
			} else if(data.data[i].category =='6') {
				lll = 'Node/Php'
			} else if(data.data[i].category =='3' ) {
				lll = 'Js'
			} else if(data.data[i].category == '7') {
				lll = '其它'
			}
	         	  		html+='<a href="auditCont.html?'+data.data[i].newid+'"><p><i>'+data.data[i].title+'</i></p><p><i>'+data.data[i].content+'</i></p><p><span>类型：</span><i>'+lll+'</i><span>时间</span><span>'+data.data[i].time+'</span></p>'
	   
	        
	     }
	         	
	         $(".lhq-list").append(html)
	         console.log(data.data[0].category);
	   }
	})
	

      	 

},false);