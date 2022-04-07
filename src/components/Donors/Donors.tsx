import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DonorSingle from "../DonorSingle/DonorSingle";

interface Idonor {
    img: string;
    name: string;
    email: string;
    phone: string;
    district: string;
    group: string;
}

const donorData: Idonor[] = [
    {
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Random Donor1",
        email: "random1@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "B+",
    },
    {
        img: "https://randomuser.me/api/portraits/men/10.jpg",
        name: "Random Donor2",
        email: "random2@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "A+",
    },
    {
        img: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Random Donor3",
        email: "random3@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "O+",
    },
    {
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Random Donor4",
        email: "random4@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "AB+",
    },
    {
        img: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Random Donor5",
        email: "random5@gmail.com",
        phone: "02297331753",
        district: "Dhaka",
        group: "O-",
    },
];

const Donors = (props: any) => {
    const { group, district } = props.data;
    const [displayDonors, setDisplayDonors] = useState({});

    console.log(group, " ", district);

    return (
        <>
            <Container>
                <div
                    className="
                        row row-cols-1 row-cols-md-2 row-cols-lg-3
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
