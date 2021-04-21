import React from 'react';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { lat: null }
  }

  render() {
    // get the user's geolocation
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return (
      <div className="App">
        <header className="App-header">
            <SeasonDisplay />
        </header>
      </div>
    );
  }
}

export default App;
