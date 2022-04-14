import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const FavoriteDoctors = () => {
    const [favoriteDoctors, setFavoriteDoctors] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [remove, setRemove] = useState(false);

    useEffect(() => {
        setLoading(true);
        const favoriteList = localStorage.getItem("favdoc");
        if (favoriteList) {
            const authors = JSON.parse(favoriteList);
            setFavoriteDoctors(authors);
        }
        setLoading(false);
    }, [remove]);

    return (
        <Container>
            <h2
                className="fw-bold text-center"
                style={{ color: "rgb(69, 142, 167)" }}
            >
                Favorite Doctors
            </h2>
            {favoriteDoctors.map((doctor) => (
                <SingleDoctor
                    key={doctor._id}
                    doctor={doctor}
                    remove={remove}
                    setRemove={setRemove}
                ></SingleDoctor>
            ))}
        </Container>
    );
};

export default FavoriteDoctors;
