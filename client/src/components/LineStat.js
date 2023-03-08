import React from "react";
import "./css/LineStat.css"
import {XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area} from "recharts";

const data = [
  {
    name: "Janv",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Fevr",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mars",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Avril",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "mai",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "juin",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "juill",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function LineStat() {
  return (
    <div className="linestat">
      <h4>frequentation du site</h4>
      <AreaChart
        width={900}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 30,
          right: 30,
          left: 0,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </div>
  );
}
