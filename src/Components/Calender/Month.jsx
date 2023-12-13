import React from "react";
import Day from "./Day";
export default function Month({ month, setOpen, rowIdx }) {
  return (
    <>
      <div className="flex-1 grid grid-cols-7 text-center ">
        <div className="border border-b-0 rounded-tl-lg">Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="flex-1 grid grid-cols-7 grid-rows-5">
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} setOpen={setOpen} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
