import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
    let [weatherData, newWeatherData] = useState({ ready: false });
    const [city, newCity] = useState(props.defaultCity);
    
    function weatherForecast(response) {
        newWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            // icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            city: response.data.name,
            date: new Date(response.data.dt*1000)
        });
    }
    function Search() {
        let key = "f81614abe2395d5dfecd45b9298041de";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
        axios.get(url).then(weatherForecast); 
    }

    function Submit(event) {
        event.preventDefault();
        Search();
    }

    function chooseCity(event) {
        newCity(event.target.value);
    }

    if (weatherData.ready) {
       return (
         <div className="weatherdiv">
            {/* <!-- HEADER  --> */}
            <div>
                <form className="search-form" onSubmit={Submit}>
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                autoFocus="on"
                                autoComplete="off"
                                id="city"
                                className="form-control shadow-sm city" onChange={chooseCity}/>
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
               <CurrentWeather data={weatherData} />


            {/* <!-- Weather cards  --> */}
            <div id="weather-forecast-cards">
                
            </div>
        </div>
    ); 
    } else {
        Search();
        return "Loading..."
    }
}