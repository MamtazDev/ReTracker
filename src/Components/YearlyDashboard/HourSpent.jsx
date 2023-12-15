import React from "react";
import ChartHeader from "../../Shared/ChartHeader";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HourSpent = () => {
  const data = [
    {
      name: "Jan",
      Repairs: 300,
      Management: 200,
      Analysis: 300,
      Consultation: 100,
    },
    {
      name: "Feb",
      Repairs: 200,
      Management: 28,
      Analysis: 26,
      Consultation: 25,
    },
    {
      name: "Mar",
      Repairs: 100,
      Management: 300,
      Analysis: 20,
      Consultation: 400,
    },
    {
      name: "Apr",
      Repairs: 200,
      Management: 400,
      Analysis: 100,
      Consultation: 200,
    },
    {
      name: "May",
      Repairs: 300,
      Management: 50,
      Analysis: 20,
      Consultation: 300,
    },
    {
      name: "Jun",
      Repairs: 400,
      Management: 100,
      Analysis: 500,
      Consultation: 200,
    },
    {
      name: "Jul",
      Repairs: 100,
      Management: 50,
      Analysis: 300,
      Consultation: 100,
    },
    {
      name: "Aug",
      Repairs: 50,
      Management: 20,
      Analysis: 300,
      Consultation: 50,
    },
    {
      name: "Sep",
      Repairs: 200,
      Management: 200,
      Analysis: 100,
      Consultation: 300,
    },
    {
      name: "Oct",
      Repairs: 300,
      Management: 200,
      Analysis: 400,
      Consultation: 100,
    },
    {
      name: "Nov",
      Repairs: 400,
      Management: 500,
      Analysis: 300,
      Consultation: 200,
    },
    {
      name: "Dec",
      Repairs: 500,
      Management: 200,
      Analysis: 200,
      Consultation: 100,
    },
  ];
  const formatYAxisTick = (value) => `${value} Hrs`;
  return (
    <div className="border border-slate-200 rounded-xl p-6">
      <ChartHeader title="Hours Spent" />

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            // width={500}
            // height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="" />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Repairs"
              stackId="1"
              strokeWidth={2}
              stroke="#10B981"
              fill="#ECFDF5"
            />
            <Area
              type="monotone"
              dataKey="Management"
              stackId="1"
              strokeWidth={2}
              stroke="#3B82F6"
              fill="#EFF6FF"
            />
            <Area
              type="monotone"
              dataKey="Analysis"
              stackId="1"
              strokeWidth={2}
              stroke="#F59E0B"
              fill="#FFFBEB"
            />
            <Area
              type="monotone"
              dataKey="Consultation"
              stackId="1"
              strokeWidth={2}
              stroke="#6366F1"
              fill="#EEF2FF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8">
        <p className="flex items-center gap-2 text-sm font-medium text-slate-950">
          <span className="bg-emerald-500 w-2 h-2 rounded-full block"></span>
          Repairs
        </p>
        <p className="flex items-center gap-2 text-sm font-medium text-slate-950">
          {" "}
          <span className="bg-blue-500 w-2 h-2 rounded-full block"></span>
          Management
        </p>
        <p className="flex items-center gap-2 text-sm font-medium text-slate-950">
          {" "}
          <span className="bg-[#F59E0B] w-2 h-2 rounded-full block"></span>
          Analysis
        </p>
        <p className="flex items-center gap-2 text-sm font-medium text-slate-950">
          {" "}
          <span className="bg-indigo-500 w-2 h-2 rounded-full block"></span>
          Consultation
        </p>
      </div>
    </div>
  );
};

export default HourSpent;
