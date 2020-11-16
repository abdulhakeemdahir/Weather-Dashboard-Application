// Setting up variables
var submitButton = $("#submit");
var cityDate = $("#city-date");
var temp = $("#temp");
var humidity = $("#humidity");
var windSpeed = $("#wind-speed");
var uvIndex = $("#uv-index");
var icon = $("#icon");


// Setting up url and api key




//Testing API connection

function handleAPI(){
    var city = $("#input").val();

    var APIKey = "f4299bef35c7fb3410eeb230e66758d1";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var iconCode = response.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        var weatherIcon = icon.attr("src", iconURL);
        console.log(iconURL);
        cityDate.text( response.name + " " + response.date + " " + weatherIcon);
        temp.text( "Temperature: " + response.main.temp);
        humidity.text( "Humidity: " + response.main.humidity);
        windSpeed.text( "Wind Speed: " + response.wind.speed);
        uvIndex.text( "UV-Index: " + response.main.temp);
        console.log(response);
        console.log(city);


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