;$(function(){
	//正则判断密码是否输入
	$('#mima').on('blur',function(){
		var $mima = $('#mima').val();
		if($mima == ''){
			$('.shurumima').css('visibility','visible').text('请输入密码');
			$('#mima').css('borderColor','#f20266');
		}else{
			$('.shurumima').css('visibility','hidden');
			$('#mima').css('borderColor','#bfbfbf');
		}
		if($mima==''){
			$('.shurumima').css('visibility','visible');
		}
	});
	//正则判断用户名是否输入
	$('#yhm').on('blur',function(){
		var $yhm = $('#yhm').val();
		if($yhm == ''){
			$('.yhm').css('color','#f20266');
			$('#yhm').css('borderColor','#f20266');
		}else{
			$('.yhm').css('color','#fff');
			$('#yhm').css('borderColor','#bfbfbf');
		}
	});
			
	
	var zhyz;
	var mmyz;
	//把cookie中的用户信息提取
	function render(){
		var _cookie = document.cookie.split('; ');
			$.each(_cookie,function(idx,val){
				var info = JSON.parse(val.split('=')[1]);			
				zhyz = info.zhanghao;
				mmyz = info.mima;
				
			});
		
	};		
	//执行用户信息提取
	render();	
	//点击登录时进行判断,用户名和密码是否与cookie中的信息对应
	$('#denglua').on('click',function(){
		if($('#yhm').val() == zhyz){
			if($('#mima').val() == mmyz){
				window.open("../html/gouwuche.html");
			}else{
				alert('密码错误,请重新输入!');
			}
		}else{
			alert('用户不存在,请重新输入!');
		}
	});	
});
