<!DOCTYPE html>
<html lang="en">
    <head>
       
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <link rel="stylesheet" href="src/styles.css"/>
        <title>Weather App</title>
        <link rel="manifest" href="/manifest.json">
    </head>
    <body>
        <div class="container">
            <div class="weather-app">
                <form class="search-form" id="search-form">
                    <div class="row">
                        <div class="col-6">
                            <input type="search" placeholder="Type a city.." autofocus="on" autocomplete="off" id="city-input" class="form-control shadow-sm"/>
                        </div>
                        <div class="col-3">
                            <input type="submit" value="Search" class="form-control btn btn-primary shadow-sm w-100"/>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-success w-100" id="current-location-button">Current
              </button>
                        </div>
                    </div>
                </form>
                <h1 id="city"></h1>
                <ul>
                    <li id="date"></li>
                    <li id="description"></li>
                </ul>
                <div class="row">
                    <div class="col-6">
                        <div class="clearfix">
                            <div class="float-left">
                                <span class="temperature" id="temperature"></span>
                                <span class="units">°C</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <ul>
                            <li>
                                Humidity: <span id="humidity"></span>
                                %
                            </li>
                            <li>
                                Wind: <span id="wind"></span>
                                km/h
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <script src="src/index.js"></script>