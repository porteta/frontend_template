define([
	'jquery',
	'underscore',
	'backbone'
	//add your views here
], function($, _, Backbone){

	var AppRouter = Backbone.Router.extend({
		routes: {
			//Define some URL routes

			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('defaultAction', function(actions){
			console.log('No route:', actions);
		});
		Backbone.history.start();
	}

	return {
		initialize: initialize
	};

});