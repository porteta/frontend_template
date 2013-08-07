require.config({
	paths: {
		jquery: '../components/jquery/jquery.min',
		underscore: '../components/underscore/underscore-min',
		backbone: '../components/backbone/backbone-min',
		handlebars: '../components/handlebars/handlebars',
		text: '../components/text/text'
	}
});

require(['app',], function(App){
	App.initialize();
});

