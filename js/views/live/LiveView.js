define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/live/liveTemplate.html',
	'slideshow'
], function($, _, Backbone, liveTemplate, Slideshow){

	var LiveView = Backbone.View.extend({

		el: $("#page"),
		slides: [],
		events: {
			"click": "nextSlide"
		},

		render: function(){	
			this.$el.html(liveTemplate);
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
			Slideshow.next();
		}
	});

	return LiveView;

});