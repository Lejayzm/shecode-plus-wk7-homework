//receive apiUrl
function updateWeather(response) {
  //create new element for temperature
  let temperatureElement = querySelector("#temperature");
  //store in temperature value
  let temperature = response.data.current;
  //use api results for city
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
  
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