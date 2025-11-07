import React, { useEffect } from 'react';
import s from './styles.module.css';

const WindDirections = ["N", "E", "W", "S", "NE", "NW", "SE", "SW"] as const;

const Conditions = ["cloudy", "rain", "sunny", "stormy"] as const;

const Emojis = {
    cloudy: "☁️",
    rain: "🌧️",
    sunny: "☀️",
    stormy: "⛈️"
} as const;

type TWeatherItem =   { 
    cityName: string, 
    latLon: [number, number], 
    forecast: { 
        tempC: number, 
        wind: { 
            speed: number, 
            direction: typeof WindDirections[number]
        },
        conditions: typeof Conditions[number][]
    }[]
}

const App: React.FC = () => {
  return <>
  <h1>Complete the task!</h1></>;
};

export default App;
