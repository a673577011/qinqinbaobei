;$(function(){
	$('.sg').on('click',function(){
		$('.kdj ul').animate({
			left:0
		})
	});
	$('.xg').on('click',function(){
		$('.kdj ul').animate({
			left:-936
		})
	});
	
	$('<ul id="oye" style="width:946px;height:188px;padding-top:20px;"></ul>').appendTo('.gwcbd');
	
	
	render();
	
	function render(){
		var _cookie = document.cookie.split('; ');
			
				$.each(_cookie,function(idx,val){
					var info = JSON.parse(val.split('=')[1]);
					if(info.name !== undefined){
						$('<div style="float:left;width:200px;height:80px;margin-top:20px;text-align:center;padding-top:20px;"><img src="../css/img/146907761499210_63x63.jpg"/></div>').appendTo('#oye');
						$('<div style="float:left;width:280px;height:80px;margin-top:20px;text-align:center;padding-top:20px;margin-right:20px;">'+info.name+'<br/><br/><b style="color:red">'+info.xh+'</b></div>').appendTo('#oye');
						$('<div style="float:left;width:60px;height:80px;margin-top:20px;text-align:center;padding-top:20px;margin-right:95px;">'+(info.zj/info.sl)+'</div>').appendTo('#oye');
						$('<div style="float:left;width:20px;height:80px;margin-top:20px;text-align:center;padding-top:20px;margin-right:70px;">'+info.sl+'</div>').appendTo('#oye');
						$('<div style="float:left;width:100px;height:80px;margin-top:20px;text-align:center;padding-top:20px;">'+info.zj+'</div>').appendTo('#oye');
						$('<input id="shanchu" type="button" value="删除" style="width:40px;height:15px;border:0;margin-top:40px;margin-left:20px"/>').appendTo('#oye');

						$('#hj').html('¥'+info.zj);
						$('#zj').html('¥'+info.zj);
					};
				});
	};
	$('.gwcbd').on('click','#shanchu',function(){
				var $ul = $(this).closest('ul');
				// 把过期时间设置成昨天
				var now = new Date();
				now.setDate(now.getDate()-1);
				// 删除cookie
				document.cookie = 'good=null;expires=' + now;
				// 移除html
				$ul.remove();
				// location.reload();
				render();
			});				
});
