const SeasonDisplay = (props) => {
    return (
        <div>
            <h2>{props.temp}</h2>
            <h2>{props.info}</h2>
            <h2>{props.city}</h2>
        </div>
    );
};

export default SeasonDisplay;