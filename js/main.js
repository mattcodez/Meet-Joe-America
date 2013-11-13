"use strict";

function init(){
	var mainContainer = $('#mainContainer');
	var windowObj = $(window);
	
	var ar = 825 / 650;
	
	windowObj.on('resize', autoResize);
	autoResize();//Initial run

	function autoResize(e){
		var windowWidth = windowObj.width();
		var windowHeight = windowObj.height();
		
		mainContainer.css('width', windowObj.height() * ar);
		mainContainer.css('height', windowObj.height());
		
		if (mainContainer.width() > windowWidth){
			mainContainer.css('width', windowWidth);
		}
		
		var margins = windowWidth - mainContainer.width();
		if (margins > 0){
			mainContainer.css('left', margins / 2);
		}
		
		//var joeBaseH = 352;
		//var baseWindow = 825;
		var jh = $('#meetJoe img').height();
		var ratio = (jh / windowHeight) + 1;
		
		var adjust = 20 * ratio;
		//ratio *= 0.5;
		$('#threeDglassesPlain').css('top', adjust + '%');
		
		var adjustHeadband = $('#headband')[0].style.top;
		adjustHeadband = adjustHeadband.substring(0, adjustHeadband.length - 1);
		adjustHeadband -= 13;
		adjustHeadband *= ratio;
		$('#headband').css('top', adjustHeadband + '%');
		//$('#threeDglassesPlain').css('transform', 'translateY(-' + ((adjust/100) * windowHeight) + 'px)');
	}
}