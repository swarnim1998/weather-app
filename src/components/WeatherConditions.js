import React from "react";
import {
  WiRainMix,
  WiDaySunny,
  WiThunderstorm,
  WiSnow,
  WiCloudy,
  WiHail,
  WiFog,
} from "weather-icons-react";

export const weatherConditions = {
  Rain: <WiRainMix size={24} color="#fff" />,
  Clear: <WiDaySunny size={24} color="#fff" />,
  Thunderstorm: <WiThunderstorm size={50} color="#fff" />,
  Clouds: <WiCloudy size={50} color="#fff" />,
  Snow: <WiSnow size={50} color="#fff" />,
  Drizzle: <WiHail size={50} color="#fff" />,
  Haze: <WiHail size={50} color="#fff" />,
  Mist: <WiFog size={50} color="#fff" />,
};
