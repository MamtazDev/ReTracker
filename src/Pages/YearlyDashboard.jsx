import React from "react";
import CalendarHeader from "../Components/Calender/CalendarHeader";
import BannerList from "../Components/YearlyDashboard/BannerList";
import HourSpent from "../Components/YearlyDashboard/HourSpent";
import Category from "../Components/YearlyDashboard/Category";
import ExpenseGraph from "../Components/YearlyDashboard/ExpenseGraph";
import TaskCompletion from "../Components/YearlyDashboard/TaskCompletion";

const YearlyDashboard = () => {
  return (
    <div className="p-8">
      <CalendarHeader />
      <BannerList />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <HourSpent />
        <Category />
        <ExpenseGraph />
        <TaskCompletion />
      </div>
    </div>
  );
};

export default YearlyDashboard;
