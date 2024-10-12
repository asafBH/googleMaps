function initMap() {
  const options = {
    zoom: 4,
    center: { lat: 42.4668, lng: -70.9495 }
  };
  const map = new google.maps.Map(document.querySelector("#map"), options);

  // Add Marker Function
  const addMarker = (coords, weatherDesc) => {
    const marker = new google.maps.Marker({
      position: coords,
      map: map,
      animation: google.maps.Animation.DROP
    });
    const infowindow = new google.maps.InfoWindow({
      content: weatherDesc
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  };

  google.maps.event.addListener(map, "click", (event) => {
    const latitude = event.latLng.lat();
    const longitude = event.latLng.lng();
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=c894fa26f98d61a6892f65d827493bef&units=metric`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok.");
        return response.json();
      })
      .then((weatherData) => {
        const contentString = `
          <div id="content">
            <h1 id="firstHeading" class="firstHeading">Current weather for: ${weatherData.name}, ${weatherData.sys.country}</h1>
            <div id="bodyContent">
              <p>
                <b>Weather</b>: ${weatherData.weather[0].main} <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png">
                <b><br>Description</b>: ${weatherData.weather[0].description}
                <b><br>Temperature</b>: ${weatherData.main.temp}°C
                <b><br>Humidity</b>: ${weatherData.main.humidity}%
                <b><br>Wind Speed</b>: ${weatherData.wind.speed} m/s
              </p>
            </div>
          </div>`;
        addMarker({ lat: latitude, lng: longitude }, contentString);
      })
      .catch((err) => {
        console.error("Error fetching weather data: ", err);
        alert("Could not retrieve weather data. Please try again later.");
      });
  });
}
