import React from "react";

const ChartHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <p className="font-bold text-base text-gray-900">{title}</p>
      <div className="flex items-center">
        <button className="px-5 py-2 font-medium text-primary border border-primary rounded-full text-sm ">
          12 Months
        </button>
        <button className="px-5 py-2 text-slate-500  text-sm font-medium">
          6 Months
        </button>
        <button className="px-5 py-2 text-slate-500  text-sm font-medium">
          30 Days
        </button>
      </div>
    </div>
  );
};

export default ChartHeader;
