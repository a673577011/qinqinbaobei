;$(function(){
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$('.zhuijia').fadeIn();
			
		}else{
			$('.zhuijia').fadeOut();
		};
	});		
	var i = 0;
	var a = 0;
			$('.gundong').find('li').find('a').css('color','#666');
			$('.gundong').find('li').find('div').css('backgroundColor','#2997b7');
			$('.gundong').find('li').eq(0).find('a').css('color','#fff');
			$('.gundong').find('li').eq(0).find('div').css('backgroundColor','#fff');
	setInterval(function(){
		if(a<5){
			a++;	
		}else{
			a=0;
		};
		if(a == 0){
			$('.gundong').find('li').find('a').css('color','#666');
			$('.gundong').find('li').find('div').css('backgroundColor','#2997b7');
			$('.gundong').find('li').eq(0).find('a').css('color','#fff');
			$('.gundong').find('li').eq(0).find('div').css('backgroundColor','#fff');
		}else if(a ==1){
			$('.gundong').find('li').find('a').css('color','#666');
			$('.gundong').find('li').find('div').css('backgroundColor','#2997b7');
			$('.gundong').find('li').eq(1).find('a').css('color','#fff');
			$('.gundong').find('li').eq(1).find('div').css('backgroundColor','#fff');
		}else if(a ==2){
			$('.gundong').find('li').find('a').css('color','#666');
			$('.gundong').find('li').find('div').css('backgroundColor','#2997b7');
			$('.gundong').find('li').eq(2).find('a').css('color','#fff');
			$('.gundong').find('li').eq(2).find('div').css('backgroundColor','#fff');
		}else if(a ==3){
			$('.gundong').find('li').find('a').css('color','#666');
			$('.gundong').find('li').find('div').css('backgroundColor','#2997b7');
			$('.gundong').find('li').eq(3).find('a').css('color','#fff');
			$('.gundong').find('li').eq(3).find('div').css('backgroundColor','#fff');
		}else if(a ==4){
			$('.gundong').find('li').find('a').css('color','#666');
			$('.gundong').find('li').find('div').css('backgroundColor','#2997b7');
			$('.gundong').find('li').eq(4).find('a').css('color','#fff');
			$('.gundong').find('li').eq(4).find('div').css('backgroundColor','#fff');
		}else if(a ==5){
			$('.gundong').find('li').find('a').css('color','#666');
			$('.gundong').find('li').find('div').css('backgroundColor','#2997b7');
			$('.gundong').find('li').eq(5).find('a').css('color','#fff');
			$('.gundong').find('li').eq(5).find('div').css('backgroundColor','#fff');
		}else{
			$('.gundong').find('li').find('a').css('color','#666');
			$('.gundong').find('li').find('div').css('backgroundColor','#2997b7');
			$('.gundong').find('li').eq(6).find('a').css('color','#fff');
			$('.gundong').find('li').eq(6).find('div').css('backgroundColor','#fff');
		};
		if(i>=-948){
			i = i-237;
			$('.look ul').animate({
						left:i			
			});
		}else{
			i=0;
			$('.look ul').animate({
						left:0			
			});
		}	
	},1000);
	
	var b = 0;
	var timer = setInterval(function(){
		b = b-1;
		$('.fanga').animate({left:b},10);
		
		
		if(b<-530){
			b=0;
		}
	},10);
	
	$('#qutop').on('click',function(){
		$(window).scrollTop(0);
		
		
	});
	
	
});







	
			

