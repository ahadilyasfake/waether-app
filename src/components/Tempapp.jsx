import React, { useState } from "react";
import './css/style.css'
import axios from 'axios';
import moment from 'moment';
import ToglleSwitch from './toggle'
import Loder from './loder2'
const TempApp = () => {

  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);





  const getWeather = (e) => {
    e.preventDefault();
    console.log("I am click handler")
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c36b0ca0183c421e87161527222210&q=${city}&days=8&aqi=no&alerts=no`)
      .then(function (response) {
        console.log(response.data);
        setWeatherData(response.data)
      });
    if (city === "") {
      setValid(true)
    } else {

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        
      }, 1000);
    }
  };



  var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


  function theme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
      targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
  };
  /// alert
  if (city === "") {
    console.log("qwe")
  } else {
    console.log("optp122")
  }
  setTimeout(() => {
    setValid(false)

  }, 5000);

  //////



  return (

    <>

    
    <>

{loading ? (
  <Loder />
) : (
  <>
  {valid ? (<div className="high">
<div class="alert alert-warning alert-danger fade show width" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</div>) : false
}

    <div className="btn">

      <ToglleSwitch sx={{ m: 2 }} onChange={theme} defaultChecked />

      <span className={`${(true) ? "lableLight" : "lableDark"}`}>Dark mode</span>

    </div>
    
    <div className={`container`}>
      {(weatherData === null) ? null : (
        <>
          <div className="weather-side">

            <div className="weather-gradient" />
            <div className="date-container">
              <h2 className="date-dayname">{moment(weatherData.location.localtime).format('dddd')}</h2><span className="date-day">{moment(weatherData.location.localtime).format('MMM/D/YYYY')}
              </span><i className="location-icon" data-feather="map-pin" />
              <span className="location">{weatherData.location.country}</span>

            </div>
            <div className="weather-container"><i className="weather-icon" data-feather="sun" />
              <h1 className="weather-temp">{weatherData.location.name}</h1>

              <h2 className="weather-temp"> {Math.round(weatherData?.current?.temp_c)}°C</h2>
              <div className="weather-icon flex">
                <img src={weatherData.current.condition.icon} alt="" />
                <h3 className="weather-desc"> {weatherData.current.condition.text}</h3>
              </div>
            </div>
          </div>
          <div className="info-side">
            <div className="today-info-container">
              <div className="today-info">
                <div className="precipitation"> <span className="title">PRESSURE</span><span className="value"> {weatherData.current.pressure_mb}  pascal</span>
                  <div className="clear" />
                </div>
                <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">  {weatherData.current.humidity}%</span>
                  <div className="clear" />
                </div>
                <div className="wind"> <span className="title">wind</span><span className="value">{weatherData.current.wind_kph} km/h</span>
                  <div className="clear" />
                </div>
              </div>
            </div>

            <div className="week-container">
              <ul className="week-list">
                <li className="active"><i className="day-icon" data-feather="sun" /><span className="day-name"> {moment(weatherData.location.localtime).format('ddd')}</span><span className="day-temp">{Math.round(weatherData?.current?.temp_c)}°C</span></li>

                <li><i className="day-icon" data-feather="cloud" /><span className="day-name">{moment(weatherData.forecast.forecastday[0].date).format('ddd')}</span><span className="day-temp">  {Math.round(weatherData.forecast.forecastday[0].day.avgtemp_c)
                }°C </span></li>
                <li><i className="day-icon" data-feather="cloud-snow" /><span className="day-name">{moment(weatherData.forecast.forecastday[1].date).format('ddd')}</span><span className="day-temp">{Math.round(weatherData.forecast.forecastday[1].day.avgtemp_c)
                }°C</span></li>
                <li><i className="day-icon" data-feather="cloud-rain" /><span className="day-name">{moment(weatherData.forecast.forecastday[2].date).format('ddd')}</span><span className="day-temp">{Math.round(weatherData.forecast.forecastday[2].day.avgtemp_c)
                }°C</span></li>

                <li><i className="day-icon" data-feather="cloud-rain" /><span className="day-name">{moment(weatherData.forecast.forecastday[3].date).format('ddd')}</span><span className="day-temp">{Math.round(weatherData.forecast.forecastday[3].day.avgtemp_c)
                }°C</span></li>


                <li><i className="day-icon" data-feather="cloud" /><span className="day-name">{moment(weatherData.forecast.forecastday[4].date).format('ddd')}</span><span className="day-temp">  {Math.round(weatherData.forecast.forecastday[4].day.avgtemp_c)
                }°C </span></li>
                <li><i className="day-icon" data-feather="cloud-snow" /><span className="day-name">{moment(weatherData.forecast.forecastday[5].date).format('ddd')}</span><span className="day-temp">{Math.round(weatherData.forecast.forecastday[5].day.avgtemp_c)
                }°C</span></li>
                <li><i className="day-icon" data-feather="cloud-rain" /><span className="day-name">{moment(weatherData.forecast.forecastday[6].date).format('ddd')}</span><span className="day-temp">{Math.round(weatherData.forecast.forecastday[6].day.avgtemp_c)
                }°C</span></li>
                <div className="clear" />
              </ul>
            </div>
          </div>

        </>)}


      <>
        <form onSubmit={
          getWeather}>
          <div className="location-container"><input className="location-button" type="search" name="" id="" onChange={(event) => {
            setCity(event.target.value)
          }} />
            <button className="btn btn-primary" id="btn" type="submit" > Search</button>
          </div>
        </form>
      </>
    </div>

  </>
)}
</> 

   


    </>

  )


}

export default TempApp;
