import React, { useEffect, useState } from "react";
import moment from "moment";
import lock from "../../assets/lock.png";

function CountDown({ evt }) {
  const startTime = moment(); // Set your start time here
  const endTime = startTime.clone().add(48, "hours");

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
  // console.log("evt.startTime:", evt.startTime);
  // console.log("evt.startTime:", evt.endTime);

  return (
    <div className="flex justify-center">
      <button className="text-white text-xs font-normal flex gap-[2px] rounded-full items-center bg-red-500 mb-1 py-[2px] px-2">
        <img src={lock} alt="" />
        {timeRemaining.hours}h:{timeRemaining.minutes}m
      </button>
      {/* {timeRemaining.hours}h:{timeRemaining.minutes}m:{timeRemaining.seconds}s</button> */}
    </div>
  );
}

export default CountDown;
