import React from 'react';
import axios from 'axios';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {

  APP_ID = 'b3f15555f7e25985e095c86fbbe6ad0d'
  state = { 
    city: null, 
    temp: null, 
    info: null, 
    err: null 
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.fetchValues(position.coords.latitude, position.coords.longitude),
      err => this.setState({ err })
    );
  }

  async fetchValues(lat, lon) {
    const values = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${this.APP_ID}`);
    this.setState({ 
      city: values.data.name,
      temp: values.data.main.temp, 
      info: values.data.weather[0].description
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <SeasonDisplay city={this.state.city} temp={this.state.temp} info={this.state.info} />
        </header>
      </div>
    );
  }
}

export default App;
