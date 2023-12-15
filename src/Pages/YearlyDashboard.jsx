import React from "react";
import CalendarHeader from "../Components/Calender/CalendarHeader";
import BannerList from "../Components/YearlyDashboard/BannerList";

const YearlyDashboard = () => {
  return (
    <div className="p-8">
      <CalendarHeader />
      <BannerList />
    </div>
  );
};

export default YearlyDashboard;
