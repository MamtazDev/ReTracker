import React, { useEffect, useState } from 'react'
import moment from 'moment';



function CountDown({evt}) {

  const startTime = moment(); // Set your start time here
  const endTime = startTime.clone().add(48, 'hours');

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeRemaining() {
    const now = moment();
    const duration = moment.duration(endTime.diff(now));
    const remaining = {
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
    return remaining;
  }
    console.log("evt.startTime:", evt.startTime);
    console.log("evt.startTime:", evt.endTime);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <button className=''>
      {timeRemaining.hours}h:{timeRemaining.minutes}m:{timeRemaining.seconds}s</button>
    </div>
  )
}

export default CountDown
