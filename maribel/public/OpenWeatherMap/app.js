var apiKey = "yourApiKey";

function requestData(url, cb) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var data = JSON.parse(xmlHttp.responseText);
            cb(data);
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function requestWeather(place, cb){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey;
    requestData(url, cb);
}

function displayWeather(data) {
  var placeWeatherElement = document.getElementById(data.name.toLowerCase() + "Weather");
  placeWeatherElement.innerText = data.weather[0].description;

  var iconWeatherElement = document.getElementById(data.name.toLowerCase() + "WeatherIcon");
  iconWeatherElement.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
}

var places = ["madrid", "barcelona", "valencia"];
for(var place of places) {
    requestWeather(place, displayWeather);
}
