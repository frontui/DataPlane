$(function(){
	var sw = 0;
	function myShow(i){
		$("#sliderBox dd").eq(i).stop(true,true).animate({opacity:"1"},600).css("z-index","3").siblings("dd").animate({opacity:"0"},600).css("z-index","2");
	}
	//滑入停止动画，滑出开始动画
	$("#sliderBox").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==$("#sliderBox dd").length){sw=0;}
		} , 5000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==$("#sliderBox dd").length){sw=0;}
	} , 5000);
})