import React, { useEffect, useState } from "react";
import moment from "moment";
import lock from "../../assets/lock.png";

function CountDown({ evt }) {
  const [timeElapsed, setTimeElapsed] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    const startDateTime = new Date(`${evt.date} UTC`);
    
    const calculateTimeElapsed = () => {

      // console.log("evt", evt)

      const currentDateTime = new Date();

      const timeDifference = currentDateTime - startDateTime;

      // console.log("startDateTime", currentDateTime)

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeElapsed({ hours, minutes });
    };

    const intervalId = setInterval(calculateTimeElapsed, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [evt.startTime]);

  return (
    <div className="flex justify-center">
      <button className="text-white text-xs font-normal flex gap-[2px] rounded-full items-center bg-red-500 mb-1 py-[2px] px-2">
        <img src={lock} alt="" />
        
       {timeElapsed.hours > 48 ? <p>Times is up</p> : <p>{timeElapsed.hours} h{timeElapsed.minutes} m</p> }
       
      </button>
    </div>
  );
}

export default CountDown;
