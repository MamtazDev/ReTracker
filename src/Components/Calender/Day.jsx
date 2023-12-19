import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import CountDown from "./CountDown";
import GlobalContext from "../../context/GlobalContext";
import lock from "../../assets/lock.png";

export default function Day({ day, rowIdx, setOpen, eventData }) {
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
      ? "bg-primary text-white rounded-full w-6 h-6 text-xs font-normal flex items-center justify-center"
      : "text-xs font-normal text-slate-950";
  }

  // dayEvents.length && console.log("DayEvents:", dayEvents);

  const handleOpen = (e, idx) => {
    e.stopPropagation();
    setOpen(true);
    setSelectedEvent(idx);
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
                onClick={() => handleOpen(idx)}
                className={`border-l-8 border-l-${evt.label} min-h-[43px]  h-full bg-${evt.label}-200 w-full py-3 px-[6px]  text-gray-600 text-sm rounded-[4px] overflow-hidden truncate`}
              >
                {/* <CountDown evt={evt} /> */}
                {/* Data {evt.title} */}
                {/* <p>Data {evt.label}</p> */}

                {/* <p>Data {evt.startTime}</p> */}
                <button className="text-white text-xs font-normal flex gap-[2px] rounded-full items-center bg-red-500 mb-1 py-[2px] px-2">
                  <img src={lock} alt="" />
                  27h:23m
                </button>
                <p className="text-sm font-bold text-slate-950 mb-1">
                  Consultation
                </p>
                <p className="text-xs font-normal text-slate-500">9 Hours</p>
                {/* <p>Data {evt.startTime}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
