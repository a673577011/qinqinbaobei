;$(function(){
			var $focus = $('.bannerlb');
            var $bigpic = $('#beijing');
            var $smallpic = $('#qiehuan');
            var index = 0;
            // 图片数量
            var len = $bigpic.find('li').length;
            // 初始化
            show();
            // 设置定时器，3秒切换一张图片
            var timer;;
            // 鼠标移入清除定时器，鼠标移出重启定时器
            $focus.on('mouseenter',function(){
                clearInterval(timer);
            }).on('mouseleave',function(){
                timer = setInterval(carousel,3000);
            }).trigger('mouseleave')
            // 点击前后按钮实现切换
            .on('click','.prev',function(){
                index--;
                show();
            }).on('click','.next',function(){
                index++;
                show();
            });
            // 点击小图切换
            $smallpic.on('mouseenter','li',function(){
                index = $(this).index();
                show();
            });
            // 轮播函数
            function carousel(){
                index++;
                show();
            }
            // 显示图片的函数
            function show(){
                // 处理index值，使其实现循环轮播
                if(index<0){
                    index = len - 1;
                }else if(index > len - 1){
                    index = 0;
                }
                // 大图
                $bigpic.find('li').eq(index).eq(0).animate({opacity:1}).siblings().animate({opacity:0})

                // 小图
                $smallpic.find('li').eq(index).animate({opacity:1}).css('background','#32c8c1').siblings().css('background','#fff')
            };
	//奶粉nav
	$('.shangge').on('click',function(){
		$(this).closest('div').find('.keshigundong').animate({
			left:0
		})
	});
	$('.xiage').on('click',function(){
		$(this).closest('div').find('.keshigundong').animate({
			left:-180
		})
	});
	var tpkuan;
	var tpgao;
	$('.zhuticontent').find('img').on('mouseenter',function(){
		tpkuan = parseInt($(this).css('width'));
		tpgao = parseInt($(this).css('height'));
		$(this).stop().animate({
						width:(tpkuan-15),
						height:(tpgao-20)
		},3000);
	});
	$('.zhuticontent').find('img').on('mouseleave',function(){
		$(this).stop().animate({
						width:tpkuan,
						height:tpgao
		},3000);
		
	});
});
