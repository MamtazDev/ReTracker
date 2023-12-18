import dayjs from "dayjs";
import { useContext, useState } from "react";

import SmallCalendar from "./SmallCalendar";
import GlobalContext from "../../context/GlobalContext";
import CreateEventButton from "./CreateEventButton";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

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
    <header className="px-4 py-2 flex items-center w-[80%] mx-auto mb-5">
      {/* <img src={logo} alt="calendar" className="mr-2 w-12 h-12" /> */}

      <h1 className="mr-10 text-xl text-gray-500 fond-bold">ReTracker</h1>

      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>

      <div>
        <h2
          onClick={() => setIsSmallCallenderActive(!isSmallCallenderActive)}
          className="ml-4 text-xl text-gray-500 font-bold"
        >
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
        {isSmallCallenderActive && <SmallCalendar />}
      </div>
      <CreateEventButton />
    </header>
  );
}
