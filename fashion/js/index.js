$(window).onscroll=function(e){
	var a=$(document).scrollTop();
	console.log(a);
	if(a<10){
		$('#nav-box1').addClass('myanimation-top');
	}else if(a<400){
		$('#nav-box2').parent().addClass('myanimation-left');
		$('#nav-box3').addClass('myanimation-right2');
	}else if(a<950){
		$('#nav-box4').addClass('myanimation-left2');
		$('#nav-box5').addClass('myanimation-right2');
	}
}
//监测当浏览器大小变化时
$(function(){
	var $width=$('div>.ceng').css('width');
	console.log($width);
	$('div>.ceng').css('height',$width)
	//浏览器时窗口的可视区域
//	console.log($(window).height()+'窗口高度');

	//浏览器时下窗口文档的高度
	var height=$(window).height();
	var $navtop=$('div.nav-txt').css('height',height);
})
$(window).resize(function(){
	var $width=$('div>.ceng').css('width');
	console.log($width);
	$('div>.ceng').css('height',$width)
	//浏览器时窗口的可视区域
//	console.log($(window).height()+'窗口高度');

	//浏览器时下窗口文档的高度
	var height=$(window).height();
	var $navtop=$('div.nav-txt').css('height',height);
	//浏览器时下窗口文档body的高度
//	console.log($(document.body).height());
	//浏览器时下窗口文档body的总高度 包括border padding margin
//	console.log($(document.body).outerHeight(true));

	
	//浏览器宽高
//	var offsetWid = document.documentElement.clientWidth;
//  var offsetHei = document.documentElement.clientHeight;
//	console.log(offsetWid);
//	console.log(offsetHei);
})

//获取div的各种高度
//var scrollHeight=document.querySelector('#nav-box1').scrollHeight;
//console.log(scrollHeight+'文档高度')
// jq中没有scrollHeight -只有scrollTop():
// 所以用DOM操作获取元素并计算scrollHeight。

//var height=$('#nav-box1').height();

