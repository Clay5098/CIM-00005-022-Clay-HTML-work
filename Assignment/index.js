function refreshWeather(currentweather) {
    // Get the current temperature and display it
    let currentTemperature = Math.round(currentweather.data.temperature.current);
    let currentTemperatureValue = document.querySelector("#currenttemperaturevalue");
    if (currentTemperatureValue) {
        currentTemperatureValue.innerHTML = currentTemperature;
    }

    // Display the weather description
    let weatherDescription = document.querySelector("#weatherdescription");
    if (weatherDescription) {
        weatherDescription.innerHTML = currentweather.data.condition.description;
    }

    // Display the weather icon
    let currentWeatherIcon = document.querySelector("#weather-app-icon");
    if (currentWeatherIcon) {
        currentWeatherIcon.innerHTML = `
        <img
            src="${currentweather.data.condition.icon_url}"
            alt="not loading"
            class="weather-app-icon"
        />`;
    }

    // Display the humidity
    let humidity = document.querySelector("#humidity");
    if (humidity) {
        humidity.innerHTML = `${currentweather.data.temperature.humidity}%`;
    }

    // Display the wind speed
    let windspeed = document.querySelector("#windspeed");
    if (windspeed) {
        windspeed.innerHTML = `${currentweather.data.wind.speed} knots`;
    }

    // Display day and time
    let currentTime = document.querySelector("#currenttime");
    if (currentTime) {
        let date = new Date(currentweather.data.time * 1000);
        currentTime.innerHTML = formatDate(date);
    }

    console.log(currentweather.data); // For debugging
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(currentcityName) {
    let apikey = "73dof19a03ad06t05b21e8521b4860f";
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${currentcityName}&key=${apikey}`;
    axios.get(apiurl).then(refreshWeather).catch((error) => {
        console.error("Error fetching weather data:", error);
    });
}

function displayCity(event) {
    event.preventDefault();
    let cityName = document.querySelector("#city-name");
    let cityNamedisplayed = document.querySelector("h3");
    if (cityName && cityNamedisplayed) {
        cityNamedisplayed.innerHTML = cityName.value;
        let currentCityName = cityName.value;
        searchCity(currentCityName);
    }
}

// Add event listener to the form
let searchForm = document.querySelector("#search-form");
if (searchForm) {
    searchForm.addEventListener("submit", displayCity);
}
