import React, { PureComponent, useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState("");

  const genres = ["React", "Javascript", "Node", "jQuery", "Angular"];

  const colors = ["#d16aff", "#bb44f0", "#9614d0", "#660094", "#310047"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;

    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}`}
      </text>
    ) : null;
  };

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          outerRadius={130}
          label={renderCustomizedLabel}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
/*          {data.map((entry, index) => (
  <Cell key={`cell-${index}`} fill={colors[index]} />
  ))}
  <Legend verticalAlign="bottom" height={42} />
*/
