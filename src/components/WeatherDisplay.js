import React, { useState } from 'react';

const WeatherDisplay = ({city, temp, info}) => {

    const [inCelsius, setInCelsius] = useState(true);

    const temperature = () => {
        if (inCelsius)
            return `${Math.round(temp - 273.15)} °C`
        else
            return `${temp } °F`
    }

    return (
        <div>
            <h2 onClick={() => setInCelsius(!inCelsius)}>
                {temperature()}
            </h2>
            <h2>{info}</h2>
            <h2>{city}</h2>
        </div>
    );
};

export default WeatherDisplay;
