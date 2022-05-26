import React, { useCallback, useEffect, useState } from "react";
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
    count,
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
        {payload._id || "Unknown"}
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
      >{`Doctors ${count}`}</text>
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

interface Idata {
  _id: string;
  count: number;
}

const SpecialistChart = () => {
  const [data, setData] = useState<Idata[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_: any, index: any) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  useEffect(() => {
    fetch("https://doctor-meet-server.herokuapp.com/api/v1/doctors/statistics")
      .then((res) => res.json())
      .then((data) => setData(data.result.specialistData));
  }, []);

  return (
    <Container className="">
      <div className="text-center">
        <div>
          <h1 className="fw-bold">
            <span className="text-info">Doctors </span>Analytics
          </h1>
          <span className="text-success fs-5">Bangladesh</span>
          <p className="text-secondary my-3">
            <small>
              There are so many doctors in our country. Amongst we need the more
              and more specialist who only serves for a particular interest.
            </small>
          </p>
        </div>
      </div>
      <div
        className="row border p-2 m-3"
        style={{
          borderRadius: "10px",
        }}
      >
        <div className="col-12 col-md-8">
          <div
            className="d-flex justify-content-center"
            style={{
              width: "100%",
              height: 400,
            }}
          >
            <ResponsiveContainer className="">
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
                  dataKey="count"
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
        <div className="col-12 col-md-4 d-flex align-items-center">
          <div>
            <p className="fs-5 pe-5">
              <span className="text-primary">Specialists</span>
            </p>
            {data.map((item, index) => (
              <p
                className="d-flex justify-content-between"
                key={item._id}
                style={{ color: COLORS[index], margin: "2px" }}
              >
                <span>{item._id || "Unknown"}</span>
                <span>{item.count}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SpecialistChart;
