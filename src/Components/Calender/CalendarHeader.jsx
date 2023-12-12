import dayjs from "dayjs";
import { useContext, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import filter from "../../assets/filter.png";
import plus from "../../assets/add.png";

import SmallCalendar from "./SmallCalendar";
import GlobalContext from "../../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex, setShowEventModal } = useContext(GlobalContext);

  const [isSmallCallenderActive, setIsSmallCallenderActive] = useState(false);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="flex items-center w-full mx-auto mb-8 relative">
      {/* <img src={logo} alt="calendar" className="mr-2 w-12 h-12" /> */}

      {/* <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>

      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button> */}

      <div className="flex justify-between w-full items-center gap-3">
        <div className="flex items-center gap-5">
          <button
            className="w-9 h-9 border border-slate-200 rounded-full flex justify-center items-center text-primary text-2xl"
            onClick={handlePrevMonth}
          >
            <GrFormPrevious />
          </button>

          <h2
            onClick={() => setIsSmallCallenderActive(!isSmallCallenderActive)}
            className="text-3xl text-slate-950 font-bold"
          >
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </h2>
          <button
            className="w-9 h-9 border border-slate-200 rounded-full flex justify-center items-center text-primary text-2xl"
            onClick={handleNextMonth}
          >
            <MdNavigateNext />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex gap-2 items-center text-xs font-bold border py-2 px-4 border-primary text-primary rounded-full ">
            <img src={filter} alt="" />
            Filter
          </button>
          <button
          onClick={() =>  setShowEventModal(true)}

            style={{ width: "unset", height: "unset", borderRadius: "9999px" }}
            className="icon py-2 px-4 gap-2"
          >
            <img src={plus} alt="" />
            Add Hours
          </button>
        </div>
      </div>

      {isSmallCallenderActive && (
        <div className="absolute bg-white top-20 border p-4 rounded-lg">
          {" "}
          <SmallCalendar />{" "}
        </div>
      )}
    </header>
  );
}
