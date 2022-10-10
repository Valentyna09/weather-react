import React, {useState} from "react";

export default function Temperature(props) {
    let [unit, newUnit] = useState("celsius");
    
    function showCelsius(event) {
        event.preventDefault();
        newUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        newUnit("fahrenheit");
    }
    function convertToFahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }
    if (unit === "celsius") {
        return (
            <p>
                <span id="tempNow">{Math.round(props.celsius)}</span>
                <span className="temp-cf">
                    <button id="celsius" className="active-link">℃</button> |
                    <button id="fahrenheit" onClick={showFahrenheit}>℉</button>
                </span>
            </p>
        );
    } else {
        return (
            <p>
                <span id="tempNow">{Math.round(convertToFahrenheit())}</span>
                <span className="temp-cf">
                    <button id="celsius" onClick={showCelsius}>℃</button> |
                    <button id="fahrenheit" className="active-link">℉</button>
                </span>
            </p>
        );
    }
}