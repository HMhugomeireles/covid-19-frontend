import React from "react";
import { BarChart, Bar, ResponsiveContainer, CartesianGrid } from "recharts";

const Chart = props => {
  const { confirmed, recovered, deaths } = props.data;

  const data = [
    { uv: confirmed.value },
    { pv: recovered.value },
    { amt: deaths.value }
  ];

  return (
    <ResponsiveContainer width="80%" height={220}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Bar name="Confirmed" dataKey="uv" fill="#ff9900" />
        <Bar name="Recovered" dataKey="pv" fill="#009900" />
        <Bar name="Deaths" dataKey="amt" fill="#cc0000" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
