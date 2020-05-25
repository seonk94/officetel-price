import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export interface Props {
  dataKeys: string[];
  data: any[];
}
function BasicLineChart({ dataKeys, data }: Props) {
  return (
    <LineChart width={334} height={253} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      {dataKeys.map((key) => (
        <Line key={key} type="monotone" dataKey={key} stroke="#8884d8"></Line>
      ))}
    </LineChart>
  )
}

export default BasicLineChart;
