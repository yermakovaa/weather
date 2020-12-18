import Clock from '../Clock';
import { Month, Weekday, Day } from '../../helpers/utils';
import clockIcon from '../../images/clock.png';
import tempIcon from '../../images/ico-temperature.png';
import windIcon from '../../images/wind.png';
import dropIcon from '../../images/drop.png';
// import s from './DataView.module.css';

function DataView({
  weatherData: {
    name,
    country,
    temp,
    temp_min,
    temp_max,
    feels_like,
    humidity,
    description,
    icon,
    speed,
  },
}) {
  return (
    <main>
      <div>
        <img src={clockIcon} alt="time icon" width="32" height="32" />
        <Clock />
        <p>
          {Weekday}, {Month} {Day}
        </p>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
        <h1>
          {name}, {country}
        </h1>
        <p className="description">{description}</p>
      </div>
      <img src={tempIcon} alt="" />
      <ul>
        <li>Feels like {feels_like} °</li>
        <li>Current: {temp} °С</li>
        <li>High: {temp_max} °С</li>
        <li>Low: {temp_min} °С</li>
      </ul>
      <ul>
        <li>
          <img src={windIcon} alt="" />
          <p>Wind Speed: {speed} м/с</p>
        </li>
        <li>
          <img src={dropIcon} alt="" />
          <p>Humidity: {humidity} %</p>
        </li>
      </ul>
    </main>
  );
}

export default DataView;
