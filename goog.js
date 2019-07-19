function initMap() {
  var options = {
    zoom: 4,
    center: { lat: 42.4668, lng: -70.9495 }
  };
  var map = new google.maps.Map(document.getElementById("map"), options);

  //Add Marker Function
  function addMarker(coords, wheatherDesc) {
    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      animation: google.maps.Animation.DROP
    });
    var infowindow = new google.maps.InfoWindow({
      content: wheatherDesc
    });
    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
  }

  google.maps.event.addListener(map, "click", function(event) {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    var url =
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&APPID=c894fa26f98d61a6892f65d827493bef&units=metric";

    fetch(url, { method: "get" })
      .then(function(response) {
        return response.json();
      })
      .then(function(myjason) {
        //var contentString = myjason;
        var contentString =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Current weather for: ' +
          myjason.name +
          ", " +
          myjason.sys.country +
          "</h1>" +
          '<div id="bodyContent">' +
          "<p><b>Weather</b>: " +
          myjason.weather[0].main +
          "<img src=http://openweathermap.org/img/wn/" +
          myjason.weather[0].icon +
          ".png>" +
          "<b><br>Description</b>: " +
          myjason.weather[0].description +
          "<b><br>Temperature</b>: " +
          myjason.main.temp +
          "&deg;C" +
          "<b><br>Humidity</b>: " +
          myjason.main.humidity +
          "%" +
          "<b><br>Wind Speed</b>: " +
          myjason.wind.speed +
          "m/s" +
          "</p>" +
          "</div>" +
          "</div>";

        addMarker({ lat: latitude, lng: longitude }, contentString);
      })
      .catch(function(err) {
        // Error
      });
  });
}
