define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/live/liveTemplate.html',
	'slideshow'
], function($, _, Backbone, liveTemplate, Slideshow){

	var LiveView = Backbone.View.extend({

		el: $("#page"),

		render: function(){
			
			var slides = {
				slide1: {
					image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStwH3maKRqLU8lLOo1XbO6uZIKHRyf2PGv66H6ol5mB0kS_0r",
					text: "This is slide 1"
				},
				slide2: {
					image: "http://www.newyorker.com/online/blogs/photobooth/NASAEarth-01.jpg",
					text: "This is slide 2"
				},
				slide3: {
					image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJiFGPntdULxKzg7Iss5tLwDS0Ecpk-Ik0ivptfZ2Bj3ph6OAqjg",
					text: "This is slide 3"
				}
			}

			Slideshow.start(this.el, slides);

		}
	});

	return LiveView;

});