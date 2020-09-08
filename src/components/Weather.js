import React, { Component } from "react";
import { weatherConditions } from "./WheatherConditions";

function Weather(props) {
  const dateBuilder = (d) => {
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
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      <div className="weather-box">
        <div className="weather">
          {weatherConditions[props.weather]}
          {props.weather}
        </div>
        <div className="temp">{Math.round(props.temp)}°c</div>
      </div>
      <div className="location-box">
        <div className="location">{props.City}</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
    </div>
  );
}

export default Weather;
