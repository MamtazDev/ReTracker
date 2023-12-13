import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Calender/Header";
import DashboardSidebar from "../Components/Calender/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6">
      <DashboardSidebar />
      <div className="col-span-5">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
