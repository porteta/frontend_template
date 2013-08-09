define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/work/workTemplate.html',
	'slideshow'
], function($, _, Backbone, workTemplate, Slideshow){

	var WorkView = Backbone.View.extend({

		el: $("#page"),
		slides: [],
		events: {
			"click": "nextSlide"
		},

		render: function(){	
			this.$el.html(workTemplate);
			this.afterRender();
		},
		afterRender: function(){
			var that = this;
			$('.slides li img').each(function(){
				var src = this.src;
				that.slides.push(src);
			});
			Slideshow.start(this.slides);
		},
		nextSlide: function(){
			console.log('yo');
			Slideshow.next();
		}
	});

	return WorkView;

});