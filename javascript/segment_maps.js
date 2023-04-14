let jsonArray = [];

// Fetching data from the Roadio API endpoint
fetch('http://localhost/RoadioApp_Server_Code/APIs/GetRoadSegments_API.php?apicall=getRoadData')
  .then(response => response.json())
  .then(data => {
    jsonArray = data.road_segments;
    console.log(jsonArray.length); // pass the jsonArray to initMap
    initMap(jsonArray);
  })
  .catch(error => {
    console.error(error);
  });


 // Defining the initializing function for the map
function initMap(jsonArray) {

  // Set the center of the map
  const center = {lat:5.614818, lng: -0.205874};
  // Create a new map instance
  const map = new google.maps.Map(document.getElementById("map-container"),{
    zoom: 15,
    center: center,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  });

  for (let i = 0; i < jsonArray.length; i++) {
	// Get surface quality
	let segment_surface_quality = jsonArray[i]["segment_surface_quality"];
	let polygonCoordinates = jsonArray[i]["road_segment_circle"];

	const polygonCoordsStr = polygonCoordinates.replace('POLYGON((','').replace('))','');
	const polygonCoords = polygonCoordsStr.split(',').map(coord => {
	const [lng, lat] = coord.trim().split(' ');
		return { lat: parseFloat(lat), lng: parseFloat(lng) };
		});


	// Draw a circular representation of the GPS on the map
    // Green if the GPS point is of good surface quality, red if otherwise
    if (segment_surface_quality == 6){
		const polygon = new google.maps.Polygon({
		  paths: polygonCoords,
		  strokeColor: "#00ff00",
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: "#00ff00",
		});
		// Add the polygon to the map
		polygon.setMap(map);

    } else{
		const polygon = new google.maps.Polygon({
		  paths: polygonCoords,
		  strokeColor: "#FF0000",
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: "#FF0000",
		  fillOpacity: 0.35
		});
		// Add the polygon to the map
		polygon.setMap(map);

    }
  }
}
