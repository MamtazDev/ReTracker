import React, { useState } from "react";
import logo from "../../assets/dashboardLogo.png";
import calender from "../../assets/calender.png";
import dashboard from "../../assets/dashboard.png";
import properties from "../../assets/properties.png";
import workers from "../../assets/workers.png";
import profile from "../../assets/userProfile.png";
import settings from "../../assets/settings.png";
import { Link, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AddHoursModal from "./AddHoursModal";

const DashboardSidebar = () => {
  let location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-indigo-950 text-base font-medium text-white h-screen flex flex-col justify-between">
      <div>
        <Link className="px-6 py-5" to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="m-6">
          <button
            style={{ borderRadius: "9999px" }}
            className="icon flex items-center gap-[10px] px-4 py-3  w-full "
            onClick={() => setOpen(true)}
          >
            <FaPlus />
            Add Hours
          </button>
        </div>
        <p className="text-indigo-200 text-xs font-bold pl-6 mb-6">Dashboard</p>
        <Link
          to="/dashboard/calender"
          className={`${
            location.pathname === "/dashboard/calender" && "text-indigo-400"
          } px-6 py-4 flex items-center gap-3 `}
        >
          <img src={calender} alt="" />
          Calendar Overview
        </Link>
        <Link
          to="/dashboard/calender"
          className={`${
            location.pathname === "/" && "text-indigo-400"
          } px-6 py-4 flex items-center gap-3  mb-6`}
        >
          <img src={dashboard} alt="" />
          Yearly Dashboard
        </Link>
        <p className="text-indigo-200 text-xs font-bold pl-6 mb-6">Manage</p>
        <Link
          to="/dashboard/calender"
          className={`${
            location.pathname === "/" && "text-indigo-400"
          } px-6 py-4 flex items-center gap-3 `}
        >
          <img src={properties} alt="" />
          Properties
        </Link>
        <Link
          to="/dashboard/calender"
          className={`${
            location.pathname === "/" && "text-indigo-400"
          } px-6 py-4 flex items-center gap-3 `}
        >
          <img src={workers} alt="" />
          Co Workers
        </Link>
      </div>
      <div>
        <p className="text-indigo-200 text-xs font-bold pl-6 mb-6">User</p>
        <Link
          to="/dashboard/calender"
          className={`${
            location.pathname === "/" && "text-indigo-400"
          } px-6 py-4 flex items-center gap-3 `}
        >
          <img src={profile} alt="" />
          Profile
        </Link>
        <Link
          to="/dashboard/calender"
          className={`${
            location.pathname === "/" && "text-indigo-400"
          } px-6 py-4 flex items-center gap-3 `}
        >
          <img src={settings} alt="" />
          Settings
        </Link>
      </div>
      {open && <AddHoursModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default DashboardSidebar;
