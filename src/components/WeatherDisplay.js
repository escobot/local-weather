const WeatherDisplay = (props) => {
    return (
        <div>
            <h2>{Math.round(props.temp - 273.15)} °C</h2>
            <h2>{props.info}</h2>
            <h2>{props.city}</h2>
        </div>
    );
};

export default WeatherDisplay;