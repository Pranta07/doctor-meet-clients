import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Availability from "../Availability/Availability";
import Departments from "../Departments/Departments";
import { Idoctor } from "../FavoriteDoctors/FavoriteDoctors";
import Gender from "../Gender/Gender";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = () => {
    const [doctors, setDoctors] = useState<Idoctor[]>([]);
    const [remove, setRemove] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:5000/doctors/all?specialist=All&&gender=All&&page=1&&rows=6`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDoctors(data.result))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Container>
            <div className="row">
                <div className="col-md-4">
                    <Departments></Departments>
                    <Availability></Availability>
                    <Gender></Gender>
                </div>
                <div className="col-md-8">
                    {loading ? (
                        <div className="d-flex justify-content-center">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
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
                </div>
            </div>
        </Container>
    );
};

export default AllDoctors;
