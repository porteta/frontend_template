define([
	'jquery',
	'underscore',
	'backbone',
	'views/home/HomeView',
	'views/live/LiveView'
], function($,_,Backbone, HomeView, LiveView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			//Define some URL routes
			'live': 'showLive',
			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('route:showLive', function(actions){
			var liveView = new LiveView();
			liveView.render();
		});

		app_router.on('route:defaultAction', function(actions){
			var homeView = new HomeView();
			homeView.render();
		});

		Backbone.history.start();
	}

	return {
		initialize: initialize
	};

});