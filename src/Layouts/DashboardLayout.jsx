import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Calender/Header";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-6">
      <div>sidebar</div>
      <div className="col-span-5">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
