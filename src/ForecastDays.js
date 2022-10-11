import React from "react";
import Icon from "./Icon";

export default function ForecastDays(props) {
    function day() {
        let dateNow = new Date(props.infoWeather.dt * 1000);
        
        let daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",];
        let dayWeek = daysWeek[dateNow.getDay()];

        let date = dateNow.getDate();

        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let month = months[dateNow.getMonth()];
    
        return `${dayWeek}, ${date} ${month}`;
    }

    return (
        <div className="col-lg-2 col-md-5 div-cards ">
                    <h2 className="days">{day()}</h2>
                    <div className ="card">
                        <div className ="card-body">
                            <Icon icon={props.infoWeather.weather[0].icon} size={55} />
                            <h2 className="days">{props.infoWeather.weather[0].description}</h2>
                            <p className ="card-text">
                                <i className ="fa-solid fa-temperature-low" title="temperature"></i>
                                <span className="day-temp" title="day temperature">{Math.round(props.infoWeather.temp.max)}</span>
                                <span className ="celsius">℃ </span>
                                <span className ="separate">| </span>
                                <span className ="night-temp" title="night temperature">{Math.round(props.infoWeather.temp.min)}</span>
                                <span className ="celsius">℃</span>
                            </p>
                            <p className ="card-text">
                                <i className ="fa-solid fa-wind" title="wind"></i>
                                <span className ="wind">Wind: </span>
                                <span className ="wind">{Math.round(props.infoWeather.wind_speed)} </span>
                                <span className ="units">km/h</span>
                            </p>
                            <p className ="card-text">
                                <i className ="fa-solid fa-droplet" title="humidity"></i>
                                <span className ="humidity">Humidity: </span>
                                <span className ="humidity">{Math.round(props.infoWeather.humidity)} </span>
                                <span className ="units">%</span>
                            </p>
                        </div>
                    </div>
                </div>
    );
}