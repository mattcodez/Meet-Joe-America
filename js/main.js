"use strict";

function init(){
	var mainContainer = $('#mainContainer');
	var windowObj = $(window);
	
	var ar = 825 / 650;
	
	windowObj.on('resize', autoResize);
	autoResize();//Initial run

	function autoResize(e){
		mainContainer.css('width', windowObj.height() * ar);
		mainContainer.css('height', windowObj.height());
	}
}