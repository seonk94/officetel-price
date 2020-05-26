import * as React from 'react'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ZAxis,
} from 'recharts';
import moment from 'moment';

function BasicScatterChart() {
  const data = [
    { x: moment('2020-01-01').unix(), y: 200, z: 2 },
    { x: moment('2020-02-01').unix(), y: 100, z: 2 },
    { x: moment('2020-03-01').unix(), y: 300, z: 4 },
    { x: moment('2020-04-01').unix(), y: 250, z: 2 },
    { x: moment('2020-05-01').unix(), y: 400, z: 5 },
    { x: moment('2020-06-01').unix(), y: 280, z: 2 },
  ];

  return (
    <ScatterChart
      width={334}
      height={253}
      margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
    >
      <CartesianGrid />
      <XAxis
        type="number"
        dataKey="x"
        name="Date"
        domain={[1577804400, 1590937200]}
        tickFormatter={(unixTime) => moment(unixTime * 1000).format('YYYY-MM')} />
      <YAxis type="number" dataKey="y" name="보증금" unit="만원" />
      <ZAxis type="number" dataKey="z" range={[100, 400]} name="거래수" unit="회" />
      <Tooltip
        cursor={{ strokeDasharray: '3 3' }}
        formatter={(value, name) => name === 'Date' ? moment(Number(value) * 1000).format('YYYY-MM') : value} />
      <Scatter name="A school" data={data} fill="#8884d8">
      </Scatter>
    </ScatterChart>
  );
}

export default BasicScatterChart;
