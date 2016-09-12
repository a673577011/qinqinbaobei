/*;$(function(){
	$div = $('.div1');
	$show = $('.show');
	$span = $('.div1 span');
	$img = $('#img1');
	
	$show.on('mouseenter',function(){
		$span.css('display','block');
		$img.parent().css('display','block');
	})
	$show.on('mouseleave',function(){
		$span.css('display','none');
		$img.parent().css('display','none');
	})
	$show.on('mousemove',function(e){
		var x=e.pageX-$div.offset().left-$span.outerWidth()/2;
		var y=e.pageY-$div.offset().top-$span.outerHeight()/2; 
		if(x<0){
				x=0; 
		}else if(x>$show.outerWidth()-$span.outerWidth()){
				x=$show.outerWidth()-$span.outerWidth();
		}if(y<0){
				y=0; 
		}else if(y>$show.outerHeight()-$span.outerHeight()){
				y=$show.outerHeight()-$span.outerHeight();
		} 

		
		
		
		$span.css({
					left:x,
					top:y
		});
		
		var percentX=x/($show.outerWidth()-$span.outerWidth()); 
		var percentY=y/($show.outerHeight()-$span.outerHeight()); 
		
		
		var $imgparent =$img.parent();
		
		imgleft = -percentX*($img.outerWidth()-$imgparent.outerWidth());
		imgtop =  -percentY*($img.outerHeight()-$imgparent.outerHeight());
		
		
		$img.css({
				left:x,
				top:y
		})
		
		
	})
	})
*/
;window.onload = function () {

            var objDemo = document.getElementById("demo");
            var objSmallBox = document.getElementById("small-box");
            var objMark = document.getElementById("mark");
            var objFloatBox = document.getElementById("float-box");
            var objBigBox = document.getElementById("big-box");
            var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

            objMark.onmouseover = function () {
                objFloatBox.style.display = "block"
                objBigBox.style.display = "block"
            };

            objMark.onmouseout = function () {
                objFloatBox.style.display = "none"
                objBigBox.style.display = "none"
            };

            objMark.onmousemove = function (ev) {

                var _event = ev || window.event;  
				//鼠标的位置
                var left = _event.pageX - objSmallBox.offsetLeft - objFloatBox.offsetWidth*1.5;
				
                var top = _event.pageY  - objSmallBox.offsetTop - objFloatBox.offsetHeight*1.5;

                if (left < 0) {
                    left = 0;
                } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                    left = objMark.offsetWidth - objFloatBox.offsetWidth;
                };

                if (top < 0) {
                    top = 0;
                } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                    top = objMark.offsetHeight - objFloatBox.offsetHeight;

                };

                objFloatBox.style.left = left + "px";  
                objFloatBox.style.top = top + "px";

                var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
                var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

                objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
                objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
            }
        };



	







	
			

