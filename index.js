//receive apiUrl
function updateWeather(response) {
  //create new element for temperature
  let temperatureElement = querySelector("#temperature");
  //store in temperature value
  let temperature = response.data.temperature.current;
  //use api results for city
  let cityElement = document.querySelector("#city");
  //use api results for description
  let descriptionElement = document.querySelector("#description");
  //use api for humidity
  let humidityElement = document.querySelector("#humidity");
  //use api results for wind speed
  let windSpeedElement = document.querySelector("#wind-speed");
  //use api results for time
  let timeElement = response.querySelector("#time");
  let date = new date(response.data.time * 1000);
  //use api for icon
  let iconElement =  document.querySelector("#icon");
  iconElement.html = '<img src="${response.data.condition.icon_url}" class = "weather-app-icon" />';

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = '${response.data.temperature.humidity}%';
  windSpeedElement.innerHTML = '${response.data.wind.speed}km/h';

  temperatureElement.innerHTML = Math.round(temperature);
}

function formateDate(data) {
  let hours = date.getHours;
  let minutes = date.getMinutes;
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  If (minutes < 10) {
    minutes = '0${minutes}';
  }

  return '${day} ${hours}:${minutes}';
}

function searchCity (city) {
//make an api call
let apiKey = "006f8o4a7te13da15b02bdcddfe367c3";
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
//get results of apiUrl
axios.get(apiUrl).then(updateWeather);
}


function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
    //send the value to searchcity
  searchCity(searchInput.value);
}

//search city
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

//when page is opened
searchCity("Lisbon");