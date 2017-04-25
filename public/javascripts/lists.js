window.addEventListener('load',function(){
//var oDiv = document.getElementsByClassName('zhj_auto')[0];
//var oUl = oDiv.getElementsByTagName('sMove')[0];
//var Oli=oDiv.getElementsByTagName('li');
//var oLeft = document.getElementsByClassName('btnLeft')[0];
//var oRight = document.getElementsByClassName('btnRight')[0];
//var num =0;
//var num2=0;
//var timer=nsMovel;
//oLeft.addEventListener('touchstart',function(){
//	console.log(1)
//	clearInterval(timer);
//	num--;
//	if(num<1){
//		num=0;
//	}
//	oUl.style.left=num*-15.5+'rem';
//	timer = setInterval(dong,2000)
//})
//oRight.addEventListener('touchstart',function(){
//	clearInterval(timer);
//	console.log(1)
////	num++;
////	if(num>2){
////		num=2;
////	}
////	oUl.style.left=num*-15.5+'rem';
//  dong()
//	timer = setInterval(dong,2000)
//})
//
// function dong(){
//     	num++;
////	if(num>2){
////		num=0;
////	}	
//	oUl.style.transition = 1+'s';
//	oUl.style.left=num*-15.5+'rem';
//	
//     	if(num > 3){
//     		console.log(num)
//     		oUl.style.transition = 0+'s';
//     		oUl.style.left = 0;
//     		num = 0
//     	}
// }
// timer = setInterval(dong,2000)
	
	
//	var oldX = newX = lastX = 0;
//	var index = 0;
//	var allLi = sMove.children;
//	var timerIndex = 0;
////	alert(allLi.length)
//	auto.addEventListener('touchstart',function(e){
////	  alert(1)
//	newX = 0;
//	if(index == allLi.length-1){
//			sMove.appendChild(sMove.children[0]);
//			index--;
//			allLi[index].style.transition = '0s';
//			allLi[index+1].style.transition = '0s'
//			allLi[index].style.transform = 'translateX('+(-index*innerWidth)+'px)';
//
//			console.log(index)
//			allLi[index+1].style.transform = 'translateX('+((-index-2)*innerWidth)+'px)';
//		}
//	 if(index == 0){
//
//			sMove.insertBefore(sMove.children[sMove.children.length-1],sMove.children[0])
//			index++;
//			
//			allLi[index-1].style.transform = 'translateX('+(-innerWidth)+'px)';
//			allLi[index].style.transform = 'translateX('+(-innerWidth)+'px)';
//		}
//	 
//	allLi[index-1] && (allLi[index-1].style.transition = '0s');
//		allLi[index].style.transition = '0s';
//		allLi[index+1] && (allLi[index+1].style.transition = '0s');
//		oldX = e.touches[0].clientX;
//	
//},false);
//	
//	
//	auto.addEventListener('touchmove',function(e){
//		newX = e.touches[0].clientX - oldX;
//
//
//		allLi[index-1] && (allLi[index-1].style.transform = 'translateX('+((-index*innerWidth)+newX)+'px)');
//		allLi[index].style.transform = 'translateX('+((-index*innerWidth)+newX)+'px)';
//		allLi[index+1] && (allLi[index+1].style.transform = 'translateX('+((-index*innerWidth)+newX)+'px)');		
//	},false);
//	
//	auto.addEventListener('touchend',function(){		
//		if(newX%innerWidth<0 && newX%innerWidth >=-60){
//
//			allLi[index].style.transition = '0.3s'
//			allLi[index+1] && (allLi[index+1].style.transition = '0.3s');
//
//
//			allLi[index].style.transform = 'translateX('+(((-index+1)*innerWidth)+(-innerWidth))+'px)';
//			allLi[index+1].style.transform = 'translateX('+(((-index+1)*innerWidth)+(-innerWidth))+'px)';
//		}
//		else if(newX%innerWidth < -60){
//
//			allLi[index].style.transition = '0.3s';
//			allLi[index+1] && (allLi[index+1].style.transition = '0.3s');
//			allLi[index].style.transform = 'translateX('+((-index*innerWidth)+(-innerWidth))+'px)';
//			allLi[index+1] && (allLi[index+1].style.transform = 'translateX('+((-index*innerWidth)+(-innerWidth))+'px)');
//			index++;
//		}
//		else if(newX%innerWidth > 0 && newX%innerWidth <= 60){
//			console.log(index)
//			allLi[index].style.transition = '0.3s';
//			allLi[index-1].style.transition = '0.3s';
//			allLi[index].style.transform = 'translateX('+(((-index+1)*innerWidth)+(-innerWidth))+'px)';
//			allLi[index-1].style.transform = 'translateX('+(((-index+1)*innerWidth)+(-innerWidth))+'px)';
//		}
//		else if(newX%innerWidth > 60){
//			
//			allLi[index].style.transition = '0.3s';
//			allLi[index-1] && (allLi[index-1].style.transition = '0.3s');
//
//			allLi[index].style.transform = 'translateX('+(((-index+1)*innerWidth))+'px)';
//			allLi[index-1].style.transform = 'translateX('+(((-index+1)*innerWidth))+'px)';
//			index--
//		}
//	},false);
//	
//	move();
//	function move(){
//		timer = setInterval(function (){
//			timerIndex++;
//			if(timerIndex == sMove.children.length) timerIndex = 0;
//
//			console.log(timerIndex);
//			newX = 0;
//			//console.log(index)
//			if(index == allLi.length-1){
//				//alert(1);
//				sMove.appendChild(sMove.children[0]);
//				index--;
//				allLi[index].style.transition = '0s';
//				allLi[index+1].style.transition = '0s'
//				//console.log(index)
//				allLi[index].style.transform = 'translateX('+(-index*innerWidth)+'px)';
//
//				
//				allLi[index+1].style.transform = 'translateX('+((-index-2)*innerWidth)+'px)';
//			}
//			if(index == 0){
//
//				sMove.insertBefore(sMove.children[sMove.children.length-1],sMove.children[0])
//				//index--;
//				index++;
//				
//				allLi[index-1].style.transform = 'translateX('+(-innerWidth)+'px)';
//				allLi[index].style.transform = 'translateX('+(-innerWidth)+'px)';
//		
//			}
//
//			allLi[index-1] && (allLi[index-1].style.transition = '0s');
//			allLi[index].style.transition = '0s';
//			allLi[index+1] && (allLi[index+1].style.transition = '0s');
//
//			/*startend*/
//
//			/*
//				index = 0
//				0 0 0 0
//				index = 1
//				-375 
//				index = 2
//				-750
//			*/
//
//
//			allLi[index+1] && (allLi[index+1].style.transform='translateX('+(-index*innerWidth)+'px)');
//
//			/*end*/
//			setTimeout(function(){
//				allLi[index].style.transition = '1s';
//				allLi[index+1] && (allLi[index+1].style.transition = '1s');
//				allLi[index].style.transform = 'translateX('+((-index*innerWidth)+(-innerWidth))+'px)';
//				allLi[index+1] && (allLi[index+1].style.transform = 'translateX('+((-index*innerWidth)+(-innerWidth))+'px)');
//				index++;
//			},1);
//			
//		},3000);
//	}
//	
//	sMove.onclick = function(){
//		clearInterval(timer);
//	};
//	
    var i=0;
    
	function auto(){
				i++;
				if(i>3)
				i=0;
				$('#auto ul li').eq(i).fadeIn(300).siblings().fadeOut(300);
			}
			setInterval(auto,3000);
	
	
	
	
	
	
	
	
	
	
	
//返回上一级
	$(".zhj_head_left").click(function(){
		location.href="firstPage.html";
	})	
	
//点击搜索
	$(".zhj_headRigh").click(function(){
		location.href="search.html";
	})		
//点击发布人
	$(".zhj_fbr").click(function(){
		location.href="publisher.html";
	})	
	
	var id =  location.href.split('?')[1];
	$.ajax({
			type: "get",
			url: 'http://192.168.43.4:3000/newlist/list',
			async: true,
			data:{
				category:id
			},
	        success: function(data) {	        	
	        	arr = data.list;
	        	console.log(arr)
	        	if(data.list[0].category == 1){
//	        		console.log(data)
	        		$(".zhj_headerCet").text('HTML')
	        	}else if(data.list[0].category == 2){
	        		$(".zhj_headerCet").text('CSS')
	        	}else if(data.list[0].category == 3){
	        		$(".zhj_headerCet").text('JS')
	        	}else if(data.list[0].category == 4){
	        		$(".zhj_headerCet").text('Jquery')
	        	}else if(data.list[0].category == 5){
	        		$(".zhj_headerCet").text('Angular')
	        	}else if(data.list[0].category == 6){
	        		$(".zhj_headerCet").text('Node/Php')
	        	}else if(data.list[0].category == 7){
	        		$(".zhj_headerCet").text('Others')
	        	}
	        	
	        if(data.list.length > 0){
	        	       
	Fnlist(start) 		        		        	
	          }	
	          
	    $.ajax({
			type: "get",
			url: 'http://192.168.43.4:3000/user/change',
			async: true,
	        success: function(data) {
	          console.log(data)
	          
	         }
	          
	     })     
	          
	          
	          
	          
	        }
	
	   })
	
	
	
	var start=0;
	window.addEventListener('scroll',function(){
        
		if($(document).scrollTop() == ($(document).height()-jQuery(window).height())){
			console.log(1)
//          $('.zhj_contents').empty();
            console.log(arr)
            start += 5;
            html = '';
            if(start<arr.length){
            	Fnlist(start);
            }
			
		}
		
	},false);
	
	
	
	
	
	
	
	
	
	var html='';
	console.log(id)
	 function Fnlist(start){
	 	
	 	
	 	
	 	
	 	
		for(var i=start;i<(5+start);i++){
			if(i == arr.length){
				break;
			}else {
				console.log(i)
				console.log(arr[i])
				html+='<div class="zhj_biaoti"><a href="details.html?id'+arr[i].newid+'"><h3>'+arr[i].title+'</h3><div class="zhj_text">'+arr[i].content+'</div><div class="zhj_btn"><div class="zhj_fbr"><span>发布人：</span><span>阿曾</span></div><div class="zhj_xie">/</div><div class="upName"><span>发布时间：</span><span>'+arr[i].time+'</span></div></div></a></div>';
			}
	   }
	    $(".zhj_conttens").append(html)	
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
},false);