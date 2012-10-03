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
		console.log(response);

		$('.hero-unit h1').html(
			'<span class="height">'+ response.item.readings.significantWaveHeight.replace(' ', '') +'</span>'+
			'<span> @ </span>'+
			'<span class="period">'+ response.item.readings.averagePeriod.replace(' ', '') +'</span>'+
			'<span>  w/ </span>'+
			'<span class="wind-speed">'+ response.item.readings.windSpeed.replace(' knots', 'kts') +'</span>'+
			'<span class="wind-direction"> '+ response.item.readings.windDirection.slice(0,-6) +'</span>'
		);
	});
});