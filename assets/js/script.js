//API Key
var apiKey = "f6672cc6e9cb17c1050849aae4579382";

//Date
var today = moment().format('L');

//List of searched cities
var searchHistoryList = [];

// Get/display the searched city's current weather condition 
// When the user enters a city name, the user is presented with the 
// following Information: the current city, date, weather icon, temperature, humidity, wind speed, and UV index
function currentWeather(cityname) {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (cityWeatherResponse) {
        console.log(cityWeatherResponse);

        $("#weatherContent").css("display", "block");
        $("#cityDetail").empty();

        var weatherIcon = cityWeatherResponse.weather[0].icon;
        var weatherIconURL = `https://openweathermap.org/img/w/${weatherIcon}.png`;

        var currentCity = $(`
            <h2 id="currentCity">
                ${cityWeatherResponse.name} ${today} <img src="${weatherIconURL}" alt="${cityWeatherResponse.weather[0].description}" />
            </h2>
            <p>Temperature: ${cityWeatherResponse.main.temp} °F</p>
            <p>Humidity: ${cityWeatherResponse.main.humidity} \%</p>
            <p>Wind Speed: ${cityWeatherResponse.wind.speed} MPH</p>
        `);

        $("#cityDetail").append(currentCity);

        //Get/display the UV Index
        var lat = cityWeatherResponse.coord.lat;
        var lon = cityWeatherResponse.coord.lon;
        var uviQueryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        $.ajax({
            url: uviQueryURL,
            method: "GET"
        }).then(function (uviResponse) {
            console.log(uviResponse);

            var uvIndex = uviResponse.value;
            var uvIndexP = $(`
                <p>UV Index:
                    <span id="uvIndexColor" class="px-2 py-2 rounded">${uvIndex}</span>
                </p>
            `);

            $("#cityDetail").append(uvIndexP);

            futureWeather(lat, lon);

            // Display UV Index color to indicate if the condition is favorable (green), moderate (yellow), or severe (orange, red, violet)
            if (uvIndex >= 0 && uvIndex <= 2) {
                $("#uvIndexColor").css("background-color", "#008000").css("color", "white");
            } else if (uvIndex >= 3 && uvIndex <= 5) {
                $("#uvIndexColor").css("background-color", "#FFFF00");
            } else if (uvIndex >= 6 && uvIndex <= 7) {
                $("#uvIndexColor").css("background-color", "#FFA500");
            } else if (uvIndex >= 8 && uvIndex <= 10) {
                $("#uvIndexColor").css("background-color", "#FF0000").css("color", "white");
            } else {
                $("#uvIndexColor").css("background-color", "#9400D3").css("color", "white");
            };
        });
    });
}

// Get/display the five-day weather forecast
// Information includes the date, weather icon, temperature, humidity, and wind speed
function futureWeather(lat, lon) {

    var futureURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${current,minutely,hourly,alert}&appid=${apiKey}`;

    $.ajax({
        url: futureURL,
        method: "GET"
}).then(function (futureResponse) {
    console.log(futureResponse);
    $("#fiveDay").empty();

    for (let i = 1; i < 6; i++) {
        var cityInfo = {
            date: futureResponse.daily[i].dt,
            icon: futureResponse.daily[i].weather[0].icon,
            temp: futureResponse.daily[i].temp.day,
            humidity: futureResponse.daily[i].humidity
        };

        var currDate = moment.unix(cityInfo.date).format("MM/DD/YYYY");
        var weatherIconURL = `<img src="https://openweathemap.org/img/w/${cityInfo.icon}.png" alt="${futureResponse.daily[i].weather[0].main}" />`;

        var futureCard = $(`
        <div class="pl-3">
            <div class="card pl-3 pt-3 mb-3 bg-primary text-light" style="width: 12rem;>
                <div class="card-body">
                    <h5>${currDate}</h5>
                    <p>${weatherIconURL}</p>
                    <p>Temp: ${cityInfo.temp} °F</p>
                    <p>Humidity: ${cityInfo.humidity}\%</p>
                </div>
            </div>
        </div>
        `);

        $("#fiveDay").append(futureCard);
    }
});

}

//Add event listener
$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var cityname = $("#enterCity").val().trim();
    currentWeather(cityname);
    if (!searchHistoryList.includes(cityname)) {
        searchHistoryList.push(cityname);
        var searchedCity = $(`
            <li class="list-group-item">${cityname}</li>
        `);

        $("#searchHistory").append(searchedCity);
    };

    localStorage.setItem("city", JSON.stringify(searchHistoryList));
    console.log(searchHistoryList);
});

// When a city in the saved search history is clicked, display the current and 5-day weather forecast for that city
$(document).on("click", ".list-group-item", function() {
    var listCity = $(this).text();
    currentWeather(listCity);
});

// When the application is opened, display the last searched city forecast
$(document).ready(function() {
    var searchHistoryArray = JSON.parse(localStorage.getItem("cityname"));

    if (searchHistoryArray !== null) {
        var lastSearchedIndex = searchHistoryArray.length - 1;
        var lastSearchedCity =searchHistoryArray[lastSearchedIndex];
        currentWeather(lastSearchedCity);
        console.log(`Last searched city: ${lastSearchedCity}`);
    }
});
