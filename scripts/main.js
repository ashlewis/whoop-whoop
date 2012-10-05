require.config({
  shim: {
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min'
  }
});
 
require(['app'], function(app) {

	// use app here
	app.success(function(response){

		var reading,
			latestReadingTime,
			nextReadingTime;
		
		reading = '<span class="height">'+ response.item.readings.significantWaveHeight.replace(' ', '') +'</span>'+
			'<span> @ </span>'+
			'<span class="period">'+ response.item.readings.averagePeriod.replace(' ', '') +'</span>'+
			'<span>  w/ </span>'+
			'<span class="wind-speed">'+ response.item.readings.windSpeed.replace(' knots', 'kts') +'</span>'+
			'<span class="wind-direction"> '+ response.item.readings.windDirection.slice(0,-6) +'</span>';

		latestReadingTime = new Date(response.item.pubDate);
		nextReadingTime = new Date(latestReadingTime.getTime() + (1*60*60*1000));
		
		$('#latest-reading-time').html(latestReadingTime.toLocaleTimeString() +' '+ latestReadingTime.toLocaleDateString());
		$('#next-reading-time').html(nextReadingTime.toLocaleTimeString() +' '+ nextReadingTime.toLocaleDateString());

		$('#latest-reading').html(
			reading
		);		

		$('#previous-readings').html(
			'<ul><li>'+ reading +'</li>'+
			'<li>'+ reading +'</li>'+
			'<li>'+ reading +'</li></ul>'
		);
	});
});