import React from "react";

export default function Temperature(props) {
        return (
            // Temperature 
            <p>
                <span id="tempNow">{Math.round(props.celsius)}</span>
                <span className="temp-cf">℃</span>
            </p>
        );
}