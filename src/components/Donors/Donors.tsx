import React from "react";
import { Container } from "react-bootstrap";
import DonorSingle from "../DonorSingle/DonorSingle";

interface Idonor {
    img: string;
    name: string;
    email: string;
    phone: string;
    group: string;
}

const donorData: Idonor[] = [
    {
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Random Donor1",
        email: "random1@gmail.com",
        phone: "02297331753",
        group: "B+",
    },
    {
        img: "https://randomuser.me/api/portraits/men/10.jpg",
        name: "Random Donor2",
        email: "random2@gmail.com",
        phone: "02297331753",
        group: "A+",
    },
    {
        img: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Random Donor3",
        email: "random3@gmail.com",
        phone: "02297331753",
        group: "O+",
    },
    {
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Random Donor4",
        email: "random4@gmail.com",
        phone: "02297331753",
        group: "AB+",
    },
    {
        img: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Random Donor5",
        email: "random5@gmail.com",
        phone: "02297331753",
        group: "O-",
    },
];

const Donors = () => {
    return (
        <>
            <Container>
                <div
                    className="
                        row row-cols-1 row-cols-md-3
                        gx-4
                        gy-5
                        my-4
                        d-flex
                        justify-content-center
                    "
                >
                    {donorData.map((donor, index) => (
                        <DonorSingle key={index} donor={donor}></DonorSingle>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Donors;
