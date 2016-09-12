;$(function(){
	//正则判断手机号
	$('#shoujihao').on('blur',function(){
		var $shoujihao = $('#shoujihao').val();
		if(!/^1[34578]\d{9}$/.test($shoujihao)){
			$('.shoujihao').css('visibility','visible');
			$('#shoujihao').css('borderColor','#f20266');
		}else{
			$('.shoujihao').css('visibility','hidden');
			$('#shoujihao').css('borderColor','#bfbfbf');
		}
	});
	//正则判断密码
	$('#mima').on('blur',function(){
		var $mima = $('#mima').val();
		if(!/^\S{6,16}$/.test($mima)){
			$('.shurumima').css('visibility','visible').text('请输入6-16位字母数字的组合');
			$('#mima').css('borderColor','#f20266');
		}else{
			$('.shurumima').css('visibility','hidden');
			$('#mima').css('borderColor','#bfbfbf');
		};
		if($mima==''){
			$('.shurumima').css('visibility','visible').text('请输入密码');
		};
	});
	//确认密码
	$('#querenmima').on('blur',function(){
		var $querenmima = $('#querenmima').val();
		if($querenmima !== $('#mima').val()){
			$('.querenmima').css('visibility','visible');
			$('#querenmima').css('borderColor','#f20266');
		}else if($querenmima == ''){
			$('.querenmima').css('visibility','visible');
			$('#querenmima').css('borderColor','#f20266');
		}else{
			$('.querenmima').css('visibility','hidden');
			$('#querenmima').css('borderColor','#bfbfbf');
		}
		
	});		
	//验证语音验证码
	$('#yyyzm').on('blur',function(){
		var $yyyzm = $('#yyyzm').val();
		if($yyyzm == ''){
			$('.shuruyzm').css('visibility','visible');
			$('#yyyzm').css('borderColor','#f20266');
		}else{
			$('.shuruyzm').css('visibility','hidden');
			$('#yyyzm').css('borderColor','#bfbfbf');
		};
		
	});			
	//注册按钮执行,并记录到cookie
	$('#zhucea').on('click',function(){
		var $zhanghao = $('#shoujihao').val();
		var $mima = $('#mima').val();

		
		var yonghu = {};
		yonghu.zhanghao = $zhanghao;
		yonghu.mima = $mima;

		
		var _cookie = 'yonghu=' + JSON.stringify(yonghu);
		console.log(_cookie);
		
		document.cookie = _cookie + ';path=/';
		
		alert('恭喜您,注册成功!');
		
		window.open("../html/denglu.html");
	});				
});
