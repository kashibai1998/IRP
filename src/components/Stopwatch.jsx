import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function Stopwatch() {
  const [time, setTime] = useState(300);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time == 0) {
      setRunning(false);
    }
    return () => {
      clearInterval(timer);
    };
  }, [running]);

  const format = (sec) => {
    let m = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0');
    let s = (sec % 60).toString().padStart(2, '0');

    return `${m}:${s}`;
  };

  return (
    <div>
      <div>Timer</div>
      <button style={{ marginRight: '20px' }} onClick={() => setRunning(true)}>
        Start
      </button>
      <button style={{ marginRight: '20px' }} onClick={() => setRunning(false)}>
        Stop
      </button>
      <button
        onClick={() => {
          setRunning(false);
          setTime(300);
        }}
      >
        reset
      </button>

      <div>{format(time)}</div>
    </div>
  );
}

//start
//stop
//00
