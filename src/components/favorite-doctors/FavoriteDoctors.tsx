import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleDoctor from "../single-doctor/SingleDoctor";
import Page from "../Page";

export interface Idoctor {
    _id: string;
    name: string;
    email: string;
    img: string;
    specialist: string;
    review: number;
    address: {
        city: string;
        suite: string;
        street: string;
    };
    experience: number;
    gender: string;
    free: boolean;
    appointmentDay: string[];
    phone: string;
    visit: number;
    approved: boolean;
}

const FavoriteDoctors = () => {
    const [favoriteDoctors, setFavoriteDoctors] = useState<Idoctor[]>([]);
    const [loading, setLoading] = useState(true);
    const [remove, setRemove] = useState(false);

    useEffect(() => {
        setLoading(true);
        const favoriteList = localStorage.getItem("fav-doc");
        if (favoriteList) {
            const authors = JSON.parse(favoriteList);
            setFavoriteDoctors(authors);
        }
        setLoading(false);
    }, [remove]);

    return (
        <Page title="Favorite Doctors">
            <Container>
                <h2
                    className="fw-bold text-center"
                    style={{ color: "rgb(69, 142, 167)" }}
                >
                    Favorite Doctors
                </h2>
                {!loading && favoriteDoctors.length === 0 && (
                    <div
                        className="alert alert-info text-center w-50 mt-5 mx-auto"
                        role="alert"
                    >
                        Ooops! No Favorite Doctors!
                    </div>
                )}
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    favoriteDoctors.map((doctor) => (
                        <SingleDoctor
                            key={doctor._id}
                            doctor={doctor}
                            remove={remove}
                            setRemove={setRemove}
                        ></SingleDoctor>
                    ))
                )}
            </Container>
        </Page>
    );
};

export default FavoriteDoctors;
