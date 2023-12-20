import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import CountDown from "./CountDown";
import GlobalContext from "../../context/GlobalContext";

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
    console.log("events", events)
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-primary text-white rounded-full w-6 h-6 text-xs font-normal flex items-center justify-center"
      : "text-xs font-normal text-slate-950";
  }

  // dayEvents.length && console.log("DayEvents:", dayEvents);

  const handleOpen = (e, idx, evt) => {
    e.stopPropagation();
    setOpen(true);
    console.log("clicked");
    setSelectedEvent(evt);
  };

  return (
    <div className="border-r border-t border-gray-200 flex gap-2 flex-row lg:flex-col p-0 lg:p-2 min-h-16 h-auto lg:h-[138px]">
      <header
        onClick={() => setShowEventModal(true)}
        className="w-16 lg:w-auto border-r lg:border-none flex flex-col items-center justify-center"
      >
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
          // console.log("day from day column: ", day)
        }}
      >
        <div className="">
          <div className="flex flex-col gap-1 h-[90px] overflow-y-scroll no-scrollbar">
            {dayEvents?.map((evt, idx) =>
              dayEvents.length === 1 ? (
                <div
                  key={idx}
                  style={{ borderLeft: `3px solid ${colorPalate[evt.category]}` }}
                  // onClick={() => setSelectedEvent(evt)}
                  onClick={(e) =>{
                    setSelectedEvent(evt);
                    handleOpen(e, idx, evt)}}
                  className={` text-center min-h-[43px]  h-full bg-purple-200 w-full py-3 px-[6px]  text-gray-600 text-sm rounded-[4px] overflow-hidden truncate`}
                >
                  <CountDown evt={evt} />

                
                  {/* <p>Data {evt.label}</p> */}

                  {/* <p>Data {evt.startTime}</p> */}

                  <p className="text-sm font-bold text-slate-950 mb-1">
                  {evt.category}
                  </p>
                 
                  <StartEndDiff evt={evt} />
                  
                </div>
              ) : (
                <div
                  style={{ borderLeft: `3px solid ${colorPalate["Repairs"]}-500` }}
                  key={idx}
                  onClick={(e) => handleOpen(e, idx)}
                  className={`flex items-center justify-between   min-h-[43px]  h-full bg-purple-200 w-full py-3 px-[6px]  text-gray-600 text-sm rounded-[4px] overflow-hidden truncate`}
                >
                  <div>
                    <p className="text-xs font-bold text-slate-950 mb-1">
                      Consultation s
                    </p>
                    <p className="text-xs font-normal text-slate-500">
                      9 Hours
                    </p>
                  </div>
                  <CountDown evt={evt} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const colorPalate = {
  "Consultation":"Purple",
  "Repairs":"Pink",
  "Management":"Green",
  "Analysis":"Yellow",
}


function StartEndDiff({evt}) {
  return (
    <>
     <p className="text-xs font-normal text-slate-500">9 Hours</p>
    </>
  )
}
