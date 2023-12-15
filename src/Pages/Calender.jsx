import React, { useContext, useEffect, useState } from "react";
import CalendarHeader from "../Components/Calender/CalendarHeader";
import Month from "../Components/Calender/Month";
import EventModal from "../Components/Calender/EventModal";
import { getMonth } from "../Utils/DayMatrix";
import GlobalContext from "../context/GlobalContext";
import Sidebar from "../Components/Calender/Sidebar";
import Successfull from "../Components/Calender/Successfull";

const Calender = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  
  const [successfullOpen, setSuccessfullOpen] = useState(false);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  // console.log("currenMonth:", currenMonth);

  return (
    <div >
      {showEventModal && <EventModal setSuccessfullOpen={setSuccessfullOpen} />}
      {successfullOpen && (
        <Successfull setSuccessfullOpen={setSuccessfullOpen} />
      )}

      <div className="flex w-full">
        <div className="px-8 pt-8 w-full ">
          <CalendarHeader />
          <Month month={currenMonth} setOpen={setOpen} />
        </div>
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Calender;
