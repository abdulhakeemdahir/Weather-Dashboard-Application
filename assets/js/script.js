// Setting up variables
var submitButton = $("#submit");

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