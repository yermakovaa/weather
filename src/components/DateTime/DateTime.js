import { useState, useEffect, useRef } from 'react';
import { Month, Weekday, Day } from '../../helpers/utils';
import clockIcon from '../../images/clock.png';
import s from './DateTime.module.css';

function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => tick(), 1000);

    return () => {
      stop();
    };
  }, []);

  const tick = () => {
    setTime(new Date().toLocaleTimeString('en-US', { timeStyle: 'short' }));
  };

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={s.wrapper}>
      <img
        className={s.icon}
        src={clockIcon}
        alt="time icon"
        width="32"
        height="32"
      />
      <p className={s.time}>{time}</p>
      <p className={s.date}>
        {Weekday}, {Month} {Day}
      </p>
    </div>
  );
}

export default Clock;
