require.config({
	paths: {
		jquery: '../components/jquery/jquery.min',
		underscore: '../components/underscore/underscore-min',
		handlebars: '../components/handlebars/handlebars',
		backbone: '../components/backbone/backbone-min',
		text: '../components/text/text',
		templates: '../templates',
		kinetic: '../components/kinetic/kinetic.min',
		slideshow: 'modules/slideshow'
	},
	shim: {
	    underscore: {
	      exports: '_'
	    },
	    backbone: {
	      deps: ["underscore", "jquery"],
	      exports: "Backbone"
	    }
	}
});

require(['app'], function(App){
	App.initialize();
});

