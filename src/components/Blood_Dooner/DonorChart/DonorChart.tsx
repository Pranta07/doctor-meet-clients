import React, { useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
    "lightblue",
    "lightgreen",
    "lightpink",
    "#f4e8d1",
    "#d2bfc4",
    "#fee8d6",
    "#ffcc99",
    "#f4daf1",
];

const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`Donors ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const DonorChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    const data = [
        { name: "B+", value: 11 },
        { name: "B-", value: 8 },
        { name: "A+", value: 3 },
        { name: "A-", value: 7 },
        { name: "O+", value: 13 },
        { name: "O-", value: 2 },
        { name: "AB+", value: 3 },
        { name: "AB-", value: 1 },
    ];

    return (
        <Container className="py-5 my-5">
            <div className="row">
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div>
                        <h1 className="fw-bold pt-3">
                            <span className="text-danger">Blood</span> Donors
                            Statistics
                        </h1>
                        <span className="text-success fs-5">Bangladesh</span>
                        <p className="text-secondary my-3">
                            <small>
                                Roll up your sleeves and contribute proactively
                                in this noble cause. A drop of blood can save a
                                life! Donate blood and get real blessings. Your
                                droplets of blood may create an ocean of
                                happiness.
                            </small>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div
                        className="d-flex justify-content-center"
                        style={{ width: "100%", height: 400 }}
                    >
                        <ResponsiveContainer>
                            <PieChart width={600} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DonorChart;
