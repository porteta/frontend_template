require.config({
	paths: {
		jquery: '../components/jquery/jquery.min'
	}
});

require(['app'], function(App){
	App.initialize();
});

