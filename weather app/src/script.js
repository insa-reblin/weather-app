function showTime(time) {
  return `${day} ${hour}:${minutes}`;
}

let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[currentTime.getDay()];

let hour = currentTime.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}


function showCityWeather(reponse) {
  event.preventDefault();
  document.querySelector("#city-input").innerHTML = response.data.name;
  document.querySelector("#tempreture").innerHTML = 
  Math.round.(response.data.main.temp);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

function search(city) {
  let apiKey = "b5abb71a1bb04b6d78e3a2ea0a2e112d";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`
  let unit = "metric";
  let cityName = document.querySelector("#city-input").value;
  axios.get(apiUrl).then(showCityWeather)

}

function handelSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);

}

let dateElement = document.querySelector("#date");
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", handelSubmit);

dateElement.innerHTML = showTime(currentTime);

function convertToFahrenheit(event) {
  event.preventDefault();
  let tempretureElement = document.querySelector("#tempreture");
  let tempreture = tempretureElement.innerHTML;
  tempretureElement.innerHTML = Math.round(tempreture * 9) / 5 + 32;
}

function convertToCelsius(event) {
  event.preventDefault();
  let tempretureElement = document.querySelector("#tempreture");
  let tempreture = tempretureElement.innerHTML;
  tempretureElement.innerHTML = Math.round(tempreture - 32) * 0.5556;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

search("London");