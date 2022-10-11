import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays";
import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, newForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function weatherForecast(response) {
        newForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="row">
                {forecast.map(function (everydayForecast, index) {
                    if (index < 5) {
                        return <ForecastDays key={index} infoWeather={everydayForecast} />;
                    }
                })}
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