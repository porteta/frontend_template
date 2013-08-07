define([
	'jquery',
	'kinetic'
], function($, Kinetic){

	var Slideshow = {
		imagesLoaded: 0,
		currentLayer: 0,
		imageLayers: [],

		start: function(el, slides){
			var stage = new Kinetic.Stage({
				container: el,
				width: 600,
				height: 400
			});
			var that = this;
			var i = 0;
			for (var key in slides){
				if (slides.hasOwnProperty(key)){
					var layer = new Kinetic.Layer();

					var imageObj = new Image();

					var imagesArray = this.imageLayers;

					imageObj.onload = function(){
						var image = new Kinetic.Image({
							x: 100*i,
							y: 100*i,
							image: imageObj,
							width: 100,
							height: 100
						});
						//DRAWING
						layer.add(image);
						stage.add(layer);

					}

					imageObj.src = slides[key].image;

				}
				i++;
			}

		},
		animate: function(stage) {
			
			console.log(this.imageLayers);
			// for (var i=0; i < this.imageLayers.length; i++){
			// 	stage.add(this.imageLayers[i]);
			// }
		}

	}

	return Slideshow;

});