/***** partie champ  ****/


/***** fin champ  ****/

/***** partie map  ****/

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter=new google.maps.LatLng(51.508742,-0.120850);
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(map, event.latLng);
  });
}

    /***** Ajouter points sur la carte ****/
function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
    
    /***** Fin points sur la carte ****/
    
    
    /***** apparition info bulle  ****/
  var infowindow = new google.maps.InfoWindow({
    content: "maps"
  });
  infowindow.open(map,marker);
}
    /***** fin apparition info bulle  ****/

/***** fin map  ****/
