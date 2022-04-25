import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import Availability from "../Availability/Availability";
import Departments from "../Departments/Departments";
import DoctorsPagination from "../DoctorsPagination/DoctorsPagination";
import { Idoctor } from "../FavoriteDoctors/FavoriteDoctors";
import Gender from "../Gender/Gender";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = () => {
    const [doctors, setDoctors] = useState<Idoctor[]>([]);
    const [remove, setRemove] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [dept, setDept] = useState("All");
    const [gender, setGender] = useState("All");
    // const [av, setAv] = useState(false);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:5000/doctors/all?specialist=${dept}&&gender=${gender}&&page=${page}&&rows=${6}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setDoctors(data.result);
                setTotal(data.total);
            })
            .finally(() => setLoading(false));
    }, [page, dept, gender]);

    return (
        <Container>
            <div className="row">
                <div className="col-12 col-md-4">
                    <Departments
                        dept={dept}
                        setDept={setDept}
                        setPage={setPage}
                    ></Departments>
                    {/*  <Availability
                        av={av}
                        setAv={setAv}
                        setPage={setPage}
                    ></Availability> */}
                    <Gender
                        gender={gender}
                        setGender={setGender}
                        setPage={setPage}
                    ></Gender>
                </div>
                <div className="col-12 col-md-8">
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
                    <DoctorsPagination
                        total={total}
                        page={page}
                        handleChange={handleChange}
                    ></DoctorsPagination>
                </div>
            </div>
        </Container>
    );
};

export default AllDoctors;
