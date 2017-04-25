window.addEventListener('load',function(){
	$.ajax({
			type: "get",
			url: 'http://192.168.43.4:3000/newlist/audit',
			async: true,
	        success: function(data) {
	         console.log(data)
	     }
	})
},false);