import Loader from 'react-loader-spinner';

const LoaderComponent = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <h2>{props.message || 'Loading..'}</h2>
                <Loader type="Bars" color="#00BFFF" height={80} width={80}/>
            </header>
        </div>
    )
};

export default LoaderComponent;