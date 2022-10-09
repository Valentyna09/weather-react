// import logo from './logo.svg';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity = "Kharkiv"/>
        <p className="author-link">
          <a href="https://github.com/Valentyna09/weather-react">Open-sourse code</a> by Valentyna Rudenko
        </p>
      </div>
    </div>
  );
}
