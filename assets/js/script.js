// Setting up variables
var userInput = $("#input").val();

// Setting up url and api key

var APIKey = "f4299bef35c7fb3410eeb230e66758d1";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=" + APIKey;


// Testing API connection

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
    console.log(userInput);

});

// Append List of Searches

// Get Current Weather Data and Long Lat

// Get One API Data for UV Index

// Get 5 Day Forcast Data