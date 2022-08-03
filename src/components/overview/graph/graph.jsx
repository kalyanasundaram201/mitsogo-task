import React, {PureComponent} from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip,AreaChart,Area} from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 7000,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 4000,
    pv: 4500,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 4750,
    pv: 3000,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 4000,
    pv: 4600,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 7000,
    pv: 2000,
    amt: 2500,
  },
];

export default class Graph extends PureComponent {

  render() {
    return (
		<AreaChart width={490} height={443} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      
  )}
}


