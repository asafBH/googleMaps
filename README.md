# Interactive Weather Map

An interactive web application that displays a map with current weather information. Users can click on the map to get real-time weather data for any location.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features
- Interactive Google Map integration
- Clickable map to retrieve weather data for any selected location
- Display of weather information including temperature, humidity, wind speed, and a weather description
- Responsive design for desktop and mobile devices

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Google Maps JavaScript API
- OpenWeatherMap API

## Getting Started
To run this project locally, follow these steps:

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, etc.)
- An internet connection to access external APIs

### Installation
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/asafBH/weather-map.git
    cd weather-map
    ```

2. Replace `YOUR_API_KEY` in the HTML file with your actual Google Maps API key and make sure you have an API key for OpenWeatherMap as well.

3. Open `index.html` in your web browser:
    ```bash
    open index.html  # For macOS
    start index.html # For Windows
    xdg-open index.html # For Linux
    ```

## Usage
1. Once the map loads, click anywhere on the map to retrieve weather data for that location.
2. A marker will be placed at the clicked location, and an info window will display the weather information.

## File Structure

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) for providing the mapping functionalities.
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data retrieval.
- [Font Awesome](https://fontawesome.com) for icons (if applicable).
- Inspiration and resources from various online tutorials and documentation.

