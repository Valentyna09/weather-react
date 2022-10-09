// import logo from './logo.svg';
import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <p className="author-link">
        <a href="https://github.com/Valentyna09/weather-react">Open-sourse code</a> by Valentyna Rudenko
      </p>
    </div>
  );
}

export default App;
