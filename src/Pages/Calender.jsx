import React, { useContext, useEffect, useState } from "react";
import CalendarHeader from "../Components/Calender/CalendarHeader";
import Month from "../Components/Calender/Month";
import EventModal from "../Components/Calender/EventModal";
import { getMonth } from "../Utils/DayMatrix";
import GlobalContext from "../context/GlobalContext";
import Sidebar from "../Components/Calender/Sidebar";

const Calender = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  console.log("currenMonth:", currenMonth);

  return (
    <div>
      {showEventModal && <EventModal />}

      <div className="flex w-full">
        <div className="p-8 w-full border">
          <CalendarHeader />
          <Month month={currenMonth} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Calender;
