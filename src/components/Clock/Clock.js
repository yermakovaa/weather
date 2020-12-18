import { useState, useEffect, useRef } from 'react';

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

  return <p>{time}</p>;
}

export default Clock;
