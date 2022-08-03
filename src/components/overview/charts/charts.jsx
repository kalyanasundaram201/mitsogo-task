import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './charts.css'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#B5B3FB', '#80E2FF', '#F49FA8', '#FFDF94'];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div>
      <div className="salesHeading">Sales Distribution</div>
      <PieChart width={350} height={350} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={235}
          cy={150}
          innerRadius={75}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

      </PieChart>
      <div className="bottomWrap">
        <div className="stringwrap">
          <div className="div1"></div>
          <div>
          <span className="span2">France</span>
          <span className="span3">1467 sales</span>
          </div>
          
        </div>
        <div className="stringwrap">
          <div className="div2"></div>
          <div>
          <span className="span2">Italy</span>
          <span className="span3">3970 sales</span>
          </div>
          
        </div>
      </div>

      <div className="bottomWrap1">
        <div className="stringwrap">
          <div className="div3"></div>
          <div>
          <span className="span2">Japan</span>
          <span className="span3">1467 sales</span>
          </div>
          
        </div>
        <div className="stringwrap">
          <div className="div4"></div>
          <div>
          <span className="span2">canada</span>
          <span className="span3">3970 sales</span>
          </div>
          
        </div>
      </div>

      </div>
    );
  }
}
