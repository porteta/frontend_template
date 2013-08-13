define([
	'jquery'
], function($){

	var canvas,
	context,
	offscreenCanvas,
	offscreenContext,
	stagingCanvas,
	stagingContext,
	canvas2,
	canvas2Context,
	x,
	y,
	slides,
	currentImage,
	oldImage,
	loop,
	image,
	numSlides,
	image2;

	//shims

	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();

	var initialize = function(images) {
		canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');
		canvas.width = $(window).width();
		canvas.height = $(window).height();
		offscreenCanvas = document.createElement('canvas');
		offscreenContext = offscreenCanvas.getContext('2d');
		stagingCanvas = document.createElement('canvas');
		stagingContext = stagingCanvas.getContext('2d');
		x = 0;
		y = 0;
		slides = images;
		currentImage = 0;
		oldImage = slides.length-1;
		loop;
		image = new Image();
		image2 = new Image();
		image.src = slides[currentImage];
		image2.src =slides[oldImage];
		stagingCanvas.width = canvas.width;
		stagingCanvas.height = canvas.height;
		offscreenCanvas.width = 3000;
		offscreenCanvas.height = 3000;
		numSlides = slides.length;
		image.onload = function(e){
			 
		}

		drawCanvas();
		// make a DrawFirstFrame funciton()
		drawOffscreenCanvas();

		setTimeout(function(){
			animate();
		}, 5);
	}

	var drawCanvas = function(){
		context.drawImage(offscreenCanvas, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
	}

	var drawOffscreenCanvas = function(){
		if (x >= offscreenCanvas.height-500){
			return;
		} else {

			x+=10;
			y+=10;

			offscreenContext.save();
			offscreenContext.clearRect(0,0,offscreenCanvas.width, offscreenCanvas.height);
			offscreenContext.drawImage(stagingCanvas, 0, 0, canvas.width, canvas.height);


			//draw shape
			offscreenContext.beginPath();
			offscreenContext.rect(offscreenCanvas.width-500-x, offscreenCanvas.height-500-y, 500, 500);
			offscreenContext.closePath();
			offscreenContext.fillStyle = "FFF";
			offscreenContext.fill();

			//set clip region
			offscreenContext.beginPath();
			offscreenContext.rect(offscreenCanvas.width-400-x, offscreenCanvas.height-400-y, 380, 380);
			offscreenContext.closePath();
			offscreenContext.clip();

			//draw image
			offscreenContext.drawImage(image, 0, 0, canvas.width, canvas.height);
			offscreenContext.restore();
			drawCanvas();

			animate();
		}
	}

	var loadNextImage = function(){

		stagingContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);

		lowerCanvas = document.getElementById('canvas').cloneNode(true);
		lowerCanvas.height = canvas.height;
		lowerCanvas.width = canvas.width;
		lowerCanvasContext = lowerCanvas.getContext('2d');
		$('#page').append(lowerCanvas);
		
		canvasStage = lowerCanvas;
		canvasStagecontext = lowerCanvasContext;

		lowerCanvas = canvas;
		lowerCanvasContext = context;
		$(lowerCanvas).css({"z-index": "1"});

		canvas = canvasStage;
		context = canvasStagecontext;
		$(canvas).css({"z-index": "2"});

		slides = slides;

		if ($('body').children('canvas').length>2){
			var canvases = $('body').children('canvas');
			$(canvases[0]).remove()
		}

		x = 0;
		y = 0;
		oldImage = currentImage;

		if(currentImage >= numSlides-1){
			currentImage = 0;
		} else {
			currentImage++;	
		}

		image.src = slides[currentImage];
		image2.src = slides[oldImage];

		animate();
	}

	var animate = function(){
		window.requestAnimFrame(drawOffscreenCanvas);
	}

	return {
		start: function(slides) {
			initialize(slides);
		},
		next: function(){
			loadNextImage();
		}
	}

});