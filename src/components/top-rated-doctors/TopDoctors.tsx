import React, { useEffect, useState } from "react";
import TopSingle from "./TopSingle";
import { Idoctor } from "../favorite-doctors/FavoriteDoctors";

const TopDoctors = () => {
  const [tops, setTops] = useState<Idoctor[]>([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/v1/doctors/all?specialist=All&&gender=All&&page=${1}&&rows=${4}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTops(data.result));
  }, []);

  return (
    <div>
      <p className="text-center fw-bold mt-5" style={{ color: "#00acb1" }}>
        Meet Our Team
      </p>
      <h1 className="fw-bold text-center" style={{ color: "#005963" }}>
        Our Creative Experts
      </h1>
      <hr className="hr-w mx-auto" />
      <div className="container mx-auto row g-3">
        {tops.map((top) => (
          <TopSingle key={top._id} top={top}></TopSingle>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
