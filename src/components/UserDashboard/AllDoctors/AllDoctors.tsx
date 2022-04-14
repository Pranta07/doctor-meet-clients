import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = () => {
    const [doctors, setDoctors] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://immense-beyond-64415.herokuapp.com/doctors/all")
            .then((res) => res.json())
            .then((data) => setDoctors(data.result));
    }, []);

    return (
        <Container>
            {doctors.map((doctor) => (
                <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>
            ))}
        </Container>
    );
};

export default AllDoctors;
