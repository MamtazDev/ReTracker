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
      Analysis: 70,
      Consultation: 50,
    },
    {
      name: "Feb",
      Repairs: 200,
      Management: 100,
      Analysis: 50,
      Consultation: 25,
    },
    {
      name: "Mar",
      Repairs: 200,
      Management: 140,
      Analysis: 80,
      Consultation: 40,
    },
    {
      name: "Apr",
      Repairs: 200,
      Management: 100,
      Analysis: 50,
      Consultation: 20,
    },
    {
      name: "May",
      Repairs: 300,
      Management: 140,
      Analysis: 70,
      Consultation: 30,
    },
    {
      name: "Jun",
      Repairs: 300,
      Management: 100,
      Analysis: 50,
      Consultation: 20,
    },
    {
      name: "Jul",
      Repairs: 280,
      Management: 180,
      Analysis: 140,
      Consultation: 100,
    },
    {
      name: "Aug",
      Repairs: 240,
      Management: 140,
      Analysis: 70,
      Consultation: 50,
    },
    {
      name: "Sep",
      Repairs: 300,
      Management: 200,
      Analysis: 70,
      Consultation: 30,
    },
    {
      name: "Oct",
      Repairs: 300,
      Management: 200,
      Analysis: 120,
      Consultation: 100,
    },
    {
      name: "Nov",
      Repairs: 140,
      Management: 80,
      Analysis: 40,
      Consultation: 20,
    },
    {
      name: "Dec",
      Repairs: 300,
      Management: 80,
      Analysis: 50,
      Consultation: 10,
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
