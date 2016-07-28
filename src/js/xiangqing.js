;$(function(){
	/*$('.diyige').on('click',function(){
		if($('.diyige i').css('display') == 'none'){
			$('.diyige').css('borderColor','#73dff4');
			$('.diyige i').css('display','block');
			$('.dierge').css('borderColor','#aeaeae');
			$('.dierge i').css('display','none');
		}else{
			$('.diyige').css('borderColor','#aeaeae');
			$('.diyige i').css('display','none');
		}
		
	});
	$('.dierge').on('click',function(){
		if($('.dierge i').css('display') == 'none'){
			$('.dierge').css('borderColor','#73dff4');
			$('.dierge i').css('display','block');
			$('.diyige').css('borderColor','#aeaeae');
			$('.diyige i').css('display','none');
			
		}else{
			$('.dierge').css('borderColor','#aeaeae');
			$('.dierge i').css('display','none');
		}
	});*/
	//型号选择并记录
	$('.dangqian').on('click',function(){
		$('#small-box').find('img').attr('src','../css/img/146907761499210_372x372.jpg');
		$('#big-box').find('img').attr('src','../css/img/146907761499210.jpg');
	});
	$('.lingwai').on('click',function(){
		$('#small-box').find('img').attr('src','../css/img/146907761274930_372x372.jpg');
		$('#big-box').find('img').attr('src','../css/img/146907761274930.jpg');
	});
	
	
	
	
	$('.xinghaoxz').on('click','span',function(){
		$('.xinghaoxz span').removeClass('guanghuan');
		$('.xinghaoxz span i').removeClass('kaiguan');
		$(this).toggleClass('guanghuan');
		$(this).find('i').toggleClass('kaiguan');
	})
	
	//数量减
	$('.sllow').on('click',function(){
		var i = $('.jsl').text();
		i = parseInt(i);
		if(i !== 0){
			i = i-1;
		}else{
			i = 0;
		};
		$('.jsl').text(i);
		
		i = i*43.00;
		$('.zongj i').text(i+'.00');
		
	})
	//数量加
	$('.sladd').on('click',function(){
		var i = $('.jsl').text();
		
		i = parseInt(i);
		i=i+1;
		$('.jsl').text(i);
		i = i*43.00;
		$('.zongj i').text(i+'.00');
	});		
		
	//楼梯效果	
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 824){
			$('.xqbt').css({position:'fixed',
								top:0});
			
		}else{
			$('.xqbt').removeAttr('style');
		}
		
		if(scrollTop < 1021){
			$('.xqbt').find('li').css({background:'#eaeaea',color:'#666'});
			$('.xqbt').find('li').eq(0).css({background:'#71d9ed',color:'#fff'});	
		}else if(scrollTop > 1021 && scrollTop < 1270){
			$('.xqbt').find('li').css({background:'#eaeaea',color:'#666'});
			$('.xqbt').find('li').eq(1).css({background:'#71d9ed',color:'#fff'});
		}else if(scrollTop > 1270 && scrollTop < 1567){
			$('.xqbt').find('li').css({background:'#eaeaea',color:'#666'});
			$('.xqbt').find('li').eq(2).css({background:'#71d9ed',color:'#fff'});
		}else if(scrollTop > 1567 && scrollTop < 13871){
			$('.xqbt').find('li').css({background:'#eaeaea',color:'#666'});
			$('.xqbt').find('li').eq(3).css({background:'#71d9ed',color:'#fff'});
		}else if(scrollTop > 13871 && scrollTop < 13962){
			$('.xqbt').find('li').css({background:'#eaeaea',color:'#666'});
			$('.xqbt').find('li').eq(4).css({background:'#71d9ed',color:'#fff'});
		}else if(scrollTop > 13962 && scrollTop < 14056){
			$('.xqbt').find('li').css({background:'#eaeaea',color:'#666'});
			$('.xqbt').find('li').eq(5).css({background:'#71d9ed',color:'#fff'});
		}else if(scrollTop > 14056){
			$('.xqbt').find('li').css({background:'#eaeaea',color:'#666'});
			$('.xqbt').find('li').eq(6).css({background:'#71d9ed',color:'#fff'});
		}
	});
	//电梯效果
	$('.xqbt').on('click','li',function(){
		$('.xqbt').find('li').css({background:'#eaeaea',color:'#666'});
		$(this).css({background:'#71d9ed',color:'#fff'});
		var index = $(this).index();
		var $floor = $('.xq > div');
		var top;
			index = index+1;
			top = $floor.eq(index).offset().top - 50;
	
		$(window).scrollTop(top);
	});

	//购买记录到cookie
	$('.buy input').on('click',function(){
		var $name = $('.mrbt h1').text();
		var $sl = $('.jsl').text();
		var $zj = $('.zongj i').text();
		var $xh = $('.guanghuan').text();
		
		var obj = {};
		obj.name = $name;
		obj.sl = $sl;
		obj.zj = $zj;
		obj.xh = $xh;
		
		var _cookie = 'good=' + JSON.stringify(obj);
		console.log(_cookie);
		
		document.cookie = _cookie + ';path=/';
	});		
});
