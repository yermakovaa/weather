import { Component } from 'react';
// import PropTypes from 'prop-types';
import apiService from '../../services/apiService';
// import s from './WeatherDisplay.module.css';

class WeatherDisplay extends Component {
  state = {
    weatherData: null,
  };

  componentDidMount() {
    const name = this.props.name;
    apiService(name).then(data => {
      this.setState({ weatherData: data });
    });
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = `http://openweathermap.org/img/w/'${weather.icon}.png`;
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°С</p>
        <p>High: {weatherData.main.temp_max}°С</p>
        <p>Low: {weatherData.main.temp_min}°С</p>
        <p>Wind Speed: {weatherData.wind.speed} м/с</p>
      </div>
    );
  }
}

export default WeatherDisplay;
