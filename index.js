import axios from "axios";

function formatDate(timeStamp) {
  let date = new Date(timeStamp);
  let hours = timeStamp.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  }
  let days = [
    "Sunday",
    "Monday",
    "Tueaday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = respons.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = respons.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(respons.data.wind.speed);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `https:/openweathermap.org/img/wn/04d@2x.png`;
  celciusTemperature = response.data.main.temp;
}

function search(city) {
  let apiKey = b3b7f0a3ff1dbcc14114dfae05acef2f;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=metric`;
  console.log("apiUrl");
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement.value);
  search(cityInputElement.value);
}

function displayFahrinheitTemperature(event) {
  event.preventDefault();
  let fahrinheitTemperature = (14 * 9) / 5 + 32;
  alert(fahrinheitTemperature);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrinheitTemperature);
}

function displayCelciusTemperature(event) {
  event.preventDefault();
  let celcius = null;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = celciusTemperature;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrinheitLink = document.querySelector("#sfahrinheit-link");
fahrinheitLink.addEventListener("click", displayFahrinheitTemperature);
