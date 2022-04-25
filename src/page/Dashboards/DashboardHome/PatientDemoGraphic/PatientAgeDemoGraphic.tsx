import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const data = [
  { name: 'Age 0-10 years ', value: 400 },
  { name: 'Age 10-20 years ', value: 300 },
  { name: 'Age 20-30 years', value: 300 },
  { name: 'Age 40+', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: { cx: any, cy: any, midAngle: any, innerRadius: any, outerRadius: any, percent: any, index: any }) => {
  const radius = props.innerRadius + (props.outerRadius - props.innerRadius) * 0.5;
  const x = props.cx + radius * Math.cos(-props.midAngle * RADIAN);
  const y = props.cy + radius * Math.sin(-props.midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > props.cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(props.percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PatientDemoGraphic = () => {
  return (
    <div>
      <div>

        <h3 className='my-4 text-center'>Age Percentage Wise Patients</h3>
        <ResponsiveContainer width="98%" aspect={3} >
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

        </ResponsiveContainer>


      </div>

    </div>
  );
};

export default PatientDemoGraphic;