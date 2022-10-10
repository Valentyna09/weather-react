import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import LastUpdate from "./LastUpdate";

    // function Submit(event) {
    //     event.preventDefault();
    //     let key = "f81614abe2395d5dfecd45b9298041de";
    //     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    //     axios.get(url).then(WeatherForecast);
    // }
    // function Search(event) {
    //     newCity(event.target.value);
    // }

export default function Weather(props) {
    let [weatherData, newWeatherData] = useState({ ready: false });
    
    function weatherForecast(response) {
        console.log(response.data);
        newWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            city: response.data.name,
            date: new Date(response.data.dt*1000)
        });
    }

    if (weatherData.ready) {
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
                       <h1 id="city-name" className="text-center">{weatherData.city}</h1>
                    <p className="date">
                           Last update: <br />
                           <span id="currentDayTime">
                               <LastUpdate date={ weatherData.date} />
                           </span>
                    </p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 temperature">
                    <p>
                        <span id="tempNow">{Math.round(weatherData.temperature)}</span>
                        <span className="temp-cf">
                            <button id="celsius" className="active-link">℃</button> |
                            <button id="fahrenheit">℉</button>
                        </span>
                    </p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 weather-description">
                    <div>
                        <img src={weatherData.icon} alt="clear" id="main-icon" />
                           <p id="sky-now" className="d-inline">{weatherData.description}</p>
                    </div>
                    <p className="ms-4">
                        <i className="fa-solid fa-wind windNow"></i>Wind:
                           <span className="wind-main"> {Math.round(weatherData.wind)} </span>
                        <span className="units">km/h</span>
                    </p>
                    <p className="ms-4">
                        <i className="fa-solid fa-droplet"></i>Humidity:
                           <span className="humidity-main"> {Math.round(weatherData.humidity)} </span>
                        <span className="units">%</span>
                    </p>
                </div>
            </div>

            {/* <!-- Weather cards  --> */}
            <div id="weather-forecast-cards">
                
            </div>
        </div>
    ); 
    } else {
        let key = "f81614abe2395d5dfecd45b9298041de";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${key}`;
        axios.get(url).then(weatherForecast); 
        
        return "Loading..."
    }
}