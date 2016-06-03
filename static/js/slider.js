var glide = new function(){
	function $id(id){return document.getElementById(id);};
	this.layerGlide=function(auto,oSlider,sSingleSize,second,fSpeed,point){
		var oSliderLi = $id(oSlider).getElementsByTagName('dd');
		var interval,timeout,oslideRange;
		var time = 1; 
		var speed = fSpeed 
		var sum = oSliderLi.length;
		var a=0;
		var delay=second * 1000; 
		var setValLeft=function(s){
			return function(){
				oslideRange = Math.abs(parseInt($id(oSlider).style[point]));
				$id(oSlider).style[point] =-Math.floor(oslideRange+(parseInt(s*sSingleSize) - oslideRange)*speed) +'px';		
				if(oslideRange==[(sSingleSize * s)]){
					clearInterval(interval);
					a=s;
				}
			}
		};
		var setValRight=function(s){
			return function(){	 	
				oslideRange = Math.abs(parseInt($id(oSlider).style[point]));							
				$id(oSlider).style[point] =-Math.ceil(oslideRange+(parseInt(s*sSingleSize) - oslideRange)*speed) +'px';
				if(oslideRange==[(sSingleSize * s)]){
					clearInterval(interval);
					a=s;
				}
			}
		}
		
		function autoGlide(){
			clearTimeout(interval);
			if(a==(parseInt(sum)-1)){
				a=0;
				interval = setInterval(setValLeft(a),time);
				timeout = setTimeout(autoGlide,delay);
			}else{
				a++;
				interval = setInterval(setValRight(a),time);	
				timeout = setTimeout(autoGlide,delay);
			}
		}
	
		if(auto){timeout = setTimeout(autoGlide,delay);};
	}
}
 
//调用语句
glide.layerGlide(
	true,         //设置是否自动滚动
	'slider_show',   //焦点图片容器
	336,          //设置滚动图片位移像素
	5,			  //设置滚动时间2秒 
	0.1,          //设置过渡滚动速度
	'left'		  //设置滚动方向“向左”
);