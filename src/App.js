import React from "react";
import Search from "./components/SearchBar";
import Weather from "./components/Weather";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: "",
      weather: "",
      city: "",
      check: false,
      hasError: false,
    };
  }

  callApi(city, country) {
    const API_KEY = "0c2311c83e5c6bb1cc4ae0483498117c";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          temp: res.main.temp,
          weather: res.weather[0].main,
          city: city,
          check: true,
        });
      });
  }

  getWeather = (event) => {
    event.preventDefault();
    const city = event.target[0].value;
    const country = event.target[1].value;
    this.callApi(city, country);
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error);
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Search getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
