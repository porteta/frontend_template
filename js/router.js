define([
	'jquery',
	'underscore',
	'backbone',
	'views/home/HomeView',
	'views/live/LiveView',
	'views/work/WorkView',
], function($,_,Backbone, HomeView, LiveView, WorkView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			//Define some URL routes
			'live': 'showLive',
			'work': 'showWork',
			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('route:showLive', function(actions){
			var liveView = new LiveView();
			liveView.render();
		});

		app_router.on('route:showWork', function(actions){
			var workView = new WorkView();
			workView.render();
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