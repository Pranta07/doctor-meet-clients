import React, { useEffect, useState } from "react";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = () => {
    const [doctors, setDoctors] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://immense-beyond-64415.herokuapp.com/doctors/all")
            .then((res) => res.json())
            .then((data) => setDoctors(data.result));
    }, []);

    return (
        <>
            {doctors.map((doctor) => (
                <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>
            ))}
        </>
    );
};

export default AllDoctors;
