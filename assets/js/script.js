'use strict';
// Setting up variables

// Main Weather Section
var contentContainer = $("#content2-container");
var submitButton = $("#submit");
var cityDate = $("#city-date");
var temp = $("#temp");
var humidity = $("#humidity");
var windSpeed = $("#wind-speed");
var uvIndex = $("#uv-index");
var icon = $("#icon");



// Append 5 Day Section



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
        for (var i = 0; i < 5; i++){
            //5 Day Foercast Section
            var content2 = $('<div id="content2" class="mr-1">');
            var fiveDayContainer = $('<div id="fiveDayWeather" class="card p-2 bg-primary text-light col-sm row">');
            var fiveCityDate = $('<p id="five-city-date"">');
            var fiveCityIcon = $('<img id="icon2" src="" class="col-9"></img>');
            var fiveCityTemp = $('<p id="five-city-temp"">');
            var fiveCityHumidity = $('<p id="five-city-humidity"">');
            contentContainer.append(content2);
            content2.append(fiveDayContainer);
            fiveDayContainer.append(fiveCityDate, fiveCityIcon, fiveCityTemp, fiveCityHumidity);
            // Setting up Responses
            fiveCityDate.text("Date: " + response2.daily[i].dt);
            fiveCityTemp.text("Temp: " + response2.daily[i].temp.day);
            fiveCityHumidity.text("Humidity: " + response2.daily[i].humidity);

            //Setting up Icons
            var iconCode2 = response2.daily[i].weather[0].icon;
            console.log(iconCode2);
            var iconURL2 = "http://openweathermap.org/img/wn/" + iconCode2 + "@2x.png";
            fiveCityIcon.attr("src", iconURL2);
        }
        console.log(fiveCityIcon);
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