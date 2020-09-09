import React from "react";
import Search from "./SearchBar";
import Weather from "./Weather";

function Home(props) {
  return (
    <div>
      <Search getWeather={props.getWeather} className="search" />
      {props.check ? (
        <Weather temp={props.temp} weather={props.weather} city={props.City} />
      ) : (
        <div className="intro">
          Get the whether data of any city in the world
        </div>
      )}
    </div>
  );
}

export default Home;
