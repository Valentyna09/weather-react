import React, { useState } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, newForecast] = useState(null);

    function weatherForecast(response) {
        newForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
                console.log(forecast);
        return (
            <div className="row">
                <ForecastDays infoWeather={forecast[0]} />
                <ForecastDays infoWeather={forecast[1]} />
                <ForecastDays infoWeather={forecast[2]} />
                <ForecastDays infoWeather={forecast[3]} />
                <ForecastDays infoWeather={forecast[4]} />
                {/* <div className="col-lg-2 col-md-5 div-cards ">
                    <h2 className="days">{forecast[0].dt}</h2>
                    <div className ="card">
                        <div className ="card-body">
                            <Icon icon={forecast[0].weather[0].icon} size={55} />
                            <h2 className="days">{forecast[0].weather[0].description}</h2>
                            <p className ="card-text">
                                <i className ="fa-solid fa-temperature-low" title="temperature"></i>
                                <span className="day-temp" title="day temperature">{Math.round(forecast[0].temp.max)}</span>
                                <span className ="celsius">℃ </span>
                                <span className ="separate">| </span>
                                <span className ="night-temp" title="night temperature">{Math.round(forecast[0].temp.min)}</span>
                                <span className ="celsius">℃</span>
                            </p>
                            <p className ="card-text">
                                <i className ="fa-solid fa-wind" title="wind"></i>
                                <span className ="wind">Wind: </span>
                                <span className ="wind">{Math.round(forecast[0].wind_speed)} </span>
                                <span className ="units">km/h</span>
                            </p>
                            <p className ="card-text">
                                <i className ="fa-solid fa-droplet" title="humidity"></i>
                                <span className ="humidity">Humidity: </span>
                                <span className ="humidity">{Math.round(forecast[0].humidity)} </span>
                                <span className ="units">%</span>
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    } else {
        let key = "f5029b784306910c19746e40c14d6cd3";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

        axios.get(url).then(weatherForecast);

        return null; 
    }
}