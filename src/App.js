import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: "",
      city: "",
      check: false,
      hasError: false,
    };
  }

  callApi(city, country) {
    console.log(city);
    const API_KEY = "0c2311c83e5c6bb1cc4ae0483498117c";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
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
    console.log(this.state.city);
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home
                getWeather={this.getWeather}
                check={this.state.check}
                temp={this.state.temp}
                weather={this.state.weather}
                City={this.state.city}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
