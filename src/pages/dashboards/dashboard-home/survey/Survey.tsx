import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Survey = () => {
    const data = [
        {
            name: "2022-1",
            2021: 4000,
            2022: 2400,
            amt: 2400,
        },
        {
            name: "2022-2",
            2021: 3000,
            2022: 1398,
            amt: 2210,
        },
        {
            name: "2022-3",
            2021: 2000,
            2022: 9800,
            amt: 2290,
        },
        {
            name: "2022-4",
            2021: 2780,
            2022: 3908,
            amt: 2000,
        },
        {
            name: "2022-5",
            2021: 1890,
            2022: 4800,
            amt: 2181,
        },
        {
            name: "2022-6",
            2021: 2390,
            2022: 3800,
            amt: 2500,
        },
        {
            name: "2022-7",
            2021: 3490,
            2022: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <h3 className="text-center text-secondary my-5">
                Hospital Patients Survey
            </h3>
            <ResponsiveContainer width="98%" aspect={3}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="2022"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="2021" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Survey;
