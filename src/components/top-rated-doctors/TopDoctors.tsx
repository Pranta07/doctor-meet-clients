import React, { useEffect, useState } from "react";
import TopSingle from "./TopSingle";
import { Idoctor } from "../favourite-doctors/FavoriteDoctors";

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
            <h1
                className="fw-bold text-center"
                style={{ color: "rgb(69, 142, 167)" }}
            >
                Meet Our Experts
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
