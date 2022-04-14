import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = () => {
    const [doctors, setDoctors] = useState<any[]>([]);
    const [remove, setRemove] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://immense-beyond-64415.herokuapp.com/doctors/all")
            .then((res) => res.json())
            .then((data) => setDoctors(data.result))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Container>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                doctors.map((doctor) => (
                    <SingleDoctor
                        key={doctor._id}
                        doctor={doctor}
                        remove={remove}
                        setRemove={setRemove}
                    ></SingleDoctor>
                ))
            )}
        </Container>
    );
};

export default AllDoctors;
