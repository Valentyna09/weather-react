import React from "react";
import LastUpdate from "./LastUpdate";
import Icon from "./Icon";
import Temperature from "./Temperature";

export default function CurrentWeather(props) {
    return (
            <div className="row current-weather">
                <div className="col-sm-12 col-lg-4 mt-3">
                       <h1 id="city-name" className="text-center">{props.data.city}</h1>
                    <p className="date">
                           Last update: <br />
                           <span id="currentDayTime">
                               <LastUpdate date={props.data.date} />
                           </span>
                    </p>
                </div>

            <div className="col-sm-12 col-md-6 col-lg-4 temperature">
                <Temperature celsius={props.data.temperature}/>
                    {/* <p>
                        <span id="tempNow">{Math.round(props.data.temperature)}</span>
                        <span className="temp-cf">
                            <button id="celsius" className="active-link">℃</button> |
                            <button id="fahrenheit">℉</button>
                        </span>
                    </p> */}
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 weather-description">
                    <div>
                        <Icon icon={props.data.icon} alt={ props.data.description} />
                        {/* <img src={props.data.icon} alt="clear" id="main-icon" /> */}
                        <p id="sky-now" className="d-inline">{props.data.description}</p>
                    </div>
                    <p className="ms-2">
                        <i className="fa-solid fa-wind windNow"></i>Wind:
                           <span className="wind-main"> {Math.round(props.data.wind)} </span>
                        <span className="units">km/h</span>
                    </p>
                    <p className="ms-2">
                        <i className="fa-solid fa-droplet"></i>Humidity:
                           <span className="humidity-main"> {Math.round(props.data.humidity)} </span>
                        <span className="units">%</span>
                    </p>
                </div>
            </div>
    );
}