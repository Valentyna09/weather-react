import './Weather.css';

export default function Weather() {
    return (
         <div className="weatherdiv">
            {/* <!-- HEADER  --> */}
            <div>
                <form className="search-form">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                autoFocus="on"
                                autoComplete="off"
                                id="city"
                                className="form-control shadow-sm city" />
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="row row-cols-auto">
                                <div className="col-sm-10 col-lg-9 search-div">
                                    <input type="submit" value="Search" className="form-control btn btn-primary shadow-sm search" />
                                </div>
                                <div className="col-sm-2 col-lg-3 location">
                                    <a className="button">
                                        <i className="fa-solid fa-location-dot" title="Current Location"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* <!-- Current weather  --> */}
            <div className="row current-weather">
                <div className="col-sm-12 col-lg-4 mt-3">
                    <h1 id="city-name" className="text-center">Kharkiv</h1>
                    <p className="date">
                        Last update: <br/> <span id="currentDayTime"> Monday 10:00</span>
                    </p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 temperature">
                    <p>
                        <span id="tempNow">28</span>
                        <span className="temp-cf">
                            <a href="#" id="celsius" className="active-link">℃</a> |
                            <a href="#" id="fahrenheit">℉</a>
                        </span>
                    </p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 weather-description">
                    <div>
                        <img src="" alt="clear" id="main-icon" />
                        <p id="sky-now" className="d-inline">scattered clouds</p>
                    </div>
                    <p className="ms-4">
                        <i className="fa-solid fa-wind windNow"></i>Wind:
                        <span className="wind-main">3</span>
                        <span className="units">km/h</span>
                    </p>
                    <p className="ms-4">
                        <i className="fa-solid fa-droplet"></i> Humidity:
                        <span className="humidity-main">15</span>
                        <span className="units">%</span>
                    </p>
                </div>
            </div>

            {/* <!-- Weather cards  --> */}
            {/* <div id="weather-forecast-cards"></div> */}
        </div>
    );
}