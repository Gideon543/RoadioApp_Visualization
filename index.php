<!DOCTYPE html>
<html>
<!-- Head Tag starts here -->
  <head>
    <title>Google Maps API Example</title>
    <script type="text/javascript" src="javascript/segment_maps.js"></script>
    <link rel="stylesheet" href="./css/style.css?v=<?php echo time(); ?>">
    <!-- Load the Google Maps API script -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgXjQb23a7g5gB8uNk_PJ4eiYB2Tms2ss&callback=initMap"
      async
      defer
    ></script>

  </head>
  <!-- Head Tag ends here -->

  <!-- Body begins here -->
  <body>
      <!-- Header begins here -->
     <header id="navbar" style="margin-bottom: 50px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);">
      <div class="container">
        <nav class="navbar">
          <h1 class="navbar-title">Roadio</h1>
          <button class="navbar-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="navbar-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <h1 id= "banner-heading">Road Surface Quality Map</h1> 
      </div>
    </header>
  <!-- Header ends here -->

  <!-- Map container & description divs begins here -->
    <div class="container">

      <div id="map-container"></div>

      <div class="map-description">
        <p>
          This map displays the <strong>aggregated road quality</strong> measures collected by the<em>RoadioApp</em>:
          each point on the map is computed taking into account contributions by all users of the service.
          The same data is will be available as time progress and the project unfolds.
        </p>
        
        <p>
          Each data point aggregates all collected roughness data of approximately <strong>15&nbsp;meters of road</strong>.
          <em>Green</em> points indicate smooth roads, <em>red</em> ones indicate bumps or deteriorated surfaces.
        </p>
      </div>
    </div>
      <!-- Map container & description divs ends here -->
  
    <!-- Footer begins here -->
    <footer>
      <div class="container">
        <div class="foot">
          <div class="foot1">
            <h3>Roadio</h3>
            <ul>
              <li><a href="#">News</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Road Quality Map</a></li>
              <li><a href="#">Open Data</a></li>
              <li><a href="#">For Developers</a></li>
            </ul>
          </div>
          <div class="foot2">
            <h3>Legal &amp; Privacy</h3>
            <ul>
              <li>All data collected by the RoadioApp is anonymous and respects the strict limitations of our privacy policy.</li>
              <li>This project is currently in fulfillment of a CSIS Capstone created by Gideon Donkor Bonsu & Sean Ofori-Addo.</li>
            </ul>
          </div>
          <div class="foot3">
            <h3>Roadio</h3>
            <ul>
              <li><a href="#">News</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Footer ends here -->
  </body>
  <!-- Body ends here -->

</html>
