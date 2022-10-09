// import React, { useState } from "react";
// import axios from "axios";
import React from "react";
import './Weather.css';

export default function Weather() {
    // let [city, newCity] = useState("Kharkiv");
    // let [temperature, newTemperature] = useState(" ");
    // let [humidity, newHumidity] = useState("");
    // let [wind, newWind] = useState(" ");
    // let [description, newDescription] = useState(" ");
    // let [icon, newIcon] = useState("");


    // function Submit(event) {
    //     event.preventDefault();
    //     let key = "f81614abe2395d5dfecd45b9298041de";
    //     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    //     axios.get(url).then(WeatherForecast); 
    // }
    // function Search(event) {
    //     newCity(event.target.value); 
    // }
    // function WeatherForecast(response) {
    //     newTemperature = Math.round(response.data.main.temp);
    //     newHumidity = response.data.weather[0].description;
    //     newWind = Math.round(response.data.wind.speed);
    //     newDescription = response.data.weather[0].description;
    //     newIcon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    // }

    return (
         <div className="weatherdiv">
            {/* <!-- HEADER  --> */}
            <div>
                <form className="search-form"
                    // onSubmit={Submit}
                >
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                autoFocus="on"
                                autoComplete="off"
                                id="city"
                                className="form-control shadow-sm city"
                                // onChange={Search}
                            />
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="row row-cols-auto">
                                <div className="col-sm-10 col-lg-9 search-div">
                                    <input type="submit" value="Search" className="form-control btn btn-primary shadow-sm search" />
                                </div>
                                <div className="col-sm-2 col-lg-3 location">
                                    <button className="button">
                                        <i className="fa-solid fa-location-dot" title="Current Location"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* <!-- Current weather  --> */}
            <div className="row current-weather">
                <div className="col-sm-12 col-lg-4 mt-3">
                    <h1 id="city-name" className="text-center">Kharkiv</h1>
                    <p className="date">
                        Last update: <br/> <span id="currentDayTime"> Monday 10:00</span>
                    </p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 temperature">
                    <p>
                        <span id="tempNow">20</span>
                        <span className="temp-cf">
                            <button id="celsius" className="active-link">℃</button> |
                            <button id="fahrenheit">℉</button>
                        </span>
                    </p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 weather-description">
                    <div>
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="clear" id="main-icon" />
                        <p id="sky-now" className="d-inline">scattered clouds</p>
                    </div>
                    <p className="ms-4">
                        <i className="fa-solid fa-wind windNow"></i>Wind:
                        <span className="wind-main"> 3</span>
                        <span className="units">km/h</span>
                    </p>
                    <p className="ms-4">
                        <i className="fa-solid fa-droplet"></i>Humidity:
                        <span className="humidity-main"> 15</span>
                        <span className="units">%</span>
                    </p>
                </div>
            </div>

            {/* <!-- Weather cards  --> */}
            <div id="weather-forecast-cards">
                
            </div>
        </div>
    );
}