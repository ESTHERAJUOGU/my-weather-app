import axios from "axios";

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = timestamp.getHours();
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
    "Saturday"
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function formatDay(timestamp){
    let date = new Date(timestamp*1000);
    let day=date.getDate();
     let days=[
    "Sunday",
    "Monday",
    "Tueaday",
    "Wednesday",
];
return  days[day];
}

function displayForcast(response){
    console.log(response.data.daily);
    let forcastElement=document.querySelector("#forcast");
    forcastElement.innerHTML=forcastHtml+` <div class="weather-forcast">
            <div class="row">
                <div class="col-2">
                  <div class ="weather-forcast-date" > sun</div>
                  <img src="https://openweathermap.org/img/wn/
                  ${forcastDay.weather[0].icon}@2x.png"
                  alt="" width="42">
                  <div class="weather-forcast-temperature">
                    <span class="weather-forcast-temperature-max">18</span>
                    <span class="weather-forcast-temperature-min">12</span>
                  </div>
                </div>
            </div>
        </div>
            </div>`;
    let days=[
    "Sunday",
    "Monday",
    "Tueaday",
    "Wednesday",
];
return`${day} ${hours}:${minutes}`;

let forcastHTML=`<div class="row>`;
days.forEach(funtion(day) {forcastHTML=forcastHTML+`<div class="col-2>
<div class=weather-forcast-date>${day} </div>`
    
});
forcastHTML=forcastHTML+`<div>`;
forcastElement=forcastHTML;
}

function getForcast(coordinate){
console.log(coordinate);
let apiKey = b3b7f0a3ff1dbcc14114dfae05acef2f;
let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${apiKey}&unit=metrics`;
console.log("apiUrl");
let lat =position.coord.latitude;
let lon=position.coords.longitude;
axios.get(apiUrl).then(displayForcast);
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
  iconElement.setAttribute("src", `https:/openweathermap.org/img/wn/${respons.data.weather[0].icon}@2x.png`;
  iconElement.setAttribute("alt",response.data.weather[0].description);
  celciusTemperature = response.data.main.temp;
  getForcast(response.data.coord)

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
