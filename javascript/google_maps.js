
let jsonArray = [];

// Fetching data from the Roadio API endpoint
fetch('http://localhost/RoadioApp_Server_Code/APIs/GetRoadDatapoints_API.php?apicall=getRoadData')
  .then(response => response.json())
  .then(data => {
    jsonArray = data.datapoints;
    initMap(jsonArray); // pass the jsonArray to initMap
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
    zoom: 18,
    center: center ,
  });

  for (let i = 0; i < jsonArray.length; i++) {
    // Get surface quality
    let surface_quality = jsonArray[i]["surface_quality"];

    // Get the latitude and longitude data from the JSON data
    let value = jsonArray[i]["road_datapoint"];
    
    const regex = /-?\d+\.\d+/g; // matches floating-point numbers
    const matches = value.match(regex); // array of matched strings
    let lat = parseFloat(matches[1]); // convert second match to floating-point value
    let lng = parseFloat(matches[0]); // convert first match to floating-point value


    // Draw a circular representation of the GPS on the map
    // Green if the GPS point is of good surface quality, red if otherwise
    if (surface_quality == 6){
          const cityCircle = new google.maps.Circle({
          strokeColor: "#7FFF00",
          title: "Accra",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#7FFF00",
          fillOpacity: 0.35,
          map,
          center: {lat, lng},
          radius: 2,
        }); 

    } else{
        const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        title: "Accra",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: {lat, lng},
        radius: 2,
      });

    }
  }
}
