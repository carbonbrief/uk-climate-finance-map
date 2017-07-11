	//map by Rosamund Pearce for Carbon Brief
	
function init(){

		var sublayers;
		
		//define sublayers
			
			var layer;
			
			
			// create leaflet map and define some properties
        var map = L.map('map', { 
          zoomControl: true,
					scrollWheelZoom: false,
          center: [10.3, 10.4],
          zoom: 2
        })

			// add a base layer to map
			L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
				attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
			}).addTo(map);

			var layerUrl = 'https://carbonbrief.carto.com/api/v2/viz/28408b60-6571-11e7-907e-0e98b61680bf/viz.json' ;
			cartodb.createLayer(map,layerUrl)
				.addTo(map)
				.on('done', function(layer){
					layer.getSubLayer(0).show();
			});
}
		
		$(document).ready(function(){
			
			if ($(window).width() >= 650)
				
			{
				$("#Key2").show();
	      $("#Key1").show();
				$("#Total1").show();
			}
			
			else {
				$("#Key2").hide();
	      $("#Key1").show();
				$("#Total1").hide();
			}
			
			
 });


		window.onload = init;