import React from 'react';
import axios from 'axios';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {

  APP_ID = ''
  state = { 
    city: null, 
    temp: null, 
    info: null, 
    err: 'error' 
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.fetchValues(position.coords.latitude, position.coords.longitude),
      err => this.setState({ err })
    );
  }

  async fetchValues(lat, lon) {
    const values = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${this.APP_ID}`);
    this.setState({ 
      city: values.data.name,
      temp: values.data.main.temp, 
      info: values.data.weather[0].description
    });
  }

  render() {
    if (this.state.city)
      return (
        <div className="App">
          <header className="App-header">
              <SeasonDisplay city={this.state.city} temp={this.state.temp} info={this.state.info} />
          </header>
        </div>
      );
    else
        return <h1>{this.state.err}</h1>
  }
}

export default App;
