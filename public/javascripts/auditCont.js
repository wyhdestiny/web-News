window.addEventListener("load",function(){
	
	var html='';
	var str=location.href.split("?")[1];
		$.ajax({
			type:"post",
			url:"http://192.168.43.4:3000/newlist/clicks",
			async:true,
			data:{
				newid:str
			},
			success:function(e){
				console.log(e);
				$.ajax({
					type:"get",
					url:"http://192.168.43.4:3000/user/change",
					async:true,
					data:{
						uid:e.data[0].personid
					},
					success:function(data){
						console.log(data);
						html='<div class="txt_tit">'+e.data[0].title+'</div><div class="yu_autor">文&nbsp;/&nbsp;'+data.data[0].username+'</div><div class="yu_cont" > '+e.data[0].content+'</div>';
						$(".yu_debody").append(html);
						$(".yu_time").html(e.data[0].time);
					}
				});
				
			}
		})
	
	
	
	
//审核通过
	$("#yesPass").click(function(){
		tankuang();
		$(".txt_yu").html("亲，确定审核通过？")
		$(".zhj_button").click(function(){
			$('.shower').css('opacity','1');
			$('.shdon').css('display','none');
			$('.shower').css('transition','all 0.6s');
			$('.shower').css('transform','translateY(200%)');
			$('.shower').css('background','rgba(0,0,0,0.8)');
			$('.shower').css('color','white');
			$('.shower i').css('color','white');
			$('.shower').css('opacity','0');
			$('.shower').css('top','0');
			$.ajax({
				type:"post",
				url:"http://192.168.43.4:3000/newlist/audit",
				async:true,
				data:{
					newid: str,
					audit:1				
				},
				success:function(e){
					console.log(e);
				}
			})
		})
	})
//审核不通过
	$("#noPass").click(function(){
		tankuang();
		$(".txt_yu").html("确定审核不通过？")
		$(".zhj_button").click(function(){
			$('.shower').css('opacity','1');
			$('.shdon').css('display','none');
			$('.shower').css('transition','all 0.6s');
			$('.shower').css('transform','translateY(200%)');
			$('.shower').css('background','rgba(0,0,0,0.8)');
			$('.shower').css('color','white');
			$('.shower i').css('color','white');
			$('.shower').css('opacity','0');
			$('.shower').css('top','0');
			$.ajax({
				type:"post",
				url:"http://192.168.43.4:3000/newlist/audit",
				async:true,
				data:{
					newid: str,
					audit:2				
				},
				success:function(e){
					console.log(e);
				}
			})
		})
	})

	quxiao()
//弹框出来
	function tankuang(){
		$('.shdon').css('display','block');
		$('.shdon').css('opacity','1');
		$('.shower').css('opacity','1');
		$('.shower').css('display','block');
		$('.shower').css('transition','all 0.6s');
		$('.shower').css('transform','translateY(100%)');
		$('.shower').css('background','rgba(255,255,255,1)');
		$('.shower').css('color','black');
		$('.shower i').css('color','black');
		$('.shower').css('opacity','0.8');
	}

//弹框点击取消	
	function quxiao(){
		$(".shower i").click(function(){
			$('.shdon').css('opacity','1');
			$('.shdon').css('display','none');
			$('.shower').css('opacity','1');
			$('.shower').css('transition','all 0.6s');
			$('.shower').css('transform','translateY(200%)');
			$('.shower').css('background','rgba(0,0,0,0.8)');
			$('.shower').css('color','white');
			$('.shower i').css('color','white');
			$('.shower').css('opacity','0');
			$('.shower').css('top','0');
		})	
	}
	
	
//返回上一级
	$(".yh_defh").click(function(){
		location.href="auditList.html";
	})
})