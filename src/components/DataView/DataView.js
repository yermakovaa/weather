import DateTime from '../DateTime';
import tempIcon from '../../images/ico-temperature.png';
import windIcon from '../../images/wind.png';
import dropIcon from '../../images/drop.png';
import s from './DataView.module.css';

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
    <main className={s.wrapper}>
      <DateTime />
      <div>
        <h1>
          {name}, {country}
        </h1>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="weather icon"
          className={s.logo}
        />
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
