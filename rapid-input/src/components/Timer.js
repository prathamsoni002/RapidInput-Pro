import React, { useState, useEffect } from 'react';
import '../App.css';

const Timer = ({ timerDuration, handleTimerCompletion }) => {
  const [timeRemaining, setTimeRemaining] = useState(timerDuration);

  useEffect(() => {
    let timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(time => time - 1);
      } else {
        clearInterval(timer);
        handleTimerCompletion();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, handleTimerCompletion]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer">
      Timer: <span className="timer-countdown">{formatTime(timeRemaining)}</span>
    </div>
  );
};

export default Timer;
