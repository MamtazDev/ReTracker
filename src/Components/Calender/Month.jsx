import React from "react";
import Day from "./Day";
export default function Month({ month, setOpen, rowIdx }) {
  return (
    <>
      <div className="flex-1 grid grid-cols-7 text-center ">
        <p className="border border-b-0 rounded-tl-lg py-2">Sun</p>
        <p className="py-2 border border-b-0">Mon</p>
        <p className="py-2 border border-b-0">Tue</p>
        <p className="py-2 border border-b-0">Wed</p>
        <p className="py-2 border border-b-0">Thu</p>
        <p className="py-2 border border-b-0">Fri</p>
        <p className="py-2 border border-b-0 rounded-tr-lg">Sat</p>
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
