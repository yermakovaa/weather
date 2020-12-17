import { Component } from 'react';
// import Container from './components/Container';
import WeatherDisplay from './components/WeatherDisplay';

const PLACES = ['London', 'Moscow', 'Kiev', 'Minsk'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay name={'12345'} />
      </div>
    );
  }
}
export default App;
