define(["jquery"], function($) {
	
	var feedUrl = 'http://proxy.dev/ndbcfeed/read/62303';
	
	return $.getJSON(feedUrl);

});
