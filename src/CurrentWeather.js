import React from "react";
import LastUpdate from "./LastUpdate";
import Icon from "./Icon";
import Temperature from "./Temperature";

export default function CurrentWeather(props) {
    return (
        // Current weather
        <div className="row current-weather">
            <div className="col-sm-12 col-lg-4 mt-3">
                <h1 id="city-name" className="text-center">{props.data.city}</h1>
                {/* Last Update */}
                <p className="date">
                    Last update:
                    <br />
                    <span id="currentDayTime">
                        <LastUpdate date={props.data.date} />
                    </span>
                </p>
            </div>
            {/* Temperature */}
            <div className="col-sm-12 col-md-6 col-lg-4 temperature">
                <Temperature celsius={props.data.temperature}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 weather-description">
                <p id="sky-now">
                    <Icon icon={props.data.icon} alt={props.data.description} /> {props.data.description}
                </p>
                <p className="windNow">
                    <i className="fa-solid fa-wind"></i>Wind:
                    <span className="wind-main"> {Math.round(props.data.wind)} </span>
                    <span className="units">km/h</span>
                </p>
                <p >
                    <i className="fa-solid fa-droplet"></i>Humidity:
                    <span className="humidity-main"> {Math.round(props.data.humidity)} </span>
                    <span className="units">%</span>
                </p>
            </div>
        </div>
    );
}