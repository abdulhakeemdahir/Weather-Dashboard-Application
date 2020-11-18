'use strict';
// Setting up variables

// Main Weather Section
var contentContainer = $("#content");
var submitButton = $("#submit");
var cityDate = $("#city-date");
var temp = $("#temp");
var humidity = $("#humidity");
var windSpeed = $("#wind-speed");
var uvIndex = $("#uv-index");
var icon = $("#icon");

//5 Day Foercast Section
var fiveDayContainer = $('<div id="fiveDayWeather" class="card col-sm-2 p-2 bg-primary text-light">');
var fiveCityDate = $('<p id="five-city-date"">');
var fiveCityIcon = $('<p id="five-city-icon"">');
var fiveCityTemp = $('<p id="five-city-temp"">');
var fiveCityHumidity = $('<p id="five-city-humidity"">');

// Append 5 Day Section
contentContainer.append(fiveDayContainer);
fiveDayContainer.append(fiveCityDate, fiveCityIcon, fiveCityTemp, fiveCityHumidity);

// One Call API

function uvIndexHandler (lon, lat){
    var APIKey = "f4299bef35c7fb3410eeb230e66758d1";
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly&appid=" + APIKey;
    console.log(queryURL);

    $.ajax({   
        url: queryURL,
        method: "GET"
    }).then(function(response2){
        uvIndex.text( "UV-Index: " + response2.current.uvi);
        console.log(response2);
    });
}

//Setting up API handler

function handleAPI(){
    var city = $("#input").val().trim();
    // Setting up url and api key
    var APIKey = "f4299bef35c7fb3410eeb230e66758d1";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
   
    // Current Weather API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var iconCode = response.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        var weatherIcon = icon.attr("src", iconURL);
        console.log(iconURL);
        cityDate.text( response.name + " " + response.date);
        temp.text( "Temperature: " + response.main.temp);
        humidity.text( "Humidity: " + response.main.humidity);
        windSpeed.text( "Wind Speed: " + response.wind.speed);
        console.log(response);
        console.log(city);
        //Get the Longitude and Latitude
        var lon = response.coord.lon;
        var lat = response.coord.lat;
        console.log(lon,lat);

        uvIndexHandler(lon, lat);

});
}

// Append List of Searches

// Get Current Weather Data and Long Lat

// Get One API Data for UV Index

// Get 5 Day Forcast Data

submitButton.on("click", function (event) {
    event.preventDefault();
    handleAPI();
  });