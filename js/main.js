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
	}
}