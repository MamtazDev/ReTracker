import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import CountDown from "./CountDown";
import GlobalContext from "../../context/GlobalContext";

export default function Day({ day, rowIdx, setOpen }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  // dayEvents.length && console.log("DayEvents:", dayEvents);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <div className="border-r border-t border-gray-200 flex gap-2 flex-row lg:flex-col p-0 lg:p-2 min-h-16 h-auto lg:h-[138px]">
      <header className="w-16 lg:w-auto border-r lg:border-none flex flex-col items-center justify-center">
        <p className="lg:hidden text-sm ">{day.format("ddd").toUpperCase()}</p>

        <p
          className={`text-sm text-slate-950 font-normal text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer w-full p-2 lg:p-0"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        <div className="">
          <div className="flex flex-col gap-2 h-[90px] overflow-y-scroll no-scrollbar">
            {dayEvents?.map((evt, idx) => (
              <div
                key={idx}
                // onClick={() => setSelectedEvent(evt)}
                onClick={handleOpen}
                className={` border-l-8 border-${evt.label}-800 min-h-[43px]  h-full bg-${evt.label}-200 w-full py-3 px-[6px]  text-gray-600 text-sm rounded-[4px] overflow-hidden truncate`}
              >
                {/* <CountDown evt={evt} /> */}
                {/* Data {evt.title} */}
                {/* <p>Data {evt.label}</p> */}
                <p>Data {evt.startTime}</p>
                {/* <p>Data {evt.startTime}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}