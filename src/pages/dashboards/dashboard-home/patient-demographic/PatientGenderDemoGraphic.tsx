import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const data = [
    { name: 'Male', value: 400 },
    { name: 'Female ', value: 300 },

];
const COLORS = ['#0088FE', '#FFBB28'];

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

                <h3 className='my-4 text-center'>Patient Gender</h3>
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