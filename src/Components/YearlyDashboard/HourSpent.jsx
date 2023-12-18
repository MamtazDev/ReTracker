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
import GraphLegend from "./GraphLegend";

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
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="" />
            <XAxis dataKey="name" tickLine={false} tick={{ fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={formatYAxisTick}
              label={{
                position: "insideLeft",
                angle: -90,
                dy: -10,
                style: { textAnchor: "middle", fontSize: 12, lineHeight: 1 },
              }}
            />

            <Tooltip />
            <Area
              type="monotone"
              dataKey="Repairs"
              strokeWidth={2}
              stroke="#10B981"
              fill="#ECFDF5"
            />
            <Area
              type="monotone"
              dataKey="Management"
              strokeWidth={2}
              stroke="#3B82F6"
              fill="#EFF6FF"
            />
            <Area
              type="monotone"
              dataKey="Analysis"
              strokeWidth={2}
              stroke="#F59E0B"
              fill="#FFFBEB"
            />
            <Area
              type="monotone"
              dataKey="Consultation"
              strokeWidth={2}
              stroke="#6366F1"
              fill="#EEF2FF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <GraphLegend />
    </div>
  );
};

export default HourSpent;
